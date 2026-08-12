import { Product } from '@/types';

import { dolphinSeries } from './dolphin-series';
import { whaleSeries } from './whale-series';

export const analogCameras: Product[] = [
  ...dolphinSeries,
  ...whaleSeries
];
