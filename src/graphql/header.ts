export const GET_HEADER = `
  query GetHeader {
    headerCollection (limit: 1) {
      items {
        logo {
          url
          width
          height
        }
      }
    }
  }
`
