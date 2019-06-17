import {StrategyContext} from '../../src/types/Strategy'

export const SchoolMockContext: StrategyContext = {
  Google: {
    async search(query: string) {
      if (query.includes('โรงเรียน')) {
        const result = {
          title: 'โรงเรียนเตรียมอุดมศึกษาพัฒนาการ - นายภูมิปรินทร์ มะโน',
          link: 'https://tup.ac.th'
        }

        return [result]
      }

      return []
    }
  }
}