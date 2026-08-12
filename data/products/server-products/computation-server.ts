import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const computationServer: Product[] = [
  {
    id: 'dx204-h',
    name: 'DX204-H',
    slug: 'dx204-h',
    category: 'Server Products',
    subcategory: 'Computation Server',
    description: 'Quad-Core 4-HDD Edge Computing Server',
    imageUrl: '/server-prodcuts/e1.png',
    specifications: {
      'OS': 'Ubuntu 20.04',
      'CPU': 'Intel® Celeron® Processor J6412',
      'Memory': '4 GB DDR4, expandable to 32 GB',
      'HDD': '4 × SATA 3.0, 2.5"/3.5" HDD/SSD compatible',
      'M.2 Storage': '2 × NVMe slots, one supporting SATA 3.0',
      'Network': '2 × GE + PCIe 3.0 for 10GbE expansion',
      'Interfaces': '2 × USB 3.0 + 1 × HDMI 2.0',
      'eMMC': '64 GB standard',
      'Dimensions': '226 × 246 × 186 mm',
      'Operating Temperature': '0°C to +45°C'
    },
    features: [
      'Enterprise-grade 4-HDD edge computing server',
      'Supports deployment of various applications',
      'Provides high-speed storage and computing resources',
      'Supports 3.5-inch and 2.5-inch SATA HDD/SSD drives',
      'Dual SO-DIMM slots allow memory expansion up to 32 GB',
      'Dual M.2 slots provide high-speed NVMe storage expansion',
      'Supports 10 Gigabit network card expansion through PCIe 3.0',
      'HDMI 2.0 provides high-resolution 4K display output',
      'Two USB 3.0 ports support high-speed peripheral connectivity',
      'Compact tower design suitable for edge computing deployments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'dx208-h',
    name: 'DX208-H',
    slug: 'dx208-h',
    category: 'Server Products',
    subcategory: 'Computation Server',
    description: 'Quad-Core 8-HDD Edge Computing Server',
    imageUrl: '/server-prodcuts/e2.png',
    specifications: {
      'CPU': 'Intel® Celeron® Processor J6412',
      'RAM': '4 GB DDR4, expandable to 32 GB',
      'Storage Bays': '8 × SATA 3.0, 2.5"/3.5" HDD/SSD',
      'M.2 Slots': '2 × NVMe, one supporting SATA 3.0',
      'Network': '2 × GE + 1 × PCIe 3.0',
      'USB': '2 × USB 3.0',
      'HDMI': 'HDMI 2.0, up to 4096 × 2160 @ 60 Hz',
      'eMMC': '64 GB standard',
      'Dimensions': '350 × 246 × 186 mm',
      'Operating Temperature': '0°C to +45°C'
    },
    features: [
      'Enterprise-grade 8-disk tower server',
      'Supports deployment of various applications',
      'Designed for edge computing and storage workloads',
      'High-speed data access and transmission',
      'Supports up to eight 2.5-inch or 3.5-inch SATA HDD/SSDs',
      'Dual M.2 interfaces for high-speed SSD storage',
      'RAM expansion up to 32 GB',
      'Supports optional 10 Gigabit network card expansion',
      'HDMI output enables direct display connectivity',
      'Compact tower design suitable for small and medium-sized deployments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
