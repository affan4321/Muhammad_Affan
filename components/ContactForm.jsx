'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import FrameModal from './FrameModal'

const FIELD =
  'w-full border border-bone/15 bg-ink-2 px-4 py-3 text-sm text-bone placeholder:text-muted/60 transition-colors focus:border-signal focus:outline-none'

export default function ContactForm() {
  const form = useRef(null)
  const [openModal, setOpenModal] = useState(false)
  const [status, setStatus] = useState('idle')

  const sendEmail = (e) => {
    e.preventDefault()
    const el = e.target
    setStatus('sending')

    emailjs
      .sendForm('service_lh1i6dd', 'template_iy0fd3j', form.current, {
        publicKey: 'tlSjZDUPHCdCM4slC',
      })
      .then(
        () => {
          setStatus('idle')
          el.reset()
          setOpenModal(true)
        },
        (error) => {
          // The old version only console.logged this, so a failed send looked
          // identical to no send at all — and a lost message is a lost lead.
          console.error('EmailJS send failed:', error)
          setStatus('error')
        },
      )
  }

  return (
    <>
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
        Or send it here
      </h3>

      <form ref={form} onSubmit={sendEmail} className="mt-7 space-y-5">
        <div>
          <label htmlFor="user_name" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Name
          </label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            required
            placeholder="Your name"
            className={`mt-2 ${FIELD}`}
          />
        </div>

        <div>
          <label htmlFor="user_email" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Email
          </label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            required
            placeholder="you@example.com"
            className={`mt-2 ${FIELD}`}
          />
        </div>

        <div>
          <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="What are you building?"
            className={`mt-2 h-32 resize-none ${FIELD}`}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-merge px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'error' && (
          <p role="alert" className="font-mono text-[11px] leading-relaxed text-ember">
            That didn&apos;t go through. Email me directly at{' '}
            <a href="mailto:affan4321@gmail.com" className="underline underline-offset-4">
              affan4321@gmail.com
            </a>
            .
          </p>
        )}
      </form>

      <FrameModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}
