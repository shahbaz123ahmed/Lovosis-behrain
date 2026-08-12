import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const sSeries: Product[] = [
  {
    id: 'uho-p2g-m3f4d-u-la',
    name: 'Uho-P2G-M3F4D-U-LA',
    slug: 'uho-p2g-m3f4d-u-la',
    category: 'Wireless Camera',
    subcategory: 'S Series',
    description: '3MP 4G Solar Battery Pan & Tilt Camera',
    imageUrl: '/Wireless_cameras/wps1.png',
    specifications: {
      'Sensor': '1/2.8" CMOS',
      'Maximum Resolution': '3 MP (2304 × 1296)',
      'Frame Rate': 'Up to 15 fps at 2304 × 1296',
      'Lens': '4.0 mm fixed lens',
      'Minimum Illumination': '0.001 Lux (F1.0, AGC ON)',
      'Night Vision': 'IR up to 30 m + warm light up to 30 m',
      'Video Compression': 'Ultra 265 / H.265',
      'Audio': 'Built-in microphone and speaker',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection Rating': 'IP66'
    },
    features: [
      'Supports 4G access for remote surveillance',
      'Ultra 265 and H.265 video compression',
      'Digital WDR improves image quality in challenging lighting',
      'Built-in microphone and speaker support two-way audio',
      'Smart IR provides clear nighttime monitoring',
      'Warm-light illumination reaches up to 30 meters',
      'Supports MicroSD cards up to 512 GB',
      'Integrated pan-and-tilt design provides wider surveillance coverage',
      'Self-contained bracket supports flexible mounting',
      'Graphene front face improves heat dissipation and environmental performance'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uho-p2g-m3f4d-u-eu',
    name: 'Uho-P2G-M3F4D-U-EU',
    slug: 'uho-p2g-m3f4d-u-eu',
    category: 'Wireless Camera',
    subcategory: 'S Series',
    description: '3MP 4G Solar Battery PT Camera',
    imageUrl: '/Wireless_cameras/wps1.png',
    specifications: {
      'Sensor': '1/2.8" CMOS',
      'Maximum Resolution': '3 MP (2304 × 1296)',
      'Frame Rate': 'Up to 15 fps',
      'Lens': '4.0 mm fixed lens',
      'Minimum Illumination': '0.001 Lux (color), 0 Lux with IR',
      'Night Vision': 'IR 30 m / Warm Light 30 m',
      'Compression': 'Ultra 265 / H.265 / H.264',
      'Audio': 'Built-in microphone & speaker',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection Rating': 'IP66'
    },
    features: [
      'Supports 4G connectivity for remote surveillance',
      'Solar-powered operation for standalone installations',
      'Built-in rechargeable battery for continuous operation',
      'Ultra 265 and H.265 video compression',
      'Digital WDR improves image quality in challenging lighting',
      'Two-way audio through built-in microphone and speaker',
      'Smart IR provides clear nighttime monitoring',
      'Warm-light illumination supports enhanced night visibility',
      'Supports MicroSD storage up to 512 GB',
      'Self-contained bracket supports flexible mounting options'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uho-p2g-m3f4d-u-as',
    name: 'Uho-P2G-M3F4D-U-AS',
    slug: 'uho-p2g-m3f4d-u-as',
    category: 'Wireless Camera',
    subcategory: 'S Series',
    description: '3MP HD Outdoor Pan & Tilt 4G Camera',
    imageUrl: '/Wireless_cameras/wps3.png',
    specifications: {
      'Sensor': '1/2.8-inch CMOS',
      'Resolution': '3 MP (2304 × 1296)',
      'Frame Rate': 'Up to 15 fps at 3 MP',
      'Video Compression': 'Ultra 265 / H.265',
      'Network': '4G cellular connectivity',
      'Illumination': 'IR & warm light up to 30 m',
      'Audio': 'Built-in microphone & speaker',
      'Storage': 'MicroSD card up to 512 GB',
      'Power': 'DC 12 V ±25%',
      'Protection': 'IP66 outdoor-rated housing'
    },
    features: [
      'Delivers clear and detailed 3 MP surveillance video',
      'Supports 4G connectivity for flexible outdoor deployment',
      'Pan-and-tilt functionality provides wider surveillance coverage',
      'Smart IR delivers clear nighttime monitoring up to 30 meters',
      'Warm-light illumination supports enhanced nighttime visibility',
      'Built-in microphone and speaker enable two-way communication',
      'Digital WDR improves image quality in challenging lighting conditions',
      'Ultra 265 compression reduces bandwidth and storage requirements',
      'Self-contained mounting bracket simplifies installation',
      'Designed with IP66 ingress protection for outdoor environments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uho-p2s-m55f34-u',
    name: 'Uho-P2S-M55F34-U',
    slug: 'uho-p2s-m55f34-u',
    category: 'Wireless Camera',
    subcategory: 'S Series',
    description: '5MP + 5MP Dual-Lens Wi-Fi PT Camera',
    imageUrl: '/Wireless_cameras/wps4.png',
    specifications: {
      'Image Sensor': '1/2.8" CMOS',
      'Maximum Resolution': '5MP per channel',
      'Lens': '2.8 mm panoramic / 4 mm PTZ',
      'Minimum Illumination': '0.003 Lux (F1.6, AGC ON)',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Storage': 'MicroSD up to 512 GB',
      'Network': '2.4 GHz Wi-Fi + RJ45 10/100M',
      'Power Supply': '12 V DC ±25%',
      'Operating Temperature': '–30°C to +60°C',
      'Protection Rating': 'IP66'
    },
    features: [
      'Dual channels operate through a single IP address',
      'Provides simultaneous panoramic and detailed monitoring',
      'Supports two-way audio for real-time communication',
      'Smart IR provides clear monitoring in low-light environments',
      'Warm-light illumination enables full-color nighttime images',
      'Supports sound and light warning for active deterrence',
      'Ultra Motion detection supports human and vehicle classification',
      'Supports MicroSD cards up to 512 GB',
      'Digital WDR and 2D/3D DNR improve image quality',
      'Wi-Fi connectivity enables convenient installation and remote monitoring'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uho-p1a-m3f4d-u',
    name: 'Uho-P1A-M3F4D-U',
    slug: 'uho-p1a-m3f4d-u',
    category: 'Wireless Camera',
    subcategory: 'S Series',
    description: '3MP Outdoor Dual-Light Wi-Fi PT Camera',
    imageUrl: '/Wireless_cameras/wps5.png',
    specifications: {
      'Sensor': '1/2.8" CMOS',
      'Maximum Resolution': '3 MP (2304 × 1296)',
      'Lens': '4.0 mm fixed, F1.6',
      'Minimum Illumination': '0.005 Lux; 0 Lux with IR',
      'IR / Warm Light': 'Up to 30 m / 10 m',
      'Pan / Tilt Range': '0°–345° / 0°–90°',
      'Storage': 'MicroSD card up to 512 GB',
      'Network': '2.4 GHz Wi-Fi + RJ45 Ethernet',
      'Power': 'DC 12 V ±25%, max. 10 W',
      'Protection': 'IP66; operating temperature −30°C to +60°C'
    },
    features: [
      'Pan-and-tilt design provides flexible surveillance coverage',
      'Supports automatic human-body tracking',
      'Human-body, motion, and audio detection supported',
      'Dual-light technology combines IR and warm-light illumination',
      'Sound and light warning provides active deterrence',
      'Two-way audio enables real-time communication',
      'Ultra 265, H.265, and H.264 video compression supported',
      'Digital WDR and 2D/3D DNR improve image clarity',
      'Supports MicroSD storage up to 512 GB',
      'Self-contained bracket supports convenient installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
