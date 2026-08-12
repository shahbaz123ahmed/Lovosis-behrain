import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const doorStations: Product[] = [
  {
    id: 'oeu-301s-hmka',
    name: 'OEU-301S-HMKA',
    slug: 'oeu-301s-hmka',
    category: 'Video Intercoms',
    subcategory: 'Door Stations',
    description: 'Apartment Door Station (IC Card, 15 Keypads)',
    imageUrl: '/VMS/dr1.png',
    specifications: {
      'Display': '3.97-inch',
      'Operating System': 'Linux',
      'Card Capacity': '10,000',
      'Card Frequency': '13.56 MHz',
      'Field of View': 'H 106.9°, V 56.9°, D 127.9°',
      'Audio': 'Built-in omnidirectional microphone and speaker',
      'Network': '100 Mbps Ethernet',
      'Power Supply': 'DC 12V ±25% / IEEE 802.3af PoE',
      'Dimensions & Weight': '125 × 358 × 53 mm; 2.10 kg',
      'Operating Environment': '-40°C to +60°C; 10–90% RH, non-condensing'
    },
    features: [
      'Supports video calls and two-way intercom with indoor stations',
      'Supports communication through connected apps',
      'Built-in IC card reader provides convenient access control',
      'Supports video monitoring for enhanced building security',
      'Security alarm and tamper alarm functions are supported',
      'Built-in heating module enables reliable low-temperature operation',
      'Durable metal casing designed for outdoor environments',
      'Supports batch configuration for easier deployment',
      'Adaptive IR illumination improves visibility in low-light conditions',
      'Supplied with a recess box for recessed installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oeu-301e-hmka',
    name: 'OEU-301E-HMKA',
    slug: 'oeu-301e-hmka',
    category: 'Video Intercoms',
    subcategory: 'Door Stations',
    description: 'Apartment Door Station (IC Card, 15 Keypads)',
    imageUrl: '/VMS/dr2.png',
    specifications: {
      'Operating System': 'Linux',
      'Display': '3.97-inch, 800 × 480',
      'Audio': 'Built-in microphone & speaker; noise reduction, echo cancellation and AGC',
      'Card Capacity': '15,000',
      'Event Capacity': '100,000',
      'Network': 'TCP/IP, IPv4, HTTP, RTP, RTSP, NTP',
      'Power': 'DC 12V ±25% / IEEE 802.3af PoE; 9W consumption',
      'Protection': 'IP65 / IK08 (with stated exclusions and installation requirements)',
      'Dimensions': '125 × 52.5 × 358 mm; weight 912 g',
      'Operating Environment': '–40°C to +60°C, 10–90% RH, non-condensing, outdoor'
    },
    features: [
      'Supports calls and intercom with connected indoor stations and app',
      'Uniview deep-learning recognition with over 99% smart recognition rate',
      'Maximum smart recognition speed of 0.2 seconds',
      'Built-in IC card reader for convenient access control',
      'Braille keypad design improves accessibility',
      'Built-in heating module supports very low-temperature operation',
      'Supports security protection and tamper alarms',
      'Supports batch configuration for easier deployment',
      'RS485 security-module connectivity helps protect door control against malicious device damage',
      'Auto illumination improves visibility in low-light environments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oeu-202s-hmk4',
    name: 'OEU-202S-HMK4',
    slug: 'oeu-202s-hmk4',
    category: 'Video Intercoms',
    subcategory: 'Door Stations',
    description: 'Villa Door Station (IC Card, 4 Call Buttons)',
    imageUrl: '/VMS/dr3.png',
    specifications: {
      'Operating System': 'Linux',
      'Card Capacity': 'Up to 10,000 cards',
      'Field of View': 'H 106.9°, V 56.9°, D 127.9°',
      'Audio': 'Built-in omnidirectional microphone and speaker',
      'Network': '100 Mbps Ethernet; TCP/IP, IPv4, HTTP, RTP, RTSP, NTP',
      'Power Supply': 'DC 12V ±25% / IEEE 802.3af PoE',
      'Power Consumption': '6.48 W (PoE) / 5.35 W (DC 12V)',
      'Protection': 'IP65 / IK08',
      'Dimensions & Weight': '96 × 176 × 33 mm / 680 g',
      'Operating Environment': '–40°C to +60°C, 10%–90% RH, non-condensing'
    },
    features: [
      'Metal casing provides a durable and premium construction',
      'Supports video calls and intercom with connected indoor stations and app',
      'Built-in IC card reader enables convenient access control',
      'Supports video monitoring for enhanced entrance security',
      'Security alarm and tamper alarm functions are supported',
      'Built-in heating module enables reliable operation at very low temperatures',
      'Adaptive IR illumination improves visibility in low-light environments',
      'Supports batch configuration for easier deployment',
      'Power output can be enabled or disabled through the web interface',
      'Optional recess box supports recessed installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oeu-202s-hmk2',
    name: 'OEU-202S-HMK2',
    slug: 'oeu-202s-hmk2',
    category: 'Video Intercoms',
    subcategory: 'Door Stations',
    description: 'Villa Door Station',
    imageUrl: '/VMS/dr4.png',
    specifications: {
      'Operating System': 'Linux',
      'Card Capacity': '10,000',
      'Field of View': 'H 106.9°, V 56.9°, D 127.9°',
      'Network': '100 Mbps Ethernet; TCP/IP, IPv4, HTTP, RTP, RTSP, NTP',
      'Audio': 'Built-in omnidirectional microphone & speaker',
      'Interfaces': 'RS485, Wiegand, 4× IO input, 2× door lock, tamper input',
      'Power Supply': 'DC 12V ±25% / IEEE 802.3af PoE',
      'Operating Environment': '-40°C to +60°C, 10%–90% RH',
      'Protection': 'IP65 / IK08',
      'Dimensions & Weight': '96 × 176 × 33 mm; 375 g'
    },
    features: [
      'Durable metal casing for outdoor installation',
      'Supports call and intercom with connected indoor stations and app',
      'Built-in omnidirectional microphone and speaker',
      'Noise suppression, echo cancellation, and AGC for clear communication',
      'Supports video monitoring functionality',
      'Integrated security and tamper alarm support',
      'Supports batch configuration for easier deployment',
      'Optional recess box available for recessed mounting',
      'Supports controllable 12V/0.25A power output',
      'Built-in heating module enables operation at very low temperatures'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
