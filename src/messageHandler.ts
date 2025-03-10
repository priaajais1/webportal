import { iframeId, MessageType, ObjectType } from './constants';
import { incidentsData } from './SampleData/incidentDetails';
import { searchKnowledgeArticles } from './knowledgeArticles';
import { emailDetails } from './SampleData/EmailDetails';
import { interactionDetails } from './SampleData/InteractionDetails';

let listenerRef: (event: MessageEvent) => void;

const listener = (event: MessageEvent, addMessage: (message: string) => void) => {
  const eventData = event.data;
  const objectId = eventData?.data?.objectId;
  const objectType = eventData?.data?.objectType;
  if (eventData.type === MessageType.caseRequest) {
    addMessage('Received get case data for id' + objectId);
    const inc = incidentsData.filter((incident) => incident.caseId === objectId)?.[0];
    if (inc) {
      sendMessage(inc.caseId, ObjectType.Case, MessageType.caseResponse, inc);
    }
  } else if(eventData.type === MessageType.getData && eventData.objectType === ObjectType.KnowledgeArticle) {
    addMessage(`Received get data request, objectType: knowledge article objectId: ${eventData.objectId}`);
    const articles = searchKnowledgeArticles(eventData.objectId);
    sendMessage(eventData.objectId, ObjectType.KnowledgeArticle, MessageType.getDataResponse, articles);
    addMessage(`Sent data response for objectId: ${eventData.objectId}, articles: ${articles.length}`);
  } else if(eventData.type === MessageType.getEmailData) {
    addMessage(`Received get email data request, objectType: Email objectId: ${objectId}`);
    const emailData = emailDetails[objectId];
    sendMessage(objectId, ObjectType.Email, MessageType.getEmailDataResponse, emailData);
    addMessage(`Sent email data response for objectId: ${objectId}`);
  } else if (eventData.type === MessageType.getData && objectType === ObjectType.Interaction) {
    addMessage(`Received get data request, objectType: interaction objectId: ${eventData.objectId}`);
    const interactionData = interactionDetails.filter(x => x.interactionId === objectId)[0];
    sendMessage(objectId, ObjectType.Interaction, MessageType.getDataResponse, interactionData);
    addMessage(`Sent data response for objectId: ${objectId}`);
  }
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

