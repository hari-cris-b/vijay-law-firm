'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Home, Briefcase, Scale, FileCheck, Car, Shield, Calculator, ScrollText } from "lucide-react"
import { slideInFromTop, staggerChildren, pulseAnimation, rotateScale } from '@/lib/animations'

const servicesData = [
  {
    icon: Home,
    title: "Property Law",
    description: "Secure and manage property transactions with confidence. Our experts handle title verification, documentation, registration, and dispute resolution for residential and commercial properties.",
    features: ["Title Verification", "Property Documentation", "Registration Services", "Dispute Resolution"],
    color: "text-blue-600"
  },
  {
    icon: Briefcase,
    title: "Business Law",
    description: "Comprehensive legal guidance for business operations, contracts, compliance, and corporate governance. We support startups to established enterprises.",
    features: ["Contract Drafting", "Business Compliance", "Corporate Governance", "M&A Support"],
    color: "text-green-600"
  },
  {
    icon: Scale,
    title: "Litigation & Family",
    description: "Strong representation in disputes and family legal matters including marriage, divorce, child custody, and inheritance cases at Madras High Court.",
    features: ["Civil Litigation", "Family Law", "Divorce Proceedings", "Inheritance Matters"],
    color: "text-purple-600"
  },
  {
    icon: FileCheck,
    title: "Visa & Notary",
    description: "Quick, reliable support for visa applications, document notarization, attestation, and legal certifications for domestic and international use.",
    features: ["Visa Assistance", "Document Notarization", "Legal Attestation", "Apostille Services"],
    color: "text-orange-600"
  },
  {
    icon: Car,
    title: "Driving License",
    description: "Complete assistance with driving license applications, renewals, and related documentation. We guide you through the entire process efficiently.",
    features: ["License Applications", "Renewal Services", "Documentation", "Legal Compliance"],
    color: "text-red-600"
  },
  {
    icon: Shield,
    title: "Police Case Support",
    description: "Reliable representation and guidance in police-related cases, ensuring your rights are protected throughout the legal process.",
    features: ["Rights Protection", "Case Documentation", "Legal Representation", "Court Preparation"],
    color: "text-indigo-600"
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Professional financial solutions including bookkeeping, tax preparation, financial reporting, payroll management, and compliance support.",
    features: ["Bookkeeping", "Tax Preparation", "Financial Reporting", "Payroll Management"],
    color: "text-teal-600"
  },
  {
    icon: ScrollText,
    title: "Will Writing & Estate Planning",
    description: "Comprehensive will writing and estate planning services to secure your family's future. Professional guidance for wills, trusts, and estate management.",
    features: ["Will Drafting", "Estate Planning", "Trust Creation", "Legal Documentation"],
    color: "text-cyan-600"
  }
]

function ServiceCard({ icon: Icon, title, description, features, color, index }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
      }}
      className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
    >
      <div className="p-8">
        <motion.div
          className="mb-6 flex justify-center"
          initial="initial"
          animate="animate"
          variants={rotateScale}
          whileHover={{ scale: 1.1 }}
        >
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${color.replace('text-', 'from-').replace('-600', '-100')} ${color.replace('text-', 'to-').replace('-600', '-200')} shadow-lg border border-opacity-20 ${color.replace('text-', 'border-').replace('-600', '-300')}`}>
            <Icon className={`h-8 w-8 ${color} drop-shadow-sm`} />
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center group-hover:text-gray-900 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-2">
          {features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
              className="flex items-center space-x-2 text-sm"
            >
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-600 font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hover Effect Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
      id="services"
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent"
            initial="initial"
            animate="animate"
            variants={pulseAnimation}
          >
            Our Services
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive legal solutions tailored to meet your specific needs.
            From property matters to business law, we provide expert guidance across all domains.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              color={service.color}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Need Legal Assistance?</h3>
            <p className="text-gray-300 mb-4">
              Contact us today for a free initial consultation. Our experts are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8248168261"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Call Now: (824) 816-8261
              </a>
              <a
                href="#contact"
                className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
