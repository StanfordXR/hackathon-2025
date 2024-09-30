"use client";

import React, { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { Color, Mesh, UniformsLib, UniformsUtils } from "three";

import { Canvas, Vector3, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Stats, OrbitControls, Text3D, Stars } from "@react-three/drei";
import { timerLocal } from "three/webgpu";

const pink = new Color(172 / 60, 17 / 60, 255 / 60);
const blue = new Color(0 / 60, 206 / 60, 225 / 60);

const vertexShader = `
  #include <fog_pars_vertex>
    varying float vY;
    uniform float time;

    void main() {
        vY = position.y;
        #include <begin_vertex>
        #include <project_vertex>
        #include <fog_vertex>
    }
      `;

const fragmentShader = `
  #include <fog_pars_fragment>
    varying float vY;
    uniform float time;

    void main() {
        float n  = 0.5+0.5*(sin(vY * 2.0 + time)); 

        vec3 color = mix(vec3(0. / 70., 206. / 70., 225. / 70.),vec3(172. / 70., 17. / 70., 255. / 70.), n);

        gl_FragColor = vec4(color, 1.0);

        #include <fog_fragment>
    }`;

function GradientCylinder({
  position,
  key,
  time,
}: {
  position?: Vector3;
  key: number;
  time: number;
}) {
  const mesh = useRef<Mesh>(null);

  const uniforms = useMemo(
    () =>
      UniformsUtils.merge([
        {
          time: { value: 0 },
        },
        UniformsLib["fog"],
      ]),
    []
  );

  useEffect(() => {
    // @ts-ignore
    mesh.current.material.uniforms.time.value = time;
  }, [time]);

  return (
    <mesh
      position={position}
      rotation={[0, 0, Math.PI / 2]}
      key={key}
      ref={mesh}
    >
      <cylinderGeometry args={[0.002, 0.002, 16, 6]} />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        toneMapped={false}
        fog={true}
        needsUpdate
      />
    </mesh>
  );
}

function mix(v1: Color, v2: Color, t: number): Color {
  return new Color(
    v1.r * (1 - t) + v2.r * t,
    v1.g * (1 - t) + v2.g * t,
    v1.b * (1 - t) + v2.b * t
  );
}

export default function CanvasContent({
  canvasRef,
}: {
  canvasRef?: RefObject<HTMLCanvasElement | null>;
}) {
  const [time, setTime] = useState(0);
  useFrame((state, delta) => setTime(time + 0.02));
  const [fog, setFog] = useState(1);
  useFrame((state, delta) => {
    if (fog > 0.35) setFog(fog - 0.015);
  });

  const aspect =
    (canvasRef?.current?.width ?? 2) / (canvasRef?.current?.height ?? 1);

  return (
    <>
      {<fogExp2 attach="fog" color="black" density={fog} />}
      {/*<fog attach="fog" color="black" near={2} far={7} />*/}
      <group rotation={[0, 0, (-Math.PI / 4) * 0]}>
        {Array.from({ length: 4 }, (item, index) => (
          <mesh position={[(index - 2) / 1 + 0.5, 1, -1.7]} key={index}>
            <pointLight
              color={mix(
                pink,
                blue,
                0.5 + 0.5 * Math.sin((index - 1.5) * 4 + time)
              )}
              intensity={0.6}
            />
          </mesh>
        ))}
        {Array.from({ length: 4 }, (item, index) => (
          <mesh position={[(index - 2) / 1 + 0.5, -0.5, -1.7]} key={index}>
            <pointLight
              color={mix(
                pink,
                blue,
                0.5 + 0.5 * Math.sin((index - 1.5) * 4 + time)
              )}
              intensity={0.6}
            />
          </mesh>
        ))}
        {Array.from({ length: 6 }, (item, index) => (
          <GradientCylinder
            position={[0, 1, 0.1 - index - 1]}
            key={index}
            time={time}
          />
        ))}
        {Array.from({ length: 6 }, (item, index) => (
          <GradientCylinder
            position={[0, -1, 0.1 - index - 1]}
            key={index}
            time={time}
          />
        ))}
        {Array.from({ length: 16 }, (item, index) => (
          <mesh
            position={[(index - 8) / 1 + 0.5, 1, -4]}
            rotation={[Math.PI / 2, 0, 0]}
            key={index}
          >
            <cylinderGeometry args={[0.008, 0.008, 9, 6]} />
            <meshBasicMaterial
              color={mix(
                pink,
                blue,
                0.5 + 0.5 * Math.sin((index - 7.5) * 4 + time)
              )}
              toneMapped={false}
            />
          </mesh>
        ))}
        {Array.from({ length: 16 }, (item, index) => (
          <mesh
            position={[(index - 8) / 1 + 0.5, -1, -4]}
            rotation={[Math.PI / 2, 0, 0]}
            key={index}
          >
            <cylinderGeometry args={[0.008, 0.008, 9, 6]} />
            <meshBasicMaterial
              color={mix(
                pink,
                blue,
                0.5 + 0.5 * Math.sin((index - 7.5) * 4 + time)
              )}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>
      <Text3D
        font="/Orbitron_Regular.json"
        position={[aspect > 1.4 ? -1.7 : -0.5, aspect > 1.4 ? 0.15 : 0.4, -3]}
        size={aspect > 1.4 ? 0.265 : 0.15}
        bevelEnabled
        curveSegments={12}
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={10}
        height={0.05}
      >
        Immerse {aspect < 1.4 && "\n "}the Bay
        <meshPhongMaterial color={"white"} shininess={100} specular={"white"} />
      </Text3D>
      <EffectComposer>
        <Bloom intensity={2.0} luminanceThreshold={0} kernelSize={3} />
      </EffectComposer>
      {/*<OrbitControls enableRotate enablePan />*/}
      {/*<Stats />*/}
    </>
  );
}
