import {BulkMatcher} from '../matchers/BulkMatcher'
import {SearchResult} from 'types/SearchEngine'
import {MatchResult} from 'types/Matcher'

export function SocialMatcher(results: SearchResult[]): MatchResult {
  const bm = new BulkMatcher()

  bm.add('YouTubeVideo', /https:\/\/www.youtube.com\/watch\?v=(.*)/, {
    multiple: true,
  })

  bm.add('Facebook', 'facebook.com')
  bm.add('GitHub', 'github.com')
  bm.add('LinkedIn', 'linkedin.com')
  bm.add('Keybase', 'keybase.io')
  bm.add('Bandcamp', 'bandcamp.com')
  bm.add('Medium', 'medium.com')
  bm.add('Twitter', 'twitter.com')

  return bm.match(results.map(x => x.link))
}

