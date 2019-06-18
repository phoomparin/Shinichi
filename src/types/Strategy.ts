import {Person} from './Person'
import {SearchEngine} from './SearchEngine'

export type StrategyContext = {
  Google: SearchEngine
}

export type StrategyFunction = (
  person: Person,
  state: StrategyState,
  context: StrategyContext,
) => Promise<StrategyResult | undefined>

export type StrategyResult = {
  person: Person
  state: StrategyState
}

export type Strategy = StrategyFunction

export type StrategyState = {[key: string]: any}

export type StrategyMapping = Partial<Record<keyof Person, Strategy>>
