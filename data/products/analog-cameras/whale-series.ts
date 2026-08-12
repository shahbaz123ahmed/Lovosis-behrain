import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const whaleSeries: Product[] = [
  {
    id: 'uac-t142-af28-40-lm-dl',
    name: 'UAC-T142-AF28(40)LM-DL',
    slug: 'uac-t142-af28-40-lm-dl',
    category: 'Analog Cameras',
    subcategory: 'Whale Series',
    description: '2MP ColorHunter Smart Dual-Light Turret Analog Camera',
    imageUrl: '/analog/whale1.png',
    specifications: {
      'Sensor': '1/3-inch CMOS',
      'Maximum Resolution': '1920 × 1080 (2 MP)',
      'Lens': '2.8 mm / 4.0 mm, M12 mount',
      'Minimum Illumination': '0.003 lux; 0 lux with illuminator',
      'Illumination Distance': 'IR 40 m / White Light 40 m',
      'Frame Rate': 'Up to 1080p @ 30 fps',
      'Video Output': 'TVI / AHD / CVI / CVBS',
      'Noise Reduction': '2D / 3D DNR',
      'Power Supply': 'DC 12 V ±25%, max. 3.6 W',
      'Protection Rating': 'IP67'
    },
    features: [
      'Delivers high-quality 2 MP (1920 × 1080) video',
      'Supports TVI, AHD, CVI, and CVBS video output formats',
      'Smart Dual Light intelligently switches between IR and white light',
      'Supports IR-cut filter with automatic switching (ICR)',
      '3D noise reduction provides cleaner and sharper images',
      'Built-in microphone enables audio transmission over coaxial cable',
      'Supports 180° horizontal and 180° vertical image flipping',
      'Provides Global, BLC, HLC, and DWDR exposure modes',
      'OSD configuration menu supports 11 languages',
      'Rugged IP67 housing ensures reliable indoor and outdoor operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uac-b145-af28-40-lm-dl',
    name: 'UAC-B145-AF28(40)LM-DL',
    slug: 'uac-b145-af28-40-lm-dl',
    category: 'Analog Cameras',
    subcategory: 'Whale Series',
    description: '5MP ColorHunter Fixed Dual-Light Bullet Analog Camera',
    imageUrl: '/analog/whale2.png',
    specifications: {
      'Sensor': '1/2.7-inch CMOS',
      'Maximum Resolution': '5 MP',
      'Lens': '2.8 mm / 4.0 mm, M12 mount',
      'Minimum Illumination': '0.005 Lux (F1.6, AGC ON)',
      'Viewing Angle': '110° H (2.8 mm) / 90° H (4.0 mm)',
      'Illumination Distance': 'IR 40 m / White Light 40 m',
      'Video Output': 'TVI / AHD / CVI / CVBS',
      'Frame Rate': 'Up to 5 MP @ 25 fps',
      'Power Supply': 'DC 12 V ±25%, max. 3.5 W',
      'Protection Rating': 'IP67'
    },
    features: [
      'Delivers high-quality 5 MP surveillance video',
      'Supports TVI, AHD, CVI, and CVBS video output formats',
      'Smart Dual Light intelligently switches between IR and white light with compatible UNV XVRs',
      'IR-cut filter with automatic switching provides reliable day/night monitoring',
      'Built-in microphone supports high-quality audio transmission over coaxial cable',
      'Supports 180° horizontal and 180° vertical image flipping',
      'Provides Global, BLC, HLC, and DWDR exposure modes',
      'Supports Dual Light, Infrared, and White Light operating modes',
      'OSD configuration menu supports 11 languages',
      'IP67-rated housing provides reliable indoor and outdoor operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uac-b142-af28-40-lm-dl',
    name: 'UAC-B142-AF28(40)LM-DL',
    slug: 'uac-b142-af28-40-lm-dl',
    category: 'Analog Cameras',
    subcategory: 'Whale Series',
    description: '2MP ColorHunter Smart Dual-Light Bullet Analog Camera',
    imageUrl: '/analog/whale2.png',
    specifications: {
      'Sensor': '1/3-inch CMOS',
      'Maximum Resolution': '1920 × 1080 (2 MP)',
      'Lens': '2.8 mm / 4.0 mm fixed, F1.6',
      'Minimum Illumination': '0.003 Lux; 0 Lux with illuminator on',
      'Viewing Angle (H)': '100.9° (2.8 mm) / 82.5° (4.0 mm)',
      'Illumination Distance': 'IR 40 m / White Light 40 m',
      'Frame Rate': 'Up to 1080p @ 30 fps',
      'Video Output': 'BNC – TVI/AHD/CVI/CVBS',
      'Power Supply': 'DC 12 V ±25%, max. 3.6 W',
      'Protection Rating': 'IP67'
    },
    features: [
      'Delivers high-quality 2 MP (1920 × 1080) video',
      'Supports TVI, AHD, CVI, and CVBS video formats',
      'Smart Dual Light intelligently switches between IR and white light when used with compatible UNV XVRs',
      'IR-cut filter with automatic switching provides reliable day/night monitoring',
      '3D noise reduction delivers cleaner and sharper images',
      'Supports DWDR, BLC, and HLC exposure modes',
      'Supports 180° horizontal and 180° vertical image flipping',
      'Built-in microphone enables audio transmission over coaxial cable',
      'OSD configuration menu supports 11 languages',
      'Rugged IP67 housing provides reliable indoor and outdoor operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uac-t145-af28-40-lm-dl',
    name: 'UAC-T145-AF28(40)LM-DL',
    slug: 'uac-t145-af28-40-lm-dl',
    category: 'Analog Cameras',
    subcategory: 'Whale Series',
    description: '5MP ColorHunter Fixed Dual-Light Turret Analog Camera',
    imageUrl: '/analog/whale4.png',
    specifications: {
      'Sensor': '1/2.7-inch CMOS',
      'Maximum Resolution': '5 MP',
      'Lens': '2.8 mm / 4.0 mm fixed, M12 mount',
      'Minimum Illumination': '0.005 Lux (F1.6, AGC ON)',
      'Viewing Angle': '110° H (2.8 mm) / 90° H (4.0 mm)',
      'Illuminators': '2 × IR + 2 × white light',
      'Illumination Distance': 'Up to 40 m',
      'Video Output': 'TVI / AHD / CVI / CVBS',
      'Power Supply': 'DC 12 V ±25%',
      'Protection Rating': 'IP67'
    },
    features: [
      'Delivers high-quality 5 MP surveillance video',
      'ColorHunter technology enhances color imaging in low-light environments',
      'Smart Dual Light intelligently switches between IR and white light with compatible UNV XVRs',
      'Supports TVI, AHD, CVI, and CVBS video formats',
      'IR-cut filter with automatic switching provides effective day/night monitoring',
      'Built-in microphone supports high-quality audio transmission over coaxial cable',
      'Supports 180° horizontal and 180° vertical image flip',
      'OSD configuration menu provides simple camera setup',
      'OSD interface supports 11 languages',
      'IP67-rated housing provides reliable indoor and outdoor operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uac-d122-af28m',
    name: 'UAC-D122-AF28M',
    slug: 'uac-d122-af28m',
    category: 'Analog Cameras',
    subcategory: 'Whale Series',
    description: '2MP LightHunter Fixed IR Dome Analog Camera',
    imageUrl: '/analog/whale3.png',
    specifications: {
      'Sensor': '1/2.9-inch CMOS',
      'Maximum Resolution': '1920 × 1080 (2 MP)',
      'Lens': '2.8 mm fixed, M12 mount',
      'Minimum Illumination': '0.005 Lux; 0 Lux with IR',
      'Viewing Angle': 'H 101.5°, V 56.9°, D 117.4°',
      'IR Distance': 'Up to 30 m',
      'Frame Rate': '1080p at up to 30 fps',
      'Video Output': 'TVI / AHD / CVI / CVBS',
      'Power': 'DC 12 V ±25%, max. 3.3 W',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'Delivers clear 2 MP (1920 × 1080) video',
      'LightHunter technology provides enhanced low-light monitoring',
      'Smart IR ensures clear nighttime images up to 30 m',
      'IR-cut filter with automatic switching supports day/night surveillance',
      '2D/3D noise reduction delivers cleaner and sharper images',
      'Built-in microphone supports audio transmission over coaxial cable',
      'Supports DWDR, BLC, and HLC image enhancement',
      'Digital defog improves visibility in challenging conditions',
      'Supports 180° horizontal and vertical image flip',
      'Metal housing with IP67 and IK10 protection provides high durability'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
