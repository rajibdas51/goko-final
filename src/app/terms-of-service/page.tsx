"use client"

import { Header } from "@/components/organisms/header"
import { TermsOfServiceSection } from "@/components/organisms/terms-of-service"





export default function TermsOfService() {


    return (
        <main className="min-h-screen relative overflow-hidden custom-font-display"

            style={
                {
                    // Desktop header height (mobile uses globals.css default 64px)
                    ["--header-h"]: "calc(env(safe-area-inset-top, 0px) + 88px)",
                    paddingTop: "var(--header-h)", // reserve space so content isn't hidden
                } as React.CSSProperties
            }
        >

            <div className="relative">
                <Header />
            </div>


            <TermsOfServiceSection />


        </main>
    )
}
