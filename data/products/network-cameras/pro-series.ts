import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const proSeries: Product[] = [
  {
    id: 'ipc264ea-ahdzk-i1',
    name: 'IPC264EA-AHDZK-I1',
    slug: 'ipc264ea-ahdzk-i1',
    category: 'Network Cameras',
    subcategory: 'Pro Series',
    description: '4MP Wise-ISP Varifocal IR Bullet Network Camera',
    imageUrl: '/pro-series/pros1.png',
    specifications: {
      'Sensor': '1/1.8-inch progressive CMOS sensor',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Lens': '2.8–12 mm motorized varifocal lens',
      'Optical Zoom': '4×',
      'Minimum Illumination': '0.0003 lux',
      'IR Range': 'Up to 100 m',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'Delivers clear 4 MP video at up to 60 fps',
      'Wise-ISP technology provides superior image quality in challenging environments',
      'LightHunter technology enhances low-light performance',
      'Smart intrusion prevention reduces false alarms',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Metadata analysis enables human and vehicle identification',
      'Supports people counting and crowd-density analysis',
      'True 140 dB WDR ensures excellent backlight compensation',
      'Built-in heating technology allows operation in harsh weather conditions',
      'Suitable for large-scale commercial and industrial surveillance systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc3234ea-ahdzk-i1',
    name: 'IPC3234EA-AHDZK-I1',
    slug: 'ipc3234ea-ahdzk-i1',
    category: 'Network Cameras',
    subcategory: 'Pro Series',
    description: '4MP Wise-ISP Varifocal IR Dome Network Camera',
    imageUrl: '/network-prime/prime2.png',
    specifications: {
      'Sensor': '1/1.8-inch progressive scan CMOS',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Lens': 'Motorized 2.8–12 mm varifocal lens',
      'Frame Rate': 'Up to 60 fps',
      'Minimum Illumination': '0.0005 lux',
      'Infrared Distance': 'Up to 40 m',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'Delivers clear 4 MP video at up to 60 fps',
      'Wise-ISP technology enhances image quality in challenging environments',
      'LightHunter technology provides excellent low-light performance',
      'Supports intelligent intrusion prevention with false alarm filtering',
      'Provides advanced metadata analysis for people and vehicles',
      'Supports people counting and crowd-density monitoring',
      'Enables front-end comparison with allowlist and blocklist functions',
      'True 140 dB WDR technology delivers balanced exposure',
      'Built-in audio, alarm, and storage interfaces improve flexibility',
      'Suitable for demanding indoor and outdoor surveillance applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc268ea-ahdzk-i1',
    name: 'IPC268EA-AHDZK-I1',
    slug: 'ipc268ea-ahdzk-i1',
    category: 'Network Cameras',
    subcategory: 'Pro Series',
    description: '8MP Wise-ISP Varifocal IR Bullet Network Camera',
    imageUrl: '/pro-series/pros3.png',
    specifications: {
      'Sensor': '1/1.8-inch progressive scan CMOS',
      'Maximum Resolution': '3840 × 2160 (8 MP)',
      'Lens': 'Motorized 2.8–12 mm varifocal lens',
      'Frame Rate': 'Up to 60 fps',
      'Minimum Illumination': '0.001 lux',
      'Infrared Range': 'Up to 60 m',
      'Video Compression': 'Ultra 265, H.265, H.264, and MJPEG',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'Delivers crystal-clear 8 MP video quality at up to 60 fps',
      'Wise-ISP technology significantly improves image quality in complex environments',
      'LightHunter technology ensures outstanding low-light performance',
      'Smart intrusion prevention reduces false alarms caused by environmental factors',
      'Supports people counting and crowd density analysis',
      'Provides human, motor vehicle, and non-motor vehicle metadata collection',
      'Supports allowlist and blocklist comparison functions',
      'True 140 dB WDR technology delivers balanced image exposure',
      'Built-in audio support enables synchronized sound recording',
      'Suitable for advanced indoor and outdoor surveillance applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc3238ea-ahdzk-i1',
    name: 'IPC3238EA-AHDZK-I1',
    slug: 'ipc3238ea-ahdzk-i1',
    category: 'Network Cameras',
    subcategory: 'Pro Series',
    description: '8MP Wise-ISP Varifocal IR Dome Network Camera',
    imageUrl: '/pro-series/pros4.png',
    specifications: {
      'Sensor': '1/1.8-inch progressive scan CMOS',
      'Maximum Resolution': '3840 × 2160 (8 MP)',
      'Lens': 'Motorized 2.8–12 mm varifocal lens',
      'Optical Zoom': '4×',
      'Minimum Illumination': '0.001 lux',
      'Infrared Range': 'Up to 40 m',
      'Frame Rate': 'Up to 60 fps',
      'Video Compression': 'Ultra 265, H.265, H.264, and MJPEG',
      'Storage': 'MicroSD card support up to 512 GB',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'Delivers detailed 4K video quality at up to 60 fps',
      'Wise-ISP technology significantly enhances image clarity',
      'LightHunter technology ensures excellent low-light performance',
      'Supports intelligent intrusion prevention with false alarm filtering',
      'Enables human, motor vehicle, and non-motor vehicle detection',
      'Supports allowlist and blocklist comparison functions',
      'Provides people counting and crowd-density analysis',
      'True 140 dB WDR technology improves visibility in challenging environments',
      'Built-in microphones and speaker support two-way audio communication',
      'Designed for demanding indoor and outdoor surveillance applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc28184ea-adx5k-f40-i1',
    name: 'IPC28184EA-ADX5K-F40-I1',
    slug: 'ipc28184ea-adx5k-f40-i1',
    category: 'Network Cameras',
    subcategory: 'Pro Series',
    description: '8MP+4MP MultView Wise-ISP Intelligent Bullet Network Camera',
    imageUrl: '/pro-series/pros5.png',
    specifications: {
      'Sensor': 'Dual 1/1.8-inch progressive scan CMOS sensors',
      'Channel 1 Resolution': '2688 × 1520 (4 MP)',
      'Channel 2 Resolution': '3840 × 2160 (8 MP)',
      'Lens Configuration': '4 mm fixed lens and 10–50 mm motorized lens',
      'Optical Zoom': '5×',
      'Minimum Illumination': '0.0005 lux',
      'Infrared Range': 'Up to 80 m',
      'Video Compression': 'Ultra 265, H.265, H.264, and MJPEG',
      'Power Supply': 'AC 24 V, DC 12 V, and PoE',
      'Protection Rating': 'IP66'
    },
    features: [
      'Dual-channel architecture provides both panoramic and detailed views simultaneously',
      'Captures 8 MP video at up to 30 fps for outstanding image quality',
      'LightHunter technology delivers exceptional low-light performance',
      'Wise-ISP technology optimizes image quality in challenging environments',
      'Supports intelligent intrusion prevention with advanced object classification',
      'Enables human, vehicle, face, and non-vehicle detection',
      'Built-in dual microphones provide enhanced audio capture capabilities',
      'Three intelligent operating modes improve flexibility for different applications',
      'Sound and light warning functions improve security monitoring',
      'Suitable for airports, highways, industrial facilities, and large outdoor areas'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
