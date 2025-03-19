import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { incidentsData } from './SampleData/incidentDetails';
import { sendMessage } from './messageHandler';
import { MessageType, ObjectType } from './constants';

export interface IncidentProps {
  index: number;
  onSelected: () => void;
  selected: number | null;
}

export function Incident({
  index,
  onSelected,
  selected
}: IncidentProps) {
  const currentCase = incidentsData[index];
  return (
    <div style={{
          padding: '10px'
        }}>
          <PrimaryButton
          styles={{
            root: {
              width: 300,
              backgroundColor: selected === index ? 'green' : undefined
            },
            textContainer: {
              width: 300,
              overflow: 'hidden',
            },
            label: {
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }
          }}
           onClick={() => {
            onSelected();
            sendMessage(currentCase.caseId, ObjectType.Case, MessageType.NavigateRequest);
          }}>
            {currentCase.subject}
          </PrimaryButton>
        </div>
  )
}