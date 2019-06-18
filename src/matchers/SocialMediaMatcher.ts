import {BulkMatcher} from '../matchers/BulkMatcher'
import {SearchResult} from 'types/SearchEngine'
import {MatcherMapping, MatchResult} from 'types/Matcher'
import {InternetAccount, Person} from 'types/Person'

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

function AccountAdapter(record: MatchResult): SocialMap {
  const map: SocialMap = {}

  for (let key in record) {
    const k = key as (keyof Person)
    const item = record[k]
    if (!item) continue

    map[k] = {username: item.match || '', link: item.text || ''}
  }

  return map
}

export function SocialMatcher(results: SearchResult[]): SocialMap {
  const bm = new BulkMatcher()
  bm.addMatchers(socialSites)

  bm.add('YouTubeVideo', /https:\/\/www.youtube.com\/watch\?v=(.*)/, {
    multiple: true,
  })

  const links = results.map(x => x.link)
  const matchResult = bm.match(links)

  return AccountAdapter(matchResult)
}

