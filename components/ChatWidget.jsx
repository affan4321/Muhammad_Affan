'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const GREETING = {
  role: 'assistant',
  content: "Hey, I'm Affan's assistant. Ask me about his projects, stack, or experience.",
}

function ChatBubbleIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M8 10h8M8 14h5M21 12c0 4.418-4.03 8-9 8-1.06 0-2.078-.163-3.023-.463L3 21l1.532-4.596C3.564 15.166 3 13.634 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z"
      />
    </svg>
  )
}

const RING_DURATION = 4
const RING_COUNT = 2
// How far each ring travels outward from every edge of the pill, in px.
const RING_SPREAD = 64
const RING_DELAYS = Array.from({ length: RING_COUNT }, (_, i) => (i * RING_DURATION) / RING_COUNT)

// Position and opacity share one keyframe timeline so the loop restart is invisible.
const RING_TIMES = [0, 0.12, 0.5, 1]
const RING_INSET = RING_TIMES.map((t) => -RING_SPREAD * t)

const SWAP = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const showRings = !open && !reduceMotion

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const send = async (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    const next = [...messages, { role: 'user', content: text }]
    setMessages([...next, { role: 'assistant', content: '' }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ''

      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        full += decoder.decode(value, { stream: true })
        setMessages([...next, { role: 'assistant', content: full }])
      }
    } catch {
      setMessages([
        ...next,
        { role: 'assistant', content: "Connection dropped — email affan4321@gmail.com instead." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 flex h-[28rem] max-h-[70vh] w-[22rem] flex-col border border-bone/15 bg-ink-2 shadow-lift sm:w-96"
          >
            <div className="flex items-center justify-between border-b border-bone/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone">
                  Ask about Affan
                </span>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="text-muted transition-colors hover:text-bone"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'ml-auto bg-signal/15 text-bone'
                      : 'border border-bone/10 bg-ink text-bone'
                  }`}
                >
                  {m.content || (loading && i === messages.length - 1 ? '…' : '')}
                </div>
              ))}
            </div>

            <form onSubmit={send} className="flex items-center gap-2 border-t border-bone/10 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What do you want to know?"
                disabled={loading}
                className="flex-1 border border-bone/15 bg-ink px-3 py-2 text-sm text-bone placeholder:text-muted/60 transition-colors focus:border-signal focus:outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-signal text-ink transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 19.5l15-7.5-15-7.5v6l10 1.5-10 1.5v6z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sizes itself to the launcher, so the rings/glow start exactly at the pill's
          outline. Both sit behind the button, which is lifted to z-10. */}
      <div className="relative flex min-h-14 items-center justify-end">
        {!open && (
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-1 rounded-full bg-signal/30 blur-xl"
          />
        )}

        {showRings &&
          RING_DELAYS.map((delay) => (
            <motion.span
              key={delay}
              aria-hidden
              className="pointer-events-none absolute rounded-full border-2 border-signal/60"
              animate={{
                top: RING_INSET,
                right: RING_INSET,
                bottom: RING_INSET,
                left: RING_INSET,
                opacity: [0, 0.55, 0.3, 0],
              }}
              transition={{
                duration: RING_DURATION,
                repeat: Infinity,
                ease: 'linear',
                delay,
                times: RING_TIMES,
              }}
            />
          ))}

        <AnimatePresence initial={false} mode="popLayout">
          {open ? (
            <motion.button
              key="close"
              {...SWAP}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-merge text-ink shadow-signal"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          ) : (
            <motion.button
              key="open"
              {...SWAP}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open chat"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative z-10 flex h-14 items-center justify-center gap-3 rounded-full bg-merge py-4 pl-6 pr-5 text-ink shadow-signal"
            >
              <span className="whitespace-nowrap text-sm font-semibold">Chat to ask anything</span>
              <ChatBubbleIcon />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
