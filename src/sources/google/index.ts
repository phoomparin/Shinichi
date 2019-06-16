import {searchForPages} from 'sources/google/searchForPages'
import {search} from 'sources/google/search'

interface GoogleOption {
  maxPage: number
}

export const Google = {
  name: 'Google',

  search(query: string, options?: GoogleOption) {
    const {maxPage = 100} = options || {}

    return searchForPages(query, maxPage)
  },

  searchOnce(query: string) {
    return search(query)
  }
}