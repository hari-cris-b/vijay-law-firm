'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, CheckCircle, Heart, Award, Target, ShieldCheck } from "lucide-react"
import { slideInFromTop, staggerChildren, pulseAnimation } from '@/lib/animations'

const whyChooseUsData = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our skilled lawyers bring years of expertise to handle complex cases effectively with proven track records.",
    color: "text-blue-600"
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Services",
    description: "From property law to litigation, we offer a full range of legal support tailored to your specific needs.",
    color: "text-green-600"
  },
  {
    icon: Heart,
    title: "Client-Centered Approach",
    description: "We focus on understanding your unique needs and providing personalized solutions with genuine care.",
    color: "text-red-600"
  },
  {
    icon: Award,
    title: "Integrity and Transparency",
    description: "Our work is guided by honesty, ensuring trust and confidence in every interaction we have.",
    color: "text-purple-600"
  },
  {
    icon: Target,
    title: "Personalized Strategies",
    description: "Tailored legal strategies aligned with your circumstances and objectives for optimal results.",
    color: "text-orange-600"
  },
  {
    icon: ShieldCheck,
    title: "Ethical Integrity",
    description: "Adherence to the highest standards of ethics and professionalism in all our practices.",
    color: "text-indigo-600"
  }
]

function WhyChooseCard({ icon: Icon, title, description, color, index }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
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
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      className="group"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full hover:shadow-2xl transition-all duration-300">
        <motion.div
          className="mb-6 flex justify-center"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${color.replace('text-', 'from-').replace('-600', '-100')} ${color.replace('text-', 'to-').replace('-600', '-200')} shadow-lg border border-opacity-20 ${color.replace('text-', 'border-').replace('-600', '-300')}`}>
            <Icon className={`h-8 w-8 ${color} drop-shadow-sm`} />
          </div>
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center group-hover:text-gray-900 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
      id="why-choose-us"
      className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50"
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
            Why Choose Us?
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what sets Crusaders Law Firm apart in delivering exceptional legal services
            with unwavering commitment to our clients&apos; success.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {whyChooseUsData.map((item, index) => (
            <WhyChooseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={item.color}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full inline-block shadow-lg">
            <p className="text-lg font-semibold">
              Trusted by over 1,000+ clients across Tamil Nadu
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
