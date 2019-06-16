import {SearchEngine, SearchResult} from '../../src/types/SearchEngine'

export const GoogleMock: SearchEngine = {
  async search(): Promise<SearchResult[]> {
    return [
      {link: '', title: ''}
    ]
  },
}