import {MatchItem, MatchRule} from 'types/Matcher'
import {extractPathFromURL} from '../utils/extractURLFromPath'
import {Nullable} from 'types'

export function matchWithRule(rule: MatchRule, text: string): Nullable<MatchItem> {
  const {matcher} = rule

  if (typeof matcher === 'function') {
    return matcher(text, rule)
  }

  if (typeof matcher === 'string') {
    if (text.includes(matcher)) {
      const match = extractPathFromURL(text)

      return {text, match}
    }
  }

  if (matcher instanceof RegExp) {
    const m = matcher.exec(text)

    if (m) {
      const [text, match] = m

      return {text, match}
    }
  }

  return null
}