export interface CaseMedia {
  src: string;
  caption: string;
  type?: 'image' | 'video loop';
}

export interface Project {
  id: string;
  name: string;
  category: string;
  desc: string;
  status: string;
  image?: string;
  tier: 'case-study' | 'selected' | 'lab';
  figmaLink?: string;
  externalLink?: string;
  /* Internal route to a live interactive demo of this project */
  demoLink?: string;
  gallery?: string[];
  background?: string;
  outcome?: string;
  /* Light case-study (Spotlight-style) content */
  role?: string;
  team?: string[];
  overview?: string[];
  highlightStatement?: string;
  highlights?: CaseMedia[];
}

export const PLAYGROUND_FIGMA_LINK = "https://www.figma.com/design/Jeck3YYRm9V67sZKxlTORk/Ama-s-playground?node-id=0-1&t=vmxcCo8K1abxScAH-1";

export const projects: Project[] = [
  {
    id: 'logit',
    name: 'LogIt.',
    category: 'Fintech · SMS Parsing · Building',
    desc: 'Personal finance tracker that automatically parses MoMo SMS messages. No manual logging. Built for Ghanaian users on mobile money.',
    status: 'Currently building',
    image: '/projects/logit-cover.png',
    tier: 'case-study'
  },
  {
    id: 'attendance',
    name: 'Attendance Hub.',
    category: 'Full-Stack · Biometric · Live',
    desc: 'Biometric attendance management system designed and built from scratch. Real-time dashboard, fingerprint and RFID registration.',
    status: 'Live product',
    image: '/1.png',
    tier: 'case-study'
  },
  {
    id: 'fraud',
    name: 'Fraud Portal.',
    category: 'Enterprise UX · Data · Telecom',
    desc: 'High-stakes, data-heavy UX for analysts resolving telecom fraud cases. Case queue, severity scoring, and resolution.',
    status: 'Client Project',
    image: '/projects/fraud.png',
    tier: 'selected',
    background: 'Telecom fraud arrives in waves, not one case at a time. Around 150 cases flagged per day, each with its own risk signals and urgency. Before this redesign, analysts worked case-by-case with no severity ranking, so a low-risk duplicate charge could sit in the same queue as an active account takeover. The real problem wasn’t visibility, it was prioritization: which case to open first. I designed a triage system: auto-tagged intake, a severity model that surfaces the highest-risk cases first, and a structured resolution flow with case notes and an audit trail, plus keyboard shortcuts throughout, since analysts live in this screen for hours and every extra click is a delay.',
    outcome: 'Delivered a complete design system and high-fidelity mockups covering the case queue, severity scoring logic, and resolution workflow, ready for engineering handoff.',
    demoLink: '/fraud-net',
    role: 'Product Designer: Enterprise UX, Triage System, Design System',
    team: ['Solo design, client project'],
    overview: [
      'Telecom fraud arrives in waves, not one case at a time. Around 150 cases are flagged per day, each with its own risk signals and urgency. Before this redesign, analysts worked case-by-case with no severity ranking, so a low-risk duplicate charge could sit in the same queue as an active account takeover.',
      'The real problem wasn’t visibility, it was prioritization: which case to open first. I designed a triage system: auto-tagged intake, a severity model that surfaces the highest-risk cases first, and a structured resolution flow with case notes and an audit trail, plus keyboard shortcuts throughout, since analysts live in this screen for hours and every extra click is a delay.',
      'Delivered a complete design system and high-fidelity mockups covering the case queue, severity scoring logic, and resolution workflow, ready for engineering handoff.',
    ],
    highlightStatement: 'A triage queue that surfaces the highest-risk of 150 daily fraud cases first, instead of making analysts hunt for them.',
    highlights: [
      { src: '/projects/fraud.png', caption: 'Case queue with severity scoring.' },
      { src: '/projects/fraud-net.png', caption: 'FraudNet, a self-built interactive demo of the monitoring concept.' },
    ]
  },
  {
    id: 'interior',
    name: 'Axis Living',
    category: 'Web Design · Brand · Visual',
    desc: 'Website for an interior design studio. Visual craft translating into digital atmosphere.',
    status: 'Side Project',
    image: '/axis-hero.png',
    tier: 'selected',
    externalLink: 'https://axis-living.vercel.app/',
    gallery: ['/3.png', '/4.png'],
    role: 'Designer & Developer: Web Design, Brand, Build',
    team: ['Solo project'],
    overview: [
      'Axis Living is a website for a friend’s interior design studio, built to give the business visibility and make managing it easier.',
      'The brief was atmosphere: the studio’s visual craft had to translate into a digital space that feels as considered as the interiors themselves.',
    ],
    highlightStatement: 'An interior design studio’s visual craft, translated into digital atmosphere.',
    highlights: [
      { src: '/axis-hero.png', caption: 'Homepage hero.' },
      { src: '/3.png', caption: 'Portfolio spread.' },
      { src: '/4.png', caption: 'Project detail view.' },
    ]
  },
  {
    id: 'invoice',
    name: 'Invoice Builder.',
    category: 'Product Design · SaaS · Tool',
    desc: 'Focused invoice generation tool. Every feature had to earn its place. Designed around the actual workflow.',
    status: 'Side Project',
    image: '/projects/invoice.png',
    tier: 'selected',
    role: 'Product Designer: SaaS, Workflow Design',
    team: ['Solo project'],
    overview: [
      'Built alongside Axis Living to make running the business easier: invoicing without the overhead.',
      'A focused invoice generation tool where every feature had to earn its place, designed around the actual workflow rather than a feature checklist.',
    ],
    highlightStatement: 'Invoicing designed around the actual workflow: every feature had to earn its place.',
    highlights: [
      { src: '/projects/invoice.png', caption: 'Invoice builder interface.' },
    ]
  },
  {
    id: 'spatial',
    name: 'Spatial Commerce.',
    category: 'Spatial Design · VisionOS · Concept',
    desc: 'Shopping UI concept for Apple Vision Pro. What does commerce feel like when the interface is the room?',
    status: 'Design concept',
    image: '/Homepage.jpg',
    tier: 'lab',
    role: 'Product Designer: Spatial UI, VisionOS Concept',
    team: ['Solo project'],
    overview: [
      'A shopping UI concept for Apple Vision Pro, exploring what commerce feels like when the interface is the room.',
    ],
    highlightStatement: 'What does commerce feel like when the interface is the room?',
    highlights: [
      { src: '/Homepage.jpg', caption: 'Spatial storefront concept.' },
    ]
  },
  {
    id: 'forex',
    name: 'Forex Bot.',
    category: 'Fintech · Telegram Bot · Automation',
    desc: 'An automated forex trading bot running entirely within Telegram. No UI design, purely logic-driven execution, real-time trade signals, and risk management through a command-based interface.',
    status: 'Hobby Project',
    image: '/Hand and iPhone 16 Pro.png',
    tier: 'lab',
    role: 'Designer & Builder: Bot Logic, Automation',
    team: ['Solo project'],
    overview: [
      'An automated forex trading bot running entirely within Telegram. No UI design, purely logic-driven execution, real-time trade signals, and risk management through a command-based interface.',
    ],
    highlightStatement: 'A trading interface with no interface: signals, execution, and risk management inside Telegram.',
    highlights: [
      { src: '/Hand and iPhone 16 Pro.png', caption: 'Bot running in Telegram.' },
    ]
  },
  {
    id: 'racing',
    name: 'TurboCircuit',
    category: 'Game Design · HUD · In Progress',
    desc: 'HUD and interface for a racing game. The most extreme version of performance-first design.',
    status: 'Design in progress',
    image: '/SPLASH SCREEN.png',
    tier: 'lab',
    figmaLink: 'https://www.figma.com/design/Jeck3YYRm9V67sZKxlTORk/Ama-s-playground?node-id=7-14170&t=ibrIIBMxORKAQOQ1-4',
    role: 'UI Designer: Game HUD, Interface Design',
    team: ['Solo project'],
    overview: [
      'HUD and interface design for a racing game: the most extreme version of performance-first design, where every element competes with the road.',
    ],
    highlightStatement: 'Performance-first design at its most extreme: an interface that competes with the road.',
    highlights: [
      { src: '/SPLASH SCREEN.png', caption: 'Splash screen.' },
    ]
  }
];

/* Listing order: case studies, then selected work, then lab experiments */
export function getOrderedProjects(): Project[] {
  return [
    ...projects.filter((p) => p.tier === 'case-study'),
    ...projects.filter((p) => p.tier === 'selected'),
    ...projects.filter((p) => p.tier === 'lab'),
  ];
}

export function getProjectHref(projectId: string): string {
  if (projectId === 'logit') return '/work/logit';
  if (projectId === 'attendance') return '/work/attendance';
  return `/work/${projectId}`;
}

/* The project after this one in listing order, wrapping at the end */
export function getNextProject(projectId: string): Project {
  const ordered = getOrderedProjects();
  const idx = ordered.findIndex((p) => p.id === projectId);
  return ordered[(idx + 1) % ordered.length];
}
