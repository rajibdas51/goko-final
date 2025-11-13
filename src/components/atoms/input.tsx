"use client"

import type React from "react"

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  className?: string
  icon?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "0.00",
  type = "text",
  className = "",
  icon,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-[#4a4a3a] border-2 border-[#5a5a4a] rounded-lg px-4 py-3 text-[#D4A574] placeholder-[#6a6a5a] focus:outline-none focus:border-[#D4A574] ${className}`}
      />
      {icon && <div className="absolute right-3 top-1/2 -translate-y-1/2">{icon}</div>}
    </div>
  )
}
