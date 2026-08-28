const gdrive = (id) => ({
  view: `https://drive.google.com/file/d/${id}/view?usp=drive_link`,
})

export const profile = {
  name: 'Parth Mudgal',
  headline: 'Full-Stack Developer · AI/ML Enthusiast · B.Tech CSE (AIDS)',
  location: 'Delhi-NCR',
  phone: '+91 8607360283',
  phoneHref: 'tel:+918607360283',
  email: 'parthmudgal28@gmail.com',
  emailHref: 'mailto:parthmudgal28@gmail.com',
  linkedin: 'https://www.linkedin.com/in/parthmudgal28/',
  github: 'https://github.com/ParthMudgal07',
  resume: gdrive('1Ez8EjDC6SVaT5t9KV2m6uwOjmqj0NmE_'),
  avatar: 'https://cdn.corenexis.com/f/p51VpdJZIXu.jpeg',
  shortBio:
    'I build full-stack systems where machine learning and retrieval systems meet real users like compliance tools, health risk models, and document-grounded assistants.',
};

export const certifications = [
  {
    name: 'Internship Certificate',
    issuer: 'Nebel Infotech',
    ...gdrive('1epHe5xLMZu7B6IuRBvOFZSUQG7u5RqqD'),
  },
  {
    name: 'Full Stack Data Science Course',
    ...gdrive('1BqahPy3KJwTGHVptvdldsJR43yBDA8D9'),
  },
];

export const about = {
  paragraphs: [
    "I'm a B.Tech Computer Science student specializing in Artificial Intelligence and Data Science at Vivekananda Institute of Professional Studies – Technical Campus. I care about building systems that are useful, not just demos that look clever.",
    'Most of my recent work sits at the intersection of full-stack engineering and applied AI especially RAG copilots, config-driven platforms, and ML pipelines that turn messy real-world data into decisions people can trust.',
  ],
};

export const skills = [
  {
    category: 'Full-Stack Development',
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'Git / GitHub'],
  },
  {
    category: 'Machine Learning & AI',
    items: [
      'RAG',
      'Scikit-learn',
      'Random Forest',
      'Decision Trees',
      'XGBoost',
      'Neural Networks (CNN, RNN)',
      'LLMs',
    ],
  },
  {
    category: 'Data Analysis',
    items: [
      'Python',
      'NumPy',
      'Pandas',
      'Seaborn',
      'Matplotlib',
      'Power BI',
      'MS Excel',
      'PostgreSQL',
    ],
  },
];

export const projects = [
  {
    name: 'Namora',
    tagline: 'AI-Powered Compliance Management SaaS',
    description:
      'A compliance platform covering seven regulatory frameworks like HACCP, GMP, SEBI LODR, ISO 27001, SOC 2, GDPR, and PCI DSS. New frameworks can be added via data insert without code changes.',
    highlights: [
      'RAG copilot grounded in company-uploaded documents',
      'Tenant-isolated retrieval with pgvector',
      'Automated gap analysis and consolidated PDF reporting',
    ],
    stack: ['React', 'Next.js', 'RAG', 'pgvector', 'MongoDB'],
  },
  {
    name: 'PregaCare',
    tagline: 'Maternal Health & Risk Assessment App',
    description:
      'A full-stack application that helps expecting mothers assess health risks by factoring in environmental signals alongside clinical context.',
    highlights: [
      'ML pipeline stacking Random Forest and XGBoost (scikit-learn) for personalized risk predictions',
      'RAG-based assistant that guides users using environmental data and model outputs',
    ],
    stack: ['React', 'Python', 'scikit-learn', 'XGBoost', 'RAG'],
    link: 'https://pregacare01.vercel.app/',
  },
];

export const experience = [
  {
    role: 'Intern Software Developer',
    company: 'Nebel Infotech',
    place: 'Gurugram',
    period: 'June 2026 – July 2026',
    duration: '5 Weeks',
    points: [
      'Worked on Namora, an AI-powered compliance management platform for Indian businesses.',
      'Contributed to a Retrieval-Augmented Generation (RAG) copilot for document-grounded compliance assistance.',
      'Developed features for automated compliance gap analysis, document processing, and intelligent report generation.',
    ],
  },
  {
    role: 'Member of Aarvak - Machine Learning Society of VIPS-TC',
    period: 'August 2025 – Present',
    duration: '5 Weeks',
    points: [
      'Participated in various machine learning competitions and hackathons.',
      'Volunteered in Code Royale, an event organized by Aarvak which was fusion of coding and Gaming',
    ],
  },
];

export const education = [
  {
    school: 'Vivekananda Institute of Professional Studies – Technical Campus (VIPS-TC)',
    degree: 'B.Tech, Computer Science Engineering (AIDS)',
    period: '2024 – 2028',
    detail: 'Last semester CGPA: 9.1',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];
