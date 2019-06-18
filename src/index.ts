import 'dotenv/config'
import {Shinichi} from 'shinichi'
import {Person} from 'types/Person'

async function main() {
  console.log('> Initialized')

  const target: Person = {
    thFirstName: 'ภูมิปรินทร์',
    thLastName: 'มะโน',
    gender: 'Male'
  }

  const shin = new Shinichi()
  shin.want('school')

  const {person} = await shin.searchFor(target)
  console.log(person)
}

main()
