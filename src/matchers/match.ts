import {Nullable} from 'types'

export function NotMatching(text: string, required: Nullable<string>[]) {
  const list: string[] = required.map(x => x || '')

  for (let match of list) {
    const isMatch = text.includes(match)

    if (!isMatch) return true
  }

  return false
}

export function match(text: string, regex: RegExp, mustMatch?: Nullable<string>[]): string[] {
  const m = text.match(regex)
  if (!m) return []

  const matches = m.slice(1)

  if (mustMatch) {
    const isNotMatching = NotMatching(text, mustMatch)
    if (isNotMatching) return []
  }

  return matches
}