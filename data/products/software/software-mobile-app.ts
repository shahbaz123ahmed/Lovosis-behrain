import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const softwareMobileApp: Product[] = [
  {
    id: 'uniease-android',
    name: 'UniEase-Android',
    slug: 'uniease-android',
    category: 'Software',
    subcategory: 'Software Mobile App',
    description: 'UniEase-Android Mobile App',
    imageUrl: '/VMS/mobile.png',
    specifications: {
      'Platform': 'Android',
      'Recommended Devices': '64 or fewer',
      'Supported Devices': 'IPC, NVR, Doorbell (overseas only)',
      'Device Connection': 'Cloud devices',
      'Adding Method': 'QR code scanning',
      'Network Devices': 'Wired, Wi-Fi, and 4G',
      'Live View': 'Multi-window preview with PTZ control',
      'Playback': 'Search, synchronous playback, split search, speed control',
      'Device Sharing': 'Live view, PTZ, audio, alarms, playback & configuration permissions',
      'Cloud Upgrade': 'Supports IPC, NVR, and NVR-connected IPC upgrades'
    },
    features: [
      'Quick device addition by scanning a QR code',
      'Multiple users can simultaneously view the same video',
      'Multi-window live view with PTZ control and preset patrol',
      'Two-way audio, snapshots, and local video recording',
      'Recording search, split search, and adjustable playback speeds',
      'Playback of recordings stored on an SD card',
      'Real-time alarm reception with related recording playback',
      'Comprehensive video, audio, OSD, PTZ, and detection configuration',
      'Device sharing, permission management, and sharing history',
      'Cloud upgrade, diagnostic export, and network speed testing'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'uniease-ios',
    name: 'UniEase-iOS',
    slug: 'uniease-ios',
    category: 'Software',
    subcategory: 'Software Mobile App',
    description: 'Mobile Video Surveillance Application',
    imageUrl: '/VMS/mobile.png',
    specifications: {
      'Platform': 'iOS',
      'Minimum OS': 'iOS 10.0 or later',
      'Recommended Capacity': '≤64 devices',
      'Supported Devices': 'IPC, NVR, Doorbell (overseas only)',
      'Device Connection': 'Cloud devices',
      'Adding Method': 'QR code scanning',
      'Network Support': 'Wired, Wi-Fi, and 4G devices',
      'Live View': 'Multi-window preview with PTZ functionality',
      'Playback': 'Search, synchronous playback, split search & speed adjustment',
      'Cloud Upgrade': 'IPC, NVR & NVR-connected IPC supported'
    },
    features: [
      'Quick device addition by scanning QR codes',
      'Multiple users can simultaneously view the same video',
      'Multi-window live view with PTZ control',
      'Two-way audio communication support',
      'Snapshot and local video recording',
      'Recording search with synchronous and split playback',
      'Adjustable playback speeds for recorded footage',
      'Real-time alarm reception and related recording playback',
      'Device sharing with configurable permissions and sharing periods',
      'Cloud upgrades, diagnostic export, and network speed testing'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'unitools-pro-ios-en',
    name: 'UniTools Pro iOS EN',
    slug: 'unitools-pro-ios-en',
    category: 'Software',
    subcategory: 'Software Mobile App',
    description: 'Professional Mobile AIoT Management App',
    imageUrl: '/VMS/promobile.png',
    specifications: {
      'Platform': 'iPhone / iPad',
      'Operating System': 'iOS 12.0 or later',
      'Supported Devices': 'Uniview IPCs and NVRs',
      'Access Protocol': 'SDK3',
      'Video Compression': 'U-Code, H.264 and H.265',
      'Live View': 'Single-window and multi-window preview',
      'Playback': 'SD card/NVR recording playback with calendar search',
      'Network Configuration': 'IP address, subnet mask and default gateway',
      'Security': 'Dynamic password, PIN/pattern protection and device-cloud binding',
      'Languages': 'Automatically follows system language; supports Chinese and English'
    },
    features: [
      'Efficiently creates, edits, searches, and manages multiple projects',
      'Supports installation, testing, and commissioning directly from mobile devices',
      'Provides remote operation and maintenance for connected devices',
      'Automatically discovers compatible IPCs on the local network',
      'Supports batch network and video configuration',
      'Provides live view and playback of surveillance video',
      'Supports PTZ control, presets, patrols, focus, and zoom',
      'Provides device diagnosis, speed testing, and diagnostic information export',
      'Supports alarm notifications with event snapshots and recordings',
      'Protects access using PIN/pattern passwords and secure cloud-device binding'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'unitools-pro-android-en',
    name: 'UniTools Pro Android EN',
    slug: 'unitools-pro-android-en',
    category: 'Software',
    subcategory: 'Software Mobile App',
    description: 'Uniview Mobile Device Management App',
    imageUrl: '/VMS/promobile.png',
    specifications: {
      'Platform': 'Android',
      'OS Requirement': 'Android 7.0 or later',
      'Supported Devices': 'Uniview IPC and NVR',
      'Access Protocol': 'SDK3',
      'Video Compression': 'U-Code / H.264 / H.265',
      'Connectivity': 'Cloud, LAN, Wi-Fi and P2P',
      'Live View': 'Single-window and multi-window preview',
      'Playback': 'SD card recording with date/time search',
      'Audio': 'Two-way audio and speaker playback',
      'Security': 'Dynamic password, PIN/pattern and cloud account binding'
    },
    features: [
      'Efficient management of multiple surveillance projects',
      'On-site device testing and commissioning via smartphone',
      'Remote operation and maintenance (O&M)',
      'Add devices through QR code, register code, LAN or Wi-Fi',
      'Batch network and video configuration',
      'Live video viewing with two-way audio',
      'SD card recording playback and calendar search',
      'Remote image parameter and device configuration',
      'Alarm notifications and intelligent detection configuration',
      'Secure access with PIN/pattern protection and cloud-account binding'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
