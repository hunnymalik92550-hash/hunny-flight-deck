import profileAsset from "@/assets/hunny-profile.jpg.asset.json";
import resumeAsset from "@/assets/resume.docx.asset.json";

export const PROFILE_IMAGE = profileAsset.url;
export const RESUME_URL = resumeAsset.url;

export const CONTACT = {
  email: "hunnymalika24@gmail.com",
  phone: "+91-9053034117",
  linkedin: "https://linkedin.com/in/hunny82",
  linkedinLabel: "linkedin.com/in/hunny82",
};

export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const STATS = [
  { value: "3", label: "Aerospace Projects", detail: "UAV · Glider · Parachute" },
  { value: "1", label: "Python Development Internship", detail: "S O Infotech (P) Ltd." },
  { value: "01", label: "UAV Fabrication Experience", detail: "Build · Test · Diagnose" },
  { value: "B.Tech", label: "Aerospace Engineering Student", detail: "LPU, Punjab" },
];

export const SKILL_GROUPS = [
  {
    category: "Programming",
    items: [
      { name: "Python", desc: "Backend logic, automation scripts and application development." },
      { name: "C", desc: "Procedural programming and core computing fundamentals." },
      { name: "C++", desc: "Object-oriented programming and structured problem solving." },
    ],
  },
  {
    category: "Engineering & Design",
    items: [
      { name: "AutoCAD", desc: "Technical drafting and 2D engineering drawings." },
      { name: "SolidWorks", desc: "3D part modelling and design of mechanical assemblies." },
    ],
  },
  {
    category: "Database",
    items: [{ name: "MySQL", desc: "Relational schemas and queries for application data." }],
  },
  {
    category: "Professional Skills",
    items: [
      { name: "Problem Solving", desc: "Diagnosing stability and component issues in builds." },
      { name: "Team Collaboration", desc: "Working within engineering project teams." },
      { name: "Project Management", desc: "Planning fabrication and testing timelines." },
      { name: "Leadership", desc: "Coordinating tasks and guiding team execution." },
    ],
  },
];

export const PROJECTS = [
  {
    no: "01",
    title: "UAV Working — Model Fabrication",
    org: "Lovely Professional University",
    date: "October 2024",
    desc: "Applied principles of lift, drag, thrust and weight during UAV model fabrication. Studied motors, propellers and power sources. Diagnosed flight stability and component-related issues during fabrication and testing.",
    tags: ["UAV", "Propulsion", "Flight Stability", "Fabrication"],
    details: [
      "Applied lift, drag, thrust and weight principles to the airframe build.",
      "Studied motor, propeller and power source selection.",
      "Diagnosed flight stability and component issues during testing.",
    ],
  },
  {
    no: "02",
    title: "Non-Powered Glider — Design & Testing",
    org: "Lovely Professional University",
    date: "September 2024",
    desc: "Designed and tested a lightweight, efficient non-powered glider. Conducted trial flights and refined the design for improved glide distance and stability. Worked collaboratively as part of a team.",
    tags: ["Glider", "Aerodynamics", "Trial Flights", "Teamwork"],
    details: [
      "Designed a lightweight, efficient non-powered glider.",
      "Conducted trial flights and iterated on the design.",
      "Improved glide distance and stability as part of a team.",
    ],
  },
  {
    no: "03",
    title: "Parachute System Design",
    org: "Lovely Professional University",
    date: "August 2024",
    desc: "Designed a controlled-descent parachute system while applying concepts related to drag, airflow and material dynamics.",
    tags: ["Parachute", "Drag", "Airflow", "Materials"],
    details: [
      "Designed a controlled-descent parachute system.",
      "Applied drag and airflow concepts to canopy behaviour.",
      "Considered material dynamics in the system design.",
    ],
  },
];

export const EXPERIENCE = {
  role: "Python Development Intern",
  company: "S O Infotech (P) Ltd. via DUCAT",
  location: "Noida, Uttar Pradesh",
  date: "June 2026",
  points: [
    "One-month internship under a Senior Python Developer",
    "Built and maintained a website",
    "Worked with backend systems and data flow",
    "Worked on core application logic",
    "Developed automation scripts",
    "Improved problem-solving and self-learning abilities",
    "Received strong feedback",
    "Certificate of Internship Completion",
  ],
};

export const EDUCATION = [
  {
    degree: "B.Tech Aerospace Engineering",
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    date: "Since August 2024",
    score: null as string | null,
  },
  {
    degree: "Intermediate (12th)",
    school: "DAV Police Public School",
    location: "Police Line Panipat, Haryana",
    date: "April 2023 – March 2024",
    score: "63%",
  },
  {
    degree: "Matriculation (10th)",
    school: "DAV Police Public School",
    location: "Police Line Panipat, Haryana",
    date: "April 2021 – March 2022",
    score: "81%",
  },
];

export const ABOUT_TEXT =
  "Aerospace Engineering undergraduate with hands-on experience in UAV fabrication, non-powered glider design and testing, and parachute system design. Completed a Python Development Internship involving website development, backend systems, data flow, application logic and automation scripts. Interested in aerospace engineering, UAV systems, aerostructures and software development.";
