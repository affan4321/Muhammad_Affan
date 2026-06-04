export const SKILLS = [
    {
      title: "AI/ML",
      icons: "aiml.png",
      skills: [
        { skill: "OpenAI GPT", percentage: "85%" },
        { skill: "ComfyUI", percentage: "75%" },
        { skill: "Kie.ai Models", percentage: "70%" },
        { skill: "Computer Vision", percentage: "70%" }
      ]
    },
    {
      title: "Frontend",
      icons: "frontendIcon.png",
      skills: [
        { skill: "React", percentage: "85%" },
        { skill: "JavaScript", percentage: "85%" },
        { skill: "HTML/CSS", percentage: "90%" },
        { skill: "WordPress/Elementor", percentage: "75%" }
      ]
    },
    {
      title: "Backend",
      icons: "backendIcon.png",
      skills: [
        { skill: "FastAPI", percentage: "80%" },
        { skill: "Node.js", percentage: "75%" },
        { skill: "Socket.io", percentage: "80%" },
        { skill: "n8n Automation", percentage: "75%" }
      ]
    },
    {
      title: "Cloud/DevOps",
      icons: "clouddevops.png",
      skills: [
        { skill: "AWS (AgentCore, EC2)", percentage: "80%" },
        { skill: "Docker", percentage: "75%" },
        { skill: "LiveKit", percentage: "75%" },
        { skill: "Telnyx", percentage: "70%" }
      ]
    },
    {
      title: "Databases",
      icons: "databaseIcon.png",
      skills: [
        { skill: "MongoDB", percentage: "75%" },
        { skill: "MySQL", percentage: "70%" }
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
    date: "Sep 2025 - Ongoing",
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
        name: "AI Automation & Video Generation Pipelines (n8n)",
        responsibilities: [
          "Designed and implemented end-to-end AI automation workflows using n8n, integrating external AI services and custom backends",
          "Built automated AI video generation pipelines using Kie.ai's models like Google Veo, OpenAI Sora, and many more via API-driven orchestration",
          "Built ComfyUI-based video generation, including paid hosted models and experimental local pipelines",
          "Explored local ComfyUI training and pipeline setup, gaining hands-on understanding of diffusion workflows, model constraints, and GPU limitations"
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
