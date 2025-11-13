// "use client"

// import Image from "next/image"


// import roadMapHeadingImg from "../../../public/roadmap/road-map-heading.webp"
// import roadMapImg1 from "../../../public/roadmap/road-map-1.webp"
// import roadMapImg2 from "../../../public/roadmap/road-map-2.webp"
// import roadMapImg3 from "../../../public/roadmap/road-map-3.webp"
// import roadMapImg4 from "../../../public/roadmap/road-map-4.webp"
// import roadMapImg5 from "../../../public/roadmap/road-map-5.webp"
// import { CoinIcon } from "../atoms/coin-icon"

// const roadmapPhases = [
//   {
//     name: "HOMO SAPIENS",
//     character: roadMapImg1,
//     milestones: [
//       "Official launch of the $GOKO brand.",
//       "Presale and TGE.",
//       "First lore drops explaining reverse Darwinism.",
//       "Early marketing push.",
//       "Release of the GOKO Regression Lab (Beta).",
//     ],
//   },
//   {
//     name: "HOMO DISTRACTUS",
//     character: roadMapImg2,
//     milestones: [
//       'Global meme campaign: "We are going GOKO."',
//       "Community events and regression challenges.",
//       "Partnerships: influencers and creators.",
//       "GOKO Degen Oracle (Beta) with daily satirical market prophecies.",
//       "DEX & CEX listings.",
//     ],
//   },
//   {
//     name: "HOMO DEGENERATUS",
//     character: roadMapImg3,
//     milestones: [
//       "Full release of the Regression Lab.",
//       "Token-gated access to premium AI tools.",
//       "Expansion of treasury-backed partnerships.",
//       "Marketing expansion.",
//     ],
//   },
//   {
//     name: "BANANA MAXIMUS",
//     character: roadMapImg4,
//     milestones: [
//       "$GOKO-themed NFT avatars.",
//       "Integration with Web3 identity platforms.",
//       "Development of new AI tools.",
//       "Community governance.",
//     ],
//   },
//   {
//     name: "APE SUPREME",
//     character: roadMapImg5,
//     milestones: [
//       "Ongoing release of AI utilities.",
//       "Global campaigns with creators and entertainment platforms.",
//       "Expansion into branded experiences.",
//       "Establishment of the GOKO ecosystem fund.",
//     ],
//   },
// ]

// export function RoadmapSection() {
//   return (
//     <section id="roadmap" className="
//     relative z-10 overflow-hidden
//     py-16 md:py-24">

//       <Image
//         src="/roadmap/road-map-bg.webp"
//         alt=""
//         fill
//         priority
//         sizes="100vw"
//         className="
//       -z-10 object-cover
//       md:object-bottom
//       [transform:scale(1.05)] md:[transform:scale(1.03)]
//       will-change-transform
//       pointer-events-none select-none
//     "/>


//       <div className="container mx-auto px-4">


//         <Image src={roadMapHeadingImg} alt='road-map heading' className="w-[106px] h-[63px] md:w-[126px] md:h-[83px] lg:w-[304px] lg:h-[96px] mx-auto mb-[2rem]" />


//         <div className="relative max-w-7xl mx-auto">
//           {/* Timeline line */}
//           {/* <div className="absolute top-[120px] left-0 right-0 h-1 bg-gradient-to-r from-[#5a5a4a] via-[#D4A574] to-[#5a5a4a] hidden lg:block" /> */}

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
//             {roadmapPhases.map((phase, index) => (
//               <div key={index} className="flex flex-col">
//                 {/* Image slot: same height for all */}
//                 <div className="relative w-full h-52 md:h-64 lg:h-72 flex items-center justify-center overflow-hidden">
//                   {/* Next/Image: keep small images small, scale big ones down */}
//                   <Image
//                     src={phase.character}
//                     alt="road-image"
//                     fill
//                     sizes="(min-width:1024px) 20vw, (min-width:768px) 50vw, 100vw"
//                     className="object-scale-down object-bottom"   // <-- never scales up
//                     priority={index < 5}
//                   />
//                 </div>

//                 {/* Content starts from the same place for all */}
//                 <div className="mt-8 w-full text-left">
//                   <h3 className="text-2xl md:text-[32px] lg:text-2xl xl:text-[28px] 2xl:text-[32px] font-bold text-fill-bold-color mb-6">
//                     {phase.name}
//                   </h3>

//                   <ul className="space-y-3 w-full">
//                     {phase.milestones.map((milestone, mIndex) => (
//                       <li key={mIndex} className="flex gap-2 items-start">
//                         <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D4A574] flex items-center justify-center mt-0.5">
//                           <CoinIcon width={24} height={24} />
//                         </span>
//                         <span className="text-fill-color text-base lg:text-base xl:text-lg leading-[120%]">
//                           {milestone}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>


//         </div>
//       </div>
//     </section>
//   )
// }



"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import roadMapImg1 from "../../../public/roadmap/homo-sapiens.webp";
import roadMapImg2 from "../../../public/roadmap/homo-distractus.webp";
import roadMapImg3 from "../../../public/roadmap/homo-degeneratus.webp";
import roadMapImg4 from "../../../public/roadmap/banana-maximus.webp";
import roadMapImg5 from "../../../public/roadmap/ape-supreme.webp";
import { CoinIcon } from "../atoms/coin-icon";

const roadmapPhases = [
  {
    name: "HOMO SAPIENS",
    character: roadMapImg1,
    milestones: [
      "Official launch of the GOKO brand.",
      "Presale and TGE.",
      "First lore drops explaining Reverse Darwinism.",
      "Early marketing push.",
      "Release of the GOKO Regression Lab (beta).",
    ],
  },
  {
    name: "HOMO DISTRACTUS",
    character: roadMapImg2,
    milestones: [
      'Global meme campaign: "We Are All Going GOKO."',
      "Community events and regression contests.",
      "Partnerships influencers and creators",
      "GOKO Degen Oracle (beta) with daily satirical market prophecies.",
      "DEX & CEX Listings",
    ],
  },
  {
    name: "HOMO DEGENERATUS",
    character: roadMapImg3,
    milestones: [
      "Full release of the Regression Lab.",
      "Token-gated access to premium AI utilities.",
      "Expansion of treasury-backed partnerships.",
      "Marketing expansion.",
    ],
  },
  {
    name: "BANANA MAXIMUS",
    character: roadMapImg4,
    milestones: [
      "GOKO-themed NFT avatars.",
      "Integration with Web3 identity platforms",
      "Development of new AI tools.",
      "Community governance.",
    ],
  },
  {
    name: "APE SUPREME",
    character: roadMapImg5,
    milestones: [
      "Ongoing release of AI utilities.",
      "Global campaigns with creators and entertainment platforms.",
      "Expansion into branded experiences.",
      "Establishment of the GOKO ecosystem fund.",
    ],
  },
];


import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";
import GrungeHeading from "../atoms/heading";



function Title() {
  return (
    <div className="flex justify-center">
      <GrungeHeading
        width="781px"
        height="504px"
        text="ROADMAP"
        scratchSrc={scractchHeadingImg}
        className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[95px]"
        scratchOpacity={0.95}
      />
    </div>
  );
}


export function RoadmapSection() {
  
  return (
    <section
      id="roadmap"
      className="relative z-10 overflow-hidden py-16 md:py-24"
    >
      {/* Background */}
      <Image
        src="/roadmap/road-map-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover md:object-bottom [transform:scale(1.05)] md:[transform:scale(1.03)] pointer-events-none select-none"
      />

      <div className="container mx-auto px-4">
        {/* Heading */}
        {/* <Image
          src={roadMapHeadingImg}
          alt="road-map heading"
          className="w-[127px] h-[43px] md:w-[166px] md:h-[63px] lg:w-[304px] lg:h-[96px] mx-auto mb-10"
        /> */}
        <Title />

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 custom-font-display">
          {roadmapPhases.map((phase, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
                <Image
                  src={phase.character}
                  alt="roadmap"
                  fill
                  sizes="(min-width:1024px) 20vw, (min-width:768px) 50vw, 100vw"
                  className="!object-contain object-bottom"
                  priority={index < 3}
                />
              </div>

              <div className="mt-8 text-left">
                <h3 className="text-2xl font-bold text-fill-bold-color mb-6">
                  {phase.name}
                </h3>
                <ul className="space-y-3">
                  {phase.milestones.map((m, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                        <CoinIcon width={24} height={24} />
                      </span>
                      <span className="text-fill-color text-base leading-[120%]">
                        {m}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="block lg:hidden mt-8 custom-font-display">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000, // 4s per slide
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
          >
            {roadmapPhases.map((phase, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center pb-10">
                  <div className="relative w-full h-[292px]">
                    <Image
                      src={phase.character}
                      alt={phase.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-[40px] text-fill-bold-color py-10">
                    {phase.name}
                  </h3>

                  <ul className="space-y-3 text-left max-w-md mx-auto">
                    {phase.milestones.map((m, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-1">
                          <CoinIcon width={20} height={20} />
                        </span>
                        <span className="text-fill-color text-[18px] leading-[120%]">
                          {m}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
