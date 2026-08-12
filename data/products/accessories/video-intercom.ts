import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const videoIntercom: Product[] = [
  {
    id: 'ep-cs202',
    name: 'EP-CS202',
    slug: 'ep-cs202',
    category: 'Accessories',
    subcategory: 'Video Intercom',
    description: '202 Door Station Metal Sunshade',
    imageUrl: '/Accessories/vid1.png',
    imageUrls: [
      '/Accessories/vid1.png',
      '/Accessories/vid2.png'
    ],
    specifications: {
      'Product Type': 'Door Station Sunshade',
      'Model': 'EP-CS202',
      'Series': '202 Door Station Accessory',
      'Material': 'Metal',
      'Mount Method': 'Wall mount',
      'Dimensions (L × W × H)': '98.6 × 26.8 × 178.5 mm',
      'Weight': '84.4 g',
      'Application': 'Indoor / Outdoor',
      'Compatibility': 'OEU-202S-HMK4'
    },
    features: [
      'Provides protective coverage for compatible door stations',
      'Helps shield the door station from direct sunlight',
      'Metal construction provides enhanced durability',
      'Designed specifically for Uniview 202 Series devices',
      'Supports reliable outdoor door-station installations',
      'Compact design integrates neatly around the door station',
      'Wall-mounted structure enables straightforward installation',
      'Suitable for residential villa video intercom systems',
      'Lightweight design simplifies handling during installation',
      'Designed as an official Uniview video intercom accessory'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ep-sz202',
    name: 'EP-SZ202',
    slug: 'ep-sz202',
    category: 'Accessories',
    subcategory: 'Video Intercom',
    description: '202 Door Stations Embedded Bracket (Plastic)',
    imageUrl: '/Accessories/EP-SZ202_HD_Image_1.png',
    imageUrls: [
      '/Accessories/EP-SZ202_HD_Image_1.png',
      '/Accessories/EP-SZ202_HD_Image_2.png',
      '/Accessories/EP-SZ202_HD_Image_3.png'
    ],
    specifications: {
      'Model': 'EP-SZ202',
      'Product Type': 'Door Station Embedded Bracket',
      'Material': 'Plastic',
      'Dimensions': '104.0 × 42 × 184.1 mm',
      'Mounting Method': 'Recess mount',
      'Weight': '78 g',
      'Application': 'Indoor / Outdoor',
      'Compatible Model 1': 'OEU-202S-HMK2',
      'Compatible Model 2': 'OEU-202S-HMK4',
      'Product Category': 'Video Intercom Accessory'
    },
    features: [
      'Designed specifically for Uniview 202 Series villa door stations',
      'Provides a secure embedded installation solution',
      'Supports clean and professional recessed mounting',
      'Compatible with both HMK2 and HMK4 door station models',
      'Lightweight construction simplifies installation',
      'Plastic body offers practical installation durability',
      'Compact design fits neatly within mounting surfaces',
      'Suitable for residential video intercom installations',
      'Can be used in both indoor and outdoor environments',
      'Purpose-built accessory for Uniview video intercom systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ep-cs301',
    name: 'EP-CS301',
    slug: 'ep-cs301',
    category: 'Accessories',
    subcategory: 'Video Intercom',
    description: '301 Door Station Wall-Mounted Sunshade',
    imageUrl: '/Accessories/vid3.png',
    imageUrls: [
      '/Accessories/vid3.png',
      '/Accessories/vid4.png',
      '/Accessories/vid5.png'
    ],
    specifications: {
      'Product Model': 'EP-CS301',
      'Product Type': 'Door Station Sunshade',
      'Compatible Model': 'OEU-301S-HMKA',
      'Material': 'Metal',
      'Mounting Method': 'Wall mount',
      'Length': '129.4 mm',
      'Width': '79.0 mm',
      'Height': '362.4 mm',
      'Weight': '917 g',
      'Application': 'Indoor / Outdoor'
    },
    features: [
      'Provides additional protection for compatible door stations',
      'Helps shield the door station from direct sunlight',
      'Metal construction provides durable physical protection',
      'Designed specifically for Uniview 301 series installations',
      'Compatible with OEU-301S-HMKA',
      'Suitable for outdoor entrance installations',
      'Can also be used in indoor installation environments',
      'Wall-mount design enables straightforward installation',
      'Slim enclosure complements the door station form factor',
      'Purpose-built accessory for Uniview video intercom systems'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
