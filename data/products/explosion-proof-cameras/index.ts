import { Product } from '@/types';

import { bulletSeries } from './bullet-series';
import { ptzSeries } from './ptz-series';

export const explosionProofCameras: Product[] = [
  ...bulletSeries,
  ...ptzSeries
];
