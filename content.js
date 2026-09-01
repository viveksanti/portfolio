/* Edit this file to update the portfolio. The page renders these details automatically. */
window.PORTFOLIO = {
  intro: "I build reliable products end to end — from production APIs and event-driven backends to thoughtful interfaces and autonomous AI agents.",
  about: "For more than four years, I have built software across fintech, healthcare, real estate, hospitality, and education. I take ownership from schema and architecture through release, observability, and iteration — with measurable outcomes as the goal.",
  projects: [
    {
      number: "01",
      title: "MoodLift",
      type: "AI Assistant · Independent",
      description: "An AI-powered conversational application built and deployed end to end — covering the full product experience and integration of an LLM-powered assistant that helps users improve their mood and mindset.",
      tags: ["LLM", "Conversational AI", "Full-stack"],
      accent: "blue",
      link: { label: "trymoodlift.vercel.app", url: "https://trymoodlift.vercel.app" }
    },
    {
      number: "02",
      title: "AgentWatch",
      type: "AI Operations Platform · Independent",
      description: "A full-stack platform designed to provide visibility into AI-agent execution — covering latency, failures, usage, cost, and workflow behaviour — with a cost-free simulation mode for exploration.",
      tags: ["Agentic AI", "Observability", "Full-stack"],
      accent: "coral",
      link: { label: "GitHub", url: "https://github.com/viveksanti/AgentWatch-AI" }
    },
    {
      number: "03",
      title: "Zaps Premium",
      type: "Booking infrastructure · Zaps Group",
      description: "High-availability APIs for premium dine-in, airport-transfer, and Umrah booking workflows, designed for scale with Redis caching, query indexing, and RabbitMQ pipelines.",
      tags: ["TypeScript", "Node.js", "RabbitMQ", "Redis"],
      accent: "lime"
    },
    {
      number: "04",
      title: "eReddyCare",
      type: "Telehealth · Sparity",
      description: "A compliance-critical telehealth platform with secure video consultations and payment flows, delivered across the stack with regulated data handling built into its foundations.",
      tags: ["React", "Node.js", "OpenTok", "HIPAA"],
      accent: "blue"
    },
    {
      number: "05",
      title: "Flipping American Network",
      type: "PropTech · Sparity",
      description: "A US real-estate marketplace supporting real-time listings, live chat, payments, and digital agreement workflows for buyers and property professionals.",
      tags: ["React", "Microservices", "AWS", "Payments"],
      accent: "yellow"
    },
    {
      number: "06",
      title: "Inner Joy",
      type: "EdTech SaaS · Sparity",
      description: "A behavioural-learning platform for educators with Stripe subscription management, cloud media storage, and Jest test coverage.",
      tags: ["NestJS", "React", "PostgreSQL", "Stripe", "AWS S3"],
      accent: "coral"
    }
  ],
  experience: [
    { period: "Mar 2026 — Present", role: "Independent Developer", company: "Self-directed projects", summary: "Building and shipping AI-native products including AgentWatch and Loopwise, from product thinking through implementation." },
    { period: "Aug 2025 — Feb 2026", role: "Software Engineer", company: "Zaps Group", summary: "Owned TypeScript and Node.js booking APIs, improved performance with caching and indexing, and introduced asynchronous pipelines." },
    { period: "Sep 2022 — Aug 2025", role: "Software Developer", company: "Sparity Soft Technologies", summary: "Delivered full-stack healthcare, real-estate, and social SaaS products, including payments, notifications, and AWS microservices." },
    { period: "Jul 2021 — Aug 2022", role: "Node.js Developer", company: "Mauka Technologies (Sparity)", summary: "Built production backend services from scratch and modernised legacy systems for healthcare, manufacturing, and livestock SaaS." }
  ],
  skills: {
    "AI & agents": ["OpenAI API", "LLM integration", "Agentic system design", "Prompt engineering", "AI observability", "Evaluation"],
    "AI tools": ["Codex", "Amazon Q", "GitHub Copilot"],
    "Frontend": ["TypeScript", "JavaScript", "React", "Next.js", "Redux", "HTML5", "CSS3"],
    "Backend": ["Node.js", "Express.js", "NestJS", "Bun", "REST", "GraphQL", "Microservices", "RabbitMQ"],
    "Data": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB"],
    "Cloud & DevOps": ["AWS Lambda", "S3", "EC2", "SQS/SNS", "Docker", "Kubernetes", "Jenkins"],
    "Quality & security": ["Jest", "TDD", "Cypress", "SonarQube", "JWT", "OAuth 2.0", "RBAC", "HIPAA"]
  }
};
