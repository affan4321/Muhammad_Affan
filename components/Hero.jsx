'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RevealWords, Reveal } from './Reveal'

/*
 * The cover. Its only job is to plant the shape of the story — something breaks,
 * a system answers it — before the first act says it out loud. The two accent
 * colours are the same two rails the rest of the page runs on.
 */
export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -140])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={ref}
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pt-32"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-64 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-signal/10 blur-[150px]"
      />
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -bottom-72 right-0 h-[34rem] w-[34rem] rounded-full bg-ember/10 blur-[150px]"
      />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-stage">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
          <span className="eyebrow">Portfolio — 2026</span>
        </div>

        <h1 className="display mt-7 text-[15vw] leading-[0.84] md:text-[10vw]">
          <RevealWords text="Muhammad" />
          <br />
          <span className="merge-text">
            <RevealWords text="Affan" />
          </span>
        </h1>

        <Reveal delay={0.35}>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] md:text-base">
            <span className="text-signal">AI Engineer</span>
            <span className="mx-3 text-muted">/</span>
            <span className="text-sky">Data Engineer</span>
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 border-t border-bone/12 pt-7 md:flex-row md:items-end md:justify-between">
          <Reveal delay={0.45}>
            <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
              I build systems that hold a conversation and pipelines that
              remember it. Scroll — the next six screens make the case better
              than a bullet list would.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#act-proof"
                className="inline-flex items-center gap-2 rounded-full bg-merge px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink shadow-signal transition-transform duration-300 hover:scale-[1.04]"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-7 py-4 text-sm uppercase tracking-[0.14em] text-bone transition-colors hover:border-signal hover:text-signal"
              >
                Start a project
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.7}>
          <p className="mt-14 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="inline-block h-10 w-px bg-gradient-to-b from-transparent via-signal to-ember" />
            Act 01 begins below
          </p>
        </Reveal>
      </motion.div>
    </section>
  )
}
