"use client"

import type React from "react"

interface IconButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

export const IconButton: React.FC<IconButtonProps> = ({ children, onClick, className = "", ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`p-2 rounded-full hover:bg-[#4a4a3a] transition-colors ${className}`}
    >
      {children}
    </button>
  )
}
