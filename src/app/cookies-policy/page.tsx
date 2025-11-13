"use client"

import { Header } from "@/components/organisms/header"

import { CookiesPolicySection } from "@/components/organisms/cookies-policy-section"




export default function CookiesPolicy() {


  return (
    <main className="min-h-screen relative overflow-hidden custom-font-display"
      style={
        {
          // Desktop header height (mobile uses globals.css default 64px)
          ["--header-h"]: "calc(env(safe-area-inset-top, 0px) + 88px)",
          paddingTop: "var(--header-h)", // reserve space so content isn't hidden
        } as React.CSSProperties
      }>

      <div className="relative">
        <Header />
      </div>

      <CookiesPolicySection />

    </main>
  )
}
