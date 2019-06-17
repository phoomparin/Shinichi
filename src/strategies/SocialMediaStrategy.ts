import {Person} from 'types/Person'
import {StrategyContext, StrategyResult, StrategyState} from 'types/Strategy'

import {SocialMatcher} from '../matchers/SocialMediaMatcher'

export async function SocialMediaStrategy(person: Person, state: StrategyState, ctx: StrategyContext): Promise<StrategyResult> {
  const {Google} = ctx

  const results = await Google.search(`"${person.firstName} ${person.lastName}"`)

  const p = SocialMatcher(results)

  return {person: p, state}
}