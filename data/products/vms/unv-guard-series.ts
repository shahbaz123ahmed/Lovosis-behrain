import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const unvGuardSeries: Product[] = [
  {
    id: 'ug-i500-h16-in',
    name: 'UG-I500-H16-IN',
    slug: 'ug-i500-h16-in',
    category: 'VMS',
    subcategory: 'UNV Guard Series',
    description: 'Smart IoT Integrated Management Server',
    imageUrl: '/VMS/guard.png',
    specifications: {
      'Encoding Devices': 'Up to 1,000',
      'Video Channels': 'Up to 2,000',
      'Smart Channels': 'Up to 500',
      'Cloud Devices': 'Up to 256',
      'Storage': '16 × SATA HDD slots with recording backup support',
      'Compatibility': 'ONVIF, RTSP',
      'Network Interfaces': '4 × GE ports',
      'Alarm I/O': '24 inputs / 8 outputs',
      'USB Interfaces': '2 × USB 2.0 + 2 × USB 3.0',
      'Video Outputs': '2 × HDMI + 1 × VGA'
    },
    features: [
      'Centralized management for large-scale video surveillance systems',
      'Supports IPCs, NVRs, Smart Boxes, access control, video intercom and ANPR devices',
      'Provides live view, playback, group sequence and video-wall management',
      'Supports e-map and advanced 3D map functionality',
      'Supports access control and visitor management applications',
      'Provides vehicle entrance/exit and parking management',
      'Supports personnel management and people-counting applications',
      'Offers two-way audio and audio broadcasting capabilities',
      'Supports alarm linkage and comprehensive alarm management',
      'Accessible through PC clients and mobile devices on iOS and Android'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
