'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollText, FileCheck, UserCheck2, FileText, CheckCircle, Phone, Scale, Mail } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import emailjs from '@emailjs/browser';

export default function LawFirmLandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        'service_fne3sly',     // Replace with your Service ID
        'template_czv2ip4',    // Replace with your Template ID
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: 'Legal Legends Law Associates', // Add this if you used it in template
        },
        'UoXECWsNw6Vnz9Yol'   // Replace with your Public Key
      );

      if (result.text === 'OK') {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };
  
  const founder = {
    name: "P. Vijayakumar",
    title: "Senior Advocate",
    qualification: "MBA, BL.",
    role: "Founder & Managing Partner",
    image: "/images/placeholder.png"
  };

  const teamMembers = [
    { name: "J. Jaya Pradhap", title: "Advocate", qualification: "BE,BL.", role: "Associate" },
    { name: "K. Jaganathan", title: "Advocate", qualification: "M.Com, BL.", role: "Associate" },
    { name: "S. Sathish", title: "Advocate", qualification: "M.Com, BL.", role: "Associate" },
    { name: "G. Jebaraj", title: "Advocate", qualification: "B.Sc, BL.", role: "Associate" },
    { name: "V. Vignesh", title: "Advocate", qualification: "BA, BL.", role: "Associate" },
    { name: "K. Balaganesh", title: "Advocate", qualification: "BA, BL.", role: "Associate" },
    { name: "M. Ashwini Maruthupandi", title: "Advocate", qualification: "BCA, BL.", role: "Associate" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Scale className="h-8 w-8 mr-2" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Legal Legends Law Associates</h1>
                <p className="text-gray-300">Madras High Court, Chennai</p>
              </div>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="#home" className="hover:text-primary">Home</Link></li>
                <li><Link href="#about" className="hover:text-primary">About</Link></li>
                <li><Link href="#services" className="hover:text-primary">Services</Link></li>
                <li><Link href="#team" className="hover:text-primary">Team</Link></li>
                <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative bg-gray-800 text-white py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/court.webp?height=1080&width=1920"
              alt="Court background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Expert Legal Solutions</h2>
            <p className="text-xl mb-8">Dedicated to providing comprehensive legal services with integrity and professionalism</p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="tel:8248168261" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>8248168261</span>
                </a>
              </Button>
              <Button asChild>
                <a href="tel:8682819999" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>8682819999</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Legacy</h3>
                <p className="text-lg mb-4">
                  Legal Legends Law Associates is a prestigious law firm based in Chennai, specializing in various aspects of legal services. 
                  Our firm has built a strong reputation for providing exceptional legal solutions with a commitment to integrity and professional excellence.
                </p>
                <p className="text-lg mb-4">
                  Led by experienced advocates, our team brings together decades of combined experience in handling complex legal matters, 
                  from property documentation to marriage registration and notary services.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg mb-4">
                  We are dedicated to providing comprehensive legal solutions while maintaining the highest standards of professional ethics. 
                  Our mission is to ensure accessible, efficient, and effective legal services to all our clients.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Property Documentation and Title Verification</li>
                  <li>Marriage Registration Services</li>
                  <li>Legal Documentation and Attestation</li>
                  <li>Online Registration Assistance</li>
                  <li>Notary Public Services</li>
                  <li>Legal Consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<ScrollText className="h-8 w-8" />}
                title="Legal Consultation"
                description="Expert legal consultation for all your needs"
              />
              <ServiceCard
                icon={<FileCheck className="h-8 w-8" />}
                title="Property Documentation"
                description="Title verification of property documents"
              />
              <ServiceCard
                icon={<UserCheck2 className="h-8 w-8" />}
                title="Marriage Registration"
                description="Complete marriage registration services"
              />
              <ServiceCard
                icon={<FileText className="h-8 w-8" />}
                title="Online Registration"
                description="Assistance with all types of online registrations"
              />
              <ServiceCard
                icon={<CheckCircle className="h-8 w-8" />}
                title="Attestation & Affidavit"
                description="Document attestation and affidavit services"
              />
              <ServiceCard
                icon={<ScrollText className="h-8 w-8" />}
                title="Notary Services"
                description="Notary public and indemnity bonds"
              />
            </div>
          </div>
        </section>

        <section id="team" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            
            {/* Founder Card */}
            <div className="max-w-sm mx-auto mb-12">
              <Card className="transition-transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-1">{founder.title}</p>
                  <p className="text-gray-600 mb-1">{founder.qualification}</p>
                  <p className="text-gray-500">{founder.role}</p>
                </CardContent>
              </Card>
            </div>

            {/* Other Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="transition-transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Image
                      src="/images/placeholder.png"
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold mb-1">{member.title}</p>
                    <p className="text-gray-600 mb-1">{member.qualification}</p>
                    <p className="text-gray-500">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="mt-8 text-center">
                <p className="text-lg mb-4">For immediate assistance, please call:</p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <a href="tel:8248168261" className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>8248168261</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:8682819999" className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>8682819999</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-4">Legal Legends Law Associates</h2>
          <p className="mb-4">Madras High Court, Chennai</p>
          <div className="flex justify-center items-center gap-4 mb-4">
            <Phone className="h-4 w-4" />
            <a href="tel:8248168261" className="hover:text-primary">8248168261</a>
            <a href="tel:8682819999" className="hover:text-primary">8682819999</a>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@legallegends.com" className="hover:text-primary">info@legallegends.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="transition-transform hover:scale-105">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
