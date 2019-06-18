import {InternetAccount} from '../../src/types/Person'

export const expectUsername = (field?: InternetAccount) => expect(field && field.username)
export const expectLink = (field?: InternetAccount) => expect(field && field.link)