"use client"

import type React from "react"
import type { CountdownTime } from "@/types"

interface CountdownTimerProps {
  time: CountdownTime
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ time }) => {
  const timeUnits = [
    { label: "DAYS", value: time.days },
    { label: "HOURS", value: time.hours },
    { label: "MINUTES", value: time.minutes },
    { label: "SECONDS", value: time.seconds },
  ]

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 card-bg-normal !card-border">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="text-base uppercase text-fill-color">{unit.label}</div>
          <div className="text-2xl md:text-[43px] text-fill-color ">{unit.value.toString().padStart(2, "0")}</div>
        </div>
      ))}
    </div>
  )
}
