import {SearchEngine, SearchOption} from 'types/SearchEngine'

import {searchForPages} from './searchForPages'
import {GoogleResultAdapter} from './ResultAdapter'

// TODO: Google Query Builder?

export const Google: SearchEngine = {
  async search(query: string, options?: SearchOption) {
    console.log('Searching Google for:', query)

    const {maxPage = 101} = options || {}
    const pages = await searchForPages(query, maxPage)

    console.log(`Found ${pages.length} results.`)

    return GoogleResultAdapter(pages)
  },
}
