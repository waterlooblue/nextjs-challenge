import { gql } from "@apollo/client";

export const GET_PAGE = gql`
  query GetLandingPage {
    headerCollection (limit: 1) {
      items {
        logo {
          url
        }
      }
    }
    pageCollection (limit: 1) {
      items {
        title
        subtitle
        heroImage {
          url
        }
        heroBackground {
          url
        }
        inputLabel
        buttonCopy
        featureBackground {
          url
        }
        featuresCollection {
          items {
            title
            description
            image {
              url
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
