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
  gallery?: string[];
  background?: string;
  outcome?: string;
}

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
    outcome: 'Delivered a complete design system and high-fidelity mockups covering the case queue, severity scoring logic, and resolution workflow, ready for engineering handoff.'
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
    gallery: ['/3.png', '/4.png']
  },
  { 
    id: 'invoice', 
    name: 'Invoice Builder.', 
    category: 'Product Design · SaaS · Tool', 
    desc: 'Focused invoice generation tool. Every feature had to earn its place. Designed around the actual workflow.',
    status: 'Side Project',
    image: '/projects/invoice.png',
    tier: 'selected'
  },
  { 
    id: 'spatial', 
    name: 'Spatial Commerce.', 
    category: 'Spatial Design · VisionOS · Concept', 
    desc: 'Shopping UI concept for Apple Vision Pro. What does commerce feel like when the interface is the room?', 
    status: 'Design concept',
    image: '/Homepage.jpg',
    tier: 'lab'
  },
  { 
    id: 'forex', 
    name: 'Forex Bot.', 
    category: 'Fintech · Telegram Bot · Automation', 
    desc: 'An automated forex trading bot running entirely within Telegram. No UI design, purely logic-driven execution, real-time trade signals, and risk management through a command-based interface.',
    status: 'Hobby Project',
    image: '/Hand and iPhone 16 Pro.png',
    tier: 'lab'
  },
  { 
    id: 'racing', 
    name: 'TurboCircuit', 
    category: 'Game Design · HUD · In Progress', 
    desc: 'HUD and interface for a racing game. The most extreme version of performance-first design.', 
    status: 'Design in progress',
    image: '/SPLASH SCREEN.png',
    tier: 'lab',
    figmaLink: 'https://www.figma.com/design/Jeck3YYRm9V67sZKxlTORk/Ama-s-playground?node-id=7-14170&t=ibrIIBMxORKAQOQ1-4'
  },
  {
    id: 'playground',
    name: 'Figma Playground.',
    category: 'Mini-Projects · Curated Chaos',
    desc: 'A live peek into my digital playground. Micro-interactions, UI experiments, and unfinished ideas.',
    status: 'Always active',
    image: '/figma.png',
    tier: 'lab',
    figmaLink: 'https://figma.com/file/example-playground'
  },
  {
    id: 'fraud-net',
    name: 'FraudNet.',
    category: 'Interactive Demo · Telecom · Data Viz',
    desc: 'A self-built telecom fraud-monitoring dashboard concept. Live case feed, fraud network graph, and geographic risk heatmap.',
    status: 'Prototype',
    image: '/projects/fraud-net.png',
    tier: 'lab'
  }
];
