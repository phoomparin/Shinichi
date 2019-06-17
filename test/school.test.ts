import {Shinichi} from '../src/shinichi'
import {Person} from '../src/types/Person'
import {SchoolStrategy} from '../src/strategies/SchoolStrategy'

import {SchoolMockContext} from './mocks/SchoolMock'

describe('School Strategy', () => {
  it('should find the school name of Phoomparin', async () => {
    const target: Person = {
      thFirstName: 'ภูมิปรินทร์',
      thLastName: 'มะโน',
      gender: 'Male'
    }

    const shin = new Shinichi()
    shin.context = SchoolMockContext
    shin.strategyMap = {school: SchoolStrategy}
    shin.want('school')

    const {person: p} = await shin.searchFor(target)

    expect(p.thFirstName).toBe('ภูมิปรินทร์')
    expect(p.thLastName).toBe('มะโน')
    expect(p.gender).toBe('Male')
    expect(p.school).toBe('เตรียมอุดมศึกษาพัฒนาการ')
  })
})
