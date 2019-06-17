import {SocialMatcher} from '../src/matchers/SocialMediaMatcher'
import {MatchItem} from '../src/types/Matcher'

const expectLink = (field?: MatchItem) => expect(field && field.link)

describe('Bulk Matcher', () => {
  it('Match items using the social media matcher', () => {
    const results = [{
      title: 'GitHub - The Place where I fork',
      link: 'https://github.com/phoomparin'
    }, {
      title: 'Facebook - Phoomparin Mano',
      link: 'https://facebook.com/phoomparin.mano'
    }]

    const sm = SocialMatcher(results)

    expectLink(sm.GitHub).toBe('phoomparin')
    expectLink(sm.Facebook).toBe('phoomparin.mano')
  })
})