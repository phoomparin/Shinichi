import {expectUsername} from './utils/Expect'

import {BulkMatcher} from '../src/matchers/BulkMatcher'

describe('Bulk Matcher', () => {
  it('Match items using the bulk matcher', () => {
    const bm = new BulkMatcher()
    bm.add('Facebook', 'facebook.com')
    bm.add('school', /โรงเรียน([ก-๙]+)/)

    const p = bm.match(['โรงเรียนเตรียมอุดมศึกษาพัฒนาการ', 'https://facebook.com/phoomparin.mano'])
    expectUsername(p.Facebook).toBe('phoomparin.mano')
    expectUsername(p.school).toBe('เตรียมอุดมศึกษาพัฒนาการ')
  })
})