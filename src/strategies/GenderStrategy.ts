import {Strategy, StrategyResult} from 'types/Strategy'

const test = (regex: RegExp, text?: string) =>
  text && regex.test(text)

/**
 * Derive the gender from the person's title.
 */
export const GenderStrategy: Strategy = async (person, state): Promise<StrategyResult> => {
  const {title, thTitle} = person

  // If the gender is already declared, avoid re-running this.
  if (person.gender) return

  if (test(/Mr/, title)) {
    person.gender = 'Male'
  }

  if (test(/(Mrs|Ms)/, title)) {
    person.gender = 'Female'
  }

  if (test(/(นาย|ดช)/, thTitle)) {
    person.gender = 'Male'
  }

  if (test(/(นาง|นางสาว|ดญ)/, thTitle)) {
    person.gender = 'Female'
  }

  return {person, state}
}
