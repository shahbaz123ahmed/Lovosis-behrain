import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const unitoolsPro: Product[] = [
  {
    id: 'unitools-pro-ios-en',
    name: 'UniTools Pro iOS EN',
    slug: 'unitools-pro-ios-en',
    category: 'Software',
    subcategory: 'UniTools Pro',
    description: 'Uniview Mobile Maintenance Tool',
    imageUrl: '/VMS/promobile.png',
    specifications: {
      'Product': 'UniTools Pro iOS EN',
      'Software Series': 'UniTools Pro',
      'Platform': 'iOS',
      'Software Type': 'Mobile maintenance and configuration application',
      'Primary Use': 'Device installation, commissioning and maintenance',
      'Device Discovery': 'Supported',
      'Device Configuration': 'Supported',
      'Network Configuration': 'Supported',
      'Device Diagnosis': 'Supported',
      'Target Users': 'Installers, engineers and maintenance technicians'
    },
    features: [
      'Quickly discovers Uniview devices on the local network',
      'Enables convenient device activation and configuration',
      'Supports network parameter configuration',
      'Provides device information and operating-status checking',
      'Helps technicians troubleshoot connected surveillance devices',
      'Supports device maintenance directly from an iPhone or iPad',
      'Simplifies on-site installation and commissioning',
      'Provides convenient access to device configuration functions',
      'Mobile workflow reduces the need for a PC during field maintenance',
      'User-friendly interface designed for professional installers and technicians'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'unitools-pro-android-en',
    name: 'UniTools Pro Android EN',
    slug: 'unitools-pro-android-en',
    category: 'Software',
    subcategory: 'UniTools Pro',
    description: 'Uniview Mobile Installation & Maintenance Tool',
    imageUrl: '/VMS/promobile.png',
    specifications: {
      'Product Name': 'UniTools Pro Android EN',
      'Software Series': 'UniTools Pro',
      'Platform': 'Android',
      'Software Type': 'Mobile installation & maintenance tool',
      'Project Management': 'Supported',
      'Multi-Project Management': 'Supported',
      'Testing': 'Supported',
      'Device Commissioning': 'Supported',
      'Remote O&M': 'Supported',
      'Primary Users': 'Installers, technicians & maintenance engineers'
    },
    features: [
      'Efficiently manages multiple surveillance projects',
      'Enables project-related work directly from a mobile phone',
      'Supports device testing during installation',
      'Provides mobile-based device commissioning',
      'Enables remote operation and maintenance',
      'Reduces the need for repeated on-site technician visits',
      'Simplifies project deployment and management workflows',
      'Improves installation and commissioning efficiency',
      'Provides convenient tools for field technicians',
      'Combines project management, commissioning, and O&M in one mobile solution'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
