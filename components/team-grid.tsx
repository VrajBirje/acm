"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Meghana Basrur",
    role: "Chairperson",
    category: "upper core",
    bio: "Leading ACM with vision and dedication, fostering innovation and collaboration in the computing community.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "meghana@acm.org" },
  },
  {
    id: 2,
    name: "Adit Mehta",
    role: "Co-Chairperson",
    category: "upper core",
    bio: "Driving strategic initiatives and building bridges between students, faculty, and industry partners.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "adit@acm.org" },
  },
  {
    id: 3,
    name: "Nitya Ruparel",
    role: "Secretary",
    category: "upper core",
    bio: "Ensuring smooth operations and effective communication across all ACM activities and initiatives.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "nitya@acm.org" },
  },
  {
    id: 4,
    name: "Rishi Mehta",
    role: "Treasurer",
    category: "upper core",
    bio: "Managing financial resources and budgets to support ACM's mission and community programs.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "rishi@acm.org" },
  },
  {
    id: 5,
    name: "Hardik Shah",
    role: "Admin",
    category: "upper core",
    bio: "Overseeing administrative functions and ensuring efficient day-to-day operations of ACM.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "hardik@acm.org" },
  },
  {
    id: 6,
    name: "Kashissh",
    role: "Admin",
    category: "upper core",
    bio: "Supporting administrative needs and maintaining organizational structure for ACM activities.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "kashissh@acm.org" },
  },
  {
    id: 7,
    name: "Anvi Phadke",
    role: "Vice Chairperson Editorial",
    category: "core",
    bio: "Leading editorial initiatives and content creation to showcase ACM's achievements and insights.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "anvi@acm.org" },
  },
  {
    id: 8,
    name: "Yash Kehalkar",
    role: "VCP Editorial",
    category: "core",
    bio: "Crafting compelling narratives and managing editorial content for ACM publications and communications.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "yash@acm.org" },
  },
  {
    id: 9,
    name: "Ansh Saboo",
    role: "VCP Events",
    category: "core",
    bio: "Organizing engaging workshops, hackathons, and networking events to connect the computing community.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "ansh@acm.org" },
  },
  {
    id: 10,
    name: "Hriday Sanghvi",
    role: "VCP Events",
    category: "core",
    bio: "Creating memorable experiences through innovative event planning and community engagement initiatives.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "hriday@acm.org" },
  },
  {
    id: 11,
    name: "Deep Rathod",
    role: "VCP Marketing",
    category: "core",
    bio: "Building ACM's brand presence and expanding outreach through strategic marketing campaigns.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "deep@acm.org" },
  },
  {
    id: 12,
    name: "Anushree Revankar",
    role: "VCP Marketing",
    category: "core",
    bio: "Driving awareness and engagement through creative marketing strategies and digital presence.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "anushree@acm.org" },
  },
  {
    id: 13,
    name: "Jeel Shah",
    role: "VCP Creatives",
    category: "core",
    bio: "Designing visually stunning content and creative assets that bring ACM's vision to life.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "jeel@acm.org" },
  },
  {
    id: 14,
    name: "Prisha Desai",
    role: "VCP Creatives",
    category: "core",
    bio: "Leading creative direction and visual storytelling to enhance ACM's communication and branding.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "prisha@acm.org" },
  },
  {
    id: 15,
    name: "Vaibhav Gala",
    role: "VCP Publicity",
    category: "core",
    bio: "Amplifying ACM's message and achievements through strategic publicity and media relations.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "vaibhav@acm.org" },
  },
  {
    id: 16,
    name: "Siaa Shah",
    role: "VCP Publicity",
    category: "core",
    bio: "Building public awareness and promoting ACM's initiatives across various platforms and channels.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "siaa@acm.org" },
  },
  {
    id: 17,
    name: "Vraj Birje",
    role: "VCP Infotech",
    category: "core",
    bio: "Managing IT infrastructure and developing technological solutions to support ACM's digital presence.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "vraj@acm.org" },
  },
  {
    id: 18,
    name: "Kimaya Chavan",
    role: "VCP Technical",
    category: "core",
    bio: "Leading technical initiatives and fostering innovation in software development and emerging technologies.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "kimaya@acm.org" },
  },
  {
    id: 19,
    name: "Ishaan Seth",
    role: "VCP Research",
    category: "core",
    bio: "Promoting research excellence and facilitating academic collaboration in computing sciences.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "ishaan@acm.org" },
  },
  {
    id: 20,
    name: "Ankur",
    role: "VCP Research",
    category: "core",
    bio: "Advancing research initiatives and supporting students in their academic and research pursuits.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "ankur@acm.org" },
  },
  {
    id: 21,
    name: "Pearl Mody",
    role: "VCP Research",
    category: "core",
    bio: "Fostering a culture of innovation and research excellence within the ACM community.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "pearl@acm.org" },
  },
  {
    id: 22,
    name: "Akarshit",
    role: "VCP Research",
    category: "core",
    bio: "Leading research projects and connecting students with opportunities in cutting-edge computing research.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "akarshit@acm.org" },
  },
  {
    id: 23,
    name: "Rishit Kar",
    role: "VCP Research",
    category: "core",
    bio: "Driving research initiatives and promoting academic excellence in computer science and technology.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "rishit@acm.org" },
  },
  {
    id: 24,
    name: "Abdul Husain Dahodwala",
    role: "VCP Operations",
    category: "core",
    bio: "Ensuring seamless operations and coordinating logistics for all ACM activities and programs.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "abdul@acm.org" },
  },
  {
    id: 25,
    name: "abc",
    role: "Former Chairperson",
    category: "alumni",
    bio: "Led ACM chapter for 1 year. Currently working as Senior Software Engineer.",
    image: "/img.jpg",
    social: { github: "#", linkedin: "#", email: "rajesh@acm.org" },
  },
]

interface TeamGridProps {
  selectedFilter: string
}

export default function TeamGrid({ selectedFilter }: TeamGridProps) {
  // Filter logic based on selected filter
  const filteredMembers = teamMembers.filter((member) => {
    if (selectedFilter === "all") return true
    if (selectedFilter === "core") return member.category === "upper core"
    if (selectedFilter === "alumni") return member.category === "alumni"
    return true
  })

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredMembers.map((member) => (
        <motion.div
          key={member.id}
          variants={itemVariants}
          className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300"
        >
          <div className="relative h-64 overflow-hidden bg-muted">
            <Image
              src={member.image || "/img.jpg"}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-accent text-sm font-semibold mb-3">{member.role}</p>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{member.bio}</p>

            <div className="flex gap-3">
              <a
                href={member.social.github}
                className="p-2 rounded bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={member.social.linkedin}
                className="p-2 rounded bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${member.social.email}`}
                className="p-2 rounded bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}