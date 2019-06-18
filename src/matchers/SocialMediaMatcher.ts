import {BulkMatcher} from '../matchers/BulkMatcher'
import {SearchResult} from 'types/SearchEngine'
import {MatcherMapping, MatchItem} from 'types/Matcher'
import {Person, InternetAccount} from 'types/Person'

const socialSites: MatcherMapping = {
  Facebook: 'facebook.com',
  GitHub: 'github.com',
  LinkedIn: 'linkedin.com',
  Keybase: 'keybase.io',
  Bandcamp: 'bandcamp.com',
  Medium: 'medium.com',
  Twitter: 'twitter.com',
}

export type SocialMap = Partial<Record<keyof Person, InternetAccount>>

const AccountAdapter = (m: MatchItem): InternetAccount =>
  ({username: m.match || '', link: m.text || ''})

export function SocialMatcher(results: SearchResult[]): SocialMap {
  const bm = new BulkMatcher()
  bm.addMatchers(socialSites)

  bm.add('YouTubeVideo', /https:\/\/www.youtube.com\/watch\?v=(.*)/, {
    multiple: true,
  })

  const links = results.map(x => x.link)

  return bm.match(links, AccountAdapter)
}

