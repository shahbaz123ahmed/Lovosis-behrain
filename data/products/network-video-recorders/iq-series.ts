import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const iqSeries: Product[] = [
  {
    id: 'nvr508-e-r-iq-series',
    name: 'NVR508-E-R-IQ Series',
    slug: 'nvr508-e-r-iq-series',
    category: 'Network Video Recorders',
    subcategory: 'IQ Series',
    description: '8-HDD Intelligent Network Video Recorder',
    imageUrl: '/networkvideo/iq1.png',
    specifications: {
      'IP Video Input': '32 / 64 channels',
      'Recording Resolution': 'Up to 32 MP',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Incoming Bandwidth': 'Up to 384 Mbps (32-ch variant; Smart Off)',
      'Storage': '8 × SATA HDD interfaces',
      'RAID': 'RAID 0 / 1 / 5 / 6 / 10',
      'Video Output': '2 × HDMI + 2 × VGA',
      'Network Interface': '2 × RJ45 Gigabit Ethernet',
      'Power Supply': 'Redundant power supply optional',
      'Dimensions': '443 × 448 × 93 mm'
    },
    features: [
      'High-performance recording for large-scale surveillance systems',
      'Supports mainstream ONVIF Profile S, G and T cameras',
      'Advanced AI-powered smart detection and search capabilities',
      'HDD hot-swap support for convenient storage maintenance',
      'ANR technology improves recording reliability during network interruptions',
      'Dual independent HDMI/VGA display outputs',
      'Supports up to 4K/60 Hz HDMI output',
      'N+1 Hot Spare provides additional recorder redundancy',
      'RAID storage schemes enhance data security and reliability',
      'Supports convenient cloud firmware upgrades'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr508-e-iq-series',
    name: 'NVR508-E-IQ Series',
    slug: 'nvr508-e-iq-series',
    category: 'Network Video Recorders',
    subcategory: 'IQ Series',
    description: '32/64-Channel 2U Network Video Recorder',
    imageUrl: '/networkvideo/iq2.png',
    specifications: {
      'Models': 'NVR508-32E-IQ / NVR508-64E-IQ',
      'IP Video Input': '32 / 64 channels',
      'Recording Resolution': 'Up to 32 MP',
      'Compression': 'Ultra 265 / H.265 / H.264',
      'Storage': '8 × SATA, up to 16 TB per HDD',
      'Network': '2 × RJ45 Gigabit Ethernet ports',
      'Video Output': '2 × HDMI + 2 × VGA, HDMI up to 4K/60 Hz',
      'Alarm I/O': '16-channel input / 10-channel output',
      'Power Supply': 'AC 100–240 V',
      'Dimensions': '442 × 432 × 86 mm (2U)'
    },
    features: [
      'Advanced AI-powered network video recording',
      'Supports Smart Intrusion Prevention (SIP)',
      'Supports Ultra Motion Detection (UMD)',
      'Vehicle, human body and intelligent VCA search',
      'ANR technology improves recording reliability during network interruptions',
      'N+1 hot spare support for enhanced system reliability',
      'Supports ONVIF Profile S, G, T and RTSP-compatible cameras',
      'Independent dual-screen output through HDMI and VGA',
      'Supports disk groups and redundant storage',
      'Cloud upgrade support for convenient system maintenance'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr504-b-p-iq-series',
    name: 'NVR504-B-P-IQ Series',
    slug: 'nvr504-b-p-iq-series',
    category: 'Network Video Recorders',
    subcategory: 'IQ Series',
    description: '4 HDDs 16/32-Channel Intelligent Network Video Recorder',
    imageUrl: '/networkvideo/iq3.png',
    specifications: {
      'Video Input': '16/32 channels',
      'Decoding Format': 'Ultra 265 / H.265 / H.264',
      'Maximum Recording Resolution': 'Up to 16 MP',
      'PoE': '16 × RJ45 PoE ports, up to 150 W total',
      'Storage': '4 × SATA interfaces, up to 16 TB per HDD',
      'RAID': 'RAID 1 / RAID 5',
      'Video Output': '1 × HDMI + 1 × VGA',
      'Network Interface': '1 × RJ45 10/100/1000 Mbps Ethernet',
      'Power Supply': 'AC 100–240 V',
      'Operating Temperature': '–10°C to +50°C'
    },
    features: [
      'Plug & Play support through 16 independent PoE ports',
      'Supports mainstream ONVIF Profile S, G and T cameras',
      'Provides independent HDMI and VGA video outputs',
      'ANR technology improves recording reliability during network interruptions',
      'Supports intelligent human and vehicle-related analytics',
      'Supports face snapshot and video metadata functions',
      'Provides general and system alert alarm functions',
      'Supports disk groups and redundant storage',
      'Cloud upgrade support simplifies system maintenance',
      'Designed for professional, high-capacity surveillance applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr504-b-iq-series',
    name: 'NVR504-B-IQ Series',
    slug: 'nvr504-b-iq-series',
    category: 'Network Video Recorders',
    subcategory: 'IQ Series',
    description: '4 HDD Network Video Recorder',
    imageUrl: '/networkvideo/iq4.png',
    specifications: {
      'Channels': '16 / 32 IP channels',
      'Recording Resolution': 'Up to 16 MP',
      'Compression': 'Ultra 265 / H.265 / H.264',
      'Video Output': '1 × HDMI, 1 × VGA',
      'HDMI Resolution': 'Up to 3840 × 2160 (4K)',
      'Storage': '4 × SATA HDD interfaces',
      'Audio Compression': 'G.711A / G.711U',
      'Network Protocol': 'ONVIF Profile S/G/T and RTSP',
      'Decoding': 'Up to 2 × 16 MP @ 30 fps in Smart Off mode',
      'Form Factor': '1U Network Video Recorder'
    },
    features: [
      'High-performance 16/32-channel network video recording',
      'Supports mainstream ONVIF Profile S, G, T and RTSP cameras',
      'Ultra 265 compression reduces bandwidth and storage requirements',
      'Supports ultra-high-resolution recording up to 16 MP',
      '4K HDMI output provides high-quality video display',
      'ANR technology enhances storage reliability during network interruptions',
      'Supports intelligent detection and smart analytics functions',
      'Independent HDMI and VGA outputs provide flexible display options',
      'Cloud upgrade support simplifies system maintenance',
      'Four-HDD architecture provides high-capacity surveillance storage'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr304-16b-p16-iq',
    name: 'NVR304-16B-P16-IQ',
    slug: 'nvr304-16b-p16-iq',
    category: 'Network Video Recorders',
    subcategory: 'IQ Series',
    description: '16-Channel 16-PoE Network Video Recorder',
    imageUrl: '/networkvideo/iq5.png',
    specifications: {
      'IP Video Input': '16 channels',
      'Recording Resolution': 'Up to 12 MP',
      'Decoding Format': 'Ultra 265 / H.265 / H.264',
      'Incoming / Outgoing Bandwidth': '160 Mbps / 128 Mbps',
      'Video Outputs': '1 × HDMI, 1 × VGA',
      'Storage': '4 × SATA, up to 24 TB per HDD',
      'PoE': '16 × RJ45 ports, max. 150 W total',
      'Network Interface': '1 × RJ45 10/100/1000 Mbps',
      'Power Supply': 'AC 100–240 V',
      'Operating Temperature': '–10°C to +55°C'
    },
    features: [
      'Plug & Play support through 16 independent PoE ports',
      'Supports simultaneous HDMI and VGA video output',
      'ANR technology improves recording reliability during network disconnection',
      'Supports ONVIF-compatible and RTSP network cameras',
      'Supports Face Detection, SIP and Ultra Motion Detection smart functions',
      'AcuSearch and AcuTrack enable faster intelligent video searches',
      'Supports vehicle, human body and non-motor vehicle search',
      'Supports up to 16-channel synchronous local playback',
      'Cloud upgrade support simplifies system maintenance',
      'Supports IEEE 802.3af/at PoE with up to 150 W total PoE power'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
