import "remixicon/fonts/remixicon.css";
import html5 from "../assets/icons/html.png";
import css3 from "../assets/icons/css.png";
import js from "../assets/icons/javascript.png";
import bootstrap from "../assets/icons/bootstrap.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import github from "../assets/icons/github.png";
import redux from "../assets/icons/redux.png";
import project1 from "../assets/projects/project_1.jpg";
import project2 from "../assets/projects/project_2.png";
import project3 from "../assets/projects/project_3.jpg";
import project4 from "../assets/projects/project_4.jpg";
import project5 from "../assets/projects/project_5.jpg";
import project6 from "../assets/projects/project_6.png";

// import {
//     RiHtml5Line,
//     RiCss3Line,
//     RiJavascriptLine,
//     RiReactjsLine,
//     RiNodeTree,
//   } from "@remixicon/react";
//   import {
//     RiDatabaseLine,
//     RiCodeSSlashLine,
//     RiGitBranchLine,
//   } from "@remixicon/react";

//   export const NAVIGATION_LINKS = [
//     { label: "Projects", href: "#projects" },
//     { label: "Skills", href: "#skills" },
//     { label: "Work Experience", href: "#work" },
//     { label: "Education", href: "#education" },
//     { label: "Contact", href: "#contact" },
//   ];

//   export const PROFILE = {
//     name: "David Stones",
//     role: "Full Stack Developer",
//     subheading:
//       "With 10 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
//   };

export const PROJECTS = [
  {
    id: 1,
    title: "Paratha Store",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project1,

    link: "https://example-ecommerce.com",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Crypto Bazaar",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "News App",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <img src={html5} width={30} />,
  },
  {
    name: "CSS3",
    icon: <img src={css3} width={30} />,
  },
  {
    name: "JavaScript",
    icon: <img src={js} width={30} />,
  },
  {
    name: "React Js",
    icon: <img src={react} width={30} />,
  },
  {
    name: "Bootstrap",
    icon: <img src={bootstrap} width={30} />,
  },
  {
    name: "Redux",
    icon: <img src={redux} width={30} />,
  },
  {
    name: "Tailwind CSS",
    icon: <img src={tailwind} width={30} />,
  },
  {
    name: "Github",
    icon: <img src={github} width={30} />,
  },
];

export const EXPERIENCES = [
  // {
  //   yearRange: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description:
  //     "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
  //   techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  // },
  {
    yearRange: "Apr 2024 - Present",
    role: "Frontend Developer",
    company: "E-Skills Web ",
    description:
      "Worked extensively with frontend technologies including React.js, Redux, JavaScript, HTML5, and CSS3 to develop dynamic, responsive web applications. Utilized modern UI frameworks like Tailwind CSS and Bootstrap to design seamless, user-friendly interfaces. Integrated various APIs to enhance application functionality and interactivity. Applied efficient state management practices using Redux and Context API for streamlined data handling. Managed version control and collaboration using Git, ensuring smooth project workflows. Deployed applications on Vercel for optimized hosting and continuous integration. Focused on building responsive, user-centric designs to deliver high-quality, impactful web solutions.",
    techStack: [
      "Redux",
      "React Js",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Git",
    ],
  },
  // {
  //   yearRange: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description:
  //     "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
  //   techStack: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   yearRange: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "PayPal",
  //   description:
  //     "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
  //   techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  // },
];

  export const EDUCATION = [
    {
      id: 1,
      degree: "Bachelor of Computer Science & Information Technology",
      institution: "Institute of Engineering & Science, IPS Academy",
      duration: "2019 - 2023",
      description:
        "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
    },
    {
      id: 2,
      degree: "Higher Secondary School",
      institution: "Indira Vidya Mandir H.S. school ",
      duration: "2018 - 2019",
      description:
        "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
    },
    // {
    //   id: 3,
    //   degree: "Certified React Developer",
    //   institution: "Udacity Nanodegree",
    //   duration: "2019",
    //   description:
    //     "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
    // },
  ];

//   export const TESTIMONIAL = {
//     name: "Sarah Doe",
//     title: "CEO, TechCorp",
//     quote:
//       "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
//     image: personImage,
//   };
