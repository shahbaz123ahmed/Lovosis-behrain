import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const proSeries: Product[] = [
  {
    id: 'ipc68188efw-x25-f40g-vh',
    name: 'IPC68188EFW-X25-F40G-VH',
    slug: 'ipc68188efw-x25-f40g-vh',
    category: 'PTZ Cameras',
    subcategory: 'Pro Series',
    description: '8MP+8MP LightHunter Dual-Lens Network PTZ Camera',
    imageUrl: '/PTZ/ptzpro1.png',
    specifications: {
      'Sensors': '1/1.8" 8 MP CMOS + 1/1.2" 8 MP CMOS',
      'Maximum Resolution': '3840 × 2160 (8 MP)',
      'Panorama Lens': '4 mm fixed, F1.0',
      'Detail Lens': '10–250 mm motorized, F1.6',
      'Optical / Digital Zoom': '25× / 16×',
      'Minimum Illumination': '0.0005 Lux',
      'IR Distance': 'Up to 250 m',
      'Warm-Light Distance': 'Up to 30 m',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Power Supply': 'AC 24 V ±25% or DC 24 V ±25%'
    },
    features: [
      'Dual channels operate through a single IP for overview and detailed monitoring',
      'Supports dual-lens video stitching for wider scene coverage',
      'LightHunter technology provides high-quality images in ultra-low-light environments',
      '25× optical zoom enables detailed long-distance surveillance',
      'Gyroscope stabilization helps maintain stable video',
      'Smart Intrusion Prevention filters false alarms and detects security events',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'People counting supports flow statistics and crowd-density monitoring',
      'IR and warm-light illumination adapt to different nighttime environments',
      'Ultra 265, H.265, H.264, and MJPEG compression optimize bandwidth and storage'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6828el-x42-w-vh1',
    name: 'IPC6828EL-X42-W-VH1',
    slug: 'ipc6828el-x42-w-vh1',
    category: 'PTZ Cameras',
    subcategory: 'Pro Series',
    description: '8MP 42X LightHunter Laser Wiper Network PTZ Camera',
    imageUrl: '/PTZ/ptzpro2.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Maximum Resolution': '3840 × 2160 (8 MP)',
      'Lens': '6–252 mm, F1.2–F4.6',
      'Optical / Digital Zoom': '42× / 16×',
      'Minimum Illumination': '0.0005 Lux; 0 Lux with IR',
      'IR Illumination Distance': 'Up to 500 m',
      'WDR': '120 dB',
      'Storage': 'MicroSD card up to 512 GB',
      'Power': 'AC 24 V, DC 24 V, or PoE (IEEE 802.3bt)',
      'Protection Rating': 'IP67'
    },
    features: [
      'Delivers detailed 4K video at up to 30 fps',
      'LightHunter technology provides high-quality images in ultra-low-light environments',
      'Smart Intrusion Prevention filters false alarms and classifies targets',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Multi-target detection supports humans, motor vehicles, and non-motor vehicles',
      'Supports automatic target tracking with intelligent filtering',
      'People counting supports flow statistics and crowd-density monitoring',
      'Optical and self-adaptive defog improve visibility in difficult weather',
      'Gyroscope stabilization helps maintain a stable image during operation',
      'Built-in wiper supports reliable monitoring in rain and harsh outdoor conditions'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc6824el-x42-w-vh1',
    name: 'IPC6824EL-X42-W-VH1',
    slug: 'ipc6824el-x42-w-vh1',
    category: 'PTZ Cameras',
    subcategory: 'Pro Series',
    description: '4MP 42X LightHunter Laser Wiper Network PTZ Camera',
    imageUrl: '/PTZ/ptzpro2.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Lens': '6–252 mm, F1.2–F4.6',
      'Optical / Digital Zoom': '42× / 16×',
      'Minimum Illumination': '0.0003 Lux; 0 Lux with IR',
      'Frame Rate': 'Up to 60 fps at 4 MP',
      'Laser Illumination': 'Up to 500 m',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection & Power': 'IP67, AC 24 V / DC 24 V / PoE (IEEE 802.3bt)'
    },
    features: [
      'Delivers 4 MP (2688 × 1520) video at up to 60 fps',
      'LightHunter technology provides excellent image quality in low-light environments',
      'Smart Intrusion Prevention filters false alarms and classifies targets',
      'Supports cross-line, intrusion, enter-area, and leave-area detection',
      'Supports people-flow counting and crowd-density monitoring',
      'Multi-target detection recognizes humans, motor vehicles, and non-motor vehicles',
      'Auto-tracking intelligently follows detected targets',
      'Optical and self-adaptive defog improve visibility in challenging conditions',
      'Gyroscope-based image stabilization provides stable video',
      'Integrated wiper supports reliable operation in rain and harsh outdoor conditions'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc98246efw-x42-w-vh1-ptz',
    name: 'IPC98246EFW-X42-W-VH1',
    slug: 'ipc98246efw-x42-w-vh1-ptz',
    category: 'PTZ Cameras',
    subcategory: 'Pro Series',
    description: '4MP+6MP 42X Wise-ISP MultiView Dual-Light Network PTZ Camera',
    imageUrl: '/PTZ/ptzpro4.png',
    specifications: {
      'Sensor': '1/1.8-inch high-sensitivity CMOS',
      'Panorama Resolution': 'Up to 3680 × 1656 @ 30 fps',
      'Detail Resolution': 'Up to 2688 × 1520 @ 30 fps',
      'Optical Zoom': '42×',
      'Panoramic View': '200° H × 80° V',
      'Panorama Adjustment': 'Motorized vertical adjustment, 0°–30°',
      'Warm-Light Distance': 'Up to 30 m',
      'IR Distance': 'Up to 350 m',
      'Intelligent Analytics': 'SIP, people counting, multi-target detection & auto-tracking',
      'Protection Rating': 'IP67'
    },
    features: [
      'Three-lens design captures panoramic scenes and detailed views simultaneously',
      'Panoramic dual-lens stitching provides a 200° horizontal and 80° vertical field of view',
      'Dual channels operate through a single IP for panorama and detailed monitoring',
      'Panoramic linkage automatically triggers target tracking after detecting an event',
      'Drag-to-zoom enables quick magnification of selected areas',
      'Smart Intrusion Prevention supports cross-line, intrusion, enter-area, and leave-area detection',
      'Deep-learning analytics classify pedestrians, motor vehicles, and non-motor vehicles',
      'Supports people-flow counting and crowd-density monitoring',
      'Automatic tracking intelligently follows detected people and vehicles',
      'Optical defog and adaptive highlight compensation improve visibility in difficult conditions'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc98344er-gx42-e8-w-vh3',
    name: 'IPC98344ER-GX42-E8-W-VH3',
    slug: 'ipc98344er-gx42-e8-w-vh3',
    category: 'PTZ Cameras',
    subcategory: 'Pro Series',
    description: 'Skyview Panoramic 32MP + 4MP PTZ Network Camera',
    imageUrl: '/PTZ/ptzpro5.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Panorama Resolution': '32 MP (11520 × 2700)',
      'Detail Resolution': '4 MP (2688 × 1520)',
      'Detail Lens': '6–252 mm',
      'Optical Zoom': '42×',
      'Panoramic Field of View': '360° H × 110° V',
      'IR Illumination Distance': 'Up to 500 m',
      'WDR': '120 dB on detail channel',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection': 'IP67 and IK10'
    },
    features: [
      'Eight-sensor dynamic stitching delivers seamless 360° panoramic monitoring',
      'Supports flexible 180°, 270°, and 360° panoramic coverage modes',
      'Detail channel delivers up to 4 MP video at 60 fps',
      'Panoramic-to-detail linkage automatically tracks selected targets',
      'Smart Intrusion Prevention supports human and vehicle classification',
      'Auto-tracking follows humans, motor vehicles, and non-motor vehicles',
      'Supports face recognition with up to 16 face libraries and 100,000 faces',
      'People-flow counting and crowd-density detection provide advanced analytics',
      'Optical and digital defog improve visibility in challenging environments',
      'MicroSD storage supports capacities up to 512 GB'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
