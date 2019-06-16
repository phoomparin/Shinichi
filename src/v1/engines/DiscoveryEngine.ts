export class DiscoveryEngine {
  rules: DiscoveryRule[] = []
  state: DiscoveryState = {}

  addRule(rule: DiscoveryRule) {
    this.rules.push(rule)
  }

  setState(state: DiscoveryState) {
    this.state = {...this.state, ...state}
  }

  async discover(
    record: PersonRecord,
    state?: DiscoveryState,
  ): Promise<DiscoveryResult> {
    let nextRecord: PersonRecord = {...record}

    if (state) this.setState(state)

    for (let rule of this.rules) {
      const isConditionMet = rule.condition
        ? rule.condition(nextRecord, this.state)
        : true

      if (!isConditionMet) continue

      const {record, state} = await rule.discover(nextRecord, this.state)

      nextRecord = {...record, ...nextRecord}

      if (state) this.setState(state)
    }

    return {record: nextRecord, state: this.state}
  }
}
