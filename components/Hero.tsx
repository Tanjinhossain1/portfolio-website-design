'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Globe, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'
import Image from 'next/image'

export function Hero() {
  const socialLinks = [
    { icon: <Facebook size={18} /> , label: 'Facebook', href: 'https://www.facebook.com/itsyourmahabub' },
    { icon: <Instagram size={18} /> , label: 'Instagram', href: '#' },
    { icon: <Linkedin size={18} /> , label: 'LinkedIn', href: '#' },
    { icon: <Youtube  size={18} /> , label: 'YouTube', href: '#' },
  ]

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-28 lg:pb-12 px-4 md:px-8 flex items-center min-h-fit">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Left Side - Profile Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center md:justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-82 lg:h-82"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-full opacity-20 blur-3xl" />
            <div className="relative w-full h-full rounded-full border-4 border-accent overflow-hidden bg-card">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <Image src={"mahabub.jpeg"} alt='mahabub' width={800}
                  height={600}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // className=""
        >
          {/* Greeting */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <p className="text-accent text-lg font-semibold">Hello, I&apos;m</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="block"
              >
                MAHABUB
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="block"
              >
                HOSSAIN ARAFAT
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-accent text-2xl md:text-3xl font-italic"
            >
              Social Media Manager
            </motion.p>
          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Creative and result-driven Social Media Manager with a passion for building strong brand presence, engaging content, and growing online communities.
          </motion.p>
          </motion.div>


        
        </motion.div>
          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className=" py-4 "
          >
            <div className="flex items-center gap-3 mb-3 text-foreground hover:text-accent transition-colors">
              <MapPin size={18} className="text-accent flex-shrink-0" />
              <span className="text-xs md:text-sm ">Narayanganj, Bangladesh</span>
            </div>
            <div className="flex mb-3 items-center gap-3 text-foreground hover:text-accent transition-colors">
              <Phone size={18} className="text-accent flex-shrink-0" />
              <a href="tel:+880-1979755714" className="text-xs md:text-sm hover:underline">
                01979755714
              </a>
            </div>
            <div className="flex mb-3 items-center gap-3 text-foreground hover:text-accent transition-colors">
              <Mail size={18} className="text-accent flex-shrink-0" />
              <a href="mailto:workwithmha@gmail.com" className="text-xs md:text-sm hover:underline">
                workwithmha@gmail.com
              </a>
            </div>
            <div className="flex mb-3 items-center gap-3 text-foreground hover:text-accent transition-colors">
              <Globe size={18} className="text-accent flex-shrink-0" />
              <span className="text-xs md:text-sm">Available for Work</span>
            </div>
          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 pt-6"
          > 
            {socialLinks.slice(0,4).map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300"
                aria-label={link.label}
                target='_blank'
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          </motion.div>

      </div>
    </section>
  )
}
