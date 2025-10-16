import { Sponsor, SponsorTier } from "../types";

export default function Tier({ tier }: { tier: SponsorTier }) {
  return (
    <>
      <div
        className={`text-white font-semibold font-orbitron text-3xl mb-10 mt-20`}
        style={tier.style}
      >
        {tier.tier}
      </div>
      <div className="flex w-full h-full p-0 m-0 flex-wrap justify-center items-center">
        {tier.sponsors.map((sponsor, index) => {
          const baseHeight = 50; // base height in pixels
          const scale = (sponsor.size || 100) / 100;
          const height = baseHeight * scale;
          return (
            <div className="mx-[50px] mb-[30px] p-1" style={{ height: `${height}px` }} key={index}>
              <img
                src={sponsor.imgsrc}
                alt={sponsor.name}
                className="h-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
