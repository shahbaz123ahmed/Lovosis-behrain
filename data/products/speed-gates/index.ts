import { Product } from '@/types';

import { tripod } from './tripod';
import { swingBarriers } from './swing-barriers';

export const speedGates: Product[] = [
  ...tripod,
  ...swingBarriers
];
