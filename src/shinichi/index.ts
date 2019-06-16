import {Strategy, StrategyContext, StrategyResult, StrategyState} from 'types/Strategy'
import {Person} from 'types/Person'
import {Google} from '../sources/google'

export const DefaultContext = {
  Google
}

export class Shinichi {
  person: Person = {}
  state: StrategyState = {}
  strategies: Strategy[] = []
  fields: string[] = []
  context: StrategyContext = DefaultContext

  use(strategy: Strategy) {
    return this.strategies.push(strategy)
  }

  setup(handle: (self: Shinichi) => any) {
    return handle(this)
  }

  wants(...fields: string[]) {
    this.fields = [...this.fields, ...fields]
  }

  know(field: keyof Person, value: any) {
    this.person[field] = value
  }

  target(person: Person) {
    this.person = person
  }

  async search(): Promise<StrategyResult> {
    let {person, state} = this

    for (let strategy of this.strategies) {
      const data = await strategy(person, state, this.context)

      person = data.person
      state = data.state
    }

    return {person, state}
  }

  /**
   * A shorthand for `search`
   *
   * @see {search}
   */
  searchFor(person: Person): StrategyResult {
    this.target(person)
    return this.search()
  }
}
