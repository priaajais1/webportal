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
          "--------------- Original Message ---------------\nFrom: Salim Shaikh [salims@microsoft.com]\nSent: 5/1/2024, 10:16 AM\nTo: efrank@genepoint.com\nSubject: Test email subject Maintenance guidelines for generator unclear [ thread::JMCfVIOHLmGf1MWHZSQCgnc:: ]\n\nTest email description Maintenance guidelines for generator unclear\n_____________________________________________________________________\nPowered by Salesforce\nhttp://www.salesforce.com/\n\nthread::JMCfVIOHLmGf1MWHZSQCgnc::\n\n_____________________________________________________________________\nPowered by Salesforce\nhttp://www.salesforce.com/",
        datetime: "2024-06-07T23:39:37+00:00",
        additional_context: JSON.stringify({
          sender: "salims@microsoft.com",
          torecipients: "efrank@genepoint.com"
        })
      },
      {
        record_id: "02saj000000Ga5xAAC",
        type: "email",
        activity_content:
          "Test email description  Maintenance guidelines for generator unclear\n_____________________________________________________________________\nPowered by Salesforce\nhttp://www.salesforce.com/\n\nthread::JMCfVIOHLmGf1MWHZSQCgnc::",
        datetime: "2024-05-02T17:16:56+00:00",
        additional_context:JSON.stringify({
          sender: "salims@microsoft.com",
          torecipients: "efrank@genepoint.com"
        })
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
    product_name: "Software Suite A",
    activities: [
      {
        record_id: "02saj000000Xbt1AAC",
        type: "email",
        activity_content:
          "--------------- Original Message ---------------\nFrom: Support Team [support@contoso.com]\nSent: 6/2/2024, 2:45 PM\nTo: customer@contoso.com\nSubject: RE: Software Installation Issue [ thread::SWI78965HjkLpQrT:: ]\n\nHello,\n\nThank you for reporting the installation issue. Based on the error message you provided, it appears you're missing the .NET Framework 4.8 dependency. Please install this component from our support portal and then retry the installation.\n\nPlease let us know if you need further assistance.\n\nRegards,\nSupport Team",
        datetime: "2024-06-02T14:45:22+00:00",
        additional_context: JSON.stringify({
          sender: "support@contoso.com",
          torecipients: "customer@contoso.com"
        })
      },
      {
        record_id: "0D5aj0000037kRqYAD",
        type: "note",
        activity_content:
          "<p>Customer confirmed that installing the missing .NET Framework 4.8 dependency resolved the issue. Installation completed successfully and software is now functioning as expected.</p>",
        datetime: "2024-06-03T09:22:18+00:00"
      }
    ]
  },
  {
    caseId: 'case-id-3',
    subject: "Billing issue",
    description: "Customer has a question about their bill. They have noticed an unexpected charge on their latest invoice and need clarification on the details of this charge. They have reviewed their usage and cannot find any activity that would justify the additional cost. They are seeking an explanation and possible adjustment to their bill to ensure that they are not being overcharged for services they did not use.",
    customerName: "Fabrikam, Inc.",
    priority: 3,
    caseType: 1,
    url: "http://example.com/case-id-3",
    product_name: "Billing System B",
    activities: [
      {
        record_id: "02saj000000PqbtAAE",
        type: "email",
        activity_content:
          "--------------- Original Message ---------------\nFrom: Billing Department [billing@fabrikam.com]\nSent: 5/15/2024, 11:32 AM\nTo: finance@fabrikam.com\nSubject: Billing Inquiry - Account #FAB-2024-0568 [ thread::BIL456789InqFAB:: ]\n\nDear Fabrikam Finance Team,\n\nWe've reviewed your account and identified that the additional charge of $249.99 on your May statement was for the Premium Support package that was activated on April 28th. This was requested by your IT department through the online portal.\n\nIf this was added in error, we can process a refund and remove this service from your account.\n\nPlease let us know how you would like to proceed.\n\nRegards,\nBilling Department",
        datetime: "2024-05-15T11:32:45+00:00",
        additional_context: JSON.stringify({
          sender: "billing@fabrikam.com",
          torecipients: "finance@fabrikam.com"
        })
      },
      {
        record_id: "0D5aj0000039dEcCAI",
        type: "note",
        activity_content:
          "<p>Customer confirmed the charge was unauthorized. IT department did not request Premium Support package. Processed full refund and removed service from account. Updated billing cycle to reflect changes.</p>",
        datetime: "2024-05-16T14:05:37+00:00"
      }
    ]
  }/*,
  {
    caseId: 'case-id-4',
    subject: "Account locked",
    description: "Customer's account is locked and they cannot access it. They have attempted to reset their password multiple times, but the system does not recognize their email address. They are unable to perform any account-related activities and need immediate assistance to regain access to their account. This issue is affecting their business operations and causing significant inconvenience.",
    customerName: "Northwind Traders",
    priority: 1,
    caseType: 2,
    url: "http://example.com/case-id-4",
    product_name: "Account Management C",
    activities: [
      {
        record_id: "02saj000000QrLtBAK",
        type: "email",
        activity_content:
          "--------------- Original Message ---------------\nFrom: Security Team [security@northwind.com]\nSent: 6/10/2024, 9:05 AM\nTo: admin@northwind.com\nSubject: Account Recovery Information [ thread::ACC78932LockRec:: ]\n\nDear Northwind Admin,\n\nWe've identified that your account was locked due to suspicious login attempts from an unrecognized location. For your security, we've temporarily restricted access.\n\nTo unlock your account, please complete the identity verification process through our secure portal using the temporary access code: NT-83921-VER\n\nOnce verified, you'll be prompted to update your password and set up multi-factor authentication.\n\nRegards,\nSecurity Team",
        datetime: "2024-06-10T09:05:12+00:00",
        additional_context: JSON.stringify({
          sender: "security@northwind.com",
          torecipients: "admin@northwind.com"
        })
      },
      {
        record_id: "0D5aj0000042mPzCAI",
        type: "note",
        activity_content:
          "<p>Customer completed identity verification process. Account access has been restored with enhanced security protocols. Customer was advised to update all password recovery information and monitor account activity for next 30 days.</p>",
        datetime: "2024-06-10T11:37:44+00:00"
      }
    ]
  },
  {
    caseId: 'case-id-5',
    subject: "Feature request",
    description: "Customer is requesting a new feature for the product. They would like to see an enhancement that allows for better integration with their existing systems. Specifically, they need an API that can automate data transfer between the product and their internal database. This feature would greatly improve their workflow and efficiency, allowing them to streamline their operations and reduce manual data entry.",
    customerName: "Tailspin Toys",
    priority: 3,
    caseType: 3,
    url: "http://example.com/case-id-5",
    product_name: "Toy Design D",
    activities: [
      {
        record_id: "02saj000000Rt5xBAC",
        type: "email",
        activity_content:
          "--------------- Original Message ---------------\nFrom: Product Development Team [product@tailspin.com]\nSent: 5/22/2024, 3:47 PM\nTo: operations@tailspin.com\nSubject: RE: API Integration Feature Request [ thread::FEAT4567IntREQ:: ]\n\nDear Tailspin Operations Team,\n\nThank you for your feature request regarding API integration capabilities. We've reviewed your specific requirements and added this to our product roadmap for Q3 development.\n\nWe'd like to schedule a discovery call to gather more detailed requirements about your internal database structure and the specific data points you need to transfer. This will help us design an API that meets your exact needs.\n\nPlease let us know your availability for next week.\n\nBest regards,\nProduct Development Team",
        datetime: "2024-05-22T15:47:33+00:00",
        additional_context: JSON.stringify({
          sender: "product@tailspin.com",
          torecipients: "operations@tailspin.com"
        })
      },
      {
        record_id: "0D5aj0000041kTzCAI",
        type: "note",
        activity_content:
          "<p>Discovery call completed with customer IT team. Documented API requirements including data endpoints, authentication mechanisms, and rate limiting needs. Development team estimates 6-8 weeks for implementation with beta access available by August 15th. Customer agreed to participate in beta testing program.</p>",
        datetime: "2024-05-28T13:20:05+00:00"
      }
    ]
  },
  {
    caseId: 'case-id-6',
    subject: "Network connectivity issue",
    description: "Customer is experiencing network connectivity issues with their device. The device frequently loses connection to the network, causing disruptions in their operations. They have checked their network settings and confirmed that other devices are working fine. They need technical support to diagnose and fix the connectivity problem to ensure that their operations can continue without interruption.",
    customerName: "Wingtip Toys",
    priority: 2,
    caseType: 2,
    url: "http://example.com/case-id-6",
    product_name: "Network Router E",
    activities: [
      {
        record_id: "02saj000000StbvAAC",
        type: "email",
        activity_content:
          "--------------- Original Message ---------------\nFrom: Network Support [netsupport@wingtip.com]\nSent: 6/5/2024, 10:23 AM\nTo: it@wingtip.com\nSubject: Troubleshooting Network Connectivity Issues [ thread::NET8932ConnIss:: ]\n\nHello Wingtip IT Team,\n\nBased on your device logs, we've identified that the router is experiencing firmware compatibility issues with your current network configuration. The intermittent disconnections occur when specific packet types are processed.\n\nWe recommend updating to the latest firmware version 3.7.2 which addresses this specific issue. You can download it from our support portal.\n\nFor immediate mitigation, you can also try changing the MTU settings to 1450 as described in our knowledge base article KB-5892.\n\nPlease let us know if you need assistance with the update process.\n\nBest regards,\nNetwork Support Team",
        datetime: "2024-06-05T10:23:55+00:00",
        additional_context: JSON.stringify({
          sender: "netsupport@wingtip.com",
          torecipients: "it@wingtip.com"
        })
      },
      {
        record_id: "0D5aj0000045rTqCAI",
        type: "note",
        activity_content:
          "<p>Customer applied firmware update 3.7.2 and adjusted MTU settings as recommended. Connectivity has been stable for 48 hours with no reported disconnections. Will continue monitoring for one week before closing case. Recommended customer enable automatic firmware updates to prevent similar issues in the future.</p>",
        datetime: "2024-06-07T16:42:19+00:00"
      }
    ]
  },
  {
    caseId: 'case-id-7',
    subject: "Data migration problem",
    description: "Customer is facing issues with data migration from their old system to the new one. The migration process is incomplete, and some critical data is missing. They have followed the migration guide but encountered errors that they cannot resolve. They need expert assistance to ensure a smooth and complete data migration, as the missing data is crucial for their business operations and decision-making processes.",
    customerName: "Litware, Inc.",
    priority: 1,
    caseType: 3,
    url: "http://example.com/case-id-7",
    product_name: "Data Migration Tool F",
    activities: [
      {
        record_id: "02saj000000UvcxAAC",
        type: "email",
        activity_content:
          "--------------- Original Message ---------------\nFrom: Data Migration Team [datamigration@litware.com]\nSent: 6/8/2024, 4:11 PM\nTo: dba@litware.com\nSubject: RE: Critical Data Missing After Migration [ thread::DAT6789MigIss:: ]\n\nDear Litware Database Team,\n\nAfter analyzing your migration logs, we've identified that the issue stems from incompatible character encodings in your source database. The migration tool was unable to process certain records containing extended Unicode characters.\n\nWe've developed a custom migration script to handle these specific character sets. Please grant us temporary remote access to your database environment so we can run the script to recover the missing data.\n\nWe estimate the process will take approximately 4 hours to complete, and we recommend scheduling this during non-business hours.\n\nRegards,\nData Migration Support Team",
        datetime: "2024-06-08T16:11:07+00:00",
        additional_context: JSON.stringify({
          sender: "datamigration@litware.com",
          torecipients: "dba@litware.com"
        })
      },
      {
        record_id: "0D5aj0000047tVzCAI",
        type: "note",
        activity_content:
          "<p>Completed custom migration script execution. Successfully recovered 98.7% of missing data. Remaining 1.3% was identified as duplicate records that were intentionally excluded by the migration validation rules. Provided customer with detailed migration report and verification checklist. Customer confirmed data integrity and completeness.</p>",
        datetime: "2024-06-10T02:35:29+00:00"
      }
    ]
  },
  {
    caseId: 'case-id-8',
    subject: "Security vulnerability",
    description: "Customer reported a security vulnerability in the product. They have identified a potential exploit that could allow unauthorized access to sensitive data. They are concerned about the security implications and need an immediate investigation and patch to address the vulnerability. This issue is critical to maintaining their data security and ensuring that their systems are protected against potential threats.",
    customerName: "Proseware, Inc.",
    priority: 1,
    caseType: 1,
    url: "http://example.com/case-id-8",
    product_name: "Security Suite G",
    activities: [
      {
        record_id: "02saj000000VxbtAAC",
        type: "email",
        activity_content:
          "--------------- Original Message ---------------\nFrom: Security Response Team [securityresponse@proseware.com]\nSent: 6/4/2024, 8:05 AM\nTo: security@proseware.com\nSubject: URGENT: Security Vulnerability Mitigation Steps [ thread::SEC7832VulRes:: ]\n\nDear Proseware Security Team,\n\nThank you for responsibly reporting the security vulnerability. Our team has verified the issue and classified it as Critical (CVSS score 9.1).\n\nWe've developed an emergency patch (G-SEC-20240604) that addresses the unauthorized access vector you identified. This patch is available for immediate implementation through your admin console.\n\nAs a temporary mitigation until the patch is applied, we recommend implementing the following firewall rules to block potential exploit attempts:\n- Block inbound requests containing the X-Custom-Auth header with null byte values\n- Enable enhanced logging for all authentication attempts\n\nPlease confirm once you've applied the patch so we can verify the vulnerability has been remediated in your environment.\n\nRegards,\nSecurity Response Team",
        datetime: "2024-06-04T08:05:15+00:00",
        additional_context: JSON.stringify({
          sender: "securityresponse@proseware.com",
          torecipients: "security@proseware.com"
        })
      },
      {
        record_id: "0D5aj0000049xQzCAI",
        type: "note",
        activity_content:
          "<p>Customer applied emergency patch G-SEC-20240604 to all production systems. Post-implementation security scan confirmed vulnerability has been remediated. No evidence of exploitation was found in system logs. Scheduled comprehensive security review for next week to identify any similar potential vulnerabilities in related systems.</p>",
        datetime: "2024-06-04T11:28:52+00:00"
      }
    ]
  },
  {
    caseId: 'case-id-9',
    subject: "Performance issue",
    description: "Customer is experiencing performance issues with the product. The application is running slower than expected, especially during peak usage times. They have tried optimizing their system resources, but the performance remains subpar. They need technical support to identify the root cause and improve the application's performance to ensure that it can handle their workload efficiently and without delays.",
    customerName: "Adventure Works",
    priority: 3,
    caseType: 2,
    url: "http://example.com/case-id-9",
    product_name: "Performance Monitor H",
    activities: [
      {
        record_id: "02saj000000WyctAAC",
        type: "email",
        activity_content:
          "--------------- Original Message ---------------\nFrom: Performance Optimization Team [performance@adventureworks.com]\nSent: 5/25/2024, 2:37 PM\nTo: operations@adventureworks.com\nSubject: Performance Analysis Results [ thread::PERF5643AnalRes:: ]\n\nDear Adventure Works Operations,\n\nWe've completed our analysis of your application performance data. The primary bottleneck appears to be related to database query optimization. Several key queries are not properly utilizing the available indexes, resulting in full table scans during peak periods.\n\nWe've attached a set of recommended query optimizations and index changes that should significantly improve performance. Our testing indicates these changes should reduce response times by approximately 65% during peak loads.\n\nAdditionally, we recommend increasing your application server cache allocation from 4GB to at least 8GB to better handle concurrent user sessions.\n\nPlease let us know if you'd like us to assist with implementing these changes.\n\nBest regards,\nPerformance Optimization Team",
        datetime: "2024-05-25T14:37:22+00:00",
        additional_context: JSON.stringify({
          sender: "performance@adventureworks.com",
          torecipients: "operations@adventureworks.com"
        })
      },
      {
        record_id: "0D5aj000004AbTzCAI",
        type: "note",
        activity_content:
          "<p>Implemented recommended query optimizations and index changes. Added additional indexes on frequently queried columns. Increased application server cache to 10GB. Performance monitoring shows 72% improvement in response times and 84% reduction in database load during peak operations. Customer confirmed system is now operating within expected performance parameters.</p>",
        datetime: "2024-05-28T09:15:41+00:00"
      }
    ]
  }*/
];