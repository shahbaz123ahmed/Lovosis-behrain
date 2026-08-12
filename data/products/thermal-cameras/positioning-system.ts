import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const positioningSystem: Product[] = [
  {
    id: 'tic7626el-gaf75-4x56-vh1',
    name: 'TIC7626EL-GAF75-4X56-VH1',
    slug: 'tic7626el-gaf75-4x56-vh1',
    category: 'Thermal Cameras',
    subcategory: 'Positioning System',
    description: 'Thermal & Optical Dual-Spectrum Positioning System',
    imageUrl: '/Thermal/bulletpos1.png',
    specifications: {
      'Optical Sensor': '1/1.8" CMOS',
      'Thermal Sensor': 'Vanadium oxide uncooled focal plane array',
      'Max Resolution': 'Optical 4 MP / Thermal 2 MP output',
      'Thermal Original Resolution': '640 × 512',
      'Lens': 'Optical 6–336 mm, 56× zoom / Thermal 75 mm',
      'Laser Distance': 'Up to 800 m (2624.7 ft)',
      'PTZ Range': '360° endless pan, −90° to +45° tilt',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Power Supply': 'DC 48 V ±25%, DC 24 V ±15%, AC 24 V ±25%',
      'Protection & Environment': 'IP66; −40°C to +70°C operating temperature'
    },
    features: [
      'Thermal and optical dual video transmission through a single IP address',
      'Passive thermal imaging operates effectively through fog, smoke, rain, snow, and darkness',
      'Thermal channel supports fire detection for enhanced safety monitoring',
      'Optical channel can automatically link to detected fire positions and zoom in',
      'Dual-spectrum smart intrusion prevention supports cross-line and area-based detection',
      'Smart tracking provides automatic tracking of detected targets',
      'Gyroscope stabilization helps maintain stable optical images',
      'Heat-wave reduction technology improves image clarity in challenging environments',
      'Rain-sensing automatic wiper maintains clear visibility during harsh weather',
      'Supports audio I/O, alarm I/O, RS485, ONVIF, API, and SDK integration'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
