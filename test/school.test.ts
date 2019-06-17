import {Shinichi} from '../src/shinichi'
import {Person} from '../src/types/Person'
import {SchoolStrategy} from '../src/strategies/SchoolStrategy'

import {SchoolMockContext} from './mocks/SchoolMock'

describe('Shinichi', () => {
  it('should find the school name of Phoomparin', async () => {
    const person: Person = {
      thFirstName: 'ภูมิปรินทร์',
      thLastName: 'มะโน'
    }

    const shin = new Shinichi()
    shin.context = SchoolMockContext
    shin.strategyMap = {school: SchoolStrategy}

    shin.want('school')
    shin.know('gender', 'Male')
    shin.target(person)

    const {person: p} = await shin.search()

    expect(p.thFirstName).toBe('ภูมิปรินทร์')
    expect(p.thLastName).toBe('มะโน')
    expect(p.gender).toBe('Male')
    expect(p.school).toBe('เตรียมอุดมศึกษาพัฒนาการ')
  })
})
