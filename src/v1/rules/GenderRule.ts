import {Gender, PersonRecord} from 'types'
import {DiscoveryRule} from 'v1/engines/DiscoveryEngine'

export const GenderRule: DiscoveryRule = {
  name: 'Gender',
  discover: (record: PersonRecord) => {
    const {name} = record
    if (!name) return {}

    let gender: Gender = 'Unknown'

    if (name.includes('Mr.')) {
      gender = 'Male'
    }

    if (/(Ms|Mrs)/.test(name)) {
      gender = 'Female'
    }

    return {record: {gender}}
  },
}