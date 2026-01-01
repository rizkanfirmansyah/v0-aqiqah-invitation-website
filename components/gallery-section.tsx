"use client"

import { useState } from "react"

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const photos = [
    { query: "cute-newborn-baby-sleeping", alt: "Baby sleeping" },
    { query: "happy-baby-smiling", alt: "Baby smiling" },
    { query: "baby-with-parents", alt: "Baby with parents" },
    { query: "baby-cute-portrait", alt: "Baby portrait" },
  ]

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <div className="w-full h-full bg-gradient-to-b from-violet-50 via-purple-50 to-indigo-50 flex flex-col items-center justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32">
        <div className="absolute top-4 left-8 text-3xl animate-twinkle">⭐</div>
        <div className="absolute top-8 right-12 text-3xl animate-twinkle" style={{ animationDelay: "0.5s" }}>
          ✨
        </div>
        <div className="absolute top-10 left-1/4 text-4xl animate-float">☁️</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 max-w-2xl w-full">
        <div className="text-6xl mb-4 animate-float">📸</div>
        <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4 text-center text-balance">Galeri Foto</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8" />

        <div className="relative w-full max-w-lg">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-2xl border-4 border-white">
            <img
              src={`/.jpg?height=400&width=600&query=${photos[currentIndex].query}`}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>

          <button
            onClick={prevPhoto}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-purple-600 rounded-full p-4 shadow-2xl transition-all hover:scale-110 active:scale-95"
            aria-label="Previous photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-purple-600 rounded-full p-4 shadow-2xl transition-all hover:scale-110 active:scale-95"
            aria-label="Next photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all ${
                currentIndex === index ? "bg-purple-600 w-10 h-3" : "bg-purple-300 w-3 h-3"
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-100 to-transparent" />
        <div className="absolute bottom-6 left-10 text-4xl animate-float">📷</div>
        <div className="absolute bottom-8 right-14 text-4xl animate-float" style={{ animationDelay: "1s" }}>
          🖼️
        </div>
        <div className="absolute bottom-10 left-1/3 text-3xl animate-float" style={{ animationDelay: "1.5s" }}>
          ✨
        </div>
      </div>
    </div>
  )
}
