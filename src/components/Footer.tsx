import { getFooter } from "@/lib/api";

export default async function Footer() {
  const footer = await getFooter();
  return (
    <footer className="relative overflow-hidden min-h-[217px]">
      <div className="absolute bg-cover bg-center bg-no-repeat min-h-[217px] min-w-[1440px]" style={{backgroundImage: `url(${footer?.background.url})`}}></div>
      <span className="absolute left-1/2 transform bottom-1/3 -translate-x-1/2 text-white lato">&copy; {footer?.copyright}</span>
    </footer>
  );
};
