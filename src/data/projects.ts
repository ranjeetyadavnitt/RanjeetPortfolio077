export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "AI / GenAI" | "Computer Vision" | "Enterprise AI" | "Full Stack" | "Machine Learning";
  status: "Production Ready" | "Active Research" | "Deployed Prototype";
  planetColor: string;
  glowColor: string;
  orbitalRadius: number;
  orbitalSpeed: number;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  mainFeatures: string[];
  challenges: string[];
  videoUrl?: string;
  posterUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  isPlaceholderDemo?: boolean;
  isPlaceholderGithub?: boolean;
  featured: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    slug: "finmem-x-financial-decision-support",
    title: "FINMEM-X: AI-Powered Financial Decision Support Platform",
    tagline:
      "Autonomous multi-agent financial intelligence engine synthesizing live market data, SEC filings, and predictive analytics.",
    category: "AI / GenAI",
    status: "Active Research",
    planetColor: "#c2b9d0", // Soft Lavender
    glowColor: "rgba(194, 185, 208, 0.4)",
    orbitalRadius: 3.5,
    orbitalSpeed: 0.22,
    problem:
      "Modern financial analysts and institutional investors grapple with fragmented market intelligence, high latency, and opaque disclosures when synthesizing macroeconomic trends into actionable capital allocation strategies.",
    solution:
      "Engineered an autonomous financial decision platform using LangChain, LangGraph, Ollama, and FastAPI that orchestrates specialized multi-agent systems (News, Technical, Fundamental, Risk, Reflection, and Portfolio Analysis) with RAG over vector embeddings to generate intelligent BUY, HOLD, and SELL recommendations with confidence scores.",
    architecture: [
      "Multi-agent architecture orchestrating News, Technical, Fundamental, Risk, Reflection, and Portfolio agents via LangGraph shared state",
      "Retrieval-Augmented Generation (RAG) using FAISS and vector embeddings for contextual financial information retrieval",
      "Hierarchical memory layer powered by PostgreSQL and semantic retrieval to leverage historical investment experiences",
      "High-performance backend APIs using FastAPI, PostgreSQL, and Yahoo Finance API for live market data ingestion",
      "AI decision engine generating BUY, HOLD, and SELL recommendations with calibrated confidence scores and comprehensive explanations",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Ollama",
      "FAISS",
      "PostgreSQL",
      "TypeScript",
      "Yahoo Finance API",
      "RAG",
      "Multi-Agent Systems",
    ],
    mainFeatures: [
      "Six-Agent Collective Intelligence: Orchestrates News, Technical, Fundamental, Risk, Reflection, and Portfolio agents",
      "Hierarchical Memory & RAG: Integrates FAISS vector stores with PostgreSQL for context-aware historical retrieval",
      "Decision Engine with Confidence Scoring: Generates BUY, HOLD, and SELL ratings backed by reasoning logs",
      "Real-Time Data Pipeline: Live market ticker streams and SEC filing analysis via Yahoo Finance API",
    ],
    challenges: [
      "Managing agent state synchronization across LangGraph without cyclical deadlocks or stale context",
      "Calibrating conflicting signals from fundamental valuation vs technical momentum agents",
      "Optimizing FAISS embedding search latency against high-throughput market news streams",
    ],
    videoUrl: "/videos/project-1.mp4",
    posterUrl: "/videos/project-1.jpg",
    demoUrl: "",
    githubUrl: "https://github.com/ranjeetyadavnitt/finmem",
    isPlaceholderDemo: true,
    isPlaceholderGithub: false,
    featured: true,
  },
  {
    id: "proj-2",
    slug: "digital-learning-platform",
    title: "Digital Learning Platform",
    tagline:
      "Comprehensive full-stack EdTech ecosystem with 17+ interactive modules, live lectures, secure RBAC, and analytics.",
    category: "Full Stack",
    status: "Production Ready",
    planetColor: "#38bdf8", // Sage Green
    glowColor: "rgba(56, 189, 248, 0.4)",
    orbitalRadius: 5.2,
    orbitalSpeed: 0.16,
    problem:
      "Educational institutions and online course creators often encounter fragmented systems for content delivery, real-time testing, payment processing, and student performance tracking, leading to disjointed user experiences.",
    solution:
      "Designed and deployed a full-stack educational platform with 17+ modules encompassing video courses, live lectures, timed practice tests, instant assessments, leaderboards, interactive notes, and administrative controls.",
    architecture: [
      "Frontend architected with React, TypeScript, and Vite for lightning-fast responsive client-side rendering",
      "Secure backend RESTful APIs powered by Express.js with Helmet, CORS, and rate limiting",
      "Scalable NoSQL data layer utilizing AWS DynamoDB for high-throughput student state management",
      "Role-Based Access Control (RBAC) utilizing JWT and Google OAuth authentication with OTP email verification via Brevo API",
      "Razorpay payment gateway integration for seamless tuition and course checkout transactions",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Express.js",
      "Node.js",
      "AWS DynamoDB",
      "JWT",
      "Google OAuth",
      "Razorpay",
      "Brevo API",
      "REST APIs",
    ],
    mainFeatures: [
      "17+ Dedicated Modules: Courses, live lectures, practice exams, notes, real-time chat, and admin panel",
      "Multi-Tier Authentication: JWT + Google OAuth with OTP email verification via Brevo API",
      "Scalable Cloud Backend: Express.js RESTful APIs on AWS DynamoDB with strict RBAC enforcement",
      "Automated Payment Pipeline: Seamless Razorpay checkout integration with instant receipt generation",
      "Performance Analytics: Real-time student progress tracking, leaderboards, and grade reports",
    ],
    challenges: [
      "Designing efficient DynamoDB partition and sort keys to support flexible queries across 17 distinct functional modules",
      "Ensuring zero session loss and uninterrupted test-taking during real-time timed assessments",
      "Implementing resilient webhooks for payment verification with idempotent transaction handlers",
    ],
    videoUrl: "/videos/project-3.mp4",
    posterUrl: "/videos/project-3.jpg",
    demoUrl: "",
    githubUrl: "https://github.com/ranjeetyadavnitt/smartstudy-learnmate",
    isPlaceholderDemo: true,
    isPlaceholderGithub: false,
    featured: true,
  },
  {
    id: "proj-3",
    slug: "drivesafe-ai-driver-monitoring",
    title: "DriveSafeAI: Multimodal Driver Drowsiness & Accident Risk Prediction",
    tagline:
      "Real-time computer vision and sequential deep learning system detecting driver fatigue, distraction, and temporal accident risk.",
    category: "Computer Vision",
    status: "Active Research",
    planetColor: "#9da2af", // Steel Mist
    glowColor: "rgba(157, 162, 175, 0.4)",
    orbitalRadius: 6.8,
    orbitalSpeed: 0.12,
    problem:
      "Driver inattention, micro-sleep, and fatigue are primary catalysts for road accidents worldwide. Conventional sensor-based solutions are expensive, intrusive, and lack predictive temporal accident warning capabilities.",
    solution:
      "Built an AI-driven driver monitoring and accident risk mitigation system utilizing Computer Vision, Deep Learning, and Sequential Learning to assess driver alertness in real time from video streams.",
    architecture: [
      "Object detection and facial landmark tracking pipeline leveraging YOLOv11 and OpenCV",
      "Feature extraction backbone powered by EfficientNet for high-accuracy facial behavioral analysis",
      "Sequential temporal modeling with LSTM networks to compute rolling risk metrics and predict fatigue progression",
      "Multi-anomaly detection assessing eye closure duration (PERCLOS), yawning frequency, head pose deviation, and phone usage",
      "Inference engine optimized in TensorFlow with low-latency alert triggering",
    ],
    techStack: [
      "Python",
      "YOLOv11",
      "EfficientNet",
      "LSTM",
      "OpenCV",
      "TensorFlow",
      "Computer Vision",
      "Deep Learning",
      "Sequential Learning",
    ],
    mainFeatures: [
      "Multimodal Driver Monitoring: Real-time detection of eye closure, yawning, head pose, and phone distraction",
      "YOLOv11 Object Detection: Instant localization of mobile devices and driver behavioral cues",
      "EfficientNet Feature Extractor: Deep representation of micro-expressions and drowsiness indicators",
      "LSTM Temporal Risk Model: Sequential risk assessment evaluating cumulative fatigue trends",
      "Proactive Audio-Visual Alerts: Triggers early warnings before critical microsleep events occur",
    ],
    challenges: [
      "Maintaining high temporal inference frame-rates on consumer hardware without dropping critical alert frames",
      "Mitigating false positives triggered by natural speech, normal head tilts, and varying cabin lighting",
      "Training sequential LSTM models to recognize micro-sleep onset across diverse driver facial structures",
    ],
    videoUrl: "/videos/project-2.mp4",
    posterUrl: "/videos/project-2.jpg",
    demoUrl: "",
    githubUrl: "https://github.com/ranjeetyadavnitt/DriveSafeAI",
    isPlaceholderDemo: true,
    isPlaceholderGithub: false,
    featured: true,
  },
];


