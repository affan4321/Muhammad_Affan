'use client'

import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/*
 * One rail's worth of content.
 *
 *   side="problem" — left, warm, heavy display caps. Short and blunt: the mess
 *                    a human is actually in. Gets narrower as the story runs.
 *   side="system"  — right, cold, mono. Precise: what got built, what it runs
 *                    on, and what it costs nobody at 2 a.m.
 */
export default function RailPanel({ act, side }) {
  const content = side === 'problem' ? act.problem : act.system
  const isProblem = side === 'problem'

  if (!content || act.merged) return null

  return (
    /*
     * Stacked on mobile, the problem rail is the top rail and the fixed nav
     * overlaps it. Centred content in a 222px rail lands ~33px down, i.e. under
     * a 61px navbar — so the top rail gets a heavier top pad to push its centre
     * clear. On md+ the rails are side by side and neither is affected.
     */
    <div
      className={`absolute inset-0 flex flex-col justify-center px-5 md:px-10 lg:px-14 ${
        isProblem ? 'pb-8 pt-28 md:py-16' : 'py-10 md:py-16'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${act.id}-${side}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className={`h-1.5 w-1.5 rounded-full ${isProblem ? 'bg-ember' : 'bg-signal'}`} />
            <span className={`eyebrow ${isProblem ? 'text-ember' : 'text-signal'}`}>
              {content.eyebrow}
            </span>
            {content.status && (
              <span className="rounded-full border border-sky/40 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-sky">
                {content.status}
              </span>
            )}
          </div>

          <Lines lines={content.lines} isProblem={isProblem} />

          {content.body && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: content.lines.length * 0.09 + 0.15, ease: EASE }}
              className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base"
            >
              {content.body}
            </motion.p>
          )}

          {content.meta && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: content.lines.length * 0.09 + 0.3, ease: EASE }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {content.meta.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-signal/30 px-3 py-1 font-mono text-[10px] tracking-[0.05em] text-signal"
                >
                  {m}
                </li>
              ))}
            </motion.ul>
          )}

          {content.footnote && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: content.lines.length * 0.09 + 0.45, ease: EASE }}
              className={`mt-7 border-l pl-4 font-mono text-[11px] leading-relaxed ${
                isProblem ? 'border-ember/40 text-ember/80' : 'border-bone/15 text-muted'
              }`}
            >
              {content.footnote}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Each line rises out of its own clipping box, staggered — per line rather than
// per word so the stacked headlines stay legible in a narrow rail.
function Lines({ lines, isProblem }) {
  return (
    <h2
      className={
        isProblem
          ? 'display text-[clamp(1.6rem,3.2vw,3.4rem)] text-bone'
          : 'font-mono text-[clamp(1.15rem,2.3vw,2.15rem)] font-medium leading-[1.3] text-bone'
      }
    >
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: i * 0.09, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h2>
  )
}
