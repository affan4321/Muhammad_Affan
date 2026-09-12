export const SKILLS = [
    {
      title: "AI / Data Engineering",
      icons: "aiml.png",
      skills: [
        { skill: "LLM Integration (OpenAI, Gemini, Claude)", percentage: "85%" },
        { skill: "Voice AI Agents (LiveKit)", percentage: "80%" },
        { skill: "AI Agent Orchestration & Automation", percentage: "80%" },
        { skill: "Data Pipeline Orchestration (Airflow)", percentage: "75%" },
        { skill: "Distributed Processing (Apache Spark)", percentage: "70%" },
        { skill: "Data Modeling (dbt)", percentage: "70%" }
      ]
    },
    {
      title: "Cloud/DevOps/Automation",
      icons: "clouddevops.png",
      skills: [
        { skill: "AWS (AgentCore, EC2)", percentage: "80%" },
        { skill: "Docker", percentage: "75%" },
        { skill: "LiveKit", percentage: "75%" },
        { skill: "Telnyx", percentage: "70%" },
        { skill: "n8n Automation", percentage: "75%" }
      ]
    },
    {
      title: "Databases",
      icons: "databaseIcon.png",
      skills: [
        { skill: "PostgreSQL", percentage: "80%" },
        { skill: "Neon (Serverless Postgres)", percentage: "75%" },
        { skill: "Supabase", percentage: "90%" },
        { skill: "MongoDB", percentage: "70%" },
        { skill: "MySQL", percentage: "65%" },
      ]
    },
    {
      title: "Full-Stack",
      icons: "fullstack.png",
      skills: [
        { skill: "Authentication Systems", percentage: "85%" },
        { skill: "Real-time Systems", percentage: "80%" },
        { skill: "Payment Integration", percentage: "75%" },
        { skill: "API Development", percentage: "85%" }
      ]
    }
  ]

export const WORK_EXPERIENCE = [
  {
    title: "AI Engineer at Soft Techniques",
    date: "Sep 2025 - Feb 2026",
    description: "Soft Techniques is a custom AI solution provider that creates and personalizes AI product for specific user needs.",
    projects: [
      {
        name: "Voice Agent Platform (Alive5)",
        responsibilities: [
          "Architected and deployed an AI-powered voice agent system with intelligent conversation flows, intent detection, and FAQ integration using LiveKit, OpenAI GPT-4o, and FastAPI, handling real-time voice interactions with 291+ available voices",
          "Designed scalable agent workflows and initiated deployment on AWS AgentCore along with AWS server, to support modern, distributed, and scalable agent-based applications",
          "Implemented telephony integrations (Telnyx) including SIP trunking, webhooks, and call transfer for production-grade voice handling",
          "Built LiveChat and CRM integrations with Socket.io, enabling real-time messaging, automatic thread creation, and structured customer data capture"
        ]
      },
      {
        name: "AI Automation & Generative Pipelines (n8n)",
        responsibilities: [
          "Designed and implemented end-to-end AI automation workflows using n8n, integrating external AI services and custom backends",
          "Built API-driven orchestration over hosted generative models including Google Veo, OpenAI Sora and the wider Kie.ai catalogue",
          "Stood up ComfyUI-based generation pipelines across both paid hosted models and experimental local inference",
          "Ran local ComfyUI training and pipeline setup, working through diffusion workflows, model constraints and GPU limitations firsthand"
        ]
      },
      {
        name: "Stories We Tell Platform",
        responsibilities: [
          "Built a full-stack AI-powered story development platform enabling conversational narrative creation",
          "Developed intelligent extraction of structured story elements from conversations",
          "Implemented multi-user sessions with authentication, persistence, and cross-device continuity",
          "Delivered a real-time streaming chat experience with scalable backend APIs"
        ]
      },
      {
        name: "DisasterShield Platform",
        responsibilities: [
          "Built a digital disaster recovery platform connecting homeowners with contractors and insurers",
          "Implemented intelligent contractor matching based on location, expertise, and availability",
          "Integrated secure payments, insurance claim (FNOL) processing, and document generation",
          "Developed real-time notifications, role-based access control, and a mobile-first user experience"
        ]
      }
    ]
  },
  {
    title: "Full Stack Software Engineer at VECTOR Inc.",
    date: "Feb 2025 - May 2025",
    responsibilities: [
      "Spearheaded development and deployment of two flagship products at Vector AI: VFit (Virtual Try-On) and a Height Estimation App that uses computer vision to recommend clothing sizes",
      "Successfully integrated solutions into Splendor, an AI-powered eCommerce fashion store",
      "Built the complete frontend architecture, handled containerization with Docker, and designed the deployment pipeline using AWS EC2 g5.2xlarge",
      "Developed the official company website using Wordpress Elementor Pro and UICore Pro with a strong focus on performance, branding and UX"
    ],
  },
  {
    title: "Front-end Development Intern at Moqah.pk",
    date: "Nov 2024 - Jan 2025",
    responsibilities: [
      "Made authentication flow pages to ensure users can create new accounts, login, and reset passwords with ease",
      "Created a beautiful multi-directional Carousel of images to portray the ongoing events list under Packages page",
      "Made Terms and Conditions page, Privacy Policy page, Refund Policy page, Cookies policy Page, and Event Details page",
      "Fixed bugs in backend flow in related pages"
    ],
  }
]

/*
 * `tag` groups each project by the engineering capability it demonstrates, and
 * drives the accent colour in THE PROOF grid.
 */
export const PROJECTS = [
  {
    title: "Splendor",
    subtitle: "AI-powered fashion e-commerce",
    tag: "Vision",
    description:
      "A fashion storefront with AI virtual try-on and computer-vision body measurement, so shoppers pick a size without guessing.",
    tech: ["React", "Node.js", "Computer Vision"],
    image: "/assets/splendor.jpg",
    link: "https://splendor-store.vercel.app/",
  },
  {
    title: "AI Voice Assistant",
    subtitle: "Real-time conversational agents",
    tag: "Voice",
    description:
      "Configurable voice agents holding natural conversations over live audio, with FAQ grounding and handoff to a human.",
    tech: ["React", "LiveKit", "Voice Agents"],
    image: "/assets/voice-agent.jpg",
    link: "https://voice-agent-livekit.vercel.app/",
  },
  {
    title: "DisasterShield",
    subtitle: "Disaster recovery platform",
    tag: "Platform",
    description:
      "Connects homeowners, contractors and insurers after a disaster — matching, FNOL claim processing, payments and documents.",
    tech: ["React", "Computer Vision", "Payments"],
    image: "/assets/disaster-shield.jpg",
    link: "https://disaster-shield.vercel.app/",
  },
  {
    title: "Stories We Tell",
    subtitle: "Conversational LLM platform",
    tag: "LLM",
    description:
      "Extracts structured entities from a free-form conversation and streams the result back live, with multi-user sessions and cross-device persistence.",
    tech: ["React", "LLM", "Streaming", "Auth"],
    image: "/assets/stories-we-tell.jpg",
    link: "https://stories-we-tell.vercel.app/chat",
  },
  {
    title: "ClipSmith Studios",
    subtitle: "Agency site with live Drive CDN",
    tag: "Web",
    description:
      "A scroll-driven agency site whose entire work grid is generated from one Google Drive folder — service-account auth, folder-to-category mapping and direct CDN delivery with no proxy.",
    tech: ["TanStack Start", "React 19", "Drive API", "Tailwind v4"],
    // A wide logo rather than a screenshot, so it must letterbox instead of crop.
    image: "/assets/clipsmith.png",
    imageFit: "contain",
    link: "https://clipsmithstudios.vercel.app/",
  },
  {
    title: "Dark Tunnel",
    subtitle: "Interactive 3D portfolio",
    tag: "3D",
    description:
      "An explorable tunnel where projects hide down branching paths — procedural geometry, physics, positional audio and a graphics settings panel.",
    tech: ["Next.js", "Three.js", "GSAP", "Zustand"],
    image: "/assets/haunted.png",
    link: "https://game.smaffan.com/",
  },
  {
    title: "Abdullah Chughtai",
    subtitle: "Client portfolio build",
    tag: "Web",
    description:
      "A scroll-choreographed portfolio built to a client brief — WebGL transitions, a media-heavy grid, and load behaviour tuned so none of it stutters.",
    tech: ["React", "WebGL", "Motion"],
    image: "/assets/abdullah-chughtai.jpg",
    link: "https://abdullahchughtai.vercel.app/",
  },
  {
    title: "Motion Showcase",
    subtitle: "Streaming media portfolio",
    tag: "Web",
    description:
      "A media-heavy showcase built around lazy-loaded streaming, generated poster frames and a filterable grid — the delivery problem, not the footage.",
    tech: ["React", "Streaming", "Lazy loading"],
    image: "/assets/video-portfolio.jpg",
    link: "https://video.smaffan.com/",
  },
  {
    title: "NewsLake",
    subtitle: "Containerized news data lakehouse",
    tag: "Data",
    description:
      "News ingested into MinIO, transformed through Spark's bronze/silver/gold layers, orchestrated by Airflow, modeled with dbt, and served live through a Next.js site with an AI chatbot (plus a companion Streamlit dashboard) reading straight from Neon Postgres.",
    tech: ["Airflow", "Apache Spark", "dbt", "Neon Postgres", "Next.js"],
    image: "/assets/newslake.jpg",
    link: "https://newslakeoriginal.vercel.app/",
  },
]
