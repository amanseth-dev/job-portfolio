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
    slug: 'project-four',
    title: 'Personal Weather App',
    description: 'A simple and clean weather application that provides real-time weather data for any city in the world.',
    techStack: ['React', 'Node.js', 'Express', 'OpenWeatherMap API'],
    githubUrl: 'https://github.com/aman1784',
    category: 'Personal',
    details: {
      problem: 'I wanted to build a practical application to solidify my frontend skills and learn how to work with third-party APIs.',
      role: 'I was the sole developer. I designed the UI, fetched data from the OpenWeatherMap API, and managed the application state.',
      outcomes: 'A fully functional and responsive weather app. This project was a great learning experience in handling asynchronous API calls and managing state in a React application.',
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
        url: 'https://www.hackerrank.com/profile/amanseth0412'
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
        url: 'https://www.hackerrank.com/certificates/693415396599'
    },
    {
        title: 'Java',
        issuer: 'Hackerrank',
        url: 'https://www.hackerrank.com/certificates/693415396599'
    },
    {
        title: 'SQL',
        issuer: 'Hackerrank',
        url: 'https://www.hackerrank.com/certificates/68e2da580459'
    },
    {
        title: 'Python',
        issuer: 'Hackerrank',
        url: 'https://www.hackerrank.com/certificates/97f77bdd2534'
    }
];
