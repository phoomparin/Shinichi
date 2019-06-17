import {BulkMatcher} from '../src/matchers/BulkMatcher'
import {expectMatch} from './utils/Expect'

describe('Bulk Matcher', () => {
  it('Match items using the bulk matcher', () => {
    const bm = new BulkMatcher()
    bm.add('Facebook', 'facebook.com')
    bm.add('school', /โรงเรียน([ก-๙]+)/)

    const p = bm.match(['โรงเรียนเตรียมอุดมศึกษาพัฒนาการ', 'https://facebook.com/phoomparin.mano'])
    expectMatch(p.Facebook).toBe('phoomparin.mano')
    expectMatch(p.school).toBe('เตรียมอุดมศึกษาพัฒนาการ')
  })
})