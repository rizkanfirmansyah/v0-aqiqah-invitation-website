export function ChildInfoSection() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-100 via-purple-50 to-pink-50 flex flex-col items-center justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32">
        <div className="absolute top-4 left-8 text-3xl animate-twinkle">✨</div>
        <div className="absolute top-6 right-12 text-3xl animate-twinkle" style={{ animationDelay: "0.5s" }}>
          ⭐
        </div>
        <div className="absolute top-8 left-1/4 text-4xl animate-float">☁️</div>
        <div className="absolute top-10 right-1/4 text-3xl animate-float" style={{ animationDelay: "1s" }}>
          🌈
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 max-w-2xl">
        <div className="relative mb-6">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 flex items-center justify-center shadow-2xl border-4 border-white">
            <span className="text-7xl">👶</span>
          </div>
          <div className="absolute -top-2 -right-2 text-3xl animate-twinkle">✨</div>
          <div className="absolute -bottom-2 -left-2 text-3xl animate-twinkle" style={{ animationDelay: "0.7s" }}>
            ⭐
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center text-balance">
          Muhammad Rayyan Al-Hakim
        </h3>

        <div className="w-full space-y-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <p className="text-sm text-gray-500 mb-2 text-center">Lahir pada</p>
            <p className="text-xl font-bold text-gray-800 text-center">Senin, 15 Januari 2026</p>
            <p className="text-base text-gray-600 text-center">Pukul 08:30 WIB</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <p className="text-sm text-gray-500 mb-2 text-center">Putra dari</p>
            <p className="text-lg font-bold text-gray-800 text-center text-balance">
              Bapak Ahmad Fauzi & Ibu Siti Nurhaliza
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-pink-100 to-transparent" />
        <div className="absolute bottom-6 left-12 text-4xl animate-float">🎈</div>
        <div className="absolute bottom-8 left-1/4 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>
          🎀
        </div>
        <div className="absolute bottom-10 right-1/4 text-4xl animate-float" style={{ animationDelay: "1s" }}>
          🧸
        </div>
        <div className="absolute bottom-6 right-12 text-3xl animate-float" style={{ animationDelay: "1.5s" }}>
          🎁
        </div>
      </div>
    </div>
  )
}
