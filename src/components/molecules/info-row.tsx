"use client"

import type React from "react"
import { IconButton } from "../atoms/icon-button"

interface InfoRowProps {
  label: string
  value: string
  onInfoClick?: () => void
}

export const InfoRow: React.FC<InfoRowProps> = ({ label, value, onInfoClick }) => {
  return (
    <div className="flex items-center justify-center gap-4 text-[20px] leading-[120%]">
      <span className="text-fill-color">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-fill-color">{value}</span>
        {onInfoClick && (
          <IconButton onClick={onInfoClick} ariaLabel="More information">
            <div className="w-5 h-5 rounded-full border-2 border-[#D4A574] flex items-center justify-center text-[#D4A574] text-xs font-bold">
              ?
            </div>
          </IconButton>
        )}
      </div>
    </div>
  )
}
