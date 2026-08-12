import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const cables: Product[] = [
  {
    id: 'gc-cab5e-2m-in',
    name: 'GC-CAB5e-2m-IN',
    slug: 'gc-cab5e-2m-in',
    category: 'Transmission',
    subcategory: 'Cables',
    description: 'Cat5e U/UTP 2m Patch Cord',
    imageUrl: '/Transmission/cables1.png',
    specifications: {
      'Product Model': 'U/UTP CAT5e PVC Patch Cord',
      'Cable Category': 'Cat5e',
      'Cable Length': '2 m',
      'Conductor Material': '99.95% Bare Copper',
      'Conductor Size': '7 × 0.16 mm ±0.005 mm, 26 AWG',
      'Insulation Material': 'HDPE',
      'Insulation Diameter': '0.80 ±0.05 mm',
      'Sheath Material': 'PVC',
      'External Diameter': '4.6 ±0.3 mm',
      'Color': 'Grey (RAL7046)'
    },
    features: [
      'High-quality bare copper construction',
      'Excellent performance in Fluke 100-meter channel testing',
      'Supports 10BASE-T Ethernet',
      'Supports 100BASE-TX Fast Ethernet',
      'Supports 1000BASE-T Gigabit Ethernet',
      'Supports 1000BASE-TX Gigabit Ethernet',
      'Stable and reliable electrical performance',
      'Compliant with TIA-568.2-D standard',
      'Compliant with ISO/IEC 11801 standard',
      'RoHS 2.0 compliant for environmental safety'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'gc-cab6-1m-in',
    name: 'GC-CAB6-1m-IN',
    slug: 'gc-cab6-1m-in',
    category: 'Transmission',
    subcategory: 'Cables',
    description: 'Cat6 U/UTP Patch Cord, 1m',
    imageUrl: '/Transmission/cables.png',
    specifications: {
      'Product Model': 'U/UTP CAT6 PVC Patch Cord',
      'Cable Category': 'Cat6 U/UTP',
      'Conductor': '99.95% Bare Copper',
      'Conductor Size': '7 × 0.16 mm ±0.005 mm, 26 AWG',
      'Insulation Material': 'HDPE',
      'Insulation Diameter': '0.80 ±0.05 mm',
      'Sheath Material': 'PVC',
      'External Diameter': '5.5 ±0.3 mm',
      'Cable Color': 'Blue (RAL5015)',
      'Cable Length': '1 meter'
    },
    features: [
      'Provides stable and reliable network connectivity',
      'Excellent performance in Fluke 100-meter channel testing',
      'Supports 10BASE-T Ethernet networks',
      'Supports 100BASE-TX Fast Ethernet',
      'Supports 1000BASE-T Gigabit Ethernet',
      'Supports 1000BASE-TX Gigabit Ethernet',
      'Bare copper construction provides reliable conductivity',
      'Compliant with TIA-568.2-D cabling standard',
      'Compliant with ISO/IEC 11801 standard',
      'RoHS 2.0 compliant for environmental safety'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'gc-cab5e-1m-in',
    name: 'GC-CAB5e-1m-IN',
    slug: 'gc-cab5e-1m-in',
    category: 'Transmission',
    subcategory: 'Cables',
    description: 'Cat5e U/UTP Patch Cord, 1m, Grey',
    imageUrl: '/Transmission/cables1.png',
    specifications: {
      'Product Model': 'U/UTP CAT5e PVC Patch Cord',
      'Length': '1 m',
      'Conductor Material': '99.95% Bare Copper',
      'Conductor Size': '7 × 0.16 mm ±0.005 mm, 26 AWG',
      'Insulation Material': 'HDPE',
      'Insulation Diameter': '0.80 ±0.05 mm',
      'Sheath Material': 'PVC',
      'Sheath Thickness': '0.5 ±0.05 mm',
      'External Diameter': '4.6 ±0.3 mm',
      'Standards': 'TIA-568.2-D, ISO/IEC 11801, RoHS 2.0'
    },
    features: [
      'High-quality bare copper conductor for reliable connectivity',
      'Supports 10BASE-T Ethernet networks',
      'Supports 100BASE-TX Fast Ethernet',
      'Supports 1000BASE-T / 1000BASE-TX Gigabit Ethernet',
      'Delivers stable electrical transmission performance',
      'Successfully meets Fluke 100-meter channel performance requirements',
      'Compliant with TIA-568.2-D cabling standard',
      'Compliant with ISO/IEC 11801 standard',
      'RoHS 2.0 compliant construction',
      'Compact 1-meter design ideal for short network connections'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'gc-cab6-2m-in',
    name: 'GC-CAB6-2m-IN',
    slug: 'gc-cab6-2m-in',
    category: 'Transmission',
    subcategory: 'Cables',
    description: 'Cat6 U/UTP 2m Patch Cord',
    imageUrl: '/Transmission/cables1.png',
    specifications: {
      'Product Model': 'U/UTP CAT6 PVC Patch Cord',
      'Length': '2 m',
      'Conductor Material': '99.95% Bare Copper',
      'Conductor Size': '7 × 0.16 ± 0.005 mm, 26 AWG',
      'Insulation Material': 'HDPE',
      'Insulation Diameter': '0.80 ± 0.05 mm',
      'Sheath Material': 'PVC',
      'Sheath Thickness': '0.55 ± 0.05 mm',
      'External Diameter': '5.5 ± 0.3 mm',
      'Color': 'Blue (RAL5015)'
    },
    features: [
      'Designed for reliable high-speed network connections',
      'Supports 10BASE-T Ethernet',
      'Supports 100BASE-TX Fast Ethernet',
      'Supports 1000BASE-T Gigabit Ethernet',
      'Supports 1000BASE-TX Gigabit Ethernet',
      'Excellent performance in Fluke 100-meter channel testing',
      'Stable electrical transmission performance',
      'Compliant with TIA-568.2-D standard',
      'Compliant with ISO/IEC 11801 standard',
      'RoHS 2.0 compliant for environmental safety'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'gc-md5e-in',
    name: 'GC-MD5e-IN',
    slug: 'gc-md5e-in',
    category: 'Transmission',
    subcategory: 'Cables',
    description: 'Cat5e Unshielded Information Module',
    imageUrl: '/Transmission/cables5.png',
    specifications: {
      'Product Type': 'UTP CAT5e Punch-down Module',
      'Shell Material': 'PC',
      'Contact Material': 'Phosphor bronze, 3μ-inch gold-plated',
      'IDC Material': 'Phosphor bronze',
      'Mating Cycles': '≥750 times',
      'IDC Cycles': '≥200 times',
      'Conductor Gauge': '0.35–0.6 mm solid',
      'Voltage Rating': '125 V AC RMS',
      'Current Rating': '1.5 A @ 20°C',
      'Operating Temperature': '-25°C to +70°C'
    },
    features: [
      'Designed for reliable Cat5e network connections',
      'Unshielded (UTP) construction for standard Ethernet installations',
      'Gold-plated contacts provide excellent connection performance',
      'Separate wire peaks make conductor separation easier',
      'Supports both T568A and T568B wiring configurations',
      'Simple punch-down termination and installation',
      'Compatible with standard 110 Block tools',
      'Compatible with Krone termination tools',
      'Durable IDC contacts rated for ≥200 cycles',
      'Suitable for structured cabling, faceplates, and patch-panel applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
