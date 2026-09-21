export const portfolioData = {
  // Personal Information
  name: "Al Hussein Al Ahmed",
  title: "Electrical Design Engineer & Software Developer",
  email: "alhusseinalahmed@gmail.com",
  phone: "076-427 05 73",
  location: "Växjö, Sweden",
  linkedin: "https://www.linkedin.com/in/alhusseinalahmed/",
  github: "https://github.com/alhusseinalahmed",

  // About Section
  about:
    "Newly enrolled student in Electrical Engineering (Elkonstruktion) at TUC Vocational College, with a solid technical foundation from a Bachelor's degree in Computer Science at Linnaeus University. I have a deep interest in logic, system development, and software architecture. I am currently seeking an internship (LIA) where I can combine my programming experience with electrical design and industrial automation. Driven, analytical, and eager to bridge the gap between IT and electrical systems.",

  // Education
  education: [
    {
      degree: "Electrical Design Engineer (Elkonstruktör)",
      institution: "TUC Yrkeshögskola",
      year: "2026-2028",
      details:
        "Ongoing higher vocational education focusing on Electric Power, Electrical Installations, Electrical Design in CAD (AutoCAD/MagiCAD), Automation Technology, Contract Law, and Project Management.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Linnaeus University",
      year: "2023-2026",
      details:
        "Completed degree focusing on software engineering principles, algorithms, and modern web technologies. Key coursework includes Object-oriented Programming, Software Design, Computer Security, Algorithms, Networks, and Databases.",
    },
    {
      degree: "Information and Media Technology Program",
      institution: "Maja Beskow Gymnasiet",
      year: "2020-2023",
      details:
        "Specialized program that introduced web development fundamentals including HTML, CSS, JavaScript, Svelte, and game development with Unity. Developed foundational programming skills through practical projects.",
    },
  ],

  // Experience
  experience: [
    {
      position: "Game Developer Intern",
      company: "Acino AB",
      period: "Summer 2023",
      description:
        "Contributed to the development of a custom level editor for an indie game using Unity Engine. Gained experience in game development workflows, C# programming, modular code architecture, and collaborative software development practices in an agile environment.",
    },
  ],

  // Skills (organized by category)
  skills: {
    "Electrical Design & Automation": [
      "AutoCAD",
      "MagiCAD",
      "PLC / Automation",
      "Electric Power & Circuits",
      "Electrical Installations"
    ],
    "Software & Systems": [
      "C# / .NET",
      "Java",
      "Python",
      "C++",
      "JavaScript",
      "Network Programming",
      "Databases (SQL)",
    ],
    "Game Development": ["Unity", "C#", "Photon"],
    "Tools & Technologies": ["Git", "Docker", "VS Code", "Unity Engine"],
  },

  // Projects
  projects: [
    {
      title: "Multiplayer FPS Game with Unity",
      description:
        "A fully functional multiplayer first-person shooter game created independently from scratch with Unity and Photon networking. Features real-time synchronization, C# scripting for game logic, custom matchmaking, character customization, and multiple game modes.",
      technologies: ["C#", "Unity", "Photon"],
      demoLink: "https://youtu.be/WXrrmhJMJf4",
      codeLink: "https://github.com/alhusseinalahmed/Rapid-Reload",
      image: "images/game_project.png",
      category: "Game Development",
      status: "Completed",
      featured: true,
    },
  ],
};
