"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage("Successfully subscribed!")
        setEmail("")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to subscribe. Please try again.")
      }
    } catch {
      setMessage("Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
        required
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap"
      >
        <Mail className="w-4 h-4 mr-2" />
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
      {message && <p className="text-xs text-accent absolute mt-12">{message}</p>}
    </form>
  )
}
