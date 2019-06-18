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

export interface InternetAccount {
  username: string
  link: string
}

type Acc = InternetAccount

export interface SocialLinks {
  Facebook: Acc
  GitHub: Acc
  LinkedIn: Acc
  Medium: Acc
  Bandcamp: Acc
  Keybase: Acc
  Twitter: Acc
  YouTubeVideo: Acc[]
}

export type Field = keyof Person
