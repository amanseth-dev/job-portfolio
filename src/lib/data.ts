import type { LucideIcon } from 'lucide-react';
import { Braces, Code, Server, Network, Database, Container, GitMerge, FileCode, Workflow, Puzzle, BrainCircuit, TestTube, Shield, ShipWheel, Package, Boxes } from 'lucide-react';

export const projects = [
  {
    slug: 'garage-management-system',
    title: 'Garage Management System',
    description: 'Backend for a garage-management platform used by 20+ garages: onboarding, inspection, quotes, approvals, service and online payments.',
    techStack: ['Java 17', 'SpringBoot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'RazorPay API', 'Memcached', 'AWS S3'],
    githubUrl: '',
    liveUrl: '',
    videoUrl: '',
    category: 'Professional',
    featured: true,
    details: {
      summary: 'Digital workbook and billing backend that replaces paper job cards for garages. Built at Autoverse Mobility (2025-26) and used by 20+ garages.',
      role: 'Backend developer: built the REST APIs, database schema and third-party integrations.',
      highlights: [
        'Modelled the full service lifecycle: vehicle onboarding, inspection, quote, customer approval, service, handover and invoicing.',
        'Razorpay payments: payment links, HMAC signature verification and idempotent webhook handling. About 150-200 payments/day (~₹1 lakh/day) with zero failed webhooks.',
        'Customer-facing cost estimator: enter a car number to see estimated service prices at any onboarded garage.',
        'Cut a slow API from 6-7 s to 1-3 s using database indexes and Memcached caching.',
        'Fixed a half-day outage caused by a breaking Zoho Inventory API change: worked with Zoho, remapped the new response, tested and deployed within a day.',
        'Invoice PDFs stored in AWS S3; bill and service details sent to customers on WhatsApp.',
      ],
      note: 'Production system, so the source code is private.',
    },
  },
  {
    slug: 'ondc-api',
    title: 'ONDC API',
    description: 'Internship project: a Spring Boot API that searches the ONDC network for automobile spare parts and returns results from multiple sellers in one place.',
    techStack: ['Java', 'SpringBoot', 'Spring Data JPA', 'Hibernate', 'MySQL'],
    githubUrl: 'https://github.com/aman1784',
    liveUrl: '',
    videoUrl: '',
    category: 'Professional',
    featured: true,
    details: {
      summary: 'A unified spare-parts search for automobiles built on the Open Network for Digital Commerce (ONDC), which connects many sellers.',
      role: 'Backend developer (internship at Autoverse Mobility): built the API end to end.',
      highlights: [
        'Accepts search requests, queries the ONDC network, and returns the results in one consistent response format.',
        'Centralises spare-parts discovery across multiple sellers so users search once instead of checking each seller.',
      ],
      note: 'Built during my internship, so the source code is private.',
    },
  },
  // {
  //   slug: 'customer-car-services',
  //   title: 'Customer Car Services',
  //   description: 'A website where customers can enter and decode their car number to view the estimated prices for various car services.',
  //   techStack: ['Java', 'SpringBoot', 'Spring Data JPA', 'Hibernate', 'MySQL'],
  //   githubUrl: '',
  //   liveUrl: '',
  //   videoUrl: '',
  //   category: 'Professional',
  //   details: {
  //     summary: 'Customers were unable to find accurate estimates for getting their cars serviced.',
  //     role: 'I developed the backend APIs that fetch and validate data from the database. I formatted this data properly and delivered it to the frontend, which then presented it effectively through the user interface.',
  //     highlights: 'With this exceptional website, customers no longer need to search around for service estimates. They can now easily view the estimated pricing for their car services from the comfort of their home.',
  //   },
  // },
  // ───────────────────────── PERSONAL: FEATURED ─────────────────────────
  {
    slug: 'backend-coffee-api',
    title: 'Caffeine Engine',
    description: 'Cafe ordering platform: Spring Boot backend with Redis caching, a Bloom-filter username check and Razorpay checkout, plus a Next.js frontend.',
    techStack: ['Java', 'SpringBoot', 'Spring Data JPA', 'Hibernate', 'MySQL (TiDB)', 'Redis', 'Guava (Bloom Filter)', 'Razorpay', 'MapStruct', 'Postman', 'Next.js'],
    githubUrl: 'https://github.com/aman1784/backend-coffee',
    liveUrl: 'https://beanhome.netlify.app',
    videoUrl: '',
    category: 'Personal',
    featured: true,
    details: {
      summary: 'End-to-end cafe ordering platform built to practise production-style backend design: caching, payments and clean layering, not just CRUD.',
      role: 'Solo project: designed the schema and architecture, built the backend, and deployed it end to end.',
      highlights: [
        'Layered architecture (Controller → UseCase → Service → Repository) with 20+ REST endpoints for auth, menu/search, cart, checkout and orders.',
        'Redis caching with TTL for product and category reads.',
        'Guava Bloom Filter preloaded from the database at startup: username-availability checks skip the DB for names that definitely do not exist, and fall back to a DB lookup only on a possible match.',
        'Razorpay checkout with async payment-link generation, signature verification and idempotent webhook handling.',
        'Hashids keep sequential database IDs out of API URLs; MapStruct handles entity-to-DTO mapping.',
        'Deployed with the backend on Render (TiDB + Redis) and the Next.js frontend on Netlify.',
      ],
    },
  },
  {
    slug: 'digital-banking-microservices',
    title: 'Digital Banking Management System',
    description:
      'Microservices banking app built as my Virtusa training capstone: service discovery, API gateway, JWT/RBAC security and Kafka events.',
    techStack: ['Java', 'SpringBoot', 'Spring Cloud', 'Kafka', 'JWT', 'Docker', 'Zipkin', 'MySQL'],
    githubUrl: 'https://github.com/aman1784/digital-banking-microservices',
    liveUrl: '',
    videoUrl: '',
    category: 'Personal',
    featured: true,
    details: {
      summary:
        'An individual capstone that simulates a digital banking system as a set of Spring Cloud microservices.',
      role: 'Solo project: designed and built all services and the supporting infrastructure.',
      highlights: [
        'JWT authentication with role-based access control (RBAC) across services.',
        'Eureka service discovery, Config Server for central configuration and an API Gateway for routing.',
        'Kafka-based event communication between services.',
        'Containerized every service with Docker and traced requests end to end with Zipkin.',
      ],
    },
  },
  {
    slug: 'order-event-processing-system',
    title: 'Order Event Processing System',
    description:
      'Event-driven pipeline: a REST API publishes order events to Kafka, and independent consumers handle notifications and analytics in parallel.',
    techStack: ['Java', 'SpringBoot', 'Kafka', 'Docker'],
    githubUrl: 'https://github.com/aman1784/order-event-processing-system',
    liveUrl: '',
    videoUrl: '',
    category: 'Personal',
    featured: true,
    details: {
      summary:
        'A small Kafka project that shows how to decouple downstream services from the API that creates orders.',
      role: 'Solo project: built the producer API, both consumers and the Docker setup.',
      highlights: [
        'Spring Boot REST API publishes JSON order events to Kafka for asynchronous processing.',
        'Notification and analytics consumers run in separate consumer groups, so each processes every event independently and in parallel.',
        'Runs on Docker with both KRaft and ZooKeeper Kafka setups.',
      ],
    },
  },
  // ───────────────────────── PERSONAL: SMALLER PROJECTS ─────────────────────────
  {
    slug: 'job-application-api',
    title: 'Job Application API',
    description: 'A backend API for a conceptual job application platform.',
    techStack: ['Java', 'SpringBoot', 'MySQL', 'Hibernate'],
    githubUrl: '',
    liveUrl: '',
    videoUrl: '',
    category: 'Personal',
    featured: false,
    details: {
      summary: 'Backend practice project for a conceptual job-application platform.',
      role: 'Solo project: designed the schema and built the API.',
      highlights: [
        'Endpoints for managing companies, job postings and company reviews.',
        'Relational schema designed with Hibernate/JPA entities and relationships.',
      ],
    },
  },
  {
    slug: 'docker-commands',
    title: 'Docker Commands',
    description: 'A concise Docker CLI cheat sheet with examples for images, containers and volumes.',
    techStack: ['Docker', 'CLI'],
    githubUrl: 'https://github.com/aman1784/docker-commands',
    liveUrl: '',
    videoUrl: '',
    category: 'Personal',
    featured: false,
    details: {
      summary: 'A personal quick-reference for everyday Docker workflows, kept in one README.',
      role: 'Solo project.',
      highlights: [
        'Commands and examples for building images, running containers and managing volumes.',
      ],
    },
  },
  {
    slug: 'todo-list',
    title: 'Todo List',
    description: 'Full-stack task manager: Spring Boot CRUD backend with a Thymeleaf web UI.',
    techStack: ['Java', 'SpringBoot', 'Spring Data JPA', 'Hibernate', 'H2 Database', 'Thymeleaf'],
    githubUrl: 'https://github.com/aman1784/todo-list',
    liveUrl: 'https://todo-list-backend-frontend.onrender.com',
    videoUrl: 'https://www.dropbox.com/scl/fi/4qd2kebk8f1ogttc3805h/todo_list.mp4?rlkey=gh93d575wosf0crcapf836mwr&st=ekmvlv7q&raw=1',
    category: 'Personal',
    featured: false,
    details: {
      summary: 'A first full-stack project connecting a Spring Boot backend to a server-rendered web interface.',
      role: 'Solo project.',
      highlights: [
        'Create, view, update and delete tasks through Spring Data JPA.',
        'Thymeleaf frontend served by the same Spring Boot app; deployed on Render.',
      ],
    },
  },
  {
    slug: 'contacts-book',
    title: 'Contacts Book',
    description: 'Command-line contacts manager in plain Java and JDBC with MySQL storage.',
    techStack: ['Java', 'MySQL', 'JDBC'],
    githubUrl: 'https://github.com/aman1784/ContactBook',
    liveUrl: '',
    videoUrl: '',
    category: 'Personal',
    featured: false,
    details: {
      summary: 'A foundational project to practise Java database access without a framework.',
      role: 'Solo project.',
      highlights: [
        'Raw JDBC connectivity with a hand-designed contacts schema.',
        'Add contacts, search by name or phone number, and list all contacts.',
      ],
    },
  },
  {
    slug: 'online-quiz',
    title: 'Online Quiz',
    description: 'An interactive online quiz web application built with HTML, CSS, Javascript.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/aman1784/quiz',
    liveUrl: 'https://aman1784.github.io/quiz/',
    videoUrl: 'https://www.dropbox.com/scl/fi/uu7v4cjduap7wexka183b/online_quiz.mp4?rlkey=ihqfuoqyetb0wn155bs67lg3p&st=8rr5q6bu&raw=1',
    category: 'Personal',
    featured: false,
    details: {
      summary: 'Develop an engaging, client-side web application to test a user\'s knowledge on a topic.',
      role: 'Using just HTML, CSS, and JavaScript, I created a quiz app that features randomized multiple-choice questions, a timed interface, and immediate feedback, enhancing engagement and knowledge retention.',
      highlights: [
        'A fun and interactive quiz application that runs entirely in the browser, demonstrating strong foundational skills in frontend development.',
      ],
    },
  },
  
  // {
  //   slug: 'billing-software',
  //   title: 'Billing Software',
  //   description: 'A simple Python-based application to accelerate billing calculations.',
  //   techStack: ['Python'],
  //   githubUrl: 'https://github.com/aman1784/billing-software',
  //   category: 'Personal',
  //   details: {
  //     summary: 'Manual billing can be slow and prone to errors. I wanted to create a simple tool to make this process faster and more accurate.',
  //     role: 'I wrote a Python script that takes item details as input and quickly calculates the total bill, including any applicable taxes. It was a focused exercise in Python scripting.',
  //     highlights: 'A lightweight and fast script that serves as a proof-of-concept for a simple billing tool, speeding up the calculation process for customers.',
  //   },
  // }
];

type Skill = {
  name: string;
  icon: LucideIcon;
};

export const skills: Skill[] = [
    { name: 'Java', icon: Braces },
    { name: 'Python', icon: Braces },
    { name: 'Spring Boot', icon: Server },
    { name: 'Spring Security', icon: Shield },
    { name: 'Docker', icon: Container },
    { name: 'Microservices', icon: Boxes },
    { name: 'Spring Cloud', icon: Workflow },
    { name: 'MySQL', icon: Database },
    { name: 'Data Structures and Algorithms', icon: BrainCircuit },
    { name: 'HTML', icon: FileCode },
    { name: 'CSS', icon: FileCode },
    { name: 'IntelliJ Idea', icon: Code },
    { name: 'REST API', icon: Network },
    { name: 'Git', icon: GitMerge },
    { name: 'Swagger/OpenAPI', icon: Network },
    { name: 'VSCode', icon: Code },
    { name: 'GitHub', icon: GitMerge },
    { name: 'PyCharm', icon: Code },
    { name: 'OOPS', icon: Puzzle },
    { name: 'DBMS', icon: Database },
    { name: 'Gen AI', icon: BrainCircuit },
    { name: 'Redis Cache', icon: Database },
    { name: 'JUnit5', icon: TestTube }
  ];

export const experiences = [
    {
      company: "Virtusa Consulting Services Ltd., Bangalore",
      role: "Engineer",
      duration: "Jan 2026 - Present",
      description: [
        "Completed enterprise training in Java, Spring Boot, and Microservices Architecture.",
        "Built capstone project simulating a Digital Banking Management System using Java and Spring Boot.",
        "Worked with Spring Cloud components such as Eureka Server and API Gateway for service discovery and routing.",
        "Practiced secure API development using Spring Security and JWT authentication.",
        "Strengthening backend fundamentals including SQL, REST APIs, distributed systems, and scalable service design."
      ]
    },
    {
        company: "Autoverse Mobility Pvt. Ltd., Bengaluru",
        role: "Software Engineer",
        duration: "March 2025 - Jan 2026",
        description: [
            "Designed, developed, and maintained scalable RESTful APIs for a Garage Management System using Java 17 and the Spring Boot framework.",
            "Integrated the RazorPay payment gateway using their REST APIs, enabling secure and reliable online transactions for all garage services.",
            "Collaborated with the frontend team to define API contracts and ensure seamless data flow.",
            "Utilized Spring Data JPA with MySQL for database operations",
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
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const achievements = [
  {
    description: 'Attended Google AI Bootcamp — learned Stitch by Google and Antigravity (Apr 2026)',
    url: '',
  },
  {
    description: 'Five stars in Java at Hackerrank',
    url: 'https://www.hackerrank.com/profile/CS1900100100017',
  },
  {
    description: 'Four stars in Python at Hackerrank',
    url: 'https://www.hackerrank.com/profile/CS1900100100017',
  },
  {
    description: 'Scored 157/175 marks in JOB-A-THON 15.0 hiring contest by GeeksForGeeks',
    url: 'https://media.geeksforgeeks.org/auth-certificates/1672079400/c6532e518f83d5eb8cd0ec7e9e52d584.png',
  }
];

export const certifications = [
    {
        title: 'Generative AI for Beginners',
        issuer: 'Udemy Course',
        url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-9168e1da-52d5-40ca-a5f7-d7c8e67a9322.jpg'
    },
    {
        title: 'Gen AI',
        issuer: 'Virtusa',
        url: 'https://www.dropbox.com/scl/fi/ilbdkw2vjo530m9cxpm4l/GenAI-Certificate-Virtusa.png?rlkey=3c8ts8wnbfw8rd2ksr8i5sivn&st=hmnuqy72&raw=1'
    },
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

export const trainings = [
    {
        organisation: 'UNITED GLOBAL INFOSERVICE PVT. LTD.',
        area: 'Python'
    }
];

export const education = [
    {
        degree: 'Bachelor of Technology (Computer Science & Engineering)',
        duration: '2019-2023',
        institution: 'United College of Engineering & Research, Prayagraj',
    },
    {
        degree: 'Senior Secondary School (12TH)',
        duration: '2017-2018',
        institution: 'St. John’s School, Jaunpur (ISC Board)',
    },
    {
        degree: 'High School (10TH)',
        duration: '2015-2016',
        institution: 'St. John’s School, Jaunpur (ICSE Board)',
    }
];
