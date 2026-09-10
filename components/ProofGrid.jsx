'use client'

import { motion } from 'framer-motion'
import { PROJECTS } from '../utils/data'
import { Reveal, RevealWords } from './Reveal'

// Accent per capability, so the grid reads as a spread of engineering domains
// rather than an undifferentiated pile of links.
const TAG = {
  Voice: 'text-signal border-signal/40',
  LLM: 'text-signal border-signal/40',
  Vision: 'text-sky border-sky/40',
  Data: 'text-sky border-sky/40',
  Platform: 'text-ember border-ember/40',
  '3D': 'text-ember border-ember/40',
  Web: 'text-muted border-bone/25',
}

/* The evidence: every claim the story makes, as a URL you can open. */
export default function ProofGrid() {
  return (
    <section id="work" className="relative border-t border-bone/12 py-24 md:py-32">
      <div className="mx-auto max-w-stage px-5 md:px-10">
        <span className="eyebrow">{PROJECTS.length} live products</span>
        <h2 className="display mt-4 max-w-4xl text-[11vw] leading-[0.86] md:text-[5.5vw]">
          <RevealWords text="Open them." />{' '}
          <span className="text-stroke">
            <RevealWords text="They all still run." />
          </span>
        </h2>

        <ul className="mt-14 grid gap-px overflow-hidden border border-bone/12 bg-bone/12 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const tagClass = TAG[project.tag] ?? TAG.Web
            return (
              <li key={project.title} className="bg-ink">
                <Reveal delay={(i % 3) * 0.08}>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    className="group flex h-full flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full w-full opacity-70 transition-opacity duration-500 group-hover:opacity-100 ${
                          project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'
                        }`}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                      <span
                        className={`absolute left-4 top-4 rounded-full border bg-ink/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] backdrop-blur-sm ${tagClass}`}
                      >
                        {project.tag}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="display text-xl text-bone md:text-2xl">{project.title}</h3>
                        <span className="font-mono text-xs text-muted transition-colors group-hover:text-sky">
                          ↗
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        {project.subtitle}
                      </p>
                      <p className="mt-4 flex-1 text-[13px] leading-relaxed text-muted">
                        {project.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2 border-t border-bone/10 pt-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] tracking-[0.04em] text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
