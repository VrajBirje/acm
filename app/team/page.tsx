"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamGrid from "@/components/team-grid"
import TeamFilters from "@/components/team-filters"

export default function TeamPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals driving ACM forward. Our team brings together diverse expertise and
            perspectives.
          </p>
        </div>

        <TeamFilters selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
        <TeamGrid selectedFilter={selectedFilter} />
      </div>
      <Footer />
    </main>
  )
}
