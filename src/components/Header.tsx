import Image from "next/image";
import Link from "next/link";
import { HeaderModel } from "@/models/Header";

interface Props {
  data?: HeaderModel;
}

const LayoutHeader = ({ data }: Props) => {
  return (
    <header className="container flex px-5 py-11">
      <Link href="/" aria-label="Navigate to homepage">
        <Image src={data?.logo.url || ''} width={32} height={32} alt=''/>
      </Link>
    </header>
  );
};

export default LayoutHeader;
