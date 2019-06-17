import {StrategyContext, StrategyState} from 'types/Strategy'
import {Person} from 'types/Person'

import {match} from '../matchers/match'

export async function SchoolStrategy(
  person: Person,
  state: StrategyState,
  ctx: StrategyContext,
) {
  const {Google} = ctx

  const results = await Google.search(`"โรงเรียน" "${person.thFirstName} ${person.thLastName}"`)

  if (!results || !results[0]) return

  const title = results[0].title

  const m = match(title, /โรงเรียน([ก-๙]+)/, [person.thFirstName])

  const [school] = m

  if (!school) return

  person.school = school

  return {person, state}
}
