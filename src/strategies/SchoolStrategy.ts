import {Strategy} from 'types/Strategy'

import {match} from '../matchers/match'

export const SchoolStrategy: Strategy = async (person, state, ctx) => {
  const {Google} = ctx

  // If the school is already declared, avoid re-running this.
  if (person.school) return

  const results = await Google.search(`"โรงเรียน" "${person.thFirstName} ${person.thLastName}"`)

  if (!results || !results[0]) return

  const title = results[0].title

  const m = match(title, /โรงเรียน([ก-๙]+)/, [person.thFirstName])

  const [school] = m

  if (!school) return

  person.school = school

  return {person, state}
}
