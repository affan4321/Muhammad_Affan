'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS } from '../utils/data'
import { Reveal, RevealWords } from './Reveal'

export default function Skills() {
  const [active, setActive] = useState(0)
  const selected = SKILLS[active]

  return (
    <section id="skills" className="relative border-t border-bone/12 py-24 md:py-32">
      <div className="mx-auto max-w-stage px-5 md:px-10">
        <span className="eyebrow">What the systems are made of</span>
        <h2 className="display mt-4 max-w-3xl text-[11vw] leading-[0.86] md:text-[5.5vw]">
          <RevealWords text="The toolkit." />
        </h2>

        <div className="mt-14 grid gap-px border border-bone/12 bg-bone/12 md:grid-cols-[minmax(0,22rem)_1fr]">
          {/* Category rail */}
          <ul className="bg-ink">
            {SKILLS.map((item, i) => {
              const isActive = i === active
              return (
                <li key={item.title} className="border-b border-bone/10 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-4 px-6 py-5 text-left transition-colors ${
                      isActive ? 'bg-ink-2' : 'hover:bg-ink-2/60'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                        isActive ? 'bg-signal' : 'bg-bone/25'
                      }`}
                    />
                    <span
                      className={`flex-1 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                        isActive ? 'text-bone' : 'text-muted group-hover:text-bone'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Detail panel */}
          <div className="bg-ink p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3">
                  <span className="eyebrow text-signal">
                    {String(active + 1).padStart(2, '0')} / {SKILLS.length} — Stack
                  </span>
                </div>
                <h3 className="display mt-3 text-3xl text-bone md:text-4xl">
                  {selected.title}
                </h3>

                <ul className="mt-9 space-y-6">
                  {selected.skills.map((s, i) => {
                    const pct = parseInt(s.percentage, 10) || 0
                    return (
                      <li key={s.skill}>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-sm text-bone md:text-base">{s.skill}</span>
                          <span className="font-mono text-[11px] text-muted">
                            {s.percentage}
                          </span>
                        </div>
                        <div className="mt-2.5 h-px w-full bg-bone/12">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{
                              duration: 0.9,
                              delay: 0.1 + i * 0.07,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full bg-signal"
                          />
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal>
          <p className="mt-8 font-mono text-[11px] leading-relaxed text-muted">
            Percentages are self-assessed, not certifications — they say where I am
            confident shipping unsupervised.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
