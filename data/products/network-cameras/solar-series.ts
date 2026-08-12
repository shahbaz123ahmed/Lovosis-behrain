import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const solarSeries: Product[] = [
  {
    id: 'slr-b320p60',
    name: 'SLR-B320P60',
    slug: 'slr-b320p60',
    category: 'Network Cameras',
    subcategory: 'Solar Series',
    description: '320Wh/60W Solar Power System',
    imageUrl: '/Owlview_Series/solar.png',
    specifications: {
      'Battery Capacity': '100 Ah',
      'Rated Energy': '320 Wh',
      'Battery Output Voltage': '9–12.6 V',
      'Maximum Output Current': '1.5 A',
      'Solar Panel Peak Power': '60 W',
      'Solar Panel Operating Voltage': '4.5 V',
      'Solar Panel Operating Current': '13.33 A',
      'Cell Conversion Efficiency': '≥22%',
      'Battery Dimensions': '419.2 × 118 × 336.5 mm',
      'Solar Panel Dimensions': '765 × 395 × 25 mm'
    },
    features: [
      'Modular design simplifies battery assembly and solar-panel installation',
      'High-safety lithium battery cells provide reliable long-term operation',
      'Self-developed high-efficiency solar controller enables faster charging',
      'Visual status indicator provides convenient operating-status monitoring',
      'Multiple protections include overcharge, undervoltage, and high/low-temperature protection',
      'Metal casing provides wind and rain resistance for harsh outdoor environments',
      'Built-in heating protects battery performance and charging safety in low temperatures',
      'Monocrystalline silicon cells provide high photoelectric conversion efficiency',
      'Battery percentage can be displayed as OSD on compatible camera live video',
      'Supports 4G camera surveillance in locations without wired power or network access'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
