'use client'

import ContactForm from './ContactForm'
import { CONTACT } from '../utils/story'
import { Reveal, RevealWords } from './Reveal'

const CHANNELS = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'LinkedIn', value: 'sheikhmuhammadaffan', href: CONTACT.linkedin },
  { label: 'GitHub', value: 'affan4321', href: CONTACT.github },
  { label: 'WhatsApp', value: CONTACT.whatsappLabel, href: CONTACT.whatsapp },
]

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-bone/12 py-24 md:py-32">
      <div className="mx-auto max-w-stage px-5 md:px-10">
        <span className="eyebrow">The close</span>
        <h2 className="display mt-4 max-w-4xl text-[12vw] leading-[0.86] md:text-[6vw]">
          <RevealWords text="Something" />{' '}
          <RevealWords text="broken?" wordClassName="merge-text" />
        </h2>

        <div className="mt-14 grid gap-px border border-bone/12 bg-bone/12 lg:grid-cols-2">
          <div className="bg-ink p-6 md:p-10">
            <Reveal>
              <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
                Pick whichever channel you actually check. I answer email and
                WhatsApp fastest, usually the same day.
              </p>
            </Reveal>

            <ul className="mt-9 divide-y divide-bone/10 border-t border-bone/10">
              {CHANNELS.map((c, i) => (
                <li key={c.label}>
                  <Reveal delay={0.06 * i}>
                    <a
                      href={c.href}
                      target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-5 transition-colors"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                        {c.label}
                      </span>
                      <span className="flex items-center gap-3 text-sm text-bone transition-colors group-hover:text-sky md:text-base">
                        {c.value}
                        <span aria-hidden className="font-mono text-xs text-muted transition-colors group-hover:text-sky">
                          ↗
                        </span>
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ink p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
