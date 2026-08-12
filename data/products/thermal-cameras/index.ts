import { Product } from '@/types';

import { bulletSeries } from './bullet-series';
import { positioningSystem } from './positioning-system';
import { turretSeries } from './turret-series';

export const thermalCameras: Product[] = [
  ...bulletSeries,
  ...positioningSystem,
  ...turretSeries
];
