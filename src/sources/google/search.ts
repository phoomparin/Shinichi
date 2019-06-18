import {google, customsearch_v1} from 'googleapis'

const {API_KEY, SEARCH_ENGINE_ID} = process.env

const CustomSearch = google.customsearch('v1')

export type GoogleSearchOption = customsearch_v1.Params$Resource$Cse$List
export type GoogleSearchResponse = customsearch_v1.Schema$Search
export type GoogleSearchResult = customsearch_v1.Schema$Result

export async function search(
  query: string,
  options: GoogleSearchOption = {},
): Promise<GoogleSearchResponse> {
  try {
    const {data} = await CustomSearch.cse.list({
      q: query,
      auth: API_KEY,
      cx: SEARCH_ENGINE_ID,
      ...options,
    })

    return data
  } catch (err) {
    console.error(err.message, err.response.message)

    throw err
  }
}
