import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const accessControl: Product[] = [
  {
    id: 'oep-gm6-r',
    name: 'OEP-GM6-R',
    slug: 'oep-gm6-r',
    category: 'Accessories',
    subcategory: 'Access Control',
    description: 'Infrared Induction Door Exit Button',
    imageUrl: '/Accessories/acsstrl1.png',
    specifications: {
      'Product Type': 'Infrared Induction Switch Button',
      'Material': 'Stainless steel',
      'Sensing Range': '5–10 cm',
      'Operating Voltage': 'DC 12V',
      'Dimensions': '86 × 86 × 37 mm',
      'Weight': '0.3 kg',
      'Operating Temperature': '–30°C to +60°C',
      'Operating Humidity': '≤95%',
      'Installation': '86 mm junction box',
      'Certification': 'CE / FCC / RoHS'
    },
    features: [
      'Touch-free infrared sensing for convenient door release',
      'Helps provide hygienic contactless access operation',
      'Elegant and professional stainless-steel appearance',
      'Designed for access-control door systems',
      'Reliable infrared detection from 5–10 cm',
      'Easy installation using a standard 86 mm junction box',
      'Highly durable design for frequent daily operation',
      'Suitable for commercial and institutional environments',
      'Operates reliably in temperatures from –30°C to +60°C',
      'Supports up to 95% operating humidity'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oep-gm5',
    name: 'OEP-GM5',
    slug: 'oep-gm5',
    category: 'Accessories',
    subcategory: 'Access Control',
    description: 'Door Exit Button',
    imageUrl: '/Accessories/acsctrl2.png',
    specifications: {
      'Product Type': 'Door Exit Button',
      'Material': 'Stainless steel casing',
      'Operating Voltage': 'DC 12V',
      'Output Contact': 'NO / COM',
      'Dimensions': '86 × 86 × 32 mm',
      'Weight': 'Approx. 0.1 kg',
      'Operating Temperature': '-30°C to +60°C',
      'Operating Humidity': '≤95%',
      'Durability': '500,000 fatigue tests',
      'Certification': 'CE / FCC / RoHS'
    },
    features: [
      'Professional circuit design for reliable operation',
      'Designed to minimize mechanical failure',
      'Durable stainless steel construction',
      'Elegant and professional appearance',
      'Fire-proof and flame-retardant materials',
      'Tested through 500,000 fatigue cycles',
      'Compact design for convenient installation',
      'Suitable for access control door systems',
      'Built for frequent daily operation',
      'Suitable for offices, hotels, schools, factories, airports, and other controlled-access environments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oep-gp2',
    name: 'OEP-GP2',
    slug: 'oep-gp2',
    category: 'Accessories',
    subcategory: 'Access Control',
    description: 'Door Exit Button',
    imageUrl: '/Accessories/acsctrl3.png',
    specifications: {
      'Product Type': 'Door Exit / Open Door Button',
      'Material': 'Plastic casing',
      'Power Supply': 'DC 12V',
      'Dimensions': '86 × 86 × 25 mm',
      'Operating Temperature': '–30°C to +60°C',
      'Operating Humidity': '≤95%',
      'Weight': '0.05 kg',
      'Durability': '500,000 operating-cycle tests',
      'Installation': 'Standard junction box',
      'Certification': 'CE / FCC / RoHS'
    },
    features: [
      'Simple, modern, and elegant appearance',
      'Designed for access-control door release applications',
      'Standard junction box enables easy installation',
      'Durable construction for frequent daily operation',
      'Successfully tested for 500,000 operating cycles',
      'Compact design requires minimal installation space',
      'Suitable for a wide range of access-control environments',
      'Supports operation in temperatures from –30°C to +60°C',
      'Supports operating humidity up to 95%',
      'Lightweight design for convenient mounting'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oep-gp6',
    name: 'OEP-GP6',
    slug: 'oep-gp6',
    category: 'Accessories',
    subcategory: 'Access Control',
    description: 'Emergency Exit Button',
    imageUrl: '/Accessories/acsctrl4.png',
    specifications: {
      'Product Type': 'Emergency Exit Button',
      'Material': 'Plastic Casing',
      'Dimensions': '86 × 86 × 50 mm',
      'Power Supply': 'DC 30V',
      'Operating Temperature': '-30°C to +60°C',
      'Operating Humidity': '≤95%',
      'Weight': '0.2 kg',
      'Certifications': 'CE / FCC / RoHS',
      'Model': 'OEP-GP6',
      'Durability': '500,000 fatigue tests'
    },
    features: [
      'Simple and modern design',
      'Elegant appearance for professional installations',
      'Designed for access control systems',
      'Standard junction-box installation',
      'Easy and convenient mounting',
      'Durable plastic construction',
      'Tested for 500,000 operations',
      'Reliable for frequent daily use',
      'Suitable for a wide range of access-control environments',
      'Suitable for banks, hotels, schools, airports, factories and similar facilities'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'oep-sp11',
    name: 'OEP-SP11',
    slug: 'oep-sp11',
    category: 'Accessories',
    subcategory: 'Access Control',
    description: 'Power Adapter / Power Emboitement',
    imageUrl: '/Accessories/acsctrl5.png',
    specifications: {
      'Model': 'OEP-SP11',
      'Device Type': 'Power Adapter',
      'Input Voltage': '100–240V AC',
      'Output Voltage': '12V DC',
      'Minimum Operating Temperature': '-10°C',
      'Maximum Operating Temperature': '+45°C',
      'Minimum Operating Humidity': '10%',
      'Maximum Operating Humidity': '90%',
      'MCBF': '100,000 hours',
      'Application': 'Video Intercom Power Supply'
    },
    features: [
      'Designed for Uniview video intercom systems',
      'Provides stable 12V DC power output',
      'Supports universal 100–240V AC input',
      'Suitable for indoor installations',
      'Compact power solution',
      'Reliable continuous operation',
      'Designed for long service life',
      'Supports operation across a broad temperature range',
      'Suitable for integration with compatible indoor stations',
      '100,000-hour MCBF rating'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
