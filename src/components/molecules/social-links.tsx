import type React from "react"
import { IconButton } from "../atoms/icon-button"
import Image from "next/image"


import shareImg from "../../../public/common/share.png"
import twitterImg from "../../../public/common/twitter.png"



interface SocialLinksProps {
  classNames?: string
  imgClasses?: string
}



export const SocialLinks: React.FC<SocialLinksProps> = ({ classNames = 'flex flex-col', imgClasses='max-w-[54px] max-h-[54px]' }) => {
  return (
    <div className={classNames}>
      <IconButton ariaLabel="Twitter/X" className="hover:bg-transparent cursor-pointer">
        <div className="">
          <Image src={twitterImg} alt="twitterImg" className={imgClasses} />
        </div>
      </IconButton>
      <IconButton ariaLabel="Telegram" className="hover:bg-transparent cursor-pointer">
        <div className="">
          <Image src={shareImg} alt="shareImg" className={imgClasses} />
        </div>
      </IconButton>
    </div>
  )
}
