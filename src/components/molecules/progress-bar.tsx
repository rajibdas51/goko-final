import type React from "react"

interface ProgressBarProps {
  current: number
  target: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, target }) => {
  const percentage = (current / target) * 100

  return (
    <div className="space-y-2 text-fill-color">
      {/*  */}
      <div className="text-center text-fill-bold-color text-[18px] leading-[120%] md:text-[24px]">
        ${current.toLocaleString()} / ${target.toLocaleString()}
      </div>
      <div className="w-full h-3 card-bg rounded-full border border-[#5a5a4a] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#D4A574] to-[#F4C542] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
