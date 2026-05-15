// Mock data for Syed Hyder Abbas's Portfolio

export const personalInfo = {
  name: "Syed Hyder Abbas",
  username: "SyedHyderAbbas",
  title: "AI, Mobile & Full-Stack Architect",
  tagline: "I engineer intelligent platforms integrating ML, Deep Learning, Flutter, and scalable Web Architecture.",
  description: "As an expert developer, I specialize in building high-performance applications with robust State Management (Riverpod), intelligent AI pipelines using Machine & Deep Learning, and highly scalable web architectures powered by Node.js, React, and Tailwind CSS.",
  experience: "Freelance Professional",
  location: "Model Town, Sialkot, Pakistan (Available Worldwide)",
  availability: "Available for Freelance Projects"
};

export const about = {
  story: `Hi, I’m Syed Hyder — an AI, Mobile App, and Full-Stack Engineer.

I specialize in integrating cutting-edge machine learning and deep learning models into production applications. On the mobile front, I build high-performance, fluid cross-platform apps using Flutter combined with advanced state management like Riverpod and Bloc.

On the web, I architect scalable backends and intelligent APIs using Node.js and Laravel, paired with stunning, highly-responsive frontends using React and Tailwind CSS. My approach combines creative problem-solving with rigorous technical execution to deliver solutions that are not only functional but highly attractive and professional.`,
  highlights: [
    "Expert in Machine Learning & Deep Learning integrations",
    "Advanced Flutter Development & State Management (Riverpod)",
    "Scalable Web Architecture using Node.js, React & Tailwind",
    "Reliable engineering partner for end-to-end AI applications"
  ]
};

export const services = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Flutter and Riverpod. Fast, responsive, and native-like experiences.",
    highlights: ["Flutter Development", "Riverpod State Management", "Custom Animations", "App Store Deployment"]
  },
  {
    id: 2,
    title: "SaaS Platform Engineering",
    description: "End-to-end development of web-based SaaS products. Scalable architecture built to handle real business operations.",
    highlights: ["Laravel Platforms", "Node.js APIs", "Custom Web Apps", "Database Architecture"]
  },
  {
    id: 3,
    title: "AI & Backend Solutions",
    description: "Intelligent backend systems and APIs tailored for performance, incorporating AI models for smart automation.",
    highlights: ["Node.js Backends", "AI/ML Integration", "RESTful APIs", "Process Automation"]
  }
];

export const techStack = {
  frontend: [
    { name: "Flutter", icon: "Smartphone" },
    { name: "Riverpod", icon: "Layers" },
    { name: "React", icon: "Code2" },
    { name: "Tailwind CSS", icon: "Paintbrush" }
  ],
  backend: [
    { name: "Node.js", icon: "Server" },
    { name: "Laravel", icon: "Box" },
    { name: "Firebase", icon: "Database" },
    { name: "Python", icon: "Terminal" }
  ],
  database: [
    { name: "SQL", icon: "Database" },
    { name: "PostgreSQL", icon: "HardDrive" },
    { name: "MongoDB", icon: "Save" }
  ],
  aiml: [
    { name: "Machine Learning", icon: "Brain" },
    { name: "Deep Learning", icon: "Network" },
    { name: "TensorFlow", icon: "Cpu" },
    { name: "OpenAI API", icon: "Zap" }
  ],
  devops: [
    { name: "Docker", icon: "Container" },
    { name: "CI/CD", icon: "RefreshCw" },
    { name: "Git & GitHub", icon: "GitBranch" },
    { name: "Agile", icon: "Activity" }
  ]
};

export const certifications = [
  {
    id: 1,
    title: "Network Configuration (ACL, NAT)",
    issuer: "CISCO Packet Tracer",
    date: "12/2024",
    description: "Hands-on configuration of Networks including Access Control Lists and Network Address Translation."
  },
  {
    id: 2,
    title: "Industry Version Control",
    issuer: "GitHub",
    date: "11/2024",
    description: "Mastered Git commands (pull, push, clone, branch) and the fundamental importance of GitHub in production pipelines."
  },
  {
    id: 3,
    title: "Human-Computer Interaction (HCI)",
    issuer: "HCI Workshop",
    date: "03/2025",
    description: "Intensive training on how human interaction shapes software interfaces and industry design standards."
  },
  {
    id: 4,
    title: "Accelerate Your Job Search with AI",
    issuer: "Google",
    date: "12/2025",
    credentialId: "DHMFEA5VKFYG",
    description: "Mastered AI-driven strategies for career advancement and professional positioning."
  },
  {
    id: 5,
    title: "Advanced MySQL Topics",
    issuer: "Meta",
    date: "12/2025",
    credentialId: "SD9MEDX2OFXU",
    description: "Advanced database optimization, stored procedures, and complex query engineering."
  },
  {
    id: 6,
    title: "How to write a research paper",
    issuer: "Higher Education Commission, Pakistan",
    date: "08/2025",
    credentialId: "77YWJEHZ148G",
    description: "Academic writing standards and research methodology for computer science."
  },
  {
    id: 7,
    title: "Database Structures and Management with MySQL",
    issuer: "Meta",
    date: "08/2025",
    credentialId: "6VWW9J68P3SH",
    description: "Core MySQL architecture, normalization, and relational management."
  },
  {
    id: 8,
    title: "Version Control",
    issuer: "Meta",
    date: "07/2025",
    credentialId: "IKEZ2CP9N0TJ",
    description: "Advanced Git workflows and collaborative development practices."
  },
  {
    id: 9,
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "07/2025",
    credentialId: "DU7FOEC353KX",
    description: "Security protocols, threat assessment, and infrastructure protection."
  },
  {
    id: 10,
    title: "Introduction to Databases",
    issuer: "Meta",
    date: "07/2025",
    credentialId: "JC2X24GIF30N",
    description: "Fundamental database concepts and SQL engineering basics."
  },
  {
    id: 11,
    title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
    issuer: "IBM",
    date: "07/2025",
    credentialId: "0CU0A4UC0A50",
    description: "Expert mobile application development using the Flutter framework."
  },
  {
    id: 12,
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    date: "07/2025",
    credentialId: "NN176LJWXNZZ",
    description: "Foundational AI concepts and their impact on global technological ecosystems."
  }
];

export const projects = [
  {
    id: 1,
    title: "Shuttle Service App",
    category: "Mobile",
    problem: "Students and faculty had difficulties finding the actual bus location from their stops.",
    solution: "Developed a cross-platform mobile application utilizing Flutter and Node.js to stream live location updates.",
    tech: ["Flutter", "Riverpod", "Node.js", "MongoDB"],
    outcome: "Significantly improved transportation tracking and efficiency for all faculty and students.",
    image: "/projects/shuttle_ui.png"
  },
  {
    id: 2,
    title: "FitSoul - Women's Fitness App",
    category: "Mobile",
    problem: "Working women lacked time to visit fitness centers and needed a comprehensive platform for health.",
    solution: "Created an all-in-one fitness app offering tailored workout routines and nutrition plans powered by Laravel backend.",
    tech: ["Flutter", "Riverpod", "Laravel", "MySQL"],
    outcome: "Provided an easily accessible health and wellness ecosystem for busy professionals.",
    image: "/projects/fitsoul_ui.png"
  },
  {
    id: 3,
    title: "Inventory Management System",
    category: "Web & Mobile",
    problem: "Local vendors and shopkeepers lacked a fast, efficient way to log and manage their inventory systems.",
    solution: "Built a robust web and mobile solution using Flutter and Node.js to streamline inventory logging and sales reporting.",
    tech: ["Flutter", "Node.js", "Express", "MongoDB"],
    outcome: "Improved data accuracy and operational workflows for retail partners.",
    image: "/projects/inventory_ui.png"
  },
  {
    id: 4,
    title: "Smart E-Commerce Chatbot",
    category: "AI/ML",
    problem: "Customer support teams were overwhelmed with repetitive queries regarding order status and product details.",
    solution: "Integrated an AI chatbot trained on product catalogs into a Flutter mobile app backed by Node.js.",
    tech: ["Flutter", "Node.js", "OpenAI API", "Machine Learning"],
    outcome: "Automated 70% of customer inquiries and boosted user engagement.",
    image: "/projects/chatbot_ui.png"
  },
  {
    id: 5,
    title: "AI Resume Screening System",
    category: "AI/ML",
    problem: "HR teams were spending hours manually screening hundreds of resumes for open positions.",
    solution: "Built an AI-powered portal to automatically parse, analyze, and rank resumes using natural language processing.",
    tech: ["Laravel", "Node.js", "Flutter", "AI APIs"],
    outcome: "Reduced screening time by 85%, improved candidate quality, and helped clients hire faster.",
    image: "/projects/resume_ui.png"
  },
  {
    id: 6,
    title: "Gas Distribution Management",
    category: "Enterprise",
    problem: "A gas distribution company struggled with manual order management and route optimization.",
    solution: "Developed an enterprise mobile and web system prioritizing route optimization powered by Laravel and Flutter.",
    tech: ["Flutter", "Riverpod", "Laravel", "PostgreSQL"],
    outcome: "30% reduction in delivery time and significant improvement in routing efficiency.",
    image: "/projects/gas_ui.png"
  },
  {
    id: 7,
    title: "Healthcare Prognosis Tool",
    category: "AI/ML",
    problem: "Clinics needed a quick way to assess patient risk factors based on historical health data.",
    solution: "Developed an ML model wrapped in a Node.js API, consumed by a Flutter dashboard to predict potential health risks.",
    tech: ["Flutter", "Riverpod", "Node.js", "Machine Learning"],
    outcome: "Provided doctors with an accurate pre-screening tool, improving early diagnosis rates.",
    image: "/projects/healthcare_ui.png"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Nicholas O.",
    role: "CEO & Founder",
    company: "TechStart Inc, USA",
    text: "Syed delivered our mobile app MVP in record time without cutting corners. His code quality and communication were exceptional.",
    rating: 5,
    platform: "Upwork"
  },
  {
    id: 2,
    name: "Saikat G.",
    role: "Founder & CTO",
    company: "DataFlow Analytics, New Zealand",
    text: "Working with Hyder was seamless. He understood our cross-platform requirements and built a Flutter solution that scaled beautifully.",
    rating: 5,
    platform: "Freelancer"
  },
  {
    id: 3,
    name: "Kumar Visas",
    role: "Product Manager",
    company: "FinVest, USA (NY)",
    text: "Hyder transformed our SaaS platform. His mastery over Laravel and attention to performance made a huge operational difference.",
    rating: 5,
    platform: "Upwork"
  },
  {
    id: 4,
    name: "Saurav G.",
    role: "CTO",
    company: "HR Solutions Co, USA",
    text: "The AI resume screening system Hyder built saved our clients hundreds of hours. His technical expertise is outstanding.",
    rating: 5,
    platform: "Fiverr"
  }
];

export const githubStats = {
  totalRepos: 45,
  totalCommits: 1420,
  totalStars: 120,
  activeDays: 310,
  topLanguages: [
    { name: "Dart", percentage: 45, color: "#00B4AB" },
    { name: "PHP", percentage: 25, color: "#4F5D95" },
    { name: "JavaScript", percentage: 15, color: "#f1e05a" },
    { name: "Python", percentage: 10, color: "#3572A5" },
    { name: "Other", percentage: 5, color: "#8b8b8b" }
  ],
  contributionStreak: 42
};

export const process = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "I start by understanding your business goals and technical requirements to architect the perfect mobile or web solution."
  },
  {
    id: 2,
    title: "Agile Development",
    description: "Iterative development with regular updates. You see progress weekly, provide feedback, and we adjust instantly."
  },
  {
    id: 3,
    title: "QA & Testing",
    description: "Rigorous testing across devices and environments to ensure your application is crash-free and production-ready."
  },
  {
    id: 4,
    title: "Deployment & Support",
    description: "I handle App Store, Play Store, and web server deployments, ensuring smooth operations post-launch."
  }
];

export const contact = {
  email: "abbashyder9908@gmail.com",
  phone: "+92 328 7172397",
  social: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/syed-hyder-abbas-73b851230", icon: "Linkedin" },
    { platform: "GitHub", url: "https://github.com/hyderiyam", icon: "Github" }
  ]
};
