import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const seekfree: Product[] = [
  {
    id: 'nvr502-16e-im-g',
    name: 'NVR502-16E-IM-G',
    slug: 'nvr502-16e-im-g',
    category: 'Network Video Recorders',
    subcategory: 'Seekfree',
    description: '2 HDDs 16-Channel Network Video Recorder',
    imageUrl: '/networkvideo/seek3.png',
    specifications: {
      'IP Video Input': '16 channels',
      'Recording Resolution': 'Up to 32 MP',
      'Incoming/Outgoing Bandwidth': '192 Mbps / 192 Mbps',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Storage': '2 × SATA, up to 24 TB per HDD',
      'Video Output': '1 × HDMI + 1 × VGA',
      'Network Interface': '2 × RJ45 10/100/1000 Mbps',
      'USB Interface': '2 × USB 2.0 + 1 × USB 3.0',
      'Power Supply': 'DC 12 V / 3 A',
      'Operating Temperature': '−10°C to +55°C'
    },
    features: [
      'Supports simultaneous HDMI and VGA video output',
      'ANR technology improves recording reliability during network disconnection',
      'SeekFree supports up to 16 channels with third-party IPCs',
      'Supports Smart Intrusion Prevention',
      'Supports Video Metadata analytics',
      'Supports License Plate Recognition (LPR)',
      'Supports Face Detection and NVR-based face detection',
      'Supports external USB keyboards for convenient operation',
      'Dual-network operation supports multi-access, load balancing and network fault tolerance',
      'Supports convenient cloud-based firmware upgrades'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr301-08e-p8-iq',
    name: 'NVR301-08E-P8-IQ',
    slug: 'nvr301-08e-p8-iq',
    category: 'Network Video Recorders',
    subcategory: 'Seekfree',
    description: '8-Channel 8-PoE 1U Network Video Recorder',
    imageUrl: '/networkvideo/seek4.png',
    specifications: {
      'IP Channels': '8 channels',
      'PoE Ports': '8 × RJ45 independent PoE interfaces',
      'Recording Resolution': 'Up to 12 MP',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Decoding': 'Up to 1 × 12MP@30fps or 8 × 1080p@30fps (Smart Off)',
      'Bandwidth': '80 Mbps incoming / 80 Mbps outgoing',
      'Video Output': '1 × HDMI + 1 × VGA',
      'HDMI Resolution': 'Up to 3840 × 2160 (4K)',
      'HDD Support': '1 × SATA HDD',
      'PoE Standard': 'IEEE 802.3af / IEEE 802.3at'
    },
    features: [
      'Plug & Play support through 8 independent PoE ports',
      'Supports simultaneous HDMI and VGA video output',
      'Records network cameras at resolutions up to 12 MP',
      'SeekFree supports up to 8 channels with compatible UNV Face/SIP/UMD cameras',
      'ANR technology improves recording reliability during network disconnection',
      'Supports Ultra 265 compression for efficient storage utilization',
      'Provides up to 4K ultra-high-definition HDMI display output',
      'Supports multiple network protocols for flexible system integration',
      'Supports cloud-based firmware upgrades',
      'Compact 1U design is suitable for professional surveillance installations'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr301-08e-iq',
    name: 'NVR301-08E-IQ',
    slug: 'nvr301-08e-iq',
    category: 'Network Video Recorders',
    subcategory: 'Seekfree',
    description: '1 HDD 8-Channel 1U Network Video Recorder',
    imageUrl: '/networkvideo/nw2.png',
    specifications: {
      'IP Video Input': '8 channels',
      'Recording Resolution': 'Up to 12 MP',
      'Incoming/Outgoing Bandwidth': '80 Mbps / 80 Mbps',
      'Video Output': '1 × HDMI, 1 × VGA',
      'HDMI Resolution': 'Up to 3840 × 2160 @ 30 Hz',
      'Storage': '1 × SATA, up to 24 TB HDD',
      'Network Interface': '1 × RJ45 10/100 Mbps',
      'USB Interface': '2 × USB 2.0',
      'Power Supply': 'DC 12 V / 2 A',
      'Operating Temperature': '−10°C to +50°C'
    },
    features: [
      'Supports up to 8 IP camera channels',
      'Ultra H.265 compression reduces bandwidth and storage requirements',
      'Supports simultaneous HDMI and VGA video output',
      'Provides ultra-high-definition 4K HDMI display',
      'Supports recording resolutions up to 12 megapixels',
      'SeekFree enables efficient video search with compatible UNV cameras',
      'AcuSearch and AcuTrack provide intelligent target search and tracking',
      'ANR technology improves recording reliability during network disconnection',
      'Supports smart functions including face, vehicle, SIP and UMD detection',
      'Cloud upgrade support simplifies system maintenance and updates'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr824-128-r-ix2-8g',
    name: 'NVR824-128-R-IX2-8G',
    slug: 'nvr824-128-r-ix2-8g',
    category: 'Network Video Recorders',
    subcategory: 'Seekfree',
    description: '128-Channel 4U Network Video Recorder',
    imageUrl: '/networkvideo/seek6.png',
    specifications: {
      'IP Video Input': '128 channels',
      'Incoming/Outgoing Bandwidth': '768 Mbps / 768 Mbps',
      'Recording Resolution': 'Up to 12 MP',
      'Video Outputs': '2 × HDMI, 1 × VGA',
      'Storage': '24 SATA interfaces, up to 24 TB per HDD',
      'Network Interface': '4 × RJ45 Gigabit Ethernet',
      'USB': '2 × USB 2.0 + 2 × USB 3.0',
      'Alarm I/O': '24-channel input / 8-channel output',
      'Power Supply': 'AC 100–240 V',
      'Dimensions': '482 × 559 × 175 mm (4U)'
    },
    features: [
      'Supports large-scale surveillance with up to 128 IP cameras',
      'Ultra 265 compression helps reduce bandwidth and storage requirements',
      'Supports HDD hot-swap for convenient storage maintenance',
      'Advanced RAID configurations provide enhanced data protection',
      'ANR technology improves recording reliability during network interruptions',
      'Supports N+1 hot spare for improved system reliability',
      'Provides two miniSAS interfaces for storage expansion',
      'Supports intelligent functions including face, vehicle and people detection',
      'Four Gigabit Ethernet interfaces provide high-speed network connectivity',
      'Supports cloud upgrade and optional redundant power supply'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
