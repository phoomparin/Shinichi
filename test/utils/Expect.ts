import {MatchItem} from '../../src/types/Matcher'

export const expectMatch = (field?: MatchItem) => expect(field && field.id)

export const expectLink = (field?: MatchItem) => expect(field && field.link)