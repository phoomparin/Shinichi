export interface SearchOption {
  maxPage: number
}

export interface SearchResult {
  title: string
  link: string
  displayLink?: string
  description?: string
}

export type SearchFunction = (query: string, options?: SearchOption) => Promise<SearchResult[]>

export interface SearchEngine {
  search: SearchFunction
}
