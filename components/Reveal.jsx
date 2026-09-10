'use client'

import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, y = 40, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/*
 * `wordClassName` lands on the innermost animating span. Use it for gradient
 * text (`merge-text`) instead of wrapping RevealWords in the gradient: iOS
 * Safari paints `background-clip: text` as fully transparent when the clipped
 * element is an inline box whose descendants are transformed and clipped, which
 * made the hero read "Muhammad" with no surname at all on iPhone.
 */
export function RevealWords({ text, className, wordClassName = '' }) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {text.split(' ').map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={{ hidden: { y: '110%' }, visible: { y: 0 } }}
            transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {' '}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
