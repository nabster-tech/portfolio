// Personal Data Configuration
// Update this file with your actual resume information

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  socialLinks: {
    linkedin: string;
    github: string;
    dribbble?: string;
    twitter?: string;
    portfolio?: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework?: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
  yearsExperience?: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  role: string;
  duration: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
}

// ===== UPDATE THE DATA BELOW WITH YOUR ACTUAL RESUME INFORMATION =====
/* 
export const personalInfo: PersonalInfo = {
  name: "Your Full Name", // UPDATE: Replace with your actual name
  title: "Creative UX Designer & Developer", // UPDATE: Replace with your actual title
  subtitle: "Crafting immersive digital experiences through innovative design and cutting-edge technology", // UPDATE: Your professional tagline
  bio: `I'm a creative professional passionate about crafting immersive digital experiences through innovative design and cutting-edge technology. With over 5 years of experience in UX design and web development, I specialize in creating engaging digital solutions that push the boundaries of what's possible on the web.

My journey began with traditional web design, but quickly evolved to encompass emerging technologies like AR/VR and 3D web experiences. I believe that the future of digital interaction lies in immersive, three-dimensional experiences that engage users on a deeper level.`, // UPDATE: Your professional bio
  location: "Your City, State", // UPDATE: Your location
  email: "your.email@example.com", // UPDATE: Your email
  phone: "+1 (555) 123-4567", // UPDATE: Your phone number
  socialLinks: {
    linkedin: "https://linkedin.com/in/yourprofile", // UPDATE: Your LinkedIn URL
    github: "https://github.com/yourusername", // UPDATE: Your GitHub URL
    dribbble: "https://dribbble.com/yourusername", // UPDATE: Your Dribbble URL (optional)
    twitter: "https://twitter.com/yourusername", // UPDATE: Your Twitter URL (optional)
    portfolio: "https://yourportfolio.com", // UPDATE: Your portfolio URL (optional)
  }
};

export const experiences: Experience[] = [
  // UPDATE: Replace with your actual work experience
  {
    id: "exp1",
    title: "Senior UX Designer", // UPDATE: Your actual job title
    company: "Your Current Company", // UPDATE: Company name
    location: "City, State", // UPDATE: Company location
    startDate: "2024", // UPDATE: Start date
    endDate: "Present", // UPDATE: End date or "Present"
    current: true, // UPDATE: true if current job
    description: "Leading design initiatives for immersive web experiences and digital products.", // UPDATE: Job description
    achievements: [
      // UPDATE: Your actual achievements
      "Led the design and development of 3 major product features that increased user engagement by 40%",
      "Collaborated with cross-functional teams to deliver projects on time and within budget",
      "Mentored junior designers and established design system guidelines"
    ],
    technologies: ["Figma", "React", "TypeScript", "Three.js"] // UPDATE: Technologies you used
  },
  {
    id: "exp2",
    title: "3D Web Developer", // UPDATE: Your previous job title
    company: "Previous Company", // UPDATE: Company name
    location: "City, State", // UPDATE: Company location
    startDate: "2022", // UPDATE: Start date
    endDate: "2024", // UPDATE: End date
    current: false,
    description: "Specialized in Three.js and WebGL development for interactive web experiences.", // UPDATE: Job description
    achievements: [
      // UPDATE: Your actual achievements
      "Developed 5+ interactive 3D web applications using Three.js and WebGL",
      "Optimized performance resulting in 60% faster load times",
      "Collaborated with designers to create award-winning digital experiences"
    ],
    technologies: ["Three.js", "WebGL", "JavaScript", "GSAP"] // UPDATE: Technologies you used
  },
  // Add more experiences as needed
];

export const education: Education[] = [
  // UPDATE: Replace with your actual education
  {
    id: "edu1",
    degree: "Bachelor of Science in Computer Science", // UPDATE: Your degree
    institution: "Your University", // UPDATE: Your university
    location: "City, State", // UPDATE: University location
    graduationDate: "2019", // UPDATE: Graduation date
    gpa: "3.8/4.0", // UPDATE: Your GPA (optional)
    honors: ["Magna Cum Laude", "Dean's List"], // UPDATE: Any honors (optional)
    relevantCoursework: ["Computer Graphics", "Human-Computer Interaction", "Web Development"] // UPDATE: Relevant courses (optional)
  },
  // Add more education entries as needed
];

export const skills: Skill[] = [
  // UPDATE: Replace with your actual skills and proficiency levels
  { name: 'React', category: 'Frontend', level: 95, icon: '⚛️', yearsExperience: 4 },
  { name: 'TypeScript', category: 'Frontend', level: 90, icon: '🔷', yearsExperience: 3 },
  { name: 'Three.js', category: '3D', level: 85, icon: '🎮', yearsExperience: 2 },
  { name: 'Unity', category: 'AR/VR', level: 80, icon: '🎯', yearsExperience: 2 },
  { name: 'Figma', category: 'Design', level: 92, icon: '🎨', yearsExperience: 5 },
  { name: 'GSAP', category: 'Animation', level: 88, icon: '✨', yearsExperience: 3 },
  { name: 'WebGL', category: '3D', level: 75, icon: '🔺', yearsExperience: 2 },
  { name: 'Blender', category: '3D', level: 70, icon: '🌀', yearsExperience: 2 },
  // Add more skills as needed
];

export const projects: Project[] = [
  // UPDATE: Replace with your actual projects
  {
    id: "project1",
    title: "VR Experience Design", // UPDATE: Your actual project title
    category: "AR/VR",
    description: "Immersive virtual reality experience for architectural visualization", // UPDATE: Brief description
    longDescription: "A comprehensive VR application designed for architectural visualization that allows users to walk through and interact with building designs before construction. The project involved creating realistic 3D environments, implementing intuitive VR controls, and optimizing performance for various VR headsets.", // UPDATE: Detailed description
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop", // UPDATE: Your project image URL
    tags: ["Unity", "C#", "Oculus", "3D Modeling"], // UPDATE: Project tags
    year: "2024", // UPDATE: Project year
    liveUrl: "https://your-project-url.com", // UPDATE: Live project URL (optional)
    githubUrl: "https://github.com/yourusername/project", // UPDATE: GitHub URL (optional)
    caseStudyUrl: "/case-study/project1", // UPDATE: Case study URL (optional)
    role: "Lead VR Developer", // UPDATE: Your role in the project
    duration: "3 months", // UPDATE: Project duration
    technologies: ["Unity", "C#", "Oculus SDK", "Blender"], // UPDATE: Technologies used
    challenges: [
      // UPDATE: Challenges you faced
      "Optimizing 3D models for VR performance",
      "Creating intuitive VR user interactions",
      "Ensuring compatibility across different VR headsets"
    ],
    solutions: [
      // UPDATE: Solutions you implemented
      "Implemented LOD (Level of Detail) system for 3D models",
      "Developed custom VR interaction framework",
      "Created universal input abstraction layer"
    ],
    results: [
      // UPDATE: Project results
      "Achieved 90 FPS on Oculus Quest 2",
      "Reduced client revision cycles by 50%",
      "Won 'Best VR Experience' award at local tech conference"
    ]
  },
  // Add more projects following the same structure
];

// Statistics for the hero section
export const heroStats = {
  projects: "50+", // UPDATE: Your project count
  experience: "5+", // UPDATE: Years of experience
  clients: "15+", // UPDATE: Number of clients
};

// Additional certifications or achievements
export const certifications = [
  // UPDATE: Add your certifications
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://credential-url.com"
  },
  // Add more certifications as needed
]; */

export const personalInfo = {
  name: "Tushar Raj",
  title: "Associate Consultant (Junior Software Developer)",
  subtitle: "Full-Stack Developer | Angular | Spring Boot | IoT Enthusiast",
  bio: `Full-stack developer with expertise in Angular, Java Spring Boot, and real-time scheduling applications. Experienced in designing scalable UI/UX solutions, integrating with backend APIs, and optimizing performance for high-volume applications. Passionate about IoT and robotics, with hands-on experience in building hardware-software integrated systems.`,
  location: "Bengaluru, Karnataka, India",
  email: "tusharrajs@gmail.com",
  phone: "+91 9629705381",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/tushar-raj-b5a74a221",
    github: "",
    dribbble: "",
    twitter: "",
    portfolio: "",
  },
};

export const experiences = [
  {
    id: "exp1",
    title: "Associate Consultant (Junior Software Developer)",
    company: "T-Systems ICT India Pvt. Ltd.",
    location: "Bengaluru, India",
    startDate: "Jul 2023",
    endDate: "Present",
    current: true,
    description:
      "Full-stack and frontend development across multiple enterprise projects, optimizing performance and enhancing UX.",
    achievements: [
      "Developed microservices-based airport resource management platform using Angular & DHTMLX for dynamic scheduling.",
      "Integrated Angular Material components with DHTMLX Scheduler for real-time drag-and-drop scheduling.",
      "Optimized Gantt chart performance, reducing drag latency by 20% and improving UX.",
      "Improved dashboard load time by 30% via SQL query optimization and indexing.",
      "Built template-driven configuration using Reactive Forms for dynamic railway station announcements.",
      "Created Angular app for automated presentation generation integrated with FastAPI backend.",
    ],
    technologies: [
      "Angular",
      "Java (Spring Boot)",
      "DHTMLX Scheduler",
      "REST APIs",
      "Jest",
      "Liquibase",
      "PostgreSQL",
      "SQL",
      "Angular Material",
      "RxJS",
      "Reactive Forms",
      "FastAPI",
    ],
  },
  {
    id: "exp2",
    title: "Hardware & Design Intern",
    company: "Robopernr",
    location: "Remote",
    startDate: "Feb 2023",
    endDate: "Mar 2023",
    current: false,
    description:
      "Designed and developed humanoid robot R1 integrating hardware and software systems.",
    achievements: [
      "Designed humanoid robot R1 using Raspberry Pi, ESP32, and ROS.",
      "Implemented voice interaction via Google Assistant API and obstacle detection.",
      "3D modeled and printed robot parts using Blender and Ultimaker Cura.",
    ],
    technologies: [
      "Raspberry Pi",
      "Arduino",
      "Python (rospy)",
      "ROS",
      "Blender",
      "Ultimaker Cura",
      "Google Assistant API",
      "ESP32",
    ],
  },
  {
    id: "exp3",
    title: "Hardware Intern",
    company: "Bhartiya Vidyut Nigam Ltd. (BHAVINI)",
    location: "Kalpakkam, India",
    startDate: "Mar 2022",
    endDate: "Apr 2022",
    current: false,
    description:
      "Developed Python GUIs and Android integration for microcontroller-based systems.",
    achievements: [
      "Developed Python scripts to control microcontrollers.",
      "Created Tkinter GUIs to display real-time microcontroller data.",
      "Built Android app to control Arduino pins via mobile.",
    ],
    technologies: [
      "Python",
      "Tkinter",
      "MIT App Inventor",
      "Arduino",
      "Microcontroller Programming",
    ],
  },
];

export const education = [
  {
    id: "edu1",
    degree: "Bachelor Of Engineering in Information Science",
    institution: "New Horizon College of Engineering",
    location: "Bangalore, India",
    graduationDate: "Aug 2023",
    gpa: "8.92",
    honors: [],
    relevantCoursework: [],
  },
];

export const skills = [
  { name: "Angular", category: "Frontend", level: 90, icon: "🅰️" },
  { name: "Angular Material", category: "Frontend", level: 85, icon: "🎨" },
  { name: "TypeScript", category: "Frontend", level: 88, icon: "💠" },
  { name: "JavaScript", category: "Frontend", level: 85, icon: "🟨" },
  { name: "RxJS", category: "Frontend", level: 80, icon: "🔄" },
  { name: "Java (Spring Boot)", category: "Backend", level: 85, icon: "☕" },
  { name: "Node.js", category: "Backend", level: 75, icon: "🟢" },
  { name: "FastAPI", category: "Backend", level: 70, icon: "⚡" },
  { name: "REST APIs", category: "Backend", level: 85, icon: "🌐" },
  { name: "MySQL", category: "Database", level: 80, icon: "🐬" },
  { name: "PostgreSQL", category: "Database", level: 80, icon: "🐘" },
  { name: "Docker", category: "DevOps", level: 75, icon: "🐳" },
  { name: "Kubernetes", category: "DevOps", level: 70, icon: "⚙️" },
  { name: "Liquibase", category: "DevOps", level: 70, icon: "💧" },
  { name: "ROS", category: "IoT & Robotics", level: 65, icon: "🤖" },
  { name: "Arduino", category: "IoT & Robotics", level: 75, icon: "🔌" },
  { name: "Raspberry Pi", category: "IoT & Robotics", level: 75, icon: "🍇" },
  { name: "Gazebo", category: "IoT & Robotics", level: 60, icon: "🏗️" },
  { name: "LiDAR Scanners", category: "IoT & Robotics", level: 65, icon: "📡" },
  { name: "Blender", category: "3D & Design", level: 70, icon: "🌀" },
  { name: "Ultimaker Cura", category: "3D & Design", level: 75, icon: "🖨️" },
];

export const projects = [
  {
    id: "proj1",
    title: "Horizon Mart",
    category: "Web Development",
    description:
      "Online store built with HTML, CSS, and PHP using MySQL for institution merchandise.",
    longDescription:
      "Developed an online store to allow students to browse and purchase institution merchandise. Implemented database-driven product management using MySQL.",
    image: "",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    year: "2021",
    role: "Full Stack Developer",
    duration: "2 months",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    challenges: [
      "Creating a responsive layout",
      "Integrating secure payment methods",
    ],
    solutions: [
      "Used Bootstrap for responsive design",
      "Implemented secure checkout process",
    ],
    results: ["Functional store launched for student use"],
  },
  {
    id: "proj2",
    title: "Crypto Notifier",
    category: "Automation",
    description:
      "Python-based system using IFTTT to notify when cryptocurrency price crosses a threshold.",
    longDescription:
      "Developed a notification system that uses APIs and IFTTT to track cryptocurrency prices and send alerts.",
    image: "",
    tags: ["Python", "IFTTT"],
    year: "2020",
    role: "Developer",
    duration: "1 month",
    technologies: ["Python", "IFTTT"],
    challenges: [
      "Integrating multiple APIs",
      "Setting up real-time notifications",
    ],
    solutions: [
      "Used requests library for API calls",
      "Configured IFTTT webhooks",
    ],
    results: ["Successfully deployed notification system"],
  },
  {
    id: "proj3",
    title: "Voice-Activated Home Automation",
    category: "IoT",
    description:
      "Custom Google Assistant on Raspberry Pi for controlling home devices using Arduino and sensors.",
    longDescription:
      "Built a voice-controlled home automation system with Raspberry Pi and Arduino, integrating motion sensors and relays.",
    image: "",
    tags: ["Raspberry Pi", "Arduino", "Google Assistant API"],
    year: "2020",
    role: "IoT Developer",
    duration: "3 months",
    technologies: ["Raspberry Pi", "Arduino", "Google Assistant API"],
    challenges: [
      "Integrating hardware with software",
      "Voice recognition accuracy",
    ],
    solutions: ["Used Google Assistant API", "Optimized command processing"],
    results: ["Functional smart home prototype"],
  },
];

export const heroStats = {
  projects: "10+",
  experience: "2+",
  clients: "3+",
};

export const certifications = [
  {
    name: "Publication - A Study on Deep Learning-Based Classification and Identification of Offensive Memes",
    issuer:
      "IEEE - Third International Conference on Artificial Intelligence and Smart Energy (ICAIS)",
    date: "Mar 2023",
    credentialUrl: "https://ieeexplore.ieee.org/document/10073933",
  },
];
