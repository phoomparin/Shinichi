import {MatchItem} from 'types/Matcher'

export type Person = Partial<PersonalInfo> & Partial<ThaiName> & Partial<SocialLinks> & Partial<SchoolInfo>

export type Gender = 'Male' | 'Female' | 'Non Binary' | 'Unknown'

export interface ThaiName {
  thTitle: string
  thFirstName: string
  thLastName: string
}

export interface PersonalInfo {
  title: string
  firstName: string
  lastName: string
  gender: Gender
}

export interface SchoolInfo {
  school: string
}

export interface SocialLinks {
  Facebook: MatchItem
  GitHub: MatchItem
  LinkedIn: MatchItem
  Medium: MatchItem
  Bandcamp: MatchItem
  Keybase: MatchItem
  Twitter: MatchItem
  YouTubeVideo: MatchItem[]
}

export type Field = keyof Person
