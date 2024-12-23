export const GET_PAGE = `
  query GetLandingPage {
    pageCollection (limit: 1) {
      items {
        title
        subtitle
        heroImage {
          url
          width
          height
        }
        heroBackground {
          url
          width
          height
        }
        inputLabel
        buttonCopy
        featureBackground {
          url
          width
          height
        }
        featuresCollection {
          items {
            _id
            title
            description
            image {
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

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
