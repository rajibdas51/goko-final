// "use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { NAV_ITEMS, NAV_ITEMS_MOBILE } from "@/lib/constants/navigation";
import { Logo } from "../atoms/logo";
import { CoinIcon } from "../atoms/coin-icon";
import { IconButton } from "../atoms/icon-button";
import { NavLink } from "../molecules/nav-link";
import { CountryDropdown } from "../molecules/countries-dropdown";
import buttonImg from "../../../public/common/button.png";

export const Header: React.FC = () => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  // Smooth scroll for in-page anchors (optional — scroll-margin-top already helps)
  const handleAnchorClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (isMenuOpen) handleCloseMenu();
  };

  return (
    <>
      {/* FIXED sticky header */}
      <header
        className="
          fixed inset-x-0 top-0 z-[100]
          bg-black/80 backdrop-blur
          supports-[backdrop-filter]:bg-black/60
        "
        style={
          {
            // Mobile default; desktop overrides var at <main>
            ["--header-h"]: "calc(env(safe-area-inset-top, 0px) + 64px)",
          } as React.CSSProperties
        }
      >
        {/* Inner row MUST match the visual header height (without the notch) */}
        <div className="h-[64px] mt-4 lg:mt-0 md:h-[88px]">
          <div className="container max-w-[1440px] mx-auto px-[1rem] lg:px-[19px] xl:px-[3.5rem] h-full">
            <div className="flex w-full">
              {/* Logo - desktop left */}
              <Link href={"/"} className="lg:w-[120px]">
                <Logo className="hidden lg:flex text-[56px] !mb-0 mt-4 mr-2" />
              </Link>

              {/* Mobile row */}
              {/* <div className="flex items-center justify-between lg:hidden w-full px-[14px]">
                                <div
                                    className="
                                    w-full
              bg-no-repeat bg-right bg-contain opacity-80
              bg-[url('/header/header-left.webp')]
            ">
                                    <Link href={"/"}>
                                        <Logo className="w-[44px] h-[26px] text-[26px] lg:hidden" />
                                    </Link>

                                </div>





                                <Link href={"/"}>
                                    <CoinIcon className="w-[50px] h-[50px] lg:w-[78px] lg:h-[78px]" />
                                </Link>

                                <div
                                    aria-hidden
                                    className="
                                    w-full
              bg-no-repeat bg-right bg-contain opacity-80
              bg-[url('/header/header-right.webp')]
            "
                                >

                                    <IconButton
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="lg:hidden ml-2 w-[32px] h-[32px] !mt-[-10px] !ml-auto"
                                        ariaLabel="Toggle menu"
                                    >
                                        {isMenuOpen || isClosing ? (
                                            <div className="w-[32px] h-[32px] rounded-full bg-[#4a4a3a] border-2 border-[#D4A574] flex items-center justify-center hover:bg-[#5a5a4a] transition-colors">
                                                <span className="text-[#D4A574] text-2xl font-bold">×</span>
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 flex flex-col justify-center gap-1">
                                                <span className="block w-full h-0.5 bg-[#D4A574] transition-transform duration-300"></span>
                                                <span className="block w-full h-0.5 bg-[#D4A574] transition-opacity duration-300"></span>
                                                <span className="block w-full h-0.5 bg-[#D4A574] transition-transform duration-300"></span>
                                            </div>
                                        )}
                                    </IconButton>

                                </div>

                            </div> */}

              {/* Mobile row — everything inside the card */}
              <div className="lg:hidden w-full mx-auto">
                <div
                  className="
      relative h-[56px] w-full
      rounded-md
    
      flex items-center px-10
      overflow-hidden
    "
                >
                  {/* decorative backgrounds (full height, narrower for coin space) */}
                  <div
                    aria-hidden
                    className="
        absolute inset-y-0 left-0
        w-[48%]
        bg-no-repeat bg-left
        [background-size:auto_100%]
        [background-position:8%_50%]
        opacity-80 pointer-events-none
        bg-[url('/header/header-left.webp')]
        z-0
      "
                  />
                  <div
                    aria-hidden
                    className="
        absolute inset-y-0 right-0
        w-[48%]
        bg-no-repeat bg-right
        [background-size:auto_100%]
        [background-position:92%_50%]
        opacity-80 pointer-events-none
        bg-[url('/header/header-right.webp')]
        z-0
      "
                  />

                  {/* centered circular cutout (above art, below content) */}
                  <div
                    aria-hidden
                    className="
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        z-[5] pointer-events-none
      "
                  >
                    <div
                      className="
          rounded-full bg-black
          w-[84px] h-[84px]          /* mobile */
          md:w-[96px] md:h-[96px]    /* tablet */
          shadow-[0_0_0_2px_rgba(120,110,90,0.5)_inset] /* subtle rim */
        "
                    />
                  </div>

                  {/* content above everything */}
                  <div className="relative z-10 grid grid-cols-3 items-center w-full custom-font-display">
                    {/* left: logo */}
                    <div className="justify-self-start">
                      <Link href={"/"}>
                        <Logo className="w-[44px] h-[26px] text-[26px]" />
                      </Link>
                    </div>

                    {/* center: coin */}
                    <div className="justify-self-center">
                      <Link href={"/"}>
                        <CoinIcon className="w-[56px] h-[56px]" />
                      </Link>
                    </div>

                    {/* right: hamburger */}
                    <div className={`justify-self-end ${!isMenuOpen ? '' : 'mr-2 -mt-3'}`}>
                      <IconButton
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        ariaLabel="Toggle menu"
                        className="w-[36px] h-[36px]"
                      >
                        {isMenuOpen || isClosing ? (
                          <div className="w-[36px] h-[36px] rounded-full bg-[#4a4a3a] border-2 border-[#D4A574] flex items-center justify-center hover:bg-[#5a5a4a] transition-colors">
                            <span className="text-[#D4A574] text-2xl font-bold leading-none">×</span>
                          </div>
                        ) : (
                          <div className="w-6 h-6 flex flex-col justify-center gap-1">
                            <span className="block w-full h-0.5 bg-[#D4A574]" />
                            <span className="block w-full h-0.5 bg-[#D4A574]" />
                            <span className="block w-full h-0.5 bg-[#D4A574]" />
                          </div>
                        )}
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>



              {/* Desktop row */}
              <div className="hidden lg:flex items-center justify-between max-w-[1108px] w-full custom-font-display">
                {/* Left nav */}
                <div className="hidden lg:flex flex-1  xl:max-w-[493px]
         bg-contain bg-center bg-no-repeat bg-[url('/header/header-left.webp')] h-full
                ">
                  <nav className="lg:flex items-center justify-end lg:gap-[1rem] xl:gap-[4rem] flex-1 mr-[2.75rem]">
                    {NAV_ITEMS.map((item) => (
                      <NavLink key={item.label} href={item.href} onClick={handleAnchorClick}>
                        {item.label}
                      </NavLink>
                    ))}
                  </nav>
                </div>

                {/* Center icon */}
                <Link href={"/"}>
                  <CoinIcon />
                </Link>

                {/* Right nav */}
                <div className="
                hidden lg:flex items-center lg:gap-[2rem] xl:gap-[4rem] flex-1 
                xl:max-w-[541px]
                bg-contain bg-center bg-no-repeat bg-[url('/header/header-right.webp')] h-full
                
         ">
                  <nav className="hidden lg:flex items-center gap-6 flex-1 ml-[2.75rem] ">
                    <NavLink href={"#how-to-buy"} onClick={handleAnchorClick}>
                      How to buy
                    </NavLink>

                    <NavLink href={"#faqs"} onClick={handleAnchorClick}>
                      FAQS
                    </NavLink>

                    <Image src={buttonImg} alt="buy" className="cursor-pointer w-[100px] xl:w-[140px] xl:h-[46px]" />

                    <CountryDropdown className="ml-4 mr-[2.5rem]" />
                  </nav>
                </div>

                {/* (Duplicate) Mobile toggle kept hidden on lg  */}
                <IconButton
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden ml-2"
                  ariaLabel="Toggle menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center gap-1">
                    <span className="block w-full h-0.5 bg-[#D4A574] transition-transform duration-300"></span>
                    <span className="block w-full h-0.5 bg-[#D4A574] transition-opacity duration-300"></span>
                    <span className="block w-full h-0.5 bg-[#D4A574] transition-transform duration-300"></span>
                  </div>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu panel starts below the fixed header */}
      {(isMenuOpen || isClosing) && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm ${isClosing ? "animate-fade-out-backdrop" : "animate-fade-in-backdrop"
              }`}
            onClick={handleCloseMenu}
          />
          <div
            className={`
              absolute left-4 right-4
              top-[calc(var(--header-h)+0.5rem)]
              custom-font-display
              card-bg-normal border-2 border-[#4a4a3a] p-6
              ${isClosing ? "animate-slide-out-up" : "animate-slide-in-down"}
            `}
          >
            <nav className="flex flex-col gap-6 justify-center">
              {NAV_ITEMS_MOBILE.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  onClick={() => isMenuOpen && handleCloseMenu()}
                  classNames="text-fill-color text-[28px] text-center leading-[120%]"
                >
                  {item.label}
                </NavLink>
              ))}
              <Image src={buttonImg} alt="buy" className="cursor-pointer w-[140px] h-[46px] mx-auto" />

              <CountryDropdown className="w-[140px] h-[46px] mx-auto justify-center" textClasses="text-[28px]" />
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
