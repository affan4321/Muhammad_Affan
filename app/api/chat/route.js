import { ChatGroq } from '@langchain/groq'
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { HumanMessage, AIMessage } from '@langchain/core/messages'
import { buildKnowledgeBase } from '../../../utils/chatbotContext'

export const runtime = 'nodejs'

const SYSTEM_PROMPT = `You are the AI assistant embedded on Muhammad Affan's portfolio site,
smaffan.com. You answer visitor questions about Muhammad using only the information given below.

Rules:
- Speak about Muhammad in the third person, in a concise, friendly, confident tone.
- Only use facts from the context below. If something isn't in it, say you're not sure and point
  the visitor to email or WhatsApp (in the context) instead of guessing.
- Keep answers short — a few sentences, not an essay — unless the visitor asks for detail.
- If a visitor wants to hire him or start a project, encourage them to use the contact channels.

CONTEXT ABOUT MUHAMMAD AFFAN
${buildKnowledgeBase()}`

export async function POST(req) {
  if (!process.env.GROQ_API_KEY) {
    return new Response(
      "The chatbot isn't configured yet — email affan4321@gmail.com and I'll get back to you directly.",
      { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
    )
  }

  const { messages } = await req.json()
  const history = messages.slice(0, -1).map((m) =>
    m.role === 'user' ? new HumanMessage(m.content) : new AIMessage(m.content),
  )
  const input = messages[messages.length - 1].content

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', SYSTEM_PROMPT],
    new MessagesPlaceholder('history'),
    ['human', '{input}'],
  ])

  const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: 'llama-3.3-70b-versatile',
    temperature: 0.4,
  })

  const chain = prompt.pipe(model).pipe(new StringOutputParser())
  const chunks = await chain.stream({ history, input })

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of chunks) {
          controller.enqueue(encoder.encode(chunk))
        }
      } catch (err) {
        console.error('Chat stream failed:', err)
        controller.enqueue(
          encoder.encode("\n\nSomething went wrong on my end — email affan4321@gmail.com instead."),
        )
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
