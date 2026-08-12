import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const connectBox: Product[] = [
  {
    id: 'gcb01-b7',
    name: 'GCB01-B7',
    slug: 'gcb01-b7',
    category: 'Smart Electrical',
    subcategory: 'Connect Box',
    description: 'UNV-Link Pro Connect Box',
    imageUrl: '/VMS/connect1.png',
    specifications: {
      'Network': '4 × RJ45 10/100 Mbps Base-TX',
      'PoE': 'Port 1, IEEE 802.3af output',
      'Voltage Test': 'PSE & DC, 1–56 V',
      'Wi-Fi': '2.4 GHz IEEE 802.11b/g/n',
      'Battery': '18650 lithium, 7500 mAh',
      'Power Input': 'DC 5 V/2 A max, USB Type-C',
      'Power Output': 'DC 12 V/1 A + DC 5 V/1 A USB Type-A',
      'Indicators': 'System, Wi-Fi and battery LEDs',
      'Dimensions': '130 × 85 × 33 mm',
      'Operating Environment': '-20°C to +60°C, ≤95% RH non-condensing'
    },
    features: [
      'Designed for convenient on-site IP camera installation and configuration',
      'Provides four Fast Ethernet ports for device connectivity',
      'Supplies PoE power to compatible cameras through Network Port 1',
      'Supports PSE voltage testing through Network Port 4',
      'Measures both PSE and DC voltage from 1 V to 56 V',
      'Supports IEEE 802.3af, 802.3at and 802.3bt PSE voltage detection',
      'Built-in Wi-Fi enables convenient wireless connectivity',
      'Large 7500 mAh rechargeable battery supports portable operation',
      'System, Wi-Fi and battery LED indicators provide clear status information',
      'Supports use with the UNV-Link Pro mobile app for camera viewing during installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
