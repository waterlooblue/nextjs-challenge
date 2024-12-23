import Image from "next/image";
import Link from "next/link";
import { getHeader } from "@/lib/api";

export default async function Header() {
  const header = await getHeader();
  return (
    <header className="relative z-10 flex px-5 xl:px-[200px] py-11 mb-5">
      <Link href="/" aria-label="Navigate to homepage">
        <Image src={header?.logo.url || ''} width={32} height={32} alt=''/>
      </Link>
    </header>
  );
};
