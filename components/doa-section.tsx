import { invitationConfig } from "@/data/invitation-config"

export function DoaSection() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-green-50 via-teal-50 to-cyan-50 flex flex-col items-center justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32">
        <div className="absolute top-4 left-10 text-3xl animate-twinkle">⭐</div>
        <div className="absolute top-8 right-14 text-3xl animate-twinkle" style={{ animationDelay: "0.5s" }}>
          ✨
        </div>
        <div className="absolute top-10 left-1/3 text-4xl animate-float">☁️</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 max-w-2xl">
        <div className="text-6xl mb-6 animate-float">🤲</div>

        <h3 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6 text-center text-balance">Doa Aqiqah</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mb-8" />

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl space-y-6 w-full">
          <p className="text-2xl md:text-3xl text-right font-bold text-gray-800 leading-relaxed text-balance">
            بِسْمِ اللَّهِ وَبِاللَّهِ، اللَّهُمَّ لَكَ وَإِلَيْكَ، هَذِهِ عَقِيقَةُ رَيَّان أَرْكَانْتَا نَايَنْدْرَا أُمَيْر
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />

          <p className="text-lg md:text-xl italic text-gray-600 text-center text-balance">
            {invitationConfig.doaLatin}
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />

          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center text-balance">
            {invitationConfig.doaTranslation}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyan-100 to-transparent" />
        <div className="absolute bottom-6 left-10 text-4xl animate-float">🕌</div>
        <div className="absolute bottom-10 right-16 text-4xl animate-float" style={{ animationDelay: "1s" }}>
          📿
        </div>
        <div className="absolute bottom-8 left-1/2 text-3xl animate-float" style={{ animationDelay: "1.5s" }}>
          🌙
        </div>
      </div>
    </div>
  )
}
