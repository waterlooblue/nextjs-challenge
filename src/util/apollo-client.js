import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;
const CONTENTFUL_GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

const http = new HttpLink({
  uri: CONTENTFUL_GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: ApolloLink.from([http]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          headerCollection: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            merge(existing = [], incoming) {
              return incoming;
            },
          },
          footerCollection: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            merge(existing = [], incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default client;
