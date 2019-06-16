import {Strategy, StrategyContext, StrategyResult, StrategyState} from 'types/Strategy'
import {Person} from 'types/Person'

import {DefaultStrategyMap, fieldsToStrategies, StrategyMapping} from './StrategyMapping'

import {Google} from '../sources/google'

export const DefaultContext = {
  Google
}

export class Shinichi {
  person: Person = {}
  state: StrategyState = {}
  strategies: Strategy[] = []
  context: StrategyContext = DefaultContext
  strategyMap: StrategyMapping = DefaultStrategyMap

  use(strategy: Strategy) {
    // Prevent duplicate entries from being added
    if (this.strategies.includes(strategy)) return

    return this.strategies.push(strategy)
  }

  setup(handle: (self: Shinichi) => any) {
    return handle(this)
  }

  want(field: keyof Person) {
    return this.wants(field)
  }

  wants(...fields: (keyof Person)[]) {
    return fieldsToStrategies(fields, this.strategyMap).map(this.use.bind(this))
  }

  know(field: keyof Person, value: any) {
    this.person[field] = value
  }

  target(person: Person) {
    this.person = {...this.person, ...person}
  }

  async search(): Promise<StrategyResult> {
    let {person, state} = this

    for (let strategy of this.strategies) {
      const data = await strategy(person, state, this.context)

      person = {...person, ...data.person}
      state = {...state, ...data.state}
    }

    return {person, state}
  }

  /**
   * A shorthand for `search`
   *
   * @see {search}
   */
  searchFor(person: Person): Promise<StrategyResult> {
    this.target(person)

    return this.search()
  }
}
