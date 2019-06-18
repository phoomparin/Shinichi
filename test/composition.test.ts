import {Strategy, StrategyResult} from '../src/types/Strategy'
import {SchoolStrategy} from '../src/strategies/SchoolStrategy'
import {GenderStrategy} from '../src/strategies/GenderStrategy'

import {extend} from '../src/shinichi/compose'
import {Person} from '../src/types/Person'
import {Shinichi} from '../src/shinichi'
import {SchoolMockContext} from './mocks/SchoolMock'
import {expectMatch} from './utils/Expect'

const CombinedStrategy: Strategy = async (person, state, ctx): Promise<StrategyResult> => {
  await extend([SchoolStrategy, GenderStrategy], person, state, ctx)

  if (person.gender && person.school) {
    person.Facebook = {
      match: 'phoomparin.mano',
      text: 'https://facebook.com/phoomparin.mano'
    }
  }

  return {person, state}
}

describe('Strategy Composition', () => {
  it('should be able to compose strategies', async () => {
    const target: Person = {
      title: 'Mr.',
      firstName: 'Phoomparin',
      lastName: 'Mano'
    }

    const shin = new Shinichi()
    shin.context = SchoolMockContext
    shin.strategyMap.Facebook = CombinedStrategy

    shin.want('Facebook')

    const {person} = await shin.searchFor(target)
    expectMatch(person.Facebook).toBe('phoomparin.mano')
  })
})