"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, BookOpen } from "lucide-react"

const resourceCategories = [
  {
    id: 1,
    title: "Learning Paths",
    description: "Structured learning paths for different skill levels",
    resources: [
      { name: "Web Development Fundamentals", link: "#" },
      { name: "Advanced React & Next.js", link: "#" },
      { name: "Full-Stack Development", link: "#" },
      { name: "Cloud Architecture", link: "#" },
    ],
  },
  {
    id: 2,
    title: "Documentation",
    description: "Essential documentation and reference materials",
    resources: [
      { name: "JavaScript/TypeScript Guide", link: "#" },
      { name: "React API Reference", link: "#" },
      { name: "Database Design Patterns", link: "#" },
      { name: "System Design Handbook", link: "#" },
    ],
  },
  {
    id: 3,
    title: "Tools & Software",
    description: "Recommended development tools and software",
    resources: [
      { name: "VS Code Extensions Guide", link: "#" },
      { name: "Git Workflow Best Practices", link: "#" },
      { name: "Docker & Container Guide", link: "#" },
      { name: "Testing Frameworks Comparison", link: "#" },
    ],
  },
  {
    id: 4,
    title: "Video Tutorials",
    description: "Video content for visual learners",
    resources: [
      { name: "Web Dev Series (YouTube Playlist)", link: "#" },
      { name: "Interview Preparation Videos", link: "#" },
      { name: "Live Coding Sessions", link: "#" },
      { name: "Tech Talk Recordings", link: "#" },
    ],
  },
  {
    id: 5,
    title: "Books & Articles",
    description: "Recommended books and long-form articles",
    resources: [
      { name: "Clean Code - Robert Martin", link: "#" },
      { name: "Design Patterns - Gang of Four", link: "#" },
      { name: "System Design Interview - Alum Ren", link: "#" },
      { name: "The Pragmatic Programmer", link: "#" },
    ],
  },
  {
    id: 6,
    title: "Community Resources",
    description: "Community platforms and networking opportunities",
    resources: [
      { name: "GitHub Communities", link: "#" },
      { name: "Stack Overflow Guide", link: "#" },
      { name: "Dev.to Community", link: "#" },
      { name: "Slack Communities Directory", link: "#" },
    ],
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

export default function ResourcesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access curated learning materials, documentation, tools, and community resources to accelerate your growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resourceCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {category.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.link}
                      className="flex items-center justify-between p-2 rounded hover:bg-muted transition-colors group"
                    >
                      <span className="text-sm font-medium group-hover:text-accent transition-colors">
                        {resource.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full mt-4 bg-transparent border-border hover:bg-muted"
              >
                <a href="#">
                  <Download className="w-4 h-4 mr-2" />
                  Download All
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Tips Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-border"
        >
          <h2 className="text-2xl font-bold mb-6">Pro Tips for Learning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">1. Create a Learning Schedule</h4>
              <p className="text-muted-foreground text-sm">
                Dedicate specific times each week to learning. Consistency is more important than intensity.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">2. Build Projects</h4>
              <p className="text-muted-foreground text-sm">
                Apply what you learn by building real projects. This reinforces concepts and builds portfolio.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">3. Join Communities</h4>
              <p className="text-muted-foreground text-sm">
                Connect with other learners. Communities provide support, motivation, and networking opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">4. Document Your Learning</h4>
              <p className="text-muted-foreground text-sm">
                Write blog posts or take notes. Teaching others reinforces your own understanding.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  )
}
