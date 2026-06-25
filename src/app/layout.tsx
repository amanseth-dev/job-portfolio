import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import MouseTrailer from '@/components/mouse-trailer';

export const metadata: Metadata = {
  title: 'Aman Kumar Seth | Backend Developer',
  description: "Portfolio of Aman Kumar Seth, backend developer specializing in Java and Spring Boot.",
  icons: {
    icon: 'https://www.dropbox.com/scl/fi/t4w2d132h2eoeer5kebwo/Profile_Pic.png?rlkey=hgxpn3573gnmoj6h2hao0gaml&st=f69i0tvj&raw=1',
  },
  keywords: 'aman kumar seth, amankrseth, portfolio, Aman Kumar Seth, Java Developer, Software Engineer, Springboot, Backend Developer, backend, Hibernate, amankrseth.netlify.app, Aman Seth, aman kr seth linkedin',
  openGraph: {
    title: 'Aman Kumar Seth | Backend Developer',
    description: 'Portfolio of Aman Kumar Seth, backend developer specializing in Java and Spring Boot.',
    url: 'https://amankrseth.netlify.app',
    siteName: 'Aman Kumar Seth Portfolio',
    images: [
      {
        url: 'https://www.dropbox.com/scl/fi/t4w2d132h2eoeer5kebwo/Profile_Pic.png?rlkey=hgxpn3573gnmoj6h2hao0gaml&st=f69i0tvj&raw=1',
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
    title: 'Aman Kumar Seth | Backend Developer',
    description: 'Portfolio of Aman Kumar Seth, backend developer specializing in Java and Spring Boot.',
    images: ['https://www.dropbox.com/scl/fi/t4w2d132h2eoeer5kebwo/Profile_Pic.png?rlkey=hgxpn3573gnmoj6h2hao0gaml&st=f69i0tvj&raw=1'],
  },
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
