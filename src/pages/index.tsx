import { GetStaticProps } from "next";
import { HeaderModel } from "@/models/Header";
import { FooterModel } from "@/models/Footer";
import { PageModel } from "@/models/Page";
import { GET_PAGE } from "@/graphql/queries";
import client from "@/util/apollo-client";
import Layout from "@/components/Layout";

interface PageData {
  headerCollection: {
    items: HeaderModel[];
  };
  pageCollection: {
    items: PageModel[];
  };
  footerCollection: {
    items: FooterModel[];
  };
}

interface Props {
  header: HeaderModel;
  page: PageModel;
  footer: FooterModel;
}

const Home = ({ header, page, footer }: Props) => {
  return (
    <Layout header={header} footer={footer}>
      <h1>{page.title}</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<PageData>({ query: GET_PAGE });
  return {
    props: {
      header: data.headerCollection.items[0],
      page: data.pageCollection.items[0],
      footer: data.footerCollection.items[0]
    },
  };
};

export default Home;
