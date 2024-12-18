import { useState } from "react";
import Image from "next/image";
import { PageModel } from "@/models/Page";

interface Props {
  data?: PageModel;
}

const LayoutHeader = ({ data }: Props) => {
  const { 
    title,
    subtitle,
    inputLabel,
    buttonCopy,
    heroBackground,
    heroImage
  } = data || {};
  const [inputValue, setInputValue] = useState('');
  const handleOnClick = () => {
    console.log(inputValue)
  }
  return (
    <div className="relative px-5 text-center">
      <Image
        className="absolute -z-0 -top-40 left-[25%] min-w-[1480px]"
        src={heroBackground?.url || ''}
        width={heroBackground?.width}
        height={heroBackground?.height}
        alt=''
      />
      <h1 className="relative text-4xl text-[#202b36] font-bold mb-8 z-10">{title}</h1>
      <p className="relative text-[#5b6f82] font-medium px-5 mx-auto max-w-[540px] mb-8 z-10">{subtitle}</p>
      <div className="relative z-10 mb-[75px]">
        <input 
          placeholder={inputLabel}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="min-w-[250px] placeholder-gray-300 shadow appearance-none border focus:outline-none focus:shadow-outline py-3 px-3 mx-1 mb-3 lg:mb-0 w-full sm:w-[initial] rounded"
        />
        <button
          onClick={handleOnClick}
          className="bg-gradient-to-r from-[#1676ed] to-[#4590f0] hover:from-blue-700 hover:to-blue-600 text-white text-xs font-bold uppercase py-4 px-5 mx-1 w-full sm:w-[initial] rounded"
        >
          {buttonCopy}
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="relative">
          <Image
            className="relative shadow-xl z-10"
            src={heroImage?.url || ''}
            width={heroImage?.width}
            height={heroImage?.height}
            alt=''
          />
          <Image
            className="absolute max-w-[210px] md:max-w-max -left-[44px] -bottom-[60px] md:-left-[100px] md:-bottom-[80px] -z-0"
            src={'/bubble-1.svg'}
            width={286}
            height={427}
            alt=''
          />
          <Image
            className="absolute max-w-[150px] md:max-w-max -right-[90px] -top-[40px] md:-right-[100px] -z-0"
            src={'/bubble-2.svg'}
            width={230}
            height={235}
            alt=''
          />
          <Image
            className="absolute max-w-[50px] md:max-w-max -top-[20px] left-[70px] md:-left-[30px] md:top-[100px] z-10"
            src={'/bubble-3.svg'}
            width={61}
            height={52}
            alt=''
          />
          <Image
            className="absolute max-w-[100px] md:max-w-max -bottom-[20px] -right-[50px] md:-right-[75px] md:-bottom-[15px] z-10"
            src={'/bubble-4.svg'}
            width={176}
            height={126}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
