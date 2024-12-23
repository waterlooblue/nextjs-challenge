import { GET_FOOTER, GET_HEADER, GET_PAGE } from "@/graphql/queries";

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query })
    }
  ).then((response) => response.json());
}

export async function getPage(isDraftMode = false) {
  const page = await fetchGraphQL(GET_PAGE,
    isDraftMode
  );
  return page?.data.pageCollection.items[0];
}

export async function getHeader(isDraftMode = false) {
  const page = await fetchGraphQL(GET_HEADER,
    isDraftMode
  );
  return page?.data.headerCollection.items[0];
}

export async function getFooter(isDraftMode = false) {
  const page = await fetchGraphQL(GET_FOOTER,
    isDraftMode
  );
  return page?.data.footerCollection.items[0];
}
