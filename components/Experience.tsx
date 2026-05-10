'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Briefcase, TrendingUp, Users, Coffee } from 'lucide-react'

const experiences = [
  {
    icon: Briefcase,
    title: 'Marketing Manager & Graphic Designer, Video Editor',
    company: 'Pineapple Exclusive',
    period: '2023 - Present',
    description: 'Manage social media platforms, create content, design posts and edit videos to promote brand awareness and sales.',
  },
  {
    icon: TrendingUp,
    title: 'Sales Executive',
    company: 'Unique Bangladesh',
    period: '2022 - 2023',
    description: 'Promoted projects, handled client communication and supported digital marketing activities.',
  },
  {
    icon: Users,
    title: 'Supervisor & Supervision',
    company: 'KCP-3 Print LTD',
    period: '2021 - 2022',
    description: 'Supervised team activities and ensured smooth workflow in printing and production departments.',
  },
  {
    icon: Coffee,
    title: 'Outlet Manager',
    company: 'The Grind Coffee and Creamer',
    period: '2020 - 2021',
    description: 'Managed daily operations, customer service and social media presence of the outlet.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">EXPERIENCE</h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-secondary" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.company}
                  variants={itemVariants}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
                >
                  {/* Left Content (Desktop Only) */}
                  {isEven && (
                    <div className="hidden md:block text-right pr-6 lg:pr-8">
                      <h3 className="text-sm lg:text-lg font-bold text-foreground mb-1 md:mb-2">{exp.title}</h3>
                      <p className="text-accent font-semibold text-xs md:text-sm mb-1">{exp.company}</p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{exp.period}</p>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  )}

                  {/* Timeline Icon */}
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-background rounded-full border-4 border-accent flex items-center justify-center shadow-lg flex-shrink-0"
                    >
                      <Icon size={24} className="text-accent md:w-7 md:h-7" />
                    </motion.div>
                  </div>

                  {/* Right Content (Desktop Only) */}
                  {!isEven && (
                    <div className="hidden md:block pl-6 lg:pl-8">
                      <h3 className="text-sm lg:text-lg font-bold text-foreground mb-1 md:mb-2">{exp.title}</h3>
                      <p className="text-accent font-semibold text-xs md:text-sm mb-1">{exp.company}</p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{exp.period}</p>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  )}

                  {/* Mobile View */}
                  <div className="md:hidden col-span-1 -mt-2">
                    <h3 className="text-sm font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-accent font-semibold text-xs mb-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
