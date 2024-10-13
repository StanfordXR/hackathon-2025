"use client";

import React, { useRef } from "react";
import { Color, Mesh, UniformsLib, UniformsUtils } from "three";

import { Canvas, Vector3, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Stats, OrbitControls } from "@react-three/drei";
import CanvasContent from "./CanvasContent";
import SponsorBar from "./sponsors/SponsorBar";

export default function Home() {
  const ref = useRef<HTMLCanvasElement>(null);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center z-[-1] absolute">
      <div className="h-screen w-screen fixed z-2 bg-fade-gradient pointer-events-none"></div>
      <div className="flex flex-col absolute z-11 top-0 left-0 w-screen h-screen">
        <div className="grow-0 md:h-[46%] h-[50%]"></div>
        <div className="grow-0 font-ptsans font-bold md:text-2xl text-base text-white flex items-center justify-center">
          November 8-10 • Stanford, CA
        </div>
        <div className="grow-0 my-5 flex flex-col md:flex-row items-center justify-center">
          <a
            href={"https://93sypddfktx.typeform.com/to/yZWbcdg4"}
            className="font-ptsans font-semibold text-black text-md px-[60px] rounded-[100px] py-3 m-2 bg-pink-blue"
          >
            Apply
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
      <div className="w-[100%] h-[100%] fixed z-[-1]">
        <Canvas
          shadows
          style={{ background: "transparent" }}
          camera={{
            position: [0, 0, 0],
            fov: 50,
          }}
          ref={ref}
        >
          <CanvasContent canvasRef={ref} />
        </Canvas>
      </div>
    </div>
  );
}
