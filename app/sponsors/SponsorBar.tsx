"use client";

import { sponsors } from "@/app/sponsors/sponsors";

export default function SponsorBar() {
  // Find the maximum size across all sponsors
  const maxSize = Math.max(
    ...sponsors.flatMap(tier => 
      tier.sponsors.map(sponsor => sponsor.size || 100)
    )
  );

  // Normalize size: scale so max size becomes 100%
  const getNormalizedSize = (size?: number) => {
    const actualSize = size || 100;
    return (actualSize / maxSize) * 100;
  };

  return (
    <div
      className={`bg-[rgb(0,0,0,0.9)] mx-auto my-4 w-full max-w-[calc(100vw-2rem)] sm:max-w-[380px] min-h-[75px] max-h-[75px] rounded-[40px] border-white border-opacity-25 border p-[16px] overflow-hidden`}
    >
      <div
        className={`w-full h-full [mask:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]`}
      >
        <div className="flex h-full gap-[4rem] p-0 m-0 flex-nowrap animate-scroll w-[3227.08px] max-w-[3227.08px] items-center">
          {sponsors.map((tier, tierIndex) =>
            tier.sponsors.map((sponsor, sponsorIndex) => (
              <img
                key={`${tierIndex}-${sponsorIndex}`}
                src={sponsor.imgsrc}
                alt={sponsor.name}
                className="h-full object-contain"
                style={{
                  height: `${getNormalizedSize(sponsor.size) * 2}%`,
                }}
              />
            ))
          )}
          {sponsors.map((tier, tierIndex) =>
            tier.sponsors.map((sponsor, sponsorIndex) => (
              <img
                key={`dup-${tierIndex}-${sponsorIndex}`}
                src={sponsor.imgsrc}
                alt={sponsor.name}
                className="h-full object-contain"
                style={{
                  height: `${getNormalizedSize(sponsor.size)}%`,
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
