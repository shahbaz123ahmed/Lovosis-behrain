import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const accessControllers: Product[] = [
  {
    id: 'oer-602',
    name: 'OER-602',
    slug: 'oer-602',
    category: 'Access Control',
    subcategory: 'Access Controllers',
    description: 'Double Doors Access Controller',
    imageUrl: '/VMS/controllers1.png',
    specifications: {
      'Card Capacity': 'Up to 200,000 common cards/personnel passwords',
      'Event Capacity': 'Up to 300,000 events',
      'Controllable Doors': '2 doors',
      'Network Interface': '1 × 100 Mbps Ethernet',
      'Interfaces': '4 × Wiegand input, 4 × RS485',
      'I/O': '1 fire input, 4 zone inputs, 4 case inputs, 4 outputs',
      'Power Output': '2 × DC 12 V',
      'Rated Input': 'AC 100–240 V, 50/60 Hz',
      'Operating Temperature': '–30°C to +65°C',
      'Dimensions': '342 × 325.5 × 88 mm; Weight: 3.5 kg'
    },
    features: [
      'Supports multi-door interlock functionality',
      'Anti-passback support for enhanced access security',
      'Supports door opening using a duress password',
      'Fire alarm linkage for emergency access control',
      'Door magnet detection support',
      'Supports backup storage battery connection',
      'Local event saving during network interruptions',
      'Automatically resumes interrupted data after network reconnection',
      'Web interface for convenient device configuration',
      'Supports EZAccess platform and UNV Guard server integration'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oer-502',
    name: 'OER-502',
    slug: 'oer-502',
    category: 'Access Control',
    subcategory: 'Access Controllers',
    description: 'Double Doors Access Controller',
    imageUrl: '/VMS/controllers2.png',
    specifications: {
      'Card Capacity': '22,000 common cards/personnel passwords',
      'Event Capacity': '50,000 events',
      'Controllable Doors': '2 doors',
      'Network Interface': '1 × 100 Mbps Ethernet',
      'Wiegand Interface': '4 × Wiegand inputs',
      'RS485 Interface': '1',
      'I/O': '1 fire input, 4 case inputs & 4 outputs',
      'Power': 'AC 100–240 V, 50/60 Hz',
      'Operating Temperature': '–30°C to +65°C',
      'Dimensions': '230 × 227.8 × 75.8 mm'
    },
    features: [
      'Supports card, password, card + password, and QR code authentication',
      'Supports multi-door interlock for enhanced access security',
      'Anti-passback functionality helps prevent unauthorized repeated entry',
      'Supports door opening using a duress password',
      'Fire alarm linkage provides enhanced emergency security',
      'Door magnet detection enables real-time door status monitoring',
      'Supports configuration directly through a web interface',
      'Stores access data locally during network interruptions',
      'Automatically resumes interrupted data transmission after network recovery',
      'Supports integration with EZAccess and UNV Guard server'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oer-604',
    name: 'OER-604',
    slug: 'oer-604',
    category: 'Access Control',
    subcategory: 'Access Controllers',
    description: 'Four-Door Access Controller',
    imageUrl: '/VMS/controllers1.png',
    specifications: {
      'Controllable Doors': '4',
      'Card Capacity': 'Up to 200,000',
      'Event Capacity': 'Up to 300,000',
      'Network Interface': '1 × 100 Mbps Ethernet',
      'Wiegand Interface': '8 × Wiegand inputs',
      'RS485 Interface': '4',
      'Power Input': 'AC 100–240 V, 50/60 Hz',
      'Backup Power': 'DC 12 V / 7 Ah battery support',
      'Operating Temperature': '–30°C to +65°C',
      'Dimensions': '342 × 325.5 × 88 mm'
    },
    features: [
      'High-speed concurrent processing with ARM architecture',
      'Supports card, password, card + password, and QR code authentication',
      'Supports network transparent transmission',
      'Fire alarm linkage for enhanced security',
      'Supports storage/backup battery connection',
      'Web-based device configuration',
      'Supports multi-door interlock functionality',
      'Anti-passback access control support',
      'Local data saving during network interruption with data recovery after reconnection',
      'Supports duress password access for emergency situations'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oer-504',
    name: 'OER-504',
    slug: 'oer-504',
    category: 'Access Control',
    subcategory: 'Access Controllers',
    description: 'Four Doors Access Controller',
    imageUrl: '/VMS/controllers2.png',
    specifications: {
      'Controllable Doors': '4',
      'Card Capacity': '22,000 common cards/personnel passwords',
      'Event Capacity': '50,000',
      'Network': '1 × 100 Mbps Ethernet, TCP/IP',
      'Interfaces': '4 × Wiegand inputs + 1 × RS485',
      'I/O': '1 × fire input, 4 × case inputs, 4 × outputs',
      'Power Output': 'DC 12V; up to 5A for door lock, 1.5A for card reader',
      'Rated Input': 'AC 100–240V, 50/60Hz',
      'Operating Temperature': '–30°C to +65°C',
      'Dimensions / Weight': '230 × 227.8 × 75.8 mm / 2.2 kg'
    },
    features: [
      'High-speed concurrent processing with ARM processor',
      'Supports network transparent transmission',
      'Multiple authentication methods for flexible access control',
      'Supports multi-door interlock functionality',
      'Anti-passback support for enhanced access security',
      'Supports door opening with duress password',
      'Door magnet detection for door-status monitoring',
      'Local event saving during network interruption',
      'Automatically resumes interrupted data after network reconnection',
      'Supports EZAccess, UNV Guard, and web-based device configuration'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oer-601',
    name: 'OER-601',
    slug: 'oer-601',
    category: 'Access Control',
    subcategory: 'Access Controllers',
    description: 'Single Door Access Controller',
    imageUrl: '/VMS/controllers1.png',
    specifications: {
      'Card Capacity': 'Up to 200,000 common cards/personnel passwords',
      'Event Capacity': 'Up to 300,000 events',
      'Communication': 'TCP/IP, 1 × 100 Mbps Ethernet',
      'Interfaces': '2 × Wiegand inputs, 4 × RS485',
      'I/O': '1 × fire input, 4 × zone inputs, 2 × case inputs, 2 × outputs',
      'Door Control': '1 × lock control, 1 × door magnet, 1 × exit button',
      'Power Input': 'AC 100–240 V, 50/60 Hz',
      'Backup Power': 'DC 12 V / 7 Ah battery support',
      'Operating Temperature': '−30°C to 65°C',
      'Dimensions / Weight': '342 × 325.5 × 88 mm / 3300 g'
    },
    features: [
      'Supports card, password, card + password, and QR code authentication',
      'Supports fire-alarm linkage for enhanced security',
      'Provides storage battery connection for backup operation',
      'Supports network transparent transmission',
      'Allows device configuration through a web interface',
      'Supports door magnet detection',
      'Saves access data locally during network interruptions',
      'Automatically resumes interrupted data transmission after reconnection',
      'Supports anti-passback functionality',
      'Supports door opening using a duress password'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oer-501',
    name: 'OER-501',
    slug: 'oer-501',
    category: 'Access Control',
    subcategory: 'Access Controllers',
    description: 'Single Door Access Controller',
    imageUrl: '/VMS/controllers2.png',
    specifications: {
      'Card Capacity': '22,000 common cards/personnel passwords',
      'Event Capacity': '50,000 events',
      'Network Interface': '1 × 100 Mbps Ethernet',
      'Reader Interface': '2 × Wiegand inputs + 1 × RS485',
      'I/O': '1 × fire input, 4 × case inputs, 2 × outputs',
      'Door Interface': '1 × lock control, 1 × door magnet, 1 × exit button',
      'Power Output': 'DC 12 V; lock up to 5 A, reader up to 1.5 A',
      'Rated Input': 'AC 100–240 V, 50/60 Hz',
      'Operating Temperature': '–30°C to +65°C',
      'Dimensions': '230 × 227.8 × 75.8 mm; weight 2.1 kg'
    },
    features: [
      'Supports multiple authentication methods for flexible access control',
      'Fire alarm linkage enhances emergency security management',
      'Supports door magnet detection and exit button connection',
      'Anti-passback functionality improves access security',
      'Supports door opening using a duress password',
      'Stores data locally during network interruptions',
      'Automatically resumes data transmission after network reconnection',
      'Supports configuration through a convenient web interface',
      'Compatible with EZAccess platform and UNV Guard server',
      'Network transparent transmission enables reliable system integration'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
