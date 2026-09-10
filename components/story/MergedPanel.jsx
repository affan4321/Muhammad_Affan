'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/*
 * The act where the argument lands. No rails, no divider — one frame, and the
 * accent word carries both temperatures at once via the merge gradient.
 */
export default function MergedPanel({ act }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      // pt clears the fixed nav on mobile; the rest of the scale-down below
      // keeps the content inside one small-viewport height so centring cannot
      // push the headline up underneath it.
      className="flex h-full w-full flex-col justify-center px-6 pb-14 pt-24 md:px-12 md:py-20 lg:px-20"
      style={{
        backgroundImage:
          'linear-gradient(115deg, rgb(var(--c-rail-cold)) 0%, rgb(var(--c-ink-2)) 50%, rgb(var(--c-rail-warm)) 100%)',
      }}
    >
      <div className="mx-auto w-full max-w-stage">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-sky" />
          <span className="eyebrow">
            {act.num} — {act.label}
          </span>
        </div>

        <h2 className="display text-[clamp(1.85rem,7vw,7.5rem)] text-bone">
          {act.lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: i * 0.09, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="merge-text block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: act.lines.length * 0.09, ease: EASE }}
            >
              {act.accent}
            </motion.span>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          className="mt-5 max-w-2xl border-t border-bone/12 pt-4 text-[13px] leading-relaxed text-muted md:mt-8 md:pt-6 md:text-base"
        >
          {act.body}
        </motion.p>

        {act.proof && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="mt-6 grid gap-px overflow-hidden border border-bone/12 bg-bone/12 md:mt-10 md:grid-cols-3"
          >
            {act.proof.map((p) => {
              const Tag = p.href ? 'a' : 'div'
              return (
                <li key={p.name} className="bg-ink-2">
                  <Tag
                    {...(p.href
                      ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={`block h-full p-4 transition-colors md:p-6 ${
                      p.href ? 'hover:bg-slate/60' : ''
                    }`}
                  >
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky md:text-xs">
                      {p.name}
                      {p.href && <span aria-hidden> ↗</span>}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted md:mt-3 md:text-[13px]">
                      {p.note}
                    </p>
                  </Tag>
                </li>
              )
            })}
          </motion.ul>
        )}

        {act.id === 'proof' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted"
          >
            <span className="inline-block h-8 w-px bg-gradient-to-b from-transparent to-sky" />
            Keep scrolling
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
