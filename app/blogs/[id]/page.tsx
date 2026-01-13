"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Share2 } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next in 2024?",
    author: "Sarah Chen",
    authorRole: "Computer Science PhD",
    date: "Mar 10, 2024",
    category: "Web Development",
    excerpt:
      "Exploring emerging trends in web development, from AI integration to performance optimization. Discover what tools and frameworks are shaping the future.",
    image: "/blog-1.jpg",
    readTime: "8 min read",
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is evolving rapidly. In this article, we explore the trends that will define 2024 and beyond.</p>

      <h2>AI Integration in Web Development</h2>
      <p>Artificial Intelligence is transforming how we build web applications. From code generation to intelligent UI components, AI is becoming an essential tool for developers.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Faster development cycles</li>
        <li>Improved code quality</li>
        <li>Better user experiences</li>
        <li>Automated testing and optimization</li>
      </ul>

      <h2>Performance as a Priority</h2>
      <p>With Core Web Vitals becoming more important, developers are focusing more on performance optimization. Edge computing and progressive enhancement are becoming standard practices.</p>

      <h2>Framework Evolution</h2>
      <p>React, Vue, and other frameworks continue to evolve. We're seeing more emphasis on Server Components, streaming, and better developer experience.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is exciting. By staying updated with these trends, developers can build better, faster, and more user-friendly applications.</p>
    `,
  },
  {
    id: 2,
    title: "Machine Learning in Production: Best Practices",
    author: "James Miller",
    authorRole: "Full-Stack Developer",
    date: "Mar 5, 2024",
    category: "Machine Learning",
    excerpt:
      "Deploying ML models at scale requires careful planning. Learn about monitoring, version control, and serving strategies in this comprehensive guide.",
    image: "/blog-2.jpg",
    readTime: "12 min read",
    content: `<p>Deploying machine learning models in production is challenging...</p>`,
  },
  {
    id: 3,
    title: "Open Source Contributions: Getting Started",
    author: "Priya Patel",
    authorRole: "Cloud Architecture Specialist",
    date: "Feb 28, 2024",
    category: "Open Source",
    excerpt:
      "Want to contribute to open source? We'll walk you through finding projects, understanding workflows, and making your first pull request.",
    image: "/blog-3.jpg",
    readTime: "10 min read",
    content: `<p>Open source contributions can be intimidating at first...</p>`,
  },
  {
    id: 4,
    title: "Cloud Cost Optimization Strategies",
    author: "Alex Rodriguez",
    authorRole: "Events Coordinator",
    date: "Feb 20, 2024",
    category: "Cloud",
    excerpt:
      "Managing cloud costs is critical for any organization. Discover practical strategies to optimize your AWS, Azure, or GCP spending.",
    image: "/blog-4.jpg",
    readTime: "9 min read",
    content: `<p>Cloud costs can spiral out of control...</p>`,
  },
]

interface BlogDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === Number.parseInt(id))

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/blogs">
            <Button variant="outline" className="mb-6 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Blog post not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blogs">
          <Button variant="outline" className="mb-6 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image src={post.image || "/img.jpg"} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">{post.category}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-6">{post.excerpt}</p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Key Insights</h2>
            <p className="text-muted-foreground mb-4">
              This article explores the most important aspects of the topic, providing practical insights and actionable
              advice.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Main Points</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Comprehensive overview of the topic</li>
              <li>Practical best practices</li>
              <li>Real-world examples and case studies</li>
              <li>Future trends and predictions</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">Conclusion</h2>
            <p className="text-muted-foreground">
              Understanding these concepts is crucial for staying competitive in today's tech landscape. Continue
              learning and adapting to new developments in the field.
            </p>
          </div>
        </div>

        {/* Author Card */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-border mb-12">
          <h3 className="text-lg font-bold mb-2">About the Author</h3>
          <p className="text-muted-foreground mb-4">
            {post.author} is a {post.authorRole} with extensive experience in the field.
          </p>
        </div>

        {/* Related Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blogs/${relatedPost.id}`}>
                  <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/img.jpg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
