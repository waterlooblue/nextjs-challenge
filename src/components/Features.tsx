import Image from "next/image";
import { PageModel } from "@/models/Page";

interface Props {
  data?: PageModel;
}

const Features = ({ data }: Props) => {
  const { 
    featuresCollection,
    featureBackground
  } = data || {};
  return (
    <section className="relative px-5 mb-[200px]">
      <div className="grid md:grid-cols-2 gap-16 max-w-[700px] mx-auto">
        {featuresCollection?.items?.map(feature => (
          <div key={feature._id} className="flex flex-col flex-wrap items-center mx-auto max-w-[350px] relative z-10">
            <Image
              className="bg-white rounded-full shadow-lg mb-5"
              src={feature.image?.url || ''}
              width={feature.image?.width}
              height={feature.image?.height}
              alt=''
            />
            <h2 className="text-[#202b36] text-2xl font-bold mb-3">{feature.title}</h2>
            <p className="text-[#5b6f82] text-lg text-center">{feature.description}</p>          
          </div>
        ))}
      </div>
      <Image
        className="absolute -z-0 -bottom-[110px] left-0 md:left-[56%] min-w-[1205px]"
        src={featureBackground?.url || ''}
        width={featureBackground?.width}
        height={featureBackground?.height}
        alt=''
      />
    </section>
  );
};

export default Features;
