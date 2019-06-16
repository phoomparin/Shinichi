import {GoogleMock} from './mocks/GoogleMock'

import {Shinichi} from '../src/shinichi'
import {Person} from '../src/types/Person'
import {StrategyContext} from '../src/types/Strategy'
import {SchoolStrategy} from '../src/strategies/SchoolStrategy'

const MockContext: StrategyContext = {
  Google: GoogleMock,
}

describe('Shinichi', () => {
  it('should find the school name of Phoomparin', async () => {
    const person: Person = {fullName: 'Phoomparin Mano'}

    const shin = new Shinichi()
    shin.context = MockContext
    shin.use(SchoolStrategy)
    shin.know('gender', 'Male')
    shin.target(person)

    const result = await shin.search()
    expect(result.person.fullName).toBe('Phoomparin Mano')
    expect(result.person.gender).toBe('Male')
  })
})
