'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    name: 'Frontend',
    color: 'var(--accent)',
    skills: [
      { name: 'React / Next.js',         level: 92 },
      { name: 'JavaScript / TypeScript',  level: 90 },
      { name: 'Tailwind CSS / UI Design', level: 95 },
      { name: 'HTML5 / CSS3',             level: 95 },
    ],
  },
  {
    name: 'Backend',
    color: 'var(--nav-blue)',
    skills: [
      { name: 'Node.js / Express',   level: 85 },
      { name: 'Python / Django',     level: 78 },
      { name: 'REST API Design',     level: 90 },
      { name: 'GraphQL',             level: 70 },
    ],
  },
  {
    name: 'Database & Cloud',
    color: '#16a34a',
    skills: [
      { name: 'PostgreSQL / MySQL',  level: 82 },
      { name: 'MongoDB',             level: 80 },
      { name: 'AWS / Vercel',        level: 75 },
      { name: 'Docker / CI/CD',      level: 70 },
    ],
  },
  {
    name: 'AI & Tools',
    color: '#9333ea',
    skills: [
      { name: 'OpenAI / AI APIs',    level: 85 },
      { name: 'Git / GitHub',        level: 95 },
      { name: 'Algorithms & DSA',    level: 88 },
      { name: 'Figma / Prototyping', level: 80 },
    ],
  },
]

const techBadges = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Figma',
  'Git', 'Tailwind', 'GraphQL', 'Express', 'Django',
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section
      id="skills"
      className="section-wrapper"
      style={{ background: 'var(--bg-muted)' }}
    >
      <div className="container-main">

        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-muted)' }}>
            I build with modern, battle-tested tools to ensure scalability, security, and an excellent developer experience.
          </p>
          <div className="w-16 h-1 rounded-full mt-4" style={{ background: 'var(--accent)' }} />
        </motion.div>

        {/* ── Category Tabs ──────────────────────────────── */}
        <div className="flex flex-wrap gap-3 mb-10">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: activeTab === i ? cat.color : 'var(--bg-card)',
                color: activeTab === i ? '#fff' : 'var(--text-secondary)',
                border: `1.5px solid ${activeTab === i ? cat.color : 'var(--border)'}`,
                boxShadow: activeTab === i ? `0 4px 15px ${cat.color}40` : 'none',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ── Skill Bars ─────────────────────────────────── */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card p-8 mb-14 relative overflow-hidden group"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity">
            <pre className="text-[10px] font-mono leading-tight">
              {`{
  "expertise": "${skillCategories[activeTab].name}",
  "level": "Senior",
  "status": "Verified"
}`}
            </pre>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {skillCategories[activeTab].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {skill.name}
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: skillCategories[activeTab].color }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    style={{
                      background: `linear-gradient(90deg, ${skillCategories[activeTab].color}, ${skillCategories[activeTab].color}cc)`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Tech badges ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold mb-6 text-center" style={{ color: 'var(--text-muted)' }}>
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="px-4 py-2 text-sm font-semibold rounded-full cursor-default transition-all"
                style={{
                  background: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  border: '1.5px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
