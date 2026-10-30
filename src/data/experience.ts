export interface Experience {
  id: string;
  type: string;
  role: string;
  companyOrOrg: string;
  duration: string;
  location: string;
  description?: string;
  website?: string;
  responsibilities: string[];
  outcomes: string[];
  techStack: string[];
  isCustomizablePlaceholder?: boolean;
}

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "exp-levelpro-education",
    type: "Industry Internship",
    role: "Summer Intern — EdTech Software Developer",
    companyOrOrg: "LEVELPRO Education LLP",
    duration: "May 2025 — Jun 2025",
    location: "Remote / India",
    description:
      "Engineered a comprehensive course-based digital learning platform for students, focusing on streamlined learner onboarding, modular curriculum navigation, and real-time student engagement tracking.",
    responsibilities: [
      "Designed and developed a responsive, course-based learning platform for students.",
      "Implemented seamless workflows for student enrollment, structured content navigation, and course progress tracking.",
      "Gained hands-on experience in the complete EdTech product development lifecycle from conception to delivery.",
      "Collaborated on improving learner engagement metrics and optimizing digital learning workflows.",
      "Integrated frontend UI components with backend APIs for reliable performance and intuitive navigation.",
    ],
    outcomes: [
      "Successfully launched scalable student enrollment and structured course completion pipelines.",
      "Enhanced user experience and learner engagement across web devices for the educational platform.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
    ],
    isCustomizablePlaceholder: false,
  },
  {
    id: "exp-version25-alumni-comm",
    type: "Leadership & Responsibility",
    role: "Member, Alumni Relationship Committee",
    companyOrOrg: "Version’25 — All India MCA Convention, NIT Trichy",
    duration: "Mar 2025",
    location: "Tiruchirappalli, Tamil Nadu, India",
    description:
      "Served as a volunteer coordinator in the Alumni Relationship Committee for Version'25, the premier national All-India MCA symposium at NIT Trichy, connecting nationwide computer science talent with industry leaders and distinguished alumni.",
    responsibilities: [
      "Spearheaded outreach and relationship building with esteemed alumni working across leading global technology firms.",
      "Coordinated convention logistics, event schedules, and delegation reception for students attending from universities across India.",
      "Organized student-alumni interactive sessions, symposium workshops, and technical competitive tracks.",
    ],
    outcomes: [
      "Facilitated seamless engagement between nationwide collegiate participants and distinguished NIT alumni.",
      "Supported successful coordination and execution of the national technical symposium.",
    ],
    techStack: [
      "Leadership",
      "Event Management",
      "Corporate Relations",
      "Public Relations",
      "Team Coordination",
    ],
    isCustomizablePlaceholder: false,
  },
  {
    id: "exp-sportsfete-nitt",
    type: "Extracurricular & Athletics",
    role: "Department Representative (Football & March Past)",
    companyOrOrg: "Sportsfete 2024 — NIT Trichy",
    duration: "2024",
    location: "Tiruchirappalli, Tamil Nadu, India",
    description:
      "Active participant representing the Department of Computer Applications in the annual inter-departmental athletic festival of NIT Trichy.",
    responsibilities: [
      "Represented the Computer Applications department football squad in competitive tournament matches.",
      "Led and marched in the departmental contingent during the ceremonial parade.",
    ],
    outcomes: [
      "Secured Third Place in the ceremonial March Past among all academic departments at NIT Trichy.",
      "Fostered department camaraderie, team discipline, and athletic excellence.",
    ],
    techStack: [
      "Team Leadership",
      "Strategic Collaboration",
      "Discipline",
      "Competitive Athletics",
    ],
    isCustomizablePlaceholder: false,
  },
];
