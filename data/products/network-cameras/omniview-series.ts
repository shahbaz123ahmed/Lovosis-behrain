import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const omniviewSeries: Product[] = [
  {
    id: 'ipc3608sb-adf16km-i0',
    name: 'IPC3608SB-ADF16KM-I0',
    slug: 'ipc3608sb-adf16km-i0',
    category: 'Network Cameras',
    subcategory: 'OmniView Series',
    description: '8MP OmniView Fixed IR Turret Network Camera',
    imageUrl: '/Owlview_Series/omni1.png',
    specifications: {
      'Sensor': '1/2.7-inch CMOS',
      'Maximum Resolution': '3840 × 2160 (8 MP)',
      'Lens': '1.68 mm fixed lens',
      'Minimum Illumination': '0.01 Lux; 0 Lux with IR',
      'Frame Rate': '8 MP at up to 30/25 fps',
      'Horizontal Viewing Angle': '180°',
      'IR Distance': 'Up to 20 m',
      'WDR': '120 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'Delivers 8 MP (3840 × 2160) video at up to 30/25 fps',
      'OmniView wide-angle technology provides a 180° horizontal field of view',
      'Adjustable dewarping levels from 1 to 9 improve panoramic image presentation',
      'Smart Intrusion Prevention supports cross-line and intrusion detection',
      'Supports enter-area and leave-area intelligent detection',
      'Target classification focuses on humans, vehicles, and non-motor vehicles',
      'Intelligent filtering reduces false alarms caused by leaves, birds, and lighting',
      '120 dB True WDR provides clear images in strong-light environments',
      'Built-in microphone enables synchronized audio recording',
      'Supports MicroSD cards up to 512 GB for local storage'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc2108sb-adf16km-i0',
    name: 'IPC2108SB-ADF16KM-I0',
    slug: 'ipc2108sb-adf16km-i0',
    category: 'Network Cameras',
    subcategory: 'OmniView Series',
    description: '8MP OmniView Fixed IR Bullet Network Camera',
    imageUrl: '/Owlview_Series/omni2.png',
    specifications: {
      'Sensor': '1/2.7-inch CMOS',
      'Maximum Resolution': '3840 × 2160 (8 MP)',
      'Frame Rate': 'Up to 30/25 fps at 8 MP',
      'Minimum Illumination': '0.01 Lux; 0 Lux with IR',
      'Horizontal Viewing Angle': '180°',
      'IR Distance': 'Up to 20 m',
      'WDR': '120 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Power & Protection': 'DC 12 V, PoE (IEEE 802.3af), IP67'
    },
    features: [
      'Delivers 8 MP (3840 × 2160) video at up to 30/25 fps',
      'OmniView wide-angle technology provides 180° horizontal coverage',
      'Adjustable dewarping improves panoramic image viewing',
      'Smart Intrusion Prevention supports cross-line and intrusion detection',
      'Supports enter-area and leave-area detection',
      'Target classification focuses on humans, vehicles, and non-motor vehicles',
      'Intelligent filtering reduces false alarms from leaves, birds, and lights',
      '120 dB True WDR provides clear images in strong-light scenes',
      'Built-in microphone enables synchronized audio capture',
      'Supports MicroSD storage up to 512 GB'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc815sb-adf14k-i0',
    name: 'IPC815SB-ADF14K-I0',
    slug: 'ipc815sb-adf14k-i0',
    category: 'Network Cameras',
    subcategory: 'OmniView Series',
    description: '5MP Fixed IR Fisheye Network Camera',
    imageUrl: '/Owlview_Series/omni3.png',
    specifications: {
      'Sensor': '1/2.8-inch CMOS',
      'Maximum Resolution': '2592 × 1944 (5 MP)',
      'Lens': '1.4 mm fixed, F2.0',
      'Field of View': '180° H / 180° V / 180° D',
      'Minimum Illumination': '0.01 Lux; 0 Lux with IR',
      'IR Distance': 'Up to 10 m',
      'WDR': '120 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection & Power': 'IP66, IK10, PoE supported'
    },
    features: [
      'Delivers 5 MP (2592 × 1944) video at up to 30/25 fps',
      'Fisheye lens provides an ultra-wide 180° panoramic field of view',
      '120 dB True WDR delivers clear images in strong-light scenes',
      'Smart IR provides effective nighttime monitoring up to 10 m',
      'Built-in dual microphones provide enhanced sound capture',
      'Supports Ultra 265, H.265, H.264, and MJPEG compression',
      'Supports one alarm input and one alarm output',
      'Provides one audio input and one audio output',
      'Supports MicroSD cards with capacities up to 512 GB',
      'IK10 vandal resistance and IP66 protection enhance installation durability'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc3k28se-adf28kmc-dl-i0',
    name: 'IPC3K28SE-ADF28KMC-DL-I0',
    slug: 'ipc3k28se-adf28kmc-dl-i0',
    category: 'Network Cameras',
    subcategory: 'OmniView Series',
    description: '8MP Double-Light Alarm Binocular Eyeball Network Camera',
    imageUrl: '/Owlview_Series/omni4.png',
    specifications: {
      'Sensor': '1/2.5-inch CMOS',
      'Maximum Resolution': '4096 × 1860 (8 MP)',
      'Frame Rate': 'Up to 20 fps at 8 MP',
      'Lens': '2.8 mm fixed lens',
      'Minimum Illumination': '0.002 Lux (F1.0, AGC ON)',
      'Field of View': '180° horizontal',
      'WDR': '130 dB True WDR',
      'Audio/Alarm I/O': '1/1 audio, 1/1 alarm',
      'Storage': 'MicroSD card up to 512 GB',
      'Adjustment': 'Pan 0°–360°, Tilt 0°–75°, Rotate 0°–360°'
    },
    features: [
      'Delivers 8 MP (4096 × 1860) video at up to 20 fps',
      'Dual-lens splicing provides an ultra-wide 180° horizontal view',
      'ColorHunter technology enables 24-hour full-color surveillance',
      'Smart Intrusion Prevention reduces false alarms using target classification',
      'Accurately identifies humans, motor vehicles, and non-motor vehicles',
      'Supports intelligent people-flow counting and crowd-density monitoring',
      'Smart Intrusion Prevention supports color-based retrieval',
      'ASM (Auto Scene Match) optimizes performance for different scenes',
      'Red and blue warning lights provide active visual deterrence',
      'Built-in dual microphones and speaker support enhanced audio interaction'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc816sb-adf16kmc-i1',
    name: 'IPC816SB-ADF16KMC-I1',
    slug: 'ipc816sb-adf16kmc-i1',
    category: 'Network Cameras',
    subcategory: 'OmniView Series',
    description: '6MP Fisheye Dome Network Camera',
    imageUrl: '/Owlview_Series/omni5.png',
    specifications: {
      'Sensor': '1/2.5-inch CMOS',
      'Maximum Resolution': '2560 × 2560 (6 MP)',
      'Minimum Illumination': '0.005 Lux; 0 Lux with IR',
      'Day/Night': 'IR-cut filter with auto switch (ICR)',
      'WDR': '120 dB',
      'IR Distance': 'Up to 15 m',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Audio': 'Built-in microphone and speaker',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'Delivers detailed 6 MP panoramic video',
      'Provides complete 360° panoramic coverage with an ultra-wide-angle fisheye lens',
      'Wise-ISP optimizes color, image detail, and motion-smear performance in low-light scenes',
      'Smart intrusion prevention supports cross-line and intrusion detection',
      'Target classification distinguishes humans, vehicles, and non-motor vehicles to reduce false alarms',
      'Supports Ultra Motion Detection for intelligent surveillance',
      'Heatmap functionality provides real-time visualization of moving-object activity',
      'Supports intelligent people-flow counting and crowd-density monitoring',
      'Multiple dewarping/decoding modes provide interactive dynamic viewing',
      'Built-in microphone and speaker enable two-way audio communication'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
