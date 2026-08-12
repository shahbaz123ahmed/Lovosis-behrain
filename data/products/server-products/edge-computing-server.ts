import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const edgeComputingServer: Product[] = [
  {
    id: 'vs-r5320-b2x-n-in',
    name: 'VS-R5320-B2X@N-IN',
    slug: 'vs-r5320-b2x-n-in',
    category: 'Server Products',
    subcategory: 'Edge Computing Server',
    description: '2U Universal High-End CPU Server',
    imageUrl: '/server-prodcuts/c1.png',
    specifications: {
      'CPU': '2 × Intel Xeon 4310; supports dual 3rd-gen Intel Xeon Scalable processors',
      'Memory': '4 × 32 GB DDR4 RAM; 32 DIMM slots total',
      'Standard Storage': '1 × 4 TB SATA HDD',
      'Drive Expansion': 'Up to 12 × 2.5/3.5-inch SAS/SATA/SSD drives',
      'Network': '2 × GE ports with PCIe network expansion support',
      'Management': '1 × 1000 Mbps dedicated IPMI port',
      'Expansion': '6 × PCIe 4.0 slots',
      'Power Supply': '1+1 redundant power',
      'Dimensions': '87.8 × 446 × 794 mm (H × W × D)',
      'Operating Temperature': '5°C to 40°C'
    },
    features: [
      'High-performance 2U dual-socket rack server architecture',
      'Supports two 3rd-generation Intel Xeon Scalable processors',
      'High-speed DDR4 3200 MHz memory architecture',
      '32 memory slots provide extensive RAM expansion capability',
      'Flexible storage configuration with SAS, SATA and SSD support',
      'Storage capacity expandable from 4 to 12 front drive bays',
      'Supports optional dual-Gigabit or dual-10GE network expansion',
      'Dedicated Gigabit interface for IPMI remote management',
      'Intelligent fan-speed control reduces energy use and system noise',
      'Redundant power architecture improves system availability and reliability'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'vs-r5320-b1h-n-in',
    name: 'VS-R5320-B1H@N-IN',
    slug: 'vs-r5320-b1h-n-in',
    category: 'Server Products',
    subcategory: 'Edge Computing Server',
    description: '2U Universal Single CPU Server',
    imageUrl: '/server-prodcuts/c2.png',
    specifications: {
      'CPU': 'Intel Xeon 4310 × 1; supports 3rd-gen Intel Xeon Scalable processors',
      'RAM': '32 GB DDR4, 16 total memory slots',
      'Standard Storage': '1 × 4 TB SATA HDD',
      'Drive Expansion': '12 × 2.5/3.5-inch SAS/SATA/SSD bays',
      'Network': '2 × Gigabit Ethernet, PCIe network expansion supported',
      'Management': '1 × 1000 Mbps dedicated IPMI interface',
      'Expansion': '3 × PCIe 4.0 slots',
      'Interfaces': '2 × USB 3.0 and 1 × VGA (rear)',
      'Power Supply': '1+1 redundant power',
      'Dimensions': '87.8 × 446 × 794 mm; fully loaded weight 35 kg'
    },
    features: [
      'High-performance architecture for demanding server workloads',
      'DDR4 3200 MHz memory provides high-speed data processing',
      'Flexible storage configuration supports HDD, SSD, and compatible NVMe storage',
      'Supports up to 12 front storage drives for scalable capacity',
      'Dual Gigabit Ethernet ports provide reliable data transmission',
      'Supports optional network expansion through PCIe',
      'Dedicated Gigabit IPMI interface enables remote server management',
      '1+1 redundant power design improves system availability',
      'Intelligent fan-speed adjustment helps reduce noise and energy consumption',
      'Energy-efficient design dynamically manages system power according to workload'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'vs-r5320-b2t-n-in',
    name: 'VS-R5320-B2T@N-IN',
    slug: 'vs-r5320-b2t-n-in',
    category: 'Server Products',
    subcategory: 'Edge Computing Server',
    description: '2U Universal Mid-End CPU Server',
    imageUrl: '/server-prodcuts/c2.png',
    specifications: {
      'CPU': '2 × Intel Xeon 4310',
      'Memory': '2 × 32 GB; 16 RAM slots total',
      'Standard Storage': '1 × 4 TB SATA HDD',
      'Drive Expansion': '12 × 2.5/3.5" SAS/SATA/SSD',
      'Network': '2 × Gigabit Ethernet',
      'Management': '1 × Gigabit IPMI management port',
      'Expansion': '3 × PCIe 4.0 slots',
      'USB / Display': '2 × USB 3.0 + 1 × VGA',
      'Power Supply': '1+1 redundant',
      'Dimensions': '87.8 × 446 × 794 mm; up to 35 kg fully loaded'
    },
    features: [
      'High-performance 2U rack-mount server architecture',
      'Dual-processor design provides powerful computing capability',
      'DDR4 3200 MHz memory delivers high-speed data processing',
      'Supports flexible SAS, SATA, SSD, and NVMe storage configurations',
      'Provides 12 front HDD bays for scalable storage expansion',
      'Supports network load balancing, link aggregation, and redundancy',
      'Dedicated Gigabit IPMI interface enables remote server management',
      '1+1 redundant power supplies improve system reliability',
      'Intelligent fan-speed adjustment reduces noise and energy consumption',
      'Dynamic frequency reduction helps lower power usage during light workloads'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
