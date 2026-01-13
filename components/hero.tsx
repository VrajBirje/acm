"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Pause } from "lucide-react"

interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  description: string
  buttonText?: string
  buttonLink?: string
  backgroundImage: string
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "ACM Community",
    subtitle: "Join Our Network",
    description: "Become part of a global community of computing professionals and students. Access resources, mentorship, and career opportunities.",
    buttonText: "Become Member",
    buttonLink: "/membership",
    backgroundImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 2,
    title: "Tech Workshops",
    subtitle: "Skill Development",
    description: "Hands-on sessions on AI/ML, Web Development, Cybersecurity, and more. Learn from experienced mentors.",
    buttonText: "View Workshops",
    buttonLink: "/workshops",
    backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 3,
    title: "Coding Events",
    subtitle: "Challenge Yourself",
    description: "Participate in hackathons, coding contests, and problem-solving sessions throughout the year.",
    buttonText: "Join Competition",
    buttonLink: "/events",
    backgroundImage: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 4,
    title: "Research Hub",
    subtitle: "Innovate with Us",
    description: "Collaborate on research projects, publish papers, and present at conferences with faculty guidance.",
    buttonText: "Explore Projects",
    buttonLink: "/research",
    backgroundImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 5,
    title: "Career Support",
    subtitle: "Grow Professionally",
    description: "Get career guidance, interview preparation, and connect with industry partners and alumni.",
    buttonText: "Career Resources",
    buttonLink: "/career",
    backgroundImage: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }
]

export default function HorizontalCarouselHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row h-full min-h-screen">
        {/* Left Content Section - Takes 40% on desktop */}
        <div className="lg:w-2/5 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 lg:p-12 flex flex-col justify-center relative z-20">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  ACM Student Chapter
                </h1>
                <div className="h-1 w-20 bg-accent rounded-full mb-4" />
                <p className="text-lg text-muted-foreground">
                  Advancing Computing as Science and Profession
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  {carouselSlides[currentSlide].title}
                </h2>
                <h3 className="text-xl font-semibold text-accent">
                  {carouselSlides[currentSlide].subtitle}
                </h3>
                <p className="text-muted-foreground">
                  {carouselSlides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = carouselSlides[currentSlide].buttonLink || "#"}
                >
                  {carouselSlides[currentSlide].buttonText || "Learn More"}
                </Button>
                {/* <Button 
                  size="lg" 
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="mr-2 h-4 w-4" />
                      Pause Auto-play
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Resume Auto-play
                    </>
                  )}
                </Button> */}
              </div>

              {/* Slide Indicators */}
              <div className="flex flex-wrap gap-2 pt-8">
                {carouselSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {slide.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden"
          >
            <ChevronDown className="w-6 h-6 text-accent opacity-50" />
          </motion.div>
        </div>

        {/* Right Carousel Section - Takes 60% on desktop */}
        <div className="lg:w-3/5 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${carouselSlides[currentSlide].backgroundImage})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-l" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Counter */}
          <div className="absolute top-8 right-8 z-30 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white font-medium">
              {String(currentSlide + 1).padStart(2, '0')} / {String(carouselSlides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-accent scale-125" 
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}