import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  return (
    <div
      className={`fixed top-0 right-0 left-0 z-[13] flex items-start justify-center backdrop-filter`}
    >
      <nav
        className={`bg-[rgb(0,0,0,0.9)] m-2 max-w-[1200px] w-[100%] rounded-[40px] border-white border-opacity-25 border`}
      >
        <div className="flex flex-wrap items-center justify-center md:justify-between mx-auto p-4 px-8 gap-[12px]">
          <div className={`md:mr-[95px] mr-[12px] h-full`}>
            <Link href="/" className="flex items-center space-x-3">
              <img src="/graphics/logo.svg" className="h-9" />
            </Link>
          </div>

          <div
            className={`order-3 md:order-2 flex items-center justify-center w-auto text-[16px]`}
          >
            <ul className="font-semibold font-ptsans text-white flex p-0 flex-row md:space-x-[60px] justify-between mt-0 w-[70vw] md:w-auto">
              <li>
                <Link
                  href="/schedule"
                  className="underline underline-offset-2 block rounded text-white p-0"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="underline underline-offset-2 block rounded text-white p-0"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="/tracks"
                  className="underline underline-offset-2 block rounded text-white p-0"
                >
                  Tracks
                </Link>
              </li>
            </ul>
          </div>
          <a
            href={"https://form.typeform.com/to/DvzO2epI"}
            className="order-2 md:order-3 font-ptsans font-semibold text-black text-sm px-[30px] py-[7px] md:px-[40px] md:py-2 rounded-[100px] bg-white hover:bg-slate-200"
          >
            Apply
          </a>
        </div>
      </nav>
    </div>
  );
}
