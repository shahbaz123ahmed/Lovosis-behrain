import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const mainStations: Product[] = [
  {
    id: 'oeg-sa1t',
    name: 'OEG-SA1T',
    slug: 'oeg-sa1t',
    category: 'Video Intercoms',
    subcategory: 'Main Stations',
    description: 'Video Intercom Main Station',
    imageUrl: '/VMS/mainsatation.png',
    specifications: {
      'Operating System': 'Android',
      'Display': '10.1-inch LCD touchscreen',
      'Resolution': '1280 × 800',
      'Network': '2 × 10/100/1000 Mbps Ethernet ports with PoE',
      'Audio': 'Built-in omnidirectional microphone, speaker & 2 audio outputs',
      'Interfaces': 'USB ×1, HDMI ×1, network ×2, power ×1',
      'Power Supply': 'DC 5V/2A or PoE',
      'Mounting': 'Desktop',
      'Dimensions': '309 × 214 × 187 mm (45° bracket position)',
      'Operating Environment': '0°C to 45°C; 10%–95% RH, non-condensing'
    },
    features: [
      'Supports answering and initiating video intercom calls',
      'Communicates with indoor stations and other intercom devices',
      'Enables real-time monitoring of lobby and zone entrances',
      'Supports remote live view through door station cameras',
      'Allows remote door unlocking after a call',
      'Supports alarm and call event searching and handling',
      'Configurable incoming call ringtone and adjustable volume',
      'Supports management zone division',
      'Five physical keys for convenient operation',
      'Dual Gigabit network interfaces provide high-speed transmission'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
