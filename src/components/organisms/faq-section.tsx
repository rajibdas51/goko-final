// "use client"

// import { Collapse, ConfigProvider, theme } from "antd"
// import type { CollapseProps } from "antd"
// import Image from "next/image"


// import faqsHeadingImg from "../../../public/faqs/faqs-heading.png"
// import faqsApe from "../../../public/faqs/faqs-ape.png"


// const faqItems: CollapseProps["items"] = [
//   {
//     key: "1",
//     label: <p className="text-fill-bold-color font-custom !mb-0">WHAT IS GOKO?</p>,
//     children: (
//       <p className="text-fill-color">
//         GOKO is an AI-powered meme token built around the idea of "reverse evolution." It combines quirky humor and real
//         AI utilities like the Regression Generator and Degen Oracle.
//       </p>
//     ),
//   },
//   {
//     key: "2",
//     label: <p className="text-fill-bold-color font-custom !mb-0">WHAT IS THE PRESALE PRICE?</p>,
//     children: (
//       <p className="text-fill-color">
//         The presale price starts at a discounted rate and increases in stages. Check the presale widget for current
//         pricing and bonuses.
//       </p>
//     ),
//   },
//   {
//     key: "3",
//     label: <p className="text-fill-bold-color font-custom !mb-0">HOW MANY TOKENS ARE ALLOCATED FOR PRESALE?</p>,
//     children: (
//       <p className="text-fill-color">
//         A significant portion of the total supply is allocated for presale participants, with additional bonuses for
//         early buyers and larger purchases.
//       </p>
//     ),
//   },
//   {
//     key: "4",
//     label: <p className="text-fill-bold-color font-custom !mb-0">WHAT HAPPENS AFTER THE PRESALE?</p>,
//     children: (
//       <p className="text-fill-color">
//         After the presale concludes, tokens will be claimable and staking will be available. The project will launch on
//         DEX and CEX exchanges.
//       </p>
//     ),
//   },
//   {
//     key: "5",
//     label: <p className="text-fill-bold-color font-custom !mb-0">IS THERE A HARD CAP OR SOFT CAP?</p>,
//     children: (
//       <p className="text-fill-color">
//         Yes, the presale has both soft and hard caps. Once the hard cap is reached, the presale will close and no more
//         tokens will be available at presale prices.
//       </p>
//     ),
//   },
//   {
//     key: "6",
//     label: <p className="text-fill-bold-color font-custom !mb-0">WHAT UTILITIES DOES GOKO HAVE?</p>,
//     children: (
//       <p className="text-fill-color">
//         GOKO features the Regression Generator (AI face filter), Degen Oracle (satirical market predictions), and future
//         utilities including NFT integration and community governance.
//       </p>
//     ),
//   },
//   {
//     key: "7",
//     label: <p className="text-fill-bold-color font-custom !mb-0">IS GOKO SAFE?</p>,
//     children: (
//       <p className="text-fill-color">
//         GOKO smart contracts are audited and the team is committed to transparency. However, as with all crypto
//         investments, please do your own research.
//       </p>
//     ),
//   },
//   {
//     key: "8",
//     label: <p className="text-fill-bold-color font-custom !mb-0 m-0">WHY SHOULD I INVEST IN GOKO?</p>,
//     children: (
//       <p className="text-fill-color">
//         GOKO combines viral meme potential with real AI utilities, creating a unique value proposition in the meme coin
//         space. Early investors benefit from presale bonuses and staking rewards.
//       </p>
//     ),
//   },
//   {
//     key: "9",
//     label: <p className="text-fill-bold-color font-custom !mb-0">CAN GOKO PREDICT MY LOVE LIFE?</p>,
//     children: (
//       <p className="text-fill-color">
//         The Degen Oracle focuses on market predictions, but who knows? Maybe your love life is just as unpredictable as
//         crypto markets. 🍌
//       </p>
//     ),
//   },
// ]




// export function FAQSection() {
//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           fontFamily: "var(--font-custom), ui-sans-serif, system-ui, sans-serif",
//           colorBgContainer: "transparent",
//           borderRadius: 8,
//         },
//         algorithm: theme.defaultAlgorithm,
//       }}
//     >


//       <section id="faqs" className="py-12 md:py-16  h-full relative z-10">

//         <div
//           aria-hidden
//           className="
//       pointer-events-none absolute inset-x-0 top-0 -z-10
//       h-full
//       bg-[url('/faqs/faqs-bg.png')] bg-no-repeat bg-cover bg-top lg:bg-bottom
//     "
//         />
//         <div className="container mx-auto px-4">

//           <Image src={faqsHeadingImg} alt='faqs heading' className="w-[106px] h-[63px] md:w-[126px] md:h-[83px] lg:w-[154px] lg:h-[96px] mx-auto mb-[2rem]" />


//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
//             {/* Left side - FAQ Accordion */}
//             <div className="relative">
//               <Collapse
//                 items={faqItems}
//                 defaultActiveKey={["1"]}
//                 expandIconPosition="end"
//                 className="faq-collapse"
//                 expandIcon={({ isActive }) => <span className="mt-1">{isActive ?
//                   <Image src="/common/chevron-down.svg" alt='chevron-down' width={24} height={24} className="min-w-[24px] min-h-[24px]" /> :
//                   <Image src="/common/chevron-up.svg" alt='chevron-up' width={24} height={24} className="min-w-[24px] min-h-[24px]" />}</span>}
//               />
//             </div>

//             {/* Right side - Ape character */}
//             <div className="relative">

//               <div className="flex md:justify-start">
//                 <Image
//                   src={faqsApe}
//                   alt="faqs-ape"
//                   className="lg:absolute lg:left-[-100px] lg:top-[150px] mx-auto md:max-w-[650px] md:max-h-[400px] lg:max-w-[805px] lg:max-h-[466px] z-[-1]"
//                 />
//               </div>

//               {/* <div className="absolute bottom-0 right-0 text-9xl">💰</div> */}
//             </div>
//           </div>
//         </div>


//     </section>

//     </ConfigProvider >

//   )
// }



"use client"

import { useState } from "react"
import { Collapse, ConfigProvider, theme } from "antd"
import type { CollapseProps } from "antd"
import Image from "next/image"

import faqsApe from "../../../public/faqs/faqs-ape.webp"


import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";

import GrungeHeading from "../atoms/heading";



function Title() {
  return (
    <div className="flex justify-center">
      <GrungeHeading
        width="781px"
        height="504px"
        text="FAQS"
        scratchSrc={scractchHeadingImg}
        className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[95px]"
        scratchOpacity={0.95}
      />
    </div>
  );
}


const faqItems: CollapseProps["items"] = [
  {
    key: "1", label: <p className="text-fill-bold-color !font-custom !mb-0">WHAT IS GOKO?</p>,
    children: <p className="text-fill-color">GOKO is an AI-powered meme token built around the idea of “reverse evolution.” It combines culture, humor, and real AI utilities like the Regression Lab and Degen Oracle.</p>
  },
  {
    key: "134", label: <p className="text-fill-bold-color font-custom !mb-0">How do I join the presale?</p>,
    children: <p className="text-fill-color">Connect your crypto wallet to the presale widget on this website and purchase GOKO using ETH, USDT, or by card. Once the presale ends, your tokens will be claimable.</p>
  },
  {
    key: "2", label: <p className="text-fill-bold-color font-custom !mb-0">What is the presale price?</p>,
    children: <p className="text-fill-color">The presale starts at $0.0002 per token, with gradual price increases as stages progres and more tokens are sold.</p>
  },
  {
    key: "3", label: <p className="text-fill-bold-color font-custom !mb-0">How many tokens are allocated for presale?</p>,
    children: <p className="text-fill-color">20% of the total supply is reserved for the presale, giving early supporters the best entry point.</p>
  },
  {
    key: "4", label: <p className="text-fill-bold-color font-custom !mb-0">What happens after the presale?</p>,
    children: <p className="text-fill-color">After presale, 10% of supply will be added to liquidity on major decentralized exchanges. The token will then trade live on launch day.</p>
  },
  {
    key: "5", label: <p className="text-fill-bold-color font-custom !mb-0">Is there a hard cap or soft cap?</p>,
    children: <p className="text-fill-color">There’s no fixed hard cap or soft cap. GOKO will launch regardless of presale stage, but the higher the raise, the stronger the liquidity and marketing push.</p>
  },
  {
    key: "6", label: <p className="text-fill-bold-color font-custom !mb-0">What utilities does GOKO have?</p>,
    children: <div className="text-fill-color">
      <p>At launch, GOKO comes with two utilities:</p>
      <ul>
        <li><strong>GOKO Regression Lab</strong>— transform human photos into apes.</li>
        <li><strong>GOKO Degen Oracle</strong>— AI-driven, meme-style market prophecy tool.
 More utilities will roll out as the project grows.</li>
      </ul>
    </div>
  },
  {
    key: "7", label: <p className="text-fill-bold-color font-custom !mb-0">Is GOKO safe?</p>,
    children: <p className="text-fill-color">Yes. The tokenomics are transparent, with clear allocations for presale, liquidity, and development. As always in crypto, do your own research and only invest what you can afford to lose as crypto markets can be unpredictable due to market volatility.</p>
  },
  {
    key: "8", label: <p className="text-fill-bold-color font-custom !mb-0 m-0">Why should I invest in GOKO?</p>,
    children: <p className="text-fill-color">Because GOKO isn’t just another meme — it’s a cultural movement backed by real AI tools, a strong community vision, and a mascot that slaps. It’s where humor meets utility, and where early believers win big.</p>
  },
  {
    key: "9", label: <p className="text-fill-bold-color font-custom !mb-0 m-0">Can GOKO predict my love life?</p>,
    children: <p className="text-fill-color">
      The AI Degen Oracle sees many things… but mostly charts, memes, and bananas. If you’re looking for dating advice, all we can say is: buy GOKO, become ape, love will follow.
    </p>
  },
]

export function FAQSection() {
  // control which single panel is open
  const [activeKey, setActiveKey] = useState<string | undefined>("1")

  // AntD v5 onChange gives string in accordion mode; still normalize safely
  const handleChange: CollapseProps["onChange"] = key => {
    if (Array.isArray(key)) setActiveKey(key[0])
    else setActiveKey(key as string | undefined)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--antd-font-family), ui-sans-serif, system-ui, sans-serif !important",
          colorBgContainer: "transparent",
          borderRadius: 8,
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <section id="faqs" className="relative z-10 py-12 md:py-16">
        {/* Stable background layer (fixed heights per breakpoint, no jump) */}
        {/* <div
          aria-hidden
          className="
            pointer-events-none absolute inset-x-0 top-0 -z-10
            h-[1420px] md:h-[900px] lg:h-[1180px]
            bg-[url('/faqs/faqs-bg.webp')] bg-no-repeat bg-cover bg-top lg:bg-bottom
          "
        /> */}

        <div
          aria-hidden
          className="
        pointer-events-none absolute inset-x-0 top-0 -z-10
        h-[1600px] md:h-[900px] lg:h-[1180px]
      "
        >
          <Image
            src="/faqs/faqs-bg.webp"      // or .avif if available
            alt=""
            fill
            priority                       // keep only if above the fold
            sizes="100vw"
            className="
          object-cover
          object-top md:object-bottom
          [transform:scale(1.05)] md:[transform:scale(1.03)]
          will-change-transform
          select-none
        "
          />
        </div>




        {/* Ensure content at least matches bg height, but can extend below if needed */}
        <div className="container mx-auto px-4">
          {/* <Image
            src={faqsHeadingImg}
            alt="faqs heading"
            className="w-[106px] h-[63px] md:w-[126px] md:h-[83px] lg:w-[154px] lg:h-[96px] mx-auto mb-[2rem]"
          /> */}

          <Title />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Accordion (single open) */}
            <div className="relative">
              <Collapse
                items={faqItems}
                accordion
                activeKey={activeKey}
                onChange={handleChange}
                expandIconPosition="end"
                className="faq-collapse"
                expandIcon={({ isActive }) => (
                  <span className="mt-1">
                    {isActive ? (
                      <Image src="/common/chevron-down.svg" alt="chevron-down" width={24} height={24} className="min-w-[24px] min-h-[24px]" />
                    ) : (
                      <Image src="/common/chevron-up.svg" alt="chevron-up" width={24} height={24} className="min-w-[24px] min-h-[24px]" />
                    )}
                  </span>
                )}
              />
            </div>

            {/* Right: Ape */}
            <div className="relative">
              <div className="flex md:justify-start">
                <Image
                  src={faqsApe}
                  alt="faqs-ape"
                  className="lg:absolute lg:left-[-100px] lg:top-[150px] mx-auto md:max-w-[650px] md:max-h-[400px] lg:max-w-[805px] lg:max-h-[466px] z-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  )
}
