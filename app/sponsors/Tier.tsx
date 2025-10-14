import { Sponsor, SponsorTier } from "../types";

export default function Tier({ tier }: { tier: SponsorTier }) {
  return (
    <>
      <div
        className={`text-white font-semibold font-orbitron text-3xl mb-6 mt-16`}
        style={tier.style}
      >
        {tier.tier}
      </div>
      <div className="flex w-full h-full p-0 m-0 flex-wrap justify-center items-center">
        {tier.sponsors.map((sponsor, index) => (
          <div className="h-[50px] mx-[50px] mb-[30px] p-1" key={index}>
            <img
              src={sponsor.imgsrc}
              alt={sponsor.name}
              className="h-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
}
