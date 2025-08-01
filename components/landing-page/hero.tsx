"use client"

import { Coffee, UtensilsCrossed, HardHat, Wine, Car, MapPin, Users, Award, Star, Play, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const HeroSection = () => {
  // State and Ref for image loading
  const [imageError, setImageError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  // Effect to handle image loading/error
  useEffect(() => {
    const checkImage = () => {
      if (imageRef.current && imageRef.current.complete) {
        if (imageRef.current.naturalWidth === 0) {
          setImageError(true)
        }
      }
    }
    checkImage()
    const imgElement = imageRef.current
    if (imgElement) {
      const handleLoad = () => setImageError(false)
      const handleError = () => setImageError(true)
      imgElement.addEventListener("load", handleLoad)
      imgElement.addEventListener("error", handleError)
      return () => {
        imgElement.removeEventListener("load", handleLoad)
        imgElement.removeEventListener("error", handleError)
      }
    }
  }, [])

  const services = [
    { name: "Coffee Shop", icon: Coffee },
    { name: "Restaurant", icon: UtensilsCrossed },
    { name: "Construction", icon: HardHat },
    { name: "Bar & Lounge", icon: Wine },
    { name: "Car Rental", icon: Car },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "10+", label: "Years of Experience", icon: Users },
    { number: "100+", label: "Happy Clients", icon: MapPin },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 border-2 border-yellow-400 rotate-45"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-900 rotate-12"
        ></motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-yellow-400 rotate-45"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-blue-900 rotate-12"
        ></motion.div>
      </div>

      {/* Animated Decorative Stars */}
      <motion.div animate={floatingAnimation} className="absolute top-1/4 left-16 text-yellow-400 opacity-20">
        <Star size={48} fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ ...floatingAnimation, y: [10, -10, 10] }}
        className="absolute bottom-1/3 right-16 text-blue-900 opacity-20"
      >
        <Star size={36} fill="currentColor" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            {/* Location Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-yellow-500"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <MapPin size={20} />
              </motion.div>
              <span className="text-sm font-medium">Award-Winning Multi-Service Excellence</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Where Innovation Drives
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
                >
                  Service Perfection
                </motion.span>
              </h1>
            </motion.div>

            {/* Services Icons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 hover:border-yellow-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
                      <IconComponent className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span className="text-gray-700 text-sm font-medium">{service.name}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Transform your business with our comprehensive multi-service solutions. We deliver exceptional quality
              across coffee shops, restaurants, construction, bars, and car rentals in Liberia.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Get A Quote
              </motion.button>
                </Link>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all duration-300"
              >
                View Our Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Image Card Container */}
            <div className="relative">
              {/* Background Card with Multiple Layers */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3 scale-105"
              ></motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl transform -rotate-2 scale-102"
              ></motion.div>

              {/* Main Image Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Card Header */}
                <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/20 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                    >
                      <span className="text-sm font-semibold text-gray-800">Live Preview</span>
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-colors duration-300"
                    >
                      <Play size={20} className="text-black ml-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {!imageError ? (
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="relative h-full"
                    >
                      <img
                        ref={imageRef}
                        src="/images/another-hero.jpg"
                        alt="Savvy Group - Restaurant and Multi-Service Excellence"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />

                      {/* Image Overlay with Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                      {/* Floating Service Icons on Image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                          {services.slice(0, 6).map((service, index) => {
                            const IconComponent = service.icon
                            return (
                              <motion.div
                                key={index}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                              >
                                <IconComponent className="w-6 h-6 text-white" />
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    // Enhanced fallback content
                    <div className="h-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-8 flex items-center justify-center relative">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              rotate: 360,
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 8 + i * 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.5,
                            }}
                            className={`absolute w-16 h-16 border-2 border-yellow-400 rounded-full`}
                            style={{
                              top: `${20 + i * 15}%`,
                              left: `${10 + i * 12}%`,
                            }}
                          />
                        ))}
                      </div>

                      <motion.div animate={floatingAnimation} className="relative z-10 text-center space-y-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto flex items-center justify-center shadow-xl"
                        >
                          <span className="text-black font-bold text-3xl">SG</span>
                        </motion.div>

                        <div className="text-white space-y-3">
                          <h3 className="text-2xl font-bold">Savvy Group</h3>
                          <p className="text-yellow-300 font-medium">Excellence in Every Service</p>

                          {/* Service Icons Grid */}
                          <div className="grid grid-cols-3 gap-3 mt-6 max-w-xs mx-auto">
                            {services.map((service, index) => {
                              const IconComponent = service.icon
                              return (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                                  whileHover={{ scale: 1.2, rotate: 10 }}
                                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 hover:bg-yellow-500/20 transition-colors duration-300"
                                >
                                  <IconComponent className="w-5 h-5 text-yellow-300" />
                                </motion.div>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Multi-Service Excellence</h4>
                      <p className="text-gray-600 text-sm">Transforming businesses across Liberia</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold transition-colors duration-300 shadow-lg"
                    >
                      <span className="text-sm">Explore</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
              </motion.div>

              {/* Floating Stats Cards - Enhanced */}
              <div className="absolute -right-6 top-8 space-y-4 hidden lg:block">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50, rotate: 0 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        rotate: index % 2 === 0 ? 2 : -2,
                      }}
                      transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 0,
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      }}
                      className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100 min-w-[200px] cursor-pointer backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
                      style={{
                        transform: `translateY(${index * 20}px)`,
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <IconComponent size={20} className="text-black" />
                        </motion.div>
                        <div>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.7 + index * 0.2 }}
                            className="text-2xl font-bold text-gray-900 font-numbers"
                          >
                            {stat.number}
                          </motion.div>
                          <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Circular Badge - Enhanced */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{
                  rotate: 180,
                  scale: 1.1,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center shadow-2xl cursor-pointer z-20 border-4 border-white"
              >
                <div className="text-center">
                  <div className="text-white text-xs font-bold">TRUSTED</div>
                  <div className="text-yellow-300 text-xs font-numbers">SINCE 2015</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200"
        >
          {[
            { number: "95%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "25+", label: "Team Members" },
            { number: "5", label: "Service Areas" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                className="text-2xl font-bold text-yellow-500 mb-2 font-numbers"
              >
                {metric.number}
              </motion.div>
              <div className="text-gray-600 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          viewBox="0 0 1200 120"
          className="w-full h-12 text-blue-900"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </motion.svg>
      </div>
    </section>
  )
}

export default HeroSection
