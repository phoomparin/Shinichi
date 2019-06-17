import {Person} from 'types/Person'
import {StrategyContext, StrategyState} from 'types/Strategy'

export async function SocialMediaStrategy(person: Person, _: StrategyState, ctx: StrategyContext) {
  const {Google} = ctx

  const results = await Google.search(`"${person.firstName} ${person.lastName}"`)

  return
}