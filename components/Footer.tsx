'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'

export function Footer() {
  const socialLinks = [
    { icon: 'f', label: 'Facebook', href: '#' },
    { icon: 'i', label: 'Instagram', href: '#' },
    { icon: 'in', label: 'LinkedIn', href: '#' },
    { icon: 'yt', label: 'YouTube', href: '#' },
  ]

  return (
    <footer className="bg-background border-t border-border py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8"
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-4">About Me</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Creative Social Media Manager dedicated to building strong brand presence and engaging communities.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-4">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Experience'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-4">FOLLOW ME</h3>
            <div className="flex gap-2 md:gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.icon}
                  href={link.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300 font-bold text-xs md:text-sm"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-border pt-6 md:pt-8 text-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2024 Mahabub Hossain Arafat. All rights reserved. Designed with ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
