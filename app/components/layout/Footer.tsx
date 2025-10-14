import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-black font-medium flex items-center justify-between mx-auto p-10 md:p-14 text-white font-ptsans border-t border-white border-opacity-25">
      <div className="text-[12px] md:text-[16px] items-start flex flex-col">
        <p className="p-1 pb-4">In partnership with</p>
        <div className={"flex items-start align-center flex-col w-[130px]"}>
          <a href="https://xr.studentorg.berkeley.edu">
            <img src="/partners/berkeley.png" className="object-contain" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center text-[9px] md:text-[10px] text-white/40">
        Built with ❤️ using Next.js & Tailwind by Victor Chen, Jolie Li, and Ryan Hayashi
      </div>
      <div className="text-[12px] md:text-[16px] items-end flex flex-col">
        <Link href="/" className="flex items-center space-x-3 p-1">
          <img src="/graphics/logo.svg" className="h-9" />
          <span className="text-[16px] md:text-[24px] text-white font-extrabold font-san">
            Stanford XR
          </span>
        </Link>
        <a
          href={"https://www.stanfordxr.org/"}
          className="underline underline-offset-1	p-1 text-[12px] md:text-[16px] text-right"
        >
          www.stanfordxr.org
        </a>
      </div>
    </div>
  );
}
