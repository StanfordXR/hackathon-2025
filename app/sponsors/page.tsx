import { Metadata } from "next";
import { sponsors } from "./sponsors";

export const metadata: Metadata = {
  title: "Sponsors | Immerse the Bay | Stanford",
  description: "Immerse the Bay, Stanford University's leading XR hackathon",
};

export default function Home() {
  return (
    <main id="main">
      <div className="w-screen h-screen bg-immersive md:p-[200px] pt-[120px]">
        <div className="flex w-full h-full p-0 m-0 flex-wrap justify-center items-center">
          {sponsors.map((sponsor, index) => (
            <div className="h-[50px] mx-[50px] my-[20px]">
              <img
                src={sponsor.imgsrc}
                alt={sponsor.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
