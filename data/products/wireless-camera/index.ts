import { Product } from '@/types';

import { sSeries } from './s-series';
import { bSeries } from './b-series';
import { pSeries } from './p-series';

export const wirelessCamera: Product[] = [
  ...sSeries,
  ...bSeries,
  ...pSeries
];
