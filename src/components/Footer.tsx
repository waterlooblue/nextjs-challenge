import { FooterModel } from "@/models/Footer";

interface Props {
  data?: FooterModel;
}

const LayoutFooter = ({ data }: Props) => {
  return (
    <footer className="relative overflow-hidden min-h-[217px]">
      <div className="absolute bg-cover bg-center bg-no-repeat min-h-[217px] min-w-[1440px]" style={{backgroundImage: `url(${data?.background.url})`}}></div>
      <span className="absolute left-1/2 transform bottom-1/3 -translate-x-1/2 text-white">&copy; {data?.copyright}</span>
    </footer>
  );
};

export default LayoutFooter;
