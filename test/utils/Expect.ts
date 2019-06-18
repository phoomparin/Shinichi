import {MatchItem} from '../../src/types/Matcher'

export const expectMatch = (field?: MatchItem) => expect(field && field.match)

export const expectText = (field?: MatchItem) => expect(field && field.text)