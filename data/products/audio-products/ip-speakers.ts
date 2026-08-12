import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const ipSpeakers: Product[] = [
  {
    id: 'ips301015-s',
    name: 'IPS301015-S',
    slug: 'ips301015-s',
    category: 'Audio Products',
    subcategory: 'IP Speakers',
    description: 'Indoor 15W Ceiling IP Speaker',
    imageUrl: '/VMS/speaker1.png',
    specifications: {
      'Rated Power': '15 W',
      'Max. Acoustic Pressure': '100 dBSPL',
      'Frequency Response': '100 Hz–15 kHz',
      'Speaker Impedance': '8 Ω',
      'Microphone': '1 built-in mic, −37 dBV/Pa sensitivity',
      'Audio Compression': 'G.711U',
      'Network Interface': '1 × RJ45 10/100 Mbps Ethernet',
      'Power Supply': 'PoE (IEEE 802.3af) / DC 12 V, 1.4 A',
      'Operating Conditions': '−10°C to 50°C, ≤90% RH',
      'Dimensions': 'Φ200 × 95 mm; mounting hole Φ180 mm'
    },
    features: [
      'Built-in high-quality speaker delivers loud and clear audio',
      'Supports regular, live, and alarm broadcasting',
      'Integrates with Uniview NVR for video and audio linkage',
      'Supports two-way audio communication',
      'Built-in storage allows uploading custom audio files',
      'Supports MP3 and WAV audio file formats',
      'Stores up to 100 audio files, including system files',
      'Supports ONVIF, RTSP, RTP, and LAPI protocols',
      'Features two alarm input interfaces',
      'PoE support simplifies installation and cabling'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ips302015-s',
    name: 'IPS302015-S',
    slug: 'ips302015-s',
    category: 'Audio Products',
    subcategory: 'IP Speakers',
    description: 'Outdoor 15W IP Horn Speaker',
    imageUrl: '/VMS/speaker2.png',
    specifications: {
      'Rated Power': '15 W',
      'Max. Acoustic Pressure': '122 dB SPL',
      'Frequency Response': '300 Hz–12.5 kHz',
      'Impedance': '8 Ω',
      'Microphone': '1 built-in microphone',
      'Audio Compression': 'G.711U',
      'Storage': '64 MB, up to 100 audio files',
      'Network': '1 × RJ45 10/100 Mbps Ethernet',
      'Power Supply': 'PoE (IEEE 802.3af) / DC 12 V, 1.4 A',
      'Protection': 'IP66; operating temperature −30°C to +55°C'
    },
    features: [
      'High-quality horn speaker delivers loud and clear sound',
      'Long-range sound projection for outdoor environments',
      'Supports alarm broadcasting through Uniview NVR systems',
      'Supports video and audio linkage for security applications',
      'Built-in storage allows custom audio files to be uploaded',
      'Supports regular, live, and alarm broadcast modes',
      'Two-way audio enables real-time voice communication',
      'Supports MP3 and WAV audio file formats',
      'Supports ONVIF, RTSP, RTP, and LAPI protocols',
      'PoE support simplifies power and network installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ips302030-s',
    name: 'IPS302030-S',
    slug: 'ips302030-s',
    category: 'Audio Products',
    subcategory: 'IP Speakers',
    description: 'Outdoor 30W IP Horn Speaker',
    imageUrl: '/VMS/speaker3.png',
    specifications: {
      'Rated Power': '30 W',
      'Max. Acoustic Pressure': '130 dBSPL',
      'Frequency Response': '300 Hz–12.5 kHz',
      'Impedance': '8 Ω',
      'Microphone': '1 built-in mic, −37 dBV/Pa sensitivity',
      'Audio Compression': 'G.711U',
      'Network Interface': '1 × RJ45 10/100 Mbps Ethernet',
      'Power Supply': 'PoE (IEEE 802.3at), DC 24 V/1.4 A or DC 12 V/2.5 A',
      'Operating Temperature': '−30°C to +55°C',
      'Protection': 'IP66; dimensions 282 × 205 × 285 mm'
    },
    features: [
      'High-quality horn speaker provides loud, clear and long-range sound',
      'Supports regular, live and alarm broadcasting',
      'Integrates with Uniview NVR for video and audio alarm linkage',
      'Built-in storage allows customized audio files to be uploaded',
      'Supports MP3 and WAV audio file formats',
      'Supports up to 100 audio files, including built-in system files',
      'Two-way audio enables real-time voice communication',
      'Supports ONVIF, RTSP, RTP and LAPI integration protocols',
      'Built-in microphone provides clear audio capture',
      'Rugged IP66 construction makes it suitable for outdoor installations'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
