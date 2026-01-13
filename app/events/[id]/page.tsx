// "use client"
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
    title: "Digihunt 6.0",
    date: "October 14, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Dwarkadas J. Sanghvi College of Engineering",
    duration: "7 hours",
    category: "Competitive Event",
    attendees: 200,
    image: "/img4.jpeg",
    description: "A competitive event that tests your skills in web development, coding, and problem-solving.",
    isPast: true,
    fullDescription:
      "Digihunt 6.0 is a competitive event that tests your skills in web development, coding, and problem-solving. The theme of the event is 'F1'. It is a great opportunity to showcase your skills and win exciting prizes.",
    agenda: [
      { time: "11:00 am - 1:30 PM", topic: "Opening Ceremony" },
      { time: "1:30 PM - 2:30 PM", topic: "Round 1" },
      { time: "2:30 PM - 4:00 PM", topic: "Round 2" },
      { time: "4:00 PM - 5:00 PM", topic: "Round 3" },
      { time: "5:00 PM - 6:00 PM", topic: "Closing Ceremony" },
    ],
    gallery: ["/img1.jpeg", "/img4.jpeg"],
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
    image: "/img1.jpeg",
    description: "A career fair that connects students with companies for internships and full-time opportunities.",
    isPast: false,
    fullDescription:
      "A career fair that connects students with companies for internships and full-time opportunities. It is a great opportunity to network with companies and learn about their internship and full-time opportunities.",
    // agenda: [
    //   { time: "11:00 AM - 11:30 AM", topic: "Opening Ceremony" },
    //   { time: "11:30 AM - 12:00 PM", topic: "Round 1" },
    //   { time: "12:00 PM - 12:30 PM", topic: "Round 2" },
    //   { time: "12:30 PM - 1:00 PM", topic: "Round 3" },
    //   { time: "1:00 PM - 1:30 PM", topic: "Closing Ceremony" },
    // ],
    gallery: ["/img1.jpeg", "/img2.jpeg"],
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
    image: "/img2.jpeg",
    description: "A hackathon event that tests your skills in coding, problem-solving, and creativity.",
    isPast: false,
    fullDescription:
      "Line of Code(LOC) 2026 is a hackathon event that tests your skills in coding, problem-solving, and creativity. The theme of the event is 'F1'. It is a great opportunity to showcase your skills and win exciting prizes.",
    gallery: ["/img2.jpg", "/img1.jpeg"],
    registrationLink: "#",
  }
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
          <Image src={event.image || "/img.jpg"} alt={event.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
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
            <h1 className="text-4xl font-bold text-card">{event.title}</h1>
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
                {event.agenda?.map((item, index) => (
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
                        src={image || "/img.jpg"}
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
                  <p className="font-semibold">{event.duration}</p>
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
