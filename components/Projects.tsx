'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    title: 'A2SV DSA Platform',
    category: 'Algorithm Training',
    description:
      'A comprehensive coding challenge platform built for the Africa to Silicon Valley program. Features automated test cases, progress tracking, and daily problem recommendations.',
    tags: ['Python', 'Java', 'Algorithms', 'Data Structures'],
    github: 'https://github.com/',
    demo: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500',
    featured: true,
    stats: { stars: 42, lang: 'Python' },
  },
  {
    title: 'Nexus Analytics Dashboard',
    category: 'Data Visualization',
    description:
      'Real-time analytics and data visualization dashboard for distributed systems. Processes millions of events per hour with D3.js charts and WebSocket live feeds.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/',
    demo: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800&h=500',
    featured: true,
    stats: { stars: 28, lang: 'TypeScript' },
  },
  {
    title: 'Meba Logistics Platform',
    category: 'Full-Stack Web App',
    description:
      'End-to-end logistics management system with admin dashboard, real-time shipment tracking, role-based authentication, and automated reporting.',
    tags: ['Next.js', 'Node.js', 'MySQL', 'Sequelize'],
    github: 'https://github.com/',
    demo: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=500',
    featured: false,
    stats: { stars: 15, lang: 'TypeScript' },
  },
  {
    title: 'AI Content Generator',
    category: 'AI Integration',
    description:
      'SaaS application integrating OpenAI GPT-4 for automated content generation, SEO optimization, and multi-language translation with usage analytics.',
    tags: ['React', 'OpenAI API', 'Stripe', 'MongoDB'],
    github: 'https://github.com/',
    demo: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800&h=500',
    featured: false,
    stats: { stars: 34, lang: 'JavaScript' },
  },
]

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others   = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-wrapper" style={{ background: 'var(--bg)' }}>
      <div className="container-main">

        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label">My Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-muted)' }}>
            A selection of projects I&apos;ve built — from SaaS platforms to open-source tools. Each one crafted with care and a focus on quality.
          </p>
          <div className="w-16 h-1 rounded-full mt-4" style={{ background: 'var(--accent)' }} />
        </motion.div>

        {/* ── Featured Projects ──────────────────────────── */}
        <div className="space-y-16 mb-20">
          {featured.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-2xl group"
                style={{ direction: 'ltr' }}
              >
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4"
                  style={{ background: 'rgba(139,0,0,0.85)' }}
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ color: 'var(--accent)' }}
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ color: 'var(--accent)' }}
                  >
                    <Github size={20} />
                  </a>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* category label */}
                <div
                  className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'var(--accent)' }}
                >
                  {project.category}
                </div>
              </div>

              {/* Text */}
              <div className="space-y-5" style={{ direction: 'ltr' }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
                    0{idx + 1} — Featured Project
                  </p>
                  <h3 className="text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                </div>

                <div className="card p-5">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                    <Github size={14} /> Code
                  </a>
                  <div className="flex items-center gap-1 text-sm ml-auto" style={{ color: 'var(--text-muted)' }}>
                    <Star size={14} style={{ color: '#f59e0b' }} />
                    {project.stats.stars}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Other Projects Grid ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card overflow-hidden group"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold text-white"
                    style={{ background: 'var(--accent)' }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h4>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: 'var(--bg-muted)', color: 'var(--text-secondary)' }}
                      >
                        <Github size={14} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: 'var(--bg-muted)', color: 'var(--text-secondary)' }}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View all on GitHub */}
        <div className="text-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
