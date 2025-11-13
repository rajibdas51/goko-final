"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import h2bLeaf from "../../../public/how-to-buy/leaf.webp";
import h2bCardIcon from "../../../public/how-to-buy/card-icon.webp";
import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";




import GrungeHeading from "../atoms/heading";



function Title() {
  return (
    <div className="flex justify-center">
      <GrungeHeading
        width="781px"
        height="504px"
        text="HOW TO BUY"
        scratchSrc={scractchHeadingImg}
        className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[95px]"
        scratchOpacity={0.95}
      />
    </div>
  );
}



const steps = [
  {
    number: 1,
    title: "Connect wallet",
    description:
      "Install a Defi wallet such as Trust Wallet for ETH or USDT ERC-20 purchase. Connect it to our secure presale widget to buy and track your $GOKO token holdings.",
  },
  {
    number: 2,
    title: "Have ETH or USDT ERC-20",
    description:
      "To purchase $GOKO tokens you need to have Ethereum (ETH) or Tether ERC-20 (USDT) in your wallet. Deposit crypto to your wallet or purchase crypto directly in your wallet.",
  },
  {
    number: 3,
    title: "Swap",
    description:
      "Now you can swap your ETH or USDT for $GOKO tokens. Select how much you would like to spend and you will see how many tokens you will receive. Make sure you leave a little ETH for gas fees (network transaction fee).",
  },
  {
    number: 4,
    title: "Track and Claim",
    description:
      "After you successfully purchase $GOKO tokens, you will be able to track how many tokens your wallet has when connected to the presale widget. Staking will be available shortly after presale launch. You will be able to stake your tokens for additional rewards or simply hold them until the presale is concluded and token claiming will be open.",
  },
];

export function HowToBuySection() {
  return (
    <section
      id="how-to-buy"
      className="py-16 md:py-24 relative z-10 overflow-hidden goko-bullets custom-font-display"
    >
      {/* BG */}
      <Image
        src="/how-to-buy/how-to-buy-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover md:object-bottom [transform:scale(1.05)] md:[transform:scale(1.03)] pointer-events-none select-none"
      />

      <div className="container mx-auto px-4">
        {/* <Image
          src={h2bHeadingImg}
          alt="h2b heading"
          className="w-[172px] h-[43px] md:w-[226px] md:h-[63px] lg:w-[304px] lg:h-[96px] mx-auto"
        /> */}

        <div className="mb-[2rem]">
          <Title />
        </div>



        {/* DESKTOP (unchanged) */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative gradient-border-box h-max px-4 lg:px-0"
              style={{ marginTop: index % 2 === 0 ? "0" : "60px" }}
            >
              <div className="relative md:p-8 min-h-[400px] flex flex-col">
                <div className="text-6xl md:text-7xl font-bold text-fill-bold-color text-center mb-4">
                  {step.number}
                </div>
                <div className="flex gap-2 mb-6 justify-center">
                  <Image src={h2bCardIcon} alt="card-icon" />
                </div>
                <h3 className="text-2xl md:text-[40px] font-bold text-fill-bold-color mb-4 text-center uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-fill-color leading-relaxed text-base md:text-[20px] flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          <div className="absolute -bottom-8 -left-8 pointer-events-none hidden lg:block">
            <Image src={h2bLeaf} alt="leaf" className="w-[158px] h-[200px]" />
          </div>
        </div>

        {/* MOBILE SLIDER */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
          >
            {steps.map((step) => (
              <SwiperSlide key={step.number}>
                <div className="gradient-border-box px-4 py-8">
                  <div className="text-6xl font-bold text-fill-bold-color text-center mb-4">
                    {step.number}
                  </div>
                  <div className="flex gap-2 mb-6 justify-center">
                    <Image src={h2bCardIcon} alt="card-icon" />
                  </div>
                  <h3 className="text-[28px] font-bold text-fill-bold-color mb-4 text-center uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-fill-color leading-relaxed text-[18px]">
                    {step.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
