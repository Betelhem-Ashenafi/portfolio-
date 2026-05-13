'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Mail, Code2 } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {navLinks.map((link) => {
        const Icon = link.icon
        const isActive = activeSection === link.href.slice(1)
        
        return (
          <a
            key={link.name}
            href={link.href}
            style={{ background: isActive ? 'var(--primary-gradient)' : '' }}
            className={`group relative p-4 rounded-full transition-all duration-300 ${
              isActive 
                ? 'text-white shadow-lg shadow-primary/20' 
                : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon size={20} />
            
            {/* Tooltip */}
            <span className="absolute left-16 px-4 py-2 bg-zinc-900 text-white mono text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 tracking-widest">
              {link.name.toUpperCase()}
            </span>
          </a>
        )

      })}
    </nav>
  )
}



