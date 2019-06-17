import {SearchEngine, SearchFunction, SearchResult} from '../../src/types/SearchEngine'

export const makeGoogleMock = (results: SearchResult[]): SearchEngine => ({
  search: async () => results
})

export const makeSingleGoogleMock = (title: string, link: string) =>
  makeGoogleMock([{title, link}])

export const makeSearchEngine = (searchFn: SearchFunction): SearchEngine => ({
  search: searchFn
})
