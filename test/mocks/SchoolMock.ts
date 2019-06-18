import {StrategyContext} from '../../src/types/Strategy'
import {SearchResult} from '../../src/types/SearchEngine'

export const SchoolMockContext: StrategyContext = {
  Google: {
    async search(query: string) {
      if (query.includes('โรงเรียน')) {
        const result: SearchResult = {
          title: 'FlipED',
          link: 'https://www.scbfoundation.com/personal_detail_table.php?project_id=1200',
          description: 'ลำดับที่, ชื่อ-สกุล, อาชีพ, ความถนัด, ตำแหน่งในโครงการ, ตำแหน่งงาน, เบอร์, อีเมล. 1. เด็กชายภูมิปรินทร์ มะโน. มัธยมศึกษาปีที่ 4 โรงเรียนเตรียมอุดมศึกษาพัฒนาการ. Software ...'
        }

        return [result]
      }

      return []
    }
  }
}