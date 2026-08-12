import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const proSeries: Product[] = [
  {
    id: 'nvr804-16-ix-g',
    name: 'NVR804-16-IX-G',
    slug: 'nvr804-16-ix-g',
    category: 'Network Video Recorders',
    subcategory: 'Pro Series',
    description: '4 HDD 16-Channel Network Video Recorder',
    imageUrl: '/networkvideo/nvr.png',
    specifications: {
      'IP Video Input': '16 channels',
      'Incoming Bandwidth': 'Up to 384 Mbps',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Recording Resolution': 'Up to 4K',
      'Decoding': 'Up to 6 × 4K@30 fps',
      'HDD Interface': '4 × SATA',
      'Maximum HDD Capacity': 'Up to 24 TB per HDD',
      'Video Output': '3 × HDMI + 1 × VGA',
      'Smart Analytics': 'SIP, UMD, Video Metadata, Behavior Analysis',
      'Network Reliability': 'ANR technology supported'
    },
    features: [
      'Supports up to 16 IP camera channels',
      'Ultra 265 compression reduces bandwidth and storage requirements',
      'Supports high-resolution recording up to 4K',
      'ANR technology enhances storage reliability during network disconnection',
      'SeekFree enables intelligent and efficient video searching',
      'Supports Smart Intrusion Prevention (SIP)',
      'Supports Ultra Motion Detection (UMD)',
      'Supports Video Metadata and Behavior Analysis',
      'Supports people counting, face detection and plate comparison',
      'Supports cloud upgrades and external USB keyboards'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr808-32-ix-g',
    name: 'NVR808-32-IX-G',
    slug: 'nvr808-32-ix-g',
    category: 'Network Video Recorders',
    subcategory: 'Pro Series',
    description: '8 HDD 32-Channel Network Video Recorder',
    imageUrl: '/networkvideo/nvr.png',
    specifications: {
      'IP Video Input': '32 channels',
      'Recording Resolution': 'Up to 8 MP / 4K',
      'Decoding Format': 'Ultra 265, H.265, H.264',
      'Network Bandwidth': '512 Mbps incoming / 512 Mbps outgoing',
      'Storage': '8 × SATA, up to 24 TB per HDD',
      'Video Output': '3 × HDMI, 1 × VGA',
      'Network Interface': '2 × RJ45 Gigabit Ethernet',
      'USB Interface': '2 × USB 2.0 + 2 × USB 3.0',
      'Power Supply': 'AC 220 V',
      'Operating Temperature': '-10°C to +55°C'
    },
    features: [
      'Supports high-performance 32-channel network video recording',
      'Ultra 265 compression reduces bandwidth and storage requirements',
      'Supports independent multi-screen output through HDMI and VGA',
      'ANR technology improves recording reliability during network interruptions',
      'SeekFree supports intelligent video retrieval across multiple channels',
      'Supports SIP, UMD, video metadata and behavior analysis',
      'Supports face detection and face snapshot management',
      'Supports plate comparison and people-counting applications',
      'RAID 0/1/5/6/10 support provides flexible and reliable storage management',
      'Supports cloud upgrades, external USB keyboards and ONVIF-compatible cameras'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr516-64',
    name: 'NVR516-64',
    slug: 'nvr516-64',
    category: 'Network Video Recorders',
    subcategory: 'Pro Series',
    description: '64-Channel 16 HDD Network Video Recorder',
    imageUrl: '/networkvideo/nvrpro1.png',
    specifications: {
      'IP Video Input': '64 channels',
      'Recording Resolution': 'Up to 12 MP',
      'Incoming Bandwidth': '384 Mbps',
      'Outgoing Bandwidth': '384 Mbps',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Storage': '16 × SATA HDD, up to 10 TB each',
      'Video Output': '2 × HDMI + VGA, HDMI up to 4K',
      'Audio': '1-channel BNC input & 1-channel BNC output',
      'Local Playback': 'Up to 16 channels simultaneously',
      'RAID Support': 'RAID 0 / 1 / 5 / 6 / 10 / 50 / 60'
    },
    features: [
      'Supports simultaneous management of up to 64 IP cameras',
      'Ultra 265 compression helps reduce bandwidth and storage requirements',
      'ANR technology improves recording reliability during network disconnection',
      'Supports third-party IP cameras through ONVIF compatibility',
      'Independent HDMI and VGA outputs provide flexible display options',
      'Supports up to 16-channel synchronous local playback',
      'Hot-swappable HDD design simplifies storage maintenance',
      'Multiple RAID configurations provide enhanced data protection',
      'Supports N+1 hot spare for improved system reliability',
      'Cloud upgrade support simplifies system maintenance and updates'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr816-64-r-im-4g',
    name: 'NVR816-64-R-IM-4G',
    slug: 'nvr816-64-r-im-4g',
    category: 'Network Video Recorders',
    subcategory: 'Pro Series',
    description: '64-Channel 16-HDD 3U Network Video Recorder',
    imageUrl: '/networkvideo/nvrpro4.png',
    specifications: {
      'IP Video Input': '64 channels',
      'Recording Resolution': 'Up to 12 MP',
      'Bandwidth': '512 Mbps incoming / 512 Mbps outgoing',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Storage': '16 × SATA interfaces, up to 16 TB per HDD',
      'RAID': 'RAID 0 / 1 / 5 / 6 / 10 / 50 / 60',
      'Video Output': '2 × HDMI up to 4K + VGA',
      'Network': '4 × RJ45 10/100/1000 Mbps',
      'Alarm I/O': '24-channel input / 8-channel output',
      'Dimensions': '482 × 533 × 131 mm (3U)'
    },
    features: [
      'Supports up to 64 IP cameras for large-scale surveillance',
      'AI-powered Smart Intrusion Prevention (SIP) capabilities',
      'Supports intelligent video metadata analysis',
      'Compatible with face, vehicle and temperature detection from supported IPCs',
      'Search-by-image functionality for efficient event investigation',
      'Supports vehicle picture libraries for intelligent vehicle management',
      '16-channel synchronous local playback',
      'Hot-swappable HDD design for easier storage maintenance',
      'Redundant storage and redundant power supply support',
      'Multiple alarm functions for network, disk, recording and system abnormalities'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr816-64',
    name: 'NVR816-64',
    slug: 'nvr816-64',
    category: 'Network Video Recorders',
    subcategory: 'Pro Series',
    description: '64-Channel Network Video Recorder',
    imageUrl: '/networkvideo/nvrpro4.png',
    specifications: {
      'IP Video Input': '64 channels',
      'Incoming/Outgoing Bandwidth': '512 Mbps / 512 Mbps',
      'Recording Resolution': 'Up to 12 MP',
      'Decoding': 'Ultra 265 / H.265 / H.264',
      'Video Output': '2 × HDMI + 1 × VGA',
      'Storage': '16 × SATA interfaces',
      'RAID': 'RAID 0/1/5/6/10/50/60',
      'Network': '4 × RJ45 Gigabit Ethernet',
      'Power Supply': '100–240 V AC',
      'Operating Temperature': '−10°C to +55°C'
    },
    features: [
      'Supports up to 64 IP camera channels',
      'Ultra 265 compression helps reduce bandwidth and storage requirements',
      'Provides HDMI1, HDMI2 and VGA independent video outputs',
      'Supports 4K (3840 × 2160) HDMI display output',
      'Records video at resolutions up to 12 MP',
      'Supports HDD hot-swap for easier storage maintenance',
      'Advanced RAID configurations provide improved data protection',
      'ANR technology improves recording reliability during network interruptions',
      'Supports N+1 hot spare for enhanced system reliability',
      'Supports cloud upgrades and mainstream ONVIF-compatible cameras'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
