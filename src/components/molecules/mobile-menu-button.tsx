"use client"

interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg hover:from-amber-500 hover:to-amber-700 transition-all"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <svg className="w-6 h-6 text-amber-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className="w-full h-0.5 bg-amber-950 rounded"></span>
          <span className="w-full h-0.5 bg-amber-950 rounded"></span>
          <span className="w-full h-0.5 bg-amber-950 rounded"></span>
        </div>
      )}
    </button>
  )
}
