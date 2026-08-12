import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const cardReaders: Product[] = [
  {
    id: 'oec-w2d-m',
    name: 'OEC-W2D-M',
    slug: 'oec-w2d-m',
    category: 'Access Control',
    subcategory: 'Card Readers',
    description: 'Desktop Mifare Card Issuer',
    imageUrl: '/VMS/Acscard1.png',
    specifications: {
      'Material': 'PC',
      'Operating Frequency': '13.56 MHz',
      'Reading Distance': '≤ 3 cm',
      'Card Protocol': 'ISO 14443-A / ISO 14443-B',
      'Reading Time': '< 1 second',
      'Interface': 'USB, plug-and-play',
      'Power Supply': 'DC 5 V via USB, ≤116 mA',
      'Operating Environment': '-30°C to 65°C, 10%–90% RH',
      'Dimensions': '110 × 65 × 24 mm',
      'Net Weight': '0.058 kg'
    },
    features: [
      'Supports reading Mifare card numbers',
      'Supports writing data to specified card sectors',
      'USB-powered design eliminates the need for a separate power adapter',
      'Plug-and-play USB connectivity enables easy setup',
      'Driver-free operation simplifies PC integration',
      'Fast card reading in under one second',
      'Compact design suitable for desktop installation',
      'Supports 10-digit decimal card-number output',
      'Designed for reliable indoor access-control applications',
      'Compatible with standard ISO 14443-A/B card protocols'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oec-r3h-mk',
    name: 'OEC-R3H-MK',
    slug: 'oec-r3h-mk',
    category: 'Access Control',
    subcategory: 'Card Readers',
    description: 'Wall Mounted Mifare Keyboard Card Reader',
    imageUrl: '/VMS/acscard2.png',
    specifications: {
      'Operating Frequency': '13.56 MHz',
      'Interface': 'Wiegand 26/34, RS-485',
      'Card Type': 'Mifare card',
      'Reading Distance': 'Up to 5 cm',
      'Reading Time': '< 1 second',
      'Authentication': 'Card / Password',
      'Operating Voltage': 'DC 12 V ±25%',
      'Operating Temperature': '-30°C to 65°C',
      'Dimensions': '129 × 88 × 21 mm',
      'Protection Level': 'IP65'
    },
    features: [
      'Supports Wiegand and RS-485 data output',
      'Compatible with ISO 14443-A and ISO 14443-B protocols',
      'Integrated keypad enables password authentication',
      'Supports both card and password access methods',
      'Built-in buzzer provides audible operation feedback',
      'LED indicators display normal, successful, and failed authentication states',
      'High receiving sensitivity ensures responsive card reading',
      'Suitable for access control and attendance applications',
      'Supports both indoor and outdoor installation',
      'Compact wall-mounted design enables convenient deployment'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oec-r3h-m',
    name: 'OEC-R3H-M',
    slug: 'oec-r3h-m',
    category: 'Access Control',
    subcategory: 'Card Readers',
    description: 'Wall Mounted Mifare Card Reader',
    imageUrl: '/VMS/acscard3.png',
    specifications: {
      'Operating Frequency': '13.56 MHz',
      'Interface': 'Wiegand 26/34, RS-485',
      'Card Type': 'Mifare card',
      'Reading Distance': 'Maximum 5 cm',
      'Reading Time': '< 1 second',
      'Operating Voltage': 'DC 12 V ±25%',
      'Power Consumption': '0.732 W',
      'Operating Temperature': '-30°C to +65°C',
      'Dimensions': '129 × 88 × 21 mm',
      'Protection Level': 'IP65'
    },
    features: [
      'Reliable wall-mounted Mifare card reader',
      'Supports both Wiegand and RS-485 data output',
      'Provides fast and responsive card authentication',
      'Built-in buzzer provides audible status feedback',
      'LED indicators display normal, successful, and failed authentication states',
      'Supports standard Mifare card authentication',
      'Suitable for both indoor and outdoor installations',
      'Supports multiple standard junction-box mounting options',
      'Durable PC housing for long-term operation',
      'IP65 protection provides resistance against dust and water'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
