export function SchoolStrategy(record: PersonRecord, state: DiscoveryState, ctx: StrategyContext) {
  const {Google} = ctx

  const results = Google.search(`"โรงเรียน" "${record.name}`)
  const m = matchSearchResults(results, /โรงเรียน(\w+)/, [record.name])
  if (!m) return

  record.school = m[0]

  const data = OBECStrategy(record, state, io)

  return data
}