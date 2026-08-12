import {
  Camera,
  Eye,
  Server,
  Key,
  Tv,
  Cpu,
  Layers,
  ShieldCheck,
  Radio,
  Disc,
  Wifi,
  Lock
} from 'lucide-react';

export const categoryImages: Record<string, string> = {
  'Network Cameras': '/images/cat_ip_cameras.png',
  'Analog Cameras': '/images/cat_cctv_cameras.png',
  'PTZ Cameras': '/images/cat_cctv_cameras.png',
  'Thermal Cameras': '/images/cat_cctv_cameras.png',
  'Intelligent Traffic': '/images/cat_cctv_cameras.png',
  'Network Video Recorders': '/images/cat_dvr_nvr.png',
  'Digital Video Recorders': '/images/cat_dvr_nvr.png',
  'Wireless Camera': '/images/cat_ip_cameras.png',
  'Edge Intelligence': '/images/cat_ip_cameras.png',
  'Transmission': '/images/cat_accessories.png',
  'Storage': '/images/cat_dvr_nvr.png',
  'Explosion-Proof Cameras': '/images/cat_cctv_cameras.png',
  'Server Products': '/images/cat_dvr_nvr.png',
  'VMS': '/images/cat_dvr_nvr.png',
  'Software': '/images/cat_dvr_nvr.png',
  'Access Control': '/images/cat_access_control.png',
  'Video Intercoms': '/images/cat_video_door_phone.png',
  'Speed Gates': '/images/cat_access_control.png',
  'Smart Electrical': '/images/cat_accessories.png',
  'Audio Products': '/images/cat_accessories.png',
  'Accessories': '/images/cat_accessories.png',
};

export const svgDomeCam = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><circle cx="60" cy="48" r="26" fill="%230B1F33" opacity="0.15"/><path d="M34 42C34 27.1 46.1 15 61 15C75.9 15 88 27.1 88 42H34Z" fill="%230B1F33"/><circle cx="61" cy="42" r="16" fill="%23111827"/><circle cx="61" cy="42" r="6" fill="%231683F3"/><circle cx="64" cy="39" r="2" fill="white" opacity="0.7"/><rect x="28" y="42" width="64" height="7" rx="3.5" fill="%23E4EAF1"/></svg>`;
export const svgWifiCam = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="35" y="28" width="50" height="32" rx="6" fill="%230B1F33"/><rect x="27" y="26" width="10" height="36" rx="3" fill="%23111827"/><circle cx="82" cy="44" r="7" fill="%231683F3"/><circle cx="82" cy="44" r="3" fill="%23111827"/><line x1="75" y1="18" x2="72" y2="27" stroke="%231683F3" stroke-width="2" stroke-linecap="round"/><line x1="82" y1="16" x2="82" y2="26" stroke="%231683F3" stroke-width="2" stroke-linecap="round"/><line x1="89" y1="18" x2="92" y2="27" stroke="%231683F3" stroke-width="2" stroke-linecap="round"/></svg>`;
export const svgBulletCam = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="22" y="33" width="56" height="26" rx="6" fill="%230B1F33"/><rect x="12" y="30" width="14" height="32" rx="3" fill="%23111827"/><rect x="78" y="38" width="26" height="18" rx="4" fill="%231683F3"/><circle cx="91" cy="47" r="5" fill="%23111827"/><circle cx="91" cy="47" r="2" fill="%231683F3"/></svg>`;
export const svgPtzCam = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><circle cx="60" cy="45" r="20" fill="%230B1F33" opacity="0.1"/><ellipse cx="60" cy="38" rx="18" ry="14" fill="%230B1F33"/><circle cx="60" cy="38" r="8" fill="%23111827"/><circle cx="60" cy="38" r="3" fill="%231683F3"/><rect x="50" y="52" width="20" height="6" rx="3" fill="%23E4EAF1"/><path d="M55 58 L50 70 L70 70 L65 58" fill="%23E4EAF1"/></svg>`;
export const svgThermalCam = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="30" y="25" width="60" height="40" rx="6" fill="%230B1F33"/><rect x="38" y="32" width="30" height="26" rx="3" fill="%23111827"/><circle cx="80" cy="45" r="8" fill="%231683F3" opacity="0.8"/><circle cx="80" cy="45" r="4" fill="white" opacity="0.6"/><path d="M50 72 C50 65 70 65 70 72" stroke="%23E4EAF1" stroke-width="2" fill="none"/></svg>`;
export const svgSpecialCam = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><circle cx="60" cy="45" r="25" fill="%230B1F33" opacity="0.12"/><circle cx="60" cy="45" r="20" fill="%230B1F33"/><circle cx="60" cy="45" r="10" fill="%23111827"/><circle cx="60" cy="45" r="4" fill="%231683F3"/><circle cx="62" cy="43" r="1.5" fill="white" opacity="0.7"/><rect x="50" y="70" width="20" height="5" rx="2.5" fill="%23E4EAF1"/></svg>`;
export const svgNvr = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="15" y="30" width="90" height="32" rx="5" fill="%230B1F33"/><rect x="15" y="52" width="90" height="6" rx="2" fill="%23111827"/><circle cx="30" cy="46" r="4" fill="%231683F3"/><circle cx="44" cy="46" r="4" fill="%2332A9FF"/><rect x="68" y="40" width="28" height="6" rx="2" fill="%23111827"/><circle cx="101" cy="43" r="3" fill="%231683F3"/></svg>`;
export const svgDvr = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="12" y="25" width="96" height="40" rx="5" fill="%23111827"/><rect x="12" y="25" width="96" height="12" rx="5" fill="%230B1F33"/><rect x="20" y="43" width="12" height="12" rx="2" fill="%231683F3" opacity="0.7"/><rect x="38" y="43" width="12" height="12" rx="2" fill="%231683F3" opacity="0.4"/><rect x="56" y="43" width="12" height="12" rx="2" fill="%231683F3" opacity="0.4"/><rect x="74" y="43" width="20" height="6" rx="2" fill="%23333"/><circle cx="101" cy="46" r="3" fill="%231683F3"/></svg>`;
export const svgBiometric = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="38" y="12" width="44" height="66" rx="8" fill="%230B1F33"/><rect x="44" y="18" width="32" height="22" rx="4" fill="%23111827"/><circle cx="60" cy="57" r="10" fill="%231683F3" opacity="0.2"/><path d="M54 57 C54 53.7 56.7 51 60 51 C63.3 51 66 53.7 66 57" stroke="%231683F3" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="60" cy="57" r="3" fill="%231683F3"/></svg>`;
export const svgRfid = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="35" y="20" width="50" height="50" rx="8" fill="%230B1F33"/><rect x="44" y="29" width="32" height="20" rx="3" fill="%23111827"/><circle cx="60" cy="58" r="6" fill="%231683F3" opacity="0.8"/><path d="M48 14 C48 14 52 10 60 10 C68 10 72 14 72 14" stroke="%231683F3" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`;
export const svgDoorPhone = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="42" y="10" width="36" height="70" rx="7" fill="%230B1F33"/><rect x="48" y="17" width="24" height="20" rx="3" fill="%23111827"/><circle cx="60" cy="30" r="5" fill="%231683F3"/><circle cx="60" cy="60" r="7" fill="%23E4EAF1"/></svg>`;
export const svgPoESwitch = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="10" y="33" width="100" height="26" rx="4" fill="%230B1F33"/><rect x="18" y="40" width="7" height="7" rx="1" fill="%23111827"/><rect x="30" y="40" width="7" height="7" rx="1" fill="%23111827"/><rect x="42" y="40" width="7" height="7" rx="1" fill="%23111827"/><rect x="54" y="40" width="7" height="7" rx="1" fill="%23111827"/><rect x="66" y="40" width="7" height="7" rx="1" fill="%23111827"/><rect x="78" y="40" width="7" height="7" rx="1" fill="%23111827"/><circle cx="97" cy="43" r="3" fill="%231683F3"/><circle cx="97" cy="51" r="3" fill="%2332A9FF"/></svg>`;
export const svgHdd = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90" fill="none"><rect width="120" height="90" fill="%23F1F7FE" rx="8"/><rect x="20" y="20" width="80" height="50" rx="7" fill="%23E4EAF1"/><rect x="20" y="20" width="80" height="16" rx="7" fill="%230B1F33"/><circle cx="60" cy="55" r="16" stroke="%230B1F33" stroke-width="5"/><circle cx="60" cy="55" r="5" fill="%231683F3"/><circle cx="82" cy="30" r="3" fill="%231683F3"/></svg>`;

export const productMegaMenuData: Record<string, {
  icon: any;
  items: { title: string; desc: string; href: string; icon: any; image: string }[];
}> = {
  'Network Cameras': {
    icon: Camera,
    items: [
      { title: 'Easy Series', desc: 'Popular picks for entry-level needs like homes and small shops.', href: '/categories/network-cameras/easy-series', icon: Camera, image: '/Subcategory/nw1.png' },
      { title: 'Prime Series', desc: 'More advanced features for top performance in various scenarios.', href: '/categories/network-cameras/prime-series', icon: ShieldCheck, image: '/Subcategory/nw2.png' },
      { title: 'Pro Series', desc: 'Packed with smart tech to deliver a premium user experience.', href: '/categories/network-cameras/pro-series', icon: Eye, image: '/Subcategory/nw3.png' },
      { title: 'Owlview Series', desc: 'Superior night vision capabilities.', href: '/categories/network-cameras/owlview-series', icon: Camera, image: '/Subcategory/nw4.png' },
      { title: 'MultiView Series', desc: 'Multi-directional coverage.', href: '/categories/network-cameras/multiview-series', icon: Layers, image: '/Subcategory/nw5.png' },
      { title: 'OmniView Series', desc: 'Complete 360 degree panoramic view.', href: '/categories/network-cameras/omniview-series', icon: Radio, image: '/Subcategory/nw6.png' },
      { title: 'Solar Series', desc: 'Solar powered standalone security.', href: '/categories/network-cameras/solar-series', icon: ShieldCheck, image: '/Subcategory/nw7.png' },
      { title: 'Tri-Guard Series', desc: 'Active deterrence with lights and sirens.', href: '/categories/network-cameras/tri-guard-series', icon: Eye, image: '/Subcategory/nw8.png' },
      { title: 'Special Series', desc: 'Specialized application cameras.', href: '/categories/network-cameras/special-series', icon: Camera, image: '/Subcategory/nw9.png' }
    ]
  },
  'Analog Cameras': { 
    icon: Camera, 
    items: [
      { title: 'Dolphin Series', desc: 'Advanced analog technology for clear monitoring.', href: '/categories/analog-cameras/dolphin-series', icon: Camera, image: '/Subcategory/sub1.png' },
      { title: 'Whale Series', desc: 'High-capacity analog surveillance solutions.', href: '/categories/analog-cameras/whale-series', icon: ShieldCheck, image: '/Subcategory/sub2.png' }
    ] 
  },
  'PTZ Cameras': { 
    icon: Radio, 
    items: [
      { title: 'Prime Series', desc: 'Top performance pan, tilt and zoom scenarios.', href: '/categories/ptz-cameras/prime-series', icon: Camera, image: '/Subcategory/p1.png' },
      { title: 'Pro Series', desc: 'Premium user experience with smart tech.', href: '/categories/ptz-cameras/pro-series', icon: Eye, image: '/Subcategory/p2.png' },
      { title: 'Positioning System', desc: 'Advanced positioning and targeting.', href: '/categories/ptz-cameras/positioning-system', icon: ShieldCheck, image: '/Subcategory/p3.png' },
      { title: 'Easy Series', desc: 'Entry-level needs for homes and small shops.', href: '/categories/ptz-cameras/easy-series', icon: Radio, image: '/Subcategory/p4.png' }
    ] 
  },
  'Thermal Cameras': { 
    icon: Eye, 
    items: [
      { title: 'Bullet Series', desc: 'Long-range thermal surveillance.', href: '/categories/thermal-cameras/bullet-series', icon: ShieldCheck, image: '/Subcategory/t1.png' },
      { title: 'Positioning System', desc: 'Advanced thermal positioning and tracking.', href: '/categories/thermal-cameras/positioning-system', icon: Radio, image: '/Subcategory/t2.png' },
      { title: 'Turret Series', desc: 'Compact thermal cameras for wide coverage.', href: '/categories/thermal-cameras/turret-series', icon: Camera, image: '/Subcategory/t3.png' }
    ] 
  },
  'Intelligent Traffic': { 
    icon: ShieldCheck, 
    items: [
      { title: 'Intelligent Traffic Products', desc: 'Advanced traffic management and monitoring.', href: '/categories/intelligent-traffic/intelligent-traffic-products', icon: ShieldCheck, image: '/Subcategory/i1.png' },
      { title: 'Smart Parking Products', desc: 'Automated parking and access control systems.', href: '/categories/intelligent-traffic/smart-parking-products', icon: Eye, image: '/Subcategory/i2.png' }
    ] 
  },
  'Network Video Recorders': { 
    icon: Server, 
    items: [
      { title: 'Easy Series', desc: 'Entry-level reliable NVR systems.', href: '/categories/network-video-recorders/easy-series', icon: Server, image: '/Subcategory/nvr1.png' },
      { title: 'Prime Series', desc: 'Advanced features for top NVR performance.', href: '/categories/network-video-recorders/prime-series', icon: Server, image: '/Subcategory/nvr2.png' },
      { title: 'Pro Series', desc: 'Premium NVR experience with smart tech.', href: '/categories/network-video-recorders/pro-series', icon: Server, image: '/Subcategory/nvr3.png' },
      { title: 'SeekFree', desc: 'Specialized recording solutions.', href: '/categories/network-video-recorders/seekfree', icon: Server, image: '/Subcategory/nvr4.png' },
      { title: 'IQ Series', desc: 'Intelligent AI-powered recording.', href: '/categories/network-video-recorders/iq-series', icon: Server, image: '/Subcategory/nvr5.png' },
      { title: 'IM Series', desc: 'Advanced multi-channel recorders.', href: '/categories/network-video-recorders/im-series', icon: Server, image: '/Subcategory/nvr6.png' },
      { title: 'IX Series', desc: 'High-end enterprise storage.', href: '/categories/network-video-recorders/ix-series', icon: Server, image: '/Subcategory/nvr7.png' }
    ] 
  },
  'Digital Video Recorders': { 
    icon: Disc, 
    items: [
      { title: 'XVR', desc: 'Hybrid digital video recorder supporting multiple formats.', href: '/categories/digital-video-recorders/xvr', icon: Disc, image: '/Subcategory/d1.png' }
    ] 
  },
  'Wireless Camera': { 
    icon: Wifi, 
    items: [
      { title: 'S Series', desc: 'Smart wireless security cameras for home.', href: '/categories/wireless-camera/s-series', icon: Wifi, image: '/Subcategory/wi1.png' },
      { title: 'B Series', desc: 'Battery-powered wireless cameras.', href: '/categories/wireless-camera/b-series', icon: ShieldCheck, image: '/Subcategory/wi2.png' },
      { title: 'P Series', desc: 'Pan & tilt wireless monitoring.', href: '/categories/wireless-camera/p-series', icon: Radio, image: '/Subcategory/wi3.png' }
    ] 
  },
  'Edge Intelligence': { 
    icon: Cpu, 
    items: [
      { title: 'Smart Box', desc: 'Edge computing appliance for intelligent video analytics.', href: '/categories/edge-intelligence/smart-box', icon: Cpu, image: '/Subcategory/e1.png' }
    ] 
  },
  'Transmission': { 
    icon: Layers, 
    items: [
      { title: 'Switches', desc: 'High-performance network switches.', href: '/categories/transmission/switches', icon: Cpu, image: '/Subcategory/trans1.png' },
      { title: 'Cables', desc: 'Reliable cabling solutions.', href: '/categories/transmission/cables', icon: Layers, image: '/Subcategory/trans2.png' },
      { title: 'Wireless Devices', desc: 'Robust wireless transmission equipment.', href: '/categories/transmission/wireless-devices', icon: Wifi, image: '/Subcategory/trans3.png' }
    ] 
  },
  'Storage': { 
    icon: Server, 
    items: [
      { title: 'Video Storage', desc: 'High-capacity video storage arrays.', href: '/categories/storage/video-storage', icon: Server, image: '/Subcategory/s1.png' },
      { title: 'Disk Enclosure', desc: 'Expandable disk enclosures.', href: '/categories/storage/disk-enclosure', icon: Disc, image: '/Subcategory/s2.png' },
      { title: 'Flash Memory', desc: 'High-speed flash memory solutions.', href: '/categories/storage/flash-memory', icon: Cpu, image: '/Subcategory/s3.png' }
    ] 
  },
  'Explosion-Proof Cameras': { 
    icon: ShieldCheck, 
    items: [
      { title: 'Bullet Series', desc: 'Explosion-proof bullet cameras for hazardous areas.', href: '/categories/explosion-proof-cameras/bullet-series', icon: ShieldCheck, image: '/Subcategory/e1.png' },
      { title: 'PTZ Series', desc: 'Explosion-proof pan, tilt and zoom cameras.', href: '/categories/explosion-proof-cameras/ptz-series', icon: Radio, image: '/Subcategory/exp2.png' }
    ] 
  },
  'Server Products': { 
    icon: Server, 
    items: [
      { title: 'Computation Server', desc: 'High-performance servers for complex processing.', href: '/categories/server-products/computation-server', icon: Server, image: '/Subcategory/server1.png' },
      { title: 'Edge-Computing-Server', desc: 'Servers optimized for edge deployments.', href: '/categories/server-products/edge-computing-server', icon: Cpu, image: '/Subcategory/server2.png' }
    ] 
  },
  'VMS': { 
    icon: Eye, 
    items: [
      { title: 'Unicorn', desc: 'Integrated video management platform.', href: '/categories/vms/unicorn', icon: Layers, image: '/Subcategory/vms1.png' },
      { title: 'UNV Guard Series', desc: 'Advanced video management software.', href: '/categories/vms/unv-guard-series', icon: ShieldCheck, image: '/Subcategory/vms2.png' },
      { title: 'VM Platform Provisional', desc: 'Provisional video management solutions.', href: '/categories/vms/vm-platform-provisional', icon: Server, image: '/Subcategory/vms3.png' }
    ] 
  },
  'Software': { 
    icon: Layers, 
    items: [
      { title: 'EZAccess', desc: 'Access control management software.', href: '/categories/software/ezaccess', icon: Key, image: '/Subcategory/sof1.jpg' },
      { title: 'UniEase', desc: 'Unified easy management tools.', href: '/categories/software/uniease', icon: Layers, image: '/Subcategory/sof2.jpg' },
      { title: 'EZStation', desc: 'Comprehensive video management station.', href: '/categories/software/ezstation', icon: Tv, image: '/Subcategory/sof3.jpg' },
      { title: 'UniTools Pro', desc: 'Professional software toolset.', href: '/categories/software/unitools-pro', icon: Cpu, image: '/Subcategory/sof4.jpg' },
      { title: 'PC Management Software', desc: 'Desktop client for system management.', href: '/categories/software/pc-management-software', icon: Server, image: '/Subcategory/sof5.jpg' },
      { title: 'Software Mobile App', desc: 'Mobile app for remote access.', href: '/categories/software/software-mobile-app', icon: ShieldCheck, image: '/Subcategory/sof6.jpg' },
      { title: 'UNV Guard', desc: 'Advanced monitoring and guard application.', href: '/categories/software/unv-guard', icon: Eye, image: '/Subcategory/sof7.jpg' }
    ] 
  },
  'Access Control': { 
    icon: Key, 
    items: [
      { title: 'Card Readers', desc: 'Secure card reading terminals for access control.', href: '/categories/access-control/card-readers', icon: Key, image: '/Subcategory/ac1.png' },
      { title: 'Access Controllers', desc: 'Centralized access control panels.', href: '/categories/access-control/access-controllers', icon: ShieldCheck, image: '/Subcategory/ac2.png' }
    ] 
  },
  'Video Intercoms': { 
    icon: Tv, 
    items: [
      { title: 'Indoor Stations', desc: 'Indoor intercom terminals.', href: '/categories/video-intercoms/indoor-stations', icon: Tv, image: '/Subcategory/vid1.png' },
      { title: 'Door Stations', desc: 'Outdoor door intercom units.', href: '/categories/video-intercoms/door-stations', icon: ShieldCheck, image: '/Subcategory/vid2.png' },
      { title: 'Doorbell', desc: 'Smart doorbell cameras.', href: '/categories/video-intercoms/doorbell', icon: Tv, image: '/Subcategory/vid3.png' },
      { title: 'Main Stations', desc: 'Central intercom management stations.', href: '/categories/video-intercoms/main-stations', icon: Server, image: '/Subcategory/vid3.png' }
    ] 
  },
  'Speed Gates': { 
    icon: Lock, 
    items: [
      { title: 'Tripod', desc: 'Tripod turnstiles for access control.', href: '/categories/speed-gates/tripod', icon: Lock, image: '/Subcategory/sp1.png' },
      { title: 'Swing Barriers', desc: 'Swing barrier gates for secure entry.', href: '/categories/speed-gates/swing-barriers', icon: ShieldCheck, image: '/Subcategory/sp2.png' }
    ] 
  },
  'Smart Electrical': { 
    icon: Cpu, 
    items: [
      { title: 'Connect box', desc: 'Electrical connection boxes.', href: '/categories/smart-electrical/connect-box', icon: Cpu, image: '/Subcategory/sm1.jpg' },
      { title: 'Solar Power', desc: 'Solar power supply units.', href: '/categories/smart-electrical/solar-power', icon: ShieldCheck, image: '/Subcategory/sm2.jpg' },
      { title: 'Smart management box', desc: 'Intelligent electrical management boxes.', href: '/categories/smart-electrical/smart-management-box', icon: Layers, image: '/Subcategory/sm3.jpg' }
    ] 
  },
  'Audio Products': { 
    icon: Radio, 
    items: [
      { title: 'IP Speakers', desc: 'Networked IP speakers for audio broadcast.', href: '/categories/audio-products/ip-speakers', icon: Radio, image: '/Subcategory/audio.jpg' }
    ] 
  },
  'Accessories': { 
    icon: Cpu, 
    items: [
      { title: 'Power', desc: 'Power supplies and adapters.', href: '/categories/accessories/power', icon: Cpu, image: '/Subcategory/acs1.png' },
      { title: 'IP Speaker', desc: 'Accessories for IP speakers.', href: '/categories/accessories/ip-speaker', icon: Radio, image: '/Subcategory/acs2.png' },
      { title: 'Video Intercom', desc: 'Intercom accessories.', href: '/categories/accessories/video-intercom', icon: Tv, image: '/Subcategory/acs3.png' },
      { title: 'Traffic', desc: 'Traffic monitoring accessories.', href: '/categories/accessories/traffic', icon: ShieldCheck, image: '/Subcategory/acs4.png' },
      { title: 'Storage', desc: 'Storage system accessories.', href: '/categories/accessories/storage', icon: Server, image: '/Subcategory/acs5.png' },
      { title: 'Recorders', desc: 'Accessories for recording devices.', href: '/categories/accessories/recorders', icon: Server, image: '/Subcategory/acs6.png' },
      { title: 'Display & Control', desc: 'Accessories for display and control.', href: '/categories/accessories/display-control', icon: Tv, image: '/Subcategory/acs7.png' },
      { title: 'Cameras', desc: 'Camera mounts, brackets, and accessories.', href: '/categories/accessories/cameras', icon: Camera, image: '/Subcategory/acs8.png' },
      { title: 'Access Control', desc: 'Accessories for access control systems.', href: '/categories/accessories/access-control', icon: Key, image: '/Subcategory/acs9.png' }
    ] 
  }
};
