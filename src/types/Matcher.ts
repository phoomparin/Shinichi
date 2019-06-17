import {Person} from 'types/Person'

export type Matcher = RegExp | Function | string

export interface MatchItem {
  link?: string
  id?: string
}

export interface MatchRule {
  name: keyof Person
  matcher: Matcher
  multiple?: boolean
}

export interface MatcherOptions {
  multiple?: boolean
}

export type MatchResult = Partial<Record<keyof Person, MatchItem>>

export type MatcherMapping = Partial<Record<keyof Person, Matcher>>
