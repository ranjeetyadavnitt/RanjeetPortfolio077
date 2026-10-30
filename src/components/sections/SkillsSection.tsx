"use client";

import React, { useState, useEffect } from "react";
import { Search, Orbit, Grid3X3, X, Sparkles, Smartphone } from "lucide-react";
import { SKILL_CATEGORIES, SKILLS_DATA, SkillItem } from "@/data/skills";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import dynamic from "next/dynamic";
import { DotMatrixBackground } from "@/components/ui/DotMatrixBackground";
import { SkillSpotlightModal } from "@/components/ui/SkillSpotlightModal";

const SkillsOrbitalRing = dynamic(
  () =>
    import("@/components/ui/SkillsOrbitalRing").then(
      (mod) => mod.SkillsOrbitalRing
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="relative w-full h-[540px] sm:h-[620px] md:h-[660px] flex items-center justify-center select-none overflow-visible"
        style={{
          perspective: "1300px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          className="relative w-0 h-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(48deg) rotateZ(-16deg)",
          }}
        >
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/10 pointer-events-none"
            style={{ width: "1080px", height: "720px" }}
          />
        </div>
      </div>
    ),
  }
);

export function SkillsSection() {
  const activeSkillFilter = usePortfolioStore((state) => state.activeSkillFilter);
  const setActiveSkillFilter = usePortfolioStore((state) => state.setActiveSkillFilter);
  const hoveredSkillId = usePortfolioStore((state) => state.hoveredSkillId);
  const setHoveredSkillId = usePortfolioStore((state) => state.setHoveredSkillId);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [viewMode, setViewMode] = useState<"orbit" | "grid">("orbit");
  const [isMobile, setIsMobile] = useState(false);
  const { playClick, playHover } = useSoundEffects();

  // Detect mobile screen on mount: default to Grid mode for optimal mobile UX
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setViewMode("grid");
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory =
      activeSkillFilter === "All" || skill.category === activeSkillFilter;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 flex flex-col justify-center overflow-hidden border-t border-white/5 bg-[#07090e]"
      aria-label="Skills Matrix"
    >
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 sm:gap-8 relative z-10 my-auto py-4 sm:py-6">
        {/* Section Title & Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#94a3b8] uppercase tracking-widest">
              <span className="text-[#38bdf8] font-bold">02 —</span> TECHNICAL CAPABILITIES
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-5xl font-display text-[#f8fafc] font-semibold tracking-tight">
                System foundations.
              </h2>
            </div>
          </div>

          {/* View Mode Switcher: Orbit 3D, Grid Matrix */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => {
                playClick();
                setViewMode("grid");
              }}
              onMouseEnter={playHover}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all touch-manipulation active:scale-95 ${
                viewMode === "grid"
                  ? "bg-[#38bdf8] text-[#082f49] font-bold shadow-md shadow-sky-500/20"
                  : "text-[#94a3b8] hover:text-white"
              }`}
              title="Touch-Optimized Grid Matrix"
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>GRID VIEW</span>
            </button>

            <button
              onClick={() => {
                playClick();
                setViewMode("orbit");
              }}
              onMouseEnter={playHover}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all touch-manipulation active:scale-95 ${
                viewMode === "orbit"
                  ? "bg-[#38bdf8] text-[#082f49] font-bold shadow-md shadow-sky-500/20"
                  : "text-[#94a3b8] hover:text-white"
              }`}
              title="3D Orbital Ring"
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>3D ORBIT</span>
            </button>
          </div>
        </div>

        {/* Filter Pills & Search Input */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          {/* Category Filter Pills with smooth mobile touch scrolling */}
          <div className="flex items-center gap-1.5 overflow-x-auto touch-pan-x pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              onClick={() => {
                playClick();
                setActiveSkillFilter("All");
              }}
              onMouseEnter={playHover}
              className={`px-3.5 py-2 rounded-full text-xs font-mono whitespace-nowrap shrink-0 transition-all touch-manipulation active:scale-95 ${
                activeSkillFilter === "All"
                  ? "bg-[#38bdf8] text-[#082f49] font-bold shadow-md shadow-sky-400/25"
                  : "bg-white/[0.06] text-[#94a3b8] hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              All ({SKILLS_DATA.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setActiveSkillFilter(cat);
                }}
                onMouseEnter={playHover}
                className={`px-3.5 py-2 rounded-full text-xs font-mono whitespace-nowrap shrink-0 transition-all touch-manipulation active:scale-95 ${
                  activeSkillFilter === cat
                    ? "bg-[#38bdf8] text-[#082f49] font-bold shadow-md shadow-sky-400/25"
                    : "bg-white/[0.06] text-[#94a3b8] hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search with Clear button */}
          <div className="relative min-w-[220px] w-full md:w-auto">
            <Search className="w-3.5 h-3.5 text-sky-400/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, LangGraph, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 rounded-xl glass-input text-xs font-mono focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile helper notice */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8] px-1">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
            Showing <strong className="text-white">{filteredSkills.length}</strong> competencies
          </span>
          <span className="hidden sm:inline text-slate-400">
            Tap any skill to inspect architecture &amp; projects
          </span>
          <span className="sm:hidden text-sky-400/90 flex items-center gap-1">
            <Smartphone className="w-3 h-3" /> Tap card for details
          </span>
        </div>

        {/* SKILLS CONTAINER (Grid or 3D Orbital Ring) */}
        <div className="relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[560px] md:min-h-[640px]">
          {viewMode === "orbit" && (
            <DotMatrixBackground text="AI+SDE" />
          )}
          <SkillsOrbitalRing
            skills={filteredSkills}
            onSelectSkill={(skill) => setSelectedSkill(skill)}
            hoveredSkillId={hoveredSkillId}
            setHoveredSkillId={setHoveredSkillId}
            viewMode={viewMode}
          />
        </div>
      </div>

      {/* Detail Modal when any small box is clicked */}
      <SkillSpotlightModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </section>
  );
}
