"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get In Touch</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Other ways to connect</h3>
              <div className="flex justify-center space-x-4 mb-6">
                <Button asChild variant="outline" size="icon">
                  <Link href="https://github.com/aman1784" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href="https://www.linkedin.com/in/aman-seth-926833195" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                 <Button asChild variant="outline">
                  <a href="https://drive.google.com/file/d/1i1Cw4TK1NlQmtSa6DviEg6YJ89SJTtOW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                  <a href="mailto:amanseth0412@gmail.com" className="text-muted-foreground hover:text-foreground">amanseth0412@gmail.com</a>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span className="text-muted-foreground">+91-6386100205</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}