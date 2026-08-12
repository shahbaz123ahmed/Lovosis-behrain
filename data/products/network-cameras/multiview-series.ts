import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const multiviewSeries: Product[] = [
  {
    id: 'ipc98246efw-x42-w-vh1',
    name: 'IPC98246EFW-X42-W-VH1',
    slug: 'ipc98246efw-x42-w-vh1',
    category: 'Network Cameras',
    subcategory: 'MultiView Series',
    description: '4MP+6MP 42X Wise-ISP MultiView Dual-Light Network PTZ Camera',
    imageUrl: '/Owlview_Series/multi1.png',
    specifications: {
      'Sensor': '1/1.8-inch high-sensitivity CMOS',
      'Panorama Resolution': 'Up to 3680 × 1656 @ 30 fps',
      'Detail Resolution': 'Up to 2688 × 1520 @ 30 fps',
      'Optical Zoom': '42×',
      'Panoramic View': '200° H × 80° V',
      'Panorama Adjustment': 'Motorized vertical adjustment from 0°–30°',
      'Warm-Light Distance': 'Up to 30 m',
      'IR Distance': 'Up to 350 m',
      'Intelligent Analytics': 'SIP, people counting, multi-target detection & auto-tracking',
      'Protection Rating': 'IP67'
    },
    features: [
      'Three-lens design captures panoramic scenes and detailed views simultaneously',
      'Panoramic dual-lens stitching provides an ultra-wide 200° horizontal field of view',
      'Dual-channel operation uses a single IP for panorama and live detail monitoring',
      'Panoramic linkage automatically triggers detailed target tracking after an event',
      'Drag-to-zoom allows quick magnification of selected areas in the panoramic image',
      'Smart Intrusion Prevention supports cross-line, intrusion, enter-area, and leave-area detection',
      'Deep-learning analytics classify pedestrians, motor vehicles, and non-motor vehicles',
      'Supports people-flow counting and crowd-density monitoring',
      'Auto-tracking intelligently follows detected vehicles and pedestrians',
      'Optical defog and adaptive highlight compensation enhance visibility in difficult conditions'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc8645ea-adzkm-i1',
    name: 'IPC8645EA-ADZKM-I1',
    slug: 'ipc8645ea-adzkm-i1',
    category: 'Network Cameras',
    subcategory: 'MultiView Series',
    description: '20MP Super Starlight IR 4-Directional Panoramic Dome Network Camera',
    imageUrl: '/Owlview_Series/multi2.png',
    specifications: {
      'Sensor': '4 × 1/2.7-inch CMOS',
      'Maximum Resolution': '4 × 5 MP',
      'Main Stream': '2880 × 1620 @ 30 fps per channel',
      'Lens': '2.7–13.5 mm motorized varifocal',
      'Optical Zoom': '5×',
      'Aperture': 'F1.2 × 4',
      'Minimum Illumination': '0.002 Lux; 0 Lux with IR',
      'WDR': '130 dB True WDR',
      'Adjustment': 'Pan 0°–360°, Tilt 0°–65°, Rotate 0°–355°',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'One IP address provides four independent video channels',
      'Each lens supports independent pan, tilt, and rotation adjustment',
      'Delivers up to 5 MP high-definition video on each channel',
      'Wise-ISP technology provides comprehensive image-quality enhancement',
      'LightHunter technology delivers excellent performance in low-light environments',
      'Smart Intrusion Prevention provides target-based detection and false-alarm filtering',
      'Supports people-flow counting for entrance and exit statistics',
      'Supports crowd-density monitoring for busy surveillance areas',
      'Multiple intelligent functions can operate simultaneously across different channels',
      '130 dB True WDR provides clear images in challenging backlight conditions'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc3224ss-adf28-40-k-i1',
    name: 'IPC3224SS-ADF28(40)K-I1',
    slug: 'ipc3224ss-adf28-40-k-i1',
    category: 'Network Cameras',
    subcategory: 'MultiView Series',
    description: '2×4MP LightHunter MultiView Fixed IR Dome Network Camera',
    imageUrl: '/Owlview_Series/multi3.png',
    specifications: {
      'Sensor': '2 × 1/3.0-inch CMOS',
      'Maximum Resolution': '4 MP per channel',
      'Main Resolution': 'Up to 2688 × 1520 @ 25/20 fps',
      'Minimum Illumination': '0.002 Lux; 0 Lux with IR',
      'Day/Night': 'ICR with automatic switching',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'WDR': '130 dB True WDR',
      'Storage': 'MicroSD card up to 512 GB',
      'Power Supply': 'DC 12 V, PoE (IEEE 802.3af)',
      'Protection Rating': 'IP67 and IK10'
    },
    features: [
      'Delivers high-quality 4 MP video from both channels',
      'Single IP design simplifies dual-channel monitoring and management',
      'Both channels support cross-line, intrusion, enter-area, and leave-area detection',
      'Intelligent target classification detects humans, vehicles, and non-motor vehicles',
      'Smart Intrusion Prevention significantly reduces false alarms from leaves, birds, and lights',
      'Supports intelligent people-flow counting on Channel 1',
      'Supports crowd-density monitoring on Channel 1',
      '130 dB True WDR provides clear images in strong backlight conditions',
      'Built-in dual microphones enable high-quality audio capture',
      'Supports MicroSD storage up to 512 GB'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc28184ea-adx5k-f40-i1-multiview',
    name: 'IPC28184EA-ADX5K-F40-I1',
    slug: 'ipc28184ea-adx5k-f40-i1-multiview',
    category: 'Network Cameras',
    subcategory: 'MultiView Series',
    description: '8MP MultView Wise-ISP VF IR Bullet Network Camera',
    imageUrl: '/Owlview_Series/multi4.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Channel 1 Resolution': '4 MP',
      'Channel 2 Resolution': '8 MP',
      'Maximum Detailed Resolution': '3840 × 2160 @ 30 fps',
      'Minimum Illumination': '0.0005 Lux (Channel 1)',
      'Day/Night': 'ICR auto switching on detailed channel',
      'Shutter Speed': '1–1/100000 s',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Alarm I/O': '3 inputs / 2 outputs',
      'Audio I/O': '2 inputs / 1 output'
    },
    features: [
      'Combines a full overview and detailed target view simultaneously',
      'Supports Ultra 265, H.265, H.264, and MJPEG video compression',
      'LightHunter technology provides excellent image quality in low-light environments',
      'Dual illumination supports three illumination modes',
      'Built-in dual microphones provide enhanced sound performance',
      'Supports sound-and-light warning for active security response',
      'Mix-traffic detection recognizes humans, motor vehicles, and non-motor vehicles',
      'Supports blocklist and allowlist front-end comparison',
      'Smart intrusion prevention filters false alarms for accurate target detection',
      'Detailed channel supports electric control and tilt-angle adjustment for easier installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc68188efw-x25-f40g-vh',
    name: 'IPC68188EFW-X25-F40G-VH',
    slug: 'ipc68188efw-x25-f40g-vh',
    category: 'Network Cameras',
    subcategory: 'MultiView Series',
    description: '8MP 25X Dual-Spectrum MultiView Laser Network PTZ Camera',
    imageUrl: '/Owlview_Series/multi5.png',
    specifications: {
      'Maximum Resolution': '8 MP',
      'Panorama Sensor': '1/1.8" CMOS',
      'Detail Sensor': '1/1.2" CMOS',
      'Optical Zoom': '25×',
      'Minimum Illumination': '0.0005 Lux; 0 Lux with illumination',
      'WDR': '120 dB',
      'Shutter Speed': '1–1/100000 s',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Day/Night': 'ICR automatic switching',
      'Power Supply': 'AC 24 V ±25% / DC 24 V ±25%'
    },
    features: [
      'Dual-channel architecture provides overall and detailed views simultaneously',
      'Dual-lens video stitching provides a wider panoramic monitoring range',
      '25× optical zoom enables detailed long-distance observation',
      'Smart Intrusion Prevention filters false alarms',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Supports intelligent face detection and automatic best-snapshot selection',
      'Supports blocklist and allowlist comparison',
      'People counting supports flow statistics and crowd-density monitoring',
      'LightHunter technology enhances image quality in ultra-low-light scenes',
      'IR and warm-light illumination adapt to different nighttime surveillance scenarios'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
