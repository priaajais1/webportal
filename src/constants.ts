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
  getData: 'get-portal-data-request',
  getEmailData: 'get-portal-email-data-request',
  getKnowledgeArticleData: 'get-portal-knowledge-article-data-request',
  getInteractionData: 'get-portal-interaction-data-request',
}

export const MessageTypeResponses: Record<string, string> = {
[MessageType.NavigateRequest]: 'navigate-response',
  [MessageType.caseRequest]: 'get-portal-case-data-response',
  [MessageType.getData]: 'get-portal-data-response',
  [MessageType.getEmailData]: 'get-portal-email-data-response',
  [MessageType.getKnowledgeArticleData]: 'get-portal-knowledge-article-data-response',
  [MessageType.getInteractionData]: 'get-portal-interaction-data-response',
};

