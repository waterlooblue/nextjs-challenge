import { GetStaticProps } from "next";
import { GET_PAGE } from "@/graphql/queries";
import apolloClient from "@/util/apollo-client";
import { Page } from "@/models/Page";

interface PageData {
  pageCollection: {
    items: Page[];
  };
}

interface Props {
  page: Page;
}

const Home = ({ page }: Props) => {
  console.log(page)
  return (
    <>
      <h1>Landing Page</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query<PageData>(GET_PAGE);
  return {
    props: {
      page: data.pageCollection.items[0],
    },
  };
};

export default Home;
