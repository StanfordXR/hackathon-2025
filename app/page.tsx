"use client";

import React, { useRef, useState, useEffect } from "react";
import { Color, Mesh, UniformsLib, UniformsUtils } from "three";

import { Canvas, Vector3, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Stats, OrbitControls } from "@react-three/drei";
import CanvasContent from "./components/CanvasContent";
import SponsorBar from "./sponsors/SponsorBar";
import CanvasWrapper from "./components/CanvasWrapper";

export default function Home() {
  // ===== CONFIGURATION =====
  const TRANSITION_START_PERCENT = 0.3;  // Start transition at (% of page scroll)
  const TRANSITION_END_PERCENT = 0.65;    // End transition at (% of page scroll)
  const MAX_SPEED = 10;                  // Maximum parallax speed multiplier (at peak)
  const TWEEN_EXPONENT = 3;              // Curve steepness (higher = longer slow tail, sharper acceleration)
  const BASE_SPEED = 0.3;                // Default slow parallax speed
  const MAX_BG_OFFSET = 2.2;             // Maximum background offset in viewport heights
  const PARTICLE_OPACITY_MIN = 0.3;     // Minimum particle opacity
  const PARTICLE_OPACITY_MAX = 0.8;     // Maximum particle opacity
  const PARTICLE_DURATION_MIN = 15;      // Minimum particle fall duration (seconds)
  const PARTICLE_DURATION_MAX = 30;      // Maximum particle fall duration (seconds)
  const PARTICLE_DELAY_STAGGER = 0.3;    // Delay between each particle start (seconds)
  const PARTICLE_DELAY_RANDOM = 3;       // Random delay variation (seconds)
  // ==================================

  const [isMobile, setIsMobile] = useState(false);
  const [bgOffset, setBgOffset] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const immerseBayRef = useRef<HTMLDivElement>(null);

  // Memoize particle properties to prevent jitter on scroll
  const particles = React.useMemo(() => {
    // RGB values for day colors (soft pastels)
    const dayColors = [
      { r: 249, g: 168, b: 212 }, // pink-300
      { r: 216, g: 180, b: 254 }, // purple-300
      { r: 147, g: 197, b: 253 }, // blue-300
      { r: 240, g: 171, b: 252 }, // fuchsia-300
      { r: 196, g: 181, b: 253 }, // violet-300
    ];
    // RGB values for neon colors (bright)
    const neonColors = [
      { r: 34, g: 211, b: 238 },  // cyan-400
      { r: 163, g: 230, b: 53 },  // lime-400
      { r: 250, g: 204, b: 21 },  // yellow-400
      { r: 244, g: 114, b: 182 }, // pink-500
      { r: 168, g: 85, b: 247 },  // purple-500
    ];
    return Array.from({ length: 18 }).map((_, i) => ({
      dayColor: dayColors[i % dayColors.length],
      neonColor: neonColors[i % neonColors.length],
      size: isMobile ? 1 + Math.random() * 2 : 0.5 + Math.random() * 1.5,
      duration: PARTICLE_DURATION_MIN + Math.random() * (PARTICLE_DURATION_MAX - PARTICLE_DURATION_MIN),
      animationDelay: (i * PARTICLE_DELAY_STAGGER) + Math.random() * PARTICLE_DELAY_RANDOM,
      opacity: PARTICLE_OPACITY_MIN + Math.random() * (PARTICLE_OPACITY_MAX - PARTICLE_OPACITY_MIN),
      left: Math.random() * 100,
    }));
  }, [isMobile]);

  // Determine if we're past transition midpoint
  const transitionMidpoint = (TRANSITION_START_PERCENT + TRANSITION_END_PERCENT) / 2;
  const useNeonColors = scrollPercent >= transitionMidpoint;

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let accumulatedOffset = 0;
    let lastScroll = 0;
    const screenHeight = window.innerHeight;
    const minOffset = 0; // Don't scroll past day banner
    const maxOffset = screenHeight * MAX_BG_OFFSET; // Stop at end of night banner

    const onScroll = () => {
      const scroll = window.scrollY;
      const delta = scroll - lastScroll;
      lastScroll = scroll;

      // Calculate total scrollable height
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollPercent = totalHeight > 0 ? scroll / totalHeight : 0;
      setScrollPercent(currentScrollPercent);

      // Calculate parallax speed based on scroll percentage
      let speed = BASE_SPEED; // Default slow speed

      // Transition zone defined by percentage of page scroll
      if (currentScrollPercent >= TRANSITION_START_PERCENT && currentScrollPercent <= TRANSITION_END_PERCENT) {
        // Progress through transition zone (0 to 1)
        const prog = (currentScrollPercent - TRANSITION_START_PERCENT) / (TRANSITION_END_PERCENT - TRANSITION_START_PERCENT);
        
        // Map to speed: peaks at 0.5 (middle)
        // Create bell curve: 0 at edges, 1 at middle
        const bellCurve = 1 - Math.pow(2 * prog - 1, 2); // Parabola: 0 at 0 and 1, peaks at 0.5
        
        // Apply tween exponent for curve steepness
        const tweenedBell = Math.pow(bellCurve, TWEEN_EXPONENT);
        
        speed = BASE_SPEED + (tweenedBell * MAX_SPEED);
      }

      accumulatedOffset += delta * speed;
      // Clamp offset to valid range
      accumulatedOffset = Math.max(minOffset, Math.min(accumulatedOffset, maxOffset));
      setBgOffset(accumulatedOffset);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Vertical Background Strip: Day → Black → Night */}
      <div
        className="w-full fixed left-0 z-[-5]"
        style={{
          height: '320vh', // 3.2 screens tall (110% + 100% + 110%)
          top: 0,
          transform: `translateY(${-bgOffset}px)`,
        }}
      >
        {/* Day section - 110vh with bottom fade to black */}
        <div
          className="w-full relative"
          style={{
            height: '110vh',
            backgroundImage: "url('/graphics/Day%20Banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000",
            maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          }}
        />
        
        {/* Black section - full screen */}
        <div
          className="w-full bg-black"
          style={{ height: '100vh' }}
        />
        
        {/* Night section - 110vh with top fade from black */}
        <div
          className="w-full relative"
          style={{
            height: '110vh',
            backgroundImage: "url('/graphics/Night%20Banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 100%)",
          }}
        />
      </div>

      <div
        className="h-screen w-screen fixed z-[-2] pointer-events-none
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_60%,rgba(0,0,0,0.6)_100%)]"
      ></div>

      {/* Wonderland Sparkles */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        {particles.map((particle, i) => {
          const currentColor = useNeonColors ? particle.neonColor : particle.dayColor;
          const bgColor = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${particle.opacity})`;
          return (
            <div
              key={i}
              className="absolute rounded-full blur-sm animate-sparkle"
              style={{
                left: `${particle.left}%`,
                width: `${particle.size}vw`,
                height: `${particle.size}vw`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.animationDelay}s`,
                backgroundColor: bgColor,
                transition: 'background-color 500ms',
              }}
            ></div>
          );
        })}
      </div>

      <div className="flex flex-col top-0 left-0 w-full h-screen bg-transparent pt-[200px] md:pt-[260px]">
        <div className="grow-0 md:h-[30%] h-[35%]"></div>
        <div className="grow-0 flex flex-col items-center justify-center text-center text-white px-4">
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
          className={`grow-0 w-full px-4 font-ptsans font-bold text-base text-white flex items-center justify-center flex-col-reverse md:flex-col my-10`}
        >
          <div className="font-ptsans drop-shadow-[3px_3px_6px_rgba(0,0,0,0.8)] mt-4 md:mt-0">Sponsored By</div>
          <SponsorBar />
        </div>
      </div>
      <div className="w-full h-auto text-white flex justify-center items-stretch flex-col md:flex-row p-[20px] mt-[150px] mb-[200px]">
        <img
          src="/graphics/past.jpg"
          className="h-auto md:h-[350px] object-contain	md:mr-8 mt-10 md:mt-0 md:mb-0 mb-10 rounded-[50px]"
        ></img>
        <div
          ref={immerseBayRef}
          className="w-full max-w-[600px] h-auto md:h-[350px] rounded-[30px] 
          p-4 sm:p-[25px] mx-auto md:mx-4 
          bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-blue-900/80 
          shadow-[0_0_25px_rgba(200,150,255,0.6)] flex flex-col justify-center text-center md:text-left"
        >
          <div className="font-orbitron text-2xl mb-4">
            What is Immerse the Bay?
          </div>
          <div className="font-ptsans text-base sm:text-lg leading-relaxed">
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
