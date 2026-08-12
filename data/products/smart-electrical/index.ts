import { Product } from '@/types';

import { connectBox } from './connect-box';
import { solarPower } from './solar-power';
import { smartManagementBox } from './smart-management-box';

export const smartElectrical: Product[] = [
  ...connectBox,
  ...solarPower,
  ...smartManagementBox
];
