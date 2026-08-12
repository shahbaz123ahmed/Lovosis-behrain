import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const swingBarriers: Product[] = [
  {
    id: 'ofg8501-r-ys65-a',
    name: 'OFG8501-R-YS65-A',
    slug: 'ofg8501-r-ys65-a',
    category: 'Speed Gates',
    subcategory: 'Swing Barriers',
    description: 'Swing Speed Gate (Right Side Machine)',
    imageUrl: '/VMS/swing1.png',
    specifications: {
      'Motor': 'Brushless DC motor',
      'Lane Width': '650–1050 mm',
      'IR Detector': '16 pairs',
      'Dimensions': '1500 × 190 × 960 mm',
      'Material': '304 brushed stainless steel',
      'Power Supply': '220 V input; 24 VDC/3 A & 12 VDC/7 A output',
      'Interfaces': 'RS485 ×1, RS232 ×1, Network & CAN',
      'Throughput': '30–60 persons/minute',
      'Operating Environment': '-20°C to +60°C; <95% RH, non-condensing',
      'Power Consumption': '30 W standby / 50 W operating'
    },
    features: [
      'Advanced motor control provides smooth and precise barrier movement',
      'Triple intelligent anti-pinch technology enhances passenger safety',
      'Detects tailgating, reverse access, and unauthorized intrusion',
      '16-pair IR light curtain system improves detection accuracy',
      'Automatically unlocks the barrier during a power failure',
      'Supports emergency/fire-alarm linkage for unobstructed evacuation',
      'Adjustable normally-open and normally-closed operating modes',
      'Supports people counting through intelligent IR detection',
      'Multiple I/O interfaces allow integration with external devices',
      'Network-based maintenance supports troubleshooting, event management, and movement control'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ofg8501-r-yp65-a',
    name: 'OFG8501-R-YP65-A',
    slug: 'ofg8501-r-yp65-a',
    category: 'Speed Gates',
    subcategory: 'Swing Barriers',
    description: 'Swing Speed Gate (Right Side Machine)',
    imageUrl: '/VMS/swing2.png',
    specifications: {
      'Motor': 'Brushless DC motor',
      'Lane Width': '650 mm (YP65 model)',
      'IR Detector': '16 pairs',
      'Barrier Material': '10 mm PMMA',
      'Dimensions': '1500 × 190 × 960 mm',
      'Interfaces': 'RS485 ×1, RS232 ×1, Network & CAN',
      'Power Supply': '220V input; 24VDC/3A & 12VDC/7A output',
      'Power Consumption': '30 W standby / 50 W operating',
      'Operating Temperature': '-20°C to +60°C',
      'Weight': '51.85 kg (Right-side machine)'
    },
    features: [
      'Advanced motor control provides precise and stable barrier movement',
      'Triple anti-pinch protection using IR, impact, and current detection',
      'Detects tailgating, reverse access, and intrusion events',
      '16-pair IR light curtain improves passage detection accuracy',
      'Supports audible and visual alarms for abnormal access',
      'Automatically unlocks during power failure for unobstructed passage',
      'Supports fire-alarm linkage for emergency door opening',
      'Normally-open and normally-closed operating modes are configurable',
      'Supports people counting using infrared detection',
      'Network-based maintenance, event management, and movement control are supported'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ofg8321nl',
    name: 'OFG8321N@L',
    slug: 'ofg8321nl',
    category: 'Speed Gates',
    subcategory: 'Swing Barriers',
    description: 'Indoor & Outdoor Swing Speed Gate (Left Side Machine)',
    imageUrl: '/VMS/swing3.png',
    specifications: {
      'Type': 'Left pedestal swing speed gate',
      'Motor': 'Brushless DC motor',
      'IR Sensors': '6 pairs',
      'Operating Voltage': '110–220 V input; 24 V DC/6.5 A output',
      'Power Consumption': '~30 W standby / ~50 W normal / ~90 W maximum',
      'Lane Width': '550–1100 mm acrylic; 650–1400 mm stainless steel',
      'Operating Temperature': '–40°C to +60°C',
      'Operating Humidity': '5%–80%',
      'Dimensions': '1200 × 990 × 190 mm',
      'Weight': '36.3 kg'
    },
    features: [
      'Supports direct connection to card readers through the integrated access control board',
      'Provides single-lane and multi-lane anti-passback functionality',
      'Supports multi-factor access verification',
      'Mobile app connection via Wi-Fi enables configuration and debugging',
      'Web interface provides quick device setup and management',
      'Passage-memory function supports consecutive card swipes',
      'Dual anti-pinch protection uses infrared and electric-current detection',
      'Detects tailgating, reverse passing, and unauthorized intrusion',
      'Sound and light alarms provide immediate security alerts',
      'Self-diagnostic and network maintenance functions simplify system management'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ofg8501nl',
    name: 'OFG8501N@L',
    slug: 'ofg8501nl',
    category: 'Speed Gates',
    subcategory: 'Swing Barriers',
    description: 'Indoor & Outdoor Swing Speed Gate (Left Side Machine)',
    imageUrl: '/VMS/swing4.png',
    specifications: {
      'Type': 'Left pedestal swing speed gate',
      'Motor': 'Brushless DC motor',
      'IR Sensors': '16 pairs',
      'Lane Width': '650–1050 mm',
      'Material': '304 brushed stainless steel; acrylic/stainless-steel wing',
      'Operating Voltage': '100–240 V AC input',
      'Power Consumption': 'Approx. 35 W standby / 45 W normal / 136 W maximum',
      'Operating Temperature': '−40°C to +60°C*',
      'Dimensions': '1506.9 × 970 × 190 mm',
      'Weight': '54 kg'
    },
    features: [
      'Supports direct connection to card readers through the integrated access control board',
      'Provides single-lane and multi-lane anti-passback functionality',
      'Supports multi-factor identity verification',
      'Dual anti-pinch protection uses infrared and current detection',
      'Detects tailgating, reverse passing, and unauthorized intrusion',
      'Provides audible and visual alarms for abnormal passage events',
      'Supports quick configuration through a web interface',
      'Automatically opens during power failure for emergency evacuation',
      'Supports remote door-opening control with an optional transmitter',
      'Built-in self-diagnostics simplify maintenance and fault detection'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
