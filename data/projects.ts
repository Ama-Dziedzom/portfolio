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
}

export const projects: Project[] = [
  { 
    id: 'logit', 
    name: 'LogIt.', 
    category: 'Fintech · SMS Parsing · Building', 
    desc: 'Personal finance tracker that automatically parses MoMo SMS messages. No manual logging. Built for Ghanaian users on mobile money.', 
    status: 'Currently building',
    image: '/projects/logit.png',
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
    tier: 'selected'
  },
  { 
    id: 'interior', 
    name: 'Interior Studio.', 
    category: 'Web Design · Brand · Visual', 
    desc: 'Website for an interior design studio — visual craft translating into digital atmosphere.', 
    status: 'Side Project',
    image: '/projects/interior.png',
    tier: 'selected',
    externalLink: 'https://interior-studio-example.com'
  },
  { 
    id: 'invoice', 
    name: 'Invoice Builder.', 
    category: 'Product Design · SaaS · Tool', 
    desc: 'Focused invoice generation tool — every feature had to earn its place. Designed around the actual workflow.', 
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
    image: '/projects/spatial.png',
    tier: 'lab'
  },
  { 
    id: 'forex', 
    name: 'Forex Bot.', 
    category: 'Fintech · Trading UI · Dashboard', 
    desc: 'Interface for an automated forex trading bot — real-time positions, trade history, analytics and risk controls.', 
    status: 'Hobby Project',
    image: '/projects/forex.png',
    tier: 'lab'
  },
  { 
    id: 'racing', 
    name: 'Racing Game UI.', 
    category: 'Game Design · HUD · In Progress', 
    desc: 'HUD and interface for a racing game. The most extreme version of performance-first design.', 
    status: 'Design in progress',
    image: '/projects/racing.png',
    tier: 'lab',
    figmaLink: 'https://figma.com/file/example-racing-game'
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
  }
];
