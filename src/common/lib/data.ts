import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/virtual-store.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/financial-risk-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

// export const experiencesData = [
//   {
//     title: 'Trustsoft s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Providing services in the field of information technology services, including administration servers, cloud services, information systems and software development.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Oct 2024 - Present',
//   },
//   {
//     title: 'Granton s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Oct 2024 - Present',
//   },
//   {
//     title: 'WhirrCrew s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Responsible for implemntation of accessible and interactive interface. Working on various projects with AI integration.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Jun 2024 - Present',
//   },
//   {
//     title: 'NAU',
//     location: 'Kyiv, Ukraine',
//     description: `Bachelor's degree in Cybersecurity. The faculty of Cyber Security and Software Engineering.`,
//     icon: React.createElement(BookIcon),
//     date: 'Sep 2022 - Jun 2024',
//   },
// ] as const;

export const experiencesData = [
  {
    title: 'Software Engineer',
    location: 'Cloudforce Technologies, Illinois, United States',
    description:
      'Developed scalable full-stack solutions using React.js, Node.js, and Java Spring Boot. Improved system performance, built RESTful APIs, and architected event-driven data systems with PostgreSQL and Kafka. Led DevOps automation on AWS/Azure and collaborated in Agile teams to deliver features efficiently.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'May 2024 – Present',
  },
  {
    title: "Master's in Management Information Systems  (MIS)",
    location: 'Lamar University, Texas, USA',
    description:
      'Focus in Full Stack Development, Cyber Securities and Data Mining and Predictive Analytics. CGPA: 4.0/4.0',
    icon: React.createElement(BookIcon),
    date: 'Aug 2022 – May 2024',
  },
  {
    title: 'Student Tech Associate',
    location: 'University of Houston-Clear Lake, Houston, TX',
    description:
      'Administered Linux/Unix network infrastructure for 180+ rooms, boosting classroom technology uptime. Automated ticketing in PeopleSoft to resolve 50+ daily technical issues, reducing resolution time by over 30%.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2022 – Jan 2023',
  },
  /*{
    title: 'Custom Software Engineering Associate',
    location: 'Accenture Solutions Pvt. Ltd, Hyderabad, India',
    description:
      'Designed and implemented scalable microservices using Java Spring Boot, reducing API response times by 30%. Led cloud deployment automation on AWS and Azure using Terraform. Mentored junior developers and improved cross-functional collaboration across Agile teams.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2022 – Jun 2023',
  },*/
  {
  title: 'Software Engineer',
  location: 'MRF LTD, Hyderabad, Telangana',
  description:
    'Engineered a full-stack workflow app with Java Spring Boot and JavaScript, automating business processes and reducing manual effort by 30%. Built secure RESTful APIs and a real-time KPI dashboard, driving a 15% increase in data-driven planning. Led zero-downtime migration of 50,000+ customer records to Oracle DB, ensuring data integrity and compliance.',
  icon: React.createElement(BriefcaseBusinessIcon),
  date: 'Aug 2021 – July 2022',
  },
  {
  title: 'Manufacturing Intern',
  location: 'Bharath Dynamics Limited, Hyderabad, India',
  description:
    'Programmed CNC machinery control logic to achieve 0.01mm precision and reduce material waste by 15%. Analyzed production data to identify bottlenecks, improving product reliability and workflow efficiency.',
  icon: React.createElement(BriefcaseBusinessIcon),
  date: 'Jan 2021 – Jul 2021',
  },
  {
  title: 'Bachelor of Technology in Mechanical Engineering',
  location: 'Vellore Institute of Technology, Andhra Pradesh, India',
  description: 'Focus on Object Oriented Programing, Data Structures and Algorithms, Thermodynamics and Fluid Dynamics GPA: 3.2',
  icon: React.createElement(BookIcon),
  date: 'Aug 2017 – May 2021',
  },

/*
  {
    title: 'Custom Software Engineering Associate',
    location: 'Accenture Solutions Pvt. Ltd, Hyderabad, India',
    description:
      'Developed and automated risk exposure processes using Python, reducing manual effort by 65%. Collaborated with global teams to analyze SQL reports and improve project delivery using Agile (Kanban), JIRA, and qTest.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Aug 2021 – Jul 2022',
  },
  {
    title: 'Software Engineer Intern',
    location: 'Plural Technology Private Limited, Pune, India',
    description:
      'Built ML models for predictive maintenance in aerospace logistics. Enhanced the company website with real-time dashboards for better decision-making.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Feb 2021 – Jul 2021',
  },*/
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

// export const projectsData = [
//   {
//     title: 'Audit Master',
//     description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, Due Diligence & more.`,
//     tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'SCRUM Methodology'],
//     imageUrl: auditMasterImg,
//     link: 'https://auditmaster.ai/',
//   },
//   {
//     title: 'Demo Automation of accounting documents processing',
//     description:
//       'Upload any receipt or invoice (even a crumpled one from your pocket) and watch our AI accurately extract its data.',
//     tags: ['TypeScript', 'React', 'Docker', 'Next.js', 'GraphQL', 'Tailwind'],
//     imageUrl: accountingImg,
//     link: 'https://demo.grantonai.cz/',
//   },
//   {
//     title: 'FileDrive',
//     description:
//       'A platform for decentralized file storage with robust user management.',
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'Convex',
//       'Clerk',
//       'Shadcn',
//       'Tailwind',
//     ],
//     imageUrl: filedriveImg,
//     link: 'https://github.com/bbyc4kes/file-drive',
//   },
//   {
//     title: 'Portfolio',
//     description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'Framer Motion',
//       'Cloudinary',
//       'React Email',
//       'Tailwind',
//     ],
//     imageUrl: portfolioImg,
//     link: 'https://github.com/bbyc4kes/portfolio',
//   },

//   {
//     title: 'Surge',
//     description:
//       'Service that allows users to build and manage their own websites with integrated payment processing.',
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'MySQL',
//       'Clerk',
//       'Stripe Connect',
//       'Shadcn',
//       'Tailwind',
//     ],
//     imageUrl: surgeImg,
//     link: 'https://github.com/bbyc4kes/surge',
//   },
// ] as const;

export const projectsData = [
  {
    title: 'Scalable Virtual Storefront',
    description:
      'Built an e-commerce platform supporting 10,000+ users. Integrated Stripe API and Twilio for secure payments and notifications. Delivered 30% faster API responses with GraphQL and improved engagement by 25% through responsive UI.',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'GraphQL',
      'Stripe API',
      'MongoDB',
    ],
    imageUrl: carcatalogImg,
    link: 'https://github.com/AkhileshwarReddySongala',
  },
  {
    title: 'Financial Risk Management Platform',
    description:
      'Developed a real-time risk analysis system using Python and SQL. Automated data ingestion and deployed scalable dashboards with Azure and Docker. Reduced detection latency by 40% and improved decision-making insights.',
    tags: ['Python', 'SQL', 'React.js', 'Node.js', 'Docker', 'Azure'],
    imageUrl: projectmanagementImg,
    link: 'https://github.com/AkhileshwarReddySongala',
  },
] as const;

export const skillsData = [
  // 🌐 Frontend
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],

  // 🛠️ Backend
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Golang', '/svgs/golang.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],

  // 🗄️ Databases
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],

  // ☁️ DevOps / Infra
  ['Docker', '/svgs/Docker.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],

  // 🧰 Tools & Libraries
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],

  // ➕ Misc
  ['', '/svgs/etc.svg'],
] as const;
