"use client"

import { useState } from "react"
import {
  ArrowRight,
  MessageCircle,
  Lightbulb,
  Rocket,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Coffee,
  UtensilsCrossed,
  HardHat,
  Wine,
  Car,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "STEP 1",
      title: "Consultation & Planning",
      subtitle: "Understanding Your Vision",
      description:
        "We begin with comprehensive consultation to understand your specific service needs, whether it's opening a coffee shop, restaurant, construction project, bar setup, or car rental business. Our team conducts thorough analysis to create a tailored plan that aligns with your goals and budget.",
      icon: MessageCircle,
      color: "bg-blue-900",
      details: [
        "Initial consultation and needs assessment",
        "Market research and location analysis",
        "Budget planning and timeline development",
        "Regulatory requirements and permits guidance",
      ],
    },
    {
      number: "STEP 2",
      title: "Design & Development",
      subtitle: "Bringing Your Vision to Life",
      description:
        "Our expert team designs and develops your service according to industry best practices. From coffee shop layouts and restaurant kitchens to construction blueprints and car fleet selection, we handle every detail to ensure quality and functionality.",
      icon: Lightbulb,
      color: "bg-yellow-500",
      details: [
        "Custom design and layout planning",
        "Equipment selection and sourcing",
        "Interior design and branding elements",
        "Quality assurance and safety compliance",
      ],
    },
    {
      number: "STEP 3",
      title: "Implementation & Launch",
      subtitle: "Delivering Excellence",
      description:
        "We execute your project with precision, whether it's setting up your coffee shop, constructing your building, or launching your car rental service. Our team ensures smooth implementation with ongoing support to guarantee your success from day one.",
      icon: Rocket,
      color: "bg-blue-900",
      details: [
        "Professional installation and setup",
        "Staff training and operational guidance",
        "Grand opening support and marketing",
        "Ongoing maintenance and support services",
      ],
    },
  ]

  const services = [
    { icon: Coffee, name: "Coffee Shop", color: "from-amber-500 to-yellow-500" },
    { icon: UtensilsCrossed, name: "Restaurant", color: "from-red-500 to-pink-500" },
    { icon: HardHat, name: "Construction", color: "from-blue-500 to-cyan-500" },
    { icon: Wine, name: "Bar & Lounge", color: "from-purple-500 to-indigo-500" },
    { icon: Car, name: "Car Rental", color: "from-green-500 to-emerald-500" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="bg-gray-50 py-20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/4 right-0 w-48 h-48 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full opacity-10 translate-x-24"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full opacity-10 -translate-x-32 translate-y-32"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16"
        >
          <div className="space-y-4">
            {/* Section Label */}
            <div className="flex items-center space-x-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-0.5 bg-yellow-500"
              ></motion.div>
              <span className="text-yellow-500 font-medium">How We Work</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                How We{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-yellow-500"
              >
                Deliver Excellence
              </motion.span>
            </h2>

            {/* Service Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 mt-4"
            >
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
                      <IconComponent className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span className="text-gray-700 text-sm font-medium">{service.name}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300 shadow-lg"
            >
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:grid grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    activeStep === index ? "ring-2 ring-yellow-500 shadow-2xl" : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                    className={`inline-block ${step.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}
                  >
                    {step.number}
                  </motion.div>

                  {/* Step Content */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <step.icon size={24} className="text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-yellow-500 font-medium text-sm mb-3">{step.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{step.description}</p>

                    {/* Step Details */}
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-gray-100 overflow-hidden"
                        >
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                                className="flex items-center space-x-2 text-sm text-gray-600"
                              >
                                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                <span>{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <ArrowRight size={16} className="text-black" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  className={`inline-block ${step.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}
                >
                  {step.number}
                </motion.div>

                <div className="flex items-start space-x-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <step.icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-yellow-500 font-medium text-sm">{step.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + detailIndex * 0.1 }}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center mt-6"
                  >
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center transform rotate-90 shadow-lg">
                      <ArrowRight size={16} className="text-black" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statistics */}
  

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="lg:hidden flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300 shadow-lg"
          >
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
