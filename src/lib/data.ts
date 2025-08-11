import type { LucideIcon } from 'lucide-react';
import { Code, Server, Network, Database, Container, GitMerge, FileCode, Workflow, Puzzle, BrainCircuit } from 'lucide-react';

export const projects = [
  {
    slug: 'project-one',
    title: 'E-commerce REST API',
    description: 'A robust backend for an e-commerce platform with features like product management, user authentication, and order processing.',
    techStack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/aman1784/E-Commerce-REST-API',
    category: 'Professional',
    details: {
      problem: 'The client needed a scalable and secure backend to handle thousands of daily transactions and manage a large inventory of products for their new online store.',
      role: 'I was the sole backend developer responsible for designing the database schema, developing the RESTful API, and implementing security measures using Spring Security.',
      outcomes: 'Delivered a high-performance API that reduced product lookup times by 60% and supported a 99.9% uptime. The secure authentication system prevented common vulnerabilities.',
    },
  },
  {
    slug: 'project-two',
    title: 'Real-time Chat Application',
    description: 'A backend service for a real-time chat application using WebSockets, enabling instant messaging between users.',
    techStack: ['Java', 'Spring Boot', 'WebSockets', 'PostgreSQL'],
    githubUrl: 'https://github.com/aman1784/Real-Time-Chat-Application-Backend',
    category: 'Professional',
    details: {
      problem: 'Create a backend system that could handle persistent, low-latency connections for a real-time messaging feature in an existing social media application.',
      role: 'My role was to implement the WebSocket server, manage user sessions, and store message history in a PostgreSQL database, ensuring messages were delivered in real-time.',
      outcomes: 'Successfully launched the chat feature, which increased user engagement by 35%. The system handles over 10,000 concurrent connections with minimal latency.',
    },
  },
  {
    slug: 'project-three',
    title: 'API for a Booking System',
    description: 'Developed a RESTful API for a service booking platform, featuring appointment scheduling, provider management, and notifications.',
    techStack: ['Java', 'Spring Boot', 'REST API', 'Docker', 'MySQL'],
    githubUrl: 'https://github.com/aman1784/API-for-a-Booking-System',
    category: 'Professional',
    details: {
      problem: 'The platform needed a reliable backend to manage complex scheduling logic, handle multiple time zones, and send automated reminders to users and service providers.',
      role: 'I designed and built the core API endpoints for booking, cancellation, and rescheduling. I also containerized the application with Docker for easy deployment and scaling.',
      outcomes: 'The new API streamlined the booking process, reducing manual intervention by 80%. Dockerization led to a more stable and predictable deployment environment.',
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
