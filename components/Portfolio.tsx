'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Today's Special Camera",
    category: 'Social Media Design',
    image:'/portfolio-2.jpeg',
    color: 'from-yellow-600 to-orange-600',
  },
  {
    id: 2,
    title: 'Explore The World',
    category: 'Travel Campaign',
    image:'/portfolio-5.jpeg',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 3,
    title: '100% Organic Product',
    category: 'Product Campaign',
    image:'/portfolio-3.jpeg',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 4,
    title: 'Beautiful',
    category: 'Product Campaign',
    image:'/portfolio-4.jpeg',
    color: 'from-gray-700 to-black',
  }, 
  {
    id: 5,
    title: 'Digital Calculation',
    category: 'Social Media Design',
    image:'/portfolio-1.jpeg',
    color: 'from-gray-700 to-black',
  }, 
  {
    id: 6,
    title: 'Design Theme',
    category: 'Theme Design',
    image:'/portfolio-6.jpeg',
    color: 'from-gray-700 to-black',
  }, 
  {
    id: 7,
    title: 'Hotel Manegment',
    category: 'Social Media Design',
    image:'/portfolio-7.jfif',
    color: 'from-gray-700 to-black',
  }, 
  {
    id: 8,
    title: "Safari List",
    category: 'Social Media Design',
    image:'/portfolio-8.jfif',
    color: 'from-yellow-600 to-orange-600',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">PORTFOLIO HIGHLIGHTS</h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12"
        >
          {projects.map((project) => (
  <motion.div
    key={project.id}
    variants={itemVariants}
    whileHover={{ y: -8 }}
    className="group cursor-pointer"
  >
    <div className="relative rounded-lg h-48 sm:h-56 md:h-64 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center text-center p-4">
        
        <h3 className="text-white font-bold text-sm md:text-lg mb-1 md:mb-2 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4">
          {project.category}
        </p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ExternalLink
            size={20}
            className="text-accent md:w-6 md:h-6"
          />
        </motion.div>
      </div>
    </div>
  </motion.div>
))}
          {/* {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${project.color} rounded-lg h-48 sm:h-56 md:h-64 overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1 md:mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4">{project.category}</p>
                  <motion.div whileHover={{ scale: 1.1 }} className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} className="text-accent md:w-6 md:h-6" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))} */}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-2 md:py-3 bg-background border-2 border-foreground text-foreground font-bold text-sm md:text-base rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View More Works
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
