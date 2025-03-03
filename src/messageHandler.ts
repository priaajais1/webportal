import { iframeId, MessageType, ObjectType } from './constants';
import { incidentsData } from './incidentDetails';

let listenerRef: (event: MessageEvent) => void;

const listener = (event: MessageEvent, addMessage: (message: string) => void) => {
  if (event.data.type === MessageType.caseRequest) {
    addMessage('Received get case data for id' + event.data.data.objectId);
    const inc = incidentsData.filter((incident) => incident.caseId === event.data.data.objectId)?.[0];
    if (inc) {
      sendMessage(inc.caseId, ObjectType.Case, MessageType.caseResponse, inc);
    }
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

