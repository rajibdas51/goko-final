"use client"

import { useState } from "react"
import { Logo } from "../atoms/logo"
import { NavLink } from "../molecules/nav-link"
import { BuyButton } from "../atoms/buy-button"
import { MobileMenuButton } from "../molecules/mobile-menu-button"
import { Medallion } from "../molecules/medallion"
import { LanguageSelector } from "../atoms/language-selector"


export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full px-4 py-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between gap-4 bg-gradient-to-r from-amber-950/40 via-amber-900/30 to-amber-950/40 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-amber-800/50 shadow-2xl">
          <Logo />

          <div className="flex items-center gap-8">
            <NavLink href="#goko-labs">GOKO LABS</NavLink>
            <NavLink href="#tokenomics">TOKENOMICS</NavLink>
            <NavLink href="#roadmap">ROADMAP</NavLink>
          </div>

          <Medallion />

          <div className="flex items-center gap-8">
            <NavLink href="#how-to-buy">HOW TO BUY</NavLink>
            <NavLink href="#faqs">FAQS</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <BuyButton />
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-amber-950/40 via-amber-900/30 to-amber-950/40 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-amber-800/50 shadow-2xl">
            <Logo />
            <Medallion />
            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="mt-4 bg-gradient-to-br from-amber-950/90 to-amber-900/90 backdrop-blur-md rounded-3xl p-6 border-2 border-amber-800/50 shadow-2xl">
              <div className="flex flex-col gap-4">
                <NavLink href="#goko-labs">GOKO LABS</NavLink>
                <NavLink href="#tokenomics">TOKENOMICS</NavLink>
                <NavLink href="#roadmap">ROADMAP</NavLink>
                <NavLink href="#how-to-buy">HOW TO BUY</NavLink>
                <NavLink href="#faqs">FAQS</NavLink>
                <div className="pt-4 border-t border-amber-800/50 flex flex-col gap-4">
                  <BuyButton />
                  <LanguageSelector />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
