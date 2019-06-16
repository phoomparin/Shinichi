import {Person} from './Person'
import {SearchEngine} from './SearchEngine'

export type StrategyContext = {
  Google: SearchEngine
}

export type StrategyFunction = (
  person: Person,
  state: StrategyState,
  context: StrategyContext,
) => StrategyResult

export interface StrategyResult {
  person: Person
  state: StrategyState
}

export type Strategy = StrategyFunction

export type StrategyState = {[key: string]: any}
