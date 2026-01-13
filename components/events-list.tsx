"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

const allEvents = [
  {
    id: 1,
    title: "Digihunt 6.0",
    date: "October 14, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Dwarkadas J. Sanghvi College of Engineering",
    category: "Competitive Event",
    attendees: 200,
    image: "/img.jpg",
    description: "A competitive event that tests your skills in web development, coding, and problem-solving.",
    isPast: true,
    fullDescription:
      "Digihunt 6.0 is a competitive event that tests your skills in web development, coding, and problem-solving. The theme of the event is 'F1'. It is a great opportunity to showcase your skills and win exciting prizes.",
    agenda: [
      { time: "2:00 PM - 2:30 PM", topic: "Opening Ceremony" },
      { time: "2:30 PM - 3:30 PM", topic: "Round 1" },
      { time: "3:30 PM - 4:00 PM", topic: "Round 2" },
      { time: "4:00 PM - 5:00 PM", topic: "Round 3" },
      { time: "5:00 PM - 6:00 PM", topic: "Closing Ceremony" },
    ],
    gallery: ["/img.jpg", "/img.jpg"],
    registrationLink: "#",
  },
  {
    id: 2,
    title: "Internship Fair 2026",
    date: "To be announced",
    time: "To be announced",
    location: "To be announced",
    category: "Career Fair",
    attendees: 1000,
    image: "/img.jpg",
    description: "A career fair that connects students with companies for internships and full-time opportunities.",
    isPast: false,
    fullDescription:
      "A career fair that connects students with companies for internships and full-time opportunities. It is a great opportunity to network with companies and learn about their internship and full-time opportunities.",
    agenda: [
      { time: "11:00 AM - 11:30 AM", topic: "Opening Ceremony" },
      { time: "11:30 AM - 12:00 PM", topic: "Round 1" },
      { time: "12:00 PM - 12:30 PM", topic: "Round 2" },
      { time: "12:30 PM - 1:00 PM", topic: "Round 3" },
      { time: "1:00 PM - 1:30 PM", topic: "Closing Ceremony" },
    ],
    gallery: ["/img.jpg", "/img.jpg"],
    registrationLink: "#",
  },
  {
    id: 3,
    title: "Line of Code(LOC) 2026",
    date: "To be announced",
    time: "To be announced",
    location: "To be announced",
    category: "Hackathon Event",
    attendees: 100,
    image: "/img.jpg",
    description: "A hackathon event that tests your skills in coding, problem-solving, and creativity.",
    isPast: false,
    fullDescription:
      "Line of Code(LOC) 2026 is a hackathon event that tests your skills in coding, problem-solving, and creativity. The theme of the event is 'F1'. It is a great opportunity to showcase your skills and win exciting prizes.",
    gallery: ["/img.jpg", "/img.jpg"],
    registrationLink: "#",
  }
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
              src={event.image || "/img.jpg"}
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
