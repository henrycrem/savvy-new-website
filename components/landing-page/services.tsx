"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, Coffee, UtensilsCrossed, HardHat, Wine, Car, Award, Cigarette } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const AboutServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Our Mission",
      content:
        "We empower businesses and communities across Liberia by delivering exceptional multi-service solutions. From premium coffee experiences to reliable construction projects, we create lasting value and drive sustainable growth in every industry we serve.",
      bgColor: "from-blue-900 to-indigo-900",
    },
    {
      title: "Our Vision",
      content:
        "To be West Africa's leading multi-service company, setting new standards of excellence across hospitality, construction, and automotive industries while contributing to Liberia's economic development and community growth.",
      bgColor: "from-purple-900 to-blue-900",
    },
    {
      title: "Our Values",
      content:
        "Excellence, integrity, and community impact drive everything we do. We believe in quality craftsmanship, exceptional service, and building lasting relationships with our clients and communities across Liberia.",
      bgColor: "from-indigo-900 to-purple-900",
    },
  ]

  // Updated services array with Cargo Bar included
  const services = [
    {
      icon: Coffee,
      title: "Coffee Shop",
      description:
        "Premium coffee experiences with artisanal blends, cozy atmospheres, and exceptional customer service. We create spaces where communities gather and connections are made.",
      image: "/images/coffeeShop.png",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant",
      description:
        "Full-service restaurant operations featuring local and international cuisine, professional kitchen management, and memorable dining experiences for every occasion.",
      image: "/images/restu.png",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: HardHat,
      title: "Construction",
      description:
        "Commercial and residential construction projects with quality craftsmanship, timely delivery, and sustainable building practices that contribute to Liberia's infrastructure development.",
      image: "/images/construction.png",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wine,
      title: "Bar & Lounge",
      description:
        "Upscale bar and lounge experiences with premium beverages, sophisticated ambiance, and professional service that creates unforgettable social experiences.",
      image: "/images/bar.png",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Cigarette,
      title: "Cigar Bar",
      description:
        "Premium cigar lounge experience featuring finest cigars, comfortable seating, and sophisticated atmosphere. A refined space for cigar enthusiasts to relax and enjoy premium tobacco products.",
      image: "/images/cigar.jpg", // You'll need to add this image to your public/images folder
      color: "from-amber-600 to-orange-600",
    },
    {
      icon: Car,
      title: "Car Rental",
      description:
        "Premium vehicle rental and fleet management services with well-maintained vehicles, flexible rental options, and reliable transportation solutions across Liberia.",
      image: "/images/car.png",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="bg-gray-50">
      {/* About Section */}
      <section className="py-28">
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
              <motion.div variants={itemVariants} className="flex items-center space-x-2 space-y-6">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-0.5 bg-yellow-500"
                ></motion.div>
                <span className="text-yellow-500 font-medium">Who We Are</span>
              </motion.div>
              {/* Main Heading */}
              <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Crafting Excellence
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="block text-yellow-500"
                >
                  Across Industries
                </motion.span>
              </motion.h2>
              {/* Description */}
              <motion.p variants={itemVariants} className="text-gray-600 text-lg text-justify leading-relaxed">
                At Savvy Group, we combine expertise across multiple industries to deliver exceptional service and
                quality. From premium hospitality experiences to reliable construction projects and sophisticated cigar lounge services, our diverse portfolio
                serves Liberia's growing business landscape with excellence and innovation.
              </motion.p>
              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
                {[
                  { number: "6", label: "Service Areas" },
                  { number: "75+", label: "Projects" },
                  { number: "150+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white rounded-lg shadow-sm"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="text-2xl font-bold text-yellow-500 mb-1"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
                >
                  <Link href="/about">
                  Learn More
                  </Link>
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
            {/* Right Content - Image and Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full bg-white/20 flex items-center justify-center"
                  >
                    <div className="text-center space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-16 h-16 bg-yellow-500 rounded-full mx-auto flex items-center justify-center shadow-lg"
                      >
                        <Award size={24} className="text-black" />
                      </motion.div>
                      <div className="text-gray-700">
                        <h3 className="text-xl font-bold">Expert Team</h3>
                        <p className="text-sm">Multi-Service Excellence</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* Experience Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="absolute bottom-6 left-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold shadow-lg"
                >
                  <span className="text-2xl">10+</span>
                  <div className="text-sm">Years of Excellence</div>
                </motion.div>
              </motion.div>
              {/* Mission/Vision Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -right-8 top-8 w-80"
              >
                <AnimatePresence mode="wait" custom={currentSlide}>
                  <motion.div
                    key={currentSlide}
                    custom={currentSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className={`bg-gradient-to-r ${slides[currentSlide].bgColor} rounded-2xl p-6 text-white shadow-xl`}
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-yellow-400 font-semibold mb-4"
                    >
                      {slides[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm leading-relaxed mb-6"
                    >
                      {slides[currentSlide].content}
                    </motion.p>
                    {/* Carousel Controls */}
                    <div className="flex items-center justify-between">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                      >
                        <ArrowLeft size={16} />
                      </motion.button>
                      {/* Dots */}
                      <div className="flex space-x-2">
                        {slides.map((_, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              index === currentSlide ? "bg-yellow-400" : "bg-white/40"
                            }`}
                          />
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                      >
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 border-4 border-yellow-200 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-60"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <div className="flex items-center justify-center space-x-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-0.5 bg-yellow-500"
              ></motion.div>
              <span className="text-yellow-500 font-medium">Our Services</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-0.5 bg-yellow-500"
              ></motion.div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Services That Drive
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block text-yellow-500"
              >
                Your Success
              </motion.span>
            </h2>
          </motion.div>
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Service Image - Enhanced Display */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <img
                        src={service.image}
                        alt={`${service.title} Service`}
                        className="w-full h-full object-cover transition-transform duration-500"
                        onError={(e) => {
                          // Fallback in case image doesn't load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </motion.div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                    
                    {/* Service Icon Badge */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="absolute top-4 right-4 z-20"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm`}
                      >
                        <service.icon size={20} className="text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Service Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="text-white font-bold text-lg mb-1"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className={`h-1 bg-gradient-to-r ${service.color} rounded-full`}
                      ></motion.div>
                    </div>

                    {/* Fallback Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 -z-10`}></div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
                    >
                      {service.description}
                    </motion.p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-600 font-medium text-sm transition-all duration-300 group/btn"
                    >
                      <span>Learn more</span>
                      <motion.div 
                        whileHover={{ x: 3 }}
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="/about">View All Services</Link>
              <motion.div
                whileHover={{ rotate: 90 }}
                className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center"
              >
                <ArrowRight size={16} className="text-white" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutServicesSection