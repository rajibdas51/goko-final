"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

import { CoinIcon } from "../atoms/coin-icon"

import lab1 from "../../../public/regression-lab/lab-1.webp"
import videoTop from "../../../public/regression-lab/video-top.webp"
import videoBottom from "../../../public/regression-lab/video-bottom.webp"
import lab2 from "../../../public/regression-lab/lab-2.webp"
import labApe from "../../../public/regression-lab/lab-ape.webp"
// import tbHeadingImg from "../../../public/regression-lab/lab-heading.webp"
import tbHeadingImg from "../../../public/regression-lab/lab-heading-1-mobile.png"
import tbHeadingImg2 from "../../../public/regression-lab/lab-heading-2-mobile.png"
import { VideoSequence } from "../atoms/video-source"






import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";
import GrungeHeading from "../atoms/heading";



function Title1() {
  return (
    <div className=" flex justify-center">
      <GrungeHeading
        width="781px"
        height="504px"
        text="GOKO'S REGRESSION LAB"
        scratchSrc={scractchHeadingImg}
        className="text-[40px] md:text-[55px] xl:text-[60px]"
        scratchOpacity={0.95}
      />
    </div>
  );
}


function Title2() {
  return (
    <div className=" flex justify-center">
      <GrungeHeading
        width="781px"
        height="504px"
        text="GOKO'S DEGEN ORACLE"
        scratchSrc={scractchHeadingImg}
        className="text-[40px] md:text-[55px] xl:text-[60px]"
        scratchOpacity={0.95}
      />
    </div>
  );
}



gsap.registerPlugin(ScrollTrigger)

const labSections = [
  {
    id: "intro",
    title: "GOKO'S REGRESSION LAB",
    titleSrc: <Title1 />,
    subtitle: '"EVOLUTION WAS A MISTAKE."',
    description:
      "The Regression Generator unveils your primal truth — turning polished humans into glorious, banana-hungry apes. Not just a funny face filter, but a cultural reset.",
    points: [
      "Share your regression across socials and watch virality do the work.",
      "Become part of the meme movement that actually sticks.",
      "Proof that the strongest future lies in embracing our past.",
    ],
    videoSrcs: [
      "/videos/AIregression1.mp4",
      "/videos/AIregression2.mp4",
      "/videos/AIregression3.mp4",
    ],
  },
  {
    id: "oracle",
    title: "GOKO'S DEGEN ORACLE",
    titleSrc: <Title2 />,
    subtitle: '"THE ONLY ALPHA LEFT IS BANANAS."',
    description:
      "Markets are chaos. Predictions are lies. But the Degen Oracle cuts through the noise with raw, satirical prophecy.",
    points: [
      "A blend of real data, AI insights, and absolute degen comedy.",
      "Daily oracle drops to guide the herd.",
      "Equal parts entertainment and market wisdom — the truth you didn’t know you needed.",
    ],
    videoSrcs: [
      "/videos/Chat_desktop.mp4",
      "/videos/Chat_mobile.mp4",
    ],
  },
]



/** ===================== Desktop ===================== **/
function RegressionLabDesktop() {
  const rootRef = useRef<HTMLDivElement>(null)

  // useLayoutEffect(() => {
  //   if (!rootRef.current) return
  //   const mm = gsap.matchMedia()
  //   const DESKTOP_OFFSET = 72 // slightly smaller offset; adjust as needed

  //   mm.add("(min-width: 1024px)", () => {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     gsap.utils.toArray<HTMLElement>(rootRef.current.querySelectorAll(".panel-desktop")).forEach(panel => {
  //       ScrollTrigger.create({
  //         trigger: panel,
  //         start: `top+=${DESKTOP_OFFSET} top`,
  //         pin: true,
  //         pinSpacing: false,
  //         anticipatePin: 1,
  //         invalidateOnRefresh: true,
  //       })
  //     })
  //   })

  //   return () => mm.revert()
  // }, [])

  return (
    // <section ref={rootRef} className="relative z-10 hidden lg:block">
    //   <div className="panel-desktop relative h-screen w-full overflow-auto bg-paralex-img">
    //     <PanelDesktop section={labSections[0]} hasHeading={true} />
    //     <PanelDesktop section={labSections[1]} hasHeading={false} />
    //   </div>
    //   {/* <div className="panel-desktop relative h-screen w-full overflow-hidden">
    //     <PanelDesktop section={labSections[1]} hasHeading={false} />
    //   </div> */}
    // </section>
    <section ref={rootRef} className="relative z-10 hidden lg:block">
      <div className="absolute inset-0 -z-10 bg-paralex-img" />

      <div className="panel-desktop relative h-screen w-full">
        <PanelDesktop section={labSections[0]} hasHeading={true} />
      </div>

      <div className="panel-desktop relative h-screen w-full">
        <PanelDesktop section={labSections[1]} hasHeading={false} />
      </div>
    </section>

  )
}

function PanelDesktop({ section, hasHeading }: { section: typeof labSections[number], hasHeading: boolean }) {
  return (
    // Turn the panel into a column: heading on top, grid fills the rest.
    <div className="">
      {/* absolute inset-0 flex flex-col bg-cover bg-center lg:bg-bottom bg-no-repeat bg-[url('/regression-lab/regression-lab-bg.webp')] */}

      {/* <Image
        src="/regression-lab/regression-lab-bg.webp"
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
              "/> */}



      {/* Background */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" /> */}

      {/* Content fills remaining height, aligned from top */}
      <div className="container mx-auto p-4 flex-1 flex items-start py-16 md:py-24">
        <div className="flex gap-10 lg:gap-4 xl:gap-12 items-start max-w-7xl mx-auto w-full mt-6">
          {/* Left - VIDEO ONLY (exact desktop size) */}
          <div className="relative mt-[5rem]">
            <Image src={videoTop} alt="videoTop" className="w-[177px] h-[40px] absolute -top-[20px] right-[10px] z-99" />
            <div className={`relative overflow-hidden xl:w-[300px] 2xl:w-[384px] ${hasHeading ? '2xl:h-[530px]' : '2xl:h-[490px]'} `}>
              <div className="flex items-center">
                {/* style={{ width: 366, height:  }} */}
                <div className={`overflow-hidden shadow lg:w-[266px] xl:w-[300px] 2xl:w-[366px] ${hasHeading ? 'xl:h-[400px] 2xl:h-[489px]' : '2xl:h-[419px]'}`}>
                  <VideoSequence
                    sources={section.videoSrcs}
                    className={`lg:w-[266px] xl:w-[300px] 2xl:w-[366px] ${hasHeading ? 'xl:h-[400px] 2xl:h-[489px]' : '2xl:h-[449px]'} gradient-border-box object-contain border-0 block`}
                  />
                </div>
                <Image src={videoBottom} alt="videoBottom" className={`w-[177px] h-[40px] absolute ${hasHeading ? 'lg:bottom-[0px] 2xl:bottom-[20px] ' : 'lg:bottom-0 2xl:bottom-[50px]'} -left-[0px]`} />
              </div>
            </div>
            <div className={`absolute ${hasHeading ? 'lg:-bottom-75 xl:-bottom-60 2xl:-bottom-38' : 'lg:-bottom-80 xl:-bottom-78 2xl:-bottom-38'} lg:-left-0 xl:left-0 2xl:left-20 pointer-events-none hidden lg:block`}>
              {/* <Image src={lab1} alt="lab1" className="w-[122px] h-[132px]" /> */}
            </div>
          </div>

          {/* Right - Content */}
          <div className="relative">
            <div className="p-8 md:p-0 lg:max-w-[500px] xl:max-w-[680px] 2xl:max-w-[780px] 2xl:p-10">
              <div className="xl:px-4 2xl:pt-6">
                {/* <Image
                  src={section.titleSrc}
                  alt="tb heading"
                  className="w-[210px] h-[43px] md:w-[356px] md:h-[63px] lg:w-[501px] lg:h-[96px] mx-auto"
                /> */}
                {section.titleSrc}
              </div>
              <p className="text-[32px] text-fill-bold-color leading-[120%] mb-6 italic">{section.subtitle}</p>
              <p className="text-[24px] text-fill-color leading-[120%] mb-4 uppercase tracking-wide">{section.description}</p>
              <div className="space-y-0">
                {section.points.map((point, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full text-fill-color flex items-center justify-center mt-1">
                      <CoinIcon />
                    </div>
                    <p className="text-fill-color leading-[120%] uppercase text-[24px] tracking-wide">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-18 lg:-right-50 2xl:-right-30 pointer-events-none hidden lg:block">
              {/* <Image src={lab2} alt="lab2" className="w-[52px] h-[125px]" /> */}
            </div>

            <div className="absolute lg:top-80 xl:top-78 2xl:top-90 top-85 lg:-right-55 2xl:-right-50 pointer-events-none hidden lg:block">
              {/* <Image src={labApe} alt="lab ape" className="w-[335px] h-[333px]" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


/** ===================== Mobile ===================== **/
function RegressionLabMobile() {
  return (
    <section className="block lg:hidden py-12 md:py-16 h-full relative z-10 overflow-hidden">
      {/* Heading on mobile too */}
      {/* <div className="px-4 py-10">
        <Image
          src={tbHeadingImg}
          alt="tb heading"
          className="w-[319px] h-[43px] md:w-[456px] md:h-[63px] lg:w-[501px] lg:h-[96px] mx-auto"
        />
       

      </div> */}


      <Image
        src="/regression-lab/regression-lab-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover md:object-bottom [transform:scale(1.05)] md:[transform:scale(1.03)] pointer-events-none select-none"
      
        />

      <div className="container mx-auto px-4 pb-10 pt-4 space-y-8">
        <MobileCard section={labSections[0]} lowHeight={false} />
        <div className="mt-[3rem]">
          <MobileCard section={labSections[1]} lowHeight={true} />
        </div>
      </div>
    </section>
  )
}



function MobileCard({ section, lowHeight }: { section: typeof labSections[number], lowHeight: boolean }) {
  return (

    <>

      <div className={`px-4 pt-10 ${lowHeight ? 'pb-3' : 'pb-0'}`}>
        <Image
          src={lowHeight ? tbHeadingImg2 : tbHeadingImg}
          alt="tb heading"
          className="w-[319px] h-[43px] md:w-[456px] md:h-[63px] lg:w-[501px] lg:h-[96px] mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Video first on mobile, responsive but still portrait */}

        {/* Text card */}
        <div className="relative">
          <div className="rounded-lg">
            {/* <h2 className="text-2xl font-bold text-[#D4A574] mb-2 uppercase tracking-wider">{section.title}</h2> */}
            <p className="text-[32px] text-fill-bold-color mb-4 italic">{section.subtitle}</p>
            <p className="text-fill-color mb-5 leading-[120%] tracking-wide">{section.description}</p>
            <div className="space-y-3">
              {section.points.map((point, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                    <CoinIcon />
                  </div>
                  <p className="text-fill-color leading-[120%] tracking-wide">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>



        <div className="relative">
          <Image src={videoTop} alt="videoTop" className={`w-[177px] h-[40px] absolute ${lowHeight ? '-top-[0px]' : '-top-[20px]'}  right-[10px] z-99`} />
          <div className="relative overflow-hidden gradient-border-box">
            {/* Full width with portrait ratio on mobile */}
            <div className="w-full aspect-[3/4] flex items-center justify-center">
              <VideoSequence
                sources={section.videoSrcs}
                className="w-full h-full object-contain rounded"
              />
            </div>
          </div>
          <Image src={videoBottom} alt="videoBottom" className={`w-[177px] h-[40px] absolute ${lowHeight ? ' -bottom-[0px]' : '-bottom-[10px]'} -left-[0px]`} />
        </div>

      </div>


    </>
  )
}

/** ===================== Export wrapper ===================== **/
export function RegressionLabSection() {
  return (
    <section id="goko-labs">
      <RegressionLabDesktop />
      <RegressionLabMobile />
    </section>
  )
}
