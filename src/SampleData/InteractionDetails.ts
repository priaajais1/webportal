import { InteractionData } from "./ICopilotAdapterInterface";

export const interactionDetails: InteractionData[] = [
  {
    interactionId: "interaction-id-1",
    interactionNumber: "SR-2024-0542",
    conversation: [
      {
        user: "agent",
        user_type: "agent",
        speaker_name:
          "Nick B",
        datetime: "2024-06-07T23:39:37+00:00",
        text: 'Hi, my name is Nick and I will be your customer advocate today. How can I help you?',
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name:
          "prijais",
        datetime: "2024-06-07T23:39:38+00:00",
        text: 'I need help with salesforce chat setting'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name:
          "Nick B",
        datetime: "2024-06-07T23:39:40+00:00",
        text: 'ok.. have you seen the public documentation available online?'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name:
          "Nick B",
        datetime: "2024-06-07T23:39:41+00:00",
        text: 'Here are some online pointer https'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name:
          "prijais",
        datetime: "2024-06-07T23:39:42+00:00",
        text: 'Let me quickly check on the link'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name:
          "Nick B",
        datetime: "2024-06-07T23:39:43+00:00",
        text: 'let me know if that helps otherwise i can assist you further'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name:
          "prijais",
        datetime: "2024-06-07T23:39:44+00:00",
        text: 'Oh.. looks like this link is helpful .. thanks for the help'
      },
    ]
  },
  {
    interactionId: "interaction-id-2",
    interactionNumber: "SR-2024-0542",
    conversation: [
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Sarah M",
        datetime: "2024-06-08T14:22:15+00:00",
        text: 'Hello! This is Sarah from customer support. How may I assist you today?',
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Michael T",
        datetime: "2024-06-08T14:22:45+00:00",
        text: 'Hi Sarah, I\'m having trouble installing your software. It keeps giving me error code 1562.'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Sarah M",
        datetime: "2024-06-08T14:23:30+00:00",
        text: 'I understand how frustrating that can be. Error 1562 is usually related to insufficient permissions during installation.'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Sarah M",
        datetime: "2024-06-08T14:24:15+00:00",
        text: 'Could you try running the installer as administrator by right-clicking on it and selecting "Run as administrator"?'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Michael T",
        datetime: "2024-06-08T14:26:22+00:00",
        text: 'Let me try that now, one moment please.'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Michael T",
        datetime: "2024-06-08T14:28:45+00:00",
        text: 'It worked! The installation is proceeding now. Thank you!'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Sarah M",
        datetime: "2024-06-08T14:29:10+00:00",
        text: 'Excellent! I\'m glad that resolved the issue. Is there anything else I can help you with today?'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Michael T",
        datetime: "2024-06-08T14:29:45+00:00",
        text: 'No, that\'s all. Thanks for your help!'
      }
    ]
  },
  {
    interactionId: "interaction-id-3",
    interactionNumber: "SR-2024-0678",
    conversation: [
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Robert J",
        datetime: "2024-06-09T10:15:22+00:00",
        text: 'Welcome to billing support. My name is Robert. How can I assist you today?',
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Jessica L",
        datetime: "2024-06-09T10:15:48+00:00",
        text: 'Hi Robert, I think there\'s a mistake on my latest invoice. I was charged for a premium feature I never activated.'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Robert J",
        datetime: "2024-06-09T10:16:30+00:00",
        text: 'I\'d be happy to look into this for you. Could you please provide your account number or the email associated with your account?'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Jessica L",
        datetime: "2024-06-09T10:17:05+00:00",
        text: 'Sure, my email is jessica.l@example.com'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Robert J",
        datetime: "2024-06-09T10:18:22+00:00",
        text: 'Thank you, Jessica. I see your account and the invoice in question. You\'re right, it appears there was an erroneous charge for the advanced analytics package.'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Robert J",
        datetime: "2024-06-09T10:19:15+00:00",
        text: 'I\'ve removed that charge and processed a refund of $29.99 to your original payment method. It should appear in 3-5 business days.'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Jessica L",
        datetime: "2024-06-09T10:19:45+00:00",
        text: 'That was quick! Thank you so much for resolving this promptly.'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Robert J",
        datetime: "2024-06-09T10:20:10+00:00",
        text: 'You\'re welcome! I\'m also sending you the corrected invoice via email. Is there anything else I can help with today?'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Jessica L",
        datetime: "2024-06-09T10:20:35+00:00",
        text: 'No, that\'s all I needed. Have a great day!'
      }
    ]
  }/*,
  {
    interactionId: "interaction-id-4",
    interactionNumber: "SR-2024-0723",
    conversation: [
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Alex P",
        datetime: "2024-06-10T16:45:10+00:00",
        text: 'Hello and welcome to product support! My name is Alex. How may I assist you today?',
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "David W",
        datetime: "2024-06-10T16:45:42+00:00",
        text: 'Hi Alex, I\'m interested in your enterprise software solution, but I have some questions about the features.'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Alex P",
        datetime: "2024-06-10T16:46:15+00:00",
        text: 'I\'d be happy to help with that! What specific features are you interested in learning more about?'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "David W",
        datetime: "2024-06-10T16:47:03+00:00",
        text: 'We need something that can handle multi-level approval workflows and integrate with our existing CRM. Does your software support that?'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Alex P",
        datetime: "2024-06-10T16:48:20+00:00",
        text: 'Absolutely! Our enterprise package includes a robust approval workflow engine that supports unlimited hierarchy levels. As for CRM integration, we have native connectors for Salesforce, Dynamics, and HubSpot.'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "David W",
        datetime: "2024-06-10T16:49:05+00:00",
        text: 'That sounds promising. We use Dynamics. Do you offer a trial period so we can test the integration?'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Alex P",
        datetime: "2024-06-10T16:49:45+00:00",
        text: 'Yes, we offer a 30-day full-featured trial with complimentary onboarding assistance. Would you like me to set that up for you?'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "David W",
        datetime: "2024-06-10T16:50:22+00:00",
        text: 'That would be great. My email is david.w@company.example'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Alex P",
        datetime: "2024-06-10T16:51:40+00:00",
        text: 'Perfect! I\'ve initiated the trial setup. You\'ll receive an email within the next 15 minutes with activation instructions and your temporary credentials.'
      }
    ]
  },
  {
    interactionId: "interaction-id-5",
    interactionNumber: "SR-2024-0891",
    conversation: [
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Emma R",
        datetime: "2024-06-11T09:10:15+00:00",
        text: 'Good morning! My name is Emma from technical support. How can I help you today?',
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Thomas K",
        datetime: "2024-06-11T09:10:42+00:00",
        text: 'Hi Emma, I\'m getting a strange error when trying to export reports from the dashboard. It just says "Format not supported".'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Emma R",
        datetime: "2024-06-11T09:11:30+00:00",
        text: 'I understand that can be frustrating, Thomas. Which export format are you trying to use, and which browser are you currently using?'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Thomas K",
        datetime: "2024-06-11T09:12:05+00:00",
        text: 'I\'m trying to export as Excel, and I\'m using Firefox 115.3'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Emma R",
        datetime: "2024-06-11T09:13:22+00:00",
        text: 'Thank you for that information. We\'ve identified a compatibility issue with Firefox 115.3 for Excel exports. There are two solutions I can offer.'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Emma R",
        datetime: "2024-06-11T09:14:00+00:00",
        text: 'You can either update Firefox to version 116 which resolves the issue, or try exporting as CSV format which works with all browser versions.'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Thomas K",
        datetime: "2024-06-11T09:15:25+00:00",
        text: 'Let me try the CSV export since I need this report urgently.'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Thomas K",
        datetime: "2024-06-11T09:16:40+00:00",
        text: 'Great, the CSV export worked perfectly! I\'ll update Firefox later today.'
      },
      {
        user: "agent",
        user_type: "agent",
        speaker_name: "Emma R",
        datetime: "2024-06-11T09:17:10+00:00",
        text: 'Excellent! I\'m glad that worked for you. Is there anything else you need assistance with today?'
      },
      {
        user: "customer",
        user_type: "customer",
        speaker_name: "Thomas K",
        datetime: "2024-06-11T09:17:35+00:00",
        text: 'That\'s all for now. Thanks for your help!'
      }
    ]
  }*/
];