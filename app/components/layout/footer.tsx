import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-black font-medium flex items-start justify-between mx-auto p-10 md:p-14 text-white font-ptsans border-t border-white border-opacity-25">
      <div className="text-[12px] md:text-[16px] items-start flex flex-col">
        <p className="p-1">Stay in touch with Stanford XR.</p>
        <p className="p-1">Follow us on our socials</p>
        <div className="w-full flex items-start justify-start p-1 pt-3">
          <a href="https://www.instagram.com/stanford_xr/">
            <img src="/graphics/instagram.svg" className="h-9" />
          </a>
          <a
            href="https://www.linkedin.com/company/stanfordxr/"
            className="pl-8"
          >
            <img src="/graphics/linkedin.svg" className="h-9" />
          </a>
        </div>
      </div>
      <div className="text-[12px] md:text-[16px] items-end flex flex-col">
        <Link href="/" className="flex items-center space-x-3 p-1">
          <img src="/graphics/logo.svg" className="h-9" />
          <span className="text-[16px] md:text-[24px] text-white font-extrabold font-san">
            Stanford XR
          </span>
        </Link>
        <p className="p-1 text-[12px] md:text-[16px] text-right">
          Immerse the Bay
        </p>
      </div>
    </div>
  );
}
