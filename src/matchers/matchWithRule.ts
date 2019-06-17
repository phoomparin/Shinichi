import {MatchItem, MatchRule} from 'types/Matcher'
import {extractPathFromURL} from '../utils/extractURLFromPath'
import {Nullable} from 'types'

export function matchWithRule(rule: MatchRule, text: string): Nullable<MatchItem> {
  const {matcher} = rule

  if (typeof matcher === 'string') {
    if (text.includes(matcher)) {
      const path = extractPathFromURL(text)

      return {link: path, id: text}
    }
  }

  if (matcher instanceof RegExp) {
    const match = matcher.exec(text)

    if (match) {
      const [link, id] = match

      return {link, id}
    }
  }

  return null
}