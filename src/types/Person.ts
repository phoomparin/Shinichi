export type Person = Partial<PersonalInfo> & Partial<ThaiName> & Partial<SocialLinks> & Partial<SchoolInfo>

export type Gender = 'Male' | 'Female' | 'Non Binary' | 'Unknown'

export interface ThaiName {
  thFirstName: string
  thLastName: string
}

export interface PersonalInfo {
  firstName: string
  lastName: string
  gender: Gender
}

export interface SchoolInfo {
  school: string
}

export interface SocialLinks {
  Facebook: string
  GitHub: string
  LinkedIn: string
  Medium: string
  Bandcamp: string
  Keybase: string
  Twitter: string
  YouTubeVideo: string[]
}

export type Field = keyof Person
