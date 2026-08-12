import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const storage: Product[] = [
  {
    id: 'bat-la5800',
    name: 'BAT-LA5800',
    slug: 'bat-la5800',
    category: 'Accessories',
    subcategory: 'Storage',
    description: 'Lead-Acid Battery Module',
    imageUrl: '/Accessories/s1.png',
    specifications: {
      'Product Model': 'BAT-LA5800',
      'Product Type': 'Battery Module',
      'Battery Type': 'Lead-acid',
      'Module Capacity': '34 W',
      'Discharge Rate': '15-minute rate',
      'End Voltage': '1.67 V per cell',
      'Capacity Reference Temperature': '25°C',
      'Working Temperature': '5°C to 35°C',
      'Primary Function': 'Cache-data power-loss protection',
      'Application': 'Uniview network/video storage systems'
    },
    features: [
      'Provides reliable backup power for storage systems',
      'Protects cached data during unexpected power failure',
      'Enables secure cache-data writing to the data safe box',
      'Helps prevent critical data loss',
      'Uses proven lead-acid battery technology',
      'Designed specifically for compatible Uniview storage equipment',
      'Supports controlled short-duration backup operation',
      'Suitable for professional video storage environments',
      'Provides stable performance within the specified temperature range',
      'Integrates as an accessory with supported Uniview network storage systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'fb-in4xg-v3-nb',
    name: 'FB-IN4XG-V3-NB',
    slug: 'fb-in4xg-v3-nb',
    category: 'Accessories',
    subcategory: 'Storage',
    description: '4-Port 10Gb Ethernet Interface Module',
    imageUrl: '/Accessories/s2.jpg',
    specifications: {
      'Product Type': 'Ethernet Interface Module',
      'Interface Type': 'Optical port',
      'Network Ports': '4',
      'Port Speed': '10GE',
      'Optical Module': 'SFP+',
      'Wavelength': '850 nm',
      'Transmission Distance': 'Up to 300 m',
      'Connector': 'LC',
      'Working Temperature': '5°C to 35°C',
      'Application': 'Uniview network storage systems'
    },
    features: [
      'Provides four high-speed 10Gb Ethernet connections',
      'Designed for Uniview network storage systems',
      'SFP+ optical interfaces for reliable data transmission',
      'Supports high-bandwidth surveillance applications',
      'Suitable for large-scale video storage environments',
      'Enables fast data transfer between storage and network infrastructure',
      'Optical transmission helps maintain stable connectivity',
      'Supports transmission distances up to 300 meters',
      'Compact interface-card design for system integration',
      'Compatible with selected Uniview VX series network storage devices'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nd-hd-s-48',
    name: 'ND-HD-S-48',
    slug: 'nd-hd-s-48',
    category: 'Accessories',
    subcategory: 'Storage',
    description: '48 Disk Slots Single Control Storage HDD Kit',
    imageUrl: '/Accessories/s3.png',
    specifications: {
      'Model': 'ND-HD-S-48',
      'Product Type': 'Storage HDD Kit',
      'Storage Architecture': 'Single Controller',
      'Supported Disk Slots': '48',
      'HDD Kit Quantity': '24 dual-disk kits',
      'Disk Capacity per Kit': '2 HDDs',
      'Total Supported HDDs': '48',
      'Authorization': 'HDD authorization sets',
      'Application': '48-disk single-controller storage',
      'Compatibility': 'Uniview compatible network storage systems'
    },
    features: [
      'Supports 48-disk single-controller storage architecture',
      'Provides HDD authorization for supported storage systems',
      'Includes 24 dual-disk kits for full 48-disk capacity',
      'Designed for high-capacity surveillance storage',
      'Simplifies HDD deployment in compatible storage devices',
      'Suitable for continuous video surveillance environments',
      'Enables scalable storage capacity for large projects',
      'Designed for integration with Uniview network storage systems',
      'Suitable for centralized surveillance data storage',
      'Official Uniview storage accessory solution'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ni-hd-d-24',
    name: 'NI-HD-D-24',
    slug: 'ni-hd-d-24',
    category: 'Accessories',
    subcategory: 'Storage',
    description: '24 Disk Slots Dual Control Storage HDD Kit',
    imageUrl: '/Accessories/s4.png',
    specifications: {
      'Model': 'NI-HD-D-24',
      'Product Type': 'Storage HDD Kit',
      'Disk Slots': '24',
      'Controller Type': 'Dual Controller',
      'Number of HDD Kits': '24',
      'Description': '24 Disk Slots Dual Controller Storage',
      'Authorization': 'HDD Authorization Sets',
      'Storage Category': 'Storage Accessory',
      'Application': '24-disk dual-controller storage',
      'Brand': 'Uniview (UNV)'
    },
    features: [
      'Provides authorization for up to 24 HDDs',
      'Designed specifically for dual-controller storage',
      'Enables full utilization of 24 disk slots',
      'Suitable for large-scale surveillance storage deployments',
      'Simplifies HDD authorization and storage expansion',
      'Designed for professional video surveillance systems',
      'Integrates with compatible Uniview storage hardware',
      'Supports centralized high-capacity storage configurations',
      'Suitable for enterprise and security infrastructure',
      'Official Uniview storage accessory solution'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ni-hd-s-24',
    name: 'NI-HD-S-24',
    slug: 'ni-hd-s-24',
    category: 'Accessories',
    subcategory: 'Storage',
    description: '24 Disk Slots Single Control Storage HDD Kit',
    imageUrl: '/Accessories/s5.png',
    specifications: {
      'Product Type': 'Storage HDD Kit',
      'Model': 'NI-HD-S-24',
      'Storage Type': 'HDD-based storage accessory',
      'Controller Type': 'Single controller',
      'Disk Slot Compatibility': '24 slots',
      'Number of HDD Kits': '24',
      'Authorization': 'HDD authorization sets',
      'Application': 'Video surveillance storage',
      'Compatible Platform': 'Supported Uniview 24-bay storage systems',
      'Installation': 'Internal storage system accessory'
    },
    features: [
      'Provides HDD kit support for 24-slot storage systems',
      'Designed specifically for single-controller configurations',
      'Enables deployment of multiple surveillance hard drives',
      'Supports large-scale video data storage requirements',
      'Suitable for continuous surveillance recording environments',
      'Integrates with compatible Uniview network storage devices',
      'Supports expansion of storage capacity through multiple HDDs',
      'Designed for professional security and surveillance installations',
      'Simplifies HDD deployment in compatible storage platforms',
      'Suitable for enterprise and large surveillance projects'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
