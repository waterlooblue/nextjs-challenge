import { gql } from "@apollo/client";

export const GET_PAGE = {
  query: gql`
    query GetLandingPage {
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
    }
  `
}

export const GET_HEADER = {
  query: gql`
    query GetHeader {
      headerCollection (limit: 1) {
        items {
          logo {
            url
          }
        }
      }
    }
  `
}

export const GET_FOOTER = {
  query: gql`
    query GetHeader {
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
}
