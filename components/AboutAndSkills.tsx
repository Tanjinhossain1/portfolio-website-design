'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, fadeInUp } from '@/lib/animations'
import { User, BarChart3 } from 'lucide-react'

const skills = [
  { name: 'Social Media Management', percentage: 95 },
  { name: 'Content Creation', percentage: 90 },
  { name: 'Page & Website Management', percentage: 90 },
  { name: 'Community Engagement', percentage: 90 },
  { name: 'Trend Research & Analysis', percentage: 85 },
  { name: 'Canva Design', percentage: 90 },
  { name: 'Video Editing', percentage: 85 },
]

export function AboutAndSkills() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* About Me */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <User size={24} className="text-accent flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">ABOUT ME</h2>
              <div className="flex-1 h-1 bg-accent ml-3" />
            </div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm md:text-base text-muted-foreground leading-relaxed"
            >
              I am a dedicated and creative Social Media Manager with expertise in page & website management, content creation, audience engagement, and market trend research. I help businesses grow their brand presence through strategic content and effective social media management.
            </motion.p>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <BarChart3 size={24} className="text-accent flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">MY SKILLS</h2>
              <div className="flex-1 h-1 bg-accent ml-3" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 md:space-y-4"
            >
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} className="space-y-1.5">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs md:text-sm font-semibold text-foreground">{skill.name}</span>
                    <span className="text-accent font-bold text-xs md:text-sm flex-shrink-0">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 md:h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
