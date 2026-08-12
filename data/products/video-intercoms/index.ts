import { Product } from '@/types';

import { indoorStations } from './indoor-stations';
import { doorStations } from './door-stations';
import { doorbell } from './doorbell';
import { mainStations } from './main-stations';

export const videoIntercoms: Product[] = [
  ...indoorStations,
  ...doorStations,
  ...doorbell,
  ...mainStations
];
