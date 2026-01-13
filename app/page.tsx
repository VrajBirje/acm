"use client"
import { useScroll, useTransform } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Stats from "@/components/stats"
import NewsHighlights from "@/components/news-highlights"
import Footer from "@/components/footer"

export default function Home() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Stats />
      <NewsHighlights />
      <Footer />
    </main>
  )
}
