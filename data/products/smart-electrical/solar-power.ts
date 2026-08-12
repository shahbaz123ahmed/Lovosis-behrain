import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const solarPower: Product[] = [
  {
    id: 'slr-b320p60',
    name: 'SLR-B320P60',
    slug: 'slr-b320p60',
    category: 'Smart Electrical',
    subcategory: 'Solar Power',
    description: '320Wh/60W Solar Power System',
    imageUrl: '/VMS/solar1.png',
    specifications: {
      'Battery Capacity': '100 Ah',
      'Rated Energy': '320 Wh',
      'Battery Output': '9–12.6 V',
      'Solar Panel Peak Power': '60 W',
      'Panel Operating Voltage': '4.5 V',
      'Panel Operating Current': '13.33 A',
      'Cell Conversion Efficiency': '≥22%',
      'Communication': 'RS485 supported',
      'Operating Temperature': '–20°C to 55°C discharge / –20°C to 45°C charge',
      'Suitable Pole Diameter': '67–110 mm'
    },
    features: [
      'Modular design simplifies battery assembly and installation',
      'Hanging design enables convenient solar panel mounting',
      'High-safety, reliable, long-life lithium battery cells',
      'High-efficiency solar controller enables faster charging',
      'Visual status indicator provides operating status information',
      'High/low-temperature battery protection enhances reliability',
      'Overcharge and undervoltage protection safeguards the system',
      'Metal casing provides wind and rain resistance',
      'Supports battery-percentage OSD overlay on camera live video',
      'Compatible with 4G cameras for locations without power or wired networks'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
