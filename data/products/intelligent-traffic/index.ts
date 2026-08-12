import { Product } from '@/types';

import { intelligentTrafficProducts } from './intelligent-traffic-products';
import { smartParkingProducts } from './smart-parking-products';

export const intelligentTraffic: Product[] = [
  ...intelligentTrafficProducts,
  ...smartParkingProducts
];
