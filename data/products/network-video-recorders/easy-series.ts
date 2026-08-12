import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const easySeries: Product[] = [
  {
    id: 'nvr301-b-lp-iq-series',
    name: 'NVR301-B-LP-IQ Series',
    slug: 'nvr301-b-lp-iq-series',
    category: 'Network Video Recorders',
    subcategory: 'Easy Series',
    description: 'Network Video Recorder',
    imageUrl: '/networkvideo/nwvideo.png',
    specifications: {
      'Video Input': '4 / 8 / 16 IP channels',
      'Compression': 'Ultra 265 / H.265 / H.264',
      'Recording Resolution': 'Up to 12 MP',
      'Incoming / Outgoing Bandwidth': '80 Mbps / 80 Mbps',
      'PoE Ports': '4 ports (4-ch model) / 8 ports (8 & 16-ch models)',
      'Video Output': 'HDMI up to 4K + VGA up to 1080p',
      'Audio': '1-ch RCA input & 1-ch RCA output',
      'Storage': '1 SATA interface, up to 10 TB HDD',
      'Network': '1 × RJ45 10/100 Mbps Ethernet',
      'USB': '1 × USB 2.0 + 1 × USB 3.0'
    },
    features: [
      'Plug & Play PoE connectivity for easy IP camera installation',
      'Supports simultaneous HDMI and VGA video output',
      'ANR technology improves recording reliability during network interruptions',
      'Intelligent Smart Intrusion Prevention (SIP)',
      'Supports Ultra Motion Detection (UMD)',
      'Supports face, human body and vehicle detection',
      'Intelligent vehicle and human-body search capabilities',
      'Supports up to 16-channel concurrent playback',
      'Cloud upgrade support for easier system maintenance',
      'Supports up to 128 remote users for network access'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr301-04b-p4-iq',
    name: 'NVR301-04B-P4-IQ',
    slug: 'nvr301-04b-p4-iq',
    category: 'Network Video Recorders',
    subcategory: 'Easy Series',
    description: '4-Channel 4-PoE 1U Network Video Recorder',
    imageUrl: '/networkvideo/nw1.png',
    specifications: {
      'IP Video Input': '4 channels',
      'PoE Interfaces': '4 × RJ45 10/100 Mbps, IEEE 802.3af/at',
      'Recording Resolution': 'Up to 12 MP',
      'Decoding Format': 'Ultra 265 / H.265 / H.264',
      'Bandwidth': '80 Mbps incoming / 80 Mbps outgoing',
      'Video Output': '1 × HDMI (up to 4K) + 1 × VGA',
      'Storage': '1 × SATA, up to 24 TB HDD',
      'Network Interface': '1 × RJ45 10/100 Mbps Ethernet',
      'Power Supply': 'DC 48 V / 1.35 A',
      'Operating Temperature': '-10°C to +55°C'
    },
    features: [
      'Plug & Play support through 4 independent PoE ports',
      'Supports Ultra 265 compression for efficient video storage',
      'Records IP camera video at resolutions up to 12 MP',
      'Supports HDMI and VGA simultaneous display output',
      'ANR technology improves recording reliability during network interruptions',
      'Supports intelligent Face Detection and vehicle-related analytics',
      'Smart Intrusion Prevention (SIP) support',
      'Ultra Motion Detection (UMD) support',
      'AcuSearch and AcuTrack for efficient intelligent video searches',
      'Supports convenient cloud firmware upgrades'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr301-b-iq-series',
    name: 'NVR301-B-IQ Series',
    slug: 'nvr301-b-iq-series',
    category: 'Network Video Recorders',
    subcategory: 'Easy Series',
    description: 'Network Video Recorder',
    imageUrl: '/networkvideo/nw2.png',
    specifications: {
      'Video Input': '4 / 8 / 16 channels, depending on model',
      'Compression': 'Ultra 265 / H.265 / H.264',
      'Recording Resolution': 'Up to 12 MP',
      'Network Bandwidth': '80 Mbps incoming / 80 Mbps outgoing',
      'Video Output': 'HDMI up to 4K + VGA up to 1080p',
      'Storage': '1 × SATA, up to 10 TB HDD',
      'Network Interface': '1 × RJ45 10/100 Mbps Ethernet',
      'USB Interface': '1 × USB 2.0 + 1 × USB 3.0',
      'Power Supply': 'DC 12 V / 2 A',
      'Operating Temperature': '−10°C to +55°C'
    },
    features: [
      'Ultra 265 compression reduces bandwidth and storage requirements',
      'Supports high-resolution recording up to 12 megapixels',
      'ANR technology improves recording reliability during network interruptions',
      'Supports intelligent functions including SIP and Ultra Motion Detection',
      'Provides smart searches for human bodies, motor vehicles and non-motor vehicles',
      'Supports image-based search for faster event retrieval',
      'HDMI and VGA outputs can operate simultaneously',
      'Supports up to 16-channel concurrent playback',
      'Cloud upgrade support simplifies system maintenance',
      'Compatible with mainstream ONVIF-conformant IP cameras'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr301-04s3-p4',
    name: 'NVR301-04S3-P4',
    slug: 'nvr301-04s3-p4',
    category: 'Network Video Recorders',
    subcategory: 'Easy Series',
    description: '4-Channel 4 PoE Network Video Recorder',
    imageUrl: '/networkvideo/nw2.png',
    specifications: {
      'IP Video Input': '4 channels',
      'Decoding': 'Ultra 265 / H.265 / H.264',
      'Incoming / Outgoing Bandwidth': '64 Mbps / 48 Mbps',
      'HDMI Output': 'Up to 4K (3840 × 2160) @ 30 Hz',
      'PoE': '4 × RJ45, IEEE 802.3af/at, max. 54 W total',
      'Storage': '1 × SATA, up to 10 TB HDD',
      'Network Interface': '1 × RJ45 10/100 Mbps Ethernet',
      'USB': '2 × USB 2.0',
      'Power Supply': 'DC 48 V / 1.35 A',
      'Operating Temperature': '-10°C to +55°C'
    },
    features: [
      'Plug & Play connectivity through 4 built-in PoE ports',
      'Supports simultaneous HDMI and VGA video output',
      'Advanced Ultra 265 compression reduces storage requirements',
      'Supports Face Detection, SIP and Ultra Motion Detection from compatible IP cameras',
      'Supports behavior-based VCA search',
      'Multiple recording resolutions from 8 MP down to CIF',
      'Supports motion, tampering and human-body detection alarms',
      'Remote access for up to 128 users',
      'Supports cloud firmware upgrades',
      'Compact 1U design suitable for professional surveillance installations'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nvr301-ls3-p-series',
    name: 'NVR301-LS3-P Series',
    slug: 'nvr301-ls3-p-series',
    category: 'Network Video Recorders',
    subcategory: 'Easy Series',
    description: 'PoE Network Video Recorder',
    imageUrl: '/networkvideo/nwvideo.png',
    specifications: {
      'IP Video Input': '4 / 8 / 16 channels',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Incoming Bandwidth': '64 Mbps',
      'Outgoing Bandwidth': '48 Mbps',
      'HDMI Output': 'Up to 4K (3840 × 2160) @ 30 Hz',
      'VGA Output': 'Up to 1920 × 1080 @ 60 Hz',
      'Audio Output': '1-channel RCA',
      'Storage': '1 × SATA HDD',
      'Network Protocols': 'TCP/IP, P2P, UPnP, NTP, DHCP, HTTP, HTTPS, RTSP',
      'PoE': '4 / 8 independent PoE ports depending on model'
    },
    features: [
      'Plug & Play PoE simplifies IP camera installation',
      'Supports simultaneous HDMI and VGA video output',
      'Ultra 265 compression helps reduce bandwidth and storage requirements',
      'Supports mainstream ONVIF-compatible network cameras',
      'Provides high-resolution 4K recording and playback',
      'Supports remote access for network-based surveillance management',
      'Offers up to 128 remote user connections',
      'Supports multiple network protocols including TCP/IP, HTTP, HTTPS and RTSP',
      'Supports cloud-based firmware upgrades',
      'Compact 1-HDD design makes it suitable for small and medium surveillance systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
