import {
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Pallagani Lalitha Manohar',
  fullName: 'Pallagani Lalitha Manohar',
  initials: 'PLM',
  email: 'lalithamanohar.p@gmail.com',
  phone: '+91 98765 43210',
  location: 'Hyderabad, Telangana, India',
  institution: 'CR Rao AIMSCS',
  institutionFullName:
    'C.R. Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS)',
  degree: 'B.Tech in Computer Science and Applied Mathematics',
  cgpa: '7.32 / 10.0',
  duration: '2022 – 2026',
  linkedin: 'https://linkedin.com/in/lalithamanohar',
  github: 'https://github.com/lalithamanohar',
  leetcode: 'https://leetcode.com/u/lalithamanohar',
  primaryTitle: 'Java Full Stack Developer | REST API & Microservices Engineer',
  secondaryPositioning: 'Computer Science & Applied Mathematics Undergraduate',
  heroTagline:
    'Computer Science & Applied Mathematics undergraduate at C.R. Rao Institute with hands-on enterprise internship experience at Infosys Springboard, specializing in scalable Java Spring Boot microservices, robust REST APIs, and modern React full-stack applications.',
  quote:
    "Hello! I'm Pallagani Lalitha Manohar, an enthusiastic Computer Science & Applied Mathematics undergraduate at C.R. Rao Institute. I specialize in building robust enterprise Java backends, scalable RESTful microservices, and modern, responsive full-stack web applications that solve real-world challenges.",
  availabilityBadge: 'Available for Software Engineering Roles & Internships',
  professionalSummary:
    'Dedicated Computer Science and Applied Mathematics undergraduate at C.R. Rao Institute (CGPA 7.32) with industry-level virtual internship experience at Infosys Springboard. Proven capability in architecting enterprise-grade full stack solutions, high-throughput Spring Boot REST microservices, JPA/Hibernate persistence layers, and dynamic React.js frontends. Demonstrated track record building high-impact platforms including UniRetrieve (campus asset recovery) and AgriGuard (AI crop diagnostic system), alongside consistent algorithmic problem solving on LeetCode and Smart India Hackathon participation.',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Core CS & Languages',
    skills: [
      'Java (Core & Advanced)',
      'Python',
      'C++',
      'C',
      'JavaScript (ES6+)',
      'SQL',
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Discrete Mathematics',
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    skills: [
      'Spring Boot',
      'Java Enterprise',
      'RESTful API Design',
      'Microservices Architecture',
      'Hibernate / JPA',
      'Node.js & Express.js',
      'JSON Web Tokens (JWT)',
      'Maven & Dependency Management',
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    skills: [
      'React.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript (DOM / Events)',
      'Responsive Web Design',
      'Component Architecture',
      'Interactive State Management',
    ],
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    skills: [
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Relational Schema Design',
      'ACID Transactions',
      'SQL Query Optimization & Indexing',
      'CRUD Operations',
      'JDBC / Connection Pooling',
    ],
  },
  {
    id: 'testing',
    name: 'Testing & QA',
    skills: [
      'Postman API Testing',
      'JUnit Unit Testing',
      'Integration Testing',
      'Swagger / OpenAPI Docs',
      'REST Endpoint Validation',
      'Bug Triaging & Debugging',
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Tools',
    skills: [
      'Git & GitHub (Version Control)',
      'Docker Fundamentals',
      'VS Code & IntelliJ IDEA',
      'Linux / Bash Scripting',
      'npm & Build Toolchains',
      'Agile / Scrum Collaboration',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'uniretrieve',
    title: 'UniRetrieve',
    subtitle: 'Centralized Campus Lost & Found Cataloging Platform',
    summary:
      'A modern full-stack web application designed for university communities to centralize lost-and-found asset reporting, automated claim verification, and verified resolutions.',
    category: 'Full Stack & APIs',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Tailwind CSS',
      'JWT Authentication',
      'Multer',
    ],
    highlights: [
      'Constructed responsive REST APIs with Node.js and Express to manage categorized item listings, campus zone tags, and status transitions (Reported, In Review, Claimed, Returned).',
      'Designed normalized document collections in MongoDB with indexing for fast geospatial query execution and search filtering across campus academic blocks.',
      'Implemented clean, mobile-first student portal with instant search, category filters, photo previews, and contact privacy safeguards.',
      'Integrated automated claim verification handling with secure ownership verification dialogues.',
    ],
    githubUrl: 'https://github.com/lalithamanohar/uniretrieve',
    demoType: 'uniretrieve',
  },
  {
    id: 'agriguard',
    title: 'AgriGuard',
    subtitle: 'AI-Powered Crop Disease Diagnosis & Agronomic Advisory Platform',
    summary:
      'A deep learning-driven agricultural diagnostic tool that identifies crop leaf diseases from photographic samples and delivers actionable, localized agronomic treatment recommendations.',
    category: 'AI & Full Stack',
    techStack: [
      'Python',
      'TensorFlow / PyTorch',
      'Flask / FastAPI',
      'React.js',
      'OpenCV',
      'Tailwind CSS',
      'REST APIs',
    ],
    highlights: [
      'Trained a convolutional neural network (CNN) model for leaf image disease classification across multi-crop datasets with 94%+ diagnostic accuracy.',
      'Engineered high-throughput REST API backend in Flask/FastAPI to serve real-time diagnostic inferences with confidence scoring and disease severity metrics.',
      'Delivered localized agronomic treatment recommendations, pesticide advisories, and prevention steps to support rural farming productivity.',
      'Built a responsive web dashboard allowing agronomists and farmers to upload or capture leaf imagery directly with immediate diagnostic breakdown.',
    ],
    githubUrl: 'https://github.com/lalithamanohar/agriguard',
    demoType: 'agriguard',
  },
  {
    id: 'water-billing',
    title: 'Smart Water Billing & Telemetry Platform',
    subtitle: 'Enterprise Microservices System for Consumption Monitoring & Automated Invoicing',
    summary:
      'An enterprise-grade Java full-stack solution built during the Infosys Springboard Virtual Internship to ingest IoT water meter telemetry, compute tiered tariff rates, and automate billing schedules.',
    category: 'Full Stack & APIs',
    techStack: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Hibernate / JPA',
      'React.js',
      'REST APIs',
      'Tailwind CSS',
      'Postman',
    ],
    highlights: [
      'Engineered Spring Boot microservices handling telemetry readings, customer account registries, and dynamic billing generation.',
      'Designed relational MySQL database schemas with foreign key integrity, index tuning, and ACID transaction boundaries.',
      'Constructed role-based administrative dashboard in React for telemetry overview, automated PDF invoice exports, and consumption alerts.',
      'Validated 25+ REST endpoints with Postman collections and comprehensive OpenAPI documentation.',
    ],
    githubUrl: 'https://github.com/lalithamanohar/smart-water-billing',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Infosys Springboard',
    role: 'Java Full Stack Developer Intern (Virtual Internship)',
    duration: 'August 2024 – Present',
    project: 'Smart Water Usage Monitoring and Automated Billing Management Platform',
    technologies: [
      'Java',
      'Spring Boot',
      'React.js',
      'MySQL',
      'REST APIs',
      'Hibernate / JPA',
      'Tailwind CSS',
      'Postman',
      'Maven',
    ],
    responsibilities: [
      'Designed and developed RESTful microservices using Spring Boot for automated water consumption telemetry ingestion, tiered tariff calculations, and billing generation.',
      'Integrated Spring Boot backend with MySQL database using JPA/Hibernate, designing normalized schemas and transaction boundaries for ACID-compliant billing transaction records.',
      'Built responsive administrative analytics dashboard in React.js with interactive consumption graphs and automated PDF invoice generation.',
      'Conducted comprehensive API testing and validation using Postman, ensuring robust error handling, schema validation, and secure HTTP status codes.',
      'Collaborated within an Agile development workflow, participating in weekly milestone reviews and adhering to enterprise clean coding standards.',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution:
      'C.R. Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS)',
    location: 'Hyderabad, Telangana, India',
    degree: 'B.Tech in Computer Science and Applied Mathematics',
    score: 'CGPA: 7.32 / 10.0',
    duration: '2022 – 2026',
  },
  {
    institution: 'Narayana Junior College',
    location: 'Hyderabad, Telangana, India',
    degree: 'Senior Secondary Education (Class XII - MPC)',
    score: 'Percentage: 96.4%',
    duration: '2020 – 2022',
  },
  {
    institution: 'Narayana e-Techno School',
    location: 'Telangana, India',
    degree: 'Secondary School Education (Class X - SSC)',
    score: 'GPA: 10.0 / 10.0',
    duration: '2019 – 2020',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    issuer: 'Infosys Springboard',
    items: [
      'Java Full Stack Specialization',
      'Spring Boot & Microservices Development',
      'Database Management Systems with MySQL',
    ],
  },
  {
    issuer: 'HackerRank',
    items: [
      'Java (Basic & Intermediate) Verified Skill',
      'Problem Solving (Data Structures & Algorithms)',
      'SQL (Intermediate) Verified Skill',
    ],
  },
  {
    issuer: 'University of Helsinki',
    items: [
      'Elements of AI: Introduction to Artificial Intelligence & Machine Learning',
    ],
  },
];

export const CODING_JOURNEY = {
  summary:
    'Dedicated Computer Science & Applied Mathematics undergraduate sharpening algorithmic problem-solving in Java and C++, with a strong focus on core Data Structures, Object-Oriented System Design, and competitive engineering hackathons.',
  leetcodeUrl: 'https://leetcode.com/u/lalithamanohar',
  leetcodeHandle: 'lalithamanohar',
  hackathon: {
    title: 'Smart India Hackathon (SIH)',
    status: 'Internal Qualifier Participant',
    focus: 'Rapid system prototyping, modular REST microservice architecture, and collaborative sprint execution',
  },
  coreFocusAreas: [
    'Data Structures & Algorithms in Java & C++',
    'Object-Oriented System Architecture (OOP)',
    'Enterprise REST Microservices with Spring Boot',
    'Database Schema Optimization & ACID Compliance',
  ],
};
