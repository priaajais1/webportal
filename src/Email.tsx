import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { sendMessage } from './messageHandler';
import { MessageType, ObjectType } from './constants';
import { emailDetails } from './SampleData/EmailDetails';

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
      <PrimaryButton
      styles={{
        root: {
          width: 300,
          backgroundColor: selectedKey === key ? 'green' : undefined
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
        sendMessage(key, ObjectType.Email, MessageType.NavigateRequest);
      }}>
        {emailDetails[key].subject}
      </PrimaryButton >
    </div>
  )
}
