"use client";

import Image from "next/image";
import coins5Img from "../../../public/token-bonuses/5.webp";
import coins10Img from "../../../public/token-bonuses/10.webp";
import coins15Img from "../../../public/token-bonuses/15.webp";
import coins20Img from "../../../public/token-bonuses/20.webp";
import coins25Img from "../../../public/token-bonuses/25.webp";
import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";
import GrungeHeading from "../atoms/heading";

const bonusTiers = [
  { percentage: "+5%", threshold: "$100", coins: 3, offset: 0, src: coins5Img },
  { percentage: "+10%", threshold: "$250", coins: 4, offset: 40, src: coins10Img },
  { percentage: "+15%", threshold: "$1000", coins: 5, offset: 0, src: coins15Img },
  { percentage: "+20%", threshold: "$2500", coins: 6, offset: 40, src: coins20Img },
  { percentage: "+25%", threshold: "$5000", coins: 7, offset: 0, src: coins25Img },
];

function Title() {
  return (
    <div className="flex justify-center">
      <GrungeHeading
        width="781px"
        height="504px"
        text="TOKEN BONUSES"
        scratchSrc={scractchHeadingImg}
        className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[95px]"
        scratchOpacity={0.95}
      />
    </div>
  );
}

export function TokenBonusesSection() {
  return (
    <section className="py-16 md:pb-24 md:pt-0 lg:h-[1200px] relative z-10 overflow-hidden">
      {/* BG wrapper keeps scaling clipped cleanly */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/token-bonuses/tb-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
      object-cover
      object-center md:object-[center_bottom]
      origin-top
      scale-[1.28] md:scale-[1]
      -translate-y-4 sm:-translate-y-6 md:translate-y-0
      transform-gpu transition-transform duration-700 ease-out
      pointer-events-none select-none
    "
        />
      </div>




      <div className="container mx-auto px-4">
        <div className="md:mb-[2rem] lg:mt-[0rem] lg:mb-[0rem]">
          <Title />
        </div>

        <div className="relative max-w-8xl mx-auto mb-[10rem] md:mb-[15rem] lg:mb-[20rem]">
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
              gap-10 sm:gap-8 md:gap-[12px]
            "
          >
            {bonusTiers.map((tier, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center
                  w-full max-w-[240px] sm:max-w-none mx-auto
                 ${index === 4 ? 'lg:mt-[50px]' : index % 2 !== 0 ? 'mt-0' : 'lg:mt-[80px]'} 
                 ${index === 0 ? 'mt-[40px] md:mt-0' : ''}
                 `}
              >
                <Image
                  src={tier.src}
                  alt="coins"
                  className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-auto h-auto"
                />

                <div className="mt-6 sm:mt-8 text-fill-bold-color">
                  <p className="text-lg sm:text-xl md:text-[26px] font-semibold !mb-0">
                    {tier.percentage} TOKENS FOR
                  </p>
                  <p className="text-base sm:text-lg md:text-[26px] !mb-0">
                    PURCHASES OVER {tier.threshold}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
