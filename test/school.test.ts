import {makeSingleGoogleMock} from './mocks/GoogleMock'

import {Shinichi} from '../src/shinichi'
import {Person} from '../src/types/Person'
import {StrategyContext} from '../src/types/Strategy'
import {SchoolStrategy} from '../src/strategies/SchoolStrategy'

const MockContext: StrategyContext = {
  Google: makeSingleGoogleMock(
    'โรงเรียนเตรียมอุดมศึกษาพัฒนาการ - นายภูมิปรินทร์ มะโน',
    'http://tup.ac.th'
  )
}

describe('Shinichi', () => {
  it('should find the school name of Phoomparin', async () => {
    const person: Person = {
      thFirstName: 'ภูมิปรินทร์',
      thLastName: 'มะโน'
    }

    const shin = new Shinichi()
    shin.context = MockContext
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
