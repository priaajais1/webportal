import React from 'react';
import { emailDetails } from './SampleData/EmailDetails';
import { TextField } from '@fluentui/react';

interface EmailDetailsProps {
  selectedKey: string | null;
}

export const EmailDetails: React.FC<EmailDetailsProps> = ({ selectedKey }) => {
  if (selectedKey === null) {
    return <></>;
  }

  // Fetch email details based on the selected index
  const email = emailDetails[selectedKey];

  return (
    <div style={{ textAlign: 'left' }}>
      <h2>Email</h2>
      <p><strong>From:</strong> {email.from}</p>
      <p><strong>To:</strong> {email.to}</p>
      <p><strong>Subject:</strong> {email.subject}</p>
      
      <h3>Email Body</h3>
      <TextField
        multiline
        rows={10}
        readOnly
        value={email.description}
        styles={{ field: { textAlign: 'left' } }}
      />
    </div>
  );
};