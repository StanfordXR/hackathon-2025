"use client";

import React, { useRef } from "react";
import { Color, Mesh, UniformsLib, UniformsUtils } from "three";

import { Canvas, Vector3, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Stats, OrbitControls } from "@react-three/drei";
import CanvasContent from "./CanvasContent";

export default function Home() {
  const ref = useRef<HTMLCanvasElement>(null);

  return (
    <div className="h-screen w-screen bg-black">
      <Canvas
        shadows
        style={{ background: "transparent" }}
        camera={{
          position: [0, 0, 0.1],
          fov: 50,
        }}
        ref={ref}
      >
        <CanvasContent canvasRef={ref} />
      </Canvas>
      <div className="absolute z-10 top-0 left-0 w-screen h-screen">
        <div className="h-1/2"></div>
        <div className="font-orbitron font-bold text-base md:text-2xl text-white flex items-center justify-center">
          November 8-10 • Stanford, CA
        </div>
        <div className="my-2 flex flex-col md:flex-row items-center justify-center">
          <a
            href={"https://93sypddfktx.typeform.com/to/yZWbcdg4"}
            className="font-orbitron font-semibold text-white text-2xl underline p-1 m-2"
          >
            Apply
          </a>
          {/*<a
            href={""}
            className="font-semibold text-white text-2xl underline p-1 m-2"
          >
            Sponsor
          </a>*/}
        </div>
      </div>
    </div>
  );
}
