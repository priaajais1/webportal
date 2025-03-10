import React from 'react';
import { interactionDetails } from './SampleData/InteractionDetails';
import { Stack, Text, Label, Separator } from '@fluentui/react';

export interface InteractionDetailsProps {
  selectedKey: string;
}

export function InteractionDetails({ selectedKey }: InteractionDetailsProps) {
  // Find the interaction with the matching ID
  const details = interactionDetails.find((interaction) => interaction.interactionId === selectedKey);

  if (!details) {
    return <div>No interaction details available</div>;
  }

  return (
    <Stack tokens={{ childrenGap: 10 }} styles={{ root: { padding: 20, width: '500px' } }}>
      <Text variant="xLarge">Interaction {details.interactionNumber || details.interactionId}</Text>
      
      {/* Conversation history */}
      <Label>Conversation:</Label>
      {details.conversation.map((message, index) => (
        <Stack key={index} styles={{ root: { padding: 8, backgroundColor: message.user_type === 'agent' ? '#f0f0f0' : '#e6f7ff', borderRadius: '5px', marginBottom: '8px' } }}>
          <Stack horizontal horizontalAlign="space-between">
            <Text variant="mediumPlus" styles={{ root: { fontWeight: 600 } }}>
              {message.speaker_name || message.user || (message.user_type === 'agent' ? 'Agent' : 'Customer')}
            </Text>
            <Text variant="small">{message.datetime ? new Date(message.datetime).toLocaleString() : ''}</Text>
          </Stack>
          <Text>{message.text}</Text>
        </Stack>
      ))}
      
      {/* If there are no conversation details, show a placeholder */}
      {(!details.conversation || details.conversation.length === 0) && (
        <Text>No conversation details available</Text>
      )}
    </Stack>
  );
}