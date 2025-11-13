"use client"

import type React from "react"
import { useEffect } from "react"
import { IconButton } from "../atoms/icon-button"
import { CornerDecoration } from "../atoms/corner-decoration"

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

      {/* Close button */}
      <IconButton onClick={onClose} className="absolute top-4 right-4 md:top-8 md:right-8 z-10" ariaLabel="Close modal">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#4a4a3a] border-2 border-[#D4A574] flex items-center justify-center hover:bg-[#5a5a4a] transition-colors">
          <span className="text-[#D4A574] text-2xl font-bold">×</span>
        </div>
      </IconButton>

      {/* Modal content */}
      <div className="relative bg-[#524A39] backdrop-blur-md rounded-2xl border-2 border-[#4a4a3a] p-8 md:p-12 max-w-2xl w-full mx-4 animate-in fade-in zoom-in duration-300">
        <CornerDecoration position="top-left" />
        <CornerDecoration position="top-right" />
        <CornerDecoration position="bottom-left" />
        <CornerDecoration position="bottom-right" />

        <p className="text-fill-color text-lg md:text-xl lg:text-2xl text-center leading-relaxed uppercase font-medium text-balance">
          YOUR TOTAL PURCHASED TOKENS ARE ALL TOKENS PURCHASED USING THE CONNECTED WALLET. THIS INCLUDES ALL STAKED AND
          UNSTAKED TOKENS
        </p>
      </div>
    </div>
  )
}
