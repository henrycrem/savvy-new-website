"use client"

import { Coffee, UtensilsCrossed, HardHat, Wine, Car, MapPin, Users, Award, Star } from "lucide-react"
import { motion } from "framer-motion"

const HeroSection = () => {
  const services = [
    { name: "Coffee Shop", icon: Coffee },
    { name: "Restaurant", icon: UtensilsCrossed },
    { name: "Construction", icon: HardHat },
    { name: "Bar & Lounge", icon: Wine },
    { name: "Car Rental", icon: Car },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "5+", label: "Years of Experience", icon: Users },
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
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Animated Background Pattern */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              >
                Get A Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all duration-300"
              >
                View Our Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats and Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-blue-800 p-8 flex items-center justify-center border border-gray-200">
                <motion.div
                  animate={floatingAnimation}
                  className="w-full h-full bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                >
                  <div className="text-center space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto flex items-center justify-center shadow-lg"
                    >
                      <span className="text-black font-bold text-2xl">SG</span>
                    </motion.div>
                    <div className="text-white">
                      <h3 className="text-xl font-bold">Savvy Group</h3>
                      <p className="text-sm text-yellow-300">Excellence in Every Service</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Stats Cards */}
            <div className="absolute -right-4 top-4 space-y-3">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotate: index % 2 === 0 ? 1 : -1,
                    }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-4 shadow-xl min-w-[180px] cursor-pointer"
                    style={{
                      transform: `translateY(${index * 15}px)`,
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center"
                      >
                        <IconComponent size={16} className="text-black" />
                      </motion.div>
                      <div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                          className="text-xl font-bold text-black"
                        >
                          {stat.number}
                        </motion.div>
                        <div className="text-black/90 text-xs font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Circular Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ rotate: 180, scale: 1.1 }}
              className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
            >
              <div className="text-center">
                <div className="text-white text-xs font-bold">TRUSTED</div>
                <div className="text-yellow-300 text-xs">SINCE 2019</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200"
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
                className="text-2xl font-bold text-yellow-500 mb-2"
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
