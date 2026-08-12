import { Product } from '@/types';

import { cardReaders } from './card-readers';
import { accessControllers } from './access-controllers';

export const accessControl: Product[] = [
  ...cardReaders,
  ...accessControllers
];
