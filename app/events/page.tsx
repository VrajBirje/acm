"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EventsList from "@/components/events-list"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const [showPast, setShowPast] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our upcoming workshops, conferences, and networking events. Join us to learn, connect, and grow.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => setShowPast(false)}
            variant={!showPast ? "default" : "outline"}
            className={`${
              !showPast
                ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                : "border-border text-foreground hover:bg-muted"
            }`}
          >
            Upcoming Events
          </Button>
          <Button
            onClick={() => setShowPast(true)}
            variant={showPast ? "default" : "outline"}
            className={`${
              showPast
                ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                : "border-border text-foreground hover:bg-muted"
            }`}
          >
            Past Events
          </Button>
        </div>

        <EventsList showPast={showPast} />
      </div>
      <Footer />
    </main>
  )
}
