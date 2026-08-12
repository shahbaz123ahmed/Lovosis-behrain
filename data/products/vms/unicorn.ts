import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const unicorn: Product[] = [
  {
    id: 'pwr-300a-in',
    name: 'PWR-300A-IN',
    slug: 'pwr-300a-in',
    category: 'VMS',
    subcategory: 'Unicorn',
    description: 'UNV 300W AC Power Module',
    imageUrl: '/VMS/unicorn1.jpg',
    specifications: {
      'Input Voltage': '90–264 V AC',
      'Input Frequency': '47–63 Hz',
      'DC Output': '+12 V DC / 25 A, +12 V Standby / 0.7 A',
      'Output Power': '312 W',
      'Output Efficiency': '≥83%',
      'Line / Load Regulation': '±5% / ±3%',
      'Working Temperature': '0°C to 55°C',
      'Storage Temperature': '–40°C to 70°C',
      'Working Humidity': '10%–90%',
      'Dimensions (D × H × W)': '234.9 × 40.13 × 101.6 mm'
    },
    features: [
      'Designed as a high-performance AC power module',
      'Provides stable 12 V DC power output',
      'Supports input undervoltage protection',
      'Supports input overvoltage protection',
      'Provides short-circuit protection',
      'Includes overload and overvoltage protection',
      'Supports hot-plug protection for improved maintenance',
      'Over-temperature protection enhances operational safety',
      'Built-in ventilation fan provides effective heat dissipation',
      'Status indicator shows green for normal and yellow for abnormal operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'unicorn-center',
    name: 'Unicorn',
    slug: 'unicorn-center',
    category: 'VMS',
    subcategory: 'Unicorn',
    description: 'UNV Unicorn Center',
    imageUrl: '/VMS/unicorn2.png',
    specifications: {
      'Channel Capacity': 'Up to 2,000 channels',
      'Device Capacity': 'Up to 1,000 devices',
      'HDD Capacity': '16 × SATA, up to 14 TB each',
      'Storage Bandwidth': '512 Mbps / 256 × 1080p channels',
      'Input Bandwidth': '512 Mbps',
      'Output Bandwidth': '384 Mbps',
      'Video Compression': 'Ultra 265 / H.265 / H.264',
      'Display Outputs': '2 × HDMI + 1 × VGA',
      'RAID': 'RAID 0/1/5/6/10/50/60/JBOD',
      'Decoding': '4×4K@30 / 16×1080p@30 / 36×720p@30 / 64×D1@30'
    },
    features: [
      'Unified management of IPCs, NVRs, decoders and other surveillance devices',
      'Supports third-party IP cameras through standard ONVIF',
      'Live view, playback, sequence and video-wall management',
      'E-map and two-way audio functionality',
      'Supports up to 300 simultaneous online users',
      'Expandable storage using external disk enclosures',
      'RAID support for enhanced storage reliability',
      'Supports network fault tolerance and load balancing',
      'Mobile access through iOS and Android clients',
      'Embedded Linux platform with redundant power and high-availability features'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
