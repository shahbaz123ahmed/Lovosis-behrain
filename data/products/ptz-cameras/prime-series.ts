import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const primeSeries: Product[] = [
  {
    id: 'ipc6424sr-x25-vf-b',
    name: 'IPC6424SR-X25-VF-B',
    slug: 'ipc6424sr-x25-vf-b',
    category: 'PTZ Cameras',
    subcategory: 'Prime Series',
    description: '4MP 25X LightHunter IR Network PTZ Camera',
    imageUrl: '/PTZ/ptzp1.png',
    specifications: {
      'Sensor': '1/2.8-inch CMOS',
      'Maximum Resolution': '2688 × 1520',
      'Frame Rate': 'Up to 30 fps',
      'Lens': '4.8–120 mm motorized zoom',
      'Optical Zoom': '25×',
      'Minimum Illumination': '0.003 Lux; 0 Lux with IR',
      'IR Distance': 'Up to 100 m',
      'WDR': '120 dB',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Power & Protection': 'DC 12 V / PoE+, IP67, IK10'
    },
    features: [
      'Delivers 2688 × 1520 video at up to 30 fps',
      'LightHunter technology provides clear images in low-light environments',
      '25× optical zoom enables detailed long-distance surveillance',
      'Smart IR provides nighttime visibility up to 100 m',
      'Smart Intrusion Prevention filters false alarms',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Supports face detection and automatic best-snapshot selection',
      'People counting supports flow counting and crowd-density monitoring',
      '360° endless pan provides extensive surveillance coverage',
      'IP67 weatherproof and IK10 vandal-resistant construction improves durability'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6422sr-x25-vf-b',
    name: 'IPC6422SR-X25-VF-B',
    slug: 'ipc6422sr-x25-vf-b',
    category: 'PTZ Cameras',
    subcategory: 'Prime Series',
    description: '2MP 25X LightHunter IR Network PTZ Camera',
    imageUrl: '/PTZ/ptzp1.png',
    specifications: {
      'Sensor': '1/2.8-inch CMOS',
      'Maximum Resolution': '1920 × 1080 (2 MP)',
      'Frame Rate': 'Up to 60 fps',
      'Lens': '5–125 mm',
      'Optical / Digital Zoom': '25× / 16×',
      'Minimum Illumination': '0.001 Lux; 0 Lux with IR',
      'IR Distance': 'Up to 100 m',
      'WDR': '120 dB',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection & Power': 'IP67, IK10; DC 12 V / PoE+'
    },
    features: [
      'Delivers 1920 × 1080 video at up to 60 fps',
      'LightHunter technology provides high-quality images in low-light environments',
      '25× optical zoom enables detailed long-distance surveillance',
      'Smart Intrusion Prevention filters false alarms effectively',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Supports automatic best-snapshot selection and face detection',
      'People-flow counting provides entrance and exit statistics',
      'Crowd-density monitoring supports high-traffic surveillance scenarios',
      'Smart IR provides clear nighttime monitoring at distances up to 100 m',
      'Supports two-way audio, alarm I/O, and MicroSD edge storage'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6612sr-x25-vg',
    name: 'IPC6612SR-X25-VG',
    slug: 'ipc6612sr-x25-vg',
    category: 'PTZ Cameras',
    subcategory: 'Prime Series',
    description: '2MP 25X LightHunter IR Network PTZ Camera',
    imageUrl: '/PTZ/ptzp3.png',
    specifications: {
      'Sensor': '1/2.8-inch CMOS',
      'Maximum Resolution': '1920 × 1080 (2 MP)',
      'Lens': '5–125 mm motorized autofocus',
      'Optical Zoom': '25×',
      'Minimum Illumination': '0.001 Lux; 0 Lux with IR',
      'IR Distance': 'Up to 150 m',
      'WDR': '120 dB Optical WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection & Power': 'IP66; DC 12 V / PoE+ (IEEE 802.3at)'
    },
    features: [
      'Delivers 1920 × 1080 Full HD video at up to 30 fps',
      '25× optical zoom enables detailed long-distance surveillance',
      'LightHunter technology provides excellent image quality in low-light environments',
      'Smart IR provides nighttime monitoring at distances up to 150 m',
      'Smart Intrusion Prevention helps reduce false alarms',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Automatically selects optimal snapshots of detected targets',
      'Ultra 265 compression reduces bandwidth and storage requirements',
      'Supports MicroSD cards with capacities up to 512 GB',
      'Audio I/O and alarm I/O provide flexible security system integration'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6612sr-x33-vg',
    name: 'IPC6612SR-X33-VG',
    slug: 'ipc6612sr-x33-vg',
    category: 'PTZ Cameras',
    subcategory: 'Prime Series',
    description: '2MP 33X LightHunter Network PTZ Dome Camera',
    imageUrl: '/PTZ/ptzp3.png',
    specifications: {
      'Sensor': '1/2.8-inch, 2 MP progressive scan CMOS',
      'Maximum Resolution': '1920 × 1080',
      'Lens': '4.5–148.5 mm motorized zoom',
      'Optical Zoom': '33×',
      'Minimum Illumination': '0.001 Lux; 0 Lux with IR',
      'IR Distance': 'Up to 150 m',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 256 GB',
      'Power Supply': 'DC 12 V or PoE+ (IEEE 802.3at)',
      'Protection Rating': 'IP66'
    },
    features: [
      'Delivers 1920 × 1080 video at up to 30 fps',
      '33× optical zoom provides detailed long-distance monitoring',
      'LightHunter technology ensures clear images in low-light environments',
      'Smart IR provides nighttime surveillance at distances up to 150 m',
      'Smart Intrusion Prevention helps filter false alarms',
      'Supports Cross Line, Intrusion, Enter Area, and Leave Area detection',
      'Supports automatic target tracking for enhanced surveillance',
      '120 dB Optical WDR improves visibility in high-contrast scenes',
      'Supports audio input/output and alarm input/output interfaces',
      'Ultra 265 compression reduces bandwidth and storage requirements'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6424sr-x25-vf',
    name: 'IPC6424SR-X25-VF',
    slug: 'ipc6424sr-x25-vf',
    category: 'PTZ Cameras',
    subcategory: 'Prime Series',
    description: '4MP 25X LightHunter IR Network PTZ Camera',
    imageUrl: '/PTZ/ptzp5.png',
    specifications: {
      'Sensor': '1/2.8-inch CMOS',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Frame Rate': 'Up to 30 fps',
      'Lens': '4.8–120 mm motorized zoom',
      'Optical Zoom': '25×',
      'Digital Zoom': '16×',
      'Minimum Illumination': '0.003 Lux; 0 Lux with IR',
      'IR Distance': 'Up to 100 m',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Power & Protection': 'DC 12 V / PoE+, IP67, IK10'
    },
    features: [
      'Delivers high-quality 4 MP video at up to 30 fps',
      'LightHunter technology provides clear images in low-light environments',
      '25× optical zoom enables detailed long-distance monitoring',
      'Smart IR technology provides nighttime visibility up to 100 m',
      'Smart Intrusion Prevention filters false alarms intelligently',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Supports face detection with automatic selection of the best snapshots',
      'People counting supports flow statistics and crowd-density monitoring',
      'Triple-stream technology provides flexible video transmission',
      'IP67 weatherproof and IK10 vandal-resistant construction ensures reliable outdoor operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
