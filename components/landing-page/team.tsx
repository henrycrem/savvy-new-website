"use client"

import { useState } from "react"
import {
  ArrowRight,
  ArrowLeft,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Award,
  Star,
  Coffee,
  HardHat,
  Wine,
  Car,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const teamMembers = [
    {
      name: "Sam Griffiths",
      position: "Chief Executive Officer",
      image: "/images/team-ceo.jpg", // Your actual image path
      fallbackGradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
      description:
        "Visionary leader driving Savvy Group's multi-service excellence across Liberia with 8+ years of business leadership experience.",
      achievements: ["Business Leader of the Year", "Multi-Service Innovation Award"],
      specialties: ["Strategic Planning", "Business Development", "Team Leadership"],
      serviceIcon: Award,
      contact: {
        email: "samgriffiths@savvygroup.com",
        phone: "+231 886-445-092",
      },
    },
    {
      name: "Grace Williams",
      position: "Operations Director",
      image: "/images/team-operations.jpg", // Your actual image path
      fallbackGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      description:
        "Expert in hospitality and service operations, ensuring exceptional customer experiences across our coffee shops, restaurants, and bars.",
      achievements: ["Hospitality Excellence Award", "Service Quality Champion"],
      specialties: ["Operations Management", "Quality Control", "Customer Service"],
      serviceIcon: Coffee,
      contact: {
        email: "grace@savvygroup.com",
        phone: "+231 555 0002",
      },
    },
    {
      name: "Marcus Thompson",
      position: "Construction Manager",
      image: "/images/team-construction.jpg", // Your actual image path
      fallbackGradient: "bg-gradient-to-br from-blue-600 to-indigo-700",
      description:
        "Licensed construction professional with expertise in commercial and residential projects, delivering quality builds across Liberia.",
      achievements: ["Construction Excellence Award", "Safety Leadership Recognition"],
      specialties: ["Project Management", "Quality Assurance", "Safety Compliance"],
      serviceIcon: HardHat,
      contact: {
        email: "marcus@savvygroup.com",
        phone: "+231 555 0003",
      },
    },
    {
      name: "Fatima Konneh",
      position: "Hospitality Manager",
      image: "/images/team-hospitality.jpg", // Your actual image path
      fallbackGradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      description:
        "Passionate about creating memorable dining and entertainment experiences, managing our restaurant and bar operations with excellence.",
      achievements: ["Hospitality Professional of the Year", "Customer Experience Award"],
      specialties: ["Restaurant Management", "Bar Operations", "Event Planning"],
      serviceIcon: Wine,
      contact: {
        email: "fatima@savvygroup.com",
        phone: "+231 555 0004",
      },
    },
    {
      name: "James Cooper",
      position: "Fleet Manager",
      image: "/images/team-fleet.jpg", // Your actual image path
      fallbackGradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      description:
        "Automotive expert managing our car rental fleet, ensuring reliable transportation solutions with well-maintained vehicles and excellent service.",
      achievements: ["Fleet Management Excellence", "Automotive Service Award"],
      specialties: ["Fleet Management", "Vehicle Maintenance", "Customer Relations"],
      serviceIcon: Car,
      contact: {
        email: "james@savvygroup.com",
        phone: "+231 555 0005",
      },
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3))
  }

  const getVisibleMembers = () => {
    const start = currentSlide * 3
    return teamMembers.slice(start, start + 3)
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

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden focus:outline-none" style={{ outline: "none" }}>
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/4 right-0 w-32 h-32 border-2 border-yellow-200 transform rotate-45 translate-x-16 opacity-20"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-1/4 left-0 w-24 h-24 border-2 border-blue-200 transform rotate-12 -translate-x-12 opacity-20"
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
              <span className="text-yellow-500 font-medium">Meet Our Team</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Meet the Experts
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block text-yellow-500"
              >
                Behind Our Success
              </motion.span>
            </h2>
          </div>

          {/* Navigation Controls */}
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
              View All
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

        {/* Team Grid */}
        <div className="relative">
          {/* Desktop View */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:grid grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {getVisibleMembers().map((member, index) => (
                <motion.div
                  key={`${currentSlide}-${index}`}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer focus:outline-none"
                  style={{ outline: "none" }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform focus:outline-none">
                    {/* Member Image - Reduced Height */}
                    <div className="relative">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        {" "}
                        {/* Reduced from aspect-[4/5] to aspect-[4/3] */}
                        {/* Your Team Member Image */}
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to gradient if image fails to load
                            const target = e.currentTarget as HTMLImageElement
                            target.style.display = "none"
                            const fallback = target.nextElementSibling as HTMLElement
                            if (fallback) fallback.style.display = "flex"
                          }}
                        />
                        {/* Fallback Gradient Background */}
                        <div
                          className={`absolute inset-0 ${member.fallbackGradient} items-center justify-center text-white hidden`}
                        >
                          <div className="text-center">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm"
                            >
                              <member.serviceIcon size={32} className="text-white" />
                            </motion.div>
                            <div className="text-sm font-medium opacity-80">Team Member</div>
                          </div>
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        {/* Service Icon Badge */}
                        <motion.div
                          initial={{ scale: 0, rotate: -10 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="absolute top-4 right-4 bg-yellow-500 text-black p-2 rounded-full shadow-lg"
                        >
                          <member.serviceIcon size={16} />
                        </motion.div>
                        {/* Decorative Elements */}
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="absolute bottom-4 left-4 w-8 h-8 border-2 border-yellow-400 rounded-full opacity-60"
                        ></motion.div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className="text-xl font-bold text-gray-900 mb-1"
                        >
                          {member.name}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          className="text-yellow-500 font-medium text-sm"
                        >
                          {member.position}
                        </motion.p>
                      </div>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        {member.description}
                      </motion.p>

                      {/* Specialties */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.slice(0, 2).map((specialty, specIndex) => (
                            <motion.span
                              key={specIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + specIndex * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium cursor-pointer"
                            >
                              {specialty}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Social Links */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="flex items-center justify-between pt-4 border-t border-gray-100"
                      >
                        <div className="flex space-x-3">
                          {[
                            { icon: Linkedin, color: "bg-blue-600 hover:bg-blue-700" },
                            { icon: Twitter, color: "bg-sky-400 hover:bg-sky-500" },
                            { icon: Mail, color: "bg-yellow-500 hover:bg-yellow-600" },
                          ].map((social, socialIndex) => (
                            <motion.a
                              key={socialIndex}
                              href="#"
                              whileHover={{ scale: 1.2, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                              className={`w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                            >
                              <social.icon size={14} />
                            </motion.a>
                          ))}
                        </div>

                        {/* Rating Stars */}
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <motion.div
                              key={star}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 + star * 0.05 }}
                            >
                              <Star size={12} className="text-yellow-400" fill="currentColor" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Hover Overlay with Contact Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-900/95 to-transparent opacity-0 group-hover:opacity-100 flex items-end transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                    >
                      <div className="w-full p-6 text-white space-y-3">
                        <h4 className="font-semibold text-yellow-300">Get in Touch</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Mail size={14} />
                            <span>{member.contact.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone size={14} />
                            <span>{member.contact.phone}</span>
                          </div>
                        </div>
                        <div className="pt-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-500 text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-yellow-600 transition-colors duration-300"
                          >
                            Contact {member.name.split(" ")[0]}
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex">
                  <div className="relative">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 object-cover m-4 rounded-xl"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.style.display = "none"
                        const fallback = target.nextElementSibling as HTMLElement
                        if (fallback) fallback.style.display = "flex"
                      }}
                    />
                    <div
                      className={`w-24 h-24 ${member.fallbackGradient} m-4 rounded-xl flex-shrink-0 items-center justify-center hidden`}
                    >
                      <member.serviceIcon size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 p-4 space-y-2">
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-yellow-500 text-sm font-medium">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                    <div className="flex space-x-2 pt-2">
                      <Linkedin size={16} className="text-blue-600" />
                      <Twitter size={16} className="text-sky-400" />
                      <Mail size={16} className="text-yellow-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Navigation Dots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden lg:flex justify-center items-center space-x-6 mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-sm"
            >
              <ArrowLeft size={16} />
            </motion.button>

            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-sm"
            >
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:hidden flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
          >
            View All
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300 shadow-lg"
          >
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "25+", label: "Team Members", color: "from-blue-500 to-purple-600" },
              { stat: "50+", label: "Years Combined Experience", color: "from-yellow-500 to-orange-600" },
              { stat: "15+", label: "Professional Certifications", color: "from-green-500 to-teal-600" },
              { stat: "5+", label: "Service Areas", color: "from-purple-500 to-pink-600" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="space-y-2 cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-3xl font-bold text-gray-900"
                >
                  {item.stat}
                </motion.div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
