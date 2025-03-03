export const iframeId = 'copilotforservice-ppe';
export const enum ObjectType {
  None,
  Case,
  Email,
  Chat,
  PhoneCall,
  KnowledgeArticle,
  PageInfo,
  Context,
  Interaction,
} 

export const MessageType = {
  NavigateRequest: 'navigate-request',
  caseRequest: 'get-portal-case-data-request',
  caseResponse: 'get-portal-case-data-response'
}