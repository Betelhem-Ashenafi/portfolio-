'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                LET'S <br />
                <span className="gradient-text">CONNECT.</span>
              </h2>
              <p className="text-xl text-white/40 max-w-sm leading-relaxed">
                Currently open to new projects and interesting collaborations.
              </p>
            </motion.div>

            <div className="space-y-10 pt-16 border-t border-white/5">
              <a href="mailto:betelhem.ashenafi@example.com" className="group flex items-center justify-between py-6 border-b border-white/5 hover:border-cyan-400 transition-all">
                <div className="space-y-1">
                   <p className="mono text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Direct Email</p>
                   <p className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">hello@betelhem.dev</p>
                </div>
                <ArrowRight className="text-white/20 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all" size={24} />
              </a>
              
              <div className="flex gap-12 pt-8">
                 <a href="#" className="mono text-[10px] font-bold text-white/40 hover:text-white transition-colors tracking-widest">LINKEDIN</a>
                 <a href="#" className="mono text-[10px] font-bold text-white/40 hover:text-white transition-colors tracking-widest">TWITTER</a>
                 <a href="#" className="mono text-[10px] font-bold text-white/40 hover:text-white transition-colors tracking-widest">GITHUB</a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hiwot-card"
            >
              <form className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-4">
                      <label className="mono text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white focus:border-cyan-400 outline-none transition-all placeholder:text-white/5"
                        placeholder="John Doe"
                      />
                   </div>
                   <div className="space-y-4">
                      <label className="mono text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white focus:border-cyan-400 outline-none transition-all placeholder:text-white/5"
                        placeholder="john@example.com"
                      />
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="mono text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Message</label>
                   <textarea 
                     rows={4}
                     className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white focus:border-cyan-400 outline-none transition-all resize-none placeholder:text-white/5"
                     placeholder="Tell me about your project..."
                   />
                </div>
                
                <button className="hiwot-button w-full flex items-center justify-center gap-4 py-6">
                  Send Transmission <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="mono text-[10px] font-bold text-white/20 tracking-widest">© 2024 BETELHEM ASHENAFI / DESIGNED FOR IMPACT</p>
           <div className="flex gap-8 mono text-[10px] font-bold text-white/20">
              <span>LOCAL TIME: 20:45</span>
              <span>BAHIR DAR, ET</span>
           </div>
        </div>
      </div>
    </section>
  )
}


