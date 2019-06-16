import {Google} from './node_modules/sources/google'
import {PersonRecord, SearchRecord} from './node_modules/types'
import {DiscoveryRule} from './node_modules/engines/DiscoveryEngine'
import {MatchEngine} from './node_modules/engines/MatchEngine'
import {SocialMatcher} from './node_modules/classfiers/SocialMatcher'
import {SearchResult} from './node_modules/sources/google/searchForPages'

const Matcher = new MatchEngine()
Matcher.setup(SocialMatcher)

function asSearchRecord(result: SearchResult[]): SearchRecord[] {
  return result.map(x => ({
    link: x.link || '',
    title: x.title || '',
  }))
}

export const SocialRule: DiscoveryRule = {
  name: 'Social Media',
  async discover(record: PersonRecord) {
    if (!record.name) return {}

    const result = await Google.search(record.name)
    const searchRecord = asSearchRecord(result)
    const newRecord = Matcher.Match(searchRecord)

    return {record: newRecord, state: {google: searchRecord}}
  },
}
