// IDEA: Google Query Builder?

interface SearchEngine {
  search: (query: string, options?: SearchOptions) => SearchResult[]
}

const MockGoogle: SearchEngine = {
  search(query: string, options?: SearchOptions) {
    return []
  },
}

describe('Shinichi', () => {
  it('should find the school name of Phoomparin', () => {
    const person = {fullName: 'Phoomparin Mano'}

    const shin = new Shinichi()
    shin.use(SchoolStrategy)
    shin.want('fullName', 'firstName')
    shin.know('isThaiStudent', true)
    shin.target(person)
    shin.search()
    // shin.searchFor(person)
  })
})
