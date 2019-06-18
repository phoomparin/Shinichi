import {GoogleSearchResult} from './search'
import {SearchResult} from 'types/SearchEngine'

export const GoogleResultAdapter = (
  results: GoogleSearchResult[],
): SearchResult[] => {
  return results
    .map(result => {
      return {
        title: result.title || '',
        link: result.link || '',
        displayLink: result.displayLink || '',
        description: result.snippet || ''
      }
    })
}
