'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-cyan-400' },
                { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-violet-400' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-violet-950 to-fuchsia-950 dark:from-black dark:via-gray-900 dark:to-black text-gray-300 py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg font-bold gradient-text mb-2">Portfolio</p>
            <p className="text-sm text-gray-400">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-colors relative group`}
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-pink-500 animate-pulse" /> using Next.js, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

