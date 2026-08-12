import { Product } from '@/types';

import { computationServer } from './computation-server';
import { edgeComputingServer } from './edge-computing-server';

export const serverProducts: Product[] = [
  ...computationServer,
  ...edgeComputingServer
];
