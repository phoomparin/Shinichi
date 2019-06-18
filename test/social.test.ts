import {Shinichi} from '../src/shinichi'
import {Person} from '../src/types/Person'
import {SocialGoogleMock} from './mocks/SocialMock'
import {expectLink, expectUsername} from './utils/Expect'

describe('Social Media Strategy', () => {
  it('should detect my social network identities', async () => {
    const target: Person = {
      firstName: 'Phoomparin',
      lastName: 'Mano'
    }

    const shin = new Shinichi()
    shin.context = SocialGoogleMock

    shin.want('Facebook')

    const {person: p} = await shin.searchFor(target)

    expectUsername(p.GitHub).toBe('phoomparin')
    expectUsername(p.Facebook).toBe('phoomparin.mano')

    expectLink(p.GitHub).toBe('https://github.com/phoomparin')
    expectLink(p.Facebook).toBe('https://facebook.com/phoomparin.mano')
  })
})