// "use client"

// import { useEffect, useRef, useState } from "react"

// type CountryOption = {
//   code: string // ISO (used as value)
//   label: string // Country or region label
//   lang: string // Language label to show
//   flag: string // Emoji flag
// }

// const OPTIONS: CountryOption[] = [
//   { code: "US", label: "United States", lang: "ENG", flag: "🇺🇸" },
//   { code: "GB", label: "United Kingdom", lang: "ENG", flag: "🇬🇧" },
//   { code: "AE", label: "United Arab Emirates", lang: "عرب", flag: "🇦🇪" },
//   { code: "TR", label: "Türkiye", lang: "TUR", flag: "🇹🇷" },
//   { code: "DE", label: "Deutschland", lang: "DEU", flag: "🇩🇪" },
//   { code: "FR", label: "France", lang: "FRA", flag: "🇫🇷" },
//   { code: "JP", label: "日本", lang: "日本語", flag: "🇯🇵" },
// ]

// export function CountryDropdown({
//   initial = "US",
//   onChange,
//   className = "",
// }: {
//   initial?: string
//   onChange?: (opt: CountryOption) => void
//   className?: string
// }) {
//   const [open, setOpen] = useState(false)
//   const [selected, setSelected] = useState<CountryOption>(
//     OPTIONS.find(o => o.code === initial) || OPTIONS[0]
//   )
//   const [activeIndex, setActiveIndex] = useState<number>(-1)
//   const containerRef = useRef<HTMLDivElement>(null)

//   // Close on outside click
//   useEffect(() => {
//     const onDocClick = (e: MouseEvent) => {
//       if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
//     }
//     document.addEventListener("mousedown", onDocClick)
//     return () => document.removeEventListener("mousedown", onDocClick)
//   }, [])

//   // Keyboard support
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement | HTMLDivElement>) => {
//     if (!open) {
//       if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
//         e.preventDefault()
//         setOpen(true)
//         setActiveIndex(0)
//       }
//       return
//     }
//     // when open
//     if (e.key === "Escape") {
//       e.preventDefault()
//       setOpen(false)
//       return
//     }
//     if (e.key === "ArrowDown") {
//       e.preventDefault()
//       setActiveIndex(i => (i + 1) % OPTIONS.length)
//       return
//     }
//     if (e.key === "ArrowUp") {
//       e.preventDefault()
//       setActiveIndex(i => (i - 1 + OPTIONS.length) % OPTIONS.length)
//       return
//     }
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault()
//       const idx = activeIndex >= 0 ? activeIndex : 0
//       const opt = OPTIONS[idx]
//       setSelected(opt)
//       setOpen(false)
//       onChange?.(opt)
//       return
//     }
//   }

//   const selectOption = (opt: CountryOption) => {
//     setSelected(opt)
//     setOpen(false)
//     onChange?.(opt)
//   }

//   return (
//     <div ref={containerRef} className={`relative ${className}`}>
//       {/* Button */}
//       <button
//         type="button"
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         onClick={() => setOpen(o => !o)}
//         onKeyDown={handleKeyDown}
//         className="flex items-center gap-2  hover:text-[#F4C542] transition-colors
//                    border-2 border-[#4a4a3a] rounded-full px-3 py-1.5 card-bg"
//       >
//         <span className="text-xl leading-none">{selected.flag}</span>
//         <span className="text-fill-color text-sm uppercase">{selected.lang}</span>
//         <svg className="h-4 w-4 opacity-80" viewBox="0 0 20 20" fill="currentColor">
//           <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.253l3.71-4.022a.75.75 0 011.08 1.04l-4.24 4.6a.75.75 0 01-1.08 0l-4.24-4.6a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//         </svg>
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div
//           role="listbox"
//           tabIndex={-1}
//           onKeyDown={handleKeyDown}
//           className="absolute right-0 mt-2 w-36 card-bg-normal border-2 border-[#4a4a3a] rounded-xl shadow-xl
//                       z-50 overflow-hidden"
//         >
//           <ul className="max-h-72 overflow-auto card-bg">
//             {OPTIONS.map((opt, i) => {
//               const active = i === activeIndex
//               const selectedMatch = opt.code === selected.code
//               return (
//                 <li
//                   key={opt.code}
//                   role="option"
//                   aria-selected={selectedMatch}
//                   onMouseEnter={() => setActiveIndex(i)}
//                   onClick={() => selectOption(opt)}
//                   className={`flex items-center gap-3 px-3 cursor-pointer
//                               ${active ? "bg-[#2b2b20]" : ""}
//                               ${selectedMatch ? "text-[#F4C542]" : "text-[#D4A574] hover:text-[#F4C542]"}`}
//                 >
//                   <span className="text-xl leading-none">{opt.flag}</span>
//                   <div className="flex flex-col leading-tight">
//                     <span className="text-sm">{opt.label}</span>
//                     <span className="text-[11px] uppercase opacity-70">{opt.lang}</span>
//                   </div>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }


"use client"

import Image from "next/image"

type CountryOption = {
  code: string
  label: string
  lang: string
  flag: string
}

const OPTIONS: CountryOption[] = [
  { code: "US", label: "United States", lang: "ENG", flag: "🇺🇸" },
  { code: "GB", label: "United Kingdom", lang: "ENG", flag: "🇬🇧" },
  { code: "AE", label: "United Arab Emirates", lang: "عرب", flag: "🇦🇪" },
  { code: "TR", label: "Türkiye", lang: "TUR", flag: "🇹🇷" },
  { code: "DE", label: "Deutschland", lang: "DEU", flag: "🇩🇪" },
  { code: "FR", label: "France", lang: "FRA", flag: "🇫🇷" },
  { code: "JP", label: "日本", lang: "日本語", flag: "🇯🇵" },
]


export function CountryDropdown({
  initial = "US",
  className = "",
  textClasses="textsm"
}: {
  initial?: string
  className?: string
  textClasses?: string
}) {
  const selected =
    OPTIONS.find(o => o.code === initial) ?? OPTIONS[0]

  // Non-interactive container: prevent pointer opening anything,
  // but keep the visual “pill” styling you had.
  return (
    <div
      className={`flex items-center gap-2 rounded-full px-3 py-1.5
                  text-[#D4A574] hover:text-[#F4C542] transition-colors select-none ${className}`}
      // block any clicks from doing anything (optional)
      onClick={e => e.preventDefault()}
      role="img" // purely decorative grouping (no interactive semantics)
      aria-label={`${selected.label} (${selected.lang})`}
    >
      {/* <span className="text-xl leading-none">{selected.flag}</span> */}
      <div className="rounded-full border-1 border-[#81755A]">

        <Image
          src={`/common/uk-flag.svg`}
          alt={selected.label}
          width={16}
          height={16}
          className="rounded-full object-cover min-w-[16px] min-h-[16px]"
        />
      </div>
      <span className={`text-fill-color uppercase ${textClasses}`}>{selected.lang}</span>
      {/* <ArrowDownIcon className="h-4 w-4 opacity-80" /> */}
      <Image src="/common/arrow-down.svg" alt='arrow-down' width={12} height={12} className="min-w-[12px] min-h-[12px]" />
    </div>
  )
}

