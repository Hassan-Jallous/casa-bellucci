import { de, type Dict } from './de';
import { en } from './en';
import { it } from './it';
import type { Lang } from '../config';

export type { Dict };
export const DICTS: Record<Lang, Dict> = { de, en, it };
