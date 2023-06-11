import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    vue,
    umn,
    gmf,
    erp,
    webgmf,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "vue",
      icon: vue,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "GMF Aero Asia",
      icon: gmf,
      iconBg: "#E6DEDD",
      date: "January 2023 - March 2023",
      points: [
        "Developing and maintaining web applications using Vue.JS and Nest.JS",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Creating database structure for backend using PostgresSQL database.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Universitas Multimedia Nusantara",
      icon: umn,
      iconBg: "#E6DEDD",
      date: "March 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using Vue.JS and Nest.JS",
        "Creating database structure for backend using PostgresSQL database.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Design Use Case Diagram, ERD Diagram, Flowchart Application, & ERP Readiness Measurement.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Component Status Web Application",
      description:
        "Web application using Vue.JS for Front-end and Nest.JS for Back-end. This website enable to controlling, monitoring, and reporting component status.",
      tags: [
        {
          name: "vue",
          color: "green-text-gradient",
        },
        {
          name: "nest",
          color: "pink-text-gradient",
        },
        {
          name: "postgres",
          color: "blue-text-gradient",
        },
      ],
      image: webgmf,
      source_code_link: "https://github.com/Boyriz/GMF-Aero-Asia-Reporting-Status",
    },
    {
      name: "ERP Readiness Application",
      description:
        "Web application that enables users to measure readiness for ERP production module implementation.",
      tags: [
        {
          name: "vue",
          color: "green-text-gradient",
        },
        {
          name: "nest",
          color: "pink-text-gradient",
        },
        {
          name: "postgres",
          color: "blue-text-gradient",
        },
      ],
      image: erp,
      source_code_link: "https://github.com/Boyriz/ERP-Readiness-Final-Thesis",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations. This is my front-end application",
      tags: [
        {
          name: "HTML5",
          color: "yellow-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "LARAVEL",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Boyriz/GARUDA-E-Tickets",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };