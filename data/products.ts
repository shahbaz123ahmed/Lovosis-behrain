import { Product } from '@/types';

import { networkCameras } from './products/network-cameras';
import { analogCameras } from './products/analog-cameras';
import { ptzCameras } from './products/ptz-cameras';
import { thermalCameras } from './products/thermal-cameras';
import { intelligentTraffic } from './products/intelligent-traffic';
import { networkVideoRecorders } from './products/network-video-recorders';
import { digitalVideoRecorders } from './products/digital-video-recorders';
import { wirelessCamera } from './products/wireless-camera';
import { edgeIntelligence } from './products/edge-intelligence';
import { transmission } from './products/transmission';
import { storage } from './products/storage';
import { explosionProofCameras } from './products/explosion-proof-cameras';
import { serverProducts } from './products/server-products';
import { vms } from './products/vms';
import { software } from './products/software';
import { accessControl } from './products/access-control';
import { videoIntercoms } from './products/video-intercoms';
import { speedGates } from './products/speed-gates';
import { smartElectrical } from './products/smart-electrical';
import { audioProducts } from './products/audio-products';
import { accessories } from './products/accessories';

export const products: Product[] = [
  ...networkCameras,
  ...analogCameras,
  ...ptzCameras,
  ...thermalCameras,
  ...intelligentTraffic,
  ...networkVideoRecorders,
  ...digitalVideoRecorders,
  ...wirelessCamera,
  ...edgeIntelligence,
  ...transmission,
  ...storage,
  ...explosionProofCameras,
  ...serverProducts,
  ...vms,
  ...software,
  ...accessControl,
  ...videoIntercoms,
  ...speedGates,
  ...smartElectrical,
  ...audioProducts,
  ...accessories,
];

export const categories = [
  'Network Cameras',
  'Analog Cameras',
  'PTZ Cameras',
  'Thermal Cameras',
  'Intelligent Traffic',
  'Network Video Recorders',
  'Digital Video Recorders',
  'Wireless Camera',
  'Edge Intelligence',
  'Transmission',
  'Storage',
  'Explosion-Proof Cameras',
  'Server Products',
  'VMS',
  'Software',
  'Access Control',
  'Video Intercoms',
  'Speed Gates',
  'Smart Electrical',
  'Audio Products',
  'Accessories'
];
