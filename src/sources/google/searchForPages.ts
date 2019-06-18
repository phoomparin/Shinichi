import {GoogleSearchOption, GoogleSearchResult, search} from './search'

export async function searchForPages(
  query: string,
  maxPage: number = 101,
): Promise<GoogleSearchResult[]> {
  let isDone = false
  let entries: GoogleSearchResult[] = []
  let startIndex: number | undefined
  let tries = 0

  while (!isDone && tries < 3) {
    const options: GoogleSearchOption = {}

    if (startIndex) {
      options.start = startIndex
    }

    const {items, queries} = await search(query, options)
    console.log('Items =', items.length)

    if (!items) {
      tries++

      continue
    }

    entries = [...entries, ...items]

    // console.log('Queries =', queries)

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
