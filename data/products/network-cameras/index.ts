import { Product } from '@/types';

import { easySeries } from './easy-series';
import { primeSeries } from './prime-series';
import { proSeries } from './pro-series';
import { owlviewSeries } from './owlview-series';
import { multiviewSeries } from './multiview-series';
import { omniviewSeries } from './omniview-series';
import { solarSeries } from './solar-series';
import { triGuardSeries } from './tri-guard-series';
import { specialSeries } from './special-series';

export const networkCameras: Product[] = [
  ...easySeries,
  ...primeSeries,
  ...proSeries,
  ...owlviewSeries,
  ...multiviewSeries,
  ...omniviewSeries,
  ...solarSeries,
  ...triGuardSeries,
  ...specialSeries
];
