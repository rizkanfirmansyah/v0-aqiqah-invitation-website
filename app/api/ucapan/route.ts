import { NextResponse } from "next/server"
import { readFile, writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

const DATA_DIR = join(process.cwd(), "data")
const DATA_FILE = join(DATA_DIR, "data.json")

interface Message {
  id: string
  name: string
  message: string
  timestamp: number
}

interface MessageData {
  messages: Message[]
}

async function ensureDataFile() {
  try {
    if (!existsSync(DATA_DIR)) {
      await mkdir(DATA_DIR, { recursive: true })
    }

    if (!existsSync(DATA_FILE)) {
      await writeFile(DATA_FILE, JSON.stringify({ messages: [] }))
    }
  } catch (error) {
    console.error("[v0] Error ensuring data file:", error)
  }
}

async function readMessages(): Promise<MessageData> {
  try {
    await ensureDataFile()
    const data = await readFile(DATA_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("[v0] Error reading messages:", error)
    return { messages: [] }
  }
}

async function writeMessages(data: MessageData) {
  try {
    await ensureDataFile()
    await writeFile(DATA_FILE, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error("[v0] Error writing messages:", error)
    throw error
  }
}

export async function GET() {
  try {
    const data = await readMessages()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] GET error:", error)
    return NextResponse.json({ messages: [] }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, message } = body

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 })
    }

    const data = await readMessages()

    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      message,
      timestamp: Date.now(),
    }

    data.messages.unshift(newMessage)

    await writeMessages(data)

    return NextResponse.json({ success: true, message: newMessage })
  } catch (error) {
    console.error("[v0] POST error:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  }
}
