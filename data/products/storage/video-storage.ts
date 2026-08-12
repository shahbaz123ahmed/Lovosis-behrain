import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const videoStorage: Product[] = [
  {
    id: 'vx1848-v3',
    name: 'VX1848-V3',
    slug: 'vx1848-v3',
    category: 'Storage',
    subcategory: 'Video Storage',
    description: '48 HDD Network Storage Device',
    imageUrl: '/storage/vs1.png',
    specifications: {
      'Processor': 'Intel 64-bit multi-core CPU',
      'Memory': '8 GB, expandable up to 128 GB',
      'HDD Slots': '48',
      'Disk Capacity': '4 TB–24 TB per disk',
      'Disk Interface': 'SATA',
      'Recording Performance': '512 channels / 1024 Mbps',
      'Network': '5 × 2.5GE; optional 2.5GE/10GE modules',
      'Power Supply': '100–127 V / 200–240 V AC, 50/60 Hz',
      'Operating Temperature': '5°C to 40°C',
      'Dimensions': '179 × 477 × 801 mm'
    },
    features: [
      'Enterprise-grade network storage designed for large video surveillance systems',
      'Provides up to 48 SATA interfaces for high-capacity storage',
      'Supports dedicated and global hot-spare disks',
      'Offers multiple RAID configurations for enhanced data protection',
      'Supports up to 2048 host connections',
      'Supports up to 2048 logical resources',
      'Provides optional Mini SAS HD expansion interfaces',
      'Equipped with 3 PCIe slots for system expansion',
      'Supports indicator, email, SNMP Trap and SMS alarm notifications',
      'Optional redundant power and battery modules improve system reliability'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'vx1824-v3',
    name: 'VX1824-V3',
    slug: 'vx1824-v3',
    category: 'Storage',
    subcategory: 'Video Storage',
    description: '24 HDD Network Storage Device',
    imageUrl: '/storage/vs1.png',
    specifications: {
      'Controller': '1',
      'CPU': 'Intel 64-bit multi-core processor',
      'Memory': '8 GB, expandable up to 128 GB',
      'HDD Slots': '24',
      'Disk Interface': 'SATA',
      'Disk Capacity': '4–24 TB',
      'Recording Performance': '512 channels / 1024 Mbps',
      'RAID': 'JBOD, RAID 0/1/10/5/50/6',
      'Power Supply': '100–127 V / 200–240 V AC, 50/60 Hz',
      'Dimensions': '175 × 481.6 × 589 mm'
    },
    features: [
      'Intelligent RAID Engine improves storage reliability and performance',
      'RAID can be used immediately while initialization continues in the background',
      'Maintains service performance even when RAID is degraded',
      'Optimized video cache algorithms improve read/write performance',
      'SSD Cache support enhances access performance for frequently used data',
      'Supports dedicated and global hot-spare disks',
      'Supports iSCSI, NFS, SMB, FTP, and AFP protocols',
      'Supports up to 2,048 host connections',
      'Provides indicator, email, SNMP Trap, and SMS alarm options',
      'Supports expandable Mini SAS HD interfaces for additional storage'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ni-vx1636-c-v3',
    name: 'NI-VX1636-C@V3',
    slug: 'ni-vx1636-c-v3',
    category: 'Storage',
    subcategory: 'Video Storage',
    description: '36-Bay Network Video Storage',
    imageUrl: '/storage/vs1.png',
    specifications: {
      'Controller': '1',
      'CPU': 'Intel 64-bit multi-core processor',
      'Memory': '4 GB',
      'HDD Slots': '36',
      'Disk Interface': 'SATA',
      'Disk Capacity': '4–24 TB per disk',
      'RAID': 'JBOD, RAID 0/1/5/6',
      'Network': '3 × 10/100/1000 Mbps Ethernet ports',
      'Power Supply': '100–127 V / 200–240 V AC, 50/60 Hz',
      'Dimensions': '175 × 482 × 583 mm (H × W × D)'
    },
    features: [
      'Intelligent RAID Engine improves storage reliability',
      'RAID can be used immediately while initialization continues in the background',
      'Maintains service performance during degraded RAID conditions',
      'Optimized for simultaneous video reading and writing',
      'Intelligent cache management improves disk access performance',
      'Supports dedicated and global hot-spare disks',
      'Provides flexible RAID configurations for surveillance storage',
      'Supports multiple alarm methods including indicator, email and SNMP Trap',
      'Expandable network connectivity through optional 2.5GE and 10GE modules',
      'Designed for large-scale, high-capacity video surveillance storage'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ni-vx1648-c-v3',
    name: 'NI-VX1648-C@V3',
    slug: 'ni-vx1648-c-v3',
    category: 'Storage',
    subcategory: 'Video Storage',
    description: '48-HDD Network Video Storage',
    imageUrl: '/storage/vs1.png',
    specifications: {
      'HDD Slots': '48',
      'Disk Capacity': '4–24 TB per disk',
      'Disk Interface': 'SATA',
      'Memory': '4 GB',
      'Recording': '320 channels / 640 Mbps',
      'Forwarding': '160 channels / 320 Mbps',
      'Playback': '32 channels / 64 Mbps',
      'Power Supply': '100–127 V / 200–240 V AC, 50/60 Hz',
      'Operating Temperature': '5°C to 40°C',
      'Dimensions': '178 × 482 × 801 mm (H × W × D)'
    },
    features: [
      'Intelligent RAID Engine (ISET) enhances storage reliability',
      'RAID can be used immediately while initialization continues in the background',
      'Maintains service performance even during degraded RAID conditions',
      'Optimized video cache algorithms improve read/write performance',
      'Supports automatic disk inspection and repair',
      'Dynamically adjusts RAID reconstruction speed according to system conditions',
      'Supports dedicated and global hot-spare disks',
      'Intelligent cache management helps reduce unnecessary HDD read/write operations',
      'Multistage fan control and disk hibernation help reduce power consumption',
      'Supports indicator, email, SNMP Trap, and SMS alarm functions'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'vx1612-c-v3',
    name: 'VX1612-C@V3',
    slug: 'vx1612-c-v3',
    category: 'Storage',
    subcategory: 'Video Storage',
    description: '12-HDD Network Video Storage',
    imageUrl: '/storage/vs5.png',
    specifications: {
      'HDD Slots': '12',
      'Disk Interface': 'SATA',
      'Disk Capacity': '4–24 TB per supported disk',
      'CPU': 'Intel 64-bit multi-core processor',
      'Memory': '4 GB',
      'RAID': 'JBOD, RAID 0/1/5/6 + hot spare',
      'Network': '3 × 10/100/1000 Mbps Ethernet',
      'Power Supply': '100–127 V / 200–240 V AC, 50/60 Hz',
      'Power Consumption': '<186 W (fully configured)',
      'Dimensions': '89 × 480 × 583 mm (H × W × D)'
    },
    features: [
      'Intelligent RAID Engine provides reliable and efficient storage management',
      'RAID arrays can be used immediately while initialization continues in the background',
      'Automatic disk inspection and repair improves storage reliability',
      'Super Error Correction helps maintain services during multiple disk errors',
      'Fast disk reconstruction reduces recovery time and risk of data loss',
      'Disk pre-copying transfers data from at-risk disks to hot-spare disks',
      'Optimized video cache algorithms improve disk access performance and HDD lifespan',
      'Link aggregation and dynamic failover enhance network availability',
      'Supports environmental monitoring of CPU, network, voltage, and temperature',
      'Intelligent fan control and disk hibernation help reduce power consumption'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
