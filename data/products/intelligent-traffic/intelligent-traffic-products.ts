import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const intelligentTrafficProducts: Product[] = [
  {
    id: 'hc191-gjn-1640-os',
    name: 'HC191-GJN-1640-OS',
    slug: 'hc191-gjn-1640-os',
    category: 'Intelligent Traffic',
    subcategory: 'Intelligent Traffic Products',
    description: '9MP Checkpoint Camera Unit',
    imageUrl: '/intelligence/int1.png',
    specifications: {
      'Sensor': '1.1" 9MP Global Shutter CMOS',
      'Resolution': '4096 × 2160',
      'Lens': '16–40 mm motorized varifocal, F1.5',
      'Minimum Illumination': '0.001 Lux',
      'Frame Rate': 'Up to 4096 × 2160 @ 50 fps',
      'Illumination': 'Warm light, up to 30 m',
      'Storage': '8GB eMMC + up to 256GB MicroSD',
      'Power Supply': '100–240 V AC, ≤16 W',
      'Operating Temperature': '−40°C to +70°C',
      'Protection Rating': 'IP65'
    },
    features: [
      'Wide-field 9MP imaging designed for traffic checkpoint applications',
      'Motorized zoom and focus simplify installation and scene adjustment',
      'Provides 24/7 color imaging with excellent low-light performance',
      'Supports automatic license plate recognition (ANPR)',
      'Recognizes vehicle type, color, manufacturer/brand and plate information',
      'Supports vehicle speed measurement from 5–300 km/h with external radar',
      'Covers up to 3 traffic lanes depending on the installation and lens setup',
      'Supports H.265, H.264 and MJPEG video compression',
      'Three independent video streams support different bandwidth requirements',
      'Supports speeding-violation capture when integrated with an external radar'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'hc191-gi-1640-os',
    name: 'HC191-GI-1640-OS',
    slug: 'hc191-gi-1640-os',
    category: 'Intelligent Traffic',
    subcategory: 'Intelligent Traffic Products',
    description: '9MP IR Checkpoint Camera Unit',
    imageUrl: '/intelligence/int1.png',
    specifications: {
      'Sensor': '1.1" 9MP Global Shutter CMOS',
      'Maximum Resolution': '4096 × 2160',
      'Minimum Illumination': '0.001 Lux',
      'Lens': '16–40 mm motorized varifocal, F1.5',
      'IR Illumination': 'Up to 30 m',
      'Video Compression': 'H.265 / H.264 / MJPEG',
      'Frame Rate': 'Up to 4096 × 2160 @ 50 fps',
      'Storage': '8GB eMMC + microSD expansion up to 256GB',
      'Power Supply': '100–240 V AC, ≤16 W',
      'Protection': 'IP65; operating temperature −40°C to +70°C'
    },
    features: [
      'Wide field of view designed for traffic checkpoint monitoring',
      'Infrared night vision captures vehicle details in low-light conditions',
      'Motorized zoom and focus simplify installation and scene adjustment',
      'Supports license plate recognition (ANPR)',
      'Recognizes vehicle type, color, manufacturer and plate attributes',
      'Supports speeding detection when used with an external radar',
      'Covers up to 3 traffic lanes depending on installation',
      'H.265 compression reduces bandwidth and storage requirements',
      'Supports three simultaneous video streams for flexible monitoring',
      '2DNR and 3DNR improve image clarity and reduce visual noise'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ivt2600-a-a16s-os',
    name: 'IVT2600@A-A16S-OS',
    slug: 'ivt2600-a-a16s-os',
    category: 'Intelligent Traffic',
    subcategory: 'Intelligent Traffic Products',
    description: '16-CH Traffic Recording Terminal Server',
    imageUrl: '/intelligence/int3.png',
    specifications: {
      'Video Decoding': 'H.264 / H.265',
      'Camera Connection': 'Maximum 16 channels',
      'Storage': '1 × 4 TB HDD included; up to 4 × 8 TB SATA HDDs',
      'Network': '20 × Gigabit RJ45 + 2 × Gigabit optical interfaces',
      'USB': '2 × USB 3.0, compatible with USB 2.0',
      'Serial Interface': '2 × RS-232 + 2 × RS-485',
      'Alarm I/O': '2 inputs + 2 outputs',
      'Power Input': 'DC 12 V, 10 A',
      'Operating Temperature': '-30°C to +70°C',
      'Dimensions': '350 × 320 × 72 mm'
    },
    features: [
      'Embedded Linux architecture provides reliable continuous operation',
      'Dual NICs support two physical networks and network isolation',
      'Supports text OSD including plate number, time, and location',
      'Supports composition of 2, 3, 4, or 6 images',
      'Provides image storage, search, viewing, export, and upload',
      'Supports direct iSCSI block storage for efficient data management',
      'Enables instant video retrieval and playback',
      'Supports data acquisition through serial ports',
      'S.M.A.R.T. support helps monitor hard disk status',
      'Die-cast aluminum chassis helps shield electromagnetic interference for stable operation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'mpr-mu1-os',
    name: 'MPR-MU1-OS',
    slug: 'mpr-mu1-os',
    category: 'Intelligent Traffic',
    subcategory: 'Intelligent Traffic Products',
    description: 'Positioning & Capture Radar (Single-Lane)',
    imageUrl: '/intelligence/int4.png',
    specifications: {
      'Lanes': '1',
      'Speed Range': '5–235 km/h',
      'Positioning Accuracy': '±0.5 m',
      'Tracking Distance': '15–45 m',
      'Operating Frequency': '24.15 GHz',
      'Communication': '1 × half-duplex RS485 / Wi-Fi',
      'Power Supply': 'DC 12 V',
      'Power Consumption': '≤3.5 W',
      'Operating Temperature': '−35°C to +85°C',
      'Protection Rating': 'IP66'
    },
    features: [
      'Achieves over 99% vehicle capture rate',
      'Provides high-precision vehicle positioning',
      'Supports bidirectional vehicle triggering',
      'Detects and captures wrong-way driving events',
      'Supports wireless setup and fine-tuning through Wi-Fi',
      'Uses FMCW, Monopulse, and Doppler radar technologies',
      'Supports both front-mount and side-mount installation',
      'Tracks vehicles across a single traffic lane',
      'Designed for reliable outdoor traffic monitoring',
      'Suitable for road sections and intelligent traffic enforcement applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'rd107-a-6-os',
    name: 'RD107@A-6-OS',
    slug: 'rd107-a-6-os',
    category: 'Intelligent Traffic',
    subcategory: 'Intelligent Traffic Products',
    description: 'Multi Lane Speed Radar',
    imageUrl: '/intelligence/int5.png',
    specifications: {
      'Number of Lanes': '6',
      'Speed Range': '10–300 km/h',
      'Tracking Distance': '18–38 m',
      'Trigger Consistency': '≤ ±0.5 m',
      'Lane Width': '2.75–5 m adjustable',
      'Center Frequency': '24.05–24.25 GHz',
      'Antenna Beam Width': '48° × 25°',
      'Power Consumption': '≤10 W',
      'Operating Temperature': '−40°C to +70°C',
      'Protection Rating': 'IP66'
    },
    features: [
      'Supports two-way vehicle triggering',
      'Supports retrograde/reverse-direction vehicle capture',
      'Supports both front and side installation',
      'Uses advanced 24 GHz MMIC radar technology',
      'Accurately measures the speed and distance of multiple vehicles',
      'High-gain, low-sidelobe antenna reduces adjacent-lane interference',
      'Provides precise multi-target vehicle positioning',
      'Fixed-point capture position error is within 1 meter',
      'Achieves a vehicle capture rate above 99%',
      'Reliable operation in challenging conditions including light, dust, rain, and snow'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
