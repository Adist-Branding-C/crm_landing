"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Link as LinkIcon, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { useDemoModal } from "@/context/DemoModalContext"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openModal } = useDemoModal()
  const visibleLinks = NAV_LINKS.filter((l) => !(l.href === "/" && pathname === "/"))

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-[77px] border-b border-[#e4e5e6] bg-[#fafafa]">
      <div className="mx-auto flex h-[76px] max-w-[1080px] items-center justify-between border-x border-[#e4e5e6] px-6 py-4">
        <Link
          href="/"
          className="flex items-center transition-opacity duration-200 hover:opacity-80"
        >
          <span className="font-heading text-xl font-semibold tracking-tight text-black">
            Leadist
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {visibleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#3a3a3a] no-underline transition-colors duration-200 hover:text-[#1a1a1a]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://app.leadistcrm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[#e4e5e6] bg-white px-4 py-2 text-sm font-medium text-[#3a3a3a] hover:bg-[#f5f5f5] transition-colors"
          >
            Login
          </a>
          <button
            type="button"
            onClick={openModal}
            className="flex h-9 items-center justify-center gap-2 rounded-md bg-[#1a1a1a] px-10 text-sm font-medium text-white hover:bg-[#333] transition-colors"
          >
            <LinkIcon className="h-4 w-4" />
            Start Free Trial
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex items-center justify-center text-[#3a3a3a] md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "border-b border-[#e4e5e6] bg-[#fafafa] md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {visibleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-medium text-[#3a3a3a] no-underline transition-colors duration-200 hover:text-[#1a1a1a]"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://app.leadistcrm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[#e4e5e6] bg-white px-4 py-2 text-sm font-medium text-[#3a3a3a] hover:bg-[#f5f5f5] transition-colors"
            >
              Login
            </a>
            <button
              type="button"
              onClick={() => { openModal(); setMobileOpen(false) }}
              className="flex h-9 items-center justify-center gap-2 rounded-md bg-[#1a1a1a] px-10 text-sm font-medium text-white hover:bg-[#333] transition-colors"
            >
              <LinkIcon className="h-4 w-4" />
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
