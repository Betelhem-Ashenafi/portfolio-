'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Rocket, Users } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices.',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating visually stunning and user-friendly interfaces.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams to deliver exceptional results.',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-2xl rounded-3xl p-10 md:p-14 shadow-2xl border border-violet-200/30 dark:border-violet-800/30">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-900 dark:text-white text-center tracking-tight">
              Passionate Developer & <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Designer</span>
            </h3>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                With a passion for creating <span className="text-violet-600 dark:text-violet-400 font-semibold">exceptional digital experiences</span>, I
                specialize in building modern, responsive web applications that
                combine elegant design with robust functionality.
              </p>
              <p>
                My journey in web development has been driven by <span className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">curiosity</span> and a
                commitment to continuous learning. I enjoy solving complex problems
                and turning ideas into reality through code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl transition-all border border-violet-200/30 dark:border-violet-800/30 hover:border-violet-400 dark:hover:border-violet-600"
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center mb-6 shadow-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-primary-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

