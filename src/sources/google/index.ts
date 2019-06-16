import {SearchEngine, SearchOption} from 'types/SearchEngine'

import {searchForPages} from './searchForPages'
import {GoogleResultAdapter} from './ResultAdapter'

// TODO: Google Query Builder?

export const Google: SearchEngine = {
  async search(query: string, options?: SearchOption) {
    const {maxPage = 100} = options || {}
    const pages = await searchForPages(query, maxPage)

    return GoogleResultAdapter(pages)
  },
}
