import React from 'react';
import { emailDetails } from './SampleData/EmailDetails';

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
    <div>
      <h2>Email Details</h2>
      <p>Subject: {email.subject}</p>
      <p>From: {email.from}</p>
      <p>To: {email.to}</p>
      
      {email.regardingCase && email.regardingCase.length > 0 ? (
        <div className="regarding-case-section">
          <h3>Regarding Case</h3>
          {email.regardingCase.map((caseItem, index) => (
            <div key={caseItem.caseId || index} className="case-details">
              <p><strong>Case ID:</strong> {caseItem.caseId}</p>
              <p><strong>Subject:</strong> {caseItem.subject}</p>
              <p><strong>Customer:</strong> {caseItem.customerName}</p>
              <p><strong>Product:</strong> {caseItem.product_name}</p>
              <p><strong>Priority:</strong> {caseItem.priority}</p>
              <p><strong>Case Type:</strong> {caseItem.caseType}</p>
              <p><strong>Description:</strong></p>
              <p className="case-description">{caseItem.description}</p>
              <p>
                <a href={caseItem.url} target="_blank" rel="noopener noreferrer">
                  View Case
                </a>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No associated cases</p>
      )}
      
      <h3>Email Body</h3>
      <p>{email.description}</p>
    </div>
  );
};