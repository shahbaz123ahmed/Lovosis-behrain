import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const bulletSeries: Product[] = [
  {
    id: 'tic2a32sa-f7-4f6ac-i1',
    name: 'TIC2A32SA-F7-4F6AC-I1',
    slug: 'tic2a32sa-f7-4f6ac-i1',
    category: 'Thermal Cameras',
    subcategory: 'Bullet Series',
    description: 'Thermal & Optical Dual-Spectrum Bullet Network Camera',
    imageUrl: '/Thermal/bullet1.png',
    specifications: {
      'Camera Type': 'Thermal & Optical Dual-Spectrum Bullet Network Camera',
      'Optical Sensor': '1/2.8" CMOS',
      'Thermal Sensor': 'Vanadium oxide uncooled focal plane array',
      'Optical Resolution': 'Up to 2688 × 1520 @ 30 fps',
      'Thermal Resolution': '256 × 192 original, up to 960P output',
      'Lens': '6.0 mm optical / 7 mm thermal',
      'Minimum Illumination': 'Color 0.003 lux; B/W 0.002 lux; 0 lux with IR',
      'WDR': '120 dB',
      'Power Supply': 'DC 12 V ±25% / PoE',
      'Storage': 'MicroSD card up to 512 GB'
    },
    features: [
      'Thermal and optical dual-spectrum imaging through a single IP address',
      'Reliable fire detection through the thermal module',
      'Temperature detection with cold and hot spot tracking',
      'Smart intrusion prevention for enhanced perimeter security',
      'Supports cross-line, enter-area, leave-area and intrusion detection',
      'Optical smog recognition assists with fire-alarm reconfirmation',
      'Picture-in-picture mode for simultaneous thermal and optical monitoring',
      'Built-in red and blue warning lights for visual alarms',
      'Supports audio and light alarm functionality',
      'High-sensitivity optical sensor suitable for starlight monitoring'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tic2a32sa-f10-4f8ac-i1',
    name: 'TIC2A32SA-F10-4F8AC-I1',
    slug: 'tic2a32sa-f10-4f8ac-i1',
    category: 'Thermal Cameras',
    subcategory: 'Bullet Series',
    description: 'Thermal & Optical Dual-Spectrum Bullet Network Camera',
    imageUrl: '/Thermal/bullet1.png',
    specifications: {
      'Optical Sensor': '1/2.8" CMOS',
      'Thermal Sensor': 'Vanadium oxide uncooled focal plane array',
      'Thermal Resolution': '256 × 192, 12 μm pixel size',
      'Maximum Optical Resolution': '2688 × 1520 @ 30 fps',
      'Lens': 'Optical 8 mm F1.6 / Thermal 10 mm F1.0',
      'Minimum Illumination': 'Color 0.003 lux; B/W 0.002 lux',
      'IR Distance': 'Up to 50 m',
      'WDR': '120 dB',
      'Storage': 'MicroSD card up to 512 GB',
      'Power': 'DC 12 V ±25% / PoE (IEEE 802.3af)'
    },
    features: [
      'Thermal and optical dual-video streaming through a single IP address',
      'Reliable fire detection and fire-shield area support',
      'Temperature detection with hot and cold spot tracking',
      'Smart intrusion prevention for cross-line and area events',
      'Optical smog recognition assists with fire-alarm reconfirmation',
      'Picture-in-picture mode for convenient thermal/optical comparison',
      'Built-in red and blue warning lights for visual alarms',
      'Supports audio and light alarm functions',
      'Supports Ultra 265, H.265, H.264 and MJPEG compression',
      'Supports MicroSD edge storage up to 512 GB'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tic2a32sa-f3-4f4ac-i1',
    name: 'TIC2A32SA-F3-4F4AC-I1',
    slug: 'tic2a32sa-f3-4f4ac-i1',
    category: 'Thermal Cameras',
    subcategory: 'Bullet Series',
    description: 'Thermal & Optical Dual-Spectrum Bullet Network Camera',
    imageUrl: '/Thermal/bullet1.png',
    specifications: {
      'Optical Sensor': '1/2.8" CMOS',
      'Thermal Sensor': 'Vanadium oxide uncooled focal plane array',
      'Optical Resolution': 'Up to 2688 × 1520 @ 30 fps',
      'Thermal Resolution': '256 × 192; output up to 960P @ 30 fps',
      'Lens': 'Optical 4 mm F1.6 / Thermal 3.2 mm F1.0',
      'Minimum Illumination': '0.003 lux color / 0.002 lux B&W',
      'IR Distance': 'Up to 40 m',
      'WDR': '120 dB',
      'Storage': 'MicroSD card up to 512 GB',
      'Power Supply': 'DC 12 V ±25% / PoE'
    },
    features: [
      'Thermal and optical dual video through a single IP address',
      'Reliable fire detection and fire shield area support',
      'Temperature detection with cold and hot spot tracking',
      'Smart intrusion prevention for cross-line and area events',
      'Optical smog recognition for fire-alarm reconfirmation',
      'Picture-in-picture mode for simultaneous image comparison',
      'Built-in red and blue warning lights for visual alarms',
      'Supports audio and light alarm functions',
      'MicroSD storage support up to 512 GB',
      'Suitable for low-light/starlight surveillance applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tic2624s-f35-4f12ac-i3',
    name: 'TIC2624S-F35-4F12AC-I3',
    slug: 'tic2624s-f35-4f12ac-i3',
    category: 'Thermal Cameras',
    subcategory: 'Bullet Series',
    description: 'Dual-spectrum Thermal Bullet Network Camera',
    imageUrl: '/Thermal/bullet4.png',
    specifications: {
      'Thermal Sensor': 'Vanadium oxide uncooled focal plane array',
      'Thermal Resolution': '400 × 300, enhanced up to 1080p',
      'Optical Sensor': '1/2.7-inch CMOS',
      'Optical Resolution': '4 MP (2688 × 1520) @ 30 fps',
      'Lens': '35 mm thermal / 12 mm optical',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card support up to 512 GB',
      'Alarm Interface': '3 inputs / 2 outputs',
      'Audio Interface': '2 inputs / 1 output',
      'Power Supply': 'DC 12 V ±25% / PoE (IEEE 802.3at)'
    },
    features: [
      'Dual thermal and optical video streams through a single IP address',
      'Supports reliable fire detection and fire shield areas',
      'Smoking detection helps provide enhanced fire monitoring',
      'Temperature detection with cold and hot spot tracking',
      'Supports abnormal-temperature alarm functionality',
      'Smart intrusion prevention includes cross-line and intrusion detection',
      'Supports enter-area and leave-area detection',
      'Optical channel supports smog recognition for fire-alarm reconfirmation',
      'Picture-in-picture mode enables convenient real-time visual comparison',
      'Audio and light alarm with integrated red and blue warning lights'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tic2626s-f10-4f4ac-i3',
    name: 'TIC2626S-F10-4F4AC-I3',
    slug: 'tic2626s-f10-4f4ac-i3',
    category: 'Thermal Cameras',
    subcategory: 'Bullet Series',
    description: 'Dual-Spectrum Thermal Bullet Network Camera',
    imageUrl: '/Thermal/bullet4.png',
    specifications: {
      'Camera Type': 'Dual-Spectrum Thermal Bullet Network Camera',
      'Thermal Resolution': '640 × 512',
      'Optical Sensor': '1/2.7" high-sensitivity sensor',
      'Optical Resolution': 'Up to 2688 × 1520 @ 30 fps',
      'Thermal Video Output': 'Up to 1080p @ 30 fps',
      'Video Compression': 'Ultra 265 / H.265 / H.264 / MJPEG',
      'Alarm Interface': '3 inputs / 2 outputs',
      'Audio Interface': '2 inputs / 1 output',
      'Storage': 'MicroSD card support up to 512 GB',
      'Power Supply': 'DC 12 V ±25% or PoE (IEEE 802.3at)'
    },
    features: [
      'Thermal and optical dual-spectrum video through a single IP address',
      'Instant super-resolution technology for the thermal imaging channel',
      'Reliable fire detection with configurable fire-shield areas',
      'Temperature measurement with abnormal-temperature alarm linkage',
      'Hot and cold spot tracking for rapid temperature anomaly identification',
      'Smart intrusion prevention including cross-line and area detection',
      'Optical smog recognition helps reconfirm potential fire alarms',
      'Picture-in-picture mode for convenient real-time comparison',
      'Audio and light alarm with integrated red and blue warning lights',
      'Anti-corrosion NEMA 4X design for demanding environments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
