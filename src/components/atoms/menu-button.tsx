export function MenuButton() {
  return (
    <button
      className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center border-2 border-amber-700 hover:from-amber-500 hover:to-amber-700 transition-all"
      aria-label="Menu"
    >
      <div className="w-4 h-3 flex flex-col justify-between">
        <span className="w-full h-0.5 bg-amber-950 rounded"></span>
        <span className="w-full h-0.5 bg-amber-950 rounded"></span>
        <span className="w-full h-0.5 bg-amber-950 rounded"></span>
      </div>
    </button>
  )
}
