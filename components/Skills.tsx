'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, fadeInUp } from '@/lib/animations'
import { BarChart3 } from 'lucide-react'

const skills = [
  { name: 'Social Media Management', percentage: 95 },
  { name: 'Content Creation', percentage: 90 },
  { name: 'Page & Website Management', percentage: 90 },
  { name: 'Community Engagement', percentage: 90 },
  { name: 'Trend Research & Analysis', percentage: 85 },
  { name: 'Canva Design', percentage: 90 },
  { name: 'Video Editing', percentage: 85 },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <BarChart3 size={28} className="text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">MY SKILLS</h2>
          <div className="flex-1 h-1 bg-accent ml-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-semibold">{skill.name}</span>
                <span className="text-accent font-bold">{skill.percentage}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
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
      </div>
    </section>
  )
}
