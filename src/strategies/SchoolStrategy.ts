import {StrategyContext, StrategyState} from 'types/Strategy'
import {Person} from 'types/Person'

export function SchoolStrategy(
  person: Person,
  state: StrategyState,
  ctx: StrategyContext,
) {
  const {Google} = ctx

  const results = Google.search(`"โรงเรียน" "${person.fullName}"`)
  results //?
  // const m = matchSearchResults(results, /โรงเรียน(\w+)/, [person.fullName])
  // if (!m) return

  // person.school = m[0]

  // const data = OBECStrategy(person, state, ctx)

  return {person, state}
}
