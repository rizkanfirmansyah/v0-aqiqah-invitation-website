export function DecorativeElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Clouds */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">☁️</div>
      <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        ☁️
      </div>
      <div className="absolute bottom-40 left-1/4 text-7xl opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        ☁️
      </div>

      {/* Stars */}
      <div className="absolute top-1/4 left-1/3 text-3xl animate-twinkle">⭐</div>
      <div className="absolute top-1/3 right-1/4 text-2xl animate-twinkle" style={{ animationDelay: "1s" }}>
        ✨
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-3xl animate-twinkle" style={{ animationDelay: "2s" }}>
        ⭐
      </div>
      <div className="absolute bottom-1/3 right-1/3 text-2xl animate-twinkle" style={{ animationDelay: "1.5s" }}>
        ✨
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" />
      <div
        className="absolute bottom-1/4 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  )
}
