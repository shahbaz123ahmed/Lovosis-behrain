import { Product } from '@/types';

import { primeSeries } from './prime-series';
import { proSeries } from './pro-series';
import { positioningSystem } from './positioning-system';
import { easySeries } from './easy-series';

export const ptzCameras: Product[] = [
  ...primeSeries,
  ...proSeries,
  ...positioningSystem,
  ...easySeries
];
