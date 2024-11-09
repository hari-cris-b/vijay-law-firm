'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export default function LawFirmLandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, message })
  }

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Smith & Associates</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="text-gray-600 hover:text-gray-800">Services</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-gray-800">Team</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Expert Legal Solutions for Your Needs</h2>
            <p className="text-xl mb-8">Dedicated to providing exceptional legal services with integrity and professionalism</p>
            <Button size="lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Corporate Law', 'Intellectual Property', 'Litigation'].map((service) => (
                <Card key={service}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service}</h3>
                    <p className="text-gray-600">Comprehensive legal solutions tailored to your specific needs.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Smith & Associates is a leading law firm with over 20 years of experience. We are committed to providing
              exceptional legal services to our clients, combining expertise, integrity, and a client-centered approach.
            </p>
          </div>
        </section>

        <section id="team" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['John Smith', 'Jane Doe', 'Mike Johnson','Mike'].map((member) => (
                <Card key={member}>
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold mb-2">{member}</h3>
                    <p className="text-gray-600">Partner</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="mr-2 h-5 w-5 text-gray-600" />
                  <span>123 Law Street, City, State 12345</span>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="mr-2 h-5 w-5 text-gray-600" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-gray-600" />
                  <span>info@smithassociates.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Smith & Associates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}