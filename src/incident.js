import { PrimaryButton } from '@fluentui/react';
import { incidentsData } from './incidentDetails';
import iframeId from './App';

export function incident({
  index,
  onSelected,
  selected
}) {
  const currentCase = incidentsData[index];
  return (
    <div style={{
      padding: '10px'
    }}>
      <PrimaryButton onClick={() => {
        onSelected();
        document.getElementById(iframeId).contentWindow.postMessage({
          type: 'selectCase',
          caseId: currentCase.id
        }, '*');
        // TODO: send session event
      }}>
        <div>{`Case ${currentCase.id}${selected === index ? '-Selected': ''}`}</div>
      </PrimaryButton >
    </div>
  )
}