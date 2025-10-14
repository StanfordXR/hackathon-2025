"use client";

import { sponsors } from "@/app/sponsors/sponsors";

export default function SponsorBar() {
  return (
    <div
      className={`bg-[rgb(0,0,0,0.9)] m-4 w-full max-w-[380px] min-h-[75px] max-h-[75px] rounded-[40px] border-white border-opacity-25 border p-[27px] overflow-hidden`}
    >
      <div
        className={`w-full h-full [mask:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]`}
      >
        <div className="flex h-full gap-[4rem] p-0 m-0 flex-nowrap animate-scroll w-[3227.08px] max-w-[3227.08px]">
          {sponsors.map((tier, index) =>
            tier.sponsors.map((sponsor, index) => (
              <img
                src={sponsor.imgsrc}
                alt={sponsor.name}
                className="h-full object-contain"
              />
            ))
          )}
          {sponsors.map((tier, index) =>
            tier.sponsors.map((sponsor, index) => (
              <img
                src={sponsor.imgsrc}
                alt={sponsor.name}
                className="h-full object-contain"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
