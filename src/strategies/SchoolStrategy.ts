import {Strategy} from 'types/Strategy'

import {match} from '../matchers/match'

const highestKey = (obj: {[index: string]: number}) =>
  Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b)

export const SchoolStrategy: Strategy = async (person, state, ctx) => {
  const {Google} = ctx

  // If the school is already declared, avoid re-running this.
  if (person.school) return

  const results = await Google.search(`"โรงเรียน" "${person.thFirstName} ${person.thLastName}"`)
  if (!results) return

  const matchCount: {[key: string]: number} = {}

  results.forEach(result => {
    const {description} = result
    if (!description) return

    const [school] = match(description, /โรงเรียน([ก-๙]+)/, [person.thFirstName])
    if (!school) return

    // console.debug('School =', school)

    if (matchCount[school]) {
      matchCount[school] += 1
    } else {
      matchCount[school] = 1
    }
  })

  person.school = highestKey(matchCount)

  return {person, state}
}
