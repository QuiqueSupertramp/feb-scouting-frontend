import type { Classifications } from '@/views/leagues/components/classification/types'
import { fetcher } from './fetcher'

export class ScoreService {
  static getClassifications = async () => await fetcher<Classifications>('/scores/classification')
}
