import { iframeId, MessageType, MessageTypeResponses, ObjectType } from './constants';
import { incidentsData } from './SampleData/incidentDetails';
import { searchKnowledgeArticles } from './knowledgeArticles';
import { emailDetails } from './SampleData/EmailDetails';
import { interactionDetails } from './SampleData/InteractionDetails';

let listenerRef: (event: MessageEvent) => void;

const listener = (event: MessageEvent, addMessage: (message: string) => void) => {
  const eventData = event.data;
  
  // Skip processing if not a valid message type
  if (!eventData || !eventData.type || !Object.values(MessageType).includes(eventData.type)) {
    console.log('Skipping message with invalid or unknown type:', eventData?.type);
    return;
  }
  
  const objectId = eventData?.data?.objectId;
  const objectType = eventData?.data?.objectType;
  const dataFromWidget = eventData?.data?.data;
  addMessage(`Received message:${eventData.type} objectId: ${objectId} objectType: ${objectType}`);
  let appendToMessage = '';

  if (eventData.type === MessageType.caseRequest) {
    const inc = incidentsData.filter((incident) => incident.caseId === objectId)?.[0];
    if (inc) {
      sendMessage(inc.caseId, ObjectType.Case, MessageTypeResponses[MessageType.caseRequest], inc);
      appendToMessage = ':sent';
    }
  } else if (eventData.type === MessageType.getKnowledgeArticleData) {
    const articles = searchKnowledgeArticles(eventData.objectId);
    sendMessage(eventData.objectId, ObjectType.KnowledgeArticle, MessageTypeResponses[MessageType.getKnowledgeArticleData], [...dataFromWidget, ...articles]);
    appendToMessage = ` articles: ${articles.length}`;
  } else if (eventData.type === MessageType.getEmailData) {
    const emailData = emailDetails[objectId];
    sendMessage(objectId, ObjectType.Email, MessageTypeResponses[MessageType.getEmailData], emailData);
  } else if (eventData.type === MessageType.getInteractionData) {
    const interactionData = interactionDetails.filter(x => x.interactionId === objectId)[0];
    sendMessage(objectId, ObjectType.Interaction, MessageTypeResponses[MessageType.getInteractionData], interactionData);
  }

  addMessage(`Sent ${MessageTypeResponses[eventData.type]} for objectId: ${objectId}${appendToMessage}`);

  console.log(event);
};

export function setupMessageHandler(addMessage: (message: string) => void) {
  console.log('messagehandler');
  if (listenerRef) {
    window.removeEventListener('message', listenerRef);
  }
  listenerRef = (event) => listener(event, addMessage);
  window.addEventListener('message', listenerRef);
}

export function sendMessage(objectId: string, objectType: ObjectType, type: string, data: unknown = {}) {
  const iframeWindow = (document.getElementById(iframeId) as HTMLIFrameElement)?.contentWindow;
  iframeWindow?.postMessage({
    type: type,
    data: {
      objectId,
      objectType,
      data
    }
  }, '*');
}

