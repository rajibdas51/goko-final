import type React from "react"

interface LogoProps {
  className?: string;
  width?: number;
  height?: number
}


import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";

import GrungeHeading from "../atoms/heading";


export const Logo: React.FC<LogoProps> = ({ className = ""}) => {
  return (
    <div className={` ${className}`}>
      {/* <Image src={logo} alt='logo' width={width} height={height} /> */}
      <GrungeHeading
        width="781px"
        height="504px"
        text="GOKO"
        scratchSrc={scractchHeadingImg}
        className={className}
        scratchOpacity={0.95}
      />
    </div>
  )
}
