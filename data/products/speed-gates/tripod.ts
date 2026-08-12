import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const tripod: Product[] = [
  {
    id: 'ofg5311-r-c',
    name: 'OFG5311-R-C',
    slug: 'ofg5311-r-c',
    category: 'Speed Gates',
    subcategory: 'Tripod',
    description: 'Outdoor Tripod Turnstile (Right Machine)',
    imageUrl: '/VMS/tripod1.png',
    specifications: {
      'Lane Width': '550 mm',
      'Dimensions': '1200 × 220 × 980 mm',
      'Barrier Material': 'Stainless-steel round rod',
      'Pedestal Material': '1.0 mm side / 1.2 mm top',
      'Throughput': '20–30 persons/minute',
      'Power Supply': 'AC 100–240 V, 50/60 Hz',
      'Power Consumption': '40 W',
      'Weight': '45 kg (empty pedestal: 30 kg)',
      'Operating Environment': '−20°C to +60°C; 5%–80% RH',
      'Protection & Reliability': 'IP54; MCBF 3 million cycles'
    },
    features: [
      'Pedestrian-only controlled access',
      'Automatic opening for unobstructed access during power failure',
      'Electric leakage protection for pedestrian safety',
      'LED indication for passing direction and status',
      'Anti-rush function prevents unauthorized entry',
      'Anti-impact protection safeguards the controller',
      'Automatic reset cancels unused passing permission',
      'Solenoid-valve unlocking for fast and reliable operation',
      'STC CPU-based control for high stability',
      'Supports multiple authentication methods when connected to compatible smart terminals'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ofg5312-r-c',
    name: 'OFG5312-R-C',
    slug: 'ofg5312-r-c',
    category: 'Speed Gates',
    subcategory: 'Tripod',
    description: 'Outdoor Vertical Tripod Turnstile',
    imageUrl: '/VMS/tripod2.png',
    specifications: {
      'Lane Width': '550 mm',
      'Barrier Material': 'Stainless-steel round rod',
      'Dimensions (L × W × H)': '980 × 430 × 320 mm',
      'Pedestal': '1.0 mm side / 1.2 mm top thickness',
      'Power Supply': 'AC 100–240 V, 50–60 Hz',
      'Power Consumption': '40 W',
      'Throughput': '20–30 persons/minute',
      'Interfaces': '2× IO input, 2× IO output, 1× RS232',
      'Weight': '35 kg',
      'MCBF': '3 million cycles'
    },
    features: [
      'Automatic arm drop during power failure for unobstructed passage',
      'Electric leakage protection enhances pedestrian safety',
      'LED indicators clearly display passage direction and status',
      'Anti-rush function prevents unauthorized passage without an opening signal',
      'Anti-impact protection helps safeguard the controller from external impacts',
      'Automatic reset cancels unused passage permission after the valid duration',
      'Solenoid unlocking design provides fast and reliable operation',
      'STC CPU-based control system offers high stability and long service life',
      'Supports integration with smart terminals for card and password authentication',
      'Supports passage counting through switching-value signals'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
