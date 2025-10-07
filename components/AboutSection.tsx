'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn, fadeInFromLeft, fadeInFromRight, slideInFromTop, pulseAnimation } from '@/lib/animations'

export default function AboutSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="about"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-amber-600 to-slate-800 bg-clip-text text-transparent"
            initial="initial"
            animate="animate"
            variants={pulseAnimation}
          >
            About Us
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Legacy */}
          <motion.div
            variants={fadeInFromLeft}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Legacy</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Crusaders Law Firm is a prestigious law firm based in Chennai, specializing in various aspects of legal services.
                  Our firm has built a strong reputation for providing exceptional legal solutions with a commitment to integrity and professional excellence.
                </p>
                <p>
                  Led by experienced advocates, our team brings together decades of combined experience in handling complex legal matters,
                  from property documentation to marriage registration and notary services.
                </p>
                <p>
                  With over 15 years of service to the legal community, we have successfully represented thousands of clients
                  across diverse legal domains, earning trust through consistent quality and ethical practices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mission & Expertise */}
          <motion.div
            variants={fadeInFromRight}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are dedicated to providing comprehensive legal solutions while maintaining the highest standards of professional ethics.
                Our mission is to ensure accessible, efficient, and effective legal services to all our clients, regardless of case complexity.
              </p>

              <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Expertise</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Property Documentation and Title Verification",
                  "Marriage Registration Services",
                  "Legal Documentation and Attestation",
                  "Online Registration Assistance",
                  "Notary Public Services",
                  "Legal Consultation & Advisory",
                  "Will Writing & Estate Planning Services"
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>



        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "15+", label: "Years of Experience" },
            { number: "1000+", label: "Cases Handled" },
            { number: "50+", label: "Legal Experts" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black text-3xl md:text-4xl font-bold rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mx-auto mb-4 shadow-lg">
                {stat.number}
              </div>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
