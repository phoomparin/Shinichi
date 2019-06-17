import {Strategy, StrategyMapping} from 'types/Strategy'
import {Person} from 'types/Person'

import {SchoolStrategy} from '../strategies/SchoolStrategy'
import {GenderStrategy} from '../strategies/GenderStrategy'

export const DefaultStrategyMap: StrategyMapping = {
  school: SchoolStrategy,
  gender: GenderStrategy
}

type Field = keyof Person

export const fieldsToStrategies = (fields: Field[], strategyMap: StrategyMapping = DefaultStrategyMap): Strategy[] =>
  fields.map(field => strategyMap[field]).filter(x => x)

