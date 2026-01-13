"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Annual Tech Conference 2024",
    excerpt: "Join us for our biggest event featuring keynote speakers from leading tech companies.",
    image: "/img.jpg",
    date: "Mar 15, 2024",
    category: "Event",
  },
  {
    id: 2,
    title: "New Mentorship Program Launch",
    excerpt: "Connect with industry professionals and accelerate your career growth in computing.",
    image: "/img.jpg",
    date: "Mar 10, 2024",
    category: "Program",
  },
  {
    id: 3,
    title: "Advanced AI Workshop Series",
    excerpt: "Learn cutting-edge AI techniques from experts. Limited seats available, register now!",
    image: "/img.jpg",
    date: "Mar 5, 2024",
    category: "Workshop",
  },
  {
    id: 4,
    title: "Hackathon 2024 Registration Open",
    excerpt: "Participate in our annual hackathon and showcase your coding skills. Prizes worth $10,000!",
    image: "/img.jpg",
    date: "Feb 28, 2024",
    category: "Event",
  },
  {
    id: 5,
    title: "Industry Partnership Announcement",
    excerpt: "ACM partners with leading tech companies to provide internship opportunities for students.",
    image: "/img.jpg",
    date: "Feb 20, 2024",
    category: "Program",
  },
  {
    id: 6,
    title: "Research Paper Published",
    excerpt: "Our team's research on machine learning algorithms has been published in a top-tier journal.",
    image: "/img.jpg",
    date: "Feb 15, 2024",
    category: "Research",
  },
]

const categories = ["All", "Event", "Program", "Workshop", "Research"]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNews =
    selectedCategory === "All" ? newsItems : newsItems.filter((item) => item.category === selectedCategory)

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
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest events, workshops, programs, and community activities.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredNews.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={item.image || "/img.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">{item.category}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.excerpt}</p>

                <Link href={`/news/${item.id}`}>
                  <div className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No news found in this category.</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
