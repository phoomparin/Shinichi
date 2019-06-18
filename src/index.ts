import 'dotenv/config'
import {Shinichi} from 'shinichi'
import {Person} from 'types/Person'

async function main() {
  console.log('> Initialized')

  const chun: Person = {
    thFirstName: 'รพีพัฒน์',
    thLastName: 'แก้วประสิทธิ์',
  }

  const phoom: Person = {
    thFirstName: 'ภูมิปรินทร์',
    thLastName: 'มะโน',
  }

  const shin = new Shinichi()
  shin.want('school')

  const {person} = await shin.searchFor(phoom)
  console.log(person)

  shin.clear()

  const {person} = await shin.searchFor(chun)
  console.log(person)
}

main()
