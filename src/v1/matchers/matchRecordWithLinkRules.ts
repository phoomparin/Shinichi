import {extractPathFromURL} from '../../extractURLFromPath'
import {Matches, MatchItem, Matcher, RuleType, SearchRecord} from '../../types'

export function matchRecordWithLinkRules(
  record: SearchRecord,
  rules: Matcher[],
): Matches {
  const matches: Matches = {}
  const linkRules = rules.filter(rule => rule.type === RuleType.LINK)

  const append = (data: MatchItem, rule: Matcher) => {
    if (rule.multiple) {
      if (!matches[rule.name]) {
        matches[rule.name] = []
      }

      const matchList = matches[rule.name] as MatchItem[]
      matchList.push(data)

      return
    }

    matches[rule.name] = data
  }

  for (let rule of linkRules) {
    const {matchLink} = rule

    if (!record.link) continue

    if (typeof matchLink === 'string') {
      if (record.link.includes(matchLink)) {
        const path = extractPathFromURL(record.link)

        append({link: record.link, id: path}, rule)
      }
    }

    if (matchLink instanceof RegExp) {
      const match = matchLink.exec(record.link)

      if (match) {
        append({link: match[0], id: match[1]}, rule)
      }
    }
  }

  return matches
}
