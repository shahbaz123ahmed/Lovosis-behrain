import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const doorbell: Product[] = [
  {
    id: 'ed-r1',
    name: 'ED-R1',
    slug: 'ed-r1',
    category: 'Video Intercoms',
    subcategory: 'Doorbell',
    description: 'Wireless Chime / 433 Bell',
    imageUrl: '/VMS/doorbell1.png',
    specifications: {
      'Product Type': 'Wireless Chime / 433 Bell',
      'Connection Method': 'Sub-1 GHz',
      'Speaker': 'Built-in speaker',
      'Volume Control': '5 levels',
      'Ringtones': '3 options',
      'Power Consumption': '3 W',
      'Installation': 'Direct plug-in socket installation',
      'Dimensions': '53.6 × 85.6 × 39.8 mm',
      'Weight': '80 g net / 125 g gross',
      'Operating Temperature': '-20°C to +50°C'
    },
    features: [
      'Simple plug-and-play setup',
      'Connects wirelessly to compatible doorbells',
      'Provides five adjustable volume levels',
      'Offers three selectable ringtone options',
      'Built-in speaker provides clear audible alerts',
      'Dedicated button for volume adjustment',
      'Dedicated reset function',
      'Easy ringtone switching',
      'Compact and lightweight construction',
      'NDAA compliant'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ed-525b-wb',
    name: 'ED-525B-WB',
    slug: 'ed-525b-wb',
    category: 'Video Intercoms',
    subcategory: 'Doorbell',
    description: 'Dual-Camera Video Doorbell',
    imageUrl: '/VMS/doorbell2.png',
    specifications: {
      'Main Camera': '3 MP, 116° horizontal FOV',
      'Sub Camera': '2 MP, 96.8° horizontal FOV',
      'Minimum Illumination': '0.02 Lux',
      'Illumination': 'IR 5 m / White light 2 m',
      'Wireless': 'Wi-Fi 6, 2.4 GHz & 5 GHz, Bluetooth',
      'Storage': 'Built-in 8 GB eMMC',
      'Audio': 'Built-in microphone & speaker',
      'Video Compression': 'H.265 / H.264',
      'Operating Temperature': '-30°C to +60°C',
      'Protection': 'IP65; dimensions 55.8 × 156.5 × 27.9 mm'
    },
    features: [
      'Dual cameras monitor visitors and packages at the doorstep',
      'Supports motion detection alarms',
      'Human body detection provides smarter security alerts',
      'Package detection helps monitor delivered parcels',
      'True HDR and DWDR improve visibility in backlit scenes',
      'Noise suppression enhances voice communication',
      'Supports remote visitor calls through the mobile app',
      'Connects to Uniview NVR for live view, playback, and alarm search',
      'Bluetooth support enables quick network configuration',
      'Supports H.265 and H.264 video compression'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
