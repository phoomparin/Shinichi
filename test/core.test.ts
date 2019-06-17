import {Person} from '../src/types/Person'
import {Shinichi} from '../src/shinichi'

describe('Shinichi Core', () => {
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