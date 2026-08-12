import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const diskEnclosure: Product[] = [
  {
    id: 'de1848-v2',
    name: 'DE1848-V2',
    slug: 'de1848-v2',
    category: 'Storage',
    subcategory: 'Disk Enclosure',
    description: '48 Network Storage Disk Enclosure Unit',
    imageUrl: '/storage/disk1.jpg',
    specifications: {
      'Controller': '1',
      'HDD Slots': '48 SATA interfaces',
      'Expansion Interface': '2-port 4 × 12 Gbps Mini SAS HD',
      'Serial Port': '1',
      'Power Consumption': '410 W (fully loaded)',
      'Power Supply': '100–127 V / 200–240 V AC, 50/60 Hz',
      'Dimensions': '482 × 801 × 178 mm',
      'Weight': 'Less than 60 kg (fully loaded)',
      'Operating Temperature': '5°C to 40°C',
      'Certifications': 'CE, FCC, CB, RoHS, WEEE'
    },
    features: [
      'High-density design accommodates up to 48 hard disks',
      'SAS-3 technology delivers high-speed storage performance',
      'Redundant power supplies improve system reliability',
      'Supports automatic power switching during power-module failure',
      'Hot-swappable power supplies allow online replacement',
      'Sequential disk power-on protects against startup impulse current',
      'Multistage fan-speed control optimizes cooling performance',
      'Intelligent heat-dissipation management helps reduce power consumption',
      'Compact 4U rack design maximizes storage density',
      'Engineered for stable, scalable video-surveillance storage applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'de3148-v2',
    name: 'DE3148-V2',
    slug: 'de3148-v2',
    category: 'Storage',
    subcategory: 'Disk Enclosure',
    description: '48-Slot Network Storage Disk Enclosure',
    imageUrl: '/storage/disk1.jpg',
    specifications: {
      'HDD Slots': '48',
      'Disk Interface': 'SATA / SAS / NL-SAS',
      'Controller Number': '2',
      'Expansion Interface': '4-port × 12 Gbps Mini SAS HD',
      'Management Interface': '2 serial ports',
      'Power Supply': '100–127 V / 200–240 V AC, 50/60 Hz',
      'Power Consumption': '450 W fully loaded',
      'Operating Temperature': '5°C to 40°C',
      'Dimensions': '482 × 801 × 178 mm',
      'Weight': '<61 kg fully loaded'
    },
    features: [
      'High-density 48-disk storage enclosure',
      'High-performance 12 Gbps SAS connectivity',
      'Redundant power supplies enhance system reliability',
      'Hot-swappable power design simplifies maintenance',
      'Automatic power switching during power-supply failure',
      'Sequential disk power-on helps protect against impulse current',
      'Multistage fan-speed control improves cooling efficiency',
      'Intelligent heat-dissipation management reduces power consumption',
      'Designed for stable continuous surveillance storage operation',
      'Supports scalable storage expansion for Uniview storage systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'de3124-v2',
    name: 'DE3124-V2',
    slug: 'de3124-v2',
    category: 'Storage',
    subcategory: 'Disk Enclosure',
    description: '24 Disk Slots Network Storage Disk Enclosure Unit',
    imageUrl: '/storage/disk3.png',
    specifications: {
      'HDD Slots': '24',
      'Controller Number': '2',
      'Disk Interface': 'SATA / SAS / NL-SAS',
      'Serial Ports': '2',
      'Expansion Interface': '12 Gbps Mini SAS HD',
      'Power Supply': '100–127 V / 200–240 V AC, 50/60 Hz',
      'Power Consumption': '270 W (fully loaded)',
      'Operating Temperature': '5°C to 40°C',
      'Dimensions': '482 × 589 × 175 mm',
      'Weight': '<40 kg (fully loaded)'
    },
    features: [
      'High-density design accommodates up to 24 disks',
      'SAS-3 technology provides high-speed storage performance',
      'Dual controllers enhance system reliability',
      'Redundant power supplies support automatic switching during failure',
      'Hot-swappable power modules allow online replacement',
      'Sequential disk power-on protects against startup impulse current',
      'Redundant hot-swappable fans improve system availability',
      'Multistage fan-speed control optimizes cooling efficiency',
      'Intelligent heat-dissipation management reduces power consumption',
      'Designed specifically for scalable video-surveillance storage systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'de1824-v2',
    name: 'DE1824-V2',
    slug: 'de1824-v2',
    category: 'Storage',
    subcategory: 'Disk Enclosure',
    description: '24 Disk Slots Network Storage Disk Enclosure Unit',
    imageUrl: '/storage/disk3.png',
    specifications: {
      'Controller': '1',
      'HDD Slots': '24',
      'Back-end Interface': 'Primary 2-port 4×12 Gbps Mini SAS HD; Backup 2-port 2×12 Gbps Mini SAS HD',
      'Serial Port': '1',
      'Power Consumption': '250 W (fully loaded)',
      'Power Supply': '100–127 V / 200–240 V AC, 50/60 Hz',
      'Dimensions': '482 × 589 × 175 mm',
      'Weight': '<38 kg fully loaded',
      'Operating Temperature': '5°C to 40°C',
      'Certifications': 'CE, FCC, CB, RoHS, WEEE'
    },
    features: [
      'High-quality hardware architecture for reliable operation',
      '12 Gbps SAS-3 connectivity delivers high-speed data transfer',
      'High-density 24-disk design saves rack space',
      'Redundant power supplies improve system availability',
      'Supports automatic power switching if a power supply fails',
      'Hot-swappable power supplies enable online replacement',
      'Sequential HDD startup helps protect against impulse current',
      'Redundant hot-swappable fan design improves reliability',
      'Intelligent fan-speed adjustment balances cooling and power use',
      'Designed for scalable professional video-surveillance storage'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'de3148-v2-p',
    name: 'DE3148-V2@P',
    slug: 'de3148-v2-p',
    category: 'Storage',
    subcategory: 'Disk Enclosure',
    description: '48 HDD Network Storage Expand Enclosure',
    imageUrl: '/storage/disk5.png',
    specifications: {
      'Product Model': 'DE3148-V2@P',
      'Product Type': 'Network Storage Expansion Enclosure',
      'HDD Capacity': 'Up to 48 disks',
      'Interface Technology': '12 Gbps SAS-3',
      'Form Factor': '4U rack-mount',
      'Enclosure Depth': '801 mm',
      'Power Supply': 'Redundant hot-swappable units',
      'Power Protection': 'Sequential disk power-on',
      'Cooling': 'Redundant multi-stage speed fans',
      'Application': 'High-density video surveillance storage'
    },
    features: [
      'Designed specifically for professional video surveillance storage',
      'Provides high-performance and highly scalable storage expansion',
      'SAS-3 technology delivers data transfer speeds up to 12 Gbps',
      'Accommodates up to 48 disks in a space-saving 4U enclosure',
      'Redundant power supplies improve overall system reliability',
      'Supports online replacement of a failed power supply',
      'Load-balancing power design helps maintain stable operation',
      'Sequential HDD startup protects against excessive impulse current',
      'Hot-swappable redundant fans simplify system maintenance',
      'Intelligent fan-speed control balances cooling and energy consumption'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
