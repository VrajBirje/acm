"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const news = [
  {
    id: 1,
    title: "Annual Tech Conference 2024",
    excerpt: "Join us for our biggest event featuring keynote speakers from leading tech companies.",
    image: "/tech-conference-event.jpg",
    date: "Mar 15, 2024",
    category: "Event",
  },
  {
    id: 2,
    title: "New Mentorship Program Launch",
    excerpt: "Connect with industry professionals and accelerate your career growth in computing.",
    image: "/mentorship-program.jpg",
    date: "Mar 10, 2024",
    category: "Program",
  },
  {
    id: 3,
    title: "Advanced AI Workshop Series",
    excerpt: "Learn cutting-edge AI techniques from experts. Limited seats available, register now!",
    image: "/ai-workshop.jpg",
    date: "Mar 5, 2024",
    category: "Workshop",
  },
]

export default function NewsHighlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest events, workshops, and community activities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {news.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`}>
              <motion.div variants={itemVariants} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <Image
                    src={item.image || "/img.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">{item.category}</span>
                <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                <h3 className="text-xl font-bold mt-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-muted-foreground mt-2 line-clamp-2">{item.excerpt}</p>
                <Button variant="link" className="mt-4 p-0 text-accent hover:text-accent/80">
                  Read More →
                </Button>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
            <Link href="/news">View All News</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
