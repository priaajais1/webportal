import React from 'react';
import { incidentsData } from './SampleData/incidentDetails';

export interface CaseDetailsProps {
  selected: number | null;
}

export function CaseDetails({ selected }: CaseDetailsProps) {
  if (selected === null) {
    return <div>Please select a case to see the details.</div>;
  }

  const currentCase = incidentsData[selected];

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h2>Case Details</h2>
      <p><strong>Case ID:</strong> {currentCase.caseId}</p>
      <p><strong>Subject:</strong> {currentCase.subject}</p>
      <p><strong>Description:</strong> {currentCase.description}</p>
      <p><strong>Customer Name:</strong> {currentCase.customerName}</p>
      <p><strong>Priority:</strong> {currentCase.priority}</p>
      <p><strong>Case Type:</strong> {currentCase.caseType}</p>
      <p><strong>URL:</strong> <a href={currentCase.url!} target="_blank" rel="noopener noreferrer">{currentCase.url}</a></p>
      <p><strong>Product Name:</strong> {currentCase.product_name}</p>
    </div>
  );
}