'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, fadeInUp } from '@/lib/animations'
import { BookOpen } from 'lucide-react'

const educations = [
  {
    title: 'Higher Secondary Certificate (H.S.C)',
    school: 'Narayanganj Technical School & College',
    group: 'Science',
    result: '4.50 (Out of 5)',
    year: '2021',
  },
  {
    title: 'Secondary School Certificate (S.S.C)',
    school: 'Narayanganj Technical School & College',
    group: 'Science',
    result: '3.86 (Out of 5)',
    year: '2019',
  },
]

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10 md:mb-12"
        >
          <BookOpen size={24} className="text-accent flex-shrink-0 md:w-7 md:h-7" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">EDUCATION</h2>
          <div className="flex-1 h-1 bg-accent ml-3" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-lg p-4 md:p-6 border border-border hover:border-accent transition-all duration-300"
            >
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-3">{edu.title}</h3>
              <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <p className="text-muted-foreground">
                  <span className="text-accent font-semibold">School:</span> {edu.school}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-accent font-semibold">Group:</span> {edu.group}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-accent font-semibold">Result:</span> {edu.result}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-accent font-semibold">Passing Year:</span> {edu.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
