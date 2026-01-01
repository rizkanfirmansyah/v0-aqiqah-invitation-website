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
import { Button } from "@/components/ui/button"
import { invitationConfig } from "@/data/invitation-config"

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

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return
    const sectionWidth = containerRef.current.offsetWidth
    const clampedIndex = Math.max(0, Math.min(index, sections.length - 1))
    containerRef.current.scrollTo({
      left: clampedIndex * sectionWidth,
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    if (!isOpened || !containerRef.current) return

    const container = containerRef.current
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    container.scrollTo({ left: 0, top: 0, behavior: "auto" })
    setCurrentSection(0)

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const sectionWidth = container.offsetWidth
      const newSection = Math.round(scrollLeft / sectionWidth)
      setCurrentSection(newSection)
    }

    handleScroll()
    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [isOpened])

  if (!isOpened) {
    return <CoverPage onOpen={handleOpenInvitation} />
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={invitationConfig.audioSrc} type="audio/mpeg" />
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
            className="scroll-snap-item full-screen-section flex-shrink-0 animate-pageFlip"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {section}
          </div>
        ))}
      </div>

      <div className="fixed inset-y-0 left-0 right-0 hidden md:flex items-center justify-between px-4 z-40 pointer-events-none">
        <Button
          onClick={() => scrollToSection(currentSection - 1)}
          size="icon"
          className="pointer-events-auto rounded-full bg-white/80 hover:bg-white text-foreground shadow-xl w-12 h-12 border"
          aria-label="Sebelumnya"
          disabled={currentSection === 0}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>

        <Button
          onClick={() => scrollToSection(currentSection + 1)}
          size="icon"
          className="pointer-events-auto rounded-full bg-white/80 hover:bg-white text-foreground shadow-xl w-12 h-12 border"
          aria-label="Berikutnya"
          disabled={currentSection === sections.length - 1}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
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
