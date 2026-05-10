'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, fadeInUp } from '@/lib/animations'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">CONTACT ME</h2>

            <div className="space-y-4 md:space-y-6">
              <motion.a
                href="tel:+880-1979755714"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 md:gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors">
                  <Phone size={20} className="text-accent md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-sm md:text-base text-foreground font-semibold">Phone</p>
                  <p className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors">01979755714</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:workwithmha@gmail.com"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 md:gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors">
                  <Mail size={20} className="text-accent md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-sm md:text-base text-foreground font-semibold">Email</p>
                  <p className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors">workwithmha@gmail.com</p>
                </div>
              </motion.a>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3 md:gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors">
                  <MapPin size={20} className="text-accent md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-sm md:text-base text-foreground font-semibold">Address</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Charmoli office, Godhail, Siddhiganj, Narayanganj-1400</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form / CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">LET&apos;S WORK TOGETHER</h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                I help businesses grow online with creative content, strong engagement and smart strategies. Let&apos;s discuss how I can help your brand!
              </p>
            </div>

            <motion.a
              href="mailto:workwithmha@gmail.com"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-accent text-background font-bold text-sm md:text-base rounded-lg hover:bg-secondary transition-all duration-300 flex items-center gap-2 w-fit"
            >
              <Send size={18} />
              HIRE ME
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
