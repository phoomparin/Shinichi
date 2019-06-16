// IDEA: Google Query Builder?

interface SearchEngine {
  search: (query: string, options?: SearchOptions) => SearchResult[]
}

const MockGoogle: SearchEngine = {
  search(query: string, options?: SearchOptions) {
    return []
  },
}

describe('The discovery engine', () => {
  it('should execute School Strategy correctly', () => {
    const person = {fullName: 'Phoomparin Mano'}

    const I = new Detective()
    I.determine('fullName')
    I.searchFor(person)
  })
})
