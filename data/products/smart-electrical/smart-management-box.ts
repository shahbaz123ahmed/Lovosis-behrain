import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const smartManagementBox: Product[] = [
  {
    id: 'smbox02-r',
    name: 'SMBOX02-R',
    slug: 'smbox02-r',
    category: 'Smart Electrical',
    subcategory: 'Smart Management Box',
    description: 'Smart Management Box',
    imageUrl: '/VMS/smart.png',
    specifications: {
      'Power Input': 'DC 10.8–14.4 V, 12 A',
      'Input Interface': '3-pin connector',
      'PoE Ports': '8 × RJ45 10/100 Mbps',
      'PoE Standard': 'IEEE 802.3af / 802.3at',
      'PoE Budget': '30 W/port, 75 W total',
      'IP Video Input': '8 channels',
      'Bandwidth': '80 Mbps',
      'Storage': '1 × SATA, up to 16 TB HDD / 4 TB SSD',
      'Protection Rating': 'IP56',
      'Dimensions': '650 × 424 × 230 mm'
    },
    features: [
      'All-in-one intelligent operation and maintenance solution',
      'Integrates NVR, smart power management, fan and warning light',
      'Supports remote device status monitoring',
      'Provides alarm notifications through mobile app and EZCloud',
      'Automatically restarts network devices after connection failure',
      'Supports manual remote restart of individual PoE ports',
      'Power switch detection and remote control support',
      'Door-open detection for enhanced security',
      'Built-in fault reporting and analysis',
      'Integrated design simplifies installation and reduces wiring'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'smbox02',
    name: 'SMBOX02',
    slug: 'smbox02',
    category: 'Smart Electrical',
    subcategory: 'Smart Management Box',
    description: 'Overseas Intelligent Operation & Maintenance Box',
    imageUrl: '/VMS/smart.png',
    specifications: {
      'Power Input': 'DC 10.8–14.4 V, 12 A',
      'Input Port': '3-pin connector',
      'DC 12 V Output': '1-channel, 2.5 A, DC5521',
      'DC 48 V Output': '48 V, 2.5 A, 2-pin Phoenix terminal',
      'Surge Protection': '6 kV',
      'Lightning Protector': '40 kA maximum discharge current',
      'Operating Temperature': '–40°C to +70°C',
      'Operating Humidity': '≤90% RH, non-condensing',
      'Protection Rating': 'IP56',
      'Dimensions': '650 × 424 × 230 mm; weight ≤14 kg'
    },
    features: [
      'Integrates smart power management, power switch, heater, fan, and warning light',
      'Supports installation of most Uniview IPC and IP speaker models',
      'Enables remote device-status monitoring through mobile app and EZCloud',
      'Provides remote alarm and fault notifications',
      'Automatically restarts network devices when disconnection is detected',
      'Supports power information collection and power-switch monitoring',
      'Includes door-open detection and warning-light control',
      'Provides fault reporting and analysis functions',
      'Surge protector, circuit breaker, and software protection improve system safety',
      'Pre-integrated design reduces manual wiring and simplifies installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'smbox01-r-us',
    name: 'SMBOX01-R-US',
    slug: 'smbox01-r-us',
    category: 'Smart Electrical',
    subcategory: 'Smart Management Box',
    description: 'Overseas Intelligent Operation & Maintenance Box',
    imageUrl: '/VMS/smart.png',
    specifications: {
      'Power Input': 'AC 100–240 V',
      'PoE Ports': '8 × RJ45 10/100 Mbps',
      'PoE Capacity': 'Max. 30 W/port, 75 W total',
      'IP Video Input': '8 channels',
      'Network Interface': '1 × RJ45 10/100/1000 Mbps',
      'Storage': '1 × SATA; up to 16 TB HDD / 4 TB SSD',
      'Alarm I/O': '4-channel input / 2-channel output',
      'Operating Temperature': '–40°C to +60°C with HDD; up to +70°C with SSD',
      'Dimensions': '650 × 424 × 230 mm',
      'Protection Rating': 'IP56; 6 kV surge protection'
    },
    features: [
      'All-in-one integrated design simplifies system deployment',
      'Enables remote device-status monitoring through mobile app and EZCloud',
      'Provides automatic network-device restart when disconnection is detected',
      'Supports manual remote restart of individual PoE ports',
      'Three-layer protection helps guard against lightning, short circuits, overvoltage and overcurrent',
      'Thermostatic fan and heater support operation in demanding environments',
      'Supports intelligent functions including UMD, SIP and face detection',
      'Provides power information collection and power-switch monitoring',
      'Supports door-open detection, warning-light control and fault reporting',
      'Pre-wired internal design reduces manual wiring and installation complexity'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'smbox01-us',
    name: 'SMBOX01-US',
    slug: 'smbox01-us',
    category: 'Smart Electrical',
    subcategory: 'Smart Management Box',
    description: 'Overseas Intelligent Operation & Maintenance Box',
    imageUrl: '/VMS/smart.png',
    specifications: {
      'Power Input': 'AC 100–240 V',
      'AC Socket': '1-channel, 5 A US socket',
      'DC Outputs': '12 V/2.5 A and 48 V/2.3 A',
      'Maximum Discharge Current': '40 kA',
      'Surge Protection': '6 kV',
      'Operating Temperature': '–40°C to +70°C',
      'Operating Humidity': '≤90% RH, non-condensing',
      'Protection Rating': 'IP56',
      'Dimensions': '650 × 424 × 230 mm (H × W × D)',
      'Weight': '≤15 kg without camera'
    },
    features: [
      'Integrates power management, power switch, heater, fan, and warning light',
      'Supports installation of most compatible IP cameras and IP speakers',
      'Enables remote monitoring of the box and connected devices',
      'Provides real-time alarm notifications through mobile app and EZCloud',
      'Automatically restarts network devices when network disconnection is detected',
      'Three-layer protection helps guard against lightning, short circuits, overvoltage, and overcurrent',
      'Built-in thermostatic fan helps regulate internal temperature',
      'Built-in thermostatic heater supports operation in cold environments',
      'Door-open detection and fault reporting improve system security',
      'Integrated pre-wired design simplifies installation and maintenance'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
