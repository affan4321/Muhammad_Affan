'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Story', href: '#act-hook' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A locked body behind an open sheet stops the story scrolling underneath it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-bone/10 bg-ink/80 py-3 backdrop-blur-md' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-stage items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/assets/latestFace.svg"
            alt=""
            aria-hidden
            className="h-9 w-9 rounded-full object-cover ring-1 ring-bone/20"
          />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-bone">
            M. Affan
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-bone"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-merge transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-bone md:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeWidth={1.6}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 space-y-1 border-t border-bone/10 bg-ink/95 px-5 py-6 backdrop-blur-md md:hidden"
          >
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm uppercase tracking-[0.18em] text-muted transition-colors hover:text-bone"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
