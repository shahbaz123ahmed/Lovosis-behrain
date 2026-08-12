import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const recorders: Product[] = [
  {
    id: 'deu1016-b',
    name: 'DEU1016-B',
    slug: 'deu1016-b',
    category: 'Accessories',
    subcategory: 'Recorders',
    description: '16 HDDs 3U Disk Enclosure',
    imageUrl: '/Accessories/rec1.png',
    specifications: {
      'HDD Interfaces': '16 × SATA',
      'HDD Capacity': 'Up to 24 TB per disk',
      'External Interface': '1 × miniSAS',
      'Serial Interface': '1 × RS232',
      'Power Supply': 'AC 100–240 V',
      'Power Consumption': '<160 W with 16 HDDs',
      'Operating Temperature': '-10°C to +55°C',
      'Operating Humidity': '5%–95% RH, non-condensing',
      'Dimensions': '482 × 477 × 131 mm (3U)',
      'Weight': '<10 kg without HDDs'
    },
    features: [
      'High-density storage expansion for surveillance systems',
      'Accommodates up to 16 hard disks in a single enclosure',
      'Supports large-capacity HDDs up to 24 TB each',
      'Space-saving 3U rack-mounted construction',
      'Compact 477 mm depth for standard rack installations',
      'Sequential disk startup helps protect against impulse current',
      'miniSAS interface provides high-speed external connectivity',
      'RS232 interface supports system communication',
      'Wide AC 100–240 V input range',
      'Designed for professional, high-capacity video storage applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'pwr-dc12-350a-in',
    name: 'PWR-DC12-350A-IN',
    slug: 'pwr-dc12-350a-in',
    category: 'Accessories',
    subcategory: 'Recorders',
    description: '350W Power Accessories Module',
    imageUrl: '/Accessories/rec2.png',
    specifications: {
      'AC Input': '90–264V AC, 47–63Hz',
      'Input Current': '≤6.3A @ 100–240V AC',
      'Power Factor': '≥0.95',
      'DC Output': '+12V DC/29A; +12V Standby/2.1A',
      'Output Power': '350W',
      'Output Efficiency': '≥89% @ 220V AC/29A',
      'Protection': 'Short circuit, overload, overvoltage, hot-plug & over-temperature',
      'Operating Temperature': '0°C to 50°C',
      'Working Humidity': '10%–90%',
      'Dimensions (D × H × W)': '185 × 40 × 73.5 mm'
    },
    features: [
      'Provides reliable 350W power output for compatible recorder systems',
      'Supports a wide 90–264V AC input range',
      'Designed for redundant power applications in high-capacity NVR systems',
      'Provides short-circuit protection',
      'Includes overload and overvoltage protection',
      'Supports hot-plug protection for safer maintenance',
      'Integrated over-temperature protection improves reliability',
      'LED indicators provide clear normal and abnormal status indication',
      'Ventilating fan design provides effective heat dissipation',
      'Complies with CB, FCC, and UL approved standards'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'pwr-dc12-350a',
    name: 'PWR-DC12-350A',
    slug: 'pwr-dc12-350a',
    category: 'Accessories',
    subcategory: 'Recorders',
    description: '350W CRPS Power Supply',
    imageUrl: '/Accessories/rec2.png',
    specifications: {
      'AC Input Voltage': '90–264V AC',
      'Input Frequency': '47–63 Hz',
      'Input Current': '≤6.3A @ 100–240V AC',
      'Power Factor': '≥0.95',
      'DC Output': '+12V DC/29A, +12V Standby/2.1A',
      'Output Power': '350W',
      'Output Efficiency': '≥89% at 220V AC/29A',
      'Working Temperature': '0°C to 50°C',
      'Working Humidity': '10%–90%',
      'Dimensions (D × H × W)': '185 × 40 × 73.5 mm'
    },
    features: [
      'Provides reliable 350W power output for compatible equipment',
      'Supports a wide AC input range for flexible deployment',
      'Delivers stable +12V DC main and standby outputs',
      'Provides short-circuit protection for enhanced safety',
      'Includes overload and overvoltage protection',
      'Supports hot-plug protection for convenient maintenance',
      'Includes over-temperature protection',
      'Built-in fan provides efficient heat dissipation',
      'Status indicator shows green for normal and yellow for abnormal operation',
      'Complies with CB, FCC, and UL approved standards'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'pwr-dc12-550a-in',
    name: 'PWR-DC12-550A-IN',
    slug: 'pwr-dc12-550a-in',
    category: 'Accessories',
    subcategory: 'Recorders',
    description: '550W Power Accessories Module',
    imageUrl: '/Accessories/REC4.png',
    specifications: {
      'AC Input Voltage': '90–264V AC',
      'Input Frequency': '47–63Hz',
      'Input Current': '≤8A @ 100–240V AC',
      'Power Factor': '≥0.95',
      'DC Output': '+12V DC / 44A, +12Vsb / 2.1A',
      'Output Power': '550W',
      'Output Efficiency': '≥89% at 220V AC / 44A',
      'Working Temperature': '0°C to 50°C',
      'Working Humidity': '10%–90%',
      'Dimensions': '185 × 39 × 73.5 mm (D × H × W)'
    },
    features: [
      'Designed as a reliable power module for compatible Uniview recorders',
      'Delivers up to 550W of output power',
      'Supports a wide 90–264V AC input voltage range',
      'Provides short-circuit protection for improved system safety',
      'Includes overload and overvoltage protection',
      'Supports hot-plug protection for safer maintenance',
      'Built-in over-temperature protection enhances reliability',
      'Green indicator shows normal operating status',
      'Yellow indicator provides abnormal status indication',
      'Rear ventilation fan provides efficient heat dissipation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
