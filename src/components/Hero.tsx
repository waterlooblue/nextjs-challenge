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
    heroBackground
  } = data || {};
  const [inputValue, setInputValue] = useState('');
  const handleOnClick = () => {
    console.log(inputValue)
  }
  return (
    <div className="relative px-5 text-center">
      <h1 className="relative text-4xl text-[#202b36] font-bold mb-8 z-10">{title}</h1>
      <p className="relative text-[#5b6f82] font-medium px-5 mx-auto max-w-[540px] mb-8 z-10">{subtitle}</p>
      <div className="relative z-10">
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
      <Image
        className="absolute -z-0 -top-40 left-[15%] lg:left-[25%] min-w-[1480px]"
        src={heroBackground?.url || ''}
        width={heroBackground?.width}
        height={heroBackground?.height}
        alt=''
      />
    </div>
  );
};

export default LayoutHeader;
