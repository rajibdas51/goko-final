import Image from "next/image"
import type React from "react"

interface CoinIconProps {
  className?: string;
  width?: number
  height?: number
  imgClasses?:string
}

export const CoinIcon: React.FC<CoinIconProps> = ({ className = "", width = 78, height = 78, imgClasses='' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#D4A574] to-[#8B6F47] border-2 border-[#D4A574] flex items-center justify-center"> */}
      <Image src="/header/goku-chain.png" alt="ape-coin" width={width} height={height} className={imgClasses} />
      {/* </div> */}
    </div>
  )
}
