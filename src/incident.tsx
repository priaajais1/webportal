import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { incidentsData } from './incidentDetails';
import { sendMessage } from './messageHandler';
import { MessageType, ObjectType } from './constants';

export interface IncidentProps {
  index: number;
  onSelected: () => void;
  selected: number | null;
}

export function incident({
  index,
  onSelected,
  selected
}: IncidentProps) {
  const currentCase = incidentsData[index];
  return (
    <div style={{
      padding: '10px'
    }}>
      <PrimaryButton style={{
        width: '300px',
        backgroundColor: selected === index ? 'green' : undefined
      }} onClick={() => {
        onSelected();
        sendMessage(currentCase.caseId, ObjectType.Case, MessageType.NavigateRequest);
      }}>
        <div>{`Case ${currentCase.caseId}${selected === index ? '-Selected': ''}`}</div>
      </PrimaryButton >
    </div>
  )
}