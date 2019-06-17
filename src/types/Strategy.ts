import {Person} from './Person'
import {SearchEngine} from './SearchEngine'
import {Nullable} from 'types/index'

export type StrategyContext = {
  Google: SearchEngine
}

export type StrategyFunction = (
  person: Person,
  state: StrategyState,
  context: StrategyContext,
) => Promise<Nullable<StrategyResult>>

export interface StrategyResult {
  person: Person
  state: StrategyState
}

export type Strategy = StrategyFunction

export type StrategyState = {[key: string]: any}

export type StrategyMapping = Partial<Record<keyof Person, Strategy>>
