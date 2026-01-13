"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Share2 } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Annual Tech Conference 2024",
    excerpt: "Join us for our biggest event featuring keynote speakers from leading tech companies.",
    image: "/img.jpg",
    date: "Mar 15, 2024",
    category: "Event",
    introduction: "We're excited to announce our Annual Tech Conference 2024, the biggest event of the year featuring keynote speakers from leading tech companies. This conference brings together students, professionals, and industry leaders to explore the latest trends in computing.",
    keyInsights: "This year's conference will feature sessions on artificial intelligence, cloud computing, cybersecurity, and emerging technologies. Attendees will have the opportunity to network with industry professionals, participate in hands-on workshops, and gain insights into the future of technology. The event includes panel discussions, technical talks, and career development sessions.",
    mainPoints: [
      "Keynote speeches from industry leaders",
      "Hands-on workshops on cutting-edge technologies",
      "Networking opportunities with professionals",
      "Panel discussions on industry trends",
      "Career development and mentorship sessions",
      "Exhibition of student projects and innovations"
    ],
    conclusion: "Don't miss this opportunity to expand your knowledge, network with professionals, and stay ahead in the rapidly evolving tech landscape. Register now to secure your spot at the Annual Tech Conference 2024."
  },
  {
    id: 2,
    title: "New Mentorship Program Launch",
    excerpt: "Connect with industry professionals and accelerate your career growth in computing.",
    image: "/img.jpg",
    date: "Mar 10, 2024",
    category: "Program",
    introduction: "ACM is launching a comprehensive mentorship program designed to connect students with industry professionals and accelerate career growth in computing. This program aims to bridge the gap between academic learning and professional practice.",
    keyInsights: "The mentorship program pairs students with experienced professionals who provide guidance on career development, technical skills, and industry insights. Mentors come from various sectors including software development, data science, cybersecurity, and cloud computing. The program includes regular one-on-one sessions, group workshops, and networking events.",
    mainPoints: [
      "One-on-one mentorship with industry professionals",
      "Career guidance and development support",
      "Technical skill enhancement workshops",
      "Industry insights and trends discussion",
      "Networking opportunities with mentors and peers",
      "Project collaboration and portfolio building"
    ],
    conclusion: "This mentorship program is a valuable opportunity for students to gain real-world insights, build professional relationships, and accelerate their career growth. Applications are now open for the upcoming semester."
  },
  {
    id: 3,
    title: "Advanced AI Workshop Series",
    excerpt: "Learn cutting-edge AI techniques from experts. Limited seats available, register now!",
    image: "/img.jpg",
    date: "Mar 5, 2024",
    category: "Workshop",
    introduction: "Join us for an intensive workshop series on advanced AI techniques led by industry experts and researchers. This series covers the latest developments in machine learning, deep learning, and artificial intelligence applications.",
    keyInsights: "The workshop series includes hands-on sessions on neural networks, natural language processing, computer vision, and reinforcement learning. Participants will work on real-world projects and gain practical experience with modern AI frameworks and tools. The series is designed for students with intermediate to advanced knowledge of programming and mathematics.",
    mainPoints: [
      "Hands-on sessions on neural networks and deep learning",
      "Natural language processing and computer vision",
      "Reinforcement learning and AI applications",
      "Practical projects and case studies",
      "Expert guidance from industry professionals",
      "Certificate of completion for participants"
    ],
    conclusion: "Limited seats are available for this exclusive workshop series. Register early to secure your spot and take your AI skills to the next level."
  },
  {
    id: 4,
    title: "Hackathon 2024 Registration Open",
    excerpt: "Participate in our annual hackathon and showcase your coding skills. Prizes worth $10,000!",
    image: "/img.jpg",
    date: "Feb 28, 2024",
    category: "Event",
    introduction: "Registration is now open for Hackathon 2024, our annual coding competition that brings together the best developers to solve real-world problems. This year's event features exciting challenges and prizes worth $10,000.",
    keyInsights: "The hackathon will span 48 hours and include multiple problem categories covering web development, mobile apps, AI/ML solutions, and cybersecurity. Participants can compete individually or in teams of up to 4 members. The event includes mentorship sessions, workshops, and networking opportunities with sponsors and judges.",
    mainPoints: [
      "48-hour coding competition",
      "Multiple problem categories and challenges",
      "Individual and team participation options",
      "Mentorship and support throughout the event",
      "Prizes worth $10,000 for winners",
      "Networking with sponsors and industry professionals"
    ],
    conclusion: "Don't miss this opportunity to showcase your coding skills, learn from peers, and win exciting prizes. Register now before spots fill up!"
  },
  {
    id: 5,
    title: "Industry Partnership Announcement",
    excerpt: "ACM partners with leading tech companies to provide internship opportunities for students.",
    image: "/img.jpg",
    date: "Feb 20, 2024",
    category: "Program",
    introduction: "We're thrilled to announce new partnerships with leading tech companies that will provide exclusive internship and job opportunities for ACM members. These partnerships strengthen our commitment to student career development.",
    keyInsights: "The partnerships include opportunities with companies in software development, cloud computing, data science, and cybersecurity. Students will have access to exclusive internship programs, job placements, and mentorship opportunities. The partnerships also include technical workshops, guest lectures, and company visits.",
    mainPoints: [
      "Exclusive internship opportunities for ACM members",
      "Job placement assistance and career support",
      "Technical workshops and training sessions",
      "Guest lectures from industry professionals",
      "Company visits and networking events",
      "Mentorship programs with partner companies"
    ],
    conclusion: "These partnerships open up exciting career opportunities for our members. Stay tuned for more details on how to apply for these exclusive programs."
  },
  {
    id: 6,
    title: "Research Paper Published",
    excerpt: "Our team's research on machine learning algorithms has been published in a top-tier journal.",
    image: "/img.jpg",
    date: "Feb 15, 2024",
    category: "Research",
    introduction: "We're proud to announce that research conducted by our ACM student team has been published in a top-tier computing journal. The paper focuses on novel machine learning algorithms for efficient data processing.",
    keyInsights: "The research introduces innovative approaches to machine learning that significantly improve computational efficiency while maintaining accuracy. The work was conducted over 18 months with guidance from faculty advisors and industry partners. The publication represents a significant achievement for our research team and demonstrates the quality of work produced by ACM members.",
    mainPoints: [
      "Novel machine learning algorithms for data processing",
      "Improved computational efficiency and accuracy",
      "18 months of collaborative research",
      "Faculty guidance and industry collaboration",
      "Publication in top-tier computing journal",
      "Recognition of ACM research excellence"
    ],
    conclusion: "This publication highlights the research capabilities of our ACM chapter and opens doors for future research collaborations and opportunities."
  },
]

interface NewsDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params
  const newsItem = newsItems.find((item) => item.id === Number.parseInt(id))

  if (!newsItem) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/news">
            <Button variant="outline" className="mb-6 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">News item not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/news">
          <Button variant="outline" className="mb-6 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image src={newsItem.image || "/img.jpg"} alt={newsItem.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">{newsItem.category}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{newsItem.date}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{newsItem.title}</h1>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-6">{newsItem.introduction}</p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Key Highlights</h2>
            <p className="text-muted-foreground mb-4">
              {newsItem.keyInsights}
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">What to Expect</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              {newsItem.mainPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">Conclusion</h2>
            <p className="text-muted-foreground">
              {newsItem.conclusion}
            </p>
          </div>
        </div>

        {/* Related News */}
        <div>
          <h2 className="text-2xl font-bold mb-6">More News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems
              .filter((item) => item.id !== newsItem.id && item.category === newsItem.category)
              .slice(0, 3)
              .map((relatedItem) => (
                <Link key={relatedItem.id} href={`/news/${relatedItem.id}`}>
                  <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedItem.image || "/img.jpg"}
                        alt={relatedItem.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedItem.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{relatedItem.date}</p>
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
