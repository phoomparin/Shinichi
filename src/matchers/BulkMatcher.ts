import {Matcher, MatcherMapping, MatcherOptions, MatchItem, MatchResult, MatchRule} from 'types/Matcher'
import {Field, Person} from 'types/Person'
import {matchWithRule} from './matchWithRule'

export class BulkMatcher {
  rules: MatchRule[] = []

  add(name: keyof Person, matcher: Matcher, options: MatcherOptions = {}) {
    const matchRule: MatchRule = {
      name,
      matcher,
      multiple: options.multiple
    }

    return this.rules.push(matchRule)
  }

  addMatchers(mapping: MatcherMapping) {
    for (let key in mapping) {
      const f = key as Field

      this.add(f, mapping[f] as Matcher)
    }
  }

  match(list: string[]): MatchResult {
    const results: MatchResult = {}

    for (let text of list) {
      const m = this.matchWithRules(text)

      if (m) {
        const [match, rule] = m

        results[rule] = match
      }
    }

    return results
  }

  matchWithRules(text: string): ([MatchItem, keyof Person] | null) {
    for (let rule of this.rules) {
      const match = matchWithRule(rule, text)

      if (match) return [match, rule.name]
    }

    return null
  }
}