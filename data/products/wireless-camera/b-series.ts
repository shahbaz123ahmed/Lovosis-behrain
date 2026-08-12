import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const bSeries: Product[] = [
  {
    id: 'uho-b2d-m3f4d-u',
    name: 'Uho-B2D-M3F4D-U',
    slug: 'uho-b2d-m3f4d-u',
    category: 'Wireless Camera',
    subcategory: 'B Series',
    description: '3MP HD Outdoor Dual-Light Wi-Fi Bullet Camera',
    imageUrl: '/Wireless_cameras/wpsb1.png',
    specifications: {
      'Sensor': '1/3.0" CMOS',
      'Resolution': '3 MP (2304 × 1296)',
      'Lens': '4.0 mm fixed, F1.6',
      'Field of View': 'H 87.3°, V 47.4°, D 101.0°',
      'Minimum Illumination': '0.003 lux; 0 lux with IR',
      'IR Distance': 'Up to 20 m',
      'Warm-Light Distance': 'Up to 10 m',
      'Video Compression': 'Ultra 265 / H.265 / H.264 / MJPEG',
      'Frame Rate': '3 MP up to 25 fps; 1080p up to 30 fps',
      'Wireless': '2.4 GHz Wi-Fi'
    },
    features: [
      'Delivers clear and detailed 3 MP surveillance video',
      'Dual-light technology combines infrared and warm-light illumination',
      'Automatically switches between IR and warm light based on configured triggers',
      'Built-in microphone and speaker enable two-way audio communication',
      'Supports Ultra 265, H.265, H.264, and MJPEG video compression',
      'Smart motion detection helps identify important activity',
      'Supports MicroSD card storage for local video recording',
      'Digital WDR improves visibility in challenging lighting conditions',
      'Wi-Fi support enables flexible and convenient installation',
      'Weather-resistant design makes it suitable for outdoor surveillance'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uho-b2d-m5f4d-u',
    name: 'Uho-B2D-M5F4D-U',
    slug: 'uho-b2d-m5f4d-u',
    category: 'Wireless Camera',
    subcategory: 'B Series',
    description: '5MP HD Outdoor Dual-Light Wi-Fi Bullet Camera',
    imageUrl: '/Wireless_cameras/wpsb1.png',
    specifications: {
      'Sensor': '1/3.0" 5 MP CMOS',
      'Maximum Resolution': '2880 × 1620',
      'Lens': '4.0 mm fixed, F1.6',
      'Minimum Illumination': '0.003 lux (color), 0 lux with IR',
      'Field of View': 'H 79.0°, V 42.3°, D 85.1°',
      'Illumination': 'IR up to 20 m; warm light up to 10 m',
      'Compression': 'Ultra 265 / H.265 / H.264 / MJPEG',
      'Storage': 'MicroSD card up to 128 GB',
      'Power': 'DC 12 V ±25%, max. 5.7 W',
      'Protection': 'IP67; operating temperature −30°C to +60°C'
    },
    features: [
      'Delivers detailed 5 MP video for outdoor surveillance',
      'Dual-light technology combines IR and warm-light illumination',
      'Supports automatic switching between IR and warm light',
      'Built-in microphone and speaker enable two-way audio',
      'Ultra 265 compression reduces bandwidth and storage usage',
      'Supports Ultra 265, H.265, H.264, and MJPEG compression',
      'Supports motion, ultra-motion, audio, and tampering detection',
      'MicroSD storage support up to 128 GB',
      'Wi-Fi connectivity allows flexible and convenient installation',
      'Rugged IP67 housing provides reliable outdoor operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
