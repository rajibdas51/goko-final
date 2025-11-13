"use client";

import Image from "next/image";


import cryptoImg from "../../../public/featured-in/crypto.png";
import benzingaImg from "../../../public/featured-in/benzinga.png";
import bitcoinistImg from "../../../public/featured-in/bitcoinist.png";
import investingImg from "../../../public/featured-in/investing.png";
import cryptoPotatoImg from "../../../public/featured-in/crypto-potato.png";
import cryptoPolitanImg from "../../../public/featured-in/cryptopolitan.png";
import economicTimesImg from "../../../public/featured-in/economic-times.png";
import finboldImg from "../../../public/featured-in/finbold.png";

const logos = [
  { name: "Crypto.com", width: 340, height: 98, src: cryptoImg },
  { name: "Cryptopolitan", width: 340, height: 98, src: benzingaImg },
  { name: "BENZINGA", width: 340, height: 98, src: bitcoinistImg },
  { name: "Investing.com", width: 340, height: 98, src: investingImg },
  { name: "cryptoPotatoImg.com", width: 340, height: 98, src: cryptoPotatoImg },
  { name: "cryptoPolitanImg.com", width: 340, height: 98, src: cryptoPolitanImg },
  { name: "economicTimesImg.com", width: 340, height: 98, src: economicTimesImg },
  { name: "Finbold", width: 340, height: 98, src: finboldImg },
];




import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";
import GrungeHeading from "../atoms/heading";



function Title() {
  return (
    <div className=" flex justify-center">
      <GrungeHeading
        width="781px"
        height="504px"
        text="FEATURED IN"
        scratchSrc={scractchHeadingImg}
        className="text-[40px] md:text-[60px]"
        scratchOpacity={0.95}
      />
    </div>
  );
}



export function FeaturedInSection() {
  return (
    <section className="pt-16 md:py-24 relative z-10 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title Image */}
        {/* <Image
          src={featuredIn}
          alt="featured-in"
          className="max-w-[161px] max-h-[63px] lg:max-w-[243px] lg:max-h-[65px] mx-auto8"
        /> */}
        <div className="mb-8">
          <Title />
        </div>


        {/* Infinite scroll track */}
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center -ml-[4rem]"
                style={{
                  width: `${logo.width}px`,
                  height: `${logo.height}px`
                }}
              // style={{
              //   width: `${logo.width - 40}px`, // reduce width to bring images closer
              //   height: `${logo.height}px`,
              // }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>



      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite; /* Faster scroll */
        }

        .animate-marquee:hover {
          animation-play-state: paused; /* optional pause on hover */
        }
      `}</style>
    </section>
  );
}
