import { Product } from '@/types';

import { accessControl } from './access-control';
import { cameras } from './cameras';
import { displayControl } from './display-control';
import { recorders } from './recorders';
import { storage } from './storage';
import { traffic } from './traffic';
import { videoIntercom } from './video-intercom';
import { ipSpeaker } from './ip-speaker';
import { power } from './power';

export const accessories: Product[] = [
  ...accessControl,
  ...cameras,
  ...displayControl,
  ...recorders,
  ...storage,
  ...traffic,
  ...videoIntercom,
  ...ipSpeaker,
  ...power
];
