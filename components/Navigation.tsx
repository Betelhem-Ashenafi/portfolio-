'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Briefcase, Mail, Code2, Menu, X, Download } from 'lucide-react'

const navLinks = [
  { name: 'Home',     href: '#home',     icon: Home },
  { name: 'About',    href: '#about',    icon: User },
  { name: 'Skills',   href: '#skills',   icon: Code2 },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Contact',  href: '#contact',  icon: Mail },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.slice(1))
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ── Desktop Sidebar ─────────────────────────────────── */}
      <nav className="nav-sidebar hidden lg:flex">
        {/* Logo */}
        <div className="mb-8">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{ background: 'var(--accent)' }}
          >
            B
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col items-center gap-1 pt-2">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.name}
                href={link.href}
                title={link.name}
                className={`nav-link-pill group ${isActive ? 'active' : ''}`}
                onClick={() => setActiveSection(link.href.slice(1))}
              >
                <Icon size={20} />
                <span className="nav-label">{link.name}</span>
              </a>
            )
          })}
        </div>

        {/* CV Button */}
        <a
          href="/resume.pdf"
          download
          className="btn-primary mt-auto !px-3 !py-3"
          title="Download CV"
          style={{ borderRadius: '50%', padding: '0.75rem' }}
        >
          <Download size={18} />
        </a>
      </nav>

      {/* ── Mobile Top Bar ──────────────────────────────────── */}
      <header
        className="nav-mobile lg:hidden"
        style={{
          boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold"
          style={{ background: 'var(--accent)' }}
        >
          B
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg transition-all"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* ── Mobile Menu Drawer ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 z-50 lg:hidden"
              style={{
                background: 'var(--bg-card)',
                borderLeft: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full p-6">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="self-end p-2 rounded-lg mb-8"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <X size={22} />
                </button>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const Icon = link.icon
                    const isActive = activeSection === link.href.slice(1)
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all"
                        style={{
                          background: isActive ? 'var(--nav-blue)' : 'var(--bg-muted)',
                          color: isActive ? '#fff' : 'var(--text-secondary)',
                        }}
                      >
                        <Icon size={18} />
                        {link.name}
                      </a>
                    )
                  })}
                </nav>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary mt-auto justify-center"
                >
                  <Download size={16} /> Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
