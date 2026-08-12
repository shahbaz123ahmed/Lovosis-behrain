import { Product } from '@/types';
import {
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr,
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera,
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const xvr: Product[] = [
  {
    id: 'xvr301-04q4',
    name: 'XVR301-04Q4',
    slug: 'xvr301-04q4',
    category: 'Digital Video Recorders',
    subcategory: 'XVR',
    description: '4-Channel 1 HDD Digital Video Recorder',
    imageUrl: '/networkvideo/iq5.png',
    specifications: {
      'Analog Video Input': '4 channels',
      'IP Video Input': '2 channels, expandable up to 6',
      'Encoding': 'Up to 8MP Lite@8 fps',
      'Video Compression': 'H.265 / H.264',
      'Storage': '1 × SATA HDD interface',
      'Smart Detection': 'Up to 4-ch UMD',
      'Intrusion Prevention': 'Up to 2 channels',
      'Video Output': 'HDMI and VGA',
      'Audio': 'Two-way audio support',
      'Camera Compatibility': 'TVI / AHD / CVI / CVBS / IP'
    },
    features: [
      'Supports TVI, AHD, CVI, CVBS, and IP cameras',
      'Intelligent Ultra Motion Detection helps filter false alarms',
      'Smart Intrusion Prevention enhances perimeter security',
      'Supports human and vehicle target detection',
      'High-efficiency video encoding reduces storage requirements',
      'Supports audio and video transmission over coaxial cable',
      'Two-way audio enables real-time voice communication',
      'HDMI and VGA outputs provide flexible display connectivity',
      'Hybrid analog and IP camera support allows easy system expansion',
      'Compact 1 HDD design is suitable for small-to-medium surveillance systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'xvr302-16q4',
    name: 'XVR302-16Q4',
    slug: 'xvr302-16q4',
    category: 'Digital Video Recorders',
    subcategory: 'XVR',
    description: '2 HDDs 16-Channel 1U Digital Video Recorder',
    imageUrl: '/networkvideo/nw1.png',
    specifications: {
      'Analog Video Input': '16-ch BNC',
      'IP Video Input': '8-ch, expandable up to 24-ch',
      'Video Compression': 'H.265 / H.264',
      'Camera Compatibility': 'TVI / AHD / CVI / CVBS / IP',
      'Maximum Analog Input': 'Up to 8 MP',
      'Video Outputs': '1 × HDMI, 1 × VGA, 1 × CVBS',
      'Maximum HDMI Resolution': '4K (3840 × 2160)',
      'Storage': '2 × SATA interfaces',
      'Motion Detection': 'Up to 16 channels',
      'Smart Intrusion Prevention': 'Up to 4 channels'
    },
    features: [
      'Hybrid DVR supporting both analog and IP surveillance cameras',
      'Supports multiple analog formats including TVI, AHD, CVI and CVBS',
      'H.265 compression helps reduce bandwidth and storage requirements',
      'Supports audio transmission over coaxial cable with compatible TVI cameras',
      'HDMI and VGA simultaneous video output',
      'HDMI output supports resolutions up to 4K Ultra HD',
      'Supports long-distance video transmission over coaxial cable',
      'Ultra Motion Detection provides more accurate event detection',
      'Smart Intrusion Prevention enhances intelligent perimeter security',
      'Supports two-way audio with specified compatible analog cameras'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'xvr301-16q3',
    name: 'XVR301-16Q3',
    slug: 'xvr301-16q3',
    category: 'Digital Video Recorders',
    subcategory: 'XVR',
    description: '1 HDD 16-Channel 1U Digital Video Recorder',
    imageUrl: '/XVR (Digital Video Recorder)/xvr3.png',
    specifications: {
      'Analog Video Input': '16-channel BNC',
      'IP Video Input': 'Supports up to 8 IP camera inputs',
      'Maximum Hybrid Input': 'Up to 24 channels',
      'Camera Compatibility': 'TVI, AHD, CVI, CVBS and IP',
      'Video Compression': 'Ultra 265, H.265 and H.264',
      'Video Output': 'HDMI output supports up to 4K (3840 × 2160)',
      'Storage': '1 SATA interface supporting up to 16 TB HDD',
      'Playback': '16-channel local simultaneous playback'
    },
    features: [
      'Adaptive access for TVI, AHD, CVI, CVBS and IP cameras',
      'Supports audio transmission over coaxial cable',
      'Controls dual-light functionality of compatible UNV analog cameras',
      'Ultra Motion Detection (UMD) for intelligent event detection',
      'Supports intrusion, cross-line, enter-area and leave-area detection',
      'Face detection and intelligent VCA search support',
      'Long-distance video transmission over coaxial cable',
      'Supports mainstream ONVIF and RTSP IP cameras',
      'HDMI and VGA simultaneous video output',
      'Supports up to 128 remote users'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'xvr301-04u3-p4',
    name: 'XVR301-04U3-P4',
    slug: 'xvr301-04u3-p4',
    category: 'Digital Video Recorders',
    subcategory: 'XVR',
    description: '4-Channel PoC Digital Video Recorder',
    imageUrl: '/XVR (Digital Video Recorder)/xvr4.png',
    specifications: {
      'Analog Video Input': '4-ch BNC',
      'IP Video Input': '4-ch, maximum 8-ch',
      'Recording': 'Up to 8MP@8fps, 5MP@12fps, 4MP@15fps, 1080P@25fps',
      'Video Outputs': '1 × HDMI, 1 × VGA, 1 × CVBS',
      'Storage': '1 × SATA, up to 16 TB',
      'Network': '1 × RJ45 10/100 Mbps Ethernet',
      'Interfaces': 'RS485, USB, 4 alarm inputs / 1 alarm output',
      'Power Supply': 'DC 48 V / 1.35 A',
      'Operating Temperature': '-10°C to 55°C',
      'Dimensions': '260 × 251 × 46 mm'
    },
    features: [
      'Supports adaptive access for multiple analog and IP camera formats',
      'PoC technology supplies video and power over a single coaxial cable',
      'Supports audio transmission over coaxial cable with compatible TVI cameras',
      'Ultra 265 compression helps reduce bandwidth and storage requirements',
      'Supports simultaneous HDMI and VGA video output',
      'Provides long-distance video transmission over coaxial cable',
      'Supports mainstream ONVIF and RTSP-compatible IP cameras',
      'Supports up to 4-channel Ultra Motion Detection (UMD)',
      'Supports up to 2-channel Smart Intrusion Prevention (SIP)',
      'Suitable for hybrid CCTV systems combining analog and IP cameras'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'xvr301-u3-series',
    name: 'XVR301-U3 Series',
    slug: 'xvr301-u3-series',
    category: 'Digital Video Recorders',
    subcategory: 'XVR',
    description: '1 HDD Digital Video Recorder',
    imageUrl: '/XVR (Digital Video Recorder)/xvr5.png',
    specifications: {
      'Models': 'XVR301-04U3 / XVR301-08U3',
      'Analog Input': '4-ch / 8-ch BNC',
      'Maximum IP Input': 'Up to 8-ch / 16-ch',
      'Recording Resolution': '8MP / 5MP / 4MP / 1080P / 720P / D1',
      'Video Output': 'HDMI up to 4K, VGA up to 1080p, 1-ch BNC',
      'Audio': 'BNC channel audio + 1-ch RCA input/output',
      'Storage': '1 × SATA, up to 16 TB HDD',
      'Network': 'RJ45 Ethernet interface',
      'Power Supply': 'DC 12 V / 2 A',
      'Operating Temperature': '–10°C to +55°C'
    },
    features: [
      'Adaptive access for multiple analog camera technologies',
      'Supports additional IP camera channels for hybrid surveillance systems',
      'Ultra 265 compression helps reduce bandwidth and storage requirements',
      'Supports audio transmission over coaxial cable with compatible UNV cameras',
      'Allows control of dual-light UNV analog cameras under TVI',
      'Provides long-distance video transmission over coaxial cable',
      'HDMI and VGA can provide simultaneous video output',
      'Supports local multi-channel live view and playback',
      'Provides alarm functions for disk, network, recording, and access abnormalities',
      'Supports mainstream third-party cameras using ONVIF and RTSP protocols'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
