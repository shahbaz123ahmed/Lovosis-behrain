import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const owlviewSeries: Product[] = [
  {
    id: 'ipc3614le-adf28k-wp-l2',
    name: 'IPC3614LE-ADF28K-WP-L2',
    slug: 'ipc3614le-adf28k-wp-l2',
    category: 'Network Cameras',
    subcategory: 'Owlview Series',
    description: '4MP OwlView Wise-ISP Fixed Warm Light Turret Network Camera',
    imageUrl: '/Owlview_Series/ow1.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Maximum Resolution': '2560 × 1440 (4 MP)',
      'Lens': '2.8 mm fixed, F1.0 aperture',
      'Frame Rate': '4 MP at up to 25/20 fps',
      'Warm-Light Distance': 'Up to 30 m',
      'WDR': '120 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Audio': 'Built-in microphone',
      'Protection & Power': 'IP67, PoE supported'
    },
    features: [
      'Delivers high-quality 4 MP (2560 × 1440) video',
      'Wise-ISP optimizes color, detail, and motion-smear performance in extremely low light',
      'F1.0 large-aperture lens captures more light for brighter nighttime images',
      'Supports Ultra Motion Detection for human and vehicle detection',
      '120 dB True WDR provides clear images in strong backlight conditions',
      'Warm-light illumination enables clear nighttime monitoring up to 30 m',
      'Supports 9:16 corridor mode for narrow surveillance areas',
      'Built-in microphone enables synchronized audio recording',
      'Supports MicroSD cards with capacities up to 512 GB',
      'IP67 weather protection and PoE simplify reliable outdoor installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc2314le-adf28k-wp-l2',
    name: 'IPC2314LE-ADF28K-WP-L2',
    slug: 'ipc2314le-adf28k-wp-l2',
    category: 'Network Cameras',
    subcategory: 'Owlview Series',
    description: '4MP OwlView Wise-ISP Fixed Warm Light Bullet Network Camera',
    imageUrl: '/Owlview_Series/ow2.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Maximum Resolution': '2560 × 1440 (4 MP)',
      'Lens': '2.8 mm fixed, F1.0 aperture',
      'Minimum Illumination': '0.0003 Lux',
      'Frame Rate': '4 MP at up to 25/20 fps',
      'Warm-Light Distance': 'Up to 30 m',
      'WDR': '120 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection & Power': 'IP67, PoE supported'
    },
    features: [
      'Delivers high-quality 4 MP (2560 × 1440) video',
      'Wise-ISP optimizes color, detail, and motion-smear performance in extremely low light',
      'F1.0 large-aperture lens provides excellent light-gathering capability',
      'Supports Ultra Motion Detection for human and vehicle detection',
      '120 dB True WDR provides clear images in strong backlight conditions',
      'Warm-light illumination enables clear nighttime monitoring up to 30 m',
      'Supports 9:16 corridor mode for narrow surveillance areas',
      'Built-in microphone enables synchronized audio recording',
      'Supports MicroSD cards with capacities up to 512 GB',
      'IP67 weather protection and PoE support simplify outdoor installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc3612le-adf28k-wp-l2',
    name: 'IPC3612LE-ADF28K-WP-L2',
    slug: 'ipc3612le-adf28k-wp-l2',
    category: 'Network Cameras',
    subcategory: 'Owlview Series',
    description: '2MP OwlView Wise-ISP Fixed Warm Light Turret Network Camera',
    imageUrl: '/Owlview_Series/ow1.png',
    specifications: {
      'Sensor': '1/2.8-inch CMOS',
      'Maximum Resolution': '1920 × 1080 (2 MP)',
      'Lens': '2.8 mm fixed, F1.0 aperture',
      'Minimum Illumination': '0.0003 Lux',
      'Frame Rate': '1080p at up to 30/25 fps',
      'Warm-Light Distance': 'Up to 30 m',
      'WDR': '120 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection & Power': 'IP67, PoE supported'
    },
    features: [
      'Delivers high-quality 1080p video at up to 30/25 fps',
      'Wise-ISP optimizes color, detail, and smear effects in extremely low-light scenes',
      'F1.0 large-aperture lens improves light capture for brighter images',
      'Supports Ultra Motion Detection for human and vehicle detection',
      '120 dB True WDR provides clear images in strong backlight conditions',
      'Warm-light illumination provides visibility up to 30 m',
      'Supports 9:16 corridor mode for narrow surveillance areas',
      'Built-in microphone enables synchronized audio recording',
      'Supports MicroSD cards with capacities up to 512 GB',
      'IP67 weather protection and PoE support simplify outdoor installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc2312le-adf28k-wp-l2',
    name: 'IPC2312LE-ADF28K-WP-L2',
    slug: 'ipc2312le-adf28k-wp-l2',
    category: 'Network Cameras',
    subcategory: 'Owlview Series',
    description: '2MP OwlView Wise-ISP Fixed Warm Light Bullet Network Camera',
    imageUrl: '/Owlview_Series/ow2.png',
    specifications: {
      'Sensor': '1/2.8-inch CMOS',
      'Maximum Resolution': '1920 × 1080 (2 MP)',
      'Lens': '2.8 mm fixed, F1.0 aperture',
      'Minimum Illumination': '0.0003 Lux',
      'Frame Rate': 'Up to 30/25 fps',
      'Warm-Light Distance': 'Up to 30 m',
      'WDR': '120 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection & Power': 'IP67, PoE supported'
    },
    features: [
      'Delivers 1080p video at up to 30/25 fps',
      'Wise-ISP optimizes color, detail, and motion-smear performance in extremely low light',
      'F1.0 large-aperture lens provides excellent low-light image capture',
      'Supports Ultra Motion Detection for human and vehicle detection',
      '120 dB True WDR provides clear images in strong backlight conditions',
      'Warm-light illumination provides nighttime visibility up to 30 m',
      'Supports 9:16 corridor mode for narrow monitoring areas',
      'Built-in microphone enables synchronized audio recording',
      'Supports MicroSD cards with capacities up to 512 GB',
      'IP67 weather protection and PoE simplify outdoor installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc2314le-adf28-40-km-wp',
    name: 'IPC2314LE-ADF28(40)KM-WP',
    slug: 'ipc2314le-adf28-40-km-wp',
    category: 'Network Cameras',
    subcategory: 'Owlview Series',
    description: '4MP ColorHunter Wise-ISP Fixed Warm Light Bullet Network Camera',
    imageUrl: '/Owlview_Series/ow2.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Lens': '2.8 mm / 4.0 mm fixed, F1.0 aperture',
      'Minimum Illumination': '0.0003 Lux',
      'Frame Rate': 'Up to 30/25 fps at 3 MP/1080p',
      'Warm-Light Distance': 'Up to 30 m',
      'WDR': '120 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection & Power': 'IP67, PoE supported'
    },
    features: [
      'Delivers high-quality 4 MP video at up to 25/20 fps',
      'ColorHunter with Wise-ISP optimizes color, detail, and smear in extremely low-light scenes',
      'F1.0 large-aperture lens provides enhanced light-gathering capability',
      '120 dB True WDR delivers clear images in strong-light environments',
      'Warm-light illumination provides nighttime visibility up to 30 m',
      'Supports 9:16 corridor mode for narrow monitoring areas',
      'Built-in microphone enables synchronized audio recording',
      'Supports MicroSD cards with capacities up to 512 GB',
      'Three-axis adjustment allows flexible camera positioning',
      'IP67 weather protection and PoE support simplify outdoor installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ipc3624le-adf28-40-k-wp',
    name: 'IPC3624LE-ADF28(40)K-WP',
    slug: 'ipc3624le-adf28-40-k-wp',
    category: 'Network Cameras',
    subcategory: 'Owlview Series',
    description: '4MP ColorHunter Wise-ISP Fixed Warm Light Turret Network Camera',
    imageUrl: '/Owlview_Series/ow3.png',
    specifications: {
      'Sensor': '1/1.8-inch CMOS',
      'Maximum Resolution': '2688 × 1520 (4 MP)',
      'Lens': '2.8 mm / 4.0 mm fixed, F1.0 aperture',
      'Minimum Illumination': '0.0003 Lux',
      'Frame Rate': '4 MP at up to 25/20 fps',
      'Warm-Light Distance': 'Up to 30 m',
      'WDR': '120 dB True WDR',
      'Video Compression': 'Ultra 265, H.265, H.264, MJPEG',
      'Storage': 'MicroSD card up to 512 GB',
      'Protection & Power': 'IP67, PoE supported'
    },
    features: [
      'Delivers high-quality 4 MP video at up to 25/20 fps',
      'ColorHunter with Wise-ISP optimizes color, detail, and motion-smear performance in extremely low light',
      'F1.0 large-aperture lens provides superior light-gathering capability',
      '120 dB True WDR delivers clear images in strong backlight conditions',
      'Warm white-light illumination provides nighttime visibility up to 30 m',
      'Supports 9:16 corridor mode for narrow monitoring areas',
      'Built-in microphone enables synchronized audio recording',
      'Supports MicroSD cards with capacities up to 512 GB',
      'Three-axis adjustment provides flexible camera positioning',
      'IP67 weather protection and PoE support simplify outdoor installation'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
