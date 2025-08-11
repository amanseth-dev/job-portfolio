import type { LucideIcon } from 'lucide-react';
import { Code, Server, Network, Database, Container, GitMerge, FileCode, Workflow, Puzzle, BrainCircuit } from 'lucide-react';

export const projects = [
  {
    slug: 'garage-management-system',
    title: 'Garage Management System',
    description: 'A system for garages to maintain a digital workbook, manage customer data, and handle billing with payment gateway integration.',
    techStack: ['Java', 'SpringBoot', 'Hibernate', 'MySQL', 'RazorPay'],
    githubUrl: 'https://github.com/aman1784',
    category: 'Professional',
    details: {
      problem: 'Garages traditionally use physical workbooks, which are inefficient for managing customer records, vehicle history, and billing. They needed a digital solution to streamline these operations.',
      role: 'I developed the backend API for the system. This included creating a database schema to store car owner and vehicle information, building endpoints for creating and managing bills, and integrating the RazorPay payment gateway. I also implemented a feature to send bill and service details to customers via WhatsApp.',
      outcomes: 'The system provided garages with a proper online workbook, replacing the cumbersome physical one. It improved data management, streamlined the billing process, and enhanced customer communication through automated notifications.',
    },
  },
  {
    slug: 'ondc-api',
    title: 'ONDC API',
    description: 'An API that connects to the ONDC platform to provide search results for automobile spare parts.',
    techStack: ['Java', 'SpringBoot', 'Hibernate'],
    githubUrl: 'https://github.com/aman1784',
    category: 'Professional',
    details: {
      problem: 'There was a need to create a unified search experience for automobile spare parts by leveraging the Open Network for Digital Commerce (ONDC) platform, which connects multiple sellers.',
      role: 'My responsibility was to develop a robust backend API that could communicate with the ONDC network. I built the functionality to process search requests, query the ONDC platform, and format the results to provide users with accurate and relevant information on available spare parts.',
      outcomes: 'The API successfully connected to the ONDC platform, enabling users to search for and find automobile spare parts from a wide range of suppliers within the network, centralizing the search process.',
    },
  },
  {
    slug: 'contacts-book',
    title: 'Contacts Book',
    description: 'A simple application to store and retrieve contact information from a database.',
    techStack: ['Java', 'MySQL', 'JDBC'],
    githubUrl: 'https://github.com/aman1784/ContactBook',
    category: 'Personal',
    details: {
      problem: 'Create a foundational Java application to manage a personal list of contacts.',
      role: 'As the sole developer, I designed the database schema, implemented JDBC for database connectivity, and built the core logic to store contacts, retrieve them by name or phone number, and fetch all contacts.',
      outcomes: 'Successfully created a command-line-based contact management system that demonstrates core Java and database interaction skills.',
    },
  },
  {
    slug: 'todo-list',
    title: 'Todo List',
    description: 'A full-stack web application to manage a list of tasks.',
    techStack: ['Java', 'SpringBoot', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: '',
    category: 'Personal',
    details: {
      problem: 'Build a classic Todo list application to practice full-stack development, connecting a Java backend to a web interface.',
      role: 'I developed the Spring Boot backend to handle CRUD (Create, Read, Update, Delete) operations for tasks and built a simple frontend with HTML, CSS, and JavaScript to interact with the API.',
      outcomes: 'A functional web application where users can create, view, update, and delete their tasks, showcasing the ability to build and connect a backend API with a frontend interface.',
    },
  },
  {
    slug: 'billing-software',
    title: 'Billing Software',
    description: 'A simple Python-based application to accelerate billing calculations.',
    techStack: ['Python'],
    githubUrl: 'https://github.com/aman1784/billing-software',
    category: 'Personal',
    details: {
      problem: 'Manual billing can be slow and prone to errors. I wanted to create a simple tool to make this process faster and more accurate.',
      role: 'I wrote a Python script that takes item details as input and quickly calculates the total bill, including any applicable taxes. It was a focused exercise in Python scripting.',
      outcomes: 'A lightweight and fast script that serves as a proof-of-concept for a simple billing tool, speeding up the calculation process for customers.',
    },
  },
  {
    slug: 'job-application-api',
    title: 'Job Application API',
    description: 'A backend API for a conceptual job application platform.',
    techStack: ['Java', 'SpringBoot', 'MySQL', 'Hibernate'],
    githubUrl: '',
    category: 'Personal',
    details: {
      problem: 'Design the backend infrastructure for a platform where companies can post job openings and users can leave reviews for companies.',
      role: 'I architected and built the REST API using Spring Boot. This involved creating endpoints for managing companies, jobs, and reviews, and designing the database schema using Hibernate.',
      outcomes: 'A well-structured API that can support a job application platform, with clear endpoints for core features like posting jobs and managing company reviews.',
    },
  },
  {
    slug: 'online-quiz',
    title: 'Online Quiz',
    description: 'An interactive online quiz web application built with vanilla web technologies.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/aman1784/quiz',
    category: 'Personal',
    details: {
      problem: 'Develop an engaging, client-side web application to test a user\'s knowledge on a topic.',
      role: 'Using just HTML, CSS, and JavaScript, I created a quiz app that features randomized multiple-choice questions, a timed interface, and immediate feedback, enhancing engagement and knowledge retention.',
      outcomes: 'A fun and interactive quiz application that runs entirely in the browser, demonstrating strong foundational skills in frontend development.',
    },
  },
];

type Skill = {
  name: string;
  icon: LucideIcon;
};

export const skills: Skill[] = [
    { name: 'Java', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'HTML', icon: FileCode },
    { name: 'CSS', icon: FileCode },
    { name: 'Spring Boot', icon: Server },
    { name: 'REST API', icon: Network },
    { name: 'MySQL', icon: Database },
    { name: 'Swagger/OpenAPI', icon: Network },
    { name: 'VSCode', icon: Code },
    { name: 'IntelliJ Idea', icon: Code },
    { name: 'PyCharm', icon: Code },
    { name: 'Git', icon: GitMerge },
    { name: 'GitHub', icon: GitMerge },
    { name: 'OOPS', icon: Puzzle },
    { name: 'DBMS', icon: Database },
    { name: 'Data Structures and Algorithms', icon: BrainCircuit },
  ];

export const experiences = [
    {
        company: "Autoverse Mobility Pvt. Ltd., Bengaluru",
        role: "Software Engineer",
        duration: "March 2025 - Present",
        description: [
            "Garage Management System api's using Java and SpringBoot framework.",
            "It integrates RazorPay payment gateway."
        ]
    },
    {
        company: "Autoverse Mobility Pvt. Ltd., Bengaluru",
        role: "Software Engineer Intern",
        duration: "Dec 2024 - Feb 2025",
        description: [
            "Developed an api that connects to ONDC platform to provide automobiles spares parts results"
        ]
    },
    {
        company: "Nucleus Software Exports Ltd., Noida",
        role: "Assistant Software Engineer",
        duration: "July 2023 - Jan 2024",
        description: [
            "Developed proficiency in backend development using Java",
            "Developed a module that connects the customer with the banking portal"
        ]
    }
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const achievements = [
    {
        description: 'Five stars in Java at Hackerrank',
        url: 'https://www.hackerrank.com/profile/CS1900100100017'
    },
    {
        description: 'Four stars in Python at Hackerrank',
        url: 'https://www.hackerrank.com/profile/amanseth0412'
    },
    {
        description: 'Scored 157/175 marks in JOB-A-THON 15.0 hiring contest by GeeksForGeeks',
        url: 'https://practice.geeksforgeeks.org/contest/job-a-thon-15-hiring-challenge-for-freshers/leaderboard'
    }
];

export const certifications = [
    {
        title: 'Problem Solving',
        issuer: 'Hackerrank',
        url: 'https://www.hackerrank.com/certificates/0429de5a327e'
    },
    {
        title: 'Java',
        issuer: 'Hackerrank',
        url: 'https://www.hackerrank.com/certificates/7c60ae92b827'
    },
    {
        title: 'SQL',
        issuer: 'Hackerrank',
        url: 'https://www.hackerrank.com/certificates/04abf2e6910e'
    },
    {
        title: 'Python',
        issuer: 'Hackerrank',
        url: 'https://www.hackerrank.com/certificates/ee061e64d007'
    }
];
