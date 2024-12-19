import Image from "next/image";
import Link from "next/link";
import { HeaderModel } from "@/models/Header";

interface Props {
  data?: HeaderModel;
}

const LayoutHeader = ({ data }: Props) => {
  return (
    <header className="relative z-10 flex px-5 xl:px-[200px] py-11 mb-5">
      <Link href="/" aria-label="Navigate to homepage">
        <Image src={data?.logo.url || ''} width={32} height={32} alt=''/>
      </Link>
    </header>
  );
};

export default LayoutHeader;
