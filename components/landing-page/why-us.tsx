"use client"

import {
  ArrowRight,
  Coffee,
  UtensilsCrossed,
  HardHat,
  Wine,
  Car,
  Users,
  Clock,
  Award,
  Zap,
  Target,
  TrendingUp,
  Shield,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Users,
      title: "Multi-Service Expertise",
      description:
        "Our diverse team brings specialized knowledge across hospitality, construction, and automotive industries, ensuring professional excellence in every service we provide.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "With 5+ years of successful operations across Liberia, we've built a reputation for quality, reliability, and customer satisfaction in all our service areas.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We pride ourselves on meeting deadlines and delivering projects on schedule, whether it's opening your coffee shop or completing construction projects.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "From premium coffee blends to construction materials, we maintain the highest standards of quality across all our services and never compromise on excellence.",
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
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/4 right-0 w-32 h-32 border-2 border-yellow-200 transform rotate-45 translate-x-16 opacity-30"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-1/4 left-0 w-24 h-24 border-2 border-blue-200 transform rotate-12 -translate-x-12 opacity-30"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-0.5 bg-yellow-500"
              ></motion.div>
              <span className="text-yellow-500 font-medium">Why Choose Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Building Trust,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block text-yellow-500"
              >
                Delivering Excellence
              </motion.span>
            </motion.h2>

            {/* Service Icons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 hover:bg-white hover:border-yellow-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
                      <IconComponent className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span className="text-gray-700 text-sm font-medium">{service.name}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Team Image Container - Space for your image */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative">
                {/* Your Team Image Goes Here */}
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src="/images/team.jpg" // Your team image path
                  alt="Savvy Group Team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = "none"
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = "flex"
                  }}
                />

                {/* Fallback content if image doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 items-center justify-center hidden">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="w-20 h-20 bg-yellow-500 rounded-full mx-auto flex items-center justify-center shadow-lg"
                    >
                      <span className="text-black font-bold text-2xl">SG</span>
                    </motion.div>
                    <div className="text-white">
                      <h3 className="text-xl font-bold">Savvy Group Team</h3>
                      <p className="text-sm text-yellow-300">Multi-Service Excellence</p>
                    </div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* Team Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="absolute bottom-4 left-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-sm font-bold">Our Expert Team</div>
                    <div className="text-xs">Multi-Service Professionals</div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute bottom-4 right-4 w-6 h-6 border-2 border-yellow-400 rounded-full"
                ></motion.div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
              >
                Learn More
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

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Features Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{ rotate: 45 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-0 right-0 w-32 h-32 border-2 border-white transform translate-x-16 -translate-y-16"
                ></motion.div>
                <motion.div
                  animate={{ rotate: 12 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute bottom-0 left-0 w-24 h-24 border-2 border-yellow-400 transform -translate-x-12 translate-y-12"
                ></motion.div>
              </div>

              {/* Features List */}
              <div className="relative space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-300 shadow-lg"
                    >
                      <feature.icon size={24} className="text-black" />
                    </motion.div>
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Gradient Overlays */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"
              ></motion.div>
              <motion.div
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
              ></motion.div>
            </motion.div>

            {/* Floating Stats Cards */}
            <div className="absolute -right-6 top-8 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 3 }}
                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-3 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <TrendingUp size={16} className="text-white" />
                  </motion.div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">95%</div>
                    <div className="text-xs text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform -rotate-2 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
                  >
                    <Shield size={16} className="text-white" />
                  </motion.div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Award Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ rotate: 6, scale: 1.05 }}
              className="absolute -left-6 bottom-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-4 shadow-xl transform rotate-12 cursor-pointer"
            >
              <div className="text-center">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Award size={24} className="text-black mx-auto mb-2" />
                </motion.div>
                <div className="text-black text-xs font-bold">TRUSTED</div>
                <div className="text-black/80 text-xs">SINCE 2019</div>
              </div>
            </motion.div>

            {/* Decorative Hook Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              animate={{ rotate: [12, 18, 12] }}
              className="absolute -top-8 -right-8 w-20 h-20 opacity-60"
            >
              <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                <Target size={24} className="text-black" />
              </div>
            </motion.div>
          </motion.div>
        </div>

     
      </div>
    </section>
  )
}

export default WhyChooseUsSection
