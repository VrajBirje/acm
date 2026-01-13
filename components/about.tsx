"use client"

import { motion } from "framer-motion"

const aboutItems = [
  {
    title: "Our Mission",
    description:
      "To promote computing excellence and advance the field through education, research, and professional development.",
    icon: "🎯",
  },
  {
    title: "Our Vision",
    description:
      "To build a thriving community where computing professionals collaborate, innovate, and create positive impact.",
    icon: "🌟",
  },
  {
    title: "Our Values",
    description: "Integrity, collaboration, accessibility, and continuous learning drive everything we do.",
    icon: "💡",
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About ACM</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Association for Computing Machinery is the world's largest computing society.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-lg p-8 border border-border hover:border-accent transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
