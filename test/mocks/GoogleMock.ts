import {SearchEngine, SearchResult} from '../../src/types/SearchEngine'

export const GoogleMock: SearchEngine = {
  async search() {
    return [
      {link: '', title: '', a: 1}
    ]
  },
}