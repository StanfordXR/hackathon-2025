import { Metadata } from "next";
import { sponsors } from "./sponsors";
import Tier from "./Tier";

export const metadata: Metadata = {
  title: "Sponsors | Immerse the Bay | Stanford",
  description: "Immerse the Bay, Stanford University's leading XR hackathon",
};

export default function Home() {
  return (
    <main id="main">
      <div className="w-screen min-h-screen bg-immersive md:p-[200px] md:pt-[120px] pt-[120px] pb-[60px] flex justify-center items-center flex-col">
        {/*{sponsors.map((tier, index) => (
          <Tier tier={tier} key={index} />
        ))}*/}
        <div className="text-white text-2xl font-bold">TBD</div>
      </div>
    </main>
  );
}
