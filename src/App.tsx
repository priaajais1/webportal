import './App.css';
import { MessageBar, MessageBarType, Stack } from '@fluentui/react';
import { incident } from './incident';
import React, { useEffect } from 'react';
import { iframeId } from './constants';
import { setupMessageHandler } from './messageHandler';

function App() {
  const [messageBarText, setMessageBarText] = React.useState<string[]>([]);
  const [selected, setSelected] = React.useState<number | null>(null);

  const cases = Array.from({ length: 9 }, (_, index) => 
    incident({ index, selected, onSelected: () => setSelected(index) })
  );

  useEffect(() => {
    setupMessageHandler((message) => {
      setMessageBarText([...messageBarText, message]);
    });
  }, [messageBarText]);

  return (
    <div className="App">
      <Stack horizontal>
        <Stack.Item>
          <iframe id={iframeId} src="https://ccaas-embed-ppe.azureedge.net/widget/index.html?dynamicsUrl=https://orge0da95d1.crm.dynamics.com&copilotExtensionUrl=https://embedcopilotadaptersacc.blob.core.windows.net/prijaisplugin/portalExtension.js" style={{
            height: '100vh',
            width: '50vw'
          }} />
        </Stack.Item>
        <Stack.Item style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
          {messageBarText.map((msg, index) => (
            <MessageBar key={index} messageBarType={MessageBarType.info} dismissButtonAriaLabel="Close" isMultiline={false} onDismiss={() => {
              setMessageBarText(messageBarText.filter((_, i) => i !== index));
            }}>
              {msg}
            </MessageBar>
          ))}
          {cases}
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default App;
