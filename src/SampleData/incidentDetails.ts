export const incidentsData = [
  {
    caseId: '5005e000006QpZVAA0',
    subject: "Customer is having issues with a machine performance",
    description: "Customer is having issues with a machine that is not functioning properly. The machine intermittently stops working, causing significant delays in their production line. They have tried restarting the machine multiple times, but the issue persists. They need urgent assistance to resolve this problem as it is affecting their overall productivity and causing frustration among the staff.",
    customerName: "Adventure Works (sample)",
    priority: 2,
    caseType: 2,
    url: null,
    product_name: "Machine Model X",
    activities: [
      {
        record_id: "02saj000000OKbtAAG",
        type: "email",
        activity_content:
          "--------------- Original Message ---------------\nFrom: Salim Shaikh [test@microsoft.com]\nSent: 5/1/2024, 10:16 AM\nTo: efrank@genepoint.com\nSubject: Test email subject Maintenance guidelines for generator unclear [ thread::JMCfVIOHLmGf1MWHZSQCgnc:: ]\n\nTest email description Maintenance guidelines for generator unclear\n_____________________________________________________________________\nPowered by Salesforce\nhttp://www.salesforce.com/\n\nthread::JMCfVIOHLmGf1MWHZSQCgnc::\n\n_____________________________________________________________________\nPowered by Salesforce\nhttp://www.salesforce.com/",
        datetime: "2024-06-07T23:39:37+00:00",
        additional_context: {
          sender: "test@microsoft.com",
          torecipients: "efrank@genepoint.com"
        }
      },
      {
        record_id: "02saj000000Ga5xAAC",
        type: "email",
        activity_content:
          "Test email description  Maintenance guidelines for generator unclear\n_____________________________________________________________________\nPowered by Salesforce\nhttp://www.salesforce.com/\n\nthread::JMCfVIOHLmGf1MWHZSQCgnc::",
        datetime: "2024-05-02T17:16:56+00:00",
        additional_context: {
          sender: "test@microsoft.com",
          torecipients: "efrank@genepoint.com"
        }
      },
      {
        record_id: "0D5aj0000036kPqCAI",
        type: "note",
        activity_content:
          "<p>Generators have many moving parts and each component should be inspected on a regular basis. The input from OEMs, maintenance teams, and operational data should be used to create a maintenance schedule for generators. Create checklists and SOPs for maintenance procedures. </p>",
        datetime: "2024-05-01T20:57:07+00:00"
      }
    ]
  },
  {
    caseId: 'case-id-2',
    subject: "Software installation problem",
    description: "Customer is unable to install the software on their system. They have followed all the installation instructions provided in the manual, but the installation process fails at the final step. The error message indicates a missing dependency, but they are unsure how to resolve it. They need guidance to complete the installation and ensure that the software is properly configured for their environment.",
    customerName: "Contoso Ltd.",
    priority: 1,
    caseType: 2,
    url: "http://example.com/case-id-2",
    product_name: "Software Suite A"
  },
  {
    caseId: 'case-id-3',
    subject: "Billing issue",
    description: "Customer has a question about their bill. They have noticed an unexpected charge on their latest invoice and need clarification on the details of this charge. They have reviewed their usage and cannot find any activity that would justify the additional cost. They are seeking an explanation and possible adjustment to their bill to ensure that they are not being overcharged for services they did not use.",
    customerName: "Fabrikam, Inc.",
    priority: 3,
    caseType: 1,
    url: "http://example.com/case-id-3",
    product_name: "Billing System B"
  },
  {
    caseId: 'case-id-4',
    subject: "Account locked",
    description: "Customer's account is locked and they cannot access it. They have attempted to reset their password multiple times, but the system does not recognize their email address. They are unable to perform any account-related activities and need immediate assistance to regain access to their account. This issue is affecting their business operations and causing significant inconvenience.",
    customerName: "Northwind Traders",
    priority: 1,
    caseType: 2,
    url: "http://example.com/case-id-4",
    product_name: "Account Management C"
  },
  {
    caseId: 'case-id-5',
    subject: "Feature request",
    description: "Customer is requesting a new feature for the product. They would like to see an enhancement that allows for better integration with their existing systems. Specifically, they need an API that can automate data transfer between the product and their internal database. This feature would greatly improve their workflow and efficiency, allowing them to streamline their operations and reduce manual data entry.",
    customerName: "Tailspin Toys",
    priority: 3,
    caseType: 3,
    url: "http://example.com/case-id-5",
    product_name: "Toy Design D"
  },
  {
    caseId: 'case-id-6',
    subject: "Network connectivity issue",
    description: "Customer is experiencing network connectivity issues with their device. The device frequently loses connection to the network, causing disruptions in their operations. They have checked their network settings and confirmed that other devices are working fine. They need technical support to diagnose and fix the connectivity problem to ensure that their operations can continue without interruption.",
    customerName: "Wingtip Toys",
    priority: 2,
    caseType: 2,
    url: "http://example.com/case-id-6",
    product_name: "Network Router E"
  },
  {
    caseId: 'case-id-7',
    subject: "Data migration problem",
    description: "Customer is facing issues with data migration from their old system to the new one. The migration process is incomplete, and some critical data is missing. They have followed the migration guide but encountered errors that they cannot resolve. They need expert assistance to ensure a smooth and complete data migration, as the missing data is crucial for their business operations and decision-making processes.",
    customerName: "Litware, Inc.",
    priority: 1,
    caseType: 3,
    url: "http://example.com/case-id-7",
    product_name: "Data Migration Tool F"
  },
  {
    caseId: 'case-id-8',
    subject: "Security vulnerability",
    description: "Customer reported a security vulnerability in the product. They have identified a potential exploit that could allow unauthorized access to sensitive data. They are concerned about the security implications and need an immediate investigation and patch to address the vulnerability. This issue is critical to maintaining their data security and ensuring that their systems are protected against potential threats.",
    customerName: "Proseware, Inc.",
    priority: 1,
    caseType: 1,
    url: "http://example.com/case-id-8",
    product_name: "Security Suite G"
  },
  {
    caseId: 'case-id-9',
    subject: "Performance issue",
    description: "Customer is experiencing performance issues with the product. The application is running slower than expected, especially during peak usage times. They have tried optimizing their system resources, but the performance remains subpar. They need technical support to identify the root cause and improve the application's performance to ensure that it can handle their workload efficiently and without delays.",
    customerName: "Adventure Works",
    priority: 3,
    caseType: 2,
    url: "http://example.com/case-id-9",
    product_name: "Performance Monitor H"
  }
];