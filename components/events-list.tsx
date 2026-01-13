"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

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
    gallery: ["/event-5.jpg", "/event-1.jpg"],
    registrationLink: "#",
  },
]

interface EventsListProps {
  showPast: boolean
}

export default function EventsList({ showPast }: EventsListProps) {
  const filteredEvents = allEvents.filter((event) => event.isPast === showPast)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-8">
      {filteredEvents.map((event) => (
        <motion.div
          key={event.id}
          variants={itemVariants}
          className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 flex flex-col md:flex-row"
        >
          {/* Event Image */}
          <div className="relative w-full md:w-64 h-64 md:h-auto flex-shrink-0 overflow-hidden bg-muted">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Event Details */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                  {event.category}
                </span>
                {event.isPast && (
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                    Past Event
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{event.title}</h3>

              <p className="text-muted-foreground mb-4">{event.description}</p>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>
                    {event.date} • {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </div>

            <Link href={`/events/${event.id}`}>
              <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                {event.isPast ? "View Details" : "Register Now"}
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
