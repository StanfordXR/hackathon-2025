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
        <div className={`w-[80%] mx-10 h-full`}>
          <div className={`text-white font-orbitron text-3xl`}>
            Primary Tracks
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>
                Spectacles x Immerse the Bay Challenge
              </span>
              <span>Snap AR</span>
            </div>
            Snapchat Platform
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>Meta</span>
            </div>
            Meta Platform
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>Niantic</span>
            </div>
            Niantic Platform
            <br />
            <br />
          </div>
          <div className={`text-white font-orbitron text-3xl`}>
            Secondary Tracks
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>
                XR Game Jam: “Forgotten Worlds”
              </span>
              <span>Ramen VR</span>
            </div>
            Create immersive XR gaming experiences around lost civilizations,
            hidden dimensions, or virtual worlds tucked away in memory.
            <br />
            Bonus points if you:
            <br />
            - Integrate generative AI into the gameplay in a significant
            capacity. Example: Using LLMs to add depth through real-time NPC
            dialogue or lore
            <br />- Include well thought out multiplayer integration.
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>AWS</span>
            </div>
            Best in AWS
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>NVIDIA</span>
            </div>
            Best hack with NVIDIA omniverse.
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>AI Horizons</span>
            </div>
            Best Use of AI in XR
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>Virtuous Reality</span>
            </div>
            Best of Social Good
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span>Art Beyond Reality</span>
            </div>
            Best of Creative/Artistic XR
            <br />
          </div>
          <div
            className={`mt-[100px] text-white underline font-ptsans text-2xl flex align-center justify-center`}
          >
            <a href="/slides.pdf">See slides for more info</a>
          </div>
        </div>
      </div>
    </main>
  );
}
