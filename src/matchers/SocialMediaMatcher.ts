import {BulkMatcher} from '../matchers/BulkMatcher'
import {SearchResult} from 'types/SearchEngine'
import {MatcherMapping, MatchResult} from 'types/Matcher'
import {Person} from 'types/Person'

const socialSites: MatcherMapping = {
  Facebook: 'facebook.com',
  GitHub: 'github.com',
  LinkedIn: 'linkedin.com',
  Keybase: 'keybase.io',
  Bandcamp: 'bandcamp.com',
  Medium: 'medium.com',
  Twitter: 'twitter.com',
}

export function SocialMatcher(results: SearchResult[]): MatchResult {
  const bm = new BulkMatcher()
  bm.addMatchers(socialSites)

  bm.add('YouTubeVideo', /https:\/\/www.youtube.com\/watch\?v=(.*)/, {
    multiple: true,
  })


  return bm.match(results.map(x => x.link))
}

