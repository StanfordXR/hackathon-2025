"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import CanvasContent from "./CanvasContent";
import { off } from "process";

export default function CanvasWrapper() {
  const ref = useRef<HTMLCanvasElement>(null);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let real = Math.min(
        Math.max(window.scrollY, 0),
        window.document.documentElement.scrollHeight - window.innerHeight
      );
      setOffset(real / window.innerHeight);
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setOffset]);

  return (
    <Canvas
      shadows
      style={{ background: "transparent" }}
      camera={{
        position: [0, 0, 0],
        fov: 50,
      }}
      ref={ref}
    >
      <CanvasContent canvasRef={ref} offset={offset} />
    </Canvas>
  );
}
