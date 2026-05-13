'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, MousePointer2 } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 lg:pt-0"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-10 flex items-center gap-4">
              <span className="mono text-[10px] font-bold text-cyan-400 tracking-[0.5em] uppercase px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
                Engineering Studio
              </span>
            </div>
            
            <h2 className="text-white/40 text-xl font-bold mb-6 mono tracking-tighter">
              / Betelhem Ashenafi <span className="text-cyan-400">_</span>
            </h2>
            
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tight leading-[0.95] mb-10 text-white">
              CRAFTING <br />
              <span className="gradient-text">DIGITAL</span> <br />
              EXPERIENCES.
            </h1>
            
            <p className="max-w-xl text-xl text-muted-foreground leading-relaxed mb-12 font-medium">
              Architecting high-performance systems and immersive user interfaces 
              with a focus on scalability and elegant code.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="hiwot-button flex items-center gap-3 group">
                Let's Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="hiwot-button-outline flex items-center gap-3">
                <Download size={18} /> Resume
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-4">
              {['Next.js 14', 'TypeScript', 'Cloud Native'].map((badge) => (
                <span key={badge} className="mono px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-white/40 hover:text-white/80 transition-colors cursor-default">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-1000"
          >
            {/* Featured Project Card */}
            <div className="hiwot-card overflow-hidden !p-0 border-white/10 shadow-[0_32px_64px_-16px_rgba(227,30,36,0.2)] bg-black/40">
              {/* Card Header */}
              <div className="bg-white/5 px-8 py-5 flex items-center justify-between border-b border-white/10">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#E31E24]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
                  <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
                </div>
                <div className="mono text-[10px] font-bold text-white/20 tracking-[0.3em] uppercase">System.v1</div>
              </div>
              
              {/* Content */}
              <div className="p-4 aspect-square lg:aspect-[4/5] bg-zinc-950 relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" 
                  alt="Abstract Art" 
                  className="w-full h-full object-cover rounded-2xl opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay UI */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <h3 className="text-3xl font-black text-white leading-none">CORE ARCHITECTURE</h3>
                    <p className="text-white/40 mono text-xs tracking-wider">SECURE / SCALABLE / MODERN</p>
                    <div className="pt-6 flex gap-4">
                       <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-2/3 h-full bg-[#E31E24]" />
                       </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Element */}
                <div className="absolute top-8 right-8 p-4 glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                   <MousePointer2 className="text-cyan-400" size={24} />
                </div>
              </div>
            </div>
            
            {/* Decorative Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E31E24]/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-16 right-16 hidden lg:flex flex-col gap-8 items-end opacity-20">
        <div className="flex gap-4 mono text-[10px] font-bold tracking-[0.5em] rotate-90 origin-right translate-x-12 translate-y-12">
          <span>STABILITY</span>
          <span>EFFICIENCY</span>
          <span>CREATIVITY</span>
        </div>
      </div>
    </section>
  )
}






