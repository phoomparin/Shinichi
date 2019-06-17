import {StrategyResult, StrategyState} from 'types/Strategy'
import {Person} from 'types/Person'

/**
 * Derive the gender from the person's title.
 */
export async function GenderStrategy(
  person: Person,
  state: StrategyState,
): Promise<StrategyResult> {
  const {title, thTitle} = person
  if (person.gender) return {person, state}

  if (title && title.includes('Mr.')) {
    person.gender = 'Male'
  }

  if (title && /(Mrs|Ms)/.test(title)) {
    person.gender = 'Female'
  }

  if (thTitle && /(นาย|ดช)/.test(thTitle)) {
    person.gender = 'Male'
  }

  if (thTitle && /(นาง|นางสาว|ดญ)/.test(thTitle)) {
    person.gender = 'Female'
  }

  return {person, state}
}
