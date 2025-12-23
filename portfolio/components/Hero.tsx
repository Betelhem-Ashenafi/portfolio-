'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Zap, Download } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker']

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const current = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1))
      }, 100)
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1))
      }, 50)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-violet-50/30 via-fuchsia-50/20 to-white dark:from-slate-950 dark:via-violet-950/50 dark:via-fuchsia-950/30 dark:to-slate-900">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_110%)]"></div>

      {/* Floating orbs with parallax */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20 dark:opacity-10"
          style={{
            width: `${300 + i * 150}px`,
            height: `${300 + i * 150}px`,
            left: `${15 + i * 20}%`,
            top: `${10 + (i % 2) * 40}%`,
            y: useTransform(scrollYProgress, [0, 1], [0, (i + 1) * 100]),
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          <div
            className={`w-full h-full rounded-full ${
              i % 2 === 0
                ? 'bg-gradient-to-r from-violet-400 to-purple-400'
                : 'bg-gradient-to-r from-fuchsia-400 to-pink-400'
            }`}
          />
        </motion.div>
      ))}

      {/* Main content with parallax */}
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-violet-200/50 dark:border-white/10 shadow-lg shadow-violet-500/5"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              </motion.div>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Available for new projects</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight">
                <motion.span
                  className="block text-gray-900 dark:text-white"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.4 }}
                >
                  Hello, I'm
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent mt-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 150, damping: 15 }}
                >
                  Your Name
                </motion.span>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold mt-8 justify-center lg:justify-start">
                <span className="text-gray-600 dark:text-gray-400">I'm a</span>
                <div className="relative inline-block min-h-[2.5rem]">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400"
                  >
                    {displayText}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-8 bg-violet-600 dark:bg-violet-400 ml-1.5"
                  />
                </div>
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              I craft <span className="text-violet-600 dark:text-violet-400 font-semibold">beautiful</span> and{' '}
              <span className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">functional</span> digital experiences
              that make a meaningful impact.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6"
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white rounded-2xl font-semibold text-lg shadow-2xl shadow-violet-500/30 overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-xl text-gray-900 dark:text-white rounded-2xl font-semibold text-lg border-2 border-violet-200/50 dark:border-white/20 hover:border-violet-400 dark:hover:border-violet-400 transition-all flex items-center gap-2.5 shadow-lg"
                whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.a>

              <motion.a
                href="/cv.pdf"
                download="Your-Name-CV.pdf"
                className="group px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-700 rounded-md hover:border-gray-400 dark:hover:border-gray-600 transition-all flex items-center gap-2 font-medium text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 justify-center lg:justify-start pt-4"
            >
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-violet-200/50 dark:border-white/10 hover:bg-violet-50 dark:hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-violet-600 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-violet-200/30 dark:border-white/10 shadow-2xl"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm font-mono ml-4">portfolio.tsx</span>
                  </div>

                  <div className="space-y-4 font-mono text-sm">
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.2 }}
                    >
                      <span className="text-purple-500 dark:text-purple-400">const</span>
                      <span className="text-gray-900 dark:text-white"> developer</span>
                      <span className="text-gray-400 dark:text-gray-500"> =</span>
                    </motion.div>
                    <motion.div
                      className="ml-4 space-y-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.4 }}
                    >
                      <div>
                        <span className="text-cyan-500 dark:text-cyan-400">name:</span>
                        <span className="text-yellow-600 dark:text-yellow-400"> 'Your Name'</span>
                      </div>
                      <div>
                        <span className="text-cyan-500 dark:text-cyan-400">skills:</span>
                        <span className="text-green-600 dark:text-green-400"> ['React', 'Next.js', ...]</span>
                      </div>
                      <div>
                        <span className="text-cyan-500 dark:text-cyan-400">passion:</span>
                        <span className="text-pink-500 dark:text-pink-400"> 'Creating amazing things'</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-violet-500/30"
                  animate={{ rotate: [0, 360], y: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Code2 className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-fuchsia-500/30"
                  animate={{ rotate: [0, -360], y: [0, 10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
              </motion.div>

              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-3xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs mb-3 font-medium tracking-wider uppercase">Scroll</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center p-1.5 group-hover:border-violet-500 dark:group-hover:border-violet-400 transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-3 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
