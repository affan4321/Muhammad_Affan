/*
 * The spine of the site.
 *
 * Six acts. Every act opens on something broken (left rail, warm — the human
 * mess) and lands on the system that answers it (right rail, cold — the
 * engineering). The divider slides steadily left as you scroll: the problems
 * shrink, the systems take over. At THE PATTERN the divider dissolves and the
 * argument closes — all of these were the same loop.
 *
 * `problemWidth` is the percentage of the viewport the left (problem) rail
 * holds. The rails component interpolates between these, so the divider moves
 * continuously rather than snapping.
 */

import { PROJECTS } from './data'

// THE PROOF counts the grid out loud, so derive it — a hardcoded number goes
// stale the first time a project is added and nobody notices the site lying.
const WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve']
const shippedCount = WORDS[PROJECTS.length] ?? String(PROJECTS.length)

export const ACTS = [
  {
    id: 'hook',
    num: '01',
    label: 'The Hook',
    problemWidth: 50,
    problem: {
      eyebrow: 'Every project starts here',
      lines: ['Something', 'is broken.'],
    },
    system: {
      eyebrow: 'And here is what I do about it',
      lines: ['I build the thing', 'that answers it.'],
      body: 'Voice agents, data pipelines and computer vision — shipped to production, not left in a notebook.',
    },
  },
  {
    id: 'call',
    num: '02',
    label: 'The Call',
    problemWidth: 38,
    problem: {
      eyebrow: '02 / The problem',
      lines: ['Thousands', 'of callers.', 'Three humans.'],
      footnote: 'And nobody at the desk at 2 a.m.',
    },
    system: {
      eyebrow: 'The system',
      lines: ['So it answers', 'without me.'],
      body: 'An AI voice agent platform for Alive5 — intent detection, FAQ grounding, and live transfer to a human the moment the conversation earns it. Real telephony, not a demo.',
      meta: ['LiveKit', 'GPT-4o', 'Telnyx SIP', 'FastAPI', 'AWS AgentCore', '291 voices'],
      footnote: 'It has never once called in sick.',
    },
  },
  {
    id: 'pipes',
    num: '03',
    label: 'The Pipes',
    problemWidth: 32,
    problem: {
      eyebrow: '03 / The problem',
      lines: ['Then the calls', 'became data', 'nobody could', 'read.'],
      footnote: 'Answers exist. They are just unreachable.',
    },
    system: {
      eyebrow: 'The system',
      lines: ['So I built', 'the pipes.'],
      body: 'NewsLake: news ingested into MinIO, transformed through Spark bronze/silver/gold layers, orchestrated by Airflow, modeled with dbt, and served live through a Next.js site with an AI chatbot, plus a companion Streamlit dashboard, both reading straight from Neon Postgres. The layer nobody applauds and every product quietly depends on.',
      meta: ['Airflow', 'Apache Spark', 'dbt', 'MinIO', 'Neon Postgres', 'Next.js'],
      footnote: 'Built in the open, end to end.',
    },
  },
  {
    id: 'fit',
    num: '04',
    label: 'The Fit',
    problemWidth: 26,
    problem: {
      eyebrow: '04 / The problem',
      lines: ['She ordered', 'three sizes', 'to keep one.'],
      footnote: 'Two go back. Everybody loses.',
    },
    system: {
      eyebrow: 'The system',
      lines: ['So the camera', 'measures her', 'instead.'],
      body: 'Virtual try-on and computer-vision body measurement for Splendor, shipped end to end — model serving, containerisation and the GPU deployment underneath it.',
      meta: ['Computer Vision', 'Docker', 'AWS EC2 g5', 'React', 'Node.js'],
      footnote: 'Guessing is a returns problem wearing a UX costume.',
    },
  },
  {
    id: 'pattern',
    num: '05',
    label: 'The Pattern',
    merged: true,
    lines: ['Every one of them'],
    accent: 'is the same loop.',
    body: 'Sense the thing. Decide something useful. Act on it. Remember what happened. Swap the sensor and the actuator and it is a phone line, a warehouse or a camera — the engineering underneath does not change. That loop is what I actually build.',
    proof: [
      {
        name: 'Sense',
        note: 'Speech, images, forms, events — whatever the world is actually sending you.',
        href: null,
      },
      {
        name: 'Decide',
        note: 'An LLM, a model, or plain deterministic rules when those are honestly enough.',
        href: null,
      },
      {
        name: 'Act & remember',
        note: 'Transfer the call, place the order, write the row. Then make it queryable.',
        href: null,
      },
    ],
  },
  {
    id: 'proof',
    num: '06',
    label: 'The Proof',
    merged: true,
    lines: [`${shippedCount} shipped.`],
    accent: 'Pick any one.',
    body: 'Not case studies. Live URLs you can open in the next ten seconds and use yourself.',
  },
]

export const CONTACT = {
  email: 'affan4321@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sheikhmuhammadaffan',
  github: 'https://github.com/affan4321',
  whatsapp: 'https://wa.me/+923144320292',
  whatsappLabel: '+92 314 4320292',
}
