"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Message {
  id: string
  name: string
  message: string
  timestamp: number
}

export function MessagesSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/ucapan")
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages || [])
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/ucapan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      })

      if (response.ok) {
        setName("")
        setMessage("")
        setIsOpen(false)
        fetchMessages()
      }
    } catch (error) {
      console.error("Failed to submit message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full h-full bg-gradient-to-b from-rose-50 via-pink-50 to-red-50 flex flex-col items-center justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32">
        <div className="absolute top-4 left-8 text-3xl animate-twinkle">💌</div>
        <div className="absolute top-8 right-12 text-3xl animate-twinkle" style={{ animationDelay: "0.5s" }}>
          💝
        </div>
        <div className="absolute top-10 left-1/4 text-4xl animate-float">☁️</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-start px-6 z-10 max-w-2xl w-full overflow-y-auto py-20">
        <div className="text-6xl mb-4 animate-float">✉️</div>
        <h3 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 text-center text-balance">Ucapan & Doa</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mb-8" />

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="w-full max-w-md px-8 py-6 text-lg font-bold bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded-full shadow-2xl border-4 border-white transform transition-transform active:scale-95 mb-8"
            >
              <span className="text-2xl mr-2">✍️</span>
              Kirim Ucapan & Doa
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Kirim Ucapan & Doa</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input placeholder="Nama Anda" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Textarea
                  placeholder="Tulis ucapan dan doa Anda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Mengirim..." : "Kirim"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <div className="w-full space-y-4">
          {messages.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
              <p className="text-gray-600">Belum ada ucapan. Jadilah yang pertama!</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💌</span>
                  <p className="font-bold text-gray-800">{msg.name}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-11">{msg.message}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-100 to-transparent" />
      </div>
    </div>
  )
}
