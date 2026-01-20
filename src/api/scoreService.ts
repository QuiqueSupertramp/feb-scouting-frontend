import type { Classifications } from '@/views/leagues/components/classification/types'
import { fetcher } from './fetcher'
import { API_URLS } from './url'

export class ScoreService {
  static getClassifications = async () =>
    await fetcher<Classifications>(`${API_URLS.scores}/classification`)
}
