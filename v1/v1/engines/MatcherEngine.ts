import {matchRecordWithLinkRules} from '../matchers/matchRecordWithLinkRules'
import {
  Matcher,
  Matches,
  PersonRecord,
  Matcher,
  RuleType,
  SearchRecord,
} from '../../types'

export class MatchEngine {
  rules: Matcher[] = []

  addRule(rule: Matcher) {
    this.rules.push(rule)
  }

  setup(method: (engine: MatchEngine) => void) {
    method(this)
  }

  addLinkRule(name: keyof PersonRecord, matchLink: Matcher) {
    this.rules.push({name, matchLink, type: RuleType.LINK})
  }

  matchRecord(record: SearchRecord): Matches {
    return matchRecordWithLinkRules(record, this.rules)
  }

  Match(records: SearchRecord[]): PersonRecord {
    return records
      .map(record => this.matchRecord(record))
      .reduce((x, y) => ({...x, ...y}))
  }
}
