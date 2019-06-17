const quote = (text: string) => `"${text}"`

export const SocialGoogleMock = {
  Google: {
    async search(query: string) {
      if (query === quote('Phoomparin Mano')) {
        return [{
          title: 'GitHub - The Place where I fork',
          link: 'https://github.com/phoomparin',
        }, {
          title: 'Facebook - Phoomparin Mano',
          link: 'https://facebook.com/phoomparin.mano',
        }]
      }

      return []
    },
  },
}