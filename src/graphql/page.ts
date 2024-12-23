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
