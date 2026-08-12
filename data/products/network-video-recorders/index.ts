import { Product } from '@/types';

import { easySeries } from './easy-series';
import { primeSeries } from './prime-series';
import { proSeries } from './pro-series';
import { seekfree } from './seekfree';
import { iqSeries } from './iq-series';
import { imSeries } from './im-series';
import { ixSeries } from './ix-series';

export const networkVideoRecorders: Product[] = [
  ...easySeries,
  ...primeSeries,
  ...proSeries,
  ...seekfree,
  ...iqSeries,
  ...imSeries,
  ...ixSeries
];
