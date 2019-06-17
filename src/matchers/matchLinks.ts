import {Matches, MatchItem, MatchRule} from 'types/Matcher'
import {SearchResult} from 'types/SearchEngine'
import {extractPathFromURL} from 'utils/extractURLFromPath'

export function matchLinks(
  result: SearchResult,
  rules: MatchRule[],
): Matches {
  const matches: Matches = {}

  const append = (data: MatchItem, rule: MatchRule) => {
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

  for (let rule of rules) {
    const {matchLink} = rule

    if (!result.link) continue

    if (typeof matchLink === 'string') {
      if (result.link.includes(matchLink)) {
        const path = extractPathFromURL(result.link)

        append({link: result.link, id: path}, rule)
      }
    }

    if (matchLink instanceof RegExp) {
      const match = matchLink.exec(result.link)

      if (match) {
        append({link: match[0], id: match[1]}, rule)
      }
    }
  }

  return matches
}
