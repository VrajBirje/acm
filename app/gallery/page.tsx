"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, title: "Tech Conference 2024", category: "events", image: "/gallery-1.jpg" },
  { id: 2, title: "Team Building Activity", category: "community", image: "/gallery-2.jpg" },
  { id: 3, title: "Workshop Session", category: "events", image: "/gallery-3.jpg" },
  { id: 4, title: "Networking Event", category: "community", image: "/gallery-4.jpg" },
  { id: 5, title: "Hackathon Finals", category: "events", image: "/gallery-5.jpg" },
  { id: 6, title: "Community Meetup", category: "community", image: "/gallery-6.jpg" },
  { id: 7, title: "Office Tour", category: "office", image: "/gallery-7.jpg" },
  { id: 8, title: "Team Celebration", category: "community", image: "/gallery-8.jpg" },
  { id: 9, title: "Mentorship Program", category: "office", image: "/gallery-9.jpg" },
]

const categories = ["all", "events", "community", "office"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through moments from our events, community activities, and team celebrations.
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
              className={`capitalize ${
                selectedCategory === category
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(img)}
              className="group relative h-48 rounded-lg overflow-hidden cursor-pointer bg-muted"
            >
              <Image
                src={img.image || "/img.jpg"}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-card text-sm font-medium">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 -right-8 text-card hover:text-accent transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-96 md:h-screen md:max-h-96 rounded-lg overflow-hidden">
              <Image
                src={selectedImage.image || "/img.jpg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <p className="text-card font-semibold">{selectedImage.title}</p>
              <p className="text-muted-foreground text-sm capitalize">{selectedImage.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  )
}
