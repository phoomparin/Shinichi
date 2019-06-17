import {MatchEngine} from 'v1/engines/MatchEngine'

export function MatchSocial(engine: MatchEngine) {
  engine.addRule({
    name: 'YouTubeVideo',
    matchLink: /https:\/\/www.youtube.com\/watch\?v=(.*)/,
    multiple: true,
  })

  engine.addLinkRule('Facebook', 'facebook.com')
  engine.addLinkRule('GitHub', 'github.com')
  engine.addLinkRule('LinkedIn', 'linkedin.com')
  engine.addLinkRule('Keybase', 'keybase.io')
  engine.addLinkRule('Bandcamp', 'bandcamp.com')
  engine.addLinkRule('Medium', 'medium.com')
  engine.addLinkRule('Twitter', 'twitter.com')
}

