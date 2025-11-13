import type React from "react"
import { Button } from "../atoms/button"

import Image from "next/image"


import heroApe from "../../../public/hero/hero-ape.webp";
import { SocialLinks } from "../molecules/social-links";
import GrungeHeading from "../atoms/heading";


import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";
import Link from "next/link";



function Title1() {
  return (
    <div className=" flex justify-center lg:justify-end">
      <GrungeHeading
        width="781px"
        height="504px"
        text="HUMANITY PEAKED"
        scratchSrc={scractchHeadingImg}
        className="
        max-[349px]:text-[40px]
      max-[399px]:text-[50px]
      max-[449px]:text-[52px]
      max-[549px]:text-[56px]
      max-[649px]:text-[56px]
      sm:text-[62px]
      md:text-[68px]
      xl:text-[86px]
      leading-none !mb-0"
        scratchOpacity={0.95}
      />
    </div>
  );
}




function Title2() {
  return (
    <div className=" flex justify-center lg:justify-end">
      <GrungeHeading
        width="781px"
        height="504px"
        text="TIME TO GO BACK!"
        scratchSrc={scractchHeadingImg}
        className="text-[42px] md:text-[60px] leading-0 !mt-4"
        scratchOpacity={0.95}
      />
    </div>
  );
}


export const HeroSection: React.FC = () => {
  return (
    <div className="space-y-6 md:space-y-8 w-full">

      <div className="ml-auto w-full">
        {/* <Image src={humanityPeaked} alt="humanity-peaked" className="mt-[2rem] lg:mt-0 lg:w-[587px] lg:h-[96px] ml-auto" /> */}
        <div className="mt-[2rem] lg:mt-0 ml-auto">
          <Title1 />
          <Title2 />
        </div>
        {/* <Image src={timeToGoBack} alt="time-to-go-back" className="lg:w-[361px] lg:h-[65px] ml-auto" /> */}
      </div>


      {/* <Image src={inAWorldWhere} alt="inAWorldWhere" className="" /> */}
      <p className="lg:w-[345px] text-center lg:text-start text-fill-color text-[18px] lg:text-2xl">
        In a world where tech makes us smarter on the outside but emptier on the inside, GOKO embraces the regression — back to the ape.</p>

      <div className="xl:mt-[-4rem]">


        <p className="lg:w-[316px] text-center lg:text-start text-fill-color text-[18px] lg:text-2xl  lg:mr-[4rem] ml-auto">
          Powered by AI tools GOKO blends humor, culture, and utility into one unstoppable movement.
        </p>
      </div>


      <p className="lg:w-[188px] text-center lg:text-start text-fill-color text-[18px] lg:text-2xl ml-auto lg:mt-[5rem] lg:mr-[-4rem">
       Join the regression. Embrace the ape. Own the future.
      </p>

      <div className="space-y-4  lg:mt-[-8rem] xl:mt-[-11rem] mx-auto lg:mr-auto">



        <Link href={'https://goko.gitbook.io/goko-whitepaper/'} target="_blank" className="cursor-pointer">
          <div className="card-bg w-[150px] h-[48px] hidden lg:block border !border-[#9A7A39] !cursor-pointer custom-font-display">
            <Button variant="outline" size="lg" className="text-fill-color text-[18px] !cursor-pointer">
              WHITEPAPER
            </Button>
          </div>
        </Link>


        <Link href={'https://goko.gitbook.io/goko-whitepaper/'} target="_blank" className="cursor-pointer">
          <div className="card-bg w-[150px] h-[48px] lg:hidden mx-auto border !border-[#9A7A39] !cursor-pointer custom-font-display">
            <Button variant="outline" size="lg" className="text-fill-color text-[18px] !cursor-pointer">
              WHITEPAPER
            </Button>
          </div>
        </Link>

        <div className="lg:hidden mx-auto w-[120px]">
          <SocialLinks classNames="flex items-center gap-[0.5rem]" imgClasses="max-w-[40px] max-h-[40px]" />
        </div>

        <Image src={heroApe} alt="heroApe" className="xl:w-[727px] xl:h-[452px] 2xl:w-[827px] 2xl:h-[452px]  xl:mt-[-1rem] 2xl:mt-[-3rem]" />


      </div>

    </div>
  )
}
