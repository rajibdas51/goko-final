"use client"

import Image from "next/image";


import footerApe from "../../../public/footer/footer-ape.webp"
import { Logo } from "../atoms/logo";
import { SocialLinks } from "../molecules/social-links";

export function Footer() {
  return (
    <footer className="relative z-10 lg:min-h-[740px] py-12 md:py-16">

      <Image
        src="/footer/footer-bg.webp"
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


      <div className="container mx-auto px-4 custom-font-display">


        <div className="grid md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto py-10 lg:py-15">
          {/* Left - Ape character */}

          <div></div>
          {/* Center - Logo and social */}
          <div className="flex flex-col items-center gap-6">

            <Logo className="w-[106px] h-[63px] md:w-[126px] md:h-[83px] lg:w-[142px] lg:h-[84px] text-[60px] xl:text-[83px]" width={142} height={84} />



            <div className="">
              <SocialLinks
                imgClasses="w-[58px] h-[58px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px]"
                classNames="flex gap-4" />
            </div>



          </div>

          {/* Right - Links */}
          <div className="flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] items-center md:items-end mt-[2rem] md:mt-10 lg:mt-25">
            <a
              href="/privacy-policy"
              className="text-fill-color leading-[100%] transition-colors text-[20px] md:text-[32px]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-fill-color leading-[100%] transition-colors text-[20px] md:text-[32px]"
            >
              Terms of Service
            </a>
            <a
              href="/cookies-policy"
              className="text-fill-color leading-[100%] transition-colors text-[20px] md:text-[32px]"
            >
              Cookies Policy
            </a>
          </div>
        </div>

        <div className="flex md:justify-start">
          <Image src={footerApe} alt="footer-ape" className="lg:absolute bottom-20  max-w-[159px] max-h-[223px]  md:max-w-[229px] md:max-h-[323px] lg:max-w-[347px] lg:max-h-[487px] z-[-1]" />
        </div>

        {/* Disclaimer */}
        <div className="pt-8">
          <div className="max-w-[690px] mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-fill-bold-color mb-4 uppercase">Disclaimer</h3>
            <p className="text-fill-color text-sm md:text-base leading-[120%]">
              GOKO is a meme token created for entertainment and community purposes. Nothing on this website constitutes financial, investment, or trading advice. The GOKO token carries no guarantees of value, returns, or future success. Participation in the presale and use of GOKO’s AI tools are entirely at your own risk. Always do your own research and never invest more than you can afford to lose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
