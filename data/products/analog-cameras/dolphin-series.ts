import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const dolphinSeries: Product[] = [
  {
    id: 'uac-b115-af28-40-w',
    name: 'UAC-B115-AF28(40)-W',
    slug: 'uac-b115-af28-40-w',
    category: 'Analog Cameras',
    subcategory: 'Dolphin Series',
    description: '5MP ColourHunter Fixed Bullet Analog Camera',
    imageUrl: '/Subcategory/sub1.png',
    specifications: {
      'Camera Type': 'Fixed Bullet Analog Camera',
      'Sensor': '1/2.7-inch CMOS',
      'Resolution': '5 MP',
      'Lens Options': '2.8 mm / 4.0 mm',
      'Lens Mount': 'M12',
      'Min. Illumination': '0.01 lux',
      'Video Output': 'TVI, AHD, CVI, CVBS',
      'White-Light Distance': 'Up to 20 m',
      'Viewing Angle (2.8 mm)': 'H: 110°, V: 57°, D: 130°'
    },
    features: [
      'Delivers crystal-clear 5 MP video quality',
      'ColourHunter technology provides vivid full-color images even in low-light environments',
      'White-light illumination enables continuous color monitoring throughout the night',
      'Built-in microphone allows audio transmission through coaxial cables',
      'Compatible with TVI, AHD, CVI, and CVBS systems',
      'IP67-rated housing ensures reliable outdoor performance',
      'Supports digital noise reduction (2D DNR) for clearer images',
      'Simple installation and easy configuration through the OSD menu'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uac-b115-af28-40',
    name: 'UAC-B115-AF28(40)',
    slug: 'uac-b115-af28-40',
    category: 'Analog Cameras',
    subcategory: 'Dolphin Series',
    description: '5MP Fixed IR Bullet Analog Camera',
    imageUrl: '/Subcategory/sub2.png',
    specifications: {
      'Camera Type': 'Fixed IR Bullet Analog Camera',
      'Sensor': '1/2.7-inch CMOS',
      'Resolution': '5 MP',
      'Lens Options': '2.8 mm / 4.0 mm',
      'Lens Mount': 'M12',
      'Min. Illumination': '0.02 lux',
      'Video Output': 'TVI, AHD, CVI, CVBS',
      'Infrared Distance': 'Up to 20 m',
      'Day/Night Mode': 'ICR'
    },
    features: [
      'Delivers clear 5 MP video quality',
      'Supports multiple video transmission standards (TVI, AHD, CVI, and CVBS)',
      'Smart IR technology prevents overexposure during nighttime monitoring',
      'Built-in microphone enables audio recording through coaxial cables',
      'Supports 180° horizontal and vertical image rotation',
      'User-friendly OSD menu with support for 11 languages',
      'Designed for both indoor and outdoor installations',
      'IP67 protection ensures excellent resistance against dust and water'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uac-t115-af28-40-w',
    name: 'UAC-T115-AF28(40)-W',
    slug: 'uac-t115-af28-40-w',
    category: 'Analog Cameras',
    subcategory: 'Dolphin Series',
    description: '5MP ColourHunter Fixed Turret Analog Camera',
    imageUrl: '/Subcategory/dol3.png',
    specifications: {
      'Camera Type': 'Fixed Turret Analog Camera',
      'Sensor': '1/2.7-inch CMOS',
      'Resolution': '5 MP',
      'Lens Options': '2.8 mm / 4.0 mm',
      'Lens Mount': 'M12',
      'Min. Illumination': '0.01 Lux',
      'White-Light Range': 'Up to 20 m',
      'Viewing Angle (2.8 mm)': '110° (H), 57° (V), 130° (D)',
      'Viewing Angle (4.0 mm)': '90° (H), 48° (V), 109.1° (D)'
    },
    features: [
      'Delivers high-quality 5 MP video output',
      'ColourHunter technology provides vivid full-color images even in low-light conditions',
      'Built-in microphone enables high-quality audio transmission',
      'Supports multiple video output formats for greater compatibility',
      'Smart noise reduction technology enhances image quality',
      'Supports horizontal and vertical image flipping',
      'OSD menu supports multiple languages',
      'Rugged IP67 housing ensures reliable outdoor performance'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uac-t115-af28-40',
    name: 'UAC-T115-AF28(40)',
    slug: 'uac-t115-af28-40',
    category: 'Analog Cameras',
    subcategory: 'Dolphin Series',
    description: '5MP Fixed IR Turret Analog Camera',
    imageUrl: '/Subcategory/dol4.png',
    specifications: {
      'Camera Type': 'Fixed IR Turret Analog Camera',
      'Resolution': '5 MP',
      'Sensor': '1/2.7-inch CMOS',
      'Lens Options': '2.8 mm / 4.0 mm',
      'Lens Mount': 'M12',
      'Min. Illumination': '0.02 Lux',
      'Infrared Illumination': '0 Lux (IR enabled)',
      'Viewing Angle (2.8 mm)': '102.2° (Horizontal)',
      'Viewing Angle (4.0 mm)': '82.9° (Horizontal)',
      'Video Output': 'TVI, AHD, CVI, CVBS'
    },
    features: [
      'Delivers high-quality 5 MP video output',
      'Smart infrared technology provides clear images in low-light conditions',
      'Built-in microphone enables audio transmission through coaxial cables',
      'Supports TVI, AHD, CVI, and CVBS output modes',
      'Automatic day and night switching ensures reliable surveillance',
      'Multiple image adjustment functions improve image quality',
      'IP67-rated housing provides excellent protection against dust and water',
      'Suitable for both indoor and outdoor installations'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uac-b112-af28-40-w',
    name: 'UAC-B112-AF28(40)-W',
    slug: 'uac-b112-af28-40-w',
    category: 'Analog Cameras',
    subcategory: 'Dolphin Series',
    description: '2MP ColourHunter Fixed Bullet Analog Camera',
    imageUrl: '/Subcategory/sub1.png',
    specifications: {
      'Sensor': '1/3-inch CMOS',
      'Max Resolution': '1920 × 1080 (2 MP)',
      'Lens Options': '2.8 mm / 4.0 mm',
      'Min. Illumination': '0.01 lux',
      'White-Light Range': 'Up to 20 m',
      'Frame Rate': 'Up to 30 fps',
      'Audio': 'Built-in microphone',
      'Power Supply': 'DC 12 V ±25%',
      'Operating Temp': '–30°C to +60°C',
      'Protection Rating': 'IP67'
    },
    features: [
      'Delivers high-quality 1080p video output',
      'ColourHunter technology provides vivid full-color images',
      'White-light illumination enables clear nighttime monitoring',
      'Supports 24/7 continuous color surveillance',
      'Built-in microphone allows synchronized audio recording',
      '3D noise reduction technology enhances image clarity',
      'Supports horizontal and vertical image rotation',
      'User-friendly OSD menu with support for 11 languages',
      'Compatible with multiple DVR systems',
      'IP67 protection ensures reliable outdoor performance'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];

