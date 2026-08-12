import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const positioningSystem: Product[] = [
  {
    id: 'ipc7624er-x41-vh1',
    name: 'IPC7624ER-X41-VH1',
    slug: 'ipc7624er-x41-vh1',
    category: 'PTZ Cameras',
    subcategory: 'Positioning System',
    description: '4MP 41X LightHunter IR Network Positioning System',
    imageUrl: '/PTZ/pos1.png',
    specifications: {
      'Sensor': '1/1.8" CMOS',
      'Maximum Resolution': '2688 × 1520 @ 60 fps',
      'Lens': '6–246 mm, 41X optical zoom',
      'Minimum Illumination': '0.0005 Lux (color), 0 Lux with IR',
      'IR Distance': 'Up to 400 m',
      'WDR': '120 dB',
      'Pan/Tilt': '360° endless pan, +45° to −90° tilt',
      'Audio / Alarm I/O': '1/1 audio, 7/2 alarm',
      'Power': 'DC ±48 V ±25%, DC 24 V ±15%, or AC 24 V ±25%',
      'Protection': 'IP67; operating temperature −40°C to +70°C'
    },
    features: [
      'LightHunter technology delivers excellent images in extremely low-light environments',
      'Smart intrusion prevention supports false-alarm filtering',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Face detection with automatic selection of optimal snapshots',
      'People-flow counting and crowd-density monitoring',
      'Optical and self-adaptive defog improve visibility in challenging conditions',
      'Smart IR provides long-distance night surveillance up to 400 m',
      'Rain-sensing automatic wiper maintains visibility in wet conditions',
      '360° endless pan enables comprehensive wide-area surveillance',
      'Supports 120 dB WDR for clearer images in high-contrast scenes'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc7622er-x45-vh1',
    name: 'IPC7622ER-X45-VH1',
    slug: 'ipc7622er-x45-vh1',
    category: 'PTZ Cameras',
    subcategory: 'Positioning System',
    description: '2MP 45X LightHunter IR Network Positioning System',
    imageUrl: '/PTZ/pos1.png',
    specifications: {
      'Sensor': '1/1.8" CMOS',
      'Resolution': '1920 × 1080, up to 60 fps',
      'Lens': '5.7–256.5 mm, 45X optical zoom',
      'Minimum Illumination': '0.0005 Lux (color), 0 Lux with IR',
      'WDR': '120 dB',
      'IR Distance': 'Up to 400 m',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Operating Temperature': '–40°C to +70°C',
      'Protection Rating': 'IP67'
    },
    features: [
      'LightHunter technology delivers excellent image quality in low-light environments',
      '45X optical zoom enables detailed long-distance surveillance',
      'Smart IR provides nighttime monitoring at distances up to 400 m',
      'Smart intrusion prevention supports human and vehicle classification',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Face detection with automatic selection of the best snapshots',
      'People counting supports flow counting and crowd-density monitoring',
      'Optical and self-adaptive defog improve visibility in challenging conditions',
      'Rain-sensing automatic wiper maintains a clear camera view',
      'Supports 360° endless pan for wide-area surveillance coverage'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc7622er-x44-vf',
    name: 'IPC7622ER-X44-VF',
    slug: 'ipc7622er-x44-vf',
    category: 'PTZ Cameras',
    subcategory: 'Positioning System',
    description: '2MP 44X LightHunter Intelligent Network Positioning System',
    imageUrl: '/PTZ/pos1.png',
    specifications: {
      'Sensor': '1/2.8", 2MP progressive scan CMOS',
      'Resolution': '1920 × 1080 @ 60 fps',
      'Lens': '5–220 mm motorized AF zoom lens',
      'Optical Zoom': '44×',
      'Minimum Illumination': '0.0005 Lux (Color), 0 Lux with IR',
      'IR Range': 'Up to 400 m (1312 ft)',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Audio / Alarm I/O': '1/1 Audio, 7/2 Alarm',
      'Operating Temperature': '–40°C to +70°C',
      'Protection Rating': 'IP67'
    },
    features: [
      'LightHunter technology delivers high-quality images in extremely low light',
      '44× optical zoom enables detailed long-distance surveillance',
      'Smart IR provides night visibility at distances up to 400 m',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Intelligent false-alarm filtering improves detection accuracy',
      'Supports people-flow counting and crowd-density monitoring',
      'Optical and self-adaptive defog improve visibility in foggy conditions',
      'Triple-stream video supports flexible network and storage configurations',
      'Rain-sensing automatic wiper maintains clear imaging in harsh weather',
      'Supports up to 1024 presets for advanced positioning and patrol applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
