"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next in 2024?",
    author: "Sarah Chen",
    date: "Mar 10, 2024",
    category: "Web Development",
    excerpt:
      "Exploring emerging trends in web development, from AI integration to performance optimization. Discover what tools and frameworks are shaping the future.",
    image: "/blog-1.jpg",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Machine Learning in Production: Best Practices",
    author: "James Miller",
    date: "Mar 5, 2024",
    category: "Machine Learning",
    excerpt:
      "Deploying ML models at scale requires careful planning. Learn about monitoring, version control, and serving strategies in this comprehensive guide.",
    image: "/blog-2.jpg",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Open Source Contributions: Getting Started",
    author: "Priya Patel",
    date: "Feb 28, 2024",
    category: "Open Source",
    excerpt:
      "Want to contribute to open source? We'll walk you through finding projects, understanding workflows, and making your first pull request.",
    image: "/blog-3.jpg",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Cloud Cost Optimization Strategies",
    author: "Alex Rodriguez",
    date: "Feb 20, 2024",
    category: "Cloud",
    excerpt:
      "Managing cloud costs is critical for any organization. Discover practical strategies to optimize your AWS, Azure, or GCP spending.",
    image: "/blog-4.jpg",
    readTime: "9 min read",
  },
]

const categories = ["All", "Web Development", "Machine Learning", "Open Source", "Cloud"]

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Articles</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with insights on technology, innovation, and best practices from our community.
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

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={post.image || "/img.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">{post.category}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link href={`/blogs/${post.id}`}>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
