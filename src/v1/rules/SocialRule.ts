import {Google} from 'sources/google'
import {PersonRecord, SearchRecord} from 'types'
import {DiscoveryRule} from 'v1/engines/DiscoveryEngine'
import {MatchEngine} from 'v1/engines/MatchEngine'
import {SocialMatcher} from 'classfiers/SocialMatcher'
import {SearchResult} from 'sources/google/searchForPages'

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
