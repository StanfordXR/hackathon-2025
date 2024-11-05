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
      <div className="w-[100%] h-[100%] fixed z-[-2]">
        <CanvasWrapper />
      </div>
      <div className="h-screen w-screen fixed z-[-1] bg-fade-gradient pointer-events-none"></div>
      <div className="flex flex-col top-0 left-0 w-screen h-screen bg-transparent">
        <div className="grow-0 md:h-[46%] h-[50%]"></div>
        <div className="grow-0 font-ptsans font-bold md:text-2xl text-base text-white flex items-center justify-center">
          November 8-10 • Stanford, CA
        </div>
        <div className="grow-0 my-5 flex flex-col md:flex-row items-center justify-center">
          <a
            href={"https://93sypddfktx.typeform.com/to/yZWbcdg4"}
            className="font-ptsans font-semibold text-black text-md px-[60px] rounded-[100px] mx-4 py-3 m-2 bg-pink-blue hover:bg-pink-blue-hover"
          >
            Apply
          </a>
          <a
            href={"https://forms.gle/kiMMZrVfRVfHdaTg8"}
            className="box-border font-ptsans font-semibold text-white text-md px-[60px] rounded-[100px] mx-4 py-3 m-2 border-2 border-opacity-25 hover:border-opacity-40 border-white"
          >
            Volunteer
          </a>
        </div>
        <div className="grow flex"></div>
        <div
          className={`grow-0 w-full overflow-hidden px-4 font-ptsans font-bold text-base text-white flex items-center justify-center flex-col my-10`}
        >
          <div className="">Sponsored By</div>
          <SponsorBar />
        </div>
      </div>
      <div className="w-screen h-auto text-white flex justify-center items-center flex-col md:flex-row p-[20px] mt-[150px] mb-[200px]">
        <img
          src="/graphics/past.jpg"
          className="max-h-[350px] object-contain	m-1 md:mr-8 mt-10 md:mt-1 md:mb-0 mb-10 rounded-[50px]"
        ></img>
        <div className="w-full max-w-[600px] h-auto shadow-glowing rounded-[50px] p-[25px] ">
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
      <div className="w-screen flex items-center justify-center mb-[200px]">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=10q6-VYeUuNuB194LLNJciYC0aJtaV10&ehbc=2E312F"
          className="w-full h-[500px] p-[20px] max-w-[800px]"
        ></iframe>
      </div>
    </>
  );
}
