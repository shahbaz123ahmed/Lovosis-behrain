import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const triGuardSeries: Product[] = [
  {
    id: 'ipc2124sb-adf28kmc-i1',
    name: 'IPC2124SB-ADF28KMC-I1',
    slug: 'ipc2124sb-adf28kmc-i1',
    category: 'Network Cameras',
    subcategory: 'Tri-Guard Series',
    description: '4MP WDR Dual-Light Alarm Bullet Network Camera',
    imageUrl: '/Owlview_Series/tri1.png',
    specifications: {
      'Sensor': '1/2.9-inch CMOS',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Lens': '2.8 mm fixed, F1.4',
      'Minimum Illumination': '0.002 Lux; 0 Lux with light',
      'Frame Rate': 'Up to 30/25 fps',
      'IR Distance': 'Up to 40 m',
      'WDR': '130 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection Rating': 'IP67'
    },
    features: [
      'Delivers 4 MP (2688 × 1520) video at up to 30/25 fps',
      'ColorHunter with Wise-ISP provides 24-hour full-color imaging',
      'Intelligent perimeter protection supports cross-line and intrusion detection',
      'Supports enter-area and leave-area detection',
      'Target classification identifies humans, vehicles, and non-motorized vehicles',
      'Intelligent filtering reduces false alarms from leaves, birds, and lighting',
      'Supports people-flow counting and crowd-density monitoring',
      '130 dB True WDR improves visibility in strong backlight scenes',
      'Supports 9:16 corridor mode for narrow surveillance areas',
      'Built-in microphone and speaker enable two-way audio functionality'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc3618sb-adf28kmc-i1',
    name: 'IPC3618SB-ADF28KMC-I1',
    slug: 'ipc3618sb-adf28kmc-i1',
    category: 'Network Cameras',
    subcategory: 'Tri-Guard Series',
    description: '8MP WDR Dual-Light Alarm Eyeball Network Camera',
    imageUrl: '/Owlview_Series/tri2.png',
    specifications: {
      'Sensor': '1/2.7-inch CMOS',
      'Maximum Resolution': '3840 × 2160 (8 MP)',
      'Lens': '2.8 mm fixed, F1.4',
      'Field of View': '98.7° H, 53.6° V, 113.4° D',
      'Minimum Illumination': '0.002 Lux; 0 Lux with light',
      'IR Distance': 'Up to 30 m',
      'WDR': '130 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection Rating': 'IP67'
    },
    features: [
      'Delivers 8 MP video at up to 30/25 fps',
      'ColorHunter with Wise-ISP provides 24-hour full-color imaging',
      'Supports intelligent cross-line and intrusion detection',
      'Supports enter-area and leave-area detection',
      'Target classification focuses on humans, vehicles, and non-motor vehicles',
      'Intelligent detection helps reduce false alarms from leaves, birds, and lighting',
      'Supports intelligent people-flow counting',
      'Supports crowd-density monitoring',
      '130 dB True WDR provides clear images in strong backlight scenes',
      'Supports 9:16 corridor mode and local MicroSD storage up to 512 GB'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc2128sb-adf28kmc-i1',
    name: 'IPC2128SB-ADF28KMC-I1',
    slug: 'ipc2128sb-adf28kmc-i1',
    category: 'Network Cameras',
    subcategory: 'Tri-Guard Series',
    description: '8MP WDR Dual-Light Alarm Bullet Network Camera',
    imageUrl: '/Owlview_Series/tri3.png',
    specifications: {
      'Sensor': '1/2.7-inch CMOS',
      'Maximum Resolution': '3840 × 2160 (8 MP)',
      'Lens': '2.8 mm fixed lens',
      'Minimum Illumination': '0.002 Lux (F1.4, AGC ON)',
      'Frame Rate': '8 MP at up to 30/25 fps',
      'IR Distance': 'Up to 40 m',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Day/Night': 'IR-cut filter with auto switch (ICR)',
      'Protection Rating': 'IP67'
    },
    features: [
      'Delivers 8 MP (3840 × 2160) video at up to 30/25 fps',
      'ColorHunter with Wise-ISP provides 24-hour full-color imaging',
      'Intelligent perimeter protection supports cross-line and intrusion detection',
      'Supports enter-area and leave-area detection',
      'Target classification focuses on humans, vehicles, and non-motorized vehicles',
      'Intelligent intrusion prevention significantly reduces false alarms',
      'Supports people-flow counting and crowd-density monitoring',
      '130 dB True WDR delivers clear images in strong backlight scenes',
      'Supports 9:16 corridor mode for narrow surveillance areas',
      'Built-in microphone and speaker enable two-way audio functionality'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc3614sb-adf28kmc-i1',
    name: 'IPC3614SB-ADF28KMC-I1',
    slug: 'ipc3614sb-adf28kmc-i1',
    category: 'Network Cameras',
    subcategory: 'Tri-Guard Series',
    description: '4MP WDR Dual-Light Alarm Eyeball Network Camera',
    imageUrl: '/Owlview_Series/tri4.png',
    specifications: {
      'Sensor': '1/2.9-inch CMOS',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Lens': '2.8 mm fixed lens',
      'Frame Rate': 'Up to 30/25 fps',
      'WDR': '130 dB True WDR',
      'Imaging': 'ColorHunter with Wise-ISP',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Detection': 'Cross Line, Intrusion, Enter Area & Leave Area',
      'Classification': 'Human, Vehicle & Non-Motorized Vehicle',
      'Analytics': 'People Counting & Crowd Density Monitoring'
    },
    features: [
      'Delivers 4 MP (2688 × 1520) video at up to 30/25 fps',
      'ColorHunter with Wise-ISP provides 24-hour full-color imaging',
      'Supports Ultra 265, H.265, H.264, and MJPEG compression',
      'Intelligent perimeter protection supports cross-line detection',
      'Supports intrusion, enter-area, and leave-area detection',
      'Target classification significantly reduces false alarms',
      'Accurately detects humans, motor vehicles, and non-motorized vehicles',
      'Supports intelligent people-flow counting',
      'Supports crowd-density monitoring',
      '130 dB True WDR provides clear images in strong backlight scenes'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc318sb-adf28kmc-dl-i1',
    name: 'IPC318SB-ADF28KMC-DL-I1',
    slug: 'ipc318sb-adf28kmc-dl-i1',
    category: 'Network Cameras',
    subcategory: 'Tri-Guard Series',
    description: '8MP Dual-Light WDR Mini Dome Network Camera',
    imageUrl: '/Owlview_Series/tri5.png',
    specifications: {
      'Sensor': '1/2.7-inch CMOS',
      'Maximum Resolution': '3840 × 2160 (8 MP)',
      'Frame Rate': 'Up to 30/25 fps',
      'Minimum Illumination': '0.002 Lux; 0 Lux with light',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'IR Distance': 'Up to 30 m',
      'Warm-Light Distance': 'Up to 30 m',
      'Storage': 'MicroSD card support up to 512 GB',
      'Audio': 'Built-in dual microphones and speaker',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'Delivers 8 MP video at up to 30/25 fps',
      'ColorHunter with Wise-ISP provides 24-hour full-color imaging',
      'Intelligent perimeter protection supports cross-line and intrusion detection',
      'Supports enter-area and leave-area detection',
      'Target classification focuses on humans, vehicles, and non-motorized vehicles',
      'Intelligent algorithms reduce false alarms caused by leaves, birds, and lighting',
      'Supports intelligent people-flow counting',
      'Provides crowd-density monitoring for busy surveillance areas',
      'Supports 9:16 corridor mode for narrow monitoring environments',
      'Built-in speaker, dual microphones, alarm I/O, and audio I/O provide enhanced security functions'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
