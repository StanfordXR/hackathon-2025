import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracks | Immerse the Bay | Stanford",
  description: "Immerse the Bay, Stanford University's leading XR hackathon",
};

export default function Home() {
  return (
    <main id="main">
      <div className="w-[screen] bg-immersive py-[140px] flex flex-col justify-center items-center">
        <div className={`text-white font-semibold font-orbitron text-3xl mb-6`}>
          Tracks
        </div>
        <div className="text-white font-orbitron text-3xl mt-24 p-32">TBD</div>

        <div className={`w-[80%] mx-10 h-full`}>
          {/* This a temporarily removed Tracks display

          <div className={`text-white font-orbitron text-3xl`}>
            Primary Tracks
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>TBD</span>
              <span>TBD</span>
            </div>
            TBD
            <br />
          </div>
          <div className={`text-white font-orbitron text-3xl`}>
            Secondary Tracks
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>TBD</span>
              <span>TBD</span>
            </div>
            TBD
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>TBD</span>
            </div>
            TBD
            <br />
          </div>*/}

          <div
            className={`mt-[100px] text-white underline font-ptsans text-2xl flex align-center justify-center`}
          >
            <a href="/slides.pdf">See Immerse The Bay 2024's Sponsor Deck</a>
          </div>
        </div>
      </div>
    </main>
  );
}
