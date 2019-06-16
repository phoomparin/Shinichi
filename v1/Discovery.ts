export interface DiscoveryRule {
  name: string
  condition?: (record: PersonRecord, state: DiscoveryState) => boolean
  discover: DiscoveryFunction
}

export type DiscoveryState = {[key: string]: any}

export type DiscoveryResult = {record: PersonRecord; state: DiscoveryState}

export type MaybePromise<T> = Promise<T> | T

export type DiscoveryFunction = (
  record: PersonRecord,
  state: DiscoveryState,
) => MaybePromise<Partial<DiscoveryResult>>
