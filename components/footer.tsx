"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">ACM Chapter</h3>
            <p className="text-sm opacity-80">
              Advancing computing as a science and profession. Join our community today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="opacity-80 hover:opacity-100 transition-opacity">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="opacity-80 hover:opacity-100 transition-opacity">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blogs" className="opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/publications" className="opacity-80 hover:opacity-100 transition-opacity">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="opacity-80 hover:opacity-100 transition-opacity">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/resources" className="opacity-80 hover:opacity-100 transition-opacity">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@acm.org" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@acm.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="opacity-80">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="opacity-80">Campus Location</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm opacity-80">&copy; {currentYear} ACM Chapter. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
