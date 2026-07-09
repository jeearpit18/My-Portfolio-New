export const personalInfo = {
  name: 'Arpit Mishra',
  firstName: 'Arpit',
  brandName: 'Arpit Mishra',
  title: 'Full Stack & Cloud Engineer',
  location: 'Noida, India',
  phone: '+91 9910149545',
  emails: {
    primary: 'jeearpit18@gmail.com',
    secondary: 'arpit.mishra@student.muit.in',
  },
  summary:
    'Computer Science & Engineering student and technical leader with hands-on experience in full-stack development, distributed systems, cloud architecture, and startup technology implementation.',
  resumeUrl: '/Resume.pdf',
};

export const socialLinks = {
  github: 'https://github.com/jeearpit18',
  linkedin: 'https://linkedin.com/in/arpit-mishra-2b6509283',
  email: `mailto:${personalInfo.emails.primary}`,
};

export const heroContent = {
  greeting: "Hi, I'm Arpit Mishra",
  titleHighlight: 'Full Stack & Cloud Engineer',
  subtitle:
    'I build resilient full-stack products, real-time systems, and cloud-ready architectures backed by practical engineering leadership.',
  ctaPrimary: { text: 'View My Work', href: '#projects' },
  ctaSecondary: {
    text: 'Contact Me',
    href: `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry - Portfolio&body=Hello Arpit,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`,
  },
  ctaResume: { text: 'Request Resume', href: `mailto:${personalInfo.emails.primary}?subject=Resume Request&body=Hi Arpit,%0D%0A%0D%0AI came across your portfolio and would like to request your latest resume.%0D%0A%0D%0AThanks,%0D%0A[Your Name]` },
};

export const aboutContent = {
  heading: 'Hello!',
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Arpit Mishra</span>, a Computer Science & Engineering student based in Noida, India. I work across full-stack development, distributed systems, cloud deployment, and startup technology operations, with a strong focus on building production-ready software that is both scalable and practical.`,
  techStack: ['AWS Cloud', 'FastAPI APIs', 'React / Next.js'],
};

export const skillsContent = {
  badge: 'My Process',
  heading: "Here's how I turn ideas into real-world applications",
  description:
    'From architecture to deployment, I follow a structured engineering process that keeps products stable, scalable, and ready for real users.',
  cards: [
    {
      number: '01',
      title: 'Research',
      text: 'I begin by understanding the problem space, user needs, technical risks, and delivery constraints before locking the architecture.',
    },
    {
      number: '02',
      title: 'Design',
      text: 'I map the system design, core flows, APIs, and data structures so the build stays clean, maintainable, and easy to extend.',
    },
    {
      number: '03',
      title: 'Develop',
      text: 'I build robust frontends, backends, and real-time integrations with a focus on performance, reliability, and readable code.',
    },
    {
      number: '04',
      title: 'Deploy',
      text: 'I test, optimize, and ship to cloud infrastructure with monitoring, rollout discipline, and a bias toward production readiness.',
    },
  ],
  endText: 'Ready to ship!',
};

export const technicalSkills = {
  categories: [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 94 },
        { name: 'JavaScript', level: 91 },
        { name: 'TypeScript', level: 88 },
        { name: 'C / C++', level: 85 },
        { name: 'Java & SQL', level: 82 },
      ],
    },
    {
      title: 'Frontend Engineering',
      skills: [
        { name: 'React', level: 91 },
        { name: 'Next.js', level: 87 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML5 & CSS3', level: 95 },
      ],
    },
    {
      title: 'Backends & APIs',
      skills: [
        { name: 'FastAPI', level: 93 },
        { name: 'Node.js & Express', level: 88 },
        { name: 'REST APIs', level: 94 },
        { name: 'WebSocket Pipelines', level: 90 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (EC2 / S3 / Lambda / VPC)', level: 89 },
        { name: 'Docker & Linux', level: 84 },
        { name: 'GitHub Actions', level: 86 },
        { name: 'CI / CD & Netlify', level: 82 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL & Supabase', level: 83 },
        { name: 'Firebase & NoSQL', level: 81 },
      ],
    },
    {
      title: 'AI, ML & Tooling',
      skills: [
        { name: 'scikit-learn', level: 84 },
        { name: 'OpenAI / Gemini / Claude APIs', level: 89 },
        { name: 'PyTest & Jest', level: 80 },
        { name: 'System Architecture', level: 90 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: 'Experience Highlights',
  heading: 'Leadership, Advocacy, and Technical Ownership',
  description:
    'Alongside building software, I lead technical communities, run workshops, and drive execution across student programs and startup environments.',
  categories: [
    {
      title: 'AWS Campus Leadership',
      description:
        'Created and taught AWS curriculum covering EC2, S3, Lambda, VPC, and serverless deployment patterns for a large student cohort.',
      stats: '300+ Students',
      icon: '\u2601\uFE0F',
    },
    {
      title: 'AI Workshops & Programs',
      description:
        'Scaled Gemini-powered workflows across student projects and trained attendees through hands-on AI and software engineering masterclasses.',
      stats: '100+ Attendees',
      icon: '\u{1F9E0}',
    },
    {
      title: 'Public Speaking & Events',
      description:
        'Hosted technical sessions, coordinated speaker schedules, and delivered presentations that supported student-led innovation on campus.',
      stats: 'Campus Speaker',
      icon: '\u{1F3A4}',
    },
    {
      title: 'Startup Operations',
      description:
        'Defined the technology vision for Vibelicious and built modular software systems that supported checkout, marketing, and analytics operations.',
      stats: 'Founder & CTO',
      icon: '\u26A1',
    },
  ],
  cta: {
    text: 'Connect on LinkedIn',
    href: socialLinks.linkedin,
  },
};

export const leadershipList = [
  {
    title: 'AWS Student Builder Campus Program',
    description:
      'Created and taught AWS cloud curriculum for 300+ students, organized hands-on labs, and mentored project teams through deployment pipelines.',
    role: 'Campus Leader (SBCL)',
    badge: 'AWS Cloud',
  },
  {
    title: 'Google Student Ambassador Program',
    description:
      'Led AI-focused workshops and scaled Gemini API workflows across student software projects within a large technical community.',
    role: 'Student Ambassador - AI & SWE',
    badge: 'Google AI',
  },
  {
    title: 'Tech & Entrepreneurship Society, MUIT',
    description:
      'Managed event operations, coordinated workshops, and delivered presentations that encouraged student innovation and entrepreneurship.',
    role: 'Society Leader, Organizer & Speaker',
    badge: 'Community Leadership',
  },
];

export const internshipsList = [
  {
    organization: 'Vibelicious Noida',
    role: 'Founder & Chief Technology Officer',
    badge: 'Part-time',
    duration: 'Jan 2026 - Present',
    skills: [
      'Built modular ordering and marketing systems',
      'Expanded operations from 1 to 3 micro-kiosks',
      'Reduced checkout friction through digital product design',
      'Created data-driven inventory and analytics workflows',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Business Analytics'],
  },
  {
    organization: 'Feeding India - Zomato',
    role: 'Software Engineering Intern',
    duration: 'Jun 2023 - Jul 2023',
    skills: [
      'Shipped an Android nutrition-quiz application in Java',
      'Implemented quiz logic and state management flows',
      'Worked inside agile sprint cycles',
      'Used analytics feedback to iterate UI updates',
    ],
    tech: ['Java', 'Android SDK', 'Analytics Tools', 'Agile'],
  },
  {
    organization: 'IHFC IIT Delhi - Delhi Robotics League',
    role: 'Embedded Systems Engineer',
    badge: 'Part-time',
    duration: 'Jan 2024 - Nov 2024',
    skills: [
      'Engineered embedded firmware logic',
      'Built low-level motor control routines',
      'Calibrated sensors for competitive robotics',
      'Helped secure a grand final placement',
    ],
    tech: ['C / C++', 'Embedded Systems', 'Motor Controls', 'Sensors'],
  },
];

export const softSkillsList = [
  {
    name: 'Leadership',
    icon: '\u{1F451}',
    desc: 'Leading student programs, managing technical communities, and owning delivery across startup and campus environments.',
  },
  {
    name: 'Public Speaking',
    icon: '\u{1F3A4}',
    desc: 'Delivering workshops, hosting tech events, and presenting engineering ideas clearly to different audiences.',
  },
  {
    name: 'Community Building',
    icon: '\u{1F91D}',
    desc: 'Mentoring student groups, coordinating teams, and creating collaborative spaces for learning and execution.',
  },
  {
    name: 'Communication',
    icon: '\u{1F4AC}',
    desc: 'Explaining technical systems, aligning stakeholders, and translating complex ideas into practical next steps.',
  },
  {
    name: 'Problem Solving',
    icon: '\u{1F9E9}',
    desc: 'Breaking large engineering challenges into reliable systems, fast iterations, and measurable outcomes.',
  },
  {
    name: 'Adaptability',
    icon: '\u{1F31F}',
    desc: 'Switching comfortably between web apps, APIs, embedded systems, cloud workflows, and technical operations.',
  },
  {
    name: 'Entrepreneurship',
    icon: '\u{1F680}',
    desc: 'Building software with business context, execution urgency, and a clear sense of customer and operational impact.',
  },
  {
    name: 'Time Management',
    icon: '\u23F0',
    desc: 'Balancing coursework, builder programs, startup work, and engineering projects while sustaining quality delivery.',
  },
];

export const projects = [
  {
    id: 'throne',
    number: '01',
    badge: 'Flagship IoT Project',
    title: 'THRONE',
    description:
      'A real-time distributed IoT health monitoring system that processes parallel sensor streams through ESP32 nodes into a FastAPI backend and MongoDB database. It deploys a Random Forest model for live risk inference and uses Twilio plus WebSocket notifications for urgent alerts.',
    techTags: [
      'FastAPI',
      'Python',
      'scikit-learn',
      'MongoDB',
      'ESP32',
      'WebSockets',
      'Twilio API',
      'IoT Systems',
    ],
    links: {
      github: 'https://github.com/jeearpit18/Throne_Backend',
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: 'suraksha-setu',
    number: '02',
    badge: 'Distributed Systems',
    title: 'Suraksha Setu',
    description:
      'A zero-internet disaster coordination platform combining an AR-simulation interface with a localized hardware mesh network capable of handling up to 50 peer-to-peer nodes for offline emergency synchronization.',
    techTags: [
      'React',
      'Distributed Systems',
      'Mesh Networking',
      'C / C++',
      'Offline Sync',
      'AR Simulation',
    ],
    links: {
      github: 'https://github.com/jeearpit18/Surakshasetu',
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: 'devorbit',
    number: '03',
    badge: 'Developer Platform',
    title: 'DevOrbit',
    description:
      'An automated developer ecosystem that combines framework management and CI/CD-style deployment pipelines, reducing setup overhead by 40% for engineering teams.',
    techTags: [
      'React',
      'Node.js',
      'Developer Tools',
      'CI / CD',
      'Automation',
      'Microservices',
    ],
    links: {
      github: 'https://github.com/jeearpit18/Byte-Battalion-DevOrbit',
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  showResumeDownload: false,
  featured: [
    {
      name: 'AWS Student Builder Campus Leader',
      issuer: 'Ongoing',
      icon: '\u2601\uFE0F',
    },
    {
      name: 'Google Student Ambassador - AI Lead',
      issuer: 'Ongoing',
      icon: '\u{1F9E0}',
    },
    {
      name: 'A+ scored on Basics of Social Media and Digital Marketing',
      issuer: 'Certification',
      icon: '\u{1F4F1}',
      url: 'https://drive.google.com/drive/folders/1ld1JgdIx1jowYbf0TdYBSKnc6yC8GDcW?usp=drive_link',
    },
  ],
  documentUrl: personalInfo.resumeUrl,
  documentLabel: 'Download Resume',
};

export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'Maharishi University of Information Technology (MUIT)',
  location: 'Noida, India',
  duration: 'Sep 2025 - Present',
  cgpa: '8.0 / 10.0',
  summary:
    'Academic foundation centered on core computer science, modern software engineering, and distributed infrastructure.',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Distributed Infrastructure',
  ],
};

export const footerContent = {
  taglines: [
    'Full Stack Engineering',
    'Distributed Systems & Cloud',
    'APIs, Real-Time Systems, and Product Execution',
  ],
  credential: 'B.Tech CSE | MUIT Noida',
  copyright: `Copyright ${new Date().getFullYear()} Arpit Mishra | Built with React`,
};

export const emailjsConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID',
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
};
