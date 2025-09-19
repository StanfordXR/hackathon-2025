import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule | Immerse the Bay | Stanford",
  description: "Immerse the Bay, Stanford University's leading XR hackathon",
};

export default function Home() {
  return (
    <main id="main">
      <div className="w-[screen] bg-immersive py-[140px] flex flex-col justify-center items-center">
        <div className={`text-white font-semibold font-orbitron text-3xl mb-6`}>
          Schedule
        </div>
        <div className={`w-[80%] mx-10 h-full`}>
          <div className={`text-white font-orbitron text-3xl`}>
            Friday, November 8
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>Time TBD</span>
              <span>Huang Foyer</span>
            </div>
            Check-In & Claim Merch
            <br />
            <br />
            <span className={`font-medium text-[30px]`}>Workshops</span>
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>Time TBD</span>
              <span>Location TBD</span>
            </div>
            Workshops TBD
            <br />
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>TBD</span>
              <span>TBD</span>
            </div>
            TBD
          </div>

          <div className={`text-white font-orbitron text-3xl mt-[70px]`}>
            Saturday, November 9
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>Time TBD</span>
              <span>Location TBD</span>
            </div>
            TBD
          </div>

          <div className={`text-white font-orbitron text-3xl mt-[70px]`}>
            Sunday, November 10
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
              <span className={`font-semibold`}>Time TBD</span>
              <span>Location TBD</span>
            </div>
            TBD
          </div>
        </div>
      </div>
      <div className="w-screen flex items-center justify-center mb-[150px]">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=10q6-VYeUuNuB194LLNJciYC0aJtaV10&ehbc=2E312F"
          className="w-full h-[500px] p-[20px] max-w-[800px]"
        ></iframe>
      </div>
    </main>
  );
}
