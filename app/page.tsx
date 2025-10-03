'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Briefcase, Scale, FileCheck, Car, Shield, Calculator, Phone, Mail, Users, CheckCircle, Heart, Award, Target, ShieldCheck } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import {
  fadeIn,
  slideInFromBottom,
  staggerChildren,
  cardHover,
  fadeInFromLeft,
  fadeInFromRight,
  pulseAnimation,
  rotateScale,
  slideInFromTop,
  buttonTapAnimation,
  cardAnimation
} from '@/lib/animations'

export default function LawFirmLandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  
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
        className="bg-gray-900 text-white shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-1 py-1">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/images/CLFico2.png"
                alt="Crusaders Law Firm Logo"
                width={100}
                height={100}
                className="mr-2"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Crusaders Law Firm</h1>
                <p className="text-gray-300">Madras High Court, Chennai</p>
              </div>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="#home" className="hover:text-yellow-400 transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-yellow-400 transition-colors">About</Link></li>
                <li><Link href="#why-choose-us" className="hover:text-yellow-400 transition-colors">Why Choose Us</Link></li>
                <li><Link href="#services" className="hover:text-yellow-400 transition-colors">Services</Link></li>
                <li><Link href="#team" className="hover:text-yellow-400 transition-colors">Team</Link></li>
                <li><Link href="#contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </motion.header>

      <main>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          id="home"
          className="relative bg-gray-800 text-white py-32"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/court.webp"
              alt="Court background"
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <motion.div
            variants={slideInFromBottom}
            className="container mx-auto px-4 text-center relative z-10"
          >
            <h2 className="text-4xl font-bold mb-4">Expert Legal Solutions</h2>
            <p className="text-xl mb-8">Dedicated to providing comprehensive legal services with integrity and professionalism</p>
            <div className="flex justify-center gap-4">
              <motion.div whileTap="tap" variants={buttonTapAnimation}>
                <Button asChild>
                  <a href="tel:8248168261" className="inline-flex items-center gap-2">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={pulseAnimation}
                    >
                      <Phone className="h-4 w-4" />
                    </motion.div>
                    <span>8248168261</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileTap="tap" variants={buttonTapAnimation}>
                <Button asChild>
                  <a href="tel:8682819999" className="inline-flex items-center gap-2">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={pulseAnimation}
                    >
                      <Phone className="h-4 w-4" />
                    </motion.div>
                    <span>8682819999</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="about"
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={slideInFromTop}
              className="text-3xl font-bold text-center mb-12"
            >
              <motion.span
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                About Us
              </motion.span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInFromLeft}>
                <h3 className="text-2xl font-bold mb-4">Our Legacy</h3>
                <p className="text-lg mb-4">
                  Crusaders Law Firm is a prestigious law firm based in Chennai, specializing in various aspects of legal services.
                  Our firm has built a strong reputation for providing exceptional legal solutions with a commitment to integrity and professional excellence.
                </p>
                <p className="text-lg mb-4">
                  Led by experienced advocates, our team brings together decades of combined experience in handling complex legal matters, 
                  from property documentation to marriage registration and notary services.
                </p>
              </motion.div>
              <motion.div variants={fadeInFromRight}>
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
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          id="why-choose-us"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={slideInFromTop}
              className="text-3xl font-bold text-center mb-12"
            >
              <motion.span
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Why Choose Us?
              </motion.span>
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <WhyChooseCard
                icon={<Users className="h-8 w-8" />}
                title="Experienced Team"
                description="Our skilled lawyers bring years of expertise to handle complex cases effectively."
              />
              <WhyChooseCard
                icon={<CheckCircle className="h-8 w-8" />}
                title="Comprehensive Services"
                description="From property law to litigation, we offer a full range of legal support."
              />
              <WhyChooseCard
                icon={<Heart className="h-8 w-8" />}
                title="Client-Centered Approach"
                description="We focus on understanding your unique needs and providing personalized solutions."
              />
              <WhyChooseCard
                icon={<Award className="h-8 w-8" />}
                title="Integrity and Transparency"
                description="Our work is guided by honesty, ensuring trust and confidence in every interaction."
              />
              <WhyChooseCard
                icon={<Target className="h-8 w-8" />}
                title="Personalized Strategies"
                description="Tailored legal strategies aligned with your circumstances and objectives."
              />
              <WhyChooseCard
                icon={<ShieldCheck className="h-8 w-8" />}
                title="Ethical Integrity"
                description="Adherence to the highest standards of ethics and professionalism."
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          id="services"
          className="bg-gray-100 py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={slideInFromTop}
              className="text-3xl font-bold text-center mb-12"
            >
              <motion.span
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Our Services
              </motion.span>
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <ServiceCard
                icon={<Home className="h-8 w-8" />}
                title="Property Law"
                description="Secure and manage property transactions with confidence. Property law governs rights and obligations related to ownership, use, and transfer of property."
              />
              <ServiceCard
                icon={<Briefcase className="h-8 w-8" />}
                title="Business Law"
                description="Comprehensive legal guidance for business operations. Business law governs rights, relations, and conduct of individuals and businesses engaged in commerce."
              />
              <ServiceCard
                icon={<Scale className="h-8 w-8" />}
                title="Litigation & Family"
                description="Strong representation in disputes and family legal matters. Handles court disputes and family law including marriage, divorce, and child custody."
              />
              <ServiceCard
                icon={<FileCheck className="h-8 w-8" />}
                title="Visa & Notary"
                description="Quick, reliable support for visas and document notarization. Guide clients through visa requirements and authenticate signatures and documents."
              />
              <ServiceCard
                icon={<Car className="h-8 w-8" />}
                title="Driving License"
                description="Simple steps to help you secure your driving license — guidance on tests, documentation and usage as identification."
              />
              <ServiceCard
                icon={<Shield className="h-8 w-8" />}
                title="Police Case Support"
                description="Reliable representation in police-related cases — guidance on rights, reporting, evidence, and preparation for court appearances."
              />
              <ServiceCard
                icon={<Calculator className="h-8 w-8" />}
                title="Accounting Services"
                description="Professional financial solutions including bookkeeping, tax prep, financial reporting, payroll, and forecasting to support compliance and transparency."
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          id="team"
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={slideInFromTop}
              className="text-3xl font-bold text-center mb-12"
            >
              <motion.span
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Our Senior Advocate Team
              </motion.span>
            </motion.h2>
            
            <motion.div 
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20"
            >
              {seniorTeam.map((member) => (
                <motion.div
                  key={member.name}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap="tap"
                  viewport={{ once: true }}
                  className="transform-gpu"
                >
                  <Card className="overflow-hidden transition-colors hover:bg-gray-50">
                    <CardContent className="p-6 text-center">
                      <Image
                        src="/images/placeholder.png"
                        alt={member.name}
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold mb-1">Senior Advocate</p>
                      <p className="text-gray-600 mb-1">{member.qualification}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.h2
              variants={slideInFromTop}
              className="text-3xl font-bold text-center mb-12"
            >
              <motion.span
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Our Team
              </motion.span>
            </motion.h2>
            
            {/* Founder Card */}
            <motion.div 
              variants={fadeIn}
              className="max-w-sm mx-auto mb-12"
            >
              <motion.div whileHover="hover" initial="initial" variants={cardHover}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={250}
                      height={250}
                      className="rounded-full mx-auto mb-4"
                      priority
                      onError={(e) => {
                        console.error('Error loading image:', e);
                        // Fallback to placeholder if image fails to load
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.src = '/images/placeholder.png';
                      }}
                    />
                    <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-primary font-semibold mb-1">{founder.title}</p>
                    <p className="text-gray-600 mb-1">{founder.qualification}</p>
                    <p className="text-gray-500">{founder.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Other Team Members */}
            <motion.div 
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap="tap"
                  viewport={{ once: true }}
                  className="transform-gpu"
                >
                  <Card>
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          id="contact"
          className="bg-gray-100 py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={slideInFromTop}
              className="text-3xl font-bold text-center mb-12"
            >
              <motion.span
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                Contact Us
              </motion.span>
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="max-w-md mx-auto"
            >
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Input
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="min-h-[100px]"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      variants={buttonTapAnimation}
                      whileTap="tap"
                    >
                      <Button type="submit" className="w-full">
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
          <Image
            src="/images/CLFico2.png"
            alt="Crusaders Law Firm Logo"
            width={150}
            height={150}
            className="mx-auto gap-4 mb-4"
          />
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
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover="hover"
      initial="initial"
      viewport={{ once: true }}
    >
      <Card>
        <CardContent className="p-6 text-center">
          <motion.div
            className="mb-4 flex justify-center text-primary"
            initial="initial"
            animate="animate"
            variants={rotateScale}
            whileHover={{ scale: 1.3 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function WhyChooseCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover="hover"
      initial="initial"
      viewport={{ once: true }}
    >
      <Card>
        <CardContent className="p-6 text-center">
          <motion.div
            className="mb-4 flex justify-center text-primary"
            initial="initial"
            animate="animate"
            variants={rotateScale}
            whileHover={{ scale: 1.3 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
