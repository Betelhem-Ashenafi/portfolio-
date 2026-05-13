'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'A2SV - DSA Program',
    description: 'Python and Java problem solving and algorithm training platform with automated testing and progress tracking.',
    tags: ['Python', 'Java', 'Algorithms'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Nexus Analytics',
    description: 'Real-time data visualization dashboard for distributed systems. Processing millions of events per hour.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
              FEATURED <br />
              <span className="gradient-text">WORKS.</span>
            </h2>
          </motion.div>
          <p className="mono text-[10px] font-bold text-white/20 tracking-[0.5em] uppercase pb-4">Selected Projects / 2024</p>
        </div>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 group relative">
                 <div className="hiwot-card !p-0 overflow-hidden bg-zinc-900 aspect-video lg:aspect-[16/9]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                 </div>
                 
                 {/* Floating Label */}
                 <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 p-8 glass-card rounded-3xl hidden lg:block translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ArrowUpRight className="text-cyan-400" size={48} />
                 </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                   <p className="mono text-xs font-bold text-cyan-400">0{idx + 1} / Project</p>
                   <h3 className="text-4xl lg:text-5xl font-black text-white">{project.title}</h3>
                </div>
                
                <p className="text-xl text-white/40 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="mono text-[10px] font-bold px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-6">
                  <a href={project.demo} className="hiwot-button !px-8">Case Study</a>
                  <a href={project.github} className="hiwot-button-outline !px-8">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}







