import {Shinichi} from '../src/shinichi'
import {Person} from '../src/types/Person'
import {SocialGoogleMock} from './mocks/SocialMock'
import {expectText, expectMatch} from './utils/Expect'

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

    expectMatch(p.GitHub).toBe('phoomparin')
    expectMatch(p.Facebook).toBe('phoomparin.mano')

    expectText(p.GitHub).toBe('https://github.com/phoomparin')
    expectText(p.Facebook).toBe('https://facebook.com/phoomparin.mano')
  })
})