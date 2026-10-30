export interface Education {
  degree: string;
  field: string;
  institution: string;
  duration: string;
  status: string;
  grade?: string;
  highlights: string[];
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  whatsapp?: string; // WhatsApp phone number (with country code) or wa.me username
  twitter?: string;
}

export interface ProfileData {
  name: string;
  codename: string;
  headline: string;
  shortBio: string;
  tagline: string;
  socials: SocialLinks;
  resumeUrl: string;
  aboutStory: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  education: Education[];
}

export const PROFILE_DATA: ProfileData = {
  name: "Ranjeet Kumar",
  codename: "CODEVERSE",
  headline: "AI Engineer & Full-Stack Architect",
  shortBio:
    "MCA scholar at NIT Tiruchirappalli (AIR 99 in NIMCET 2024). Specialized in Multi-Agent AI systems, RAG, Computer Vision (YOLOv11/LSTM), and full-stack scalable web applications.",
  tagline: "Bridging mathematical rigor, multi-agent neural architectures, and performant user interfaces.",
  socials: {
    email: "bharti3245@gmail.com",
    github: "https://github.com/ranjeetyadavnitt",
    linkedin: "https://www.linkedin.com/in/ranjeetyadavnitt",
    whatsapp: "@ranjeetyadavnitt",
  },
  resumeUrl: "/resume.pdf",
  aboutStory: {
    paragraph1:
      "I am an MCA scholar at the National Institute of Technology, Tiruchirappalli (NIT Trichy), having achieved an All India Rank 99 (AIR 99) in NIMCET 2024. My passion lies at the intersection of Artificial Intelligence, multi-agent reasoning systems, and high-performance full-stack web applications.",
    paragraph2:
      "From architecting autonomous multi-agent financial intelligence engines with LangGraph, RAG, and FAISS (FINMEM-X) to engineering real-time multimodal driver safety and drowsiness prediction systems with YOLOv11 and LSTM (DriveSafeAI), I strive for speed, clarity, and rock-solid architectural fundamentals.",
    paragraph3:
      "Beyond machine learning, I engineer full-stack platforms with modern technologies like React, TypeScript, Express.js, and AWS DynamoDB. I also actively engage in algorithmic problem solving, competitive coding, and campus leadership at NIT Trichy.",
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Science & Advanced Software Engineering",
      institution: "NIT Tiruchirappalli (NIT Trichy)",
      duration: "2024 — 2027",
      status: "Pursuing",
      grade: "CGPA: 7.61",
      highlights: [
        "AIR 99 in NIMCET 2024 (All India Rank 99)",
        "Advanced Data Structures, Algorithms & System Design",
        "Multi-Agent AI, LLMs & Retrieval-Augmented Generation",
        "Member, Alumni Relationship Committee (Version'25)",
      ],
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications & Software Development",
      institution: "T.P.S College, Patna, Bihar",
      duration: "2021 — 2024",
      status: "Completed",
      grade: "70.20%",
      highlights: [
        "Object-Oriented Programming in C++, Java, and Python",
        "Database Management Systems (DBMS & SQL)",
        "Web Application Architectures & Software Engineering",
      ],
    },
    {
      degree: "Class XII (Senior Secondary, BSEB)",
      field: "Science Stream (Mathematics & Physics)",
      institution: "M.L.K.S.S School Chaughara Supaul, BSEB",
      duration: "2019 — 2021",
      status: "Completed",
      grade: "75.00%",
      highlights: [
        "Strong analytical and mathematical reasoning foundation",
        "Higher Secondary Board Examination (BSEB)",
      ],
    },
    {
      degree: "Class X (Secondary Examination, BSEB)",
      field: "General Studies & Mathematics",
      institution: "M.L.K. High School Chaughara Supaul, BSEB",
      duration: "2017 — 2019",
      status: "Completed",
      grade: "83.00%",
      highlights: [
        "First Division with Academic Distinction in Mathematics & Science",
      ],
    },
  ],
};
