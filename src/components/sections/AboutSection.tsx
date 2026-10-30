"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, FileText } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { useSoundEffects } from "@/hooks/useSoundEffects";

export function AboutSection() {
  const { playClick, playHover } = useSoundEffects();

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-24 px-4 sm:px-8 lg:px-12 flex flex-col justify-center overflow-hidden border-t border-white/5 bg-[#0c0d10]"
      aria-label="About Ranjeet Kumar"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#828795] uppercase tracking-widest">
            <span className="text-[#38bdf8] font-bold">06 —</span> BIOGRAPHICAL NOTES
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#f2f4ec] font-normal tracking-tight">
              Personal narrative.
            </h2>
          </div>
        </div>

        {/* 2-Column: 3D Holographic Visualizer + Personal Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Profile Picture & AIR-99 */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6 py-2 sm:py-4">
            {/* Profile Picture */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden ring-2 ring-[#38bdf8]/30 shadow-xl shadow-[#38bdf8]/10">
              <Image
                src="/images/profile-pic.jpg"
                alt={`${PROFILE_DATA.name} - Profile Picture`}
                fill
                className="object-cover"
              />
            </div>
            {/* AIR-99 Badge */}
            <div className="flex flex-col gap-1 sm:gap-1.5 text-center lg:text-left w-full">
              <div className="text-5xl sm:text-7xl lg:text-8xl font-serif text-[#f2f4ec] font-normal tracking-tight leading-none">
                AIR-99
              </div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-serif italic text-[#c2b9d0] font-normal tracking-tight">
                in NIMCET 2024
              </div>
            </div>
          </div>

          {/* Right Column: Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-[#9da2af] leading-relaxed font-mono">
            {/* Top Intro Block */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#828795]">
                ABOUT ME
              </span>
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#f2f4ec] font-normal tracking-tight leading-[1.08]">
                Hi, I&apos;m <span className="italic text-[#c2b9d0]">Ranjeet Kumar.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#9da2af] font-mono leading-relaxed pt-1">
                I&apos;m studying computer applications at NIT Tiruchirappalli, and building projects to understand software from the inside out.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* What Interests Me Section */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <h4 className="text-xl sm:text-3xl font-serif text-[#f2f4ec] font-normal">
                What interests me
              </h4>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#9da2af] leading-relaxed font-mono">
                <p>
                  I like working on problems that cross layers: a network protocol underneath a downloader, a queue behind an application, or a retrieval pipeline behind an AI response.
                </p>
                <p>
                  That&apos;s why my projects look quite different from one another. Some involve user-facing products. Others go deeper into networking, distributed services, or information retrieval.
                </p>
              </div>
            </div>

            {/* Quick Action to open Curriculum Vitae Link */}
            <div className="pt-1">
              <a
                href={PROFILE_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#38bdf8] text-[#0c0d10] text-xs font-mono font-semibold hover:bg-[#7dd3fc] transition-all shadow-md shadow-[#38bdf8]/20 hover:scale-105 w-full sm:w-auto"
              >
                <FileText className="w-3.5 h-3.5" />
                VIEW FULL CURRICULUM VITAE
              </a>
            </div>
          </div>
        </div>

        {/* Academic Foundations: Simple (No Background Cards) */}
        <div className="flex flex-col gap-5 sm:gap-6 mt-4 sm:mt-6 pt-6 border-t border-white/10">
          <h3 className="text-xl sm:text-2xl font-serif text-[#f2f4ec] flex items-center gap-2 font-normal">
            <GraduationCap className="w-5 h-5 text-[#38bdf8]" />
            Academic Foundations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14">
            {PROFILE_DATA.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-serif text-[#f2f4ec] font-normal">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-[#38bdf8] shrink-0">
                    {edu.duration}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-mono text-[#828795]">
                  {edu.institution}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

