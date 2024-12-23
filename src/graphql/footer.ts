export const GET_FOOTER = `
  query GetLayout {
    footerCollection (limit: 1) {
      items {
        copyright
        background {
          url
        }
      }
    }
  }
`
