'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/*
 * One role. The Soft Techniques entry nests four projects deep, so anything past
 * the first project stays collapsed — a wall of bullets is how a good CV reads
 * like a bad one.
 */
export default function ExperienceCard({ details, index }) {
  const [open, setOpen] = useState(false)
  const projects = details.projects ?? []
  const hasProjects = projects.length > 0
  const hidden = hasProjects ? projects.length - 1 : 0
  const visible = open || !hasProjects ? projects : projects.slice(0, 1)

  return (
    <article className="relative border border-bone/12 bg-ink-2 p-6 transition-colors hover:border-bone/25 md:p-8">
      <span className="absolute -left-[calc(1.75rem+1px)] top-9 h-1.5 w-1.5 rounded-full bg-signal md:-left-[calc(2.5rem+1px)]" />

      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h3 className="display text-xl text-bone md:text-2xl">{details.title}</h3>
        <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-sky">
          {details.date}
        </span>
      </div>

      {details.description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {details.description}
        </p>
      )}

      {hasProjects ? (
        <>
          <div className="mt-7 space-y-5">
            {visible.map((project) => (
              <div key={project.name} className="border-l border-signal/40 pl-5">
                <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                  {project.name}
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[13px] leading-relaxed text-muted"
                    >
                      <span aria-hidden className="mt-[7px] h-px w-3 shrink-0 bg-bone/30" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {!open && hidden > 0 && (
              <motion.button
                type="button"
                onClick={() => setOpen(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-sky transition-colors hover:text-bone"
              >
                + {hidden} more project{hidden > 1 ? 's' : ''}
              </motion.button>
            )}
          </AnimatePresence>

          {open && (
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-bone"
            >
              — Collapse
            </button>
          )}
        </>
      ) : (
        <ul className="mt-7 space-y-2">
          {details.responsibilities.map((item) => (
            <li key={item} className="flex gap-3 text-[13px] leading-relaxed text-muted">
              <span aria-hidden className="mt-[7px] h-px w-3 shrink-0 bg-bone/30" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
