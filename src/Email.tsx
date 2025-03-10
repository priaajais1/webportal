import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { sendMessage } from './messageHandler';
import { MessageType, ObjectType } from './constants';

export interface EmailProps {
  emailId: string;
  onSelected: () => void;
  selectedKey: string | null;
}

export function Email({
  emailId: key,
  onSelected,
  selectedKey
}: EmailProps) {
  return (
    <div style={{
      padding: '10px'
    }}>
      <PrimaryButton style={{
        width: '300px',
        backgroundColor: selectedKey === key ? 'green' : undefined
      }} onClick={() => {
        onSelected();
        sendMessage(key, ObjectType.Email, MessageType.NavigateRequest);
      }}>
        <div>{`Email ${key}${selectedKey === key ? '-Selected': ''}`}</div>
      </PrimaryButton >
    </div>
  )
}
