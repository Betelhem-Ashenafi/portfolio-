'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
  { name: 'Next.js', level: 88, color: 'from-gray-800 to-gray-900' },
  { name: 'Node.js', level: 80, color: 'from-green-500 to-green-700' },
  { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-blue-500' },
  { name: 'Python', level: 75, color: 'from-yellow-400 to-yellow-600' },
  { name: 'MongoDB', level: 78, color: 'from-green-600 to-green-800' },
  { name: 'PostgreSQL', level: 82, color: 'from-blue-700 to-indigo-700' },
]

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js',
  'Node.js', 'Express', 'Python', 'Django', 'FastAPI',
  'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS',
  'Git', 'GraphQL', 'REST APIs', 'Tailwind CSS', 'Framer Motion'
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-950/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Skills & <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-violet-200/30 dark:border-violet-800/30 hover:border-violet-400 dark:hover:border-violet-600"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {skill.name}
                </span>
                <motion.span
                  className="text-sm font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.05, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md hover:shadow-xl transition-all cursor-default border border-primary-200/50 dark:border-primary-700/50 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 dark:hover:from-primary-900/50 dark:hover:to-purple-900/50"
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

