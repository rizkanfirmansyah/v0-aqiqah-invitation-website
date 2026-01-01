import { invitationConfig } from "@/data/invitation-config"
export function ClosingSection() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32">
        <div className="absolute top-4 left-8 text-3xl animate-twinkle">⭐</div>
        <div className="absolute top-8 right-12 text-3xl animate-twinkle" style={{ animationDelay: "0.5s" }}>
          ✨
        </div>
        <div className="absolute top-10 left-1/4 text-4xl animate-float">☁️</div>
        <div className="absolute top-6 right-1/4 text-3xl animate-float" style={{ animationDelay: "1s" }}>
          ☁️
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 max-w-2xl">
        <div className="text-6xl mb-6 animate-float">🤲</div>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center text-balance mb-8">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk
          memberikan doa restu kepada putra kami.
        </p>

        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8" />

        <p className="text-base text-gray-600 text-center text-balance mb-8">
          Atas kehadiran dan doa restunya, kami ucapkan terima kasih.
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8">
          <p className="text-lg font-semibold text-gray-700 mb-2 text-center">Keluarga Besar & Saudara/Saudari</p>
          <p className="text-2xl font-bold text-blue-600 text-center text-balance">{invitationConfig.parent}</p>
        </div>

        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6" />

        <p className="text-xl md:text-2xl font-semibold text-blue-600 text-center text-balance">
          Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </p>

        <div className="flex justify-center gap-3 mt-6">
          <span className="text-3xl animate-twinkle">⭐</span>
          <span className="text-3xl animate-twinkle" style={{ animationDelay: "0.5s" }}>
            ✨
          </span>
          <span className="text-3xl animate-twinkle" style={{ animationDelay: "1s" }}>
            ⭐
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-100 to-transparent" />
        <div className="absolute bottom-8 left-10 text-4xl animate-float">🕌</div>
        <div className="absolute bottom-12 left-1/4 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>
          🌙
        </div>
        <div className="absolute bottom-6 right-1/4 text-4xl animate-float" style={{ animationDelay: "1s" }}>
          ⭐
        </div>
        <div className="absolute bottom-10 right-12 text-3xl animate-float" style={{ animationDelay: "1.5s" }}>
          ✨
        </div>
      </div>
    </div>
  )
}
