export function LanguageSelector() {
  return (
    <button className="flex items-center gap-2 text-amber-100/80 hover:text-amber-400 transition-colors">
      <span className="text-lg">🇺🇸</span>
      <span className="text-sm font-medium">ENG</span>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}
