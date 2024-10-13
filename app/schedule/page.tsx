import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule | Immerse the Bay | Stanford",
  description: "Immerse the Bay, Stanford University's leading XR hackathon",
};

export default function Home() {
  return (
    <main id="main">
      <div className="w-[screen] h-screen bg-immersive pt-[140px] flex flex-col justify-center items-center">
        <div className={`w-[80%] mx-10 h-full`}>
          <div className={`text-white font-orbitron text-3xl`}>November 8</div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <span className={`font-semibold`}>10:00 am:</span> Check in begins
            <br />
            <span className={`font-semibold`}>12:00 pm - 6:00 pm:</span>{" "}
            Workshops <span className={`italic`}>(Exact hours TBA)</span>
          </div>
          <div className={`text-white font-orbitron text-3xl mt-[70px]`}>
            November 10
          </div>
          <hr className={`shadow-glowing my-1 mb-4`}></hr>
          <div className={`text-white font-ptsans text-xl`}>
            <span className={`font-semibold`}>10:00 am - 12:00 pm:</span>{" "}
            Judging <span className={`italic`}>(Exact hours TBA)</span>
          </div>
          <div
            className={`text-white font-ptsans text-3xl text-center mt-[70px]`}
          >
            More information coming soon
          </div>
        </div>
      </div>
    </main>
  );
}
