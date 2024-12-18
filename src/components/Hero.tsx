import { useState } from "react";
import { PageModel } from "@/models/Page";

interface Props {
  data?: PageModel;
}

const LayoutHeader = ({ data }: Props) => {
  const { 
    title,
    subtitle,
    inputLabel,
    buttonCopy
  } = data || {};
  const [inputValue, setInputValue] = useState('');
  const handleOnClick = () => {
    console.log(inputValue)
  }
  return (
    <div className="px-5 text-center">
      <h1 className="text-4xl text-[#202b36] font-bold mb-8">{title}</h1>
      <p className="text-[#5b6f82] font-medium mb-8">{subtitle}</p>
      <div>
        <input 
          placeholder={inputLabel}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="min-w-[250px] placeholder-gray-300 shadow appearance-none border focus:outline-none focus:shadow-outline py-3 px-3 mx-1 rounded"
        />
        <button
          onClick={handleOnClick}
          className="bg-gradient-to-r from-[#1676ed] to-[#4590f0] hover:from-blue-700 hover:to-blue-600 text-white text-xs font-bold uppercase py-4 px-5 mx-1 rounded"
        >
          {buttonCopy}
        </button>
      </div>
    </div>
  );
};

export default LayoutHeader;
