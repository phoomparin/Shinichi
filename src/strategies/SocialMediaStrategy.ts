import {Strategy, StrategyResult} from 'types/Strategy'

import {SocialMatcher} from '../matchers/SocialMediaMatcher'
import {Person} from 'types/Person'

export const SocialMediaStrategy: Strategy = async (target, state, ctx): Promise<StrategyResult> => {
  const {Google} = ctx

  const results = await Google.search(`"${target.firstName} ${target.lastName}"`)

  const person = SocialMatcher(results) as Person

  return {person, state}
}