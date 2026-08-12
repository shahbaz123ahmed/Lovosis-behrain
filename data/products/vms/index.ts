import { Product } from '@/types';

import { unicorn } from './unicorn';
import { unvGuardSeries } from './unv-guard-series';
import { vmPlatformProvisional } from './vm-platform-provisional';

export const vms: Product[] = [
  ...unicorn,
  ...unvGuardSeries,
  ...vmPlatformProvisional
];
