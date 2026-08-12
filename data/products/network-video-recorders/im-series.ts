import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const imSeries: Product[] = [
  {
    id: 'nvr824-128-r-im2-8g',
    name: 'NVR824-128-R-IM2-8G',
    slug: 'nvr824-128-r-im2-8g',
    category: 'Network Video Recorders',
    subcategory: 'IM Series',
    description: '24 HDDs 128-Channel 4U Network Video Recorder',
    imageUrl: '/networkvideo/seek6.png',
    specifications: {
      'IP Video Input': '128 channels',
      'Recording Resolution': 'Up to 8 MP',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Video Outputs': '2 × HDMI, 1 × VGA',
      'Maximum HDMI Resolution': '4K (3840 × 2160)',
      'HDD Interface': '24 × SATA',
      'RAID Support': 'RAID 0 / 1 / 5 / 6 / 10 / 50 / 60',
      'External Storage': '2 × miniSAS interfaces',
      'Power Supply': 'AC 100–240 V; redundant PSU supported',
      'Form Factor': '4U rack-mount NVR'
    },
    features: [
      'Supports large-scale 128-channel surveillance systems',
      'Ultra 265 compression helps reduce storage and bandwidth requirements',
      'Provides independent HDMI1, HDMI2 and VGA outputs',
      'Supports HDD hot swapping for easier storage maintenance',
      'Advanced RAID configurations provide enhanced data protection',
      'Two miniSAS interfaces support storage expansion',
      'ANR technology improves recording reliability during network interruptions',
      'N+1 hot-spare functionality improves system availability',
      'Supports cloud-based system upgrades',
      'Provides 12 V power output for compatible external devices'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr816-64-r-im2-4g',
    name: 'NVR816-64-R-IM2-4G',
    slug: 'nvr816-64-r-im2-4g',
    category: 'Network Video Recorders',
    subcategory: 'IM Series',
    description: '64-Channel 3U Network Video Recorder',
    imageUrl: '/networkvideo/nvrpro4.png',
    specifications: {
      'IP Video Input': '64 channels',
      'Recording Resolution': 'Up to 12 MP',
      'Incoming/Outgoing Bandwidth': '768 Mbps / 768 Mbps',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'HDD Interface': '16 × SATA',
      'HDD Capacity': 'Up to 24 TB per HDD',
      'Network Interface': '4 × RJ45 Gigabit Ethernet',
      'Alarm I/O': '24-channel input / 8-channel output',
      'Power Supply': 'AC 100–240 V',
      'Dimensions': '482 × 559 × 131 mm (3U)'
    },
    features: [
      'Supports HDD hot-swap for easier storage maintenance',
      'ANR technology improves recording reliability during network disconnection',
      'Supports intelligent Video Metadata functions',
      'Provides independent HDMI1, HDMI2 and VGA video outputs',
      'Supports N+1 hot-spare functionality for enhanced system reliability',
      'Optional redundant power supply improves operational continuity',
      'Two miniSAS interfaces provide additional storage connectivity',
      'Supports disk groups and redundant storage configurations',
      'Cloud upgrade support simplifies system maintenance',
      'Supports up to 128 remote users for large surveillance deployments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr516-64e-r-im',
    name: 'NVR516-64E-R-IM',
    slug: 'nvr516-64e-r-im',
    category: 'Network Video Recorders',
    subcategory: 'IM Series',
    description: '64-Channel Network Video Recorder',
    imageUrl: '/networkvideo/im3.png',
    specifications: {
      'IP Video Input': '64 channels',
      'Recording Resolution': 'Up to 32 MP',
      'Incoming Bandwidth': '640 Mbps',
      'Outgoing Bandwidth': '640 Mbps',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Display Output': '2 × HDMI + 2 × VGA',
      'Storage': '16 × SATA, up to 24 TB per HDD',
      'Network Interface': '2 × RJ45 Gigabit Ethernet',
      'Power Supply': 'AC 100–240 V',
      'Operating Temperature': '−10°C to +55°C'
    },
    features: [
      'Supports up to 64 IP camera channels for large-scale surveillance',
      'Ultra 265 compression significantly improves storage and bandwidth efficiency',
      'Provides high-resolution recording up to 32 MP',
      'Dual HDMI and dual VGA outputs support flexible multi-monitor configurations',
      'Supports intelligent functions including face, vehicle, UMD and SIP detection',
      'ANR technology improves recording reliability during temporary network disconnection',
      'Supports N+1 hot-spare functionality for enhanced system reliability',
      'RAID storage options provide improved data protection and redundancy',
      'Hot-swappable HDD support simplifies storage maintenance',
      'Cloud upgrade support makes system maintenance and firmware management easier'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr502-16e-im-g',
    name: 'NVR502-16E-IM-G',
    slug: 'nvr502-16e-im-g',
    category: 'Network Video Recorders',
    subcategory: 'IM Series',
    description: '2 HDDs 16-Channel Network Video Recorder',
    imageUrl: '/networkvideo/seek3.png',
    specifications: {
      'IP Video Input': '16 channels',
      'Recording Resolution': 'Up to 32 MP',
      'Compression': 'Ultra 265 / H.265 / H.264',
      'Bandwidth': '192 Mbps incoming / 192 Mbps outgoing',
      'Video Output': '1 × HDMI + 1 × VGA',
      'Network Interface': '2 × RJ45 10/100/1000 Mbps',
      'Storage': '2 HDD interfaces, RAID 1 support',
      'USB': '2 × USB 2.0 + 1 × USB 3.0',
      'Power Supply': 'DC 12 V / 3 A',
      'Operating Temperature': '-10°C to +55°C'
    },
    features: [
      'Supports high-resolution recording up to 32 MP',
      'SeekFree intelligent search supports UNV SIP/UMD cameras and third-party IPCs',
      'ANR technology improves recording reliability during network disconnection',
      'Supports SIP (Smart Intrusion Prevention)',
      'Supports Video Metadata intelligent analysis',
      'Supports License Plate Recognition (LPR)',
      'Supports Face Detection and NVR-side face detection',
      'Dual Gigabit Ethernet interfaces provide reliable network connectivity',
      'Supports external USB keyboards for convenient operation',
      'Cloud upgrade support simplifies system maintenance and updates'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
