import React, { useRef } from "react";
import { Color, Mesh, UniformsLib, UniformsUtils } from "three";

import { Canvas, Vector3, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Stats, OrbitControls } from "@react-three/drei";
import CanvasContent from "./components/CanvasContent";
import SponsorBar from "./sponsors/SponsorBar";
import CanvasWrapper from "./components/CanvasWrapper";

export default function Home() {
  return (
    <>
      <div
        className="w-[100%] h-[100%] fixed z-[-3] bg-cover bg-center"
        style={{
          backgroundImage: "url('/graphics/StanfordXR2025Hackathon.png')",
        }}
      ></div>
      <div
        className="h-screen w-screen fixed z-[-2] pointer-events-none
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_60%,rgba(0,0,0,0.6)_100%)]"
      ></div>

      {/* Wonderland Sparkles */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => {
          const colors = ["bg-pink-300", "bg-purple-300", "bg-blue-300", "bg-fuchsia-300", "bg-violet-300"];
          const color = colors[i % colors.length];
          const size = 0.3 + Math.random() * 1.2; // 0.3–1.5vw, scales with screen
          const animationIndex = (i % 3) + 1;
          // Distribute particles evenly across the animation timeline
          const staggeredDelay = (i / 60) * 25; // Spread across 25s
          const randomOffset = Math.random() * 3; // Add small random variation

          return (
            <div
              key={i}
              className={`absolute rounded-full ${color} blur-sm animate-sparkle${animationIndex}`}
              style={{
                left: `${Math.random() * 100}%`,
                width: `${size}vw`,
                height: `${size}vw`,
                animationDelay: `${staggeredDelay + randomOffset}s`,
                opacity: 0.3 + Math.random() * 0.6,
              }}
            ></div>
          );
        })}
      </div>

      <div className="flex flex-col top-0 left-0 w-full h-screen bg-transparent">
        <div className="grow-0 md:h-[30%] h-[30%]"></div>
        <div className="grow-0 flex flex-col items-center justify-center text-center text-white">
          <div
            className="font-berkshire text-6xl md:text-9xl mb-8 text-white 
          animate-[glowPulse_3s_ease-in-out_infinite]"
          >
            Immerse The Bay
          </div>
          <div className="font-ptsans italic text-2xl md:text-3xl mb-8 opacity-90 drop-shadow-[3px_3px_6px_rgba(0,0,0,0.8)]">
            Beyond reality, down the rabbit hole.
          </div>
        </div>
        <div className="grow-0 font-ptsans font-bold md:text-2xl mb-4 text-base text-white flex items-center justify-center drop-shadow-[3px_3px_6px_rgba(0,0,0,0.8)]">
          November 14-16, 2025 • Stanford, CA
        </div>
        <div className="grow-0 my-5 flex flex-col md:flex-row items-center justify-center">
          <a
            href={"https://form.typeform.com/to/DvzO2epI"}
            className="font-ptsans font-semibold text-white text-md px-8 sm:px-[60px] rounded-[100px] mx-2 sm:mx-4 py-3 m-2 
            bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-blue-900/80 
            shadow-[0_0_20px_rgba(200,150,255,0.6)] hover:shadow-[0_0_30px_rgba(255,200,255,0.9)] transition-all duration-300"
          >
            APPLY
          </a>
          <a
            href={"https://forms.gle/iyxK1cSUF1ND7H6G7"}
            className="font-ptsans font-semibold text-white text-md px-8 sm:px-[60px] rounded-[100px] mx-2 sm:mx-4 py-3 m-2 
            bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-blue-900/80 
            shadow-[0_0_20px_rgba(200,150,255,0.6)] hover:shadow-[0_0_30px_rgba(255,200,255,0.9)] transition-all duration-300"
          >
            Volunteer
          </a>
        </div>
        <div className="grow flex"></div>
        <div
          className={`grow-0 w-full overflow-hidden px-4 font-ptsans font-bold text-base text-white flex items-center justify-center flex-col my-10`}
        >
          <div className="font-ptsans drop-shadow-[3px_3px_6px_rgba(0,0,0,0.8)]">Sponsored By</div>
          <SponsorBar />
        </div>
      </div>
      <div className="w-full h-auto text-white flex justify-center items-center flex-col md:flex-row p-[20px] mt-[150px] mb-[200px]">
        <img
          src="/graphics/past.jpg"
          className="max-h-[350px] object-contain	m-1 md:mr-8 mt-10 md:mt-1 md:mb-0 mb-10 rounded-[50px]"
        ></img>
        <div
          className="w-full max-w-[600px] h-auto rounded-[30px] p-4 sm:p-[25px] mx-4 
        bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-blue-900/80 
        shadow-[0_0_25px_rgba(200,150,255,0.6)]"
        >
          <div className="font-orbitron text-2xl mb-4">
            What is Immerse the Bay?
          </div>
          <div className="font-ptsans text-lg">
            Situated at the heart of Silicon Valley, Immerse The Bay stands as
            Stanford University's leading XR hackathon. We unite students,
            industry experts, tech enthusiasts, and visionaries from all corners
            of the globe to sculpt the next wave in XR. All backgrounds and
            skill levels are welcome in our mission to educate, empower, and
            inspire. Join us at Immerse The Bay and become a vital part of the
            XR revolution. This isn't merely an event—it's your opportunity to
            redefine reality.
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mb-[200px] px-4">
        <div
          className="w-full max-w-[1000px] p-[5px] rounded-[30px] 
          bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-blue-900/80 
          shadow-[0_0_25px_rgba(200,150,255,0.6)]"
        >
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&ehbc=2E312F&noprof=1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[25px] border-0"
          ></iframe>
        </div>
      </div>
    </>
  );
}
