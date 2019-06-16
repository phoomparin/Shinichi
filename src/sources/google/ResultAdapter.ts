import {GoogleSearchResult} from './search'
import {SearchResult} from 'types/SearchEngine'

export const GoogleResultAdapter = (
  resultPages: GoogleSearchResult[],
): SearchResult[] =>
  resultPages
    .map(resultPage => {
      if (!resultPage.items) return []

      return resultPage.items.map(result => ({
        title: result.title || '',
        link: result.link || '',
      }))
    })
    .reduce((x, y) => [...x, ...y])
