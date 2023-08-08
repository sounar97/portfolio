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
  
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  microsoft,
  
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
    title: "Full Stack Developer(MERN)",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Data Scientist",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "Azure Cloud Intern",
    company_name: "Microsoft-AICTE",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "Jun 2023-Sept 2023",
    points: [
      "Acquired practical experience in working with Azure technologies and services through hands-on projects and assignments.",
      "Enhanced technical skills and knowledge in areas such as cloud computing, virtualization, networking, and security within the Azure environment",
      "It was Virtual Experience,So it was self-learning and explored myself during this Internship"
    ]
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "An Introduction to Machine Learning: A Simple Overview",
    name: "https://sounar.hashnode.dev/an-introduction-to-machine-learning-a-simple-overview",
  },
  
 
];

const projects = [
  {
    name: "Analysis of the world population in 2015",
    description:
      "In this project, we'll work with data from the CIA World Factbook, a compendium of statistics about all of the countries on Earth",
    tags: [
      
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sounar97/sql-data-analysis",
  },
  
  
  
  
];

export { services, technologies, experiences, testimonials, projects };
