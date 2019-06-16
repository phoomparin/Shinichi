import {Strategy, StrategyMapping} from 'types/Strategy'
import {Person} from 'types/Person'

import {SchoolStrategy} from '../strategies/SchoolStrategy'

export const DefaultStrategyMap: StrategyMapping = {
  school: SchoolStrategy,
}

type Field = keyof Person

export const fieldsToStrategies = (fields: Field[], strategyMap: StrategyMapping = DefaultStrategyMap): Strategy[] =>
  fields.map(field => strategyMap[field]).filter(x => x)

