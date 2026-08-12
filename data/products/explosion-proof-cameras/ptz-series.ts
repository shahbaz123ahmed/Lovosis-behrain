import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const ptzSeries: Product[] = [
  {
    id: 'exc7514s-x33-w-vd2',
    name: 'EXC7514S-X33-W-VD2',
    slug: 'exc7514s-x33-w-vd2',
    category: 'Explosion-Proof Cameras',
    subcategory: 'PTZ Series',
    description: '4MP Starlight 33X IR Intelligent PTZ Explosion-Proof IP Camera',
    imageUrl: '/Explosion/bullet.png',
    specifications: {
      'Sensor': '1/1.8" CMOS',
      'Maximum Resolution': '4 MP (2688 × 1520)',
      'Lens': '6.5–214.5 mm',
      'Optical Zoom': '33X',
      'IR Distance': 'Up to 200 m',
      'WDR': '120 dB',
      'Video Compression': 'H.265 / H.264 / MJPEG',
      'PTZ Range': '360° endless pan, −90° to 90° tilt',
      'Power Supply': 'AC 220 V (100–240 V)',
      'Protection': 'IP68 / NEMA 4X'
    },
    features: [
      'Starlight-level imaging for clear surveillance in low-light environments',
      'Supports intelligent auto tracking',
      'Smart intrusion prevention with human and vehicle classification',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'People counting and personnel-density detection',
      '33X optical zoom enables detailed long-distance monitoring',
      'Powerful IR illumination provides visibility up to 200 meters',
      'Supports H.265, H.264, and MJPEG video compression',
      '316L stainless-steel body designed for hazardous industrial environments',
      'ATEX, IECEx, IP68, and NEMA 4X protection for demanding installations'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'exc6524s-x33-vd2',
    name: 'EXC6524S-X33-VD2',
    slug: 'exc6524s-x33-vd2',
    category: 'Explosion-Proof Cameras',
    subcategory: 'PTZ Series',
    description: '4MP Starlight 33X Intelligent Explosion-Proof Dome Network Camera',
    imageUrl: '/Explosion/bs2.png',
    specifications: {
      'Sensor': '1/1.8" CMOS',
      'Resolution': '4 MP (2688 × 1520)',
      'Frame Rate': 'Up to 30 fps',
      'Lens': '6.5–214.5 mm',
      'Optical Zoom': '33×',
      'Video Compression': 'Ultra 265 / H.265 / H.264 / MJPEG',
      'Housing Material': '316L stainless steel',
      'Power Supply': 'AC 100–240 V / PoE (IEEE 802.3at)',
      'Operating Temperature': '–40°C to +60°C',
      'Protection': 'IP68 / IK10 / NEMA 4X'
    },
    features: [
      'Delivers detailed 4 MP video at up to 30 fps',
      'Powerful 33× optical zoom enables long-distance surveillance',
      'Starlight technology provides enhanced images in low-light environments',
      'Intelligent PTZ functionality enables flexible area monitoring',
      'Ultra 265, H.265, H.264 and MJPEG video compression support',
      'Rugged 316L stainless-steel construction offers excellent corrosion resistance',
      'Explosion-proof design makes it suitable for hazardous industrial environments',
      'IP68 protection provides superior resistance to water and dust',
      'IK10 rating offers high resistance against external impact and vandalism',
      'Ideal for petrochemical, oil & gas, marine and other demanding industrial applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
