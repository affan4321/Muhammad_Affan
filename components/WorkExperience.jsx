'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { WORK_EXPERIENCE } from '../utils/data'
import { Reveal, RevealWords } from './Reveal'

export default function WorkExperience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // The spine fills as you read down it — the only ornament in this section.
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ['0%', '100%'])

  return (
    <section id="experience" ref={ref} className="relative border-t border-bone/12 py-24 md:py-32">
      <div className="mx-auto max-w-stage px-5 md:px-10">
        <span className="eyebrow">Where the hours went</span>
        <h2 className="display mt-4 max-w-4xl text-[11vw] leading-[0.86] md:text-[5.5vw]">
          <RevealWords text="Three rooms," />{' '}
          <span className="text-stroke">
            <RevealWords text="two years." />
          </span>
        </h2>

        <div className="relative mt-16 pl-7 md:pl-10">
          <div className="absolute left-0 top-0 h-full w-px bg-bone/12">
            <motion.div style={{ height: lineHeight }} className="w-px bg-merge" />
          </div>

          <div className="space-y-6">
            {WORK_EXPERIENCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <ExperienceCard details={item} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
