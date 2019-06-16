export type Person = Partial<PersonalInfo> & Partial<SocialLinks>

export type Gender = 'Male' | 'Female' | 'Non Binary' | 'Unknown'

export type PersonalInfo = {
  fullName: string
  firstName: string
  lastName: string
  gender: Gender
}

export type SocialLinks = {
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
