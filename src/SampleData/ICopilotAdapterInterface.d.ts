export declare enum ObjectType {
  None = 0,
  Case = 1,
  Email = 2,
  Chat = 3,
  PhoneCall = 4,
  KnowledgeArticle = 5,
  PageInfo = 6,
  Context = 7,
  Interaction = 8
}
export declare enum Priority {
  High = 1,
  Medium = 2,
  Low = 3
}
export declare enum WorkItemType {
  Question = 1,
  Problem = 2,
  Request = 3
}
export interface ThirdPartyObject {
  objectType: ObjectType;
  objectId: string;
}
export interface IPluginConversationContext {
  case_id?: string;
  customer_id?: string;
  product_id?: string;
  product_name?: string;
  agent_user_id?: string;
  agent_aad_id?: string;
  case_number?: string;
  additional_context?: string;
  [x: string]: string | undefined;
}
export interface PluginContext {
  entityId: string;
  entityName: string;
  parameters?: string[];
  parameterValues?: IPluginConversationContext;
}
export interface GetDataRequest extends ThirdPartyObject {
  objectData?: PluginContext | any;
}
export interface Activity {
  record_id: string;
  type: string;
  activity_content: string;
  datetime: string;
  additional_context?: any;
}
export interface CaseData {
  description: string;
  product_name?: string;
  priority: Priority;
  subject?: string;
  customerName: string;
  caseType: WorkItemType;
  caseId: string;
  url: string;
  activities?: Activity[];
  caseStatus?: String;
}
export interface IncidentData {
  description: string;
  product_name?: string;
  priority: Priority;
  subject?: string;
  customerName: string;
  incidentType: WorkItemType;
  incidentStatus?: string;
  incidentId: string;
  url: string;
  activities?: Activity[];
}
export interface EmailData {
  to: string;
  from: string;
  subject: string;
  description: string;
  url: string;
  regardingCase?: CaseData[];
  regardingIncident?: IncidentData;
}
export interface KnowledgeArticleData {
  id: string;
  url: string;
  title: string;
  summary: string;
  extract: string;
  relevance: number;
  source: string;
}
export interface IConversationDetail {
  user?: string;
  user_type?: string;
  speaker_name?: string;
  text?: string;
  datetime?: string;
}
export interface InteractionData {
  interactionId: string;
  interactionNumber?: string;
  conversation: IConversationDetail[];
}
export interface GetDataResponse extends ThirdPartyObject {
  data: EmailData | CaseData | KnowledgeArticleData[] | PluginContext | InteractionData | {};
}
export interface ProcessDataRequest extends ThirdPartyObject {
  data: string;
}
export interface ProcessDataResponse extends ThirdPartyObject {
  success: boolean;
  message?: string;
}
export type OnPageNavigationCallbackFunction = (payload: ThirdPartyObject) => void;
export type newEventCallbackFunction = (payload: any) => void;
export interface ICopilotAdapter {
  initialize(): Promise<boolean>;
  onPageNavigation(callback: OnPageNavigationCallbackFunction): void;
  getData(request: GetDataRequest): Promise<GetDataResponse>;
  processData(request: ProcessDataRequest): Promise<ProcessDataResponse>;
  onNewEvent(callback: newEventCallbackFunction): void;
}
export interface QueryParams {
  filter?: string;
  fields?: string;
}
export declare const enum AuthorizationScheme {
  Basic = "Basic",
  Bearer = "Bearer",
  Digest = "Digest"
}
export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";
