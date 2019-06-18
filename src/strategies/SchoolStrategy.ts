import {Strategy} from 'types/Strategy'

import {match} from '../matchers/match'

export const SchoolStrategy: Strategy = async (person, state, ctx) => {
  const {Google} = ctx

  // If the school is already declared, avoid re-running this.
  if (person.school) return

  const results = await Google.search(`"โรงเรียน" "${person.thFirstName} ${person.thLastName}"`)
  if (!results) return

  results.forEach(result => {
    const {description} = result
    if (!description) return

    const [school] = match(description, /โรงเรียน([ก-๙]+)/, [person.thFirstName])
    if (!school) return

    console.log('School =', school)

    person.school = school
  })

  return {person, state}
}
