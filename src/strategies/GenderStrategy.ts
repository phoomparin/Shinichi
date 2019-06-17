import {StrategyContext, StrategyResult, StrategyState} from 'types/Strategy'
import {Person} from 'types/Person'

/**
 * Derive the gender from the person's title.
 */
export async function GenderStrategy(
  person: Person,
  state: StrategyState,
): Promise<StrategyResult> {
  const {firstName, thFirstName} = person
  if (person.gender) return {person, state}

  if (firstName && firstName.includes('Mr.')) {
    person.gender = 'Male'
  }

  if (firstName && /(Mrs|Ms)\./.test(firstName)) {
    person.gender = 'Female'
  }

  if (thFirstName && /(นาย|ดช\.)/.test(thFirstName)) {
    person.gender = 'Male'
  }

  if (thFirstName && /(นาง|นางสาว|ดญ\.)/.test(thFirstName)) {
    person.gender = 'Female'
  }

  return {person, state}
}
