"use client"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react"

// Mock data - in a real app, this would come from a database or API
const allEvents = [
  {
    id: 1,
    title: "Advanced Web Development Workshop",
    date: "Mar 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Center Room 101",
    category: "Workshop",
    attendees: 45,
    image: "/event-1.jpg",
    description: "Learn modern web development practices with React, Next.js, and TypeScript.",
    isPast: false,
    fullDescription:
      "This comprehensive workshop covers modern web development best practices. You'll learn about React hooks, Next.js App Router, server components, and TypeScript. Perfect for both beginners and intermediate developers.",
    agenda: [
      { time: "2:00 PM - 2:30 PM", topic: "Introduction to Modern Web Development" },
      { time: "2:30 PM - 3:30 PM", topic: "React Hooks & State Management" },
      { time: "3:30 PM - 4:00 PM", topic: "Next.js App Router & Server Components" },
      { time: "4:00 PM - 5:00 PM", topic: "Q&A and Networking" },
    ],
    gallery: ["/event-1.jpg", "/event-2.jpg", "/event-3.jpg"],
    registrationLink: "#",
  },
  {
    id: 2,
    title: "AI & Machine Learning Seminar",
    date: "Mar 25, 2024",
    time: "3:00 PM - 4:30 PM",
    location: "Engineering Building",
    category: "Seminar",
    attendees: 120,
    image: "/event-2.jpg",
    description: "Explore the latest advancements in AI, machine learning, and neural networks.",
    isPast: false,
    fullDescription:
      "Join industry experts as they discuss cutting-edge AI and machine learning techniques. Topics include transformer architectures, large language models, and practical applications in industry.",
    agenda: [
      { time: "3:00 PM - 3:15 PM", topic: "Welcome & Keynote" },
      { time: "3:15 PM - 4:00 PM", topic: "Latest AI Advancements" },
      { time: "4:00 PM - 4:30 PM", topic: "Panel Discussion & Q&A" },
    ],
    gallery: ["/event-2.jpg", "/event-1.jpg", "/event-3.jpg"],
    registrationLink: "#",
  },
  {
    id: 3,
    title: "Cloud Architecture Masterclass",
    date: "Apr 5, 2024",
    time: "1:00 PM - 4:00 PM",
    location: "Virtual",
    category: "Masterclass",
    attendees: 80,
    image: "/event-3.jpg",
    description: "Deep dive into cloud architecture design patterns and best practices.",
    isPast: false,
    fullDescription:
      "Learn how to design scalable, resilient cloud architectures. We'll cover microservices, containerization, serverless computing, and more with hands-on examples.",
    agenda: [
      { time: "1:00 PM - 1:30 PM", topic: "Cloud Fundamentals" },
      { time: "1:30 PM - 2:45 PM", topic: "Design Patterns & Best Practices" },
      { time: "2:45 PM - 4:00 PM", topic: "Hands-on Demo & Q&A" },
    ],
    gallery: ["/event-3.jpg", "/event-1.jpg", "/event-2.jpg"],
    registrationLink: "#",
  },
  {
    id: 4,
    title: "Annual Tech Conference 2023",
    date: "Oct 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center",
    category: "Conference",
    attendees: 500,
    image: "/event-4.jpg",
    description: "Our largest annual event featuring keynote speakers from tech leaders.",
    isPast: true,
    fullDescription:
      "The biggest tech conference of the year with keynote speakers, technical sessions, networking, and exhibitions from top tech companies.",
    agenda: [
      { time: "9:00 AM - 10:00 AM", topic: "Keynote Address" },
      { time: "10:00 AM - 1:00 PM", topic: "Technical Tracks" },
      { time: "1:00 PM - 2:00 PM", topic: "Lunch & Networking" },
      { time: "2:00 PM - 5:00 PM", topic: "More Sessions & Expo" },
    ],
    gallery: ["/event-4.jpg", "/event-1.jpg", "/event-2.jpg", "/event-3.jpg"],
    registrationLink: "#",
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals Workshop",
    date: "Sep 20, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Tech Center",
    category: "Workshop",
    attendees: 60,
    image: "/event-5.jpg",
    description: "Essential cybersecurity concepts and defensive strategies.",
    isPast: true,
    fullDescription:
      "Learn about common security vulnerabilities, attack vectors, and defense mechanisms. Includes live demonstrations of security tools and techniques.",
    agenda: [
      { time: "2:00 PM - 2:30 PM", topic: "Introduction to Cybersecurity" },
      { time: "2:30 PM - 3:15 PM", topic: "Common Vulnerabilities & Attacks" },
      { time: "3:15 PM - 4:00 PM", topic: "Defense Strategies & Live Demo" },
    ],
    gallery: ["/event-5.jpg", "/event-1.jpg"],
    registrationLink: "#",
  },
]

interface EventDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params
  const event = allEvents.find((e) => e.id === Number.parseInt(id))

  if (!event) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/events">
            <Button variant="outline" className="mb-6 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Event not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/events">
          <Button variant="outline" className="mb-6 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex gap-2 mb-3">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                {event.category}
              </span>
              {event.isPast && (
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                  Past Event
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold text-white">{event.title}</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Event Info */}
            <div className="bg-card rounded-lg p-6 border border-border mb-8">
              <h2 className="text-2xl font-bold mb-4">Event Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Date & Time</p>
                    <p className="text-muted-foreground">
                      {event.date} • {event.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Attendees</p>
                    <p className="text-muted-foreground">{event.attendees} people</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card rounded-lg p-6 border border-border mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{event.fullDescription}</p>
            </div>

            {/* Agenda */}
            <div className="bg-card rounded-lg p-6 border border-border mb-8">
              <h2 className="text-2xl font-bold mb-4">Agenda</h2>
              <div className="space-y-3">
                {event.agenda.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-accent font-semibold flex-shrink-0 w-32">{item.time}</div>
                    <div className="text-foreground">{item.topic}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-3 gap-4">
                  {event.gallery.map((image, index) => (
                    <div key={index} className="relative h-40 rounded overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-accent text-accent-foreground rounded-lg p-6 sticky top-20">
              <h3 className="text-xl font-bold mb-4">Event Information</h3>
              <div className="space-y-3 mb-6 text-sm">
                <div>
                  <p className="opacity-80">Category</p>
                  <p className="font-semibold">{event.category}</p>
                </div>
                <div>
                  <p className="opacity-80">Expected Attendees</p>
                  <p className="font-semibold">{event.attendees}+</p>
                </div>
                <div>
                  <p className="opacity-80">Duration</p>
                  <p className="font-semibold">3 hours</p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-semibold"
              >
                <a href={event.registrationLink}>{event.isPast ? "View Photos" : "Register Now"}</a>
              </Button>

              <p className="text-xs opacity-80 text-center mt-4">
                {event.isPast ? "This event has already taken place" : "Spots filling up quickly. Register now!"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
