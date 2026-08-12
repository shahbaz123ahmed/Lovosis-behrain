import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const bulletSeries: Product[] = [
  {
    id: 'exc2614s-x33-w-vd2',
    name: 'EXC2614S-X33-W-VD2',
    slug: 'exc2614s-x33-w-vd2',
    category: 'Explosion-Proof Cameras',
    subcategory: 'Bullet Series',
    description: '4MP Starlight 33X IR Intelligent Explosion-Proof Bullet IP Camera',
    imageUrl: '/Explosion/bs1.png',
    specifications: {
      'Sensor': '1/1.8" CMOS',
      'Maximum Resolution': '4 MP (2688 × 1520)',
      'Lens': '6.5–214.5 mm, 33X optical zoom',
      'Minimum Illumination': '0.002 Lux color / 0.001 Lux B&W',
      'IR Distance': 'Up to 200 m',
      'Video Compression': 'H.265 / H.264 / MJPEG',
      'WDR': '120 dB',
      'Power': 'AC 100–240V / PoE+ (IEEE 802.3at)',
      'Operating Temperature': '−40°C to +60°C',
      'Protection': 'IP68, NEMA 4X'
    },
    features: [
      'Supports intelligent deep perimeter protection',
      'Detects and classifies pedestrians, motor vehicles, and non-motor vehicles',
      'Supports people counting and personnel-density detection',
      '120 dB optical WDR delivers clear images in high-contrast scenes',
      'Supports H.265, H.264, and MJPEG video compression',
      'Electronic Image Stabilization (EIS) improves image stability',
      'Supports two-way audio communication',
      'Provides MicroSD edge storage up to 512 GB',
      'ATEX and IECEx certified for hazardous/explosive environments',
      'Supports AC 220V and PoE+ (IEEE 802.3at) power options'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
