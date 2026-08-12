import { Solution } from '@/types';

// Inlined premium SVG illustrations
const svgSurveillance = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="%23F1F7FE"/><rect x="60" y="80" width="200" height="110" rx="8" fill="%230B1F33" opacity="0.9"/><rect x="75" y="95" width="80" height="60" rx="3" fill="%23111827"/><rect x="165" y="95" width="80" height="60" rx="3" fill="%23111827"/><circle cx="290" cy="80" r="30" fill="%231683F3" opacity="0.15"/><path d="M275 70L290 80L275 90V70Z" fill="%231683F3"/><circle cx="320" cy="160" r="20" fill="%231683F3" opacity="0.2"/><line x1="310" y1="160" x2="330" y2="160" stroke="%231683F3" stroke-width="2"/><line x1="320" y1="150" x2="320" y2="170" stroke="%231683F3" stroke-width="2"/></svg>`;

const svgAiSurveillance = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="%23F1F7FE"/><circle cx="200" cy="125" r="70" fill="%230B1F33" opacity="0.08"/><circle cx="200" cy="125" r="50" fill="%230B1F33" opacity="0.12"/><circle cx="200" cy="125" r="30" fill="%230B1F33"/><circle cx="200" cy="125" r="12" fill="%231683F3"/><circle cx="204" cy="121" r="4" fill="white" opacity="0.8"/><path d="M160 90L140 70M240 90L260 70M160 160L140 180M240 160L260 180" stroke="%231683F3" stroke-width="2" stroke-linecap="round"/><rect x="130" y="60" width="20" height="8" rx="4" fill="%231683F3" opacity="0.5"/><rect x="250" y="60" width="20" height="8" rx="4" fill="%231683F3" opacity="0.5"/></svg>`;

const svgCctv = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="%23F1F7FE"/><rect x="80" y="90" width="160" height="70" rx="8" fill="%230B1F33"/><rect x="70" y="86" width="22" height="78" rx="4" fill="%23111827"/><rect x="240" y="100" width="70" height="50" rx="6" fill="%231683F3"/><circle cx="275" cy="125" r="14" fill="%23111827"/><circle cx="275" cy="125" r="5" fill="%231683F3"/><path d="M195 130 L340 80" stroke="%231683F3" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/><path d="M195 120 L340 170" stroke="%231683F3" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/></svg>`;

const svgAccessControl = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="%23F1F7FE"/><rect x="140" y="40" width="120" height="170" rx="12" fill="%230B1F33" opacity="0.9"/><rect x="155" y="55" width="90" height="55" rx="6" fill="%23111827"/><circle cx="200" cy="83" r="12" fill="%231683F3" opacity="0.7"/><circle cx="200" cy="145" r="20" fill="%231683F3" opacity="0.15"/><path d="M189 145 C189 138.9 193.9 134 200 134 C206.1 134 211 138.9 211 145" stroke="%231683F3" stroke-width="2.5" stroke-linecap="round" fill="none"/><circle cx="200" cy="145" r="7" fill="%231683F3"/><rect x="320" y="90" width="40" height="70" rx="6" fill="%23E4EAF1"/><path d="M325 125 L355 125M355 110 L355 140" stroke="%230B1F33" stroke-width="2.5" stroke-linecap="round"/></svg>`;

const svgStorage = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="%23F1F7FE"/><rect x="50" y="60" width="300" height="40" rx="6" fill="%230B1F33"/><rect x="50" y="110" width="300" height="40" rx="6" fill="%230B1F33" opacity="0.8"/><rect x="50" y="160" width="300" height="40" rx="6" fill="%230B1F33" opacity="0.6"/><circle cx="80" cy="80" r="5" fill="%231683F3"/><circle cx="80" cy="130" r="5" fill="%2332A9FF"/><circle cx="80" cy="180" r="5" fill="%231683F3" opacity="0.6"/><rect x="100" y="73" width="60" height="14" rx="3" fill="%23111827"/><rect x="100" y="123" width="80" height="14" rx="3" fill="%23111827"/><rect x="100" y="173" width="50" height="14" rx="3" fill="%23111827"/></svg>`;

const svgItSolution = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="%23F1F7FE"/><rect x="60" y="50" width="80" height="150" rx="6" fill="%230B1F33"/><rect x="160" y="80" width="80" height="120" rx="6" fill="%230B1F33" opacity="0.75"/><rect x="260" y="100" width="80" height="100" rx="6" fill="%231683F3" opacity="0.8"/><rect x="70" y="65" width="60" height="8" rx="2" fill="%231683F3" opacity="0.7"/><rect x="170" y="95" width="60" height="8" rx="2" fill="%231683F3" opacity="0.5"/><rect x="270" y="115" width="60" height="8" rx="2" fill="white" opacity="0.5"/><path d="M100 200 L100 215 L300 215 L300 200" stroke="%23E4EAF1" stroke-width="3"/><rect x="185" y="215" width="30" height="12" rx="2" fill="%23E4EAF1"/></svg>`;

const svgSeo = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="%23F1F7FE"/><circle cx="190" cy="115" r="75" stroke="%230B1F33" stroke-width="3" fill="none"/><circle cx="190" cy="115" r="75" stroke="%231683F3" stroke-width="1.5" stroke-dasharray="8 6" fill="none" opacity="0.5"/><ellipse cx="190" cy="115" rx="30" ry="75" stroke="%230B1F33" stroke-width="2" fill="none"/><line x1="115" y1="115" x2="265" y2="115" stroke="%230B1F33" stroke-width="2"/><line x1="125" y1="80" x2="255" y2="80" stroke="%23E4EAF1" stroke-width="1.5"/><line x1="125" y1="150" x2="255" y2="150" stroke="%23E4EAF1" stroke-width="1.5"/><circle cx="300" cy="165" r="28" fill="%23111827"/><path d="M312 177 L322 187" stroke="%231683F3" stroke-width="3" stroke-linecap="round"/><circle cx="300" cy="165" r="17" stroke="%231683F3" stroke-width="2.5" fill="none"/></svg>`;

const svgCareers = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="%23F1F7FE"/><rect x="100" y="120" width="200" height="90" rx="8" fill="%230B1F33"/><circle cx="150" cy="105" r="22" fill="%231683F3" opacity="0.3"/><circle cx="150" cy="100" r="16" fill="%230B1F33"/><circle cx="200" cy="105" r="22" fill="%231683F3" opacity="0.3"/><circle cx="200" cy="100" r="16" fill="%230B1F33"/><circle cx="250" cy="105" r="22" fill="%231683F3" opacity="0.3"/><circle cx="250" cy="100" r="16" fill="%230B1F33"/><rect x="140" y="60" width="120" height="30" rx="6" fill="%231683F3" opacity="0.15"/><path d="M155 75 L245 75" stroke="%231683F3" stroke-width="2.5" stroke-linecap="round"/><path d="M165 67 L165 83M200 65 L200 85M235 67 L235 83" stroke="%231683F3" stroke-width="1.5" stroke-linecap="round"/></svg>`;

export const solutions: Solution[] = [
  {
    id: 'sol-1',
    name: 'Surveillance',
    slug: 'surveillance',
    iconName: 'Shield',
    shortDesc: 'Enterprise video monitoring & threat mitigation.',
    longDesc: 'We deliver end-to-end enterprise video surveillance systems with centralized monitoring dashboards, multi-camera grid layouts, and AI-driven threat detection. Our solutions protect large campuses, office parks, and government facilities through 24/7 live and recorded feeds.',
    problem: 'Enterprises face blind spots, delayed threat responses, and fragmented monitoring across multiple buildings and floors.',
    solution: 'Integrate a unified IP camera network connected to a central command center with AI analytics, real-time alerts, and cloud backup capabilities.',
    products: ['4MP Smart IP Dome Camera', '8-Channel AI Network Video Recorder', 'Full-Color Night Vision Bullet Camera'],
    benefits: [
      'Centralized live monitoring across multiple sites',
      'AI-powered threat detection & automated alerts',
      'High-definition 24/7 recording with smart search',
      'Scalable network architecture for enterprise growth'
    ],
    imageUrl: svgSurveillance
  },
  {
    id: 'sol-2',
    name: 'AI Surveillance',
    slug: 'ai-surveillance',
    iconName: 'Eye',
    shortDesc: 'Face recognition & smart intrusion prevention.',
    longDesc: 'Our AI Surveillance solutions go beyond traditional CCTV by applying deep learning models to live feeds. Facial recognition, license plate reading, crowd density detection, and perimeter intrusion alerts transform passive cameras into intelligent security sensors.',
    problem: 'Traditional surveillance cannot automatically detect or act on threats, requiring constant manual monitoring by security staff.',
    solution: 'Deploy AI-enabled IP cameras with built-in edge computing that recognize faces, detect anomalies, and trigger active deterrents autonomously.',
    products: ['4MP Smart IP Dome Camera', '8-Channel AI Network Video Recorder', 'Biometric Access Control Terminal'],
    benefits: [
      'Automated facial recognition with watchlist alerts',
      'Smart intrusion & line-crossing detection',
      'Reduce false alarms with AI human/vehicle classification',
      'Real-time event notifications on mobile devices'
    ],
    imageUrl: svgAiSurveillance
  },
  {
    id: 'sol-3',
    name: 'CCTV',
    slug: 'cctv',
    iconName: 'Camera',
    shortDesc: 'Civil Defence compliant IP monitoring systems.',
    longDesc: 'We design and install CCTV systems that fully comply with Civil Defence and local government regulations. Our solutions cover hospitals, schools, malls, and public infrastructure with certified IP cameras, proper cable management, and official documentation packages.',
    problem: 'Organizations struggle to meet Civil Defence CCTV mandates, risking fines and operating license issues.',
    solution: 'Supply and install a compliant IP CCTV system with proper camera placement, recording duration, resolution standards, and certified documentation.',
    products: ['4MP Smart IP Dome Camera', 'Full-Color Night Vision Bullet Camera', '8-Channel AI Network Video Recorder'],
    benefits: [
      'Full Civil Defence compliance certification support',
      'Proper camera placement per regulatory standards',
      'Required recording retention (30/90 days)',
      'Official system documentation for authorities'
    ],
    imageUrl: svgCctv
  },
  {
    id: 'sol-4',
    name: 'Access Control',
    slug: 'access-control',
    iconName: 'Lock',
    shortDesc: 'Biometrics & security barrier terminals.',
    longDesc: 'Our access control solutions combine fingerprint scanners, facial recognition terminals, RFID card readers, and electromagnetic locks to create layered door security. We integrate all components with a centralized software dashboard for real-time access logs and scheduling.',
    problem: 'Physical keys can be lost or duplicated, and there is no visibility into who accesses restricted areas and when.',
    solution: 'Replace mechanical locks with biometric and RFID-based electronic access control systems that log every entry with timestamps and user identity.',
    products: ['Biometric Access Control Terminal', '16-Port Gigabit PoE Switch'],
    benefits: [
      'Keyless entry using fingerprint or facial recognition',
      'Real-time access logs and historical reports',
      'Instant credential revocation for departed staff',
      'Time-based automated lock/unlock schedules'
    ],
    imageUrl: svgAccessControl
  },
  {
    id: 'sol-5',
    name: 'Storage Solutions',
    slug: 'storage-solutions',
    iconName: 'Server',
    shortDesc: 'Surveillance-grade SAN/NAS storage arrays.',
    longDesc: 'Long-term video retention demands purpose-built storage infrastructure. We supply and configure surveillance-optimized NAS arrays, RAID-protected hard drive banks, and enterprise SAN solutions that guarantee continuous write cycles and zero data loss for critical footage archives.',
    problem: 'Standard consumer hard drives fail quickly under continuous 24/7 write loads, causing data loss and compliance issues.',
    solution: 'Install surveillance-grade hard drives in RAID-protected NAS enclosures with sufficient capacity for mandated retention periods.',
    products: ['Surveillance Hard Drive 4TB', '8-Channel AI Network Video Recorder', '16-Port Gigabit PoE Switch'],
    benefits: [
      'Purpose-built drives rated for 24/7 continuous writes',
      'RAID redundancy preventing data loss on drive failure',
      'Scalable storage capacity as your camera count grows',
      'Remote storage health monitoring and alerts'
    ],
    imageUrl: svgStorage
  },
  {
    id: 'sol-6',
    name: 'IT Solution',
    slug: 'it-solution',
    iconName: 'Cpu',
    shortDesc: 'Server racks & network infrastructure cabling.',
    longDesc: 'A reliable security system is built on a solid IT backbone. We provide structured cabling, server rack installation, PoE switch configuration, fiber optic runs, and full network documentation to ensure your surveillance infrastructure is fast, stable, and future-ready.',
    problem: 'Poor network infrastructure causes dropped camera feeds, slow recording speeds, and unreliable remote access.',
    solution: 'Design and install a dedicated network infrastructure with Cat6 structured cabling, managed PoE switches, and properly configured VLANs for surveillance traffic.',
    products: ['16-Port Gigabit PoE Switch', '8-Channel AI Network Video Recorder', 'Surveillance Hard Drive 4TB'],
    benefits: [
      'Gigabit backbone for high-bandwidth 4K camera streams',
      'Dedicated VLAN isolation for security network traffic',
      'Certified structured cabling with proper documentation',
      'Remote network monitoring and management capability'
    ],
    imageUrl: svgItSolution
  },
  {
    id: 'sol-7',
    name: 'Google SEO',
    slug: 'google-seo',
    iconName: 'Globe',
    shortDesc: 'Maximize Omani search index discoverability.',
    longDesc: 'Beyond physical security, we help security companies and distributors grow their digital presence. Our SEO services target Oman and GCC search markets, optimizing your website to rank for high-intent security product and service keywords in Arabic and English.',
    problem: 'Security businesses invest heavily in physical products but remain invisible to online buyers searching for their services.',
    solution: 'Implement a targeted SEO strategy including keyword research, on-page optimization, Google Business Profile management, and content creation for Omani markets.',
    products: [],
    benefits: [
      'Rank #1 for local security product keywords in Oman',
      'Bilingual Arabic & English content optimization',
      'Google Business Profile management for local leads',
      'Monthly ranking reports and performance tracking'
    ],
    imageUrl: svgSeo
  },
  {
    id: 'sol-8',
    name: 'Careers',
    slug: 'careers',
    iconName: 'Briefcase',
    shortDesc: 'Join the leading ELV technology distributor.',
    longDesc: 'Lovosis Security Solutions is Bahrain\'s premier ELV systems distributor and we are always looking for talented security engineers, sales professionals, and technical support staff. Join our growing team and be part of the future of smart security in the Gulf region.',
    problem: 'The security industry lacks skilled ELV engineers and professionals who understand both the technology and customer needs.',
    solution: 'We offer competitive packages, hands-on technical training, and a clear career path within the rapidly expanding GCC security market.',
    products: [],
    benefits: [
      'Work with premium global security brands',
      'Hands-on technical certifications and training',
      'Competitive salary with performance incentives',
      'Career growth in the expanding GCC security market'
    ],
    imageUrl: svgCareers
  }
];

export const solutionsMegaMenuData: Record<string, { 
  icon: string; 
  items?: { title: string; icon: string; href: string; desc?: string }[];
  sections?: { title: string; items: { title: string; icon: string; href: string; desc?: string }[] }[];
}> = {
  'Solutions by Industry': {
    icon: 'Building2',
    items: [
      { title: 'Building', icon: 'Building2', href: '/solutions/industry/building', desc: 'Secure properties & facilities' },
      { title: 'Retail', icon: 'ShoppingBag', href: '/solutions/industry/retail', desc: 'Protect stores & merchandise' },
      { title: 'Bank', icon: 'Landmark', href: '/solutions/industry/bank', desc: 'High-security financial solutions' },
      { title: 'School', icon: 'GraduationCap', href: '/solutions/industry/school', desc: 'Campus safety systems' },
      { title: 'Shopping Mall', icon: 'ShoppingCart', href: '/solutions/industry/shopping-mall', desc: 'Large-scale retail security' },
      { title: 'Hospital', icon: 'Hospital', href: '/solutions/industry/hospital', desc: 'Healthcare facility protection' },
      { title: 'Warehouse and Logistics', icon: 'Truck', href: '/solutions/industry/warehouse', desc: 'Supply chain surveillance' },
      { title: 'Stadium', icon: 'Trophy', href: '/solutions/industry/stadium', desc: 'Event & crowd monitoring' },
      { title: 'Hotel', icon: 'Hotel', href: '/solutions/industry/hotel', desc: 'Hospitality security systems' }
    ]
  },
  'Solutions by Function': {
    icon: 'Settings',
    items: [
      { title: 'Smart intrusion prevention', icon: 'ShieldAlert', href: '/solutions/function/smart-intrusion' }
    ]
  },
  'SMB Solutions': {
    icon: 'Briefcase',
    sections: [
      {
        title: 'SMB by Scenarios',
        items: [
          { title: 'Farm', icon: 'Leaf', href: '/solutions/smb/farm' }
        ]
      },
      {
        title: 'SMB by Application',
        items: [
          { title: 'Ultimate Night Security', icon: 'Briefcase', href: '/solutions/smb/night-security' }
        ]
      }
    ]
  }
};

