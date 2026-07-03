"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Expand, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

const DEMO_SHARE_URL = "#"

export function HeroDemoMockup() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="hidden md:flex md:flex-col md:justify-center md:items-center w-full max-w-[1080px] mx-auto pb-12 relative border-x border-[#e4e5e6]">
      <div className="flex justify-center items-center w-full px-3 pb-3 relative">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-lg transition-[max-width,margin-bottom] duration-[800ms] ease-[cubic-bezier(0.34,1.5,0.64,1)]",
            "shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_1px_1px_-0.5px_rgba(0,0,0,0.04),0_3px_3px_-1.5px_rgba(0,0,0,0.04),0_6px_6px_-3px_rgba(0,0,0,0.04),0_12px_12px_-6px_rgba(0,0,0,0.02),0_24px_24px_-12px_rgba(0,0,0,0.02),0_24px_24px_2px_rgba(0,0,0,0.05)]",
            scrolled
              ? "max-w-[1000px] h-[581px] mb-9"
              : "max-w-[1080px] h-[629px] mb-0"
          )}
        >
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-3 h-10 px-3 bg-white border-b border-black/10 rounded-t-lg">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/10" />
              <span className="w-3 h-3 rounded-full bg-[#28ca42] border border-black/10" />
            </div>
            <a
              className="flex-1 flex items-center gap-1.5 h-6 px-2.5 border border-[#f5f5f5] rounded-md text-[#666] text-xs cursor-pointer transition-colors hover:[&_span]:text-[#2462ff]"
              href="#"
            >
              <Lock className="w-3 h-3 flex-shrink-0 text-[#666]" />
              <span>leadist.com/dashboard</span>
            </a>
          </div>
          <div
            className={cn(
              "absolute top-10 left-0 origin-top-left overflow-hidden transition-transform duration-[800ms] ease-[cubic-bezier(0.34,1.5,0.64,1)]",
              scrolled ? "scale-[0.694]" : "scale-75"
            )}
            style={{ width: 1440, height: 798 }}
          >
            <Image
              src="/images/promptmonitor.io/assets/promptmonitor-hero-img-latest.png"
              alt="Leadist CRM dashboard showing lead and pipeline analytics"
              width={1440}
              height={798}
              className="w-full h-full object-cover object-top"
              unoptimized
              priority
            />
          </div>
          <a
            href={DEMO_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 z-10 flex items-center justify-center gap-1.5 h-9 px-4 rounded-full bg-black/96 text-white/90 border border-white/10 text-sm font-medium shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-opacity duration-200 hover:opacity-80"
          >
            <Expand className="w-4 h-4" />
            Expand
          </a>
        </div>
      </div>
    </div>
  )
}
