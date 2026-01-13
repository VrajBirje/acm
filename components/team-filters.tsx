"use client"

import { Button } from "@/components/ui/button"

// Updated to only have 3 filters
const filters = [
  { id: "all", label: "All Members" },
  { id: "core", label: "Core Team" },
  { id: "alumni", label: "Alumni" },
]

interface TeamFiltersProps {
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export default function TeamFilters({ selectedFilter, onFilterChange }: TeamFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          variant={selectedFilter === filter.id ? "default" : "outline"}
          className={`${
            selectedFilter === filter.id
              ? "bg-accent hover:bg-accent/90 text-accent-foreground"
              : "border-border text-foreground hover:bg-muted"
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}