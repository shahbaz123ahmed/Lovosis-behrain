import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const indoorStations: Product[] = [
  {
    id: 'oei-372s-h-w',
    name: 'OEI-372S-H-W',
    slug: 'oei-372s-h-w',
    category: 'Video Intercoms',
    subcategory: 'Indoor Stations',
    description: 'Wall Mounted 7-Inch Indoor Station',
    imageUrl: '/VMS/videointercoms1.png',
    specifications: {
      'Display': '7-inch ultra-thin TFT LCD',
      'Resolution': '1024 × 600',
      'Operating System': 'Linux',
      'Audio': 'Built-in omnidirectional microphone & speaker',
      'Network': '100 Mbps Ethernet, Wi-Fi 4 (2.4 GHz)',
      'Power Supply': 'DC 12V ±25% / IEEE 802.3af PoE',
      'Power Consumption': '<10 W',
      'Interfaces': 'Network, Wi-Fi, RS485, 2× IO output, 8× IO input, TF card slot',
      'Dimensions': '193 × 143 × 25 mm; Weight: 360 g',
      'Operating Environment': '-10°C to +55°C, 10%–90% RH, non-condensing, indoor'
    },
    features: [
      'Durable ABS casing with a glass front panel',
      'HD touchscreen for intuitive operation',
      'Supports batch configuration and transfer',
      'Remote unlocking of linked door stations',
      'One-touch door unlocking functionality',
      'Network camera monitoring support',
      'Integrated security alarm functionality',
      'Noise suppression, echo cancellation, and AGC for clear audio',
      'Supports screenshots and zone alarm management',
      'NDAA compliant design'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oei-372s-h-w-z',
    name: 'OEI-372S-H-W-Z',
    slug: 'oei-372s-h-w-z',
    category: 'Video Intercoms',
    subcategory: 'Indoor Stations',
    description: 'Wall Mounted 7-Inch Indoor Station (White, Wi-Fi)',
    imageUrl: '/VMS/videointercoms2.png',
    specifications: {
      'Device Type': 'Wall-mounted indoor station',
      'Screen': '7-inch ultra-thin TFT LCD',
      'Resolution': '1024 × 600',
      'Connectivity': 'Ethernet + Wi-Fi',
      'Power Supply': 'DC 12V ±25% / IEEE 802.3af PoE',
      'Power Consumption': '<10 W',
      'Housing': 'ABS casing with glass panel',
      'Installation': 'Wall mounted',
      'Door Control': 'Remote & one-touch unlocking',
      'Security Functions': 'Network camera monitoring & security alarm'
    },
    features: [
      'Durable ABS casing with premium glass panel',
      'Responsive HD touchscreen for easy operation',
      'Supports batch configuration and transfer',
      'Remote unlocking of linked door stations',
      'Convenient one-touch door unlocking',
      'Supports network camera live monitoring',
      'Integrated security alarm functionality',
      'Wi-Fi connectivity for flexible installation',
      'PoE support simplifies power and network cabling',
      'Designed for residential and commercial video intercom systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oei-371s-h-w',
    name: 'OEI-371S-H-W',
    slug: 'oei-371s-h-w',
    category: 'Video Intercoms',
    subcategory: 'Indoor Stations',
    description: '7-Inch Touch Screen Wall Mounted Indoor Station',
    imageUrl: '/VMS/videointercoms1.png',
    specifications: {
      'Screen': '7-inch ultra-thin TFT LCD',
      'Resolution': '1024 × 600',
      'Operating System': 'Linux',
      'Audio': 'Built-in microphone & speaker',
      'Network': '100 Mbps Ethernet, IEEE 802.3af PoE',
      'Interfaces': 'Network, Wi-Fi, RS485, 2× IO output, 8× IO input, TF card',
      'Power Supply': 'DC 12V ±25% / Standard PoE',
      'Power Consumption': '<10 W',
      'Dimensions & Weight': '193.2 × 143.4 × 24.3 mm; 377 g',
      'Operating Environment': '-10°C to +55°C, 10%–90% RH, non-condensing'
    },
    features: [
      'Durable ABS casing with a glass panel',
      'High-resolution touchscreen for easy operation',
      'Supports batch configuration and transfer',
      'Remote opening of linked door stations',
      'Convenient one-key door unlocking',
      'Supports network camera monitoring',
      'Integrated security alarm functionality',
      'Noise suppression and echo cancellation',
      'Supports up to 200 screenshots and 200 zone alarms',
      'Supports up to 19 linked indoor station extensions'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
