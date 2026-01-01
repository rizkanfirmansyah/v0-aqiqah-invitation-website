"use client"

import { Button } from "@/components/ui/button"
import { invitationConfig } from "@/data/invitation-config"

export function EventDetailsSection() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 flex flex-col items-center justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32">
        <div className="absolute top-4 left-8 text-3xl animate-twinkle">⭐</div>
        <div className="absolute top-8 right-12 text-3xl animate-twinkle" style={{ animationDelay: "0.5s" }}>
          ✨
        </div>
        <div className="absolute top-10 left-1/4 text-4xl animate-float">☁️</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 max-w-2xl w-full">
        <div className="text-6xl mb-4 animate-float">📅</div>
        <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4 text-center text-balance">Detail Acara</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-8" />

        <div className="w-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🗓️</span>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Hari & Tanggal</p>
              <p className="text-xl font-bold text-gray-800">{invitationConfig.eventDate}</p>
            </div>
          </div>

          <div className="w-full h-px bg-orange-200" />

          <div className="flex items-start gap-4">
            <span className="text-4xl">⏰</span>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Waktu</p>
              <p className="text-xl font-bold text-gray-800">{invitationConfig.eventTime}</p>
            </div>
          </div>

          <div className="w-full h-px bg-orange-200" />

          <div className="flex items-start gap-4">
            <span className="text-4xl">📍</span>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Lokasi</p>
              <p className="text-xl font-bold text-gray-800 text-balance">{invitationConfig.venueName}</p>
              <p className="text-base text-gray-600 text-balance">{invitationConfig.venueAddress}</p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => window.open(invitationConfig.googleMapsUrl, "_blank")}
          className="mt-6 w-full max-w-md px-8 py-6 text-lg font-bold bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white rounded-full shadow-2xl border-4 border-white transform transition-transform active:scale-95"
          size="lg"
        >
          <span className="text-2xl mr-2">🗺️</span>
          Buka Google Maps
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-100 to-transparent" />
        <div className="absolute bottom-6 left-10 text-4xl animate-float">🕌</div>
        <div className="absolute bottom-8 right-14 text-4xl animate-float" style={{ animationDelay: "1s" }}>
          🏛️
        </div>
        <div className="absolute bottom-10 left-1/3 text-3xl animate-float" style={{ animationDelay: "1.5s" }}>
          🌟
        </div>
      </div>
    </div>
  )
}
