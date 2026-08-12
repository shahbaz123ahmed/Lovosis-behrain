import { Product } from '@/types';

import { ezaccess } from './ezaccess';
import { uniease } from './uniease';
import { ezstation } from './ezstation';
import { unitoolsPro } from './unitools-pro';
import { pcManagementSoftware } from './pc-management-software';
import { softwareMobileApp } from './software-mobile-app';
import { unvGuard } from './unv-guard';

export const software: Product[] = [
  ...ezaccess,
  ...uniease,
  ...ezstation,
  ...unitoolsPro,
  ...pcManagementSoftware,
  ...softwareMobileApp,
  ...unvGuard
];
