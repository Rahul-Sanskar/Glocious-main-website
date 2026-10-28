/**
 * Glocious — Solution architecture
 *
 * Single source of truth for every /solutions/[slug] page. The data here is
 * deliberately plain and serialisable (strings and string arrays only) so the
 * route can stay a Server Component and hand the object straight to the
 * client-rendered section components — no icons or component references cross
 * that boundary.
 *
 * Content rules
 * -------------
 * · Capability-based copy only. No statistics, percentages, benchmarks,
 *   uptime figures, latencies or volumes — none of which we can substantiate.
 * · No named third-party vendors or product versions in positioning copy.
 * · "How it works" describes our process, not a delivery SLA.
 * · Integration sections describe integration *approaches* generically
 *   (API, webhooks, dashboard, connectors) — never endpoint paths, limits
 *   or protocol level detail.
 */

export type SolutionCategory =
  | "Communication"
  | "Digital Growth"
  | "Technology"
  | "AI & Automation";

/**
 * Industry taxonomy used by solution pages. Kept alongside the solution data
 * so a solution page only has to reference a key.
 */
export type IndustryKey =
  | "real-estate"
  | "healthcare"
  | "education"
  | "ecommerce"
  | "bfsi"
  | "retail"
  | "travel-hospitality"
  | "automotive"
  | "it-technology";

export interface NamedItem {
  title: string;
  desc: string;
}

export interface SolutionIntegration {
  intro: string;
  methods: NamedItem[];
  targets: string[];
}

export interface Solution {
  slug: string;
  category: SolutionCategory;
  title: string;
  /** Hero subtitle — one line, business outcome framing */
  tagline: string;
  /** Hero supporting paragraph */
  summary: string;
  /** Short labels surfaced as chips in the hero */
  highlights: string[];
  problem: { intro: string; points: string[] };
  solution: { intro: string; points: string[] };
  capabilities: NamedItem[];
  howItWorks: NamedItem[];
  useCases: NamedItem[];
  industries: IndustryKey[];
  benefits: NamedItem[];
  /** Omitted for solutions where an integration surface is not applicable */
  integration?: SolutionIntegration;
}

/**
 * Category-level hero visual for solution pages.
 *
 * One visual per *category* rather than per solution: the eleven pages share
 * four categories, so this gives every page a relevant opening image without
 * duplicating the same asset eleven times. Kept as plain string data so the
 * route can stay a Server Component.
 */
export const SOLUTION_CATEGORY_IMAGES: Record<
  SolutionCategory,
  { src: string; alt: string }
> = {
  Communication: {
    src: "/images/solution-communication.jpg",
    alt: "Abstract illustration of multi-channel business messaging and voice infrastructure",
  },
  "Digital Growth": {
    src: "/images/solution-digital-growth.jpg",
    alt: "Abstract illustration of digital marketing analytics and campaign performance",
  },
  Technology: {
    src: "/images/solution-technology.jpg",
    alt: "Abstract illustration of modern web application and cloud infrastructure",
  },
  "AI & Automation": {
    src: "/images/solution-ai-automation.jpg",
    alt: "Abstract illustration of AI-assisted communication automation workflows",
  },
};

export const SOLUTION_INDUSTRIES: Record<IndustryKey, NamedItem> = {
  "real-estate": {
    title: "Real Estate",
    desc: "Enquiry capture, site-visit coordination and customer communication across the property journey.",
  },
  healthcare: {
    title: "Healthcare",
    desc: "Appointments, reminders and ongoing patient communication.",
  },
  education: {
    title: "Education",
    desc: "Admissions, fee reminders and student engagement.",
  },
  ecommerce: {
    title: "E-commerce",
    desc: "Order updates, delivery tracking and post-purchase engagement.",
  },
  bfsi: {
    title: "BFSI",
    desc: "Secure alerts, verification and high-volume customer communication.",
  },
  retail: {
    title: "Retail",
    desc: "Store promotions, loyalty programmes and seasonal campaigns.",
  },
  "travel-hospitality": {
    title: "Travel & Hospitality",
    desc: "Bookings, itinerary updates and guest communication.",
  },
  automotive: {
    title: "Automotive",
    desc: "Service reminders, enquiry follow-up and dealership communication.",
  },
  "it-technology": {
    title: "IT & Technology",
    desc: "Developer-facing integration and internal team automation.",
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Communication
   ══════════════════════════════════════════════════════════════════════════ */

const businessMessaging: Solution = {
  slug: "business-messaging",
  category: "Communication",
  title: "Business Messaging",
  tagline: "Transactional, promotional and conversational messaging from one platform.",
  summary:
    "Glocious gives your business a single messaging layer for the notifications, alerts and campaigns your customers actually rely on — with shared sender identity, templates and delivery visibility instead of scattered tools.",
  highlights: ["Transactional SMS", "OTP & Authentication", "Promotional Campaigns", "Two-Way Messaging"],
  problem: {
    intro:
      "Customer communication usually grows channel by channel and tool by tool. Marketing runs campaigns in one system, operations sends alerts from another, and nobody can see the whole conversation.",
    points: [
      "Messages triggered from separate systems with no shared delivery visibility",
      "Manual, spreadsheet-driven campaign execution that does not scale",
      "Inconsistent sender identity across channels erodes customer trust",
      "No dependable way to confirm that a critical alert actually reached the customer",
    ],
  },
  solution: {
    intro:
      "One messaging layer for transactional, promotional and conversational traffic. Sender identities, templates, scheduling and reporting are managed centrally, and each channel is reachable through the same integration.",
    points: [
      "Transactional, promotional and two-way messaging managed in one place",
      "Dedicated sender identities per brand, entity or region",
      "Template-driven campaigns with scheduling and audience targeting",
      "Delivery reporting and message logs that support teams can act on",
    ],
  },
  capabilities: [
    {
      title: "Transactional Messaging",
      desc: "Order confirmations, booking updates, payment alerts and service notifications triggered by your own systems.",
    },
    {
      title: "OTP & Authentication",
      desc: "One-time passwords for login, registration and payment verification flows.",
    },
    {
      title: "Promotional Campaigns",
      desc: "Scheduled and event-driven campaigns with audience segmentation and template management.",
    },
    {
      title: "Two-Way Messaging",
      desc: "Bidirectional conversations with keyword opt-in, opt-out and response handling.",
    },
    {
      title: "Sender Identity Management",
      desc: "Branded sender identities and approved templates configured per use case and region.",
    },
    {
      title: "Delivery Reporting",
      desc: "Message-level logs, delivery status and campaign analytics for operational visibility.",
    },
  ],
  howItWorks: [
    {
      title: "Onboarding and sender setup",
      desc: "We configure your sender identities, message templates and preference settings on the platform.",
    },
    {
      title: "Integration",
      desc: "Connect your CRM, ERP or application through the API, or run campaigns from the web dashboard.",
    },
    {
      title: "Journey design",
      desc: "We map which business events trigger which messages, and align templates to each touchpoint.",
    },
    {
      title: "Reporting and refinement",
      desc: "Delivery and engagement reporting feeds continuous improvement of templates and timing.",
    },
  ],
  useCases: [
    {
      title: "Order and delivery updates",
      desc: "Keep customers informed from confirmation through to delivery and returns.",
    },
    {
      title: "Authentication and security alerts",
      desc: "OTP delivery, login verification and unusual-activity notifications.",
    },
    {
      title: "Service and renewal reminders",
      desc: "Appointment, subscription, EMI and maintenance reminders sent on schedule.",
    },
    {
      title: "Promotional campaigns",
      desc: "Offers, launches and seasonal campaigns delivered to segmented audiences.",
    },
  ],
  industries: ["ecommerce", "retail", "bfsi", "healthcare", "real-estate", "education"],
  benefits: [
    {
      title: "One communication layer",
      desc: "Replace scattered sending tools with a single platform for business messaging.",
    },
    {
      title: "Consistent brand identity",
      desc: "Every message carries a recognised sender identity your customers can trust.",
    },
    {
      title: "Operational visibility",
      desc: "Delivery logs give support and operations teams a shared source of truth.",
    },
    {
      title: "Faster campaign execution",
      desc: "Templates and scheduling remove repetitive manual send work.",
    },
  ],
  integration: {
    intro:
      "Business messaging connects to the systems your teams already work in, so messages are triggered by real business events rather than manual exports.",
    methods: [
      {
        title: "REST API",
        desc: "Trigger messages directly from your application for transactional and event-based use cases.",
      },
      {
        title: "Webhooks and callbacks",
        desc: "Receive delivery and response events to keep your own systems in sync.",
      },
      {
        title: "Dashboard access",
        desc: "Run campaigns, manage templates and review reports without engineering involvement.",
      },
      {
        title: "Platform connectors",
        desc: "Integration support for common CRM, ERP and e-commerce platforms.",
      },
    ],
    targets: [
      "CRM platforms",
      "ERP and billing systems",
      "E-commerce platforms",
      "Helpdesk and support tools",
      "Marketing automation",
      "Custom applications",
    ],
  },
};

const rcsMessaging: Solution = {
  slug: "rcs-messaging",
  category: "Communication",
  title: "RCS Messaging",
  tagline: "Rich, app-like messaging that turns a business message into an interaction.",
  summary:
    "RCS upgrades the messaging inbox your customers already use into a branded, interactive surface — verified sender identity, rich cards and suggested actions, without asking anyone to install anything.",
  highlights: ["Verified Sender", "Rich Cards & Carousels", "Suggested Actions", "Rich Media"],
  problem: {
    intro:
      "Plain text messages cannot carry brand identity or interaction. Customers receive messages that look anonymous and then have to leave the conversation to take the next step.",
    points: [
      "Transactional and promotional messages look identical to any other sender",
      "Customers must switch to a browser or app to complete an action",
      "Imagery, options and product detail cannot be presented over plain text",
      "Engagement suffers because there is nothing in the message to interact with",
    ],
  },
  solution: {
    intro:
      "RCS turns the messaging inbox into a branded, interactive surface. Verified sender identity, rich cards, carousels and suggested actions let customers browse, choose and respond without leaving the conversation.",
    points: [
      "Verified sender identity carrying your brand name and logo",
      "Rich cards, carousels and media for offers, products and updates",
      "Suggested actions such as call, open link, save or reply",
      "Fallback delivery so the message still reaches customers on devices without rich support",
    ],
  },
  capabilities: [
    {
      title: "Verified Sender Profile",
      desc: "Brand name, logo and verification shown in the customer's messaging inbox.",
    },
    {
      title: "Rich Cards",
      desc: "Structured layouts that present an offer, ticket or product in a single view.",
    },
    {
      title: "Carousels",
      desc: "Multiple cards in one message for catalogues, options and recommendations.",
    },
    {
      title: "Suggested Actions",
      desc: "Buttons for calling, opening a link, saving a detail or replying instantly.",
    },
    {
      title: "Rich Media",
      desc: "Images and media delivered directly inside the conversation.",
    },
    {
      title: "Fallback Delivery",
      desc: "Messages degrade gracefully where rich formats are not supported.",
    },
  ],
  howItWorks: [
    {
      title: "Brand verification",
      desc: "We set up and verify your sender profile so messages appear with your brand identity.",
    },
    {
      title: "Message design",
      desc: "Rich cards, carousels and actions are designed around your specific use case.",
    },
    {
      title: "Campaign and journey setup",
      desc: "Messages are configured for both one-off campaigns and event-driven journeys.",
    },
    {
      title: "Measurement",
      desc: "Delivery and interaction reporting show how customers engage with each message.",
    },
  ],
  useCases: [
    {
      title: "Product discovery and offers",
      desc: "Carousels that let customers browse options and choose without leaving the message.",
    },
    {
      title: "Booking confirmations",
      desc: "Tickets and reservations delivered with actions to view, reschedule or call.",
    },
    {
      title: "Order updates",
      desc: "Order status and delivery detail presented as structured, readable cards.",
    },
    {
      title: "Service and banking alerts",
      desc: "Alerts with actions to view detail, authenticate or contact support.",
    },
  ],
  industries: ["retail", "ecommerce", "bfsi", "travel-hospitality", "healthcare", "real-estate"],
  benefits: [
    {
      title: "Stronger brand presence",
      desc: "Verified identity builds recognition at the exact moment of contact.",
    },
    {
      title: "Fewer steps to action",
      desc: "Suggested actions remove the need to switch context to complete a task.",
    },
    {
      title: "Richer communication",
      desc: "Structured layouts and media communicate far more than plain text alone.",
    },
    {
      title: "Consistent reach",
      desc: "Fallback delivery keeps coverage steady across supported and unsupported devices.",
    },
  ],
  integration: {
    intro:
      "RCS is delivered through the same API-first approach as the rest of the messaging stack, so it can be added alongside existing SMS and WhatsApp journeys.",
    methods: [
      {
        title: "REST API",
        desc: "Send rich messages from your application as part of an existing messaging flow.",
      },
      {
        title: "Webhooks",
        desc: "Receive interaction and delivery events back into your own systems.",
      },
      {
        title: "Dashboard access",
        desc: "Design and send campaigns while managing sender and template configuration.",
      },
      {
        title: "Journey orchestration",
        desc: "Combine RCS with other channels inside a single customer journey.",
      },
    ],
    targets: [
      "CRM platforms",
      "E-commerce platforms",
      "Helpdesk and support tools",
      "Marketing automation",
      "Custom applications",
    ],
  },
};

const whatsappBusiness: Solution = {
  slug: "whatsapp-business",
  category: "Communication",
  title: "WhatsApp Business Communication",
  tagline: "Conversational engagement on the channel your customers already open daily.",
  summary:
    "Glocious helps businesses run structured WhatsApp communication for notifications, support and campaigns — with a verified business profile, approved templates and a shared team inbox holding the full conversation history.",
  highlights: ["Verified Business Profile", "Template Messages", "Two-Way Conversations", "Shared Team Inbox"],
  problem: {
    intro:
      "WhatsApp has become a primary channel for customer conversations. Without structure it becomes an unmanaged inbox with no ownership, no history and no reporting.",
    points: [
      "Customer questions arrive on personal devices with no shared visibility",
      "No consistent brand presence or verification across the business",
      "Conversations, follow-ups and handovers are lost between team members",
      "Notification use cases are run manually instead of triggered by business events",
    ],
  },
  solution: {
    intro:
      "A managed WhatsApp presence with a verified business profile, approved message templates and a shared team inbox — so notifications, support and campaigns run on one governed channel.",
    points: [
      "Verified WhatsApp business profile under your own brand",
      "Approved templates for notifications, reminders and re-engagement",
      "Shared team inbox with assignment, notes and full conversation history",
      "Event-driven journeys triggered from your own business systems",
    ],
  },
  capabilities: [
    {
      title: "Verified Business Profile",
      desc: "A verified presence so customers know they are talking to your business.",
    },
    {
      title: "Template Messages",
      desc: "Prepared and approved templates for confirmations, reminders and re-engagement.",
    },
    {
      title: "Shared Team Inbox",
      desc: "Two-way replies handled by the whole team, with assignment and handover.",
    },
    {
      title: "Media and Document Sharing",
      desc: "Share images, documents and order detail inside the conversation.",
    },
    {
      title: "Journey Automation",
      desc: "Trigger messages from order, booking or support events in your systems.",
    },
    {
      title: "Conversation Reporting",
      desc: "Visibility into message volumes, response activity and team workload.",
    },
  ],
  howItWorks: [
    {
      title: "Profile setup and verification",
      desc: "We configure and verify your business profile on WhatsApp.",
    },
    {
      title: "Template preparation",
      desc: "Message templates are written and submitted for approval for each use case.",
    },
    {
      title: "Inbox and routing",
      desc: "Teams are configured with routing rules, assignments and working hours.",
    },
    {
      title: "Automation and reporting",
      desc: "Event triggers and reporting are connected so the channel runs on business data.",
    },
  ],
  useCases: [
    {
      title: "Order and delivery notifications",
      desc: "Keep customers updated through dispatch, transit and delivery.",
    },
    {
      title: "Appointment reminders",
      desc: "Reduce no-shows with confirmations and reminders on a channel people read.",
    },
    {
      title: "Customer support conversations",
      desc: "Handle queries in a shared inbox where every reply is accountable.",
    },
    {
      title: "Lead follow-up and re-engagement",
      desc: "Re-open conversations with customers who showed interest but did not convert.",
    },
  ],
  industries: ["real-estate", "healthcare", "education", "ecommerce", "retail", "bfsi"],
  benefits: [
    {
      title: "Conversations in one place",
      desc: "Every customer thread lives in a shared inbox instead of a personal device.",
    },
    {
      title: "Faster customer response",
      desc: "Assignment and templates shorten the time between question and answer.",
    },
    {
      title: "Trusted brand presence",
      desc: "A verified profile gives customers confidence they are reaching the right business.",
    },
    {
      title: "Automated follow-up",
      desc: "Business events trigger messages automatically rather than relying on reminders.",
    },
  ],
  integration: {
    intro:
      "WhatsApp journeys are triggered from your business events and connected to the systems that already hold customer data.",
    methods: [
      {
        title: "Business messaging API",
        desc: "Send template and conversational messages from your own applications.",
      },
      {
        title: "Webhooks",
        desc: "Receive incoming messages and delivery events in your systems.",
      },
      {
        title: "Team inbox",
        desc: "Agent-facing workspace for replying, assigning and reviewing conversations.",
      },
      {
        title: "Platform connectors",
        desc: "Integration support for CRM, helpdesk and e-commerce platforms.",
      },
    ],
    targets: [
      "CRM platforms",
      "Helpdesk and support tools",
      "E-commerce platforms",
      "ERP systems",
      "Marketing automation",
      "Custom applications",
    ],
  },
};

const voiceIvr: Solution = {
  slug: "voice-ivr",
  category: "Communication",
  title: "Voice & IVR",
  tagline: "Voice flows that route every caller to the right outcome.",
  summary:
    "Design call flows that greet, qualify and route callers automatically — then hand over to a person exactly when it matters, with the context already captured.",
  highlights: ["IVR Call Flows", "Smart Call Routing", "Missed Call Capture", "Call Logs & Recording"],
  problem: {
    intro:
      "Inbound call volume is unpredictable. Without structured routing, callers wait, repeat themselves and abandon before they reach anyone who can help.",
    points: [
      "Callers wait in queues with no indication of where they are in the process",
      "Every agent asks the same qualifying questions again",
      "Missed calls become lost enquiries with no follow-up",
      "No structured record of what was discussed or resolved",
    ],
  },
  solution: {
    intro:
      "Automated voice flows greet callers, capture intent, verify details and route to the correct team — passing the captured context to the agent before the conversation starts.",
    points: [
      "IVR flows designed around the reasons customers actually call",
      "Caller identification and intent capture before handover",
      "Routing by department, location, language or agent availability",
      "Missed-call handling that captures the caller and triggers follow-up",
    ],
  },
  capabilities: [
    {
      title: "IVR Flow Design",
      desc: "Multi-level menus, greetings and prompts built around real caller intent.",
    },
    {
      title: "Smart Call Routing",
      desc: "Route by intent, department, location, language or agent availability.",
    },
    {
      title: "Missed Call Service",
      desc: "Capture missed callers and trigger an automated follow-up.",
    },
    {
      title: "Click-to-Call",
      desc: "Let customers and internal teams connect directly from a web page or CRM record.",
    },
    {
      title: "Voice Messaging",
      desc: "Pre-recorded voice messages for alerts, reminders and campaigns.",
    },
    {
      title: "Call Logs and Recording",
      desc: "Structured records of call outcomes for quality review and coaching.",
    },
  ],
  howItWorks: [
    {
      title: "Call journey mapping",
      desc: "We map the reasons customers call and the outcome each one should reach.",
    },
    {
      title: "Flow design and scripting",
      desc: "Prompts, menus and routing rules are designed and scripted for each path.",
    },
    {
      title: "Configuration and testing",
      desc: "Flows are configured, tested and tuned against realistic scenarios.",
    },
    {
      title: "Monitoring and refinement",
      desc: "Call logs and outcomes are reviewed to refine menus and routing rules.",
    },
  ],
  useCases: [
    {
      title: "Customer support helplines",
      desc: "Direct callers to the team that can resolve their issue without transfers.",
    },
    {
      title: "Sales enquiry routing",
      desc: "Capture intent and route high-value enquiries to the right sales team.",
    },
    {
      title: "Appointment booking and confirmation",
      desc: "Automate scheduling, confirmation and rescheduling calls.",
    },
    {
      title: "Order and delivery enquiries",
      desc: "Deflect repetitive status questions with automated responses and self-service.",
    },
  ],
  industries: ["bfsi", "healthcare", "real-estate", "education", "travel-hospitality", "automotive"],
  benefits: [
    {
      title: "Shorter queues",
      desc: "Callers reach the correct team without repeated transfers.",
    },
    {
      title: "Better agent context",
      desc: "Agents receive captured details before the conversation begins.",
    },
    {
      title: "No lost callers",
      desc: "Missed calls trigger automated follow-up instead of being dropped.",
    },
    {
      title: "Accountable service",
      desc: "Call records give teams visibility into volumes and outcomes.",
    },
  ],
  integration: {
    intro:
      "Voice flows connect to your CRM and support systems so callers are recognised and outcomes are logged automatically.",
    methods: [
      {
        title: "Voice API",
        desc: "Trigger outbound calls and control flows programmatically from your application.",
      },
      {
        title: "Webhooks",
        desc: "Receive call events and outcomes in your own systems as they happen.",
      },
      {
        title: "CRM screen pop",
        desc: "Surface the matching customer record to the agent when the call connects.",
      },
      {
        title: "Dashboard access",
        desc: "Manage numbers, flows and recordings without engineering involvement.",
      },
    ],
    targets: [
      "CRM platforms",
      "Helpdesk and support tools",
      "ERP systems",
      "Custom applications",
    ],
  },
};

const cloudTelephony: Solution = {
  slug: "cloud-telephony",
  category: "Communication",
  title: "Cloud Telephony",
  tagline: "Cloud calling infrastructure for distributed teams and multiple locations.",
  summary:
    "Move business calling into the cloud so every team, branch and support desk shares one number infrastructure — with routing, recording and reporting managed centrally.",
  highlights: ["Virtual Numbers", "Multi-Location Routing", "Call Tracking", "Central Reporting"],
  problem: {
    intro:
      "Physical phone lines tie communication to a location. Routing, monitoring and scaling calling across teams becomes an infrastructure project rather than a configuration change.",
    points: [
      "Numbers are bound to physical lines and cannot be redirected",
      "No unified view of call activity across branches or teams",
      "Adding a location or team means provisioning hardware",
      "Call data sits with the network provider rather than in your systems",
    ],
  },
  solution: {
    intro:
      "Cloud telephony replaces physical lines with virtual number infrastructure that can be routed, recorded and reported on centrally — and connected to the CRM your teams already use.",
    points: [
      "Virtual numbers provisioned per team, campaign or location",
      "Routing rules that follow the caller rather than the desk",
      "Central call logs, recording and reporting across all numbers",
      "Call activity connected back into CRM and support systems",
    ],
  },
  capabilities: [
    {
      title: "Virtual Number Infrastructure",
      desc: "Provision numbers for teams, branches, campaigns and regions without hardware.",
    },
    {
      title: "Call Routing and Distribution",
      desc: "Distribute calls across teams, locations and working hours.",
    },
    {
      title: "Call Tracking",
      desc: "Attribute inbound calls to the campaign, channel or source that generated them.",
    },
    {
      title: "Call Recording",
      desc: "Record conversations for quality review, coaching and dispute resolution.",
    },
    {
      title: "Extensions and IVR",
      desc: "Extensions, menus and hold flows delivered as part of the same number.",
    },
    {
      title: "Unified Reporting",
      desc: "One view of call volumes, durations and outcomes across the organisation.",
    },
  ],
  howItWorks: [
    {
      title: "Number planning",
      desc: "We map your teams, locations and campaigns onto a clear number structure.",
    },
    {
      title: "Infrastructure setup",
      desc: "Numbers, extensions and routing rules are provisioned on the cloud platform.",
    },
    {
      title: "System integration",
      desc: "Call activity is connected to your CRM and support tools.",
    },
    {
      title: "Governance and reporting",
      desc: "Access, retention and reporting are configured for ongoing management.",
    },
  ],
  useCases: [
    {
      title: "Multi-branch customer support",
      desc: "One support number that routes to the right branch or region.",
    },
    {
      title: "Sales call tracking",
      desc: "Attribute calls to the campaign or channel that produced them.",
    },
    {
      title: "Remote and hybrid team calling",
      desc: "Let teams make and receive business calls from any location.",
    },
    {
      title: "Reminder and collection calling",
      desc: "Run structured outbound calling programmes from a shared number pool.",
    },
  ],
  industries: ["real-estate", "bfsi", "healthcare", "education", "retail", "automotive"],
  benefits: [
    {
      title: "Location independence",
      desc: "Teams call from anywhere without being tied to physical lines.",
    },
    {
      title: "Faster scaling",
      desc: "New teams and locations are provisioned as configuration, not hardware.",
    },
    {
      title: "Central visibility",
      desc: "One reporting view across every number, team and location.",
    },
    {
      title: "Connected to your systems",
      desc: "Call outcomes flow into the customer record instead of staying on the handset.",
    },
  ],
  integration: {
    intro:
      "Cloud telephony is designed to sit inside your existing operations, with call activity flowing into the systems that own customer records.",
    methods: [
      {
        title: "Telephony API",
        desc: "Provision numbers and control routing programmatically.",
      },
      {
        title: "Webhooks",
        desc: "Receive call events and recordings in your own systems.",
      },
      {
        title: "CRM integration",
        desc: "Log calls against the right customer record automatically.",
      },
      {
        title: "Dashboard access",
        desc: "Manage numbers, extensions and reporting from a single console.",
      },
    ],
    targets: [
      "CRM platforms",
      "Helpdesk and support tools",
      "ERP systems",
      "Custom applications",
    ],
  },
};

const emailCommunication: Solution = {
  slug: "email-communication",
  category: "Communication",
  title: "Email Communication",
  tagline: "Transactional and campaign email from managed sending infrastructure.",
  summary:
    "Send receipts, alerts, verification codes and campaigns from authenticated sending domains, with branded templates, scheduling and delivery reporting managed in one place.",
  highlights: ["Transactional Email", "OTP Email", "Campaign Email", "Template Management"],
  problem: {
    intro:
      "Email sent from unmanaged infrastructure lands in spam or fails silently. Marketing and operations also end up running separate, visually inconsistent sending setups.",
    points: [
      "Transactional and campaign email sent from different tools with different branding",
      "Delivery and bounce problems discovered only when customers complain",
      "Templates maintained in spreadsheets or one-off files",
      "No shared view of what was sent to which customer, and whether it arrived",
    ],
  },
  solution: {
    intro:
      "One managed email infrastructure for transactional, verification and campaign traffic — with brand-consistent templates, scheduling, suppression handling and delivery reporting.",
    points: [
      "Transactional and promotional email managed as distinct, well-defined use cases",
      "Reusable branded templates maintained centrally",
      "Scheduling, segmentation and list handling for campaigns",
      "Delivery, bounce and engagement reporting in a single dashboard",
    ],
  },
  capabilities: [
    {
      title: "Transactional Email",
      desc: "Receipts, confirmations, alerts and notifications triggered by your own systems.",
    },
    {
      title: "OTP and Verification Email",
      desc: "One-time codes for login, registration and payment verification flows.",
    },
    {
      title: "Campaign Email",
      desc: "Scheduled campaigns with segmentation, templates and audience control.",
    },
    {
      title: "Template Management",
      desc: "Reusable, brand-consistent templates maintained in one place.",
    },
    {
      title: "Sender Authentication",
      desc: "Sending domains and authentication configured as part of onboarding.",
    },
    {
      title: "Delivery Reporting",
      desc: "Delivery, bounce and engagement metrics for every send.",
    },
  ],
  howItWorks: [
    {
      title: "Infrastructure onboarding",
      desc: "Sending domains and authentication are configured for your organisation.",
    },
    {
      title: "Template design",
      desc: "Branded templates are built for each transactional and campaign use case.",
    },
    {
      title: "Integration",
      desc: "Your applications trigger email through the API, while campaigns run from the dashboard.",
    },
    {
      title: "Monitoring",
      desc: "Delivery and engagement reporting drives ongoing template and list improvement.",
    },
  ],
  useCases: [
    {
      title: "Account and verification emails",
      desc: "Welcome, password reset and login verification messages.",
    },
    {
      title: "Order, invoice and payment confirmations",
      desc: "Commercial documents delivered reliably and on brand.",
    },
    {
      title: "Product updates and newsletters",
      desc: "Recurring communication with customers and subscribers.",
    },
    {
      title: "Re-engagement campaigns",
      desc: "Win-back and reminder campaigns aimed at inactive customers.",
    },
  ],
  industries: ["bfsi", "ecommerce", "retail", "education", "healthcare", "it-technology"],
  benefits: [
    {
      title: "Dependable delivery",
      desc: "Managed sending infrastructure and authentication reduce spam placement.",
    },
    {
      title: "Consistent branding",
      desc: "Every email renders from the same template system, across every team.",
    },
    {
      title: "Fewer manual sends",
      desc: "Event-driven email removes repetitive copy-and-paste operations work.",
    },
    {
      title: "Actionable reporting",
      desc: "Delivery and engagement data available in one place rather than several.",
    },
  ],
  integration: {
    intro:
      "Email connects to both your product systems and your marketing tools, using the same templates and reporting regardless of which one triggers the send.",
    methods: [
      {
        title: "SMTP and REST API",
        desc: "Send transactional email directly from your application or backend service.",
      },
      {
        title: "Webhooks",
        desc: "Receive delivery, bounce and engagement events in your own systems.",
      },
      {
        title: "Dashboard access",
        desc: "Build campaigns, manage templates and review reporting without engineering support.",
      },
      {
        title: "Platform connectors",
        desc: "Integration support for CRM and marketing automation platforms.",
      },
    ],
    targets: [
      "Custom applications",
      "CRM platforms",
      "Marketing automation",
      "E-commerce platforms",
      "ERP systems",
    ],
  },
};

const apiMessaging: Solution = {
  slug: "api-messaging",
  category: "Communication",
  title: "API Messaging",
  tagline: "Programmable messaging infrastructure for teams building communication into a product.",
  summary:
    "A programmable messaging layer with consistent request patterns, sandbox access and event webhooks — so engineering teams can ship communication features without building each channel integration themselves.",
  highlights: ["REST APIs", "Sandbox Access", "Event Webhooks", "Multi-Channel"],
  problem: {
    intro:
      "Building messaging into a product usually means integrating each channel separately, maintaining different request formats and handling delivery events inconsistently.",
    points: [
      "Every channel has its own integration, contract and failure behaviour",
      "Delivery events are difficult to reconcile across multiple providers",
      "Testing does not match production, so problems surface only after release",
      "Engineering time goes into plumbing rather than product features",
    ],
  },
  solution: {
    intro:
      "One programmable interface across supported messaging channels, with a sandbox for development, consistent request and response patterns, and webhooks that report delivery and interaction events back to your systems.",
    points: [
      "A single integration pattern across every supported channel",
      "Sandbox environment for building and validating before go-live",
      "Webhooks for delivery, response and interaction events",
      "Central logs and reporting that support and operations teams can use",
    ],
  },
  capabilities: [
    {
      title: "Channel APIs",
      desc: "Send across supported messaging channels through consistent request patterns.",
    },
    {
      title: "Sandbox Environment",
      desc: "Build and validate integrations end to end before moving to production.",
    },
    {
      title: "Event Webhooks",
      desc: "Receive delivery, response and interaction events in your own systems.",
    },
    {
      title: "Template and Sender Management",
      desc: "Manage approved templates and sender identities programmatically.",
    },
    {
      title: "Delivery Logs",
      desc: "Queryable message history for troubleshooting and customer support.",
    },
    {
      title: "Usage Reporting",
      desc: "Volume and delivery reporting by account, project or sender.",
    },
  ],
  howItWorks: [
    {
      title: "Access and account setup",
      desc: "API access and account structure are provisioned for your engineering teams.",
    },
    {
      title: "Sandbox integration",
      desc: "Your team integrates against the sandbox and validates request and event handling.",
    },
    {
      title: "Production go-live",
      desc: "Production sender identities and approved templates are enabled for launch.",
    },
    {
      title: "Ongoing operation",
      desc: "Delivery monitoring, logs and support channels keep production traffic healthy.",
    },
  ],
  useCases: [
    {
      title: "Product notifications",
      desc: "Deliver in-product and out-of-product notifications from your own application.",
    },
    {
      title: "Multi-brand and multi-entity messaging",
      desc: "Manage separate sender identities and templates across brands or business units.",
    },
    {
      title: "Event-driven customer journeys",
      desc: "Trigger messages from application events rather than manual lists.",
    },
    {
      title: "Internal alerting",
      desc: "Route system alerts and operational notifications to the right recipients.",
    },
  ],
  industries: ["it-technology", "ecommerce", "bfsi", "retail", "education", "healthcare"],
  benefits: [
    {
      title: "Faster integration",
      desc: "One integration pattern instead of a separate project for every channel.",
    },
    {
      title: "Predictable behaviour",
      desc: "Consistent request and response contracts across supported channels.",
    },
    {
      title: "Safer releases",
      desc: "Sandbox validation before anything reaches production traffic.",
    },
    {
      title: "Operational control",
      desc: "Logs and reporting that support and operations teams can act on directly.",
    },
  ],
  integration: {
    intro:
      "API Messaging is built to be consumed by engineering teams, with clear documentation, sandbox access and event webhooks as first-class parts of the platform.",
    methods: [
      {
        title: "REST API",
        desc: "Send and manage messages through consistent HTTP requests.",
      },
      {
        title: "Webhooks",
        desc: "Subscribe to delivery and interaction events for your own systems.",
      },
      {
        title: "Sandbox",
        desc: "Develop and test against an isolated environment before production.",
      },
      {
        title: "Documentation and references",
        desc: "Reference material covering authentication, requests and event payloads.",
      },
    ],
    targets: [
      "Custom applications",
      "CRM platforms",
      "ERP systems",
      "E-commerce platforms",
      "SaaS products",
      "Internal systems",
    ],
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Digital Growth
   ══════════════════════════════════════════════════════════════════════════ */

const leadManagement: Solution = {
  slug: "lead-management",
  category: "Digital Growth",
  title: "Lead Management",
  tagline: "Capture, qualify, route and follow up on every enquiry systematically.",
  summary:
    "A structured lead management layer that routes enquiries to the right owner, automates follow-up and gives teams visibility into every opportunity in the pipeline.",
  highlights: ["Lead Capture", "Routing & Assignment", "Automated Follow-Up", "Pipeline Visibility"],
  problem: {
    intro:
      "Leads arrive from websites, campaigns, calls and messaging. Without a system they sit in inboxes and spreadsheets until they go cold.",
    points: [
      "Enquiries arrive through multiple channels with no single place of record",
      "Response depends on who happens to see the message first",
      "Follow-up is manual and inconsistent between team members",
      "No visibility into how many leads were contacted, stalled or never reached",
    ],
  },
  solution: {
    intro:
      "Every enquiry is captured into one pipeline, qualified against clear criteria and routed to the right owner, with automated follow-up and reporting on each stage.",
    points: [
      "Central capture from website forms, campaigns, calls and messaging",
      "Automated routing and assignment by territory, product or availability",
      "Follow-up sequences that keep leads warm without manual chasing",
      "Pipeline reporting from first contact through to conversion",
    ],
  },
  capabilities: [
    {
      title: "Multi-Channel Capture",
      desc: "Collect enquiries from web forms, campaigns, calls and messaging into one pipeline.",
    },
    {
      title: "Routing and Assignment",
      desc: "Distribute leads by territory, product interest, team or availability.",
    },
    {
      title: "Automated Follow-Up",
      desc: "Time-based and event-based follow-up sequences across your communication channels.",
    },
    {
      title: "Qualification and Scoring",
      desc: "Structured criteria that prioritise the leads most ready to move forward.",
    },
    {
      title: "Pipeline and Stage Tracking",
      desc: "Stage-based visibility from first contact to closed opportunity.",
    },
    {
      title: "Conversation History",
      desc: "Every call, message and email attached to the lead record.",
    },
  ],
  howItWorks: [
    {
      title: "Pipeline definition",
      desc: "We map your capture sources, stages, owners and qualification criteria.",
    },
    {
      title: "Capture and routing setup",
      desc: "Forms, campaigns and channels are connected and routing rules configured.",
    },
    {
      title: "Follow-up automation",
      desc: "Sequences and reminders are built around how your sales process actually runs.",
    },
    {
      title: "Reporting and review",
      desc: "Pipeline reporting is configured so teams can act on conversion and drop-off.",
    },
  ],
  useCases: [
    {
      title: "Property enquiry management",
      desc: "Route project and location enquiries to the right sales team with follow-up.",
    },
    {
      title: "Admission enquiries",
      desc: "Capture programme interest and guide applicants through the admission stages.",
    },
    {
      title: "B2B sales pipeline",
      desc: "Track opportunities from first contact through qualification and closure.",
    },
    {
      title: "Service quote requests",
      desc: "Capture quote requests and follow up consistently until a decision is reached.",
    },
  ],
  industries: ["real-estate", "education", "healthcare", "bfsi", "retail", "it-technology"],
  benefits: [
    {
      title: "No enquiry left behind",
      desc: "Every lead enters a pipeline with a named owner and a next action.",
    },
    {
      title: "Faster first response",
      desc: "Automated assignment removes manual triage and routing delays.",
    },
    {
      title: "Consistent follow-up",
      desc: "Sequences run whether or not someone remembers to chase.",
    },
    {
      title: "Pipeline clarity",
      desc: "Stages and reporting show exactly where opportunities are stalling.",
    },
  ],
  integration: {
    intro:
      "Lead management connects the channels that generate enquiries to the CRM that owns the customer relationship.",
    methods: [
      {
        title: "API integration",
        desc: "Push and pull lead data between your website, applications and CRM.",
      },
      {
        title: "Webhooks",
        desc: "Trigger downstream actions the moment a lead is captured or updated.",
      },
      {
        title: "Form and landing page integration",
        desc: "Connect existing web forms without rebuilding them.",
      },
      {
        title: "CRM connectors",
        desc: "Integration support for the CRM your sales team already works in.",
      },
    ],
    targets: [
      "CRM platforms",
      "Marketing automation",
      "Telephony systems",
      "Email platforms",
      "Messaging platforms",
      "Custom applications",
    ],
  },
};

const digitalMarketing: Solution = {
  slug: "digital-marketing",
  category: "Digital Growth",
  title: "Digital Marketing",
  tagline: "Search, social and paid channels run as one measurable growth programme.",
  summary:
    "Search, social, content and paid campaigns planned and executed together — with consolidated reporting that shows which channels are actually producing enquiries.",
  highlights: ["SEO", "Social Media", "Paid Campaigns", "Performance Reporting"],
  problem: {
    intro:
      "Marketing activity is often split across agencies, freelancers and internal teams, each optimising its own channel without a shared view of what produces customers.",
    points: [
      "Channel investment decided without comparable performance data",
      "Content, ads and social run by different people with different messaging",
      "Fragmented reporting makes enquiry attribution guesswork",
      "Organic presence built without a long-term content strategy behind it",
    ],
  },
  solution: {
    intro:
      "One growth programme covering search, social, content and paid media — executed against agreed objectives and measured through consolidated reporting.",
    points: [
      "A single strategy spanning organic and paid channels",
      "Consistent messaging and creative across every channel",
      "Reporting that connects channel activity through to enquiries",
      "Continuous refinement based on measured performance",
    ],
  },
  capabilities: [
    {
      title: "Search Engine Optimisation",
      desc: "Technical, on-page and content work to improve organic visibility.",
    },
    {
      title: "Paid Search and Display",
      desc: "Campaign structure, creative and bidding managed against agreed objectives.",
    },
    {
      title: "Social Media Management",
      desc: "Profile management, content calendars and community engagement.",
    },
    {
      title: "Social Media Optimisation",
      desc: "Profile and content optimisation so social presence is discoverable and consistent.",
    },
    {
      title: "Content and Copy",
      desc: "Content built around the questions your customers are actually asking.",
    },
    {
      title: "Analytics and Reporting",
      desc: "Consolidated reporting across channels, campaigns and enquiries.",
    },
  ],
  howItWorks: [
    {
      title: "Discovery and benchmarking",
      desc: "We review your current presence, competitive landscape and channel performance.",
    },
    {
      title: "Strategy and planning",
      desc: "Channel mix, objectives and content themes are agreed before execution begins.",
    },
    {
      title: "Execution",
      desc: "Campaigns, content and optimisation work are delivered on a defined cadence.",
    },
    {
      title: "Review and refine",
      desc: "Performance is reviewed against objectives and the plan adjusted accordingly.",
    },
  ],
  useCases: [
    {
      title: "Lead generation programmes",
      desc: "Build a dependable pipeline of enquiries from search and paid channels.",
    },
    {
      title: "Brand visibility",
      desc: "Establish consistent presence across the channels your audience uses.",
    },
    {
      title: "E-commerce traffic and conversion",
      desc: "Drive qualified traffic and improve conversion across the funnel.",
    },
    {
      title: "Product and service launches",
      desc: "Coordinate a channel mix around a defined launch window.",
    },
  ],
  industries: ["real-estate", "education", "ecommerce", "healthcare", "bfsi", "retail"],
  benefits: [
    {
      title: "One accountable team",
      desc: "Strategy and execution across channels delivered by a single partner.",
    },
    {
      title: "Comparable performance",
      desc: "Reporting lets budget move towards the channels that are working.",
    },
    {
      title: "Consistent brand message",
      desc: "Aligned creative and copy across search, social and paid media.",
    },
    {
      title: "Compounding organic growth",
      desc: "Content and search work that continues to perform after launch.",
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
   Technology
   ══════════════════════════════════════════════════════════════════════════ */

const websiteDigitalSolutions: Solution = {
  slug: "website-digital-solutions",
  category: "Technology",
  title: "Website & Digital Solutions",
  tagline: "Websites, stores and digital platforms built to perform and to last.",
  summary:
    "Corporate websites, e-commerce platforms and custom portals engineered for performance, accessibility and maintainability — with analytics and business integrations in place from launch.",
  highlights: ["Corporate Websites", "E-commerce", "Web Applications", "Portals & Dashboards"],
  problem: {
    intro:
      "A website becomes a liability when it is slow, difficult to update and disconnected from the systems that run the business.",
    points: [
      "Slow, template-based sites that lose visitors before they engage",
      "Content updates requiring developer involvement for every change",
      "No connection between the website and CRM, analytics or support systems",
      "Accessibility and performance treated as afterthoughts rather than requirements",
    ],
  },
  solution: {
    intro:
      "We design and engineer digital properties on a modern, maintainable stack, with performance and accessibility built in, and connect them to the systems that hold your customer data.",
    points: [
      "Design and build on a modern front-end architecture",
      "Performance and accessibility addressed from the first screen",
      "Content your team can update without engineering support",
      "Analytics, forms and CRM connected from day one",
    ],
  },
  capabilities: [
    {
      title: "Corporate Websites",
      desc: "Marketing sites built around clear structure, credibility and conversion.",
    },
    {
      title: "E-commerce Platforms",
      desc: "Storefronts covering catalogue, payments, fulfilment and post-purchase experience.",
    },
    {
      title: "Web Applications",
      desc: "Custom applications, portals and dashboards for customers or internal teams.",
    },
    {
      title: "Design Systems",
      desc: "Reusable component libraries that keep the product visually consistent as it grows.",
    },
    {
      title: "Performance and Accessibility",
      desc: "Engineering practices that keep pages fast and usable for every visitor.",
    },
    {
      title: "Analytics and Integrations",
      desc: "Measurement and business system integrations configured as part of the build.",
    },
  ],
  howItWorks: [
    {
      title: "Discovery and structure",
      desc: "We define objectives, audiences, information architecture and success measures.",
    },
    {
      title: "Design",
      desc: "Wireframes and visual design are produced against the agreed structure and component system.",
    },
    {
      title: "Engineering",
      desc: "The build follows agreed components, with accessibility and performance as requirements.",
    },
    {
      title: "Launch and iterate",
      desc: "Deployment, monitoring and a post-launch improvement cycle.",
    },
  ],
  useCases: [
    {
      title: "Corporate and product websites",
      desc: "Present the business credibly and convert qualified visitors into enquiries.",
    },
    {
      title: "E-commerce storefronts",
      desc: "Sell online with a platform that supports catalogue, payments and fulfilment.",
    },
    {
      title: "Customer self-service portals",
      desc: "Let customers manage accounts, requests and documents without calling support.",
    },
    {
      title: "Internal dashboards and tools",
      desc: "Give teams the operational views and workflows they currently track manually.",
    },
  ],
  industries: ["real-estate", "education", "healthcare", "it-technology", "retail", "ecommerce"],
  benefits: [
    {
      title: "Built to last",
      desc: "A maintainable architecture instead of a short-lived template.",
    },
    {
      title: "Faster for visitors",
      desc: "Performance treated as a build requirement rather than a later optimisation.",
    },
    {
      title: "Usable by everyone",
      desc: "Accessibility addressed throughout the build, not bolted on afterwards.",
    },
    {
      title: "Connected from day one",
      desc: "Analytics and business systems integrated at launch.",
    },
  ],
  integration: {
    intro:
      "Digital properties are built to connect with the systems behind them rather than standing alone as a brochure.",
    methods: [
      {
        title: "API integration",
        desc: "Connect the front end to your internal services and data sources.",
      },
      {
        title: "CMS integration",
        desc: "Content management that lets your team publish without code changes.",
      },
      {
        title: "Analytics and tag management",
        desc: "Measurement configured so performance can be reported from launch.",
      },
      {
        title: "Commerce and logistics integrations",
        desc: "Payments, catalogue and fulfilment connections for e-commerce platforms.",
      },
    ],
    targets: [
      "CRM platforms",
      "Content management systems",
      "Payment providers",
      "Logistics and fulfilment",
      "Analytics platforms",
      "Marketing automation",
    ],
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   AI & Automation
   ══════════════════════════════════════════════════════════════════════════ */

const aiAutomation: Solution = {
  slug: "ai-automation",
  category: "AI & Automation",
  title: "AI & Automation",
  tagline: "Automate routine work and keep people on the decisions that need judgement.",
  summary:
    "Glocious builds AI-assisted workflows that handle repetitive communication and back-office processes — connecting the systems you already run and escalating exceptions to your team.",
  highlights: ["Workflow Automation", "Conversational Assistants", "Document Handling", "Process Integration"],
  problem: {
    intro:
      "Repetitive work — answering the same questions, re-entering data, routing requests — consumes time that should be spent with customers and on growth.",
    points: [
      "Teams answer the same routine questions repeatedly across multiple channels",
      "Data is re-entered manually between systems that do not talk to each other",
      "Requests get routed by whoever notices them first",
      "Business knowledge sits with individuals rather than in systems",
    ],
  },
  solution: {
    intro:
      "We identify the processes that consume the most manual effort and automate them — connecting existing systems, handling routine requests automatically and escalating exceptions to people.",
    points: [
      "Process review to identify what should be automated, and what should not",
      "Workflow automation connecting the business systems you already use",
      "Assistants that handle routine enquiries and escalate when needed",
      "Human review built into every flow for exceptions and oversight",
    ],
  },
  capabilities: [
    {
      title: "Workflow Automation",
      desc: "Connect systems and automate repetitive, rule-based business processes.",
    },
    {
      title: "Conversational Assistants",
      desc: "Handle routine enquiries automatically and route anything unresolved to your team.",
    },
    {
      title: "Document and Data Handling",
      desc: "Move information between documents and business systems without manual entry.",
    },
    {
      title: "Process Integration",
      desc: "Connect CRM, ERP, messaging and support tools into a single automated flow.",
    },
    {
      title: "Human-in-the-Loop Review",
      desc: "Approval and escalation steps wherever judgement or accountability is required.",
    },
    {
      title: "Automation Monitoring",
      desc: "Visibility into what ran, what succeeded and what needs attention.",
    },
  ],
  howItWorks: [
    {
      title: "Process discovery",
      desc: "We map the workflows consuming the most manual effort and identify candidates for automation.",
    },
    {
      title: "Automation design",
      desc: "We define what is automated, what is assisted and where people stay in the loop.",
    },
    {
      title: "Build and integrate",
      desc: "Flows are built and connected to your existing systems.",
    },
    {
      title: "Measure and extend",
      desc: "Automated flows are monitored and expanded as they prove reliable in production.",
    },
  ],
  useCases: [
    {
      title: "Customer enquiry handling",
      desc: "Answer routine questions immediately and hand complex cases to the right team.",
    },
    {
      title: "Lead capture and qualification",
      desc: "Capture, qualify and route enquiries without manual triage.",
    },
    {
      title: "Back-office data processing",
      desc: "Reduce manual entry between finance, operations and customer systems.",
    },
    {
      title: "Internal request routing",
      desc: "Route internal requests to the correct owner with an auditable trail.",
    },
  ],
  industries: ["bfsi", "real-estate", "healthcare", "education", "ecommerce", "it-technology"],
  benefits: [
    {
      title: "Less repetitive work",
      desc: "Routine tasks handled without consuming team time.",
    },
    {
      title: "Faster responses",
      desc: "Enquiries answered immediately rather than queued behind manual review.",
    },
    {
      title: "Consistent handling",
      desc: "Every request follows the same defined process, regardless of volume.",
    },
    {
      title: "Oversight maintained",
      desc: "Human review remains in place wherever a decision needs judgement.",
    },
  ],
  integration: {
    intro:
      "Automation is built as a layer over the systems you already run, so improving a process does not mean replacing your stack.",
    methods: [
      {
        title: "API integration",
        desc: "Connect the systems involved in a process through their existing interfaces.",
      },
      {
        title: "Webhooks and event triggers",
        desc: "Start a workflow the moment a business event occurs.",
      },
      {
        title: "Platform connectors",
        desc: "Prepared integrations for common CRM, ERP and support platforms.",
      },
      {
        title: "Scheduled jobs",
        desc: "Run recurring processing and reporting on a defined schedule.",
      },
    ],
    targets: [
      "CRM platforms",
      "ERP systems",
      "Helpdesk and support tools",
      "Messaging platforms",
      "Email platforms",
      "Internal databases",
    ],
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Registry
   ══════════════════════════════════════════════════════════════════════════ */

export const solutions: Solution[] = [
  businessMessaging,
  rcsMessaging,
  whatsappBusiness,
  voiceIvr,
  cloudTelephony,
  emailCommunication,
  apiMessaging,
  leadManagement,
  digitalMarketing,
  websiteDigitalSolutions,
  aiAutomation,
];

export const solutionBySlug: Record<string, Solution> = Object.fromEntries(
  solutions.map((solution) => [solution.slug, solution])
);

export function getSolution(slug: string): Solution | undefined {
  return solutionBySlug[slug];
}

/** Ordered category list — drives the "explore more" grouping if needed. */
export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  "Communication",
  "Digital Growth",
  "Technology",
  "AI & Automation",
];

/** Solutions that share a category with the given slug, excluding itself. */
export function getRelatedSolutions(slug: string, limit = 3): Solution[] {
  const current = getSolution(slug);
  if (!current) return [];

  const sameCategory = solutions.filter(
    (s) => s.category === current.category && s.slug !== current.slug
  );
  const others = solutions.filter(
    (s) => s.category !== current.category && s.slug !== current.slug
  );

  return [...sameCategory, ...others].slice(0, limit);
}
