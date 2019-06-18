import {Strategy, StrategyContext, StrategyResult, StrategyState} from 'types/Strategy'
import {Person} from 'types/Person'

const depends = (...strategies: Strategy[]): Strategy => async (person, state, ctx): Promise<StrategyResult> => {
  for (let strategy of strategies) {
    const result = await strategy(person, state, ctx)
    if (!result) continue

    person = result.person
    state = result.state
  }

  return {person, state}
}

export async function extend(strategies: Strategy[], person: Person, state: StrategyState, ctx: StrategyContext) {
  const RootStrategy = depends(...strategies)
  const result = await RootStrategy(person, state, ctx)

  if (result) {
    person = result.person
    state = result.state
  }

  return {person, state, ctx}
}