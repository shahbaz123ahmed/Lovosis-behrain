import { Product } from '@/types';
import {
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr,
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera,
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const cameras: Product[] = [
  {
    id: 'tr-fm180-in',
    name: 'TR-FM180-IN',
    slug: 'tr-fm180-in',
    category: 'Accessories',
    subcategory: 'Cameras',
    description: 'In-ceiling Bracket for Cover Dome',
    imageUrl: '/Accessories/campa.png',
    imageUrls: [
      '/Accessories/campa.png',
      '/Accessories/campb.png',
      '/Accessories/campc.png'
    ],
    specifications: {
      'Product Type': 'In-ceiling camera bracket',
      'Model': 'TR-FM180-IN',
      'Application': 'Indoor PTZ dome installation',
      'Installation Type': 'In-ceiling',
      'Bracket Dimensions': 'Φ280 × 91 mm',
      'In-ceiling Hole': 'Φ210 mm',
      'Weight': '1.2 kg',
      'Material': 'Sheet metal and PC',
      'Compatible Camera Type': 'Cover dome / PTZ dome',
      'Installation Environment': 'Indoor'
    },
    features: [
      'Provides a clean, recessed ceiling installation',
      'Designed specifically for indoor applications',
      'Suitable for compatible PTZ dome cameras',
      'Conceals a significant portion of the camera above the ceiling',
      'Helps achieve a professional surveillance installation',
      'Robust construction for secure camera mounting',
      'Sheet metal structure provides mechanical strength',
      'PC components offer a lightweight and durable finish',
      'Large mounting structure supports stable installation',
      'Designed as an official Uniview camera mounting accessory'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tr-up06-in',
    name: 'TR-UP06-IN',
    slug: 'tr-up06-in',
    category: 'Accessories',
    subcategory: 'Cameras',
    description: 'Universal Pole Mounting Bracket',
    imageUrl: '/Accessories/camp2a.png',
    imageUrls: [
      '/Accessories/camp2a.png',
      '/Accessories/camp2b.png',
      '/Accessories/camp2c.png'
    ],
    specifications: {
      'Model': 'TR-UP06-IN',
      'Product Type': 'Universal Pole Mounting Bracket',
      'Application': 'Outdoor installation',
      'Installation Type': 'Pole or rail mounting',
      'Bracket Width': '136 mm',
      'Bracket Height': '127 mm',
      'Bracket Depth': '63.6 mm',
      'Dimensions': '136 × 127 × 63.6 mm',
      'Weight': '0.35 kg (0.77 lb)',
      'Material': 'Aluminum alloy'
    },
    features: [
      'Enables CCTV cameras to be installed securely on poles',
      'Suitable for both pole and rail installation',
      'Strong aluminum alloy body provides long-term durability',
      'Designed to withstand demanding outdoor installations',
      'Provides a stable mounting platform for surveillance equipment',
      'Compact structure simplifies installation in limited spaces',
      'Compatible with applicable Uniview mounting accessories',
      'Professional construction ensures secure camera positioning',
      'Suitable for commercial and industrial surveillance projects',
      'Ideal for locations where conventional wall mounting is unavailable'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tr-wm04-in',
    name: 'TR-WM04-IN',
    slug: 'tr-wm04-in',
    category: 'Accessories',
    subcategory: 'Cameras',
    description: '4-Inch Fixed Dome Indoor Wall Mount',
    imageUrl: '/Accessories/camp3a.png',
    imageUrls: [
      '/Accessories/camp3a.png',
      '/Accessories/camp3b.png',
      '/Accessories/camp3c.png'
    ],
    specifications: {
      'Product Type': 'Wall Mounting Bracket',
      'Model': 'TR-WM04-IN',
      'Application': 'Indoor wall installation',
      'Camera Compatibility': '4-inch fixed dome',
      'Material': 'Aluminum alloy',
      'Dimensions': '207.5 × 155.0 × 125.1 mm',
      'Weight': '0.48 kg',
      'Installation Type': 'Wall mounted',
      'Usage': 'CCTV / surveillance camera mounting',
      'Manufacturer': 'Uniview'
    },
    features: [
      'Provides secure wall mounting for fixed dome cameras',
      'Specifically designed for indoor surveillance installations',
      'Durable aluminum alloy construction',
      'Strong structural support for stable camera positioning',
      'Compact design for neat installations',
      'Helps maintain proper camera mounting orientation',
      'Suitable for commercial and professional CCTV systems',
      'Simple and convenient wall installation',
      'Designed to integrate with compatible Uniview dome cameras',
      'Professional mounting solution for surveillance environments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tr-wm03-b-in',
    name: 'TR-WM03-B-IN',
    slug: 'tr-wm03-b-in',
    category: 'Accessories',
    subcategory: 'Cameras',
    description: 'Wall Mounting Bracket for 3-Inch Dome Cameras',
    imageUrl: '/Accessories/camp3a.png',
    imageUrls: [
      '/Accessories/camp3a.png',
      '/Accessories/camp3b.png',
      '/Accessories/camp3c.png'
    ],
    specifications: {
      'Product Type': 'Camera wall-mount bracket',
      'Model': 'TR-WM03-B-IN',
      'Application': 'Wall installation',
      'Camera Type': '3-inch fixed dome / hemisphere',
      'Compatibility': 'IPC361X series',
      'Material': 'Aluminum alloy',
      'Dimensions': '189.5 × 126.2 × 126.2 mm',
      'Dimensions (Imperial)': '7.5 × 5.0 × 5.0 inches',
      'Weight': '0.5 kg (1.1 lb)'
    },
    features: [
      'Provides secure wall mounting for compatible dome cameras',
      'Strong aluminum-alloy construction',
      'Designed specifically for Uniview surveillance cameras',
      'Compact and space-efficient mounting structure',
      'Provides stable support for installed cameras',
      'Helps achieve a clean and professional camera installation',
      'Suitable for IPC32X series cameras',
      'Suitable for IPC361X series cameras',
      'Simple mounting structure for easier installation',
      'Durable construction for long-term surveillance applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'tr-wm03-d-in',
    name: 'TR-WM03-D-IN',
    slug: 'tr-wm03-d-in',
    category: 'Accessories',
    subcategory: 'Cameras',
    description: 'Wall Mounting Bracket',
    imageUrl: '/Accessories/camp3a.png',
    imageUrls: [
      '/Accessories/camp3a.png',
      '/Accessories/camp3b.png',
      '/Accessories/camp3c.png'
    ],
    specifications: {
      'Model': 'TR-WM03-D-IN',
      'Product Type': 'Wall Mounting Bracket',
      'Application': 'Wall installation',
      'Compatible Series': 'IPC32XS/E/L',
      'Material': 'Aluminum alloy',
      'Dimensions': '185.4 × 125.0 × 126.4 mm',
      'Dimensions (inches)': '7.3 × 4.9 × 5.0 in',
      'Weight': '0.52 kg',
      'Weight (imperial)': '1.15 lb',
      'Installation Type': 'Wall-mounted camera installation'
    },
    features: [
      'Provides secure wall mounting for compatible cameras',
      'Strong aluminum-alloy construction',
      'Compact and professional mounting design',
      'Designed specifically for Uniview surveillance systems',
      'Supports IPC32XS/E/L series cameras',
      'Helps achieve a clean and organized installation',
      'Provides a stable mounting platform for cameras',
      'Suitable for vertical wall installations',
      'Easy integration with compatible Uniview cameras',
      'Durable construction for long-term surveillance deployments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
