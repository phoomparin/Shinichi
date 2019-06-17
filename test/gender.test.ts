import {Person} from '../src/types/Person'
import {Shinichi} from '../src/shinichi'

describe('Gender Strategy', () => {
  it('should derive my gender from my Thai title', async () => {
    const target: Person = {
      thTitle: 'นาย',
      thFirstName: 'ภูมิปรินทร์',
      thLastName: 'มะโน'
    }

    const shin = new Shinichi()
    shin.want('gender')

    const {person: p} = await shin.searchFor(target)

    expect(p.gender).toBe('Male')
  })

  it('should derive my gender from my English title', async () => {
    const target: Person = {
      title: 'Mrs.',
      firstName: 'Suthida',
      lastName: 'Vajiralongkorn'
    }

    const shin = new Shinichi()
    shin.want('gender')

    const {person: p} = await shin.searchFor(target)

    expect(p.gender).toBe('Female')
  })
})