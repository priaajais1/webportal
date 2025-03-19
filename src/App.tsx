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
  DefaultButton 
} from '@fluentui/react';
import { incident } from './incident';
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
  const [widgetUrl, setWidgetUrl] = useState("https://ccaas-embed-ppe.azureedge.net");
  const [dynamicsOrgUrl, setDynamicsOrgUrl] = useState("https://orge0da95d1.crm.dynamics.com");
  const [copilotExtensionUrl, setCopilotExtensionUrl] = useState("https://embedcopilotnonprod.blob.core.windows.net/embedcopilotnonprodcontainer/portalExtension.js");

  const cases = Array.from({ length: 5 }, (_, index) =>
    incident({
      index, selected: selectedIncident, onSelected: () => {
        setSelectedIncident(index);
        setSelectedEmail(null);
        setSelectedInteraction(null);
      }
    })
  );

  const emailKeys = Object.keys(emailDetails);
  const emails = emailKeys.map((emailId) =>
    <Email
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
      interactionId={interaction.interactionId}
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
    //return `${widgetUrl}/widget/index.html?dynamicsUrl=${dynamicsOrgUrl}&msdynembedmode=1&copilotExtensionUrl=${copilotExtensionUrl}`;
    return "https://copilotforservice-ppe.azureedge.net/widget/index.html?dynamicsUrl=https://org13bc2934.crm10.dynamics.com&copilotExtensionUrl=https://embedcopilotnonprod.blob.core.windows.net/embedcopilotnonprodcontainer/portalExtension.js"
    //return "https://copilotforservice-test.azureedge.net/widget/index.html?dynamicsUrl=https://org4a30ed1d.crm10.dynamics.com&copilotExtensionUrl=https://prijais.blob.core.windows.net/prijais/portalExtension.js"
    //return "https://ccaas-embed-ppe.azureedge.net/widget/index.html?dynamicsUrl=https://orgf9f3c36d.crm10.dynamics.com&copilotExtensionUrl=https://embedcopilotnonprod.blob.core.windows.net/embedcopilotnonprodcontainer/portalExtension.js"
  };

  // Dialog config
  const dialogContentProps = {
    type: DialogType.normal,
    title: 'Settings',
    closeButtonAriaLabel: 'Close',
    subText: 'Override URL settings for the widget',
  };

  return (
    <div className="App">
      <Stack horizontal>
        <Stack.Item>
          <iframe id={iframeId} src={getIframeSrc()} style={{
            height: '100vh',
            width: '50vw'
          }} />
        </Stack.Item>
        <Stack.Item style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
          <Stack horizontal>
            <Stack.Item>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
                <IconButton
                  iconProps={{ iconName: 'Settings' }}
                  title="Settings"
                  ariaLabel="Settings"
                  onClick={() => setIsSettingsDialogOpen(true)}
                />
              </div>
              {messageBarText.map((msg, index) => (
                <MessageBar key={index} messageBarType={MessageBarType.info} dismissButtonAriaLabel="Close" isMultiline={false} onDismiss={() => {
                  setMessageBarText(messageBarText.filter((_, i) => i !== index));
                }}>
                  {msg}
                </MessageBar>
              ))}
              {cases}
              {emails}
              {interactions}
            </Stack.Item>
            <Stack.Item>
              {selectedIncident !== null && <CaseDetails selected={selectedIncident} />}
              {selectedEmail !== null && <EmailDetails selectedKey={selectedEmail} />}
              {selectedInteraction !== null && <InteractionDetails selectedKey={selectedInteraction} />}
            </Stack.Item>
          </Stack>
        </Stack.Item>
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
        <TextField
          label="Copilot Extension URL"
          defaultValue={copilotExtensionUrl}
          onChange={(_, newValue) => newValue !== undefined && setCopilotExtensionUrl(newValue)}
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
