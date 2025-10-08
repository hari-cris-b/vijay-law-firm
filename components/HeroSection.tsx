'use client'

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn, slideInFromBottom, pulseAnimation, buttonTapAnimation, slideInFromTop } from '@/lib/animations'

export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      id="home"
      className="relative bg-gray-800 text-white py-20 md:py-32 overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <Image
            src="/images/court.webp"
            alt="Madras High Court - Professional Legal Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={85}
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      <motion.div
        variants={slideInFromBottom}
        className="container mx-auto px-4 text-center relative z-20"
      >
        <motion.div
          variants={slideInFromTop}
          className="text-center"
        >
          <Image
            src="/images/LogoHead2.png"
            alt="Crusaders Law Firm Logo"
            width={400}
            height={400}
            className="mx-auto shadow-lg"
          />
        </motion.div>

        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold pb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent leading-tight"
        >
          Expert Legal Solutions
        </motion.h1>
        <div className="relative w-full overflow-hidden">
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
            <h2 className="text-2xl md:text-2xl pb-2 bg-gradient-to-r from-slate-900 via-amber-600 to-slate-800 bg-clip-text text-transparent leading-tight">
              Justice. Integrity. Excellence. Justice. Integrity. Excellence.
            </h2>
            <h2 className="text-2xl md:text-2xl pb-2 bg-gradient-to-r from-slate-900 via-amber-600 to-slate-800 bg-clip-text text-transparent leading-tight ml-8">
              Justice. Integrity. Excellence. Justice. Integrity. Excellence.
            </h2>
          </motion.div>
        </div>
        <motion.p
          variants={fadeIn}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300"
        >
          Dedicated to providing comprehensive legal services with integrity and professionalism at Madras High Court, Chennai
        </motion.p>

        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
        >
          <motion.div whileTap="tap" variants={buttonTapAnimation}>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
              <a href="tel:8248168261" className="inline-flex items-center gap-3">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={pulseAnimation}
                >
                  <Phone className="h-5 w-5" />
                </motion.div>
                <span>(824) 816-8261</span>
              </a>
            </Button>
          </motion.div>
          <motion.div whileTap="tap" variants={buttonTapAnimation}>
            <Button asChild variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg">
              <a href="tel:8682819999" className="inline-flex items-center gap-3">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={pulseAnimation}
                >
                  <Phone className="h-5 w-5" />
                </motion.div>
                <span>(868) 281-9999</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="text-gray-300 text-sm"
        >
          <p>Available 24/7 for urgent legal consultations</p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
