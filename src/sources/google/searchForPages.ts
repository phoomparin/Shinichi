import {search, SearchOption} from 'sources/google/search'
import {customsearch_v1} from 'googleapis'

export type SearchResult = customsearch_v1.Schema$Result

export async function searchForPages(
  query: string,
  maxPage: number = 101,
): Promise<SearchResult[]> {
  let isDone = false
  let entries: SearchResult[] = []
  let startIndex: number | undefined
  let tries = 0

  // console.log('Searching...')

  while (!isDone && tries < 3) {
    const options: SearchOption = {}

    if (startIndex) {
      options.start = startIndex

      // console.log('Searching Next Page:', startIndex)
    }

    const {items, queries} = await search(query, options)
    if (!queries) {
      tries++

      continue
    }

    const np = queries.nextPage

    if (!np || np.length <= 0) {
      isDone = true

      continue
    }

    const [pageInfo] = np

    if (pageInfo.startIndex) {
      startIndex = pageInfo.startIndex
    }

    // console.log(queries)

    if (!items) {
      tries++

      continue
    }

    entries = [...entries, ...items]

    if (!startIndex) {
      isDone = true

      continue
    }

    if (startIndex > 100) {
      isDone = true
    }

    if (startIndex - 1 > maxPage) {
      isDone = true
    }
  }

  return entries
}
