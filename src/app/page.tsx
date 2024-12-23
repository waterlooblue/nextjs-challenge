import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { getPage } from "@/lib/api";


export default async function Home() {
  const page = await getPage();
  return (
    <>
      <Hero data={page}/>
      <Features data={page}/>
    </>
  );
};
