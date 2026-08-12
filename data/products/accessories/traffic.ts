import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const traffic: Product[] = [
  {
    id: 'tr-up0627',
    name: 'TR-UP0627',
    slug: 'tr-up0627',
    category: 'Accessories',
    subcategory: 'Traffic',
    description: 'Universal Extended Pole Mounting Bracket',
    imageUrl: '/Accessories/trf1.png',
    imageUrls: [
      '/Accessories/trf1.png',
      '/Accessories/trf2.png',
      '/Accessories/trf3.png'
    ],
    specifications: {
      'Product Type': 'Universal extended pole bracket',
      'Application': 'Outdoor',
      'Material': 'Galvanized steel plate',
      'Pole Diameter': '100–300 mm',
      'Adjustment': 'Three adjustable hoops',
      'Maximum Load': '15 kg',
      'Dimensions': '136 × 127 × 63.6 mm',
      'Weight': '0.77 kg (with 3 hoops)',
      'Mounting': 'Horizontal or vertical pole',
      'Compatibility': '2D/3D brackets, box camera mounts and illuminator brackets'
    },
    features: [
      'Universal design for flexible mounting applications',
      'Supports horizontal and vertical pole installation',
      'Adjustable hoops accommodate different pole diameters',
      'Compatible with 2D mounting brackets',
      'Compatible with 3D mounting brackets',
      'Supports box camera mounting brackets',
      'Suitable for illuminator mounting applications',
      'Galvanized steel construction provides high durability',
      '15 kg load capacity supports demanding installations',
      'Designed for reliable outdoor surveillance and traffic systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'lens-c2514-12m-a-os',
    name: 'LENS-C2514-12M@A-OS',
    slug: 'lens-c2514-12m-a-os',
    category: 'Accessories',
    subcategory: 'Traffic',
    description: '25mm F1.4 C-Mount Lens',
    imageUrl: '/Accessories/trf6.png',
    specifications: {
      'Model': 'LENS-C2514-12M@A-OS',
      'Lens Type': 'Fixed focal length',
      'Focal Length': '25 mm',
      'Image Size': '1.1"',
      'Aperture': 'F1.4',
      'Iris Control': 'Manual',
      'Focus Control': 'Manual',
      'Mount': 'C-Mount',
      'Field of View': '40.03° × 33° × 22.87°',
      'Application': 'Intelligent traffic / checkpoint camera systems'
    },
    features: [
      'Fixed focal-length optical design',
      'Optimized for high-resolution traffic imaging',
      'Large F1.4 aperture for enhanced light capture',
      'Supports 1.1-inch image sensors',
      'Manual focus adjustment for precise imaging',
      'Manual iris control for exposure adjustment',
      'C-Mount design for compatible camera installation',
      'Suitable for checkpoint and traffic monitoring systems',
      'Designed for clear vehicle and road-scene capture',
      'Compatible with selected Uniview intelligent traffic cameras'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'lens-c3516-12m-a-os',
    name: 'LENS-C3516-12M@A-OS',
    slug: 'lens-c3516-12m-a-os',
    category: 'Accessories',
    subcategory: 'Traffic',
    description: '1.1" 35mm C-Mount Fixed-Focus Lens',
    imageUrl: '/Accessories/trf7.png',
    specifications: {
      'Focal Length': '35 mm, fixed',
      'Mount': 'C-Mount',
      'Image Size': '1.1"',
      'Aperture': 'F1.4',
      'Iris Control': 'Manual',
      'Focus Control': 'Manual',
      'Field of View': '28.9° × 26.65° × 16.3°',
      'Dimensions': 'Φ37 × 43.76 mm',
      'Weight': '126.5 g',
      'Operating Temperature': '-30°C to +70°C'
    },
    features: [
      'High-quality fixed-focus optical lens',
      'Supports large 1.1-inch image sensors',
      '35 mm focal length for focused long-range imaging',
      'C-Mount design for compatible industrial cameras',
      'Wide F1.4 aperture for enhanced light collection',
      'Manual iris adjustment for precise exposure control',
      'Manual focus adjustment for accurate image tuning',
      'Compact and lightweight lens construction',
      'Suitable for intelligent traffic and checkpoint applications',
      'Operates reliably across a wide temperature range'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
