import { Product } from '@/types';

import { switches } from './switches';
import { cables } from './cables';
import { wirelessDevices } from './wireless-devices';

export const transmission: Product[] = [
  ...switches,
  ...cables,
  ...wirelessDevices
];
