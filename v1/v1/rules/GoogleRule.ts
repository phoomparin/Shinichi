import {Google} from 'sources/google'
import {PersonRecord} from 'types'
import {DiscoveryRule} from 'v1/engines/DiscoveryEngine'

export const GoogleRule: DiscoveryRule = {
  name: "Google Everything",
  async discover(record: PersonRecord) {
    if (!record.name) return {}

    const result = await Google.search(record.name)
    const data = result.map(x => ({
      link: x.link,
      title: x.title,
    }))

    return {state: {_google: data}}
  },
}