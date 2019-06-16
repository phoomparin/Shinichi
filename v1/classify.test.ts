import {extractPathFromURL} from '../../src/extractURLFromPath'
import {MatchItem, SearchRecord} from '../../src/types'
import {MatchEngine} from '../src/v1/engines/MatchEngine'
import {SocialMatcher} from '../src/classfiers/SocialMatcher'

const TEST_DATA = `
  Phoomparin Mano: For The Love Of Web Assembly - Lightning Talk ... -> https://www.youtube.com/watch?v=-2iJG0FVGaY
  Phoomparin Mano | Facebook -> https://www.facebook.com/phoomparin.mano
  phoomparin (Phoomparin Mano) · GitHub -> https://github.com/phoomparin
  Phoomparin Mano – Medium -> https://medium.com/@phoomparin
  Phoomparin Mano -> https://phoom.in.th/
  Phoomparin Mano - Full Stack Developer - Axi Platform | LinkedIn -> https://th.linkedin.com/in/phoomparin
  Phoomparin Mano -> https://twitter.com/phoomparin?lang=en
  Phoomparin Mano -> https://bandcamp.com/phoomparin
  Phoomparin Mano (@phoomparin) | Twitter -> https://twitter.com/phoomparin?lang=gl
  phoomparin (Phoomparin Mano) | Keybase -> https://keybase.io/phoomparin
`

const buildTestData = (data: string): SearchRecord[] =>
  data
    .split('\n')
    .map(x => x.trim())
    .map(x => x.split(' -> '))
    .map(([title, link]) => ({title, link}))

const FB_URL = 'https://www.facebook.com/phoomparin.mano'
const GITHUB_URL = 'https://github.com/phoomparin'
const LINKEDIN_URL = 'https://th.linkedin.com/in/phoomparin'
const MEDIUM_URL = 'https://medium.com/@phoomparin'
const BANDCAMP_URL = 'https://bandcamp.com/phoomparin'
const KEYBASE_URL = 'https://keybase.io/phoomparin'
const TWITTER_URL = 'https://twitter.com/phoomparin'

describe('Classification Engine', () => {
  it('should retrieve social media URLs', () => {
    const engine = new MatchEngine()
    engine.setup(SocialMatcher)

    const records = buildTestData(TEST_DATA)
    const r = engine.Match(records)

    const expectLink = (m?: MatchItem) => expect(m && m.link)

    expectLink(r.Facebook).toBe(FB_URL)
    expectLink(r.GitHub).toBe(GITHUB_URL)
    expectLink(r.LinkedIn).toBe(LINKEDIN_URL)
    expectLink(r.Medium).toBe(MEDIUM_URL)
    expectLink(r.Bandcamp).toBe(BANDCAMP_URL)
    expectLink(r.Keybase).toBe(KEYBASE_URL)
    expectLink(r.Twitter).toContain(TWITTER_URL)

    if (r.YouTubeVideo) {
      expect(r.YouTubeVideo.length).toBe(1)

      // prettier-ignore
      expect(r.YouTubeVideo[0].link).toBe('https://www.youtube.com/watch?v=-2iJG0FVGaY')
    }

    r //?
  })

  it('should extract path from URL', () => {
    const expectPath = (url: string) => expect(extractPathFromURL(url))
    const username = 'phoomparin'

    expectPath(FB_URL).toBe('phoomparin.mano')
    expectPath(GITHUB_URL).toBe(username)
    expectPath(LINKEDIN_URL).toBe('in/' + username)
    expectPath(MEDIUM_URL).toBe('@' + username)
    expectPath(BANDCAMP_URL).toBe(username)
    expectPath(KEYBASE_URL).toBe(username)
    expectPath(TWITTER_URL).toBe(username)
  })
})
