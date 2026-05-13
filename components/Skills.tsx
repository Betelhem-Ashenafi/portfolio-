'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React / Next.js', level: 90, category: 'Frontend' },
  { name: 'JavaScript / TypeScript', level: 90, category: 'Frontend' },
  { name: 'MongoDB / Postgres', level: 80, category: 'Database' },
  { name: 'AI API Integration', level: 85, category: 'AI' },
  { name: 'Tailwind / UI Design', level: 95, category: 'Design' },
  { name: 'Node.js / Python', level: 80, category: 'Backend' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
              TECH <br />
              <span className="gradient-text">STACK.</span>
            </h2>
            <p className="text-xl text-white/40 max-w-md leading-relaxed">
               I build with the latest tools to ensure scalability, 
               security, and a seamless developer experience.
            </p>
          </motion.div>
          
          <div className="hidden lg:block pb-4">
             <div className="w-full h-px bg-white/10" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6 group"
            >
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <p className="mono text-[10px] font-bold text-[#E31E24] uppercase tracking-widest">{skill.category}</p>
                   <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
                </div>
                <span className="mono text-lg font-bold text-cyan-400">{skill.level}%</span>
              </div>
              
              <div className="flex gap-1">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.1 }}
                    whileInView={{ opacity: i < skill.level / 5 ? 1 : 0.1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 + idx * 0.1 }}
                    className={`h-2 flex-grow rounded-sm ${
                      i < skill.level / 5 
                        ? 'bg-gradient-to-r from-[#E31E24] to-[#FF2E95]' 
                        : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}







