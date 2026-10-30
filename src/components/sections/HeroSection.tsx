"use client";

import React from "react";
import Image from "next/image";
import { FileText, Compass } from "lucide-react";
import { SceneContainer } from "@/components/3d/SceneContainer";
import { Hero3DCore } from "@/components/3d/Hero3DCore";
import { CentralSauronEye } from "@/components/ui/CentralSauronEye";
import { PROFILE_DATA } from "@/data/profile";
import { useSoundEffects } from "@/hooks/useSoundEffects";

export function HeroSection() {
  const { playClick, playHover } = useSoundEffects();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-20 px-4 sm:px-8 lg:px-12 bg-[#0c0d12]"
      aria-label="Home / Hero"
    >
      {/* 3D WebGL Background Canvas - Atmospheric architectural corridor */}
      <div className="absolute inset-0 z-0">
        <SceneContainer className="w-full h-full" cameraPosition={[0, 0.5, 6]} fov={48}>
          <Hero3DCore />
        </SceneContainer>
      </div>

      {/* Atmospheric Soft Vignette Scrim */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(12,13,18,0.5)_70%,#0c0d12_100%)]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#0c0d12]/50 via-transparent to-[#0c0d12]" />

      {/* Central Hero Section: Monumental Name + Central Sauron Eye focusing yellow light on mouse */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Left Column: Hero Name & CTAs */}
        <div className="flex flex-col items-start max-w-2xl z-20">
          {/* Profile Picture */}
          <div className="mb-5 flex items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-[#38bdf8]/50 shadow-lg shadow-[#38bdf8]/20 flex-shrink-0">
              <Image
                src="/images/profile-pic.jpg"
                alt={`${PROFILE_DATA.name} - Profile Picture`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase">Portfolio Archive</span>
              <span className="text-sm font-mono text-[#9da2af]">{PROFILE_DATA.headline}</span>
            </div>
          </div>

          {/* Subtle horizontal blueprint alignment guide (inspired by Veyronix banner texture) */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-[#38bdf8]/40 via-white/10 to-transparent mb-5 pointer-events-none" />

          <div className="flex flex-col select-none font-veyronix tracking-[-0.02em] max-w-full">
            {/* RANJEET */}
            <h1 className="text-[2rem] min-[370px]:text-[2.4rem] min-[440px]:text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.25rem] text-[#f2f4ec] font-black leading-[0.92] flex items-center flex-wrap">
              <span className="inline-flex items-center whitespace-nowrap">
                <span>RANJEET</span>
              </span>
            </h1>

            {/* KUMAR */}
            <h1 className="text-[2rem] min-[370px]:text-[2.4rem] min-[440px]:text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.25rem] text-[#f2f4ec] font-black leading-[0.92] flex items-center flex-wrap mt-1">
              <span className="inline-flex items-center text-[#c2b9d0] whitespace-nowrap">
                <span>KUMAR</span>
              </span>
              <span className="inline-block w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-[#38bdf8] ml-2 mb-1.5 shadow-sm shadow-[#38bdf8]/40" />
            </h1>
          </div>

          {/* Left Side Academic & Philosophy Note */}
          <div className="mt-7 flex items-start gap-3 max-w-lg text-xs sm:text-sm font-mono text-[#9da2af] leading-relaxed">
            <span className="text-[#38bdf8] font-bold text-base leading-none select-none">+</span>
            <p>
              MCA in Computer Science & Applications.
              <br />
              Building intelligent software. Understanding distributed systems.
              <br />
              Exploring what comes next.
            </p>
          </div>

          {/* Action CTAs - Extra Small / Minimalist */}
          <div className="mt-6 flex items-center gap-2.5 flex-wrap">
            <a
              href="#work"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38bdf8] text-[#0c0d10] font-mono text-[10px] font-semibold tracking-wider hover:bg-[#7dd3fc] transition-all duration-300 shadow-sm shadow-[#38bdf8]/20 hover:scale-105"
            >
              <Compass className="w-3 h-3 text-[#0c0d10]" />
              ENTER THE ARCHIVE
            </a>

            <a
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16171d]/80 hover:bg-[#1f2127] border border-white/10 text-[#f2f4ec] font-mono text-[10px] tracking-wider transition-all duration-300 hover:border-[#38bdf8]/50"
            >
              <FileText className="w-3 h-3 text-[#38bdf8]" />
              CURRICULUM VITAE
            </a>
          </div>
        </div>

        {/* Center Focal Eye: The Eye of Sauron focused on the mouse cursor */}
        <div className="w-full lg:w-auto flex-1 flex items-center justify-center z-10 py-6 lg:py-0">
          <CentralSauronEye />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

