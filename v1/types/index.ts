export interface MatchItem {
  link?: string
  id?: string
}

export interface SearchRecord {
  title: string
  link: string
}

export type Matcher = RegExp | Function | string

export enum RuleType {
  LINK,
}

// export interface Matcher {
//   name: keyof PersonRecord
//   matchLink: Matcher
//   multiple?: boolean
//   type?: RuleType
// }

export type Matches = {
  [rule: string]: MatchItem | MatchItem[]
}
