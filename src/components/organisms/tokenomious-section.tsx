"use client"

import Image from "next/image"


import tokenomiosImg from "../../../public/tokenomious/main-bg.webp"
import mbMainBg from "../../../public/tokenomious/mb-main-bg.webp"



const tokenomicsData = [
  { percentage: "15%", label: "STAKING & AIRDROPS" },
  { percentage: "10%", label: "TEAM & ADVISORS" },
  { percentage: "10%", label: "LIQUIDITY" },
  { percentage: "15%", label: "TREASURY" },
  { percentage: "20%", label: "ECOSYSTEM & UTILITIES" },
  { percentage: "20%", label: "PRESALE" },
  { percentage: "10%", label: "MARKETING & PARTNERSHIPS" },
]



import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";
import GrungeHeading from "../atoms/heading";



function Title() {
  return (
    <div className="flex justify-center">
      <GrungeHeading
        width="781px"
        height="504px"
        text="TOKENOMICS"
        scratchSrc={scractchHeadingImg}
        className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[95px]"
        scratchOpacity={0.95}
      />
    </div>
  );
}



export function TokenomiousSection() {
  return (
    <section id="tokenomics" className="py-16 md:py-24 relative z-10 overflow-hidden custom-font-display">


      <Image
        src="/tokenomious/tokenomious-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
            -z-10 object-cover
            md:object-bottom
            [transform:scale(1.05)] md:[transform:scale(1.03)]
            will-change-transform
            pointer-events-none select-none
          "/>


      <div className="container mx-auto px-4">


        {/* <Image src={tokenomiousHeadingImg} alt='tokenomious heading' className="w-[165px] h-[43px] md:w-[246px] md:h-[83px] lg:w-[304px] lg:h-[96px] mx-auto" /> */}

        <Title />

        {/* Timeline line */}
        {/* <div className="absolute top-[120px] left-0 right-0 h-1 bg-gradient-to-r from-[#5a5a4a] via-[#D4A574] to-[#5a5a4a] hidden lg:block" /> */}

        {/* Phases */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4"> */}

        <div className="relative bg-cover hidden lg:block">
          <Image src={tokenomiosImg} alt='tokenomiosImg' className="mt-[-5rem]" />
        </div>

        <div className="relative bg-cover block lg:hidden">
          <Image src={mbMainBg} alt='mb-main-bg' />
        </div>


        <div className="flex flex-col gap-6 lg:hidden">
          {tokenomicsData.map((item, index) => (
            // <TokenomicsItem key={index} percentage={item.percentage} label={item.label} />
            <div className={`text-center`} key={index}>
              <span className="text-fill-bold-color text-[32px] leading-[120%]">{item.percentage}</span>
              <span className="text-fill-bold-color text-[32px] leading-[120%] ml-1">{item.label}</span>
            </div>
          ))}
        </div>

        {/* </div> */}
      </div>
    </section>
  )
}
