import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import MouseTrailer from '@/components/mouse-trailer';

export const metadata: Metadata = {
  metadataBase: new URL('https://amankrseth.netlify.app'),
  title: 'Aman Kumar Seth | Java Spring Boot Backend Developer',
  description: 'Aman Kumar Seth helps CTOs and engineering leaders build scalable backend systems, resilient APIs, and production-ready Spring Boot services.',
  alternates: {
    canonical: 'https://amankrseth.netlify.app/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/profile-pic.png',
  },
  keywords: 'Aman Kumar Seth, amankrseth, AmanKumarSeth, backend engineer, Java Spring Boot developer, API architect, microservices engineer, backend systems for CTOs, engineering leader portfolio, software engineering leadership, scalable backend systems, Spring Boot API developer',
  openGraph: {
    title: 'Aman Kumar Seth | Java Spring Boot Backend Developer for CTOs & Engineering Leaders',
    description: 'Aman Kumar Seth helps CTOs and engineering leaders build scalable backend systems, resilient APIs, and production-ready Spring Boot services.',
    url: 'https://amankrseth.netlify.app',
    siteName: 'Aman Kumar Seth Portfolio',
    images: [
      {
        url: 'https://amankrseth.netlify.app/profile-pic.png',
        width: 800,
        height: 600,
        alt: 'Aman Kumar Seth',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Kumar Seth | Java Spring Boot Backend Developer for CTOs & Engineering Leaders',
    description: 'Aman Kumar Seth helps CTOs and engineering leaders build scalable backend systems, resilient APIs, and production-ready Spring Boot services.',
    images: ['https://amankrseth.netlify.app/profile-pic.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aman Kumar Seth',
  url: 'https://amankrseth.netlify.app',
  jobTitle: 'Java Spring Boot Backend Developer',
  description: 'Backend engineer specializing in scalable APIs, microservices, and backend systems for CTOs and engineering leaders.',
  sameAs: [
    'https://www.linkedin.com/in/aman-seth-926833195',
    'https://github.com/aman1784',
    'https://leetcode.com/u/amanseth-syntax-sniper/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="google-site-verification" content="google5a9e663dd6fb17c2.htm" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <MouseTrailer />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
