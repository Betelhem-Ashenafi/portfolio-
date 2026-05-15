'use client'

import { motion } from 'framer-motion'
import { Code, Lightbulb, Rocket, GraduationCap, Calendar } from 'lucide-react'

const timeline = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    org: 'Freelance / Remote',
    desc: 'Building end-to-end web apps for international clients using Next.js, Node.js, and cloud platforms.',
  },
  {
    year: '2023',
    title: 'A2SV Program Participant',
    org: 'Africa to Silicon Valley',
    desc: 'Intensive DSA training with Java and Python, solving 300+ algorithmic problems at FAANG level.',
  },
  {
    year: '2022',
    title: 'Junior Developer',
    org: 'Local Startup, Bahir Dar',
    desc: 'Built React-based dashboards and RESTful APIs used by 500+ daily active users.',
  },
]

const values = [
  {
    icon: Code,
    title: 'Clean Code',
    desc: 'Readable, maintainable, and well-structured code is a core part of every project I deliver.',
    color: 'var(--accent)',
  },
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    desc: 'I approach every challenge with creative thinking to find the most elegant and efficient solution.',
    color: 'var(--nav-blue)',
  },
  {
    icon: Rocket,
    title: 'Performance First',
    desc: "Speed and optimization are never afterthoughts — they're baked into the architecture from day one.",
    color: '#16a34a',
  },
]

export default function About() {
  return (
    <section id="about" className="section-wrapper" style={{ background: 'var(--bg)' }}>
      <div className="container-main">

        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <div className="absolute -left-10 top-0 text-[120px] font-black opacity-[0.03] select-none pointer-events-none hidden lg:block">
            ABOUT
          </div>
          <p className="section-label">Professional Bio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: 'var(--text-primary)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full" style={{ background: 'var(--accent)' }} />
        </motion.div>

        {/* ── Two-column layout ──────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m a <strong style={{ color: 'var(--accent)' }}>Full-Stack Developer</strong> and Software
              Engineer dedicated to building innovative, user-focused digital solutions.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              My journey started with a passion for problem-solving and has grown into a career building
              scalable applications across industries. I&apos;m always eager to explore new technologies and
              deliver impactful projects that bridge creativity with functionality.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              With a strong foundation in algorithms, system design, and modern web frameworks, I adapt
              quickly to any stack and deliver production-ready solutions that exceed expectations.
            </p>

            {/* Quick facts */}
            <div
              className="card p-6 space-y-3"
              style={{ borderLeft: '4px solid var(--accent)' }}
            >
              {[
                { label: 'Name',     value: 'Betelhem Ashenafi' },
                { label: 'Location', value: 'Bahir Dar, Ethiopia' },
                { label: 'Email',    value: 'hello@betelhem.dev' },
                { label: 'Status',   value: 'Open to Opportunities ✓' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 text-sm">
                  <span className="font-semibold w-20 shrink-0" style={{ color: 'var(--accent)' }}>{label}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{value}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-flex">
              Get In Touch
            </a>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-0"
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} style={{ color: 'var(--accent)' }} />
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Experience &amp; Education</h3>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: 'var(--border)' }}
              />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-6 relative"
                  >
                    {/* Dot */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
                      style={{ background: 'var(--bg-card)', border: '2px solid var(--accent)' }}
                    >
                      <Calendar size={14} style={{ color: 'var(--accent)' }} />
                    </div>

                    {/* Content */}
                    <div className="card p-5 flex-1 hover:border-[var(--accent)]">
                      <span
                        className="inline-block text-xs font-bold px-2 py-0.5 rounded mb-2"
                        style={{ background: 'var(--accent)', color: '#fff' }}
                      >
                        {item.year}
                      </span>
                      <h4 className="text-base font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h4>
                      <p className="text-sm font-medium mb-2" style={{ color: 'var(--nav-blue)' }}>
                        {item.org}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Values / Core principles ───────────────────── */}
        <div className="divider" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110"
                  style={{ background: `${v.color}15`, color: v.color }}
                >
                  <Icon size={26} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {v.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
