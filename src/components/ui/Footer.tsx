"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { PROFILE_DATA } from "@/data/profile";
import { useSoundEffects } from "@/hooks/useSoundEffects";

export function Footer() {
  const { playClick, playHover } = useSoundEffects();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#090a0d] text-[#828795] py-12 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand Info - Profile Avatar & Name */}
          <div className="flex items-center gap-3 select-none">
            {/* Circular Profile Picture Avatar with Ring */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-[#38bdf8]/60 shadow-md shadow-[#38bdf8]/20 flex-shrink-0">
              <Image
                src="/images/profile-pic.jpg"
                alt="Ranjeet Kumar"
                fill
                className="object-cover"
              />
            </div>

            {/* Stacked Name & Subtitle in Mono */}
            <div className="flex flex-col justify-center leading-tight">
              <span className="font-mono text-[11px] sm:text-[11.5px] font-medium tracking-[0.14em] text-[#f2f4ec] uppercase">
                RANJEET KUMAR
              </span>
              <span className="font-mono text-[9px] sm:text-[9.5px] tracking-[0.16em] text-[#8e94a0] uppercase">
                SOFTWARE & SYSTEMS
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/10 text-slate-300 hover:text-[#38bdf8] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/10 text-slate-300 hover:text-[#38bdf8] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={
                PROFILE_DATA.socials.whatsapp
                  ? PROFILE_DATA.socials.whatsapp.startsWith("http")
                    ? PROFILE_DATA.socials.whatsapp
                    : `https://wa.me/${PROFILE_DATA.socials.whatsapp.replace(/[\s\-\+]/g, "")}`
                  : "#"
              }
              target={PROFILE_DATA.socials.whatsapp ? "_blank" : undefined}
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 text-slate-300 hover:text-[#25D366] transition-all"
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.socials.email}`}
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/10 text-slate-300 hover:text-[#38bdf8] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              onMouseEnter={playHover}
              className="ml-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#38bdf8] hover:text-[#0c0d10] text-[#f2f4ec] transition-all flex items-center gap-1.5 text-xs font-mono"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* Sub-footer details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#828795]">
          <div>
            © 2026 Ranjeet Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


