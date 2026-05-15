'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Twitter, Sparkles } from 'lucide-react'

const socials = [
  { icon: Github,   href: 'https://github.com/',   label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com/',  label: 'Twitter' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-16 lg:py-0"
      style={{ background: 'var(--bg)' }}
    >
      {/* ── Background Subtle Accents ──────────────────── */}
      <div className="absolute inset-0 z-0 bg-grid opacity-[0.05] pointer-events-none" />

      <div className="container-main relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* ── Left Content ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-accent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-text-muted">
                Full-Stack Developer
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
                Building Robust <br />
                <span className="gradient-text">Web Solutions</span>
              </h1>
              
              <p className="text-lg leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
                Hi, I&apos;m <strong className="text-text-primary">Betelhem Ashenafi</strong>. I engineer scalable 
                applications with a focus on clean code and performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <a href="#projects" className="btn-primary !px-8 !py-4 text-sm shadow-accent">
                See My Work
                <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" download className="btn-outline !px-8 !py-4 text-sm">
                Download CV
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 pt-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-muted hover:text-accent transition-all hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right Content: The Visual Hook ────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end pr-8"
          >
            <div className="relative">
              
              {/* ── The Hook ────────────────────────────────── */}
              {/* This is the large semi-transparent hook from the user's reference image */}
              <div 
                className="absolute -top-10 -left-10 w-40 h-40 border-t-[20px] border-l-[20px] opacity-[0.08] pointer-events-none" 
                style={{ 
                  borderColor: 'var(--accent)', 
                  borderTopLeftRadius: '60px'
                }} 
              />
              
              {/* Image Container */}
              <div className="relative z-10 w-full max-w-[280px] md:max-w-[340px] rounded-[40px] overflow-hidden shadow-2xl bg-white/5">
                <img
                  src="/profile.png"
                  alt="Betelhem Ashenafi"
                  className="w-full h-auto object-contain block transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-16 bg-text-primary" />
      </motion.div>
    </section>
  )
}
