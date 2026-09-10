'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'
import { ACTS } from '../../utils/story'
import RailPanel from './RailPanel'
import MergedPanel from './MergedPanel'

const N = ACTS.length
// Merged acts have no divider, so their nominal share only exists to keep the
// interpolation continuous on the way in and out.
const widthOf = (act) => (act.merged ? 26 : act.problemWidth)

// Keyframes for the divider. Each act pins its share at its own midpoint, so the
// divider spends the whole act sliding toward the next one rather than snapping.
const STOPS = [0, ...ACTS.map((_, i) => (i + 0.5) / N), 1]
const WIDTHS = [widthOf(ACTS[0]), ...ACTS.map(widthOf), widthOf(ACTS[N - 1])]

const FIRST_MERGED = ACTS.findIndex((a) => a.merged)
const MERGE_AT = FIRST_MERGED / N

export default function StoryRails() {
  const ref = useRef(null)
  const [index, setIndex] = useState(0)
  const [isWide, setIsWide] = useState(true)
  const reduce = useReducedMotion()

  // The container is N screens tall; the frame inside sticks for (N-1) of them,
  // which is exactly the distance scrollYProgress runs 0 -> 1 over.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const problemPct = useTransform(scrollYProgress, STOPS, WIDTHS)
  const problemSize = useTransform(problemPct, (v) => `${v}%`)
  const systemSize = useTransform(problemPct, (v) => `${100 - v}%`)
  const dividerAt = useTransform(problemPct, (v) => `${v}%`)

  const mergeIn = useTransform(scrollYProgress, [MERGE_AT - 0.05, MERGE_AT + 0.03], [0, 1])
  const railsOut = useTransform(mergeIn, (v) => 1 - v)
  const progressWidth = useTransform(scrollYProgress, (v) => `${v * 100}%`)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(N - 1, Math.max(0, Math.floor(v * N)))
    setIndex((prev) => (prev === next ? prev : next))
  })

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => setIsWide(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const act = ACTS[index]
  const merged = !!act.merged

  // Reduced motion gets the same layout without the interpolation: rails jump to
  // the current act's share and let a short CSS transition carry the change.
  //
  // Both axes are always written. Setting only the active one leaves the other
  // frozen at whatever it held before the breakpoint flipped, which produced a
  // stale `width: 50%` sitting underneath the stacked layout.
  const staticWidth = widthOf(act)
  const railStyle = (share) => {
    const size = reduce ? `${share}%` : share
    return isWide
      ? { width: size, height: '100%', ...(reduce && { transition: 'width 300ms ease' }) }
      : { width: '100%', height: size, ...(reduce && { transition: 'height 300ms ease' }) }
  }

  const problemStyle = railStyle(reduce ? staticWidth : problemSize)
  const systemStyle = railStyle(reduce ? 100 - staticWidth : systemSize)

  return (
    <div ref={ref} style={{ height: `${N * 100}vh` }} className="relative">
      {/* Anchor targets so the nav can jump to an act that has no DOM section. */}
      {ACTS.map((a, i) => (
        <span
          key={a.id}
          id={`act-${a.id}`}
          aria-hidden
          className="absolute left-0 w-px"
          style={{ top: `${((i + 0.5) / N) * (N - 1) * 100}vh`, height: '1px' }}
        />
      ))}

      <div className="sticky top-0 h-screen overflow-hidden grain">
        {/* Problem left, system right. Below md they stack and the share drives height. */}
        <motion.div
          className="absolute inset-0 flex flex-col md:flex-row"
          style={{ opacity: merged && reduce ? 0 : railsOut }}
        >
          <motion.div style={problemStyle} className="relative overflow-hidden bg-rail-warm">
            <RailPanel act={act} side="problem" />
          </motion.div>
          <motion.div style={systemStyle} className="relative overflow-hidden bg-rail-cold">
            <RailPanel act={act} side="system" />
          </motion.div>
        </motion.div>

        {/* Divider — vertical on desktop, horizontal once the rails stack. */}
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 h-px bg-bone/20 md:left-auto md:right-auto md:top-0 md:bottom-0 md:h-auto md:w-px"
          style={{
            opacity: railsOut,
            ...(isWide ? { left: dividerAt } : { top: dividerAt }),
          }}
        >
          <span className="absolute left-1/2 -top-[2.5px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-sky md:left-auto md:-left-[2.5px] md:top-1/2 md:-translate-x-0 md:-translate-y-1/2" />
        </motion.div>

        {/* The payoff: rails dissolve, one full-bleed frame takes over. */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: mergeIn, pointerEvents: merged ? 'auto' : 'none' }}
        >
          <AnimatePresence mode="wait">
            {merged && <MergedPanel key={act.id} act={act} />}
          </AnimatePresence>
        </motion.div>

        <ActHud act={act} progressWidth={progressWidth} />
      </div>
    </div>
  )
}

function ActHud({ act, progressWidth }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-4 bg-gradient-to-t from-ink/90 to-transparent px-5 py-4 md:px-10 md:py-5">
      <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-bone">
        {act.num} — {act.label}
      </span>
      <span className="h-px flex-1 bg-bone/15">
        <motion.span style={{ width: progressWidth }} className="block h-full bg-merge" />
      </span>
    </div>
  )
}
