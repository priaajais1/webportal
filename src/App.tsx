import './App.css';
import { 
  MessageBar, 
  MessageBarType, 
  Stack, 
  IconButton,
  Dialog, 
  DialogType, 
  TextField, 
  DialogFooter, 
  PrimaryButton, 
  DefaultButton,
  Toggle,
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardActions
} from '@fluentui/react';
import { Incident } from './incident';
import React, { useEffect, useState } from 'react';
import { iframeId } from './constants';
import { setupMessageHandler } from './messageHandler';
import { CaseDetails } from './CaseDetails';
import { incidentsData } from './SampleData/incidentDetails';
import { emailDetails } from './SampleData/EmailDetails';
import { Email } from './Email';
import { EmailDetails } from './EmailDetails';
import { interactionDetails as interactionSampleData } from './SampleData/InteractionDetails'; // Changed from TaskDetails
import { Interaction } from './Interaction';
import { InteractionDetails } from './InteractionDetails';

function App() {
  const [messageBarText, setMessageBarText] = React.useState<string[]>([]);
  const [selectedIncident, setSelectedIncident] = React.useState<number | null>(null);
  const [selectedEmail, setSelectedEmail] = React.useState<string | null>(null);
  const [selectedInteraction, setSelectedInteraction] = React.useState<string | null>(null);
  
  // Settings state
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);
  const [widgetUrl, setWidgetUrl] = useState("https://copilotforservice-ppe.azureedge.net");
  const [dynamicsOrgUrl, setDynamicsOrgUrl] = useState("https://org88750969.crm10.dynamics.com");
  const [useCustomCopilotExtension, setUseCustomCopilotExtension] = useState(true);
  const [showMessageBar, setShowMessageBar] = useState(false);

  const cases = incidentsData.map((incident, index) => (
    <Incident
      key={index}
      index={index}
      onSelected={() => {
        setSelectedIncident(index);
        setSelectedEmail(null);       setSelectedInteraction(null);
      }
      }
      selected={selectedIncident}
    />  
    // <PrimaryButton
    // styles={{
    //   root: {
    //     width: 300,
    //     backgroundColor: selectedIncident === index ? 'green' : undefined,
    //   },
    //   textContainer: {
    //     width: 300,
    //     overflow: 'hidden',
    //   },
    //   label: {
    //     overflow: 'hidden',
    //     whiteSpace: 'nowrap',
    //     textOverflow: 'ellipsis',
    //   }
    // }}
    //   key={index}
    //   text={incident.subject}
    //   onClick={() => {
    //     setSelectedIncident(index);
    //     setSelectedEmail(null);
    //     setSelectedInteraction(null);
    //   }}
    // />
  ));

  const emailKeys = Object.keys(emailDetails);
  const emails = emailKeys.map((emailId) =>
    <Email
      key={emailId}
      emailId={emailId}
      selectedKey={selectedEmail}
      onSelected={() => {
        setSelectedEmail(emailId); 
        setSelectedIncident(null);
        setSelectedInteraction(null);
      }}
    />
  );

  const interactions = interactionSampleData.map((interaction) =>
    <Interaction
      key={interaction.interactionId}
      interactionId={interaction.interactionId}
      interactionNumber={interaction.interactionNumber || ''}
      selectedKey={selectedInteraction}
      onSelected={() => {
        setSelectedInteraction(interaction.interactionId);
        setSelectedIncident(null);
        setSelectedEmail(null);
      }}
    />
  );

  useEffect(() => {
    setupMessageHandler((message) => {
      setMessageBarText(prevMessages => {
        const updatedMessages = [...prevMessages, message.substring(0, 200)];
        return updatedMessages.length > 5 ? updatedMessages.slice(-5) : updatedMessages;
      });
    });
  }, []);

  // Generate iframe src URL
  const getIframeSrc = () => {
    return `${widgetUrl}/widget/index.html?dynamicsUrl=${dynamicsOrgUrl}&useCustomCopilotExtension=${useCustomCopilotExtension ? 1 : 0}`
    // return "https://copilotforservice-ppes1.azureedge.net/widget/index.html?dynamicsUrl=https://org88750969.crm10.dynamics.com&copilotExtensionUrl=https://embedcopilotnonprod.blob.core.windows.net/embedcopilotnonprodcontainer/portalExtension.js";

  };

  // Dialog config
  const dialogContentProps = {
    type: DialogType.normal,
    title: 'Settings',
    closeButtonAriaLabel: 'Close',
    subText: 'Override URL settings for the widget',
  };

  return (
    <div className="App" style={{height: '100vh', overflow:'hidden'}}>
      <Stack>
        <div id="header" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor:'rgb(0, 120, 212)', padding: '16px', height: '64px' }}>
          <h1 style={{color: 'white', marginLeft: '16px'}}>Contoso CRM</h1>
          <div style={{ position: 'absolute', right: 32, top: 32 }}>
            <IconButton
              styles={{ root: { color: 'white' } }}
              iconProps={{ iconName: 'Settings' }}
              title="Settings"
              ariaLabel="Settings"
              onClick={() => setIsSettingsDialogOpen(true)}
            />
          </div>
        </div>
        <Stack horizontal>
          
          <Stack.Item id="contoso-crm" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '70vw',
            height: 'calc(100vh - 96px)',
            textAlign: 'left'
          }}>
            <Stack horizontal>
              <Stack.Item grow={1}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left', padding: 16 }}>
                  <DocumentCard>
                    <DocumentCardTitle title="Incident" styles={{ root: { fontWeight: 'bold' } }} />
                    <DocumentCardDetails>
                      <div style={{padding : "12px"}}>Manage and track customer incidents.</div>
                        {cases}
                    </DocumentCardDetails>
                  </DocumentCard>
                  <DocumentCard>
                    <DocumentCardTitle title="Emails" styles={{ root: { fontWeight: 'bold' } }} />
                    <DocumentCardDetails>
                      <div style={{padding : "12px"}}>View and manage customer Emails.</div>
                      {emails}
                    </DocumentCardDetails>
                  </DocumentCard>
                  <DocumentCard>
                    <DocumentCardTitle title="Interactions" styles={{ root: { fontWeight: 'bold' } }} />
                    <DocumentCardDetails>
                      <div style={{padding : "12px"}}>Access and manage interactions.</div>
                      {interactions}
                    </DocumentCardDetails>
                  </DocumentCard>
                </div>
                {showMessageBar && messageBarText.map((msg, index) => (
                  <MessageBar key={index} messageBarType={MessageBarType.info} dismissButtonAriaLabel="Close" isMultiline={false} onDismiss={() => {
                    setMessageBarText(messageBarText.filter((_, i) => i !== index));
                  }}>
                    {msg}
                  </MessageBar>
                ))}
              </Stack.Item>
              <Stack.Item id ="text" grow={2}>
                {selectedIncident !== null && <CaseDetails selected={selectedIncident} />}
                {selectedEmail !== null && <EmailDetails selectedKey={selectedEmail} />}
                {selectedInteraction !== null && <InteractionDetails selectedKey={selectedInteraction} />}
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <iframe id={iframeId} src={getIframeSrc()} style={{
              height: 'calc(100vh - 96px)',
              width: '30vw',
              textAlign: 'left'
            }} />
          </Stack.Item>
        </Stack>
      </Stack>

      <Dialog
        hidden={!isSettingsDialogOpen}
        onDismiss={() => setIsSettingsDialogOpen(false)}
        dialogContentProps={dialogContentProps}
        modalProps={{ isBlocking: true }}
      >
        <TextField
          label="Widget URL"
          defaultValue={widgetUrl}
          onChange={(_, newValue) => newValue !== undefined && setWidgetUrl(newValue)}
        />
        <TextField
          label="Dynamics Organization URL"
          defaultValue={dynamicsOrgUrl}
          onChange={(_, newValue) => newValue !== undefined && setDynamicsOrgUrl(newValue)}
        />
        <Toggle
          label="useCustomCopilotExtension"
         checked={useCustomCopilotExtension}
         onChange={(_, checked) => setUseCustomCopilotExtension(!!checked)}
        />
        <Toggle
          label="Show Message Bar"
          checked={showMessageBar}
          onChange={(_, checked) => setShowMessageBar(!!checked)}
        />
        <DialogFooter>
          <PrimaryButton onClick={() => setIsSettingsDialogOpen(false)} text="Save" />
          <DefaultButton onClick={() => setIsSettingsDialogOpen(false)} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default App;
