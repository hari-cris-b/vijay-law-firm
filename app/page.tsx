'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { fadeIn, slideInFromTop, staggerChildren, pulseAnimation, buttonTapAnimation } from '@/lib/animations'

// Lazy load components for better performance
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div className="h-screen bg-gray-800 animate-pulse"></div>
})

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>
})

const WhyChooseUsSection = dynamic(() => import('@/components/WhyChooseUsSection'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>
})

const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>
})

export default function LawFirmLandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        'service_fne3sly',
        'template_czv2ip4',
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: 'Crusaders Law Firm',
        },
        'UoXECWsNw6Vnz9Yol'
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
    title: "Advocate",
    qualification: "MBA, BL.",
    role: "Founder & Managing Partner",
    image: "/images/P.Vijayakumar.png"
  };

  const seniorTeam = [
    { name: "K.M. Anand Joshi", qualification: "BA, BL." },
    { name: "E. Jenni", qualification: "BA, BL." },
    { name: "M. Duraimurugan", qualification: "BA, BL." },
    { name: "R.G. Sridhar", qualification: "BA, BL." },
    { name: "T. Dhayalamoorthy", qualification: "BA, BL." }
  ];

  const teamMembers = [
    { name: "P. Dinesh Saravanan", title: "Advocate", qualification: "BA, BL.", role: "Associate" },
    { name: "J. Jaya Pradhap", title: "Advocate", qualification: "BE,BL.", role: "Associate" },
    { name: "K. Jaganathan", title: "Advocate", qualification: "M.Com, BL.", role: "Associate" },
    { name: "S. Sathish", title: "Advocate", qualification: "M.Com, BL.", role: "Associate" },
    { name: "G. Jebaraj", title: "Advocate", qualification: "B.Sc, BL.", role: "Associate" },
    { name: "V. Vignesh", title: "Advocate", qualification: "BA, BL.", role: "Associate" },
    { name: "K. Balaganesh", title: "Advocate", qualification: "BA, BL.", role: "Associate" },
    { name: "P. Gayathri Pandian", title: "Advocate", qualification: "BA, BL.", role: "Associate" },
    { name: "M. Ashwini Maruthupandi", title: "Advocate", qualification: "BCA, BL.", role: "Associate" }    
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and Brand */}
            <motion.div
              className="flex items-center space-x-4 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                const founderElement = document.querySelector('.founder-card');
                if (founderElement) {
                  founderElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  // Add temporary highlight effect
                  founderElement.classList.add('ring-4', 'ring-amber-400', 'ring-opacity-50');
                  setTimeout(() => {
                    founderElement.classList.remove('ring-4', 'ring-amber-400', 'ring-opacity-50');
                  }, 3000);
                }
              }}
            >
          <div className="relative inline-block">
            <Image
              src="/images/CLFico2.png"
              alt="Crusaders Law Firm Logo"
              width={100}
              height={100}
              className="mx-auto relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-md scale-100"></div>
          </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                  Crusaders Law Firm
                </h1>
                <p className="text-amber-200/80 text-sm font-medium">Madras High Court, Chennai</p>
              </div>
            </motion.div>

            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#why-choose-us", label: "Why Choose Us" },
                { href: "#services", label: "Services" },
                { href: "#partners", label: "Partners" },
                { href: "#team", label: "Team" },
                { href: "#contact", label: "Contact" }
              ].map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-gray-300 hover:text-amber-400 transition-colors group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Button
                  onClick={() => window.open('https://wa.me/918682819999', '_blank')}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold shadow-lg shadow-amber-500/30"
                >
                  Get Consultation
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            className="lg:hidden mt-4 pb-4 border-t border-white/10 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="pt-4">
              <ul className="space-y-2">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#why-choose-us", label: "Why Choose Us" },
                  { href: "#services", label: "Services" },
                  { href: "#partners", label: "Partners" },
                  { href: "#team", label: "Team" },
                  { href: "#contact", label: "Contact" }
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white/90 hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>

        {/* Decorative bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      </motion.header>

      <main>
        <section id="home" aria-label="Hero Section">
          <Suspense fallback={<div className="h-screen bg-gray-800 animate-pulse"></div>}>
            <HeroSection />
          </Suspense>
        </section>

        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse"></div>}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
          <WhyChooseUsSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse"></div>}>
          <ServicesSection />
        </Suspense>

        {/* International Partners Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          id="partners"
          className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={slideInFromTop}
              className="text-center mb-16"
            >
              <Image
                src="/images/LogoHead2.png"
                alt="Crusaders Law Firm Logo"
                width={250}
                height={250}
                className="mx-auto"
              />
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent"
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Our International Partners
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Strengthening our global legal network through strategic partnerships worldwide
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-6"
                  >
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">WISE LEGAL CO., LTD.</h3>
                    <p className="text-amber-600 font-semibold text-lg">Thailand Legal Partner</p>
                  </motion.div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start justify-center space-x-3 text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-left max-w-md">
                        <span className="font-semibold">Address:</span><br />
                        246, Phang Muang Sai Kor Road<br />
                        Patong Sub-district, Kathu District<br />
                        Phuket Province, Thailand
                      </p>
                    </div>
                  </div>

                  <motion.a
                    href="https://www.wise-legal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Visit Partner Website
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="rgb(245 158 11)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Client Partners Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={slideInFromTop}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent"
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Our Client Partners
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Trusted partnerships that drive our success and client satisfaction
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Valued Partners</h3>
                  <div className="relative w-full overflow-hidden py-8">
                    <motion.div
                      animate={{
                        x: ["0%", "-50%"],
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          duration: 20,
                          ease: "linear",
                        },
                      }}
                      className="flex whitespace-nowrap"
                    >
                      <div className="flex space-x-12 text-xl md:text-2xl font-semibold text-gray-700">
                        <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Ayan Briyani</span>
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Isha Financial Services</span>
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">ALVS Enterprises</span>
                        <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Mukund Associates</span>
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Porali Associates</span>
                      </div>
                      <div className="flex space-x-12 text-xl md:text-2xl font-semibold text-gray-700 ml-12">
                        <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Ayan Briyani</span>
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Isha Financial Services</span>
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">ALVS Enterprises</span>
                        <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Mukund Associates</span>
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Porali Associates</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">A</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Ayan Briyani</h4>
                      <p className="text-gray-600 text-sm">Culinary Excellence Partner</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">I</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Isha Financial Services</h4>
                      <p className="text-gray-600 text-sm">Financial Advisory Partner</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">A</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">ALVS Enterprises</h4>
                      <p className="text-gray-600 text-sm">Business Solutions Partner</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">M</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Mukund Associates</h4>
                      <p className="text-gray-600 text-sm">Professional Services Partner</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">P</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Porali Associates</h4>
                      <p className="text-gray-600 text-sm">Consulting Services Partner</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team Section - keeping inline for now */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          id="team"
          className="py-24 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={slideInFromTop}
              className="text-center mb-16"
            >
              <Image
                src="/images/LogoHead2.png"
                alt="Crusaders Law Firm Logo"
                width={250}
                height={250}
                className="mx-auto"
              />
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent"
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Our Senior Advocate Team
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20 justify-center"
            >
              {seniorTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="group w-full"
                >
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    <CardContent className="p-8 text-center">
                      <Image
                        src="/images/placeholder.png"
                        alt={`${member.name} - Senior Advocate`}
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-6 shadow-lg"
                      />
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{member.name}</h3>
                      <p className="text-yellow-600 font-semibold mb-2">Senior Advocate</p>
                      <p className="text-gray-600 font-medium">{member.qualification}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={slideInFromTop}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent"
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Our Team
              </motion.h2>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-sm mx-auto mb-16 founder-card"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="group"
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <Image
                      src={founder.image}
                      alt={`${founder.name} - ${founder.role}`}
                      width={250}
                      height={250}
                      className="rounded-full mx-auto mb-6 shadow-lg"
                      priority
                      onError={(e) => {
                        console.error('Error loading image:', e);
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.src = '/images/placeholder.png';
                      }}
                    />
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{founder.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-2">{founder.title}</p>
                    <p className="text-gray-600 font-medium mb-2">{founder.qualification}</p>
                    <p className="text-gray-500 text-sm">{founder.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Other Team Members */}
            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-center"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="group w-full"
                >
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    <CardContent className="p-8 text-center">
                      <Image
                        src="/images/placeholder.png"
                        alt={`${member.name} - ${member.title}`}
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-6 shadow-lg"
                      />
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{member.name}</h3>
                      <p className="text-yellow-600 font-semibold mb-2">{member.title}</p>
                      <p className="text-gray-600 font-medium mb-2">{member.qualification}</p>
                      <p className="text-gray-500 text-sm">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          id="contact"
          className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={slideInFromTop}
              className="text-center mb-16"
            >
              <Image
                src="/images/LogoHead2.png"
                alt="Crusaders Law Firm Logo"
                width={250}
                height={250}
                className="mx-auto"
              />
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent"
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Contact Us
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to discuss your legal needs? Get in touch with our experienced team today.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="max-w-md mx-auto"
            >
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Input
                        placeholder="Your Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-12 text-lg"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Input
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 text-lg"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Textarea
                        placeholder="Tell us about your legal needs..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="min-h-[120px] text-lg resize-none"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      variants={buttonTapAnimation}
                      whileTap="tap"
                    >
                      <Button type="submit" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700">
                        <motion.span
                          initial="initial"
                          animate="animate"
                          variants={pulseAnimation}
                        >
                          Send Message
                        </motion.span>
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 text-center"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800">For Immediate Assistance</h3>
                <p className="text-lg text-gray-600 mb-8">Our legal experts are available 24/7</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Button asChild size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg">
                      <a href="tel:8248168261" className="inline-flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        <span>(824) 816-8261</span>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Button asChild size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg">
                      <a href="tel:8682819999" className="inline-flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        <span>(868) 281-9999</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gray-900 text-white py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="relative inline-block">
            <Image
              src="/images/CLFico2.png"
              alt="Crusaders Law Firm Logo"
              width={150}
              height={150}
              className="mx-auto relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-md scale-100"></div>
          </div>
          <p className="mb-4">Madras High Court, Chennai</p>
          <div className="flex justify-center items-center gap-4 mb-4">
            <Phone className="h-4 w-4" />
            <a href="tel:8248168261" className="hover:text-yellow-400 transition-colors">8248168261</a>
            <a href="tel:8682819999" className="hover:text-yellow-400 transition-colors">8682819999</a>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@crusaderslawfirm.com" className="hover:text-yellow-400 transition-colors">info@crusaderslawfirm.com</a>
          </div>
        </div>
      </motion.footer>

      {/* Mobile Floating Buttons */}
      <div className="md:hidden fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Call Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => window.open('tel:8682819999', '_self')}
          className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Call for Consultation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </motion.button>

        {/* WhatsApp Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => window.open('https://wa.me/918682819999', '_blank')}
          className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full shadow-2xl shadow-amber-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Get Consultation via WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </motion.button>
      </div>
    </div>
  )
}
