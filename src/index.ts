import 'dotenv/config'
import {Shinichi} from 'shinichi'
import {Person} from 'types/Person'

async function main() {
  console.log('> Initialized')

  const target: Person = {
    thFirstName: 'รพีพัฒน์',
    thLastName: 'แก้วประสิทธิ์',
  }

  const shin = new Shinichi()
  shin.want('school')

  const {person} = await shin.searchFor(target)
  console.log(person)
}

main()
