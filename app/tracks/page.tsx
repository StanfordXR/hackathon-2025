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
        {/*<div className="text-white font-orbitron text-3xl mt-24 p-32">Releasing November 14 • 9 PM PT</div>*/}

        <div className={`w-[80%] mx-10 h-full`}>
          
        <div className={`text-white font-orbitron text-3xl`}>
            Primary Tracks 
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>1. Creative Zenith - Best of Creative XR</span>
              <span>Stanford XR Sponsored</span>
            </div>
            <span>2. Virtuous Reality - Best of Social Good and XR</span>
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>3. AI Horizons - Best of AI with XR</span>
            </div>
            <span>4. Game Changer - Best of Gaming in XR</span>
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>Bonus Track!</span>
            </div>
            <span>5. Wild West - Thinking Outside the Box</span>
            <br />
            <br />
          </div>
          <div className={`text-white font-orbitron text-3xl`}>
            Secondary Tracks
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
          <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>1. Moonlake AI</span>
              <span>Company Sponsored</span>
            </div>
            <span>2. XReal</span>
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>3. Afference</span>
            </div>
            <span>4. OpenBCI</span>
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>5. ByteDance</span>
            </div>
            <span>6. XR Bootcamp Powered by Meta</span>
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>7. Meta</span>
            </div>
            <br />
          </div>
          <div
            className={`mt-[100px] text-white underline font-ptsans text-2xl flex align-center justify-center`}
          >
            <a href="/slides.pdf">
              See Immerse The Bay 2025's Tracks & Prizes Deck!
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
