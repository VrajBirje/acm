"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  text: string
  timestamp: Date
}

const qaData = {
  join: "To join ACM, visit our website and click the 'Join Us' button. Fill out the membership form with your details, and you'll receive a confirmation email.",
  events:
    "We host monthly events including workshops, seminars, conferences, and networking sessions. Check our Events page to see upcoming events.",
  teams:
    "You can find information about our team on the 'Our Team' page. We have a dedicated team of passionate members working across different areas.",
  membership:
    "ACM membership is free for students and professionals. Members get access to exclusive events, resources, and networking opportunities.",
  contact:
    "You can contact us via email at info@acm.org or call (123) 456-7890. You can also use our contact form on the Contact page.",
  donate:
    "Donations help us organize more events and provide resources to our community. Click the 'Donate' button on the homepage or use our secure donation portal.",
  newsletters:
    "Subscribe to our newsletter on the homepage to get updates about events, articles, and community news directly to your inbox.",
  volunteer:
    "We're always looking for volunteers! Contact us at info@acm.org if you're interested in volunteering with ACM.",
  resources:
    "Check out our Learning Resources page for curated materials including tutorials, documentation, tools, and community platforms.",
  mentorship:
    "We offer a mentorship program to help members grow their skills. Apply through our website to connect with experienced mentors.",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: "Hello! 👋 I'm the ACM ChatBot. I can help you with questions about membership, events, donations, and more. What can I help you with today?",
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen])

  const findAnswer = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("join") || lowerMessage.includes("member") || lowerMessage.includes("sign up")) {
      return qaData.join
    }
    if (lowerMessage.includes("event") || lowerMessage.includes("workshop") || lowerMessage.includes("seminar")) {
      return qaData.events
    }
    if (lowerMessage.includes("team") || lowerMessage.includes("who")) {
      return qaData.teams
    }
    if (lowerMessage.includes("membership") || lowerMessage.includes("cost")) {
      return qaData.membership
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
      return qaData.contact
    }
    if (lowerMessage.includes("donate") || lowerMessage.includes("donation")) {
      return qaData.donate
    }
    if (lowerMessage.includes("newsletter") || lowerMessage.includes("subscribe")) {
      return qaData.newsletters
    }
    if (lowerMessage.includes("volunteer")) {
      return qaData.volunteer
    }
    if (lowerMessage.includes("resource") || lowerMessage.includes("learning")) {
      return qaData.resources
    }
    if (lowerMessage.includes("mentor")) {
      return qaData.mentorship
    }

    return "I'm not sure how to help with that. You can ask me about joining ACM, upcoming events, membership, donations, volunteering, resources, mentorship, or contact us. Feel free to ask!"
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: findAnswer(input),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-1.5rem)] bg-card border border-border rounded-lg shadow-xl flex flex-col h-96"
          >
            {/* Header */}
            <div className="bg-accent text-accent-foreground p-4 rounded-t-lg">
              <h3 className="font-bold text-lg">ACM Assistant</h3>
              <p className="text-xs opacity-90">Ask us anything!</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-3 text-sm ${
                      msg.type === "user" ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                  <div
                    className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your question..."
                  className="flex-1 px-3 py-2 rounded bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading}
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
