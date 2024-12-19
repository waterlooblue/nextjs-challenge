import { gql } from "@apollo/client";

export const GET_PAGE = gql`
  query GetLandingPage {
    headerCollection (limit: 1) {
      items {
        logo {
          url
          width
          height
        }
      }
    }
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
export const GET_LAYOUT = gql`
  query GetLayout {
    headerCollection (limit: 1) {
      items {
        logo {
          url
          width
          height
        }
      }
    }
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
