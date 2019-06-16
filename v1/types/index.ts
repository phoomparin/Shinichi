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

export type SocialLinks = {
  Facebook: MatchItem
  GitHub: MatchItem
  LinkedIn: MatchItem
  Medium: MatchItem
  Bandcamp: MatchItem
  Keybase: MatchItem
  Twitter: MatchItem
  YouTubeVideo: MatchItem[]
}

export type Gender = 'Male' | 'Female' | 'Non Binary' | 'Unknown'

export type PersonalInfo = {
  name: string
  firstName: string
  lastName: string
  gender: Gender
}

export type PersonRecord = Partial<PersonalInfo> & Partial<SocialLinks>

// export interface Matcher {
//   name: keyof PersonRecord
//   matchLink: Matcher
//   multiple?: boolean
//   type?: RuleType
// }

export type Matches = {
  [rule: string]: MatchItem | MatchItem[]
}
