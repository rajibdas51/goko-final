import Image from "next/image"
import type React from "react"

interface CornerDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export const CornerDecoration: React.FC<CornerDecorationProps> = ({ position }) => {
  const positionStyles = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
  }

  return (
    <div className={`absolute ${positionStyles[position]}`}>
      <Image src={"/common/decorative.png"} alt="decorative" width={19} height={19} />
    </div>
  )
}
