import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const easySeries: Product[] = [
  {
    id: 'ipc6432lr-x16-vg1',
    name: 'IPC6432LR-X16-VG1',
    slug: 'ipc6432lr-x16-vg1',
    category: 'PTZ Cameras',
    subcategory: 'Easy Series',
    description: '2MP 16X LightHunter IR Network Dome PTZ Camera',
    imageUrl: '/PTZ/ptzeasy1.png',
    specifications: {
      'Sensor': '1/2.8" CMOS',
      'Maximum Resolution': '1920 × 1080 (2 MP)',
      'Frame Rate': 'Up to 60 fps',
      'Lens': '5.5–88 mm',
      'Optical Zoom': '16X',
      'Minimum Illumination': '0.003 Lux (Color), 0 Lux with IR',
      'IR Distance': 'Up to 100 m',
      'PTZ Range': '360° endless pan, −5° to 90° tilt',
      'Power': 'DC 12 V ±10% / PoE+ (IEEE 802.3at)',
      'Protection': 'IP66, IK10'
    },
    features: [
      'Delivers smooth 1080p video at up to 60 fps',
      'LightHunter technology provides enhanced image quality in low-light environments',
      '16X optical zoom enables detailed long-distance surveillance',
      'Smart IR provides clear nighttime monitoring up to 100 meters',
      'Supports continuous 360° pan for comprehensive area coverage',
      'Supports up to 1024 preset PTZ positions',
      '120 dB WDR improves visibility in high-contrast scenes',
      'Dual-stream technology optimizes bandwidth and storage usage',
      'Supports 2 alarm inputs/1 output and 1 audio input/1 output',
      'IP66 and IK10 protection provides reliable outdoor and vandal-resistant operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6434lr-x16-vg1',
    name: 'IPC6434LR-X16-VG1',
    slug: 'ipc6434lr-x16-vg1',
    category: 'PTZ Cameras',
    subcategory: 'Easy Series',
    description: '4MP 16X LightHunter IR Network Dome PTZ Camera',
    imageUrl: '/PTZ/ptzeasy1.png',
    specifications: {
      'Sensor': '1/2.9-inch CMOS',
      'Maximum Resolution': '4 MP (2688 × 1520)',
      'Lens': '5.5–88 mm, 16X optical zoom',
      'Minimum Illumination': '0.005 Lux (Color), 0 Lux with IR',
      'IR Distance': 'Up to 100 m (328 ft)',
      'Pan/Tilt': '360° endless pan, −5° to 90° tilt',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Power': 'DC 12 V ±10% / PoE+ (IEEE 802.3at)',
      'Operating Temperature': '−40°C to +65°C',
      'Protection': 'IP66 and IK10'
    },
    features: [
      'LightHunter technology delivers enhanced images in low-light environments',
      'Powerful 16X optical zoom enables detailed long-distance monitoring',
      'Smart IR provides clear nighttime surveillance up to 100 meters',
      'Supports intelligent auto tracking with human and vehicle filtering',
      '360° endless pan provides comprehensive surveillance coverage',
      'Supports up to 1024 PTZ preset positions',
      '120 dB WDR improves image quality in high-contrast scenes',
      '2D/3D digital noise reduction helps produce cleaner video',
      'Dual-stream technology optimizes bandwidth and storage usage',
      'Supports audio I/O, alarm I/O and RS485 connectivity'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6412lr-x16-vg',
    name: 'IPC6412LR-X16-VG',
    slug: 'ipc6412lr-x16-vg',
    category: 'PTZ Cameras',
    subcategory: 'Easy Series',
    description: '2MP 16X LightHunter IR Network PTZ Dome Camera',
    imageUrl: '/PTZ/ptzeasy3.png',
    specifications: {
      'Sensor': '1/2.8" CMOS',
      'Resolution': '1920 × 1080 @ 30 fps',
      'Lens': '5–80 mm motorized autofocus',
      'Optical Zoom': '16X',
      'Minimum Illumination': '0.003 Lux; 0 Lux with IR',
      'IR Distance': 'Up to 100 m',
      'WDR': '120 dB',
      'Storage': 'MicroSD up to 512 GB',
      'Power': 'DC 12 V ±25% / PoE+ (IEEE 802.3at)',
      'Protection': 'IP66'
    },
    features: [
      'LightHunter technology delivers clear images in very low-light environments',
      '16X optical zoom enables detailed long-distance surveillance',
      'Smart IR provides effective nighttime monitoring up to 100 meters',
      'Supports smart intrusion prevention with false-alarm filtering',
      'Supports cross-line, intrusion, enter-area and leave-area detection',
      'Auto tracking supports human, vehicle and non-motor vehicle filtering',
      'People counting supports flow counting and crowd-density monitoring',
      '120 dB WDR improves visibility in challenging lighting conditions',
      'Supports MicroSD edge storage up to 512 GB',
      '360° endless pan provides flexible wide-area PTZ surveillance'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6215sr-x5paew-vg',
    name: 'IPC6215SR-X5PAEW-VG',
    slug: 'ipc6215sr-x5paew-vg',
    category: 'PTZ Cameras',
    subcategory: 'Easy Series',
    description: '5MP 5X LightHunter Wi-Fi IR Network Mini PTZ Camera',
    imageUrl: '/PTZ/ptzeasy4.png',
    specifications: {
      'Sensor': '1/2.7" CMOS',
      'Resolution': '5 MP (2880 × 1620), up to 30 fps',
      'Lens': '2.7–13.5 mm, F1.2',
      'Optical Zoom': '5X',
      'Minimum Illumination': '0.003 Lux (Color), 0 Lux with IR',
      'IR Distance': 'Up to 30 m (98.4 ft)',
      'WDR': '120 dB Optical WDR',
      'Network': 'RJ45 10/100 Mbps + 2.4 GHz Wi-Fi',
      'Power': 'DC 12 V ±25% / PoE+ (IEEE 802.3at)',
      'Operating Temperature': '–10°C to +50°C'
    },
    features: [
      'Ultra 265, H.265, H.264 and MJPEG video compression',
      'Smart intrusion prevention with false-alarm filtering',
      'Human, vehicle and non-motor vehicle classification',
      'Cross-line and intrusion detection support',
      'Enter-area and leave-area detection',
      'Automatic selection of the best snapshots',
      '350° pan and 0°–90° tilt range',
      'Supports up to 1024 PTZ presets',
      'MicroSD edge storage support up to 512 GB',
      'Supports ONVIF Profile S, G and T integration'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6325lfw-ax5c-vg',
    name: 'IPC6325LFW-AX5C-VG',
    slug: 'ipc6325lfw-ax5c-vg',
    category: 'PTZ Cameras',
    subcategory: 'Easy Series',
    description: '5MP LightHunter Active Deterrence Mini PTZ Camera',
    imageUrl: '/PTZ/ptzpro5.png',
    specifications: {
      'Maximum Resolution': '5 MP (2880 × 1620)',
      'Sensor': '1/2.7" CMOS',
      'Lens': '2.7–13.5 mm, F1.2',
      'Optical Zoom': '5×',
      'Minimum Illumination': '0.005 Lux (F1.2, AGC ON), 0 Lux with IR',
      'WDR': '120 dB',
      'Illumination': 'IR up to 50 m / Warm light up to 15 m',
      'Storage': 'MicroSD up to 512 GB',
      'Power Supply': 'DC 12 V ±25% / PoE (IEEE 802.3at)',
      'Protection Rating': 'IP66'
    },
    features: [
      'Delivers detailed 5 MP video at up to 30 fps',
      'LightHunter technology provides enhanced low-light image quality',
      'Smart intrusion prevention helps filter false alarms',
      'Supports Cross Line, Intrusion, Enter Area, and Leave Area detection',
      '120 dB WDR provides clearer images in challenging lighting',
      'Dual-light system combines Smart IR and warm-light illumination',
      'Built-in microphone and speaker enable two-way audio',
      'Supports Ultra 265, H.265, H.264, and MJPEG compression',
      'Supports MicroSD storage up to 512 GB',
      'IP66 protection provides reliable outdoor operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
