"use client"

import { Button } from "@/components/ui/button"
import { invitationConfig } from "@/data/invitation-config"

interface CoverPageProps {
  onOpen: () => void
}

export function CoverPage({ onOpen }: CoverPageProps) {
  return (
    <div className="full-screen-section bg-gradient-to-b from-sky-100 via-blue-50 to-white flex flex-col items-center justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
        <div className="absolute top-4 left-10 text-3xl animate-twinkle">⭐</div>
        <div className="absolute top-8 right-16 text-2xl animate-twinkle" style={{ animationDelay: "0.5s" }}>
          ✨
        </div>
        <div className="absolute top-12 left-1/3 text-4xl animate-float">☁️</div>
        <div className="absolute top-6 right-1/4 text-3xl animate-float" style={{ animationDelay: "1s" }}>
          ☁️
        </div>
        <div className="absolute top-16 left-1/2 text-2xl animate-twinkle" style={{ animationDelay: "1.5s" }}>
          🌟
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10">
        <div className="relative mb-6">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-200 via-blue-100 to-white flex items-center justify-center shadow-2xl border-4 border-white">
            <img
              src="/1.jpg"
              alt="Baby illustration"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 text-4xl animate-twinkle">✨</div>
          <div className="absolute -bottom-2 -left-2 text-3xl animate-twinkle" style={{ animationDelay: "0.7s" }}>
            ⭐
          </div>
        </div>

        <h1 className="text-xl font-semibold text-blue-400 mb-2 text-center text-balance">Undangan Aqiqah</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 text-center text-balance">
          {invitationConfig.babyName}
        </h2>

        <p className="text-base text-gray-600 text-center max-w-sm mb-8 text-balance leading-relaxed">
          Dengan penuh rasa syukur, kami mengundang Anda untuk hadir dalam acara syukuran aqiqah putra kami
        </p>

        <Button
          onClick={onOpen}
          size="lg"
          className="px-12 py-6 text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-full shadow-2xl border-4 border-white transform transition-transform active:scale-95"
        >
          Buka Undangan
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100 to-transparent" />
        <div className="absolute bottom-8 left-8 text-4xl animate-float">🐑</div>
        <div className="absolute bottom-12 left-1/4 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>
          🎈
        </div>
        <div className="absolute bottom-6 right-1/4 text-4xl animate-float" style={{ animationDelay: "1s" }}>
          🧸
        </div>
        <div className="absolute bottom-10 right-12 text-3xl animate-float" style={{ animationDelay: "1.5s" }}>
          🌊
        </div>
        <div className="absolute bottom-4 left-1/2 text-2xl animate-float" style={{ animationDelay: "2s" }}>
          ☁️
        </div>
      </div>
    </div>
  )
}
