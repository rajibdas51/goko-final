"use client"

import type React from "react"
import type { CurrencyType } from "@/types"


import cryptoXsImg from "../../../public/common/crypto-xs.svg"
import usdtXsImg from "../../../public/common/usdt-xs.svg"
import Image from "next/image"



interface CurrencyToggleProps {
  selected: CurrencyType
  onSelect: (currency: CurrencyType) => void
}

export const CurrencyToggle: React.FC<CurrencyToggleProps> = ({ selected, onSelect }) => {
  return (
    <div className="flex justify-center gap-8">
      <button
        onClick={() => onSelect("ETH")}
        className={`flex-1 py-4 max-w-[120px] px-4 rounded-lg text-sm flex items-center gap-[8px] text-fill-color-gradient transition-all ${selected === "ETH"
          ? "text-fill-color-gradient-active"
          : "text-fill-color-gradient"
          }`}
      >
        <span>
          <Image src={cryptoXsImg} alt="crypto-xs" width={16} height={16} />
        </span>
        <span>
          ETH
        </span>
      </button>
      <button
        onClick={() => onSelect("USDT")}
        className={`flex-1 py-4 px-4 max-w-[120px] rounded-lg text-sm flex items-center gap-[8px] text-fill-color-gradient transition-all ${selected === "USDT"
          ? "text-fill-color-gradient-active"
          : "text-fill-color-gradient"
          }`}
      >
        <span>
          <Image src={usdtXsImg} alt="usdt-xs" width={16} height={16} />
        </span>
        <span>
          USDT
        </span>
      </button>
    </div>
  )
}
