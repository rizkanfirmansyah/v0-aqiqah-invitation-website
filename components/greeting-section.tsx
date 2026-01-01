export function GreetingSection() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50 via-sky-50 to-blue-100 flex flex-col items-center justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32">
        <div className="absolute top-4 left-8 text-3xl animate-twinkle">⭐</div>
        <div className="absolute top-6 right-12 text-2xl animate-twinkle" style={{ animationDelay: "0.5s" }}>
          ✨
        </div>
        <div className="absolute top-8 left-1/3 text-3xl animate-float">☁️</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 max-w-2xl">
        <div className="text-6xl mb-6 animate-float">🌙</div>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center text-balance">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h2>

        <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center text-balance">
          Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </p>

        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6" />

        <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center text-balance">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri
          acara syukuran aqiqah putra kami yang Insya Allah akan dilaksanakan pada:
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-100 to-transparent" />
        <div className="absolute bottom-6 left-12 text-3xl animate-float">🕌</div>
        <div className="absolute bottom-8 right-16 text-3xl animate-float" style={{ animationDelay: "1s" }}>
          📿
        </div>
      </div>
    </div>
  )
}
