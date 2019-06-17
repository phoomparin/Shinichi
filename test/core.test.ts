import {Person} from '../src/types/Person'
import {Shinichi} from '../src/shinichi'
import {Strategy} from '../src/types/Strategy'

describe('Shinichi Core', () => {
  it('should be able to define custom strategies', async () => {
    const MockStrategy: Strategy = async () => ({
      person: {
        firstName: 'Somsak',
        lastName: 'Jeamteerasakul'
      },
      state: {}
    })

    const shin = new Shinichi()
    shin.strategyMap.firstName = MockStrategy

    shin.want('firstName')

    const {person} = await shin.search()
    expect(person.firstName).toBe('Somsak')
    expect(person.lastName).toBe('Jeamteerasakul')
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