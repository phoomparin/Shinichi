import {Person} from '../src/types/Person'
import {Shinichi} from '../src/shinichi'
import {StrategyResult} from '../src/types/Strategy'

describe('Shinichi Core', () => {
  it('should be able to define custom strategies', async () => {
    const MockStrategy = async (): Promise<StrategyResult> => ({
      person: {
        title: 'Mr.',
        firstName: 'Somsak',
        lastName: 'Jeamteerasakul'
      },
      state: {
        _mockStrategy: true
      },
    })

    const shin = new Shinichi()
    shin.strategyMap.firstName = MockStrategy

    shin.want('firstName')

    const {person, state} = await shin.search()
    expect(person.firstName).toBe('Somsak')
    expect(person.lastName).toBe('Jeamteerasakul')

    // Since gender is not requested, it should not be defined.
    expect(person.gender).not.toBeDefined()

    // The state should be properly assigned.
    expect(state._mockStrategy).toBe(true)
  })

  it('should not re-run the strategies that has already been specified', async () => {
    const target: Person = {
      gender: 'Non Binary',
      school: 'Hogwarts'
    }

    const shin = new Shinichi()

    const search = jest.fn()
    shin.context = {Google: {search}}

    shin.wants( 'gender', 'school')

    const {person: p} = await shin.searchFor(target)

    expect(p.gender).toBe('Non Binary')
    expect(p.school).toBe('Hogwarts')
    expect(search).not.toBeCalled()
  })
})