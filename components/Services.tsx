'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Layout, Pen, MessageSquare, TrendingUp, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Page & Website Management',
    description: 'Manage Facebook pages and websites professionally to ensure brand consistency and growth.',
  },
  {
    icon: Pen,
    title: 'Content Creation',
    description: 'Create trendy, engaging and high-quality content that connects with your target audience.',
  },
  {
    icon: MessageSquare,
    title: 'Comment & Message Management',
    description: 'Handle comments and messages quickly and professionally to build strong customer trust.',
  },
  {
    icon: TrendingUp,
    title: 'Trend Research',
    description: 'Research social media trends and market insights to keep your brand ahead of competitors.',
  },
  {
    icon: BarChart3,
    title: 'Social Media Strategy',
    description: 'Plan and implement effective strategies to reach, engagement and conversions.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">WHAT I DO</h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)' }}
                className="bg-background rounded-lg p-4 md:p-6 text-center border border-border hover:border-accent transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 md:w-16 md:h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors"
                >
                  <Icon size={28} className="text-accent md:w-8 md:h-8" />
                </motion.div>
                <h3 className="text-sm md:text-lg font-bold text-foreground mb-2 md:mb-3">{service.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
