import type { LucideIcon } from 'lucide-react';
import { Code, Server, Network, Database, Container, GitMerge } from 'lucide-react';

export const projects = [
  {
    slug: 'project-one',
    title: 'E-commerce REST API',
    description: 'A robust backend for an e-commerce platform with features like product management, user authentication, and order processing.',
    techStack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/aman1784',
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
    githubUrl: 'https://github.com/aman1784',
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
    githubUrl: 'https://github.com/aman1784',
    details: {
      problem: 'The platform needed a reliable backend to manage complex scheduling logic, handle multiple time zones, and send automated reminders to users and service providers.',
      role: 'I designed and built the core API endpoints for booking, cancellation, and rescheduling. I also containerized the application with Docker for easy deployment and scaling.',
      outcomes: 'The new API streamlined the booking process, reducing manual intervention by 80%. Dockerization led to a more stable and predictable deployment environment.',
    },
  },
];

type Skill = {
  name: string;
  icon: LucideIcon;
};

export const skills: Skill[] = [
  { name: 'Java', icon: Code },
  { name: 'Spring Boot', icon: Server },
  { name: 'REST APIs', icon: Network },
  { name: 'Hibernate', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', icon: Container },
  { name: 'Git', icon: GitMerge },
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
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];
