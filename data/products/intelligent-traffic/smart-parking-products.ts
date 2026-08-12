import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const smartParkingProducts: Product[] = [
  {
    id: 'pkc2641-z100-ir-p',
    name: 'PKC2641-Z100(-IR)-P',
    slug: 'pkc2641-z100-ir-p',
    category: 'Intelligent Traffic',
    subcategory: 'Smart Parking Products',
    description: '4MP License Plate Recognition Bullet IP Camera',
    imageUrl: '/intelligence/park1.png',
    specifications: {
      'Sensor': '1/1.8-inch 4MP CMOS',
      'Resolution': 'Up to 2688 × 1520',
      'Lens': '10–50 mm motorized zoom',
      'Minimum Illumination': '0.002 lux (F1.7)',
      'Frame Rate': 'Up to 60 fps',
      'WDR': '120 dB',
      'Video Compression': 'H.264 / H.265',
      'Digital Noise Reduction': '3D DNR',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection': 'IP67 and IK10'
    },
    features: [
      'AI ISP technology provides enhanced image quality',
      'Recognizes standard vehicle license plates from multiple countries',
      'Supports vehicle and license plate recognition directly on the camera',
      'Plate allowlist and blocklist configuration supported',
      '120 dB WDR improves visibility in challenging lighting conditions',
      'Automatic gain control and white balance optimize image quality',
      'Supports H.264 and H.265 video compression',
      '3D digital noise reduction delivers cleaner images',
      'Digital defog improves visibility in hazy conditions',
      'Rugged IP67 and IK10 construction ensures reliable outdoor operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'pkc2641-z28-p',
    name: 'PKC2641-Z28-P',
    slug: 'pkc2641-z28-p',
    category: 'Intelligent Traffic',
    subcategory: 'Smart Parking Products',
    description: '4MP LPR Bullet IP Camera',
    imageUrl: '/intelligence/park1.png',
    specifications: {
      'Sensor': '1/1.8-inch 4 MP CMOS',
      'Resolution': 'Up to 2688 × 1520',
      'Lens': '2.8–12 mm',
      'Minimum Illumination': '0.0005 lux (F1.4)',
      'Frame Rate': 'Up to 60 fps',
      'WDR': '120 dB',
      'Video Compression': 'H.264 / H.265',
      'Storage': 'MicroSD up to 512 GB',
      'Application Speed': '≤30 km/h entrances/exits; ≤80 km/h regular roads',
      'Protection': 'IP67 and IK10'
    },
    features: [
      'AI ISP technology enhances overall image quality',
      'Recognizes standard vehicle license plates from multiple countries',
      'Supports vehicle detection for entrances, exits, and regular roads',
      'Supports license-plate allowlist and blocklist management',
      'Recognizes multiple vehicle types including cars, buses, trucks, SUVs, and motorcycles',
      'Supports vehicle color and manufacturer recognition',
      '120 dB WDR delivers clearer images in challenging lighting',
      'Supports H.264 and H.265 video compression',
      '3D DNR and digital defog improve image clarity',
      'Supports configurable barrier-opening policies based on vehicle recognition'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'pkc2641-z80-p',
    name: 'PKC2641-Z80-P',
    slug: 'pkc2641-z80-p',
    category: 'Intelligent Traffic',
    subcategory: 'Smart Parking Products',
    description: '4MP License Plate Recognition Bullet IP Camera',
    imageUrl: '/intelligence/park1.png',
    specifications: {
      'Sensor': '1/1.8-inch 4 MP CMOS',
      'Resolution': 'Up to 2688 × 1520',
      'Lens': '8–32 mm motorized varifocal',
      'Minimum Illumination': '0.002 lux (F1.7)',
      'Frame Rate': 'Up to 60 fps',
      'Video Compression': 'H.264 / H.265',
      'WDR': '120 dB',
      'Storage': 'MicroSD card up to 512 GB',
      'Power Supply': 'DC 12 V ±25% / PoE (802.3at)',
      'Protection': 'IP67 & IK10'
    },
    features: [
      'AI ISP technology enhances overall image quality',
      'Recognizes vehicle license plates containing numbers and letters',
      'Supports license plate recognition for multiple countries and regions',
      'Supports vehicle detection on regular roads at speeds up to 80 km/h',
      'Allowlist and blocklist support with up to 20,000 entries per list',
      'Supports configurable automatic barrier-opening policies',
      '120 dB WDR delivers clearer images in challenging lighting',
      '3D DNR, HLC, BLC, and digital defog improve image visibility',
      'Supports MicroSD edge storage up to 512 GB',
      'Built-in 5 warm-light LEDs provide automatic illumination up to 50 m'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'kit-pkc2841-z28-wh-pkp-lz',
    name: 'KIT-PKC2841-Z28-WH-PKP-LZ',
    slug: 'kit-pkc2841-z28-wh-pkp-lz',
    category: 'Intelligent Traffic',
    subcategory: 'Smart Parking Products',
    description: '4MP Entry & Exit Capture Bullet Camera Kit',
    imageUrl: '/intelligence/park4.png',
    specifications: {
      'Sensor': '1/1.8-inch 4 MP CMOS',
      'Resolution': 'Up to 2688 × 1520',
      'Lens': '2.8–12 mm',
      'Minimum Illumination': '0.0005 lux (F1.4)',
      'Frame Rate': 'Up to 60 fps',
      'WDR': '120 dB',
      'Video Compression': 'H.264 / H.265',
      'Storage': 'MicroSD card up to 512 GB',
      'Power Supply': '100–240 VAC',
      'Operating Environment': '–30°C to +60°C, ≤90% RH; IP67'
    },
    features: [
      'AI ISP technology enhances overall image quality',
      'Built-in algorithm recognizes vehicle license plates from multiple countries',
      'Supports vehicle capture at entrance and exit points',
      'Vehicle capture rate reaches ≥99% under recommended conditions',
      'License plate recognition rate reaches ≥98% under recommended conditions',
      'Supports allowlist and blocklist configuration with up to 20,000 entries each',
      'Multiple configurable barrier-opening policies are supported',
      'Automatic gain control, white balance, and 120 dB WDR improve visibility',
      'Supports MicroSD edge storage up to 512 GB',
      'Integrated warm-light module provides illumination up to 50 m'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'pkc5601-c4z-led44-wh',
    name: 'PKC5601-C4Z-LED44-WH',
    slug: 'pkc5601-c4z-led44-wh',
    category: 'Intelligent Traffic',
    subcategory: 'Smart Parking Products',
    description: '4MP Pole-Mount Capture & Display Unit',
    imageUrl: '/intelligence/park5.png',
    specifications: {
      'Sensor': '1/1.8" 4MP CMOS',
      'Resolution': 'Up to 2688 × 1520',
      'Focal Length': '2.8–12 mm',
      'Minimum Illumination': '0.0005 Lux (F1.4)',
      'Frame Rate': 'Up to 60 fps',
      'Video Compression': 'H.264 / H.265',
      'WDR': '120 dB',
      'Illumination': '2 warm-light LEDs, up to 50 m',
      'Power Supply': '100–240 VAC',
      'Protection Rating': 'IP54'
    },
    features: [
      'AI ISP technology enhances overall image quality',
      'Supports automatic gain control, white balance, and 120 dB WDR',
      'Built-in ANPR algorithm recognizes license plates from multiple countries, including India',
      'Supports vehicle detection at entrance and exit speeds up to 30 km/h',
      'Vehicle capture rate reaches ≥99% under recommended conditions',
      'License plate recognition rate reaches ≥98% under recommended conditions',
      'Supports allowlist and blocklist with up to 20,000 entries each',
      'Integrated LED display supports red, green, and yellow text',
      'Physical button and built-in speaker support two-way audio',
      'Supports MicroSD cards up to 512 GB for edge storage'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
