"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

const publications = [
  {
    id: 1,
    title: "The Evolution of Computing Architecture in 2024",
    authors: ["Sarah Chen", "James Miller"],
    year: 2024,
    type: "Research Paper",
    description: "A comprehensive study of modern computing architectures and their impact on software development.",
    pdf: "#",
    abstract:
      "This paper examines the latest trends in computing architecture, including quantum computing, edge computing, and distributed systems.",
  },
  {
    id: 2,
    title: "Open Source Best Practices: A Community Perspective",
    authors: ["Priya Patel", "Alex Rodriguez"],
    year: 2024,
    type: "Technical Report",
    description: "Guidelines and best practices for contributing to and maintaining open source projects.",
    pdf: "#",
    abstract:
      "We analyze successful open source communities and extract key practices that lead to sustainable project growth and quality.",
  },
  {
    id: 3,
    title: "Sustainable Software: Building for the Future",
    authors: ["Emma Thompson", "Michael Lee"],
    year: 2023,
    type: "Position Paper",
    description: "A discussion on building sustainable and maintainable software systems.",
    pdf: "#",
    abstract:
      "This paper explores the principles of sustainable software development and how to build systems that can adapt to future challenges.",
  },
]

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

export default function PublicationsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications & Research</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed papers and technical reports from our research community.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              variants={itemVariants}
              className="bg-card rounded-lg p-8 border border-border hover:border-accent transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                      {pub.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{pub.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{pub.title}</h3>

                  <p className="text-sm text-muted-foreground mb-3">By {pub.authors.join(", ")}</p>

                  <p className="text-muted-foreground mb-4">{pub.abstract}</p>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
                      <a href={pub.pdf}>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent border-border">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
