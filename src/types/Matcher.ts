import {Person} from 'types/Person'

export type Matcher = RegExp | Function | string

export interface MatchItem {
  link?: string
  id?: string
}

export interface MatchRule {
  name: keyof Person
  matchLink: Matcher
  multiple?: boolean
}

export type Matches = {
  [rule: string]: MatchItem | MatchItem[]
}
