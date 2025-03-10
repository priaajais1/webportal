import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { sendMessage } from './messageHandler';
import { MessageType, ObjectType } from './constants';

export interface InteractionProps {
  interactionId: string;
  onSelected: () => void;
  selectedKey: string | null;
}

export function Interaction({
  interactionId,
  onSelected,
  selectedKey
}: InteractionProps) {
  return (
    <div style={{
      padding: '10px'
    }}>
      <PrimaryButton style={{
        width: '300px',
        backgroundColor: selectedKey === interactionId ? 'blue' : undefined
      }} onClick={() => {
        onSelected();
        sendMessage(interactionId, ObjectType.Interaction, MessageType.NavigateRequest);
      }}>
        <div>{`Interaction ${interactionId}${selectedKey === interactionId ? '-Selected': ''}`}</div>
      </PrimaryButton>
    </div>
  )
}