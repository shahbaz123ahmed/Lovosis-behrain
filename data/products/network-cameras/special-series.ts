import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const specialSeries: Product[] = [
  {
    id: 'rvs441-2d-d15-os',
    name: 'RVS441@2D-D15-OS',
    slug: 'rvs441-2d-d15-os',
    category: 'Network Cameras',
    subcategory: 'Special Series',
    description: '150m Perimeter Radar-Camera System',
    imageUrl: '/Owlview_Series/special1.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Lens': '4 mm fixed + 8–32 mm motorized',
      'Optical Zoom': '4×',
      'Radar Frequency': '80 GHz',
      'Detection Distance': '10–150 m',
      'Illumination': 'Warm light up to 40 m / IR up to 150 m',
      'Video Compression': 'H.265, H.264, MJPEG',
      'Power Supply': 'DC 24 V ±25%',
      'Protection Rating': 'IP67'
    },
    features: [
      'Radar-video fusion improves target detection and recognition accuracy',
      'Supports simultaneous monitoring of up to 8 detection zones',
      'Detects pedestrians, motor vehicles, and non-motor vehicles',
      'Recognizes walking, running, crawling, crouching, and wall-climbing actions',
      'Supports incoming, outgoing, and lateral movement detection',
      'Automatically tracks detected intruders',
      'Supports intrusion and cross-line detection events',
      'Dual-scene coverage combines long- and short-focal-length monitoring',
      'Starlight-level sensors provide enhanced nighttime imaging',
      'Designed for campuses, airports, railways, power facilities, and perimeter security'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'rvs441-2d-d30-os',
    name: 'RVS441@2D-D30-OS',
    slug: 'rvs441-2d-d30-os',
    category: 'Network Cameras',
    subcategory: 'Special Series',
    description: '300m Perimeter Radar-Camera System',
    imageUrl: '/Owlview_Series/special1.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Lenses': '4.0 mm fixed + 8–32 mm zoom',
      'Optical Zoom': '4×',
      'Radar Frequency': '80 GHz',
      'Detection Range': '10–300 m',
      'Video Compression': 'H.265, H.264, MJPEG',
      'Frame Rate': '2688 × 1520 @ 30 fps',
      'Power Supply': 'DC 24 V ±25%',
      'Protection Rating': 'IP67'
    },
    features: [
      'Radar-video fusion improves target detection and recognition accuracy',
      'Detects pedestrians, motor vehicles, and non-motor vehicles',
      'Recognizes walking, running, crawling, crouching, and wall-climbing actions',
      'Supports automatic tracking of detected intruders',
      'Supports intrusion and cross-line event detection',
      'Dual-scene coverage combines fixed and zoom lenses for wide and detailed monitoring',
      'Starlight-level sensors enhance nighttime surveillance performance',
      'Supports incoming, outgoing, and lateral movement detection',
      'Detects targets at speeds ranging from 0.03 to 30 m/s',
      'Designed for campuses, airports, railways, power facilities, and perimeter-security applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
