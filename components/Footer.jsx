import { CONTACT } from '../utils/story'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-bone/12 bg-ink">
      <div className="mx-auto max-w-stage px-5 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-5">
            <img
              src="/assets/latestFace.svg"
              alt=""
              aria-hidden
              className="h-16 w-16 rounded-full object-cover ring-1 ring-bone/20"
            />
            <div>
              <p className="display text-2xl text-bone">Muhammad Affan</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                AI Engineer / Data Engineer
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-bone"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-bone"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-bone"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-bone"
              >
                Work
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 border-t border-bone/10 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          © {YEAR} Muhammad Affan
        </p>
      </div>
    </footer>
  )
}
