import { SKILLS, WORK_EXPERIENCE, PROJECTS } from './data'
import { CONTACT } from './story'

// Flattens the same data the page renders into plain text so the chatbot's
// system prompt and the portfolio content can never drift out of sync.
export function buildKnowledgeBase() {
  const skillsBlock = SKILLS.map(
    (group) => `${group.title}: ${group.skills.map((s) => s.skill).join(', ')}`,
  ).join('\n')

  const experienceBlock = WORK_EXPERIENCE.map((job) => {
    const bullets = job.responsibilities
      ? job.responsibilities
      : job.projects.flatMap((p) => [`[${p.name}]`, ...p.responsibilities])
    return `${job.title} (${job.date})${job.description ? ' — ' + job.description : ''}\n${bullets.map((b) => `- ${b}`).join('\n')}`
  }).join('\n\n')

  const projectsBlock = PROJECTS.map(
    (p) =>
      `${p.title} — ${p.subtitle} [${p.tag}]: ${p.description} Tech: ${p.tech.join(', ')}. Live at ${p.link}`,
  ).join('\n')

  return `
BIO
Muhammad Affan is an AI Engineer and Data Engineer. He builds voice AI agents, LLM-powered
applications, data pipelines and full-stack products, and ships them to production rather than
leaving them in a notebook.

WORK EXPERIENCE
${experienceBlock}

SHIPPED PROJECTS
${projectsBlock}

SKILLS
${skillsBlock}

CONTACT
Email: ${CONTACT.email}
LinkedIn: ${CONTACT.linkedin}
GitHub: ${CONTACT.github}
WhatsApp: ${CONTACT.whatsappLabel} (${CONTACT.whatsapp})
`.trim()
}
