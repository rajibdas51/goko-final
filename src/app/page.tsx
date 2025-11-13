"use client"

import { useState } from "react"

import { Footer } from "@/components/organisms/footer"
import { Header } from "@/components/organisms/header"

import { HeroSection } from "@/components/organisms/hero-section"
import { PresaleCard } from "@/components/organisms/presale-card"
import { FeaturedInSection } from "@/components/organisms/featured-in-section"
import { RegressionLabSection } from "@/components/organisms/regression-lab-section"
import { RoadmapSection } from "@/components/organisms/road-map-section"
import { TokenBonusesSection } from "@/components/organisms/token-bonuses-section"
import { HowToBuySection } from "@/components/organisms/how-to-buy-section"
import { FAQSection } from "@/components/organisms/faq-section"
import { InfoModal } from "@/components/organisms/info-modal"
import { SocialLinks } from "@/components/molecules/social-links"


import { TokenomiousSection } from "@/components/organisms/tokenomious-section"
import Image from "next/image"



export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <main className="min-h-screen relative overflow-hidden"

      style={
        {
          // Desktop header height (mobile uses globals.css default 64px)
          ["--header-h"]: "calc(env(safe-area-inset-top, 0px) + 88px)",
          paddingTop: "var(--header-h)", // reserve space so content isn't hidden
        } as React.CSSProperties
      }

    >
      {/* Background image */}
      {/* <div
        className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div> */}


      <Header />

      <div className="relative isolate">
        {/*  bg-cover bg-center bg-no-repeat bg-[url('/hero/hero-bg.webp')] */}
        <Image
          src="/hero/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
             absolute inset-0
                     -z-10 object-cover
                     md:object-bottom
                     [transform:scale(1.05)] md:[transform:scale(1.03)]
                     will-change-transform
                     pointer-events-none select-none
                   "/>

        {/* <Navigation /> */}

        <div className="relative pt-0 md:pt-24 lg:pt-[4rem] pb-12 md:pb-20">
          <div className="container mx-auto px-[0.5rem]">

            <div className="w-full flex flex-col max-w-[1490px] lg:flex-row gap-[20px] items-start mx-auto bg-or">


              <div className="w-full lg:w-[627px] xl:w-[827px] order-2 lg:order-1 flex items-center justify-end">
                <HeroSection />
              </div>

              <div className="w-full lg:w-[613px] order-1 lg:order-2 lg:sticky lg:top-32">

                <div className="flex items-center gap-[20px]">

                  <div className="mt-[-15rem] hidden lg:block">
                    <SocialLinks />
                  </div>

                  <PresaleCard onInfoClick={() => setIsModalOpen(true)} />

                </div>
              </div>

            </div>
          </div>
        </div>


        {/* <div className="relative z-10 max-w-[613px] ml-auto lg:sticky lg:top-32">
          <div className="rounded-2xl border border-[#524A39] bg-[#D2A45B]/50 backdrop-blur-2xl backdrop-saturate-150">
            <div className="pointer-events-none absolute inset-0 rounded-2xl [box-shadow:inset_0_0_0_1px_#524A39]" />

            <span className="pointer-events-none absolute -top-8 left-6 h-40 w-40 rounded-full opacity-40 blur-3xl bg-[#D2A45B]/50" />
            <span className="pointer-events-none absolute -top-8 right-6 h-40 w-40 rounded-full opacity-40 blur-3xl bg-[#D2A45B]/50" />
            <span className="pointer-events-none absolute -bottom-8 left-6 h-40 w-40 rounded-full opacity-40 blur-3xl bg-[#D2A45B]/50" />
            <span className="pointer-events-none absolute -bottom-8 right-6 h-40 w-40 rounded-full opacity-40 blur-3xl bg-[#D2A45B]/50" />

            <PresaleCard onInfoClick={() => setIsModalOpen(true)} />
          </div>
        </div> */}

      </div>

      <FeaturedInSection />
      <RegressionLabSection />

      <TokenomiousSection />
      <RoadmapSection />
      <div className="py-[4rem] bg-black hidden lg:block" />
      <TokenBonusesSection />
      <HowToBuySection />
      <FAQSection />

      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Footer />


    </main>
  )
}
