import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const flashMemory: Product[] = [
  {
    id: 'tf-128g-t-c',
    name: 'TF-128G-T-C',
    slug: 'tf-128g-t-c',
    category: 'Storage',
    subcategory: 'Flash Memory',
    description: '128GB UNV White TF Card',
    imageUrl: '/storage/mry1.png',
    specifications: {
      'Capacity': '128 GB',
      'Storage Media': 'TLC',
      'Speed Class': 'C10 / U1 / V10 / A1',
      'Max. Read Speed': '75 MB/s',
      'Max. Write Speed': '35 MB/s',
      'P/E Cycle': '500',
      'File System': 'exFAT',
      'Operating Temperature': '0°C to 70°C',
      'Storage Temperature': '-25°C to 85°C',
      'Dimensions': '11 × 15 × 1 mm'
    },
    features: [
      'Provides 128 GB high-capacity flash storage',
      'A1-rated performance for responsive everyday applications',
      'Class 10 support ensures reliable data transfer',
      'UHS Speed Class U1 support',
      'Video Speed Class V10 support',
      'Uses TLC flash memory technology',
      'Offers read speeds of up to 75 MB/s',
      'Provides write speeds of up to 35 MB/s',
      'Cost-effective design for general consumer applications',
      'Compact TF/microSD form factor for compatible devices'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tf-256g-t-c',
    name: 'TF-256G-T-C',
    slug: 'tf-256g-t-c',
    category: 'Storage',
    subcategory: 'Flash Memory',
    description: 'UNV 256GB White TF Card',
    imageUrl: '/storage/mry2.png',
    specifications: {
      'Product Type': 'TF / MicroSD Memory Card',
      'Capacity': '256 GB',
      'Storage Technology': 'TLC',
      'Speed Class': 'C10 / U1 / V10 / A1',
      'Maximum Read Speed': '75 MB/s',
      'Maximum Write Speed': '35 MB/s',
      'File System': 'exFAT',
      'P/E Cycle': '500',
      'Operating Temperature': '0°C to 70°C',
      'Dimensions': '11 × 15 × 1 mm'
    },
    features: [
      'Provides large 256 GB storage capacity',
      'A1-rated performance for responsive data access',
      'Designed as a cost-effective storage solution',
      'Suitable for general consumer applications',
      'TLC flash technology provides reliable data storage',
      'Supports Class 10 performance for smooth data transfer',
      'U1 speed class supports consistent write performance',
      'V10 rating makes it suitable for video recording applications',
      'Compact TF/microSD format for compatible devices',
      'Suitable for surveillance cameras and other compatible electronic devices'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tf-32g-t-c',
    name: 'TF-32G-T-C',
    slug: 'tf-32g-t-c',
    category: 'Storage',
    subcategory: 'Flash Memory',
    description: 'UNV 32GB White TF Card',
    imageUrl: '/storage/mry3.png',
    specifications: {
      'Capacity': '32 GB',
      'Storage Media': 'TLC',
      'Speed Class': 'C10 / U1 / V10 / A1',
      'Maximum Read Speed': '70 MB/s',
      'Maximum Write Speed': '30 MB/s',
      'P/E Cycle': '500',
      'File System': 'FAT32',
      'Operating Temperature': '0°C to 70°C',
      'Storage Temperature': '-25°C to 85°C',
      'Dimensions / Weight': '11 × 15 × 1 mm / Max. 0.33 g'
    },
    features: [
      'Provides reliable 32 GB storage for everyday applications',
      'A1-rated performance enables efficient data access',
      'Offers read speeds of up to 70 MB/s',
      'Supports write speeds of up to 30 MB/s',
      'Uses TLC flash memory for cost-effective storage',
      'Suitable for general consumer storage scenarios',
      'FAT32 file system compatibility',
      'Compact and lightweight design for easy installation',
      'Supports operation across a 0°C to 70°C temperature range',
      'Designed as a cost-effective UNV white-series memory card'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tf-64g-t-c',
    name: 'TF-64G-T-C',
    slug: 'tf-64g-t-c',
    category: 'Storage',
    subcategory: 'Flash Memory',
    description: 'UNV 64GB White TF Card',
    imageUrl: '/storage/mry4.png',
    specifications: {
      'Model': 'TF-64G-T-C',
      'Capacity': '64 GB',
      'Storage Media': 'TLC',
      'Speed Class': 'C10 / U1 / V10 / A1',
      'Max. Read Speed': '75 MB/s',
      'Max. Write Speed': '35 MB/s',
      'P/E Cycle': '500',
      'File System': 'exFAT',
      'Operating Temperature': '0°C to 70°C',
      'Dimensions': '11 × 15 × 1 mm'
    },
    features: [
      'Provides reliable 64 GB storage capacity',
      'A1 performance supports smooth general-purpose operation',
      'Read speeds of up to 75 MB/s enable quick data access',
      'Write speeds of up to 35 MB/s support efficient file storage',
      'TLC flash technology provides cost-effective storage',
      'Class 10 rating supports consistent data transfer',
      'UHS-I U1 performance suitable for everyday applications',
      'V10 rating supports standard video recording workloads',
      'Compact and lightweight design for easy installation',
      'Designed as a cost-effective solution for general consumer scenarios'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tf-256g-t-l',
    name: 'TF-256G-T-L',
    slug: 'tf-256g-t-l',
    category: 'Storage',
    subcategory: 'Flash Memory',
    description: '256GB UNV Blue TF Card',
    imageUrl: '/storage/mry5.png',
    specifications: {
      'Product Type': 'TF / microSD Memory Card',
      'Capacity': '256 GB',
      'Storage Media': 'TLC',
      'Speed Class': 'C10 / U1 / V10 / A1',
      'Max. Read Speed': '90 MB/s',
      'Max. Write Speed': '65 MB/s',
      'P/E Cycle': '800',
      'File System': 'exFAT',
      'Operating Temperature': '0°C to 70°C',
      'Dimensions': '11 × 15 × 1 mm'
    },
    features: [
      'Designed for continuous and reliable data storage',
      'Suitable for surveillance and event-recording applications',
      'Provides high compatibility with supported devices',
      'Offers long-term stable storage performance',
      'Supports storage health monitoring',
      'A1-rated performance for responsive data access',
      'Read speeds of up to 90 MB/s for fast data retrieval',
      'Write speeds of up to 65 MB/s for reliable recording',
      'Compact TF/microSD form factor for easy installation',
      'Cost-effective solution for general storage applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
