export function CloseButton() {
  return (
    <button
      className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center border-2 border-amber-500 hover:from-amber-300 hover:to-amber-500 transition-all shadow-lg"
      aria-label="Close"
    >
      <svg className="w-6 h-6 text-amber-950" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}
