"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Our Team" },
    { href: "/events", label: "Events" },
    { href: "/news", label: "News" },
    { href: "/blogs", label: "Blogs" },
    { href: "/resources", label: "Resources" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link style={{ height: "100%" }} href="/" className="flex items-center space-x-2">
            <img style={{ height: "100%" }} src="/logo2.png" alt="" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Join Us
              </Button>
            </Link>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium rounded hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 px-4 pt-2">
              <Link href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Join Us
                </Button>
              </Link>
              <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                Donate
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
