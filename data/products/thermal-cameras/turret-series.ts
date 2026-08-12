import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const turretSeries: Product[] = [
  {
    id: 'tic3612sa-f2-4f3ac-i1',
    name: 'TIC3612SA-F2-4F3AC-I1',
    slug: 'tic3612sa-f2-4f3ac-i1',
    category: 'Thermal Cameras',
    subcategory: 'Turret Series',
    description: 'Thermal & Optical Dual-Spectrum Turret Network Camera',
    imageUrl: '/Thermal/turret1.png',
    specifications: {
      'Optical Sensor': '1/2.8" CMOS',
      'Thermal Sensor': 'Vanadium oxide uncooled focal plane array',
      'Resolution': 'Optical 2688 × 1520; Thermal up to 1280 × 960',
      'Lens': 'Optical 2.6 mm F2.0; Thermal 2.1 mm F1.0',
      'IR Distance': 'Up to 30 m',
      'WDR': '120 dB',
      'Frame Rate': 'Up to 30 fps',
      'Power': 'DC 12 V ±25% / PoE (IEEE 802.3af)',
      'Operating Temperature': '–40°C to +70°C',
      'Protection': 'IP67, 6 kV surge protection'
    },
    features: [
      'Simultaneous thermal and optical dual-spectrum monitoring',
      'Picture-in-picture mode for convenient real-time comparison',
      'Supports fire detection and configurable fire shield areas',
      'Detects abnormal temperatures and triggers linked alarms',
      'Smart cross-line, intrusion, enter-area and leave-area detection',
      'Optical smoke recognition helps reconfirm potential fire alarms',
      'Built-in microphone and speaker for two-way audio',
      'Integrated red and blue warning lights for active deterrence',
      'Ultra 265, H.265, H.264 and MJPEG video compression',
      'Supports MicroSD edge storage up to 512 GB'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tic3612sa-f7-4f6ac-i1',
    name: 'TIC3612SA-F7-4F6AC-I1',
    slug: 'tic3612sa-f7-4f6ac-i1',
    category: 'Thermal Cameras',
    subcategory: 'Turret Series',
    description: 'Thermal & Optical Dual-Spectrum Turret Network Camera',
    imageUrl: '/Thermal/turret1.png',
    specifications: {
      'Optical Resolution': '2688 × 1520 (4 MP) @ 30 fps',
      'Thermal Resolution': '256 × 192; output up to 1280 × 960 @ 30 fps',
      'Sensor': '1/2.8" CMOS + vanadium oxide uncooled focal plane array',
      'Lens': '6.0 mm optical / 7.0 mm thermal',
      'Thermal Sensitivity (NETD)': '<50 mK @ F1.0, 25°C',
      'Temperature Range': '−20°C to 150°C / 100°C to 550°C',
      'IR Distance': 'Up to 30 m',
      'Storage': 'MicroSD card up to 512 GB',
      'Power': 'DC 12 V ±25% or PoE; max. 12 W',
      'Protection': 'IP67; operating temperature −40°C to +70°C'
    },
    features: [
      'Thermal and optical dual-spectrum video through a single IP address',
      'Reliable fire detection with configurable fire shield areas',
      'Temperature detection with cold and hot spot tracking',
      'Smart intrusion prevention on both thermal and optical channels',
      'Supports cross-line, intrusion, enter-area and leave-area detection',
      'Optical module supports smoke recognition for fire-alarm verification',
      'Picture-in-picture mode for convenient real-time comparison',
      'Built-in red and blue warning lights with audio/light alarms',
      'Ultra 265, H.265, H.264 and MJPEG video compression',
      'Built-in microphone and speaker with two-way audio support'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tic3612sa-f3-4f4ac-i1',
    name: 'TIC3612SA-F3-4F4AC-I1',
    slug: 'tic3612sa-f3-4f4ac-i1',
    category: 'Thermal Cameras',
    subcategory: 'Turret Series',
    description: 'Thermal & Optical Bi-spectrum Network Dome Camera',
    imageUrl: '/Thermal/turret1.png',
    specifications: {
      'Camera Type': 'Thermal & Optical Bi-spectrum Network Dome Camera',
      'Optical Sensor': '1/2.8-inch CMOS',
      'Optical Resolution': '4 MP',
      'Thermal Resolution': '256 × 192',
      'Thermal Pixel Size': '12 μm',
      'Optical Lens': '4 mm, F1.6',
      'Thermal Sensitivity (NETD)': '< 50 mK @ F1.0, 25°C',
      'Minimum Illumination': 'Color 0.003 lux / B&W 0.002 lux',
      'Wide Dynamic Range': '120 dB',
      'Signal-to-Noise Ratio': '>56 dB'
    },
    features: [
      'Bi-spectrum design combines thermal and visible-light monitoring',
      'Provides clear 4 MP optical video for detailed surveillance',
      'Thermal imaging enables effective monitoring in darkness and difficult environments',
      'High thermal sensitivity helps identify subtle temperature differences',
      '120 dB WDR improves visibility in high-contrast scenes',
      'Supports reliable low-light optical imaging',
      '12 μm thermal detector provides detailed thermal imaging',
      'Designed for continuous day and night security monitoring',
      'Network-based architecture enables integration with modern IP surveillance systems',
      'Dome-style housing makes it suitable for professional security installations'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
