import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const ixSeries: Product[] = [
  {
    id: 'nvr808-32-ix-g',
    name: 'NVR808-32-IX-G',
    slug: 'nvr808-32-ix-g',
    category: 'Network Video Recorders',
    subcategory: 'IX Series',
    description: '8 HDD 32-Channel Network Video Recorder',
    imageUrl: '/networkvideo/ix1.png',
    specifications: {
      'IP Video Input': '32 channels',
      'Recording Resolution': 'Up to 8 MP / 4K',
      'Incoming/Outgoing Bandwidth': '512 Mbps / 512 Mbps',
      'Decoding': 'Up to 6 × 4K@30 fps',
      'Storage': '8 × SATA, up to 24 TB per HDD',
      'Video Output': '3 × HDMI + 1 × VGA',
      'Network Interface': '2 × RJ45 Gigabit Ethernet',
      'USB Interface': '2 × USB 2.0 + 2 × USB 3.0',
      'Power Supply': 'AC 220 V',
      'Operating Temperature': '-10°C to +55°C'
    },
    features: [
      'Supports advanced AI-powered video analytics',
      'SeekFree enables fast and intelligent video searching',
      'Supports Face Detection and face-related intelligent search',
      'Smart Intrusion Prevention (SIP) enhances perimeter security',
      'Supports People Counting and crowd-density monitoring',
      'Video Metadata provides detailed human and vehicle attributes',
      'ANR technology improves recording reliability during network interruptions',
      'Supports plate comparison with vehicle picture libraries',
      'Multiple independent HDMI outputs enable flexible multi-screen monitoring',
      'Supports cloud upgrades for convenient system maintenance'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr502-32e-ix-g',
    name: 'NVR502-32E-IX-G',
    slug: 'nvr502-32e-ix-g',
    category: 'Network Video Recorders',
    subcategory: 'IX Series',
    description: '2 HDDs 32-Channel Network Video Recorder',
    imageUrl: '/networkvideo/ix2.png',
    specifications: {
      'IP Video Input': '32 channels',
      'Recording Resolution': 'Up to 32 MP',
      'Incoming/Outgoing Bandwidth': '192 Mbps / 192 Mbps',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Video Output': '2 × HDMI + 2 × VGA',
      'Storage': '2 × SATA, up to 24 TB per HDD',
      'Network Interface': '2 × RJ45 Gigabit Ethernet',
      'Power Supply': 'DC 12 V / 5 A',
      'Operating Temperature': '−10°C to +55°C',
      'Dimensions': '380 × 322.4 × 53 mm'
    },
    features: [
      'Supports simultaneous connection of up to 32 IP cameras',
      'Ultra 265 compression reduces storage and bandwidth requirements',
      'ANR technology improves recording reliability during network disconnection',
      'SeekFree supports intelligent video searching across multiple channels',
      'Supports Smart Intrusion Prevention (SIP)',
      'Supports face, vehicle, people-counting and video metadata analytics',
      'Independent HDMI and VGA outputs provide flexible display configurations',
      'Supports up to 32-channel concurrent playback',
      'Dual Gigabit Ethernet interfaces provide reliable network connectivity',
      'Supports cloud upgrades and external USB keyboards'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr824-128-r-ix2-8g',
    name: 'NVR824-128-R-IX2-8G',
    slug: 'nvr824-128-r-ix2-8g',
    category: 'Network Video Recorders',
    subcategory: 'IX Series',
    description: '24 HDDs 128-Channel 4U Network Video Recorder',
    imageUrl: '/networkvideo/ix3.png',
    specifications: {
      'IP Video Input': '128 channels',
      'Compression': 'Ultra 265 / H.265 / H.264',
      'Recording Resolution': 'Up to 8 MP',
      'Incoming/Outgoing Bandwidth': 'Up to 768 Mbps / 768 Mbps',
      'Storage': '24 SATA interfaces',
      'RAID': 'RAID 0, 1, 5, 6, 10, 50, 60',
      'Video Output': '2 × HDMI + 1 × VGA, HDMI up to 4K',
      'Network Interface': '4 × RJ45 Gigabit Ethernet',
      'Alarm Interface': '24-channel input / 8-channel output',
      'Power Supply': 'AC 100–240 V; redundant power supported'
    },
    features: [
      'Designed for large-scale, enterprise surveillance systems',
      'Supports up to 128 IP camera channels',
      'Provides independent HDMI1, HDMI2 and VGA video outputs',
      'Supports 4K HDMI display for high-resolution monitoring',
      'ANR technology improves recording reliability during network interruptions',
      'Supports N+1 hot-spare functionality for enhanced system reliability',
      'HDD hot-swap allows storage maintenance without major system interruption',
      'Advanced RAID configurations provide flexible and reliable data protection',
      'Two miniSAS interfaces support storage expansion',
      'Supports cloud-based system upgrades for easier maintenance'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
