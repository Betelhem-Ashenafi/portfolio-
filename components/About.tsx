'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Header Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-48">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                ABOUT <br />
                <span className="gradient-text">ME.</span>
              </h2>
              <div className="w-24 h-2 bg-cyan-400 rounded-full" />
              <p className="mono text-[10px] font-bold text-white/20 tracking-[0.4em] uppercase">Biography / 01</p>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-8 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              <p className="text-3xl md:text-4xl font-medium text-white/90 leading-tight">
                I'm a full-stack developer and software engineer with over 3 years of experience 
                in building innovative and user-focused digital solutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                 <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#E31E24]">The Philosophy</h4>
                    <p className="text-lg text-white/60 leading-relaxed">
                       I'm always eager to explore new technologies and deliver impactful projects 
                       that bridge creativity and functionality.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-xl font-bold text-cyan-400">The Mission</h4>
                    <p className="text-lg text-white/60 leading-relaxed">
                       With a strong foundation in programming, problem-solving, and technical nuances, 
                       I adapt to any framework to meet project requirements.
                    </p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}





