export interface SearchOption {
  maxPage: number
}

export interface SearchResult {
  title: string
  link: string
}

export interface SearchEngine {
  search: (query: string, options?: SearchOption) => Promise<SearchResult[]>
}
