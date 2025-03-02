import './App.css';
import { Stack } from '@fluentui/react';
import { incident } from './incident';
import React from 'react';
import { iframeId } from './constants';

function App() {
  const [selected, setSelected] = React.useState(null);
  const case1 = incident({ index: 0, selected, onSelected: () => setSelected(0) });
  const case2 = incident({ index: 1, selected,  onSelected: () => setSelected(1) });
  const case3 = incident({ index: 2, selected, onSelected: () => setSelected(2) });
  return (
    <div className="App">
      <body>
        <Stack horizontal>
          <Stack.Item>
            <iframe id={iframeId} src="https://copilotforservice-ppe.azureedge.net/widget/index.html?dynamicsUrl=https://orge0da95d1.crm.dynamics.com" frameborder="0" style={{
              height: '100vh',
              width: '50vw'
            }} />
          </Stack.Item>
          <Stack.Item style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}>
            {case1}
            {case2}
            {case3}
          </Stack.Item>
        </Stack>
      </body>
    </div>
  );
}

export default App;
