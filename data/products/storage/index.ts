import { Product } from '@/types';

import { videoStorage } from './video-storage';
import { diskEnclosure } from './disk-enclosure';
import { flashMemory } from './flash-memory';

export const storage: Product[] = [
  ...videoStorage,
  ...diskEnclosure,
  ...flashMemory
];
