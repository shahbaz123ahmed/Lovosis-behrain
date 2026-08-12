import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const smartBox: Product[] = [
  {
    id: 'ecs-508s-sf-ha',
    name: 'ECS-508S-SF-HA',
    slug: 'ecs-508s-sf-ha',
    category: 'Edge Intelligence',
    subcategory: 'Smart Box',
    description: '8-Channel Intelligent Edge Computing Server',
    imageUrl: '/Wireless_cameras/edge.png',
    specifications: {
      'Video Analysis': '8-channel real-time analysis',
      'Memory': '8 GB DDR4',
      'Storage': '2.5-inch 128 GB SSD',
      'Network': '2 × 10/100/1000 Mbps RJ45',
      'USB': '2 × USB 2.0 + 1 × USB 3.0',
      'Alarm I/O': '4 inputs / 4 outputs',
      'Serial Interface': '1 × RS-485',
      'Power Supply': '12 V / 3 A',
      'Operating Temperature': '-40°C to +70°C',
      'Dimensions': '56.3 × 251.3 × 137.7 mm'
    },
    features: [
      'Supports intelligent video and behavior analysis',
      'Provides face detection and face-behavior linkage',
      'Supports up to 128 face libraries',
      'Local algorithm warehouse allows selection of up to 20 algorithms for deployment',
      'Supports fire, smoke, intrusion and abnormal-behavior detection',
      'Generates alarm images and video clips automatically',
      'Supports reporting alarm information to third-party platforms through API',
      'Dual Gigabit Ethernet ports support flexible network configurations',
      'Fanless and lightweight construction improves deployment flexibility',
      'Designed for reliable operation in dusty, oily, hot and cold environments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ecs-504s-sf-ha',
    name: 'ECS-504S-SF-HA',
    slug: 'ecs-504s-sf-ha',
    category: 'Edge Intelligence',
    subcategory: 'Smart Box',
    description: '4-Channel Intelligent Edge Computing Server',
    imageUrl: '/Wireless_cameras/edge.png',
    specifications: {
      'Video Input': '4 channels',
      'Operating System': 'Linux',
      'Memory': '4 GB DDR4',
      'Storage': '2.5-inch 128 GB SSD included',
      'Network': '2 × 10/100/1000 Mbps RJ45',
      'USB': '2 × USB 2.0 + 1 × USB 3.0',
      'Alarm I/O': '4-channel input / 4-channel output',
      'Serial Interface': '1 × RS-485',
      'Operating Temperature': '–40°C to +70°C',
      'Dimensions': '56.3 × 251.3 × 137.7 mm (H × D × W)'
    },
    features: [
      'Supports advanced face detection and recognition',
      'Provides intrusion and perimeter protection analysis',
      'Supports area and tripwire people counting',
      'Detects fire, fumes, water leaks, gas leaks, and other environmental hazards',
      'Generates and stores intelligent alarm images and video clips',
      'Supports third-party camera connectivity through ONVIF and RTSP',
      'Browser-based access provides convenient remote management',
      'Dual Gigabit interfaces support flexible network configurations',
      'Lightweight fanless construction enables flexible deployment',
      'Suitable for smart retail, banks, petrol stations, construction sites, and factories'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ecs-516s-sf-hd',
    name: 'ECS-516S-SF-HD',
    slug: 'ecs-516s-sf-hd',
    category: 'Edge Intelligence',
    subcategory: 'Smart Box',
    description: '16-Channel Intelligent Edge Computing Server',
    imageUrl: '/Wireless_cameras/edge.png',
    specifications: {
      'Operating System': 'Linux',
      'Memory': '8 GB DDR4',
      'Storage': '1 TB 2.5-inch SSD included',
      'Network': '2 × 10/100/1000 Mbps RJ45 Ethernet',
      'USB': '2 × USB 2.0 + 1 × USB 3.0',
      'Alarm I/O': '4-channel input / 4-channel output',
      'Serial Interface': '1 × RS-485',
      'Power Supply': '12 V / 2 A',
      'Operating Temperature': '-40°C to +70°C',
      'Dimensions': '56.3 × 251.3 × 137.7 mm; weight ≤1.5 kg with SSD'
    },
    features: [
      'Supports face snapshot, comparison, and face-behavior linkage',
      'Provides intelligent action analysis across 16 video channels',
      'Supports fire and smoke detection for enhanced environmental safety',
      'Includes intrusion, enter-area, leave-area, and cross-line detection',
      'Supports people counting, overcrowding, and long-stay detection',
      'Detects PPE violations such as missing hard hats, work clothes, or reflective clothing',
      'Generates and stores alarm images and video clips automatically',
      'Browser-based access enables convenient remote configuration and management',
      'Fanless industrial design provides reliable operation in harsh environments',
      'Dual-network capability enables deployment across different networking environments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
