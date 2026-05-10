'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, fadeInUp } from '@/lib/animations'
import { User } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <User size={28} className="text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">ABOUT ME</h2>
          <div className="flex-1 h-1 bg-accent ml-4" />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          I am a dedicated and creative Social Media Manager with expertise in page & website management, content creation, audience engagement, and market trend research. I help businesses grow their brand presence through strategic content and effective social media management.
        </motion.p>
      </div>
    </section>
  )
}
