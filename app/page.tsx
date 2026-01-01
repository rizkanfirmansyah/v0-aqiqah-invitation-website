"use client"

import { useState, useEffect, useRef } from "react"
import { CoverPage } from "@/components/cover-page"
import { GreetingSection } from "@/components/greeting-section"
import { ChildInfoSection } from "@/components/child-info-section"
import { DoaSection } from "@/components/doa-section"
import { EventDetailsSection } from "@/components/event-details-section"
import { GallerySection } from "@/components/gallery-section"
import { MessagesSection } from "@/components/messages-section"
import { ClosingSection } from "@/components/closing-section"
import { MusicControl } from "@/components/music-control"

export default function AqiqahInvitation() {
  const [isOpened, setIsOpened] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleOpenInvitation = () => {
    setIsOpened(true)
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(console.error)
      }
    }, 500)
  }

  const sections = [
    <GreetingSection key="greeting" />,
    <ChildInfoSection key="child-info" />,
    <DoaSection key="doa" />,
    <EventDetailsSection key="event" />,
    <GallerySection key="gallery" />,
    <MessagesSection key="messages" />,
    <ClosingSection key="closing" />,
  ]

  useEffect(() => {
    if (!isOpened || !containerRef.current) return

    const container = containerRef.current

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const sectionWidth = container.offsetWidth
      const newSection = Math.round(scrollLeft / sectionWidth)
      setCurrentSection(newSection)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [isOpened])

  if (!isOpened) {
    return <CoverPage onOpen={handleOpenInvitation} />
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/islamic-baby-instrumental-music.mp3" type="audio/mpeg" />
      </audio>

      <MusicControl audioRef={audioRef} />

      <div
        ref={containerRef}
        className="horizontal-scroll-container flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="scroll-snap-item full-screen-section flex-shrink-0 animate-slideIn"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {section}
          </div>
        ))}
      </div>

      <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-2 z-50 pointer-events-none">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSection === index ? "bg-primary w-8" : "bg-primary/30 w-2"
            }`}
          />
        ))}
      </div>
    </>
  )
}
