import {DiscoveryEngine} from '../../src/v1/engines/DiscoveryEngine'
import {GenderRule} from '../../src/v1/rules/GenderRule'
import {PersonRecord} from '../../src/types'

describe('Discovery Engine', () => {
  it('should apply the gender rule', async function() {
    const phoom: PersonRecord = {name: 'Mr. Phoomparin Mano'}

    const engine = new DiscoveryEngine()
    engine.addRule(GenderRule)

    const options = {student: true}
    const {record: r1, state} = await engine.discoverPerson(phoom, options)

    expect(r1.gender).toBe('Male')
    expect(state.student).toBe(true)

    const nui = {name: 'Mrs. Suthida Vajiralongkorn'}

    const {record: r2} = await engine.discoverPerson(nui)
    expect(r2.gender).toBe('Female')
  })
})
