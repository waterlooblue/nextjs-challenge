import { GetStaticProps } from "next";
import { HeaderModel } from "@/models/Header";
import { FooterModel } from "@/models/Footer";
import { GET_LAYOUT } from "@/graphql/queries";
import client from "@/util/apollo-client";
import Layout from "@/components/Layout";

interface LayoutData {
  headerCollection: {
    items: HeaderModel[];
  };
  footerCollection: {
    items: FooterModel[];
  };
}

interface Props {
  header: HeaderModel;
  footer: FooterModel;
}

const Home = ({ header, footer }: Props) => {
  return (
    <Layout header={header} footer={footer}>
      <section className="relative px-5 text-center pb-5 mb-5">
        <h1 className="relative text-3xl md:text-4xl text-[#202b36] font-bold mb-8 z-10">{'Success!'}</h1>
        <p className="relative text-lg text-[#5b6f82] font-medium px-5 mx-auto max-w-[600px] mb-8 z-10">{'You have successfully signed up to our mailing list!'}</p>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<LayoutData>({ query: GET_LAYOUT });
  return {
    props: {
      header: data.headerCollection.items[0],
      footer: data.footerCollection.items[0]
    },
  };
};

export default Home;
