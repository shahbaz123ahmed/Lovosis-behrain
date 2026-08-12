import { Product } from '@/types';
import {
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr,
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera,
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const primeSeries: Product[] = [
  {
    id: 'nvr501-04b-p4-a',
    name: 'NVR501-04B-P4-A Series',
    slug: 'nvr501-04b-p4-a',
    category: 'Network Video Recorders',
    subcategory: 'Prime Series',
    description: '4-Channel 4 PoE 1U Network Video Recorder',
    imageUrl: '/networkvideo/nvr.png',
    specifications: {
      'Video Input': '4-channel IP',
      'Decoding Format': 'Ultra 265 / H.265 / H.264',
      'Recording Resolution': 'Up to 16 MP',
      'Network Bandwidth': '80 Mbps incoming / 64 Mbps outgoing',
      'PoE': '4 × RJ45, IEEE 802.3af/at, max. 50 W total',
      'Storage': '1 × SATA, up to 24 TB HDD',
      'Video Output': 'HDMI up to 4K + VGA up to 1080p',
      'Power Supply': 'DC 48 V / 1.35 A',
      'Operating Temperature': '-10°C to 55°C',
      'Dimensions': '260 × 222 × 47 mm'
    },
    features: [
      'Plug & Play support through 4 independent PoE ports',
      'Ultra 265 compression helps reduce storage and bandwidth usage',
      'Supports simultaneous HDMI and VGA video output',
      'Records IP camera video at resolutions up to 16 MP',
      'ANR technology improves recording reliability during network interruptions',
      'Supports smart IPC functions including Face Detection, SIP and UMD',
      'VCA search supports vehicle, human body and general searches',
      'Supports motion detection, tampering and other alarm functions',
      'Cloud upgrade support for convenient system maintenance',
      'Supports remote access with up to 128 remote users'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr501-b-p-series',
    name: 'NVR501-B-P Series',
    slug: 'nvr501-b-p-series',
    category: 'Network Video Recorders',
    subcategory: 'Prime Series',
    description: 'Network Video Recorder',
    imageUrl: '/networkvideo/nvr.png',
    specifications: {
      'Models': 'NVR501-04B-P4 / NVR501-08B-P8',
      'IP Video Input': '4 / 8 channels',
      'PoE Interfaces': '4 / 8 independent ports',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Recording Resolution': 'Up to 16 MP',
      'Incoming Bandwidth': '80 Mbps',
      'Outgoing Bandwidth': '64 Mbps',
      'Storage': '1 × SATA HDD, up to 8 TB',
      'Video Output': 'HDMI + VGA simultaneous output',
      'Network Protocol': 'ONVIF Profiles S/G/T and RTSP'
    },
    features: [
      'Plug & Play support simplifies IP camera installation',
      'Built-in PoE ports provide network and power through a single cable',
      'Ultra 265 compression helps reduce bandwidth and storage requirements',
      'Supports 4-channel and 8-channel NVR configurations',
      'Supports high-resolution recording up to 16 megapixels',
      'Compatible with mainstream ONVIF-conformant IP cameras',
      'HDMI and VGA outputs can operate simultaneously',
      'ANR technology improves recording reliability during network interruptions',
      'Supports cloud-based system upgrades',
      'Designed as a compact 1U NVR for professional surveillance systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr501-b-lp-series',
    name: 'NVR501-B-LP Series',
    slug: 'nvr501-b-lp-series',
    category: 'Network Video Recorders',
    subcategory: 'Prime Series',
    description: 'Network Video Recorder',
    imageUrl: '/networkvideo/nwvideo.png',
    specifications: {
      'Models': 'NVR501-04B-LP4 / NVR501-08B-LP8',
      'IP Video Input': '4 / 8 channels',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Incoming Bandwidth': 'Up to 80 Mbps',
      'Recording Resolution': 'Up to 16 MP',
      'PoE Ports': '4 / 8 × RJ45, IEEE 802.3af/at',
      'Storage': '1 × SATA HDD interface',
      'Network Interface': '1 × RJ45 10/100 Mbps Ethernet',
      'USB': '1 × USB 2.0 + 1 × USB 3.0',
      'Operating Temperature': '−10°C to +55°C'
    },
    features: [
      'Plug-and-Play PoE connectivity for easy camera installation',
      'Supports 4-channel and 8-channel NVR configurations',
      'Ultra 265 compression helps reduce bandwidth and storage usage',
      'High-resolution recording up to 16 megapixels',
      'Compatible with mainstream ONVIF-conformant IP cameras',
      'ANR technology improves recording reliability during network disconnection',
      'HDMI and VGA can output video simultaneously',
      'Supports cloud-based firmware upgrades',
      'Supports G.711A and G.711U audio compression',
      'Compact 1U design suitable for professional surveillance systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr501-b-series',
    name: 'NVR501-B Series',
    slug: 'nvr501-b-series',
    category: 'Network Video Recorders',
    subcategory: 'Prime Series',
    description: 'Network Video Recorder',
    imageUrl: '/networkvideo/nw1.png',
    specifications: {
      'Models': 'NVR501-04B / NVR501-08B / NVR501-16B',
      'IP Video Input': '4 / 8 / 16 channels',
      'Incoming Bandwidth': '80 Mbps',
      'Outgoing Bandwidth': '64 Mbps',
      'Recording Resolution': 'Up to 16 MP',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Video Output': 'HDMI up to 4K + VGA up to 1080p',
      'Audio': '1-ch RCA input, 1-ch RCA output & two-way audio',
      'Storage': '1 SATA HDD, up to 8 TB',
      'Remote Users': 'Up to 128 users'
    },
    features: [
      'High-resolution network video recording up to 16 MP',
      'Available in 4, 8 and 16-channel configurations',
      'Ultra 265 compression helps reduce bandwidth and storage requirements',
      'Supports third-party IP cameras through ONVIF compatibility',
      'HDMI output supports up to 4K (3840 × 2160) display resolution',
      'Simultaneous HDMI and VGA output enables flexible monitoring',
      'ANR automatically enhances storage reliability when network connectivity is interrupted',
      'Supports synchronous playback for multiple camera channels',
      'Provides two-way audio through RCA input/output',
      'Supports remote access and multiple network protocols for flexible surveillance management'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr501-b-lp-iq-series',
    name: 'NVR501-B-LP-IQ Series',
    slug: 'nvr501-b-lp-iq-series',
    category: 'Network Video Recorders',
    subcategory: 'Prime Series',
    description: '1 HDD 4-Channel PoE Network Video Recorder',
    imageUrl: '/networkvideo/nwvideo.png',
    specifications: {
      'Device Type': 'Network Video Recorder (NVR)',
      'IP Channels': '4 channels',
      'PoE Ports': '4 independent PoE interfaces',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Recording Resolution': 'Up to 16 MP',
      'Incoming Bandwidth': 'Up to 80 Mbps',
      'Video Output': 'HDMI and VGA',
      'Storage': '1 × SATA HDD interface',
      'Network Compatibility': 'ONVIF / RTSP',
      'Form Factor': 'Compact 1U chassis'
    },
    features: [
      'Plug-and-Play PoE connectivity simplifies camera installation',
      'Ultra 265 compression helps reduce bandwidth and storage requirements',
      'Supports high-resolution IP camera recording',
      'Intelligent detection and analytics capabilities for smarter surveillance',
      'Supports mainstream cameras compliant with ONVIF protocols',
      'HDMI and VGA outputs can operate simultaneously',
      'ANR technology improves recording reliability during network interruptions',
      'Supports remote network access and management',
      'Cloud upgrade support simplifies system maintenance',
      'Compact 1U design makes it suitable for small and medium surveillance systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
