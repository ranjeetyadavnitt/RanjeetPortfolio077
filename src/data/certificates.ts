export interface Certificate {
  id: string;
  title: string;
  category: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  imagePlaceholderText: string;
  description: string;
  skillsCovered: string[];
  isVerifiedPlaceholder?: boolean;
  verificationUrl?: string;
  certificateUrl?: string; // Link to view original certificate or document
}

export const CERTIFICATE_CATEGORIES = [
  "All",
  "Academic & Competitive Excellence",
  "Institutional Leadership & Sports",
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: "cert-nimcet-2024",
    title: "All India Rank 99 — NIMCET 2024",
    category: "Academic & Competitive Excellence",
    issuer: "National Institute of Technology (NIT)",
    issueDate: "2024",
    credentialId: "NIMCET-2024-AIR-99",
    imagePlaceholderText: "NIMCET 2024 // ALL INDIA RANK 99",
    description:
      "Secured All India Rank 99 (AIR 99) in the highly competitive National NIT MCA Common Entrance Test (NIMCET) 2024, earning admission into National Institute of Technology, Tiruchirappalli (NIT Trichy).",
    skillsCovered: [
      "Advanced Mathematics",
      "Analytical & Logical Reasoning",
      "Computer Awareness",
      "Quantitative Aptitude",
      "Algorithmic Problem Solving",
    ],
    isVerifiedPlaceholder: false,
    verificationUrl: "https://nimcet.admissions.nic.in/",
    certificateUrl: "/resume.pdf",
  },
  {
    id: "cert-version25-committee",
    title: "Member, Alumni Relationship Committee — Version’25",
    category: "Institutional Leadership & Sports",
    issuer: "NIT Tiruchirappalli (Department of Computer Applications)",
    issueDate: "2025",
    credentialId: "NITT-VERSION25-ARC",
    imagePlaceholderText: "VERSION'25 // ALUMNI COMMITTEE",
    description:
      "Official committee member for Version'25, the annual All-India MCA technical meet at NIT Trichy, driving nationwide alumni outreach and coordinating symposium events.",
    skillsCovered: [
      "Alumni Relations",
      "National Event Management",
      "Corporate Communication",
      "Public Relations",
    ],
    isVerifiedPlaceholder: false,
    verificationUrl: "https://www.nitt.edu/",
    certificateUrl: "/resume.pdf",
  },
  {
    id: "cert-sportsfete-2024",
    title: "Third Place — March Past, Sportsfete 2024",
    category: "Institutional Leadership & Sports",
    issuer: "NIT Tiruchirappalli",
    issueDate: "2024",
    credentialId: "SPORTSFETE-2024-MARCHPAST",
    imagePlaceholderText: "SPORTSFETE 2024 // THIRD PLACE",
    description:
      "Secured Third Place in the ceremonial March Past at Sportsfete 2024, the prestigious inter-departmental sports tournament at NIT Trichy, and represented the C.A. Department in Football.",
    skillsCovered: [
      "Team Coordination",
      "Athletic Leadership",
      "Marching Discipline",
      "Department Representation",
    ],
    isVerifiedPlaceholder: false,
    verificationUrl: "https://www.nitt.edu/",
    certificateUrl: "/resume.pdf",
  },
];
