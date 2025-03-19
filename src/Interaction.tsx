import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { sendMessage } from './messageHandler';
import { MessageType, ObjectType } from './constants';

export interface InteractionProps {
  interactionId: string;
  onSelected: () => void;
  selectedKey: string | null;
  interactionNumber: string
}

export function Interaction({
  interactionId,
  onSelected,
  selectedKey,
  interactionNumber
}: InteractionProps) {
  return (
    <div style={{
      padding: '10px'
    }}>
      <PrimaryButton
      styles={{
        root: {
          width: 300,
          backgroundColor: selectedKey === interactionId ? 'green' : undefined
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
        sendMessage(interactionId, ObjectType.Interaction, MessageType.NavigateRequest);
      }}>
     {interactionNumber}
      </PrimaryButton>
    </div>
  )
}