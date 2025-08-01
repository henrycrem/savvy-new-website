"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Send,
  CheckCircle,
  Coffee,
  UtensilsCrossed,
  HardHat,
  Wine,
  Car,
  Star,
} from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  service: string
  message: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const services = [
    { name: "Coffee Shop", icon: Coffee, color: "from-amber-500 to-yellow-500" },
    { name: "Restaurant", icon: UtensilsCrossed, color: "from-red-500 to-pink-500" },
    { name: "Construction", icon: HardHat, color: "from-blue-500 to-cyan-500" },
    { name: "Bar & Lounge", icon: Wine, color: "from-purple-500 to-indigo-500" },
    { name: "Car Rental", icon: Car, color: "from-green-500 to-emerald-500" },
    { name: "General Inquiry", icon: Star, color: "from-yellow-500 to-orange-500" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.service.trim()) newErrors.service = "Please select a service"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
      })
    } catch (error) {
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-yellow-400 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-900 rounded-full"
        ></motion.div>
      </div>

      {/* Floating Service Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {services.slice(0, 5).map((service, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
            }}
            className={`absolute opacity-5 ${
              index === 0
                ? "top-32 left-32"
                : index === 1
                  ? "top-48 right-40"
                  : index === 2
                    ? "bottom-48 left-40"
                    : index === 3
                      ? "bottom-32 right-32"
                      : "top-1/2 left-1/2"
            }`}
          >
            <service.icon size={48} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-yellow-500 font-medium mb-6"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-yellow-500"
            ></motion.div>
            <span>Contact Us</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-px bg-yellow-500"
            ></motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Ready to Transform Your Business?
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-yellow-500 mt-2"
            >
              Let's Talk!
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get in touch with Savvy Group to discuss your project needs across our comprehensive range of services in
            Liberia.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your project needs.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                          First Name <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Ex. John"
                          className={`w-full px-4 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white transition-all duration-300 ${
                            errors.firstName ? "border-red-500" : "border-gray-200"
                          }`}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                          Last Name <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Ex. Doe"
                          className={`w-full px-4 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white transition-all duration-300 ${
                            errors.lastName ? "border-red-500" : "border-gray-200"
                          }`}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </motion.div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="info@savvygroup.com"
                          className={`w-full px-4 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white transition-all duration-300 ${
                            errors.email ? "border-red-500" : "border-gray-200"
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+231 555 0120"
                          className={`w-full px-4 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white transition-all duration-300 font-numbers ${
                            errors.phone ? "border-red-500" : "border-gray-200"
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </motion.div>
                    </div>

                    {/* Service Selection */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                        Service Interested In <span className="text-yellow-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white transition-all duration-300 ${
                          errors.service ? "border-red-500" : "border-gray-200"
                        }`}
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service.name} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                    </motion.div>

                    {/* Subject */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                        Subject <span className="text-yellow-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Enter subject here..."
                        className={`w-full px-4 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white transition-all duration-300 ${
                          errors.subject ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Message <span className="text-yellow-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        rows={6}
                        className={`w-full px-4 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white transition-all duration-300 resize-none ${
                          errors.message ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants}>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:from-yellow-300 disabled:to-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle size={40} className="text-green-600" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h4>
                    <p className="text-gray-600 mb-8">
                      Thank you for reaching out to Savvy Group. We'll get back to you within 24 hours to discuss your
                      project needs.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSubmitted(false)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Contact Card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full -translate-y-1/2 translate-x-1/2"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500 rounded-full translate-y-1/2 -translate-x-1/2"
                ></motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"
                ></motion.div>
              </div>

              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-yellow-400">Get in Touch</h3>
                </div>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <MapPin className="w-6 h-6 text-black" />
                    </motion.div>
                    <h4 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
                      Address
                    </h4>
                  </div>
                  <p className="text-blue-200 ml-16 leading-relaxed">
                    5th Street, Sinkor, Monrovia
                    <br />
                    Montserrado County, Liberia
                  </p>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Phone className="w-6 h-6 text-black" />
                    </motion.div>
                    <h4 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
                      Contact
                    </h4>
                  </div>
                  <div className="text-blue-200 ml-16 space-y-2">
                    <p className="font-numbers">Phone: +231 886 445 092</p>
                    <p>Email: info@savvygroup.com</p>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Clock className="w-6 h-6 text-black" />
                    </motion.div>
                    <h4 className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-300">
                      Business Hours
                    </h4>
                  </div>
                  <div className="text-blue-200 ml-16 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </motion.div>

                {/* Stay Connected */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-xl font-bold mb-4 text-yellow-400">Stay Connected</h4>
                  <div className="flex space-x-3">
                    {[
                      { icon: Facebook, color: "hover:bg-blue-600" },
                      { icon: Twitter, color: "hover:bg-sky-400" },
                      { icon: Instagram, color: "hover:bg-pink-600" },
                      { icon: Linkedin, color: "hover:bg-blue-700" },
                      { icon: Youtube, color: "hover:bg-red-600" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 shadow-lg ${social.color}`}
                      >
                        <social.icon className="w-5 h-5 text-black" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Response Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Quick Response</h4>
                  <p className="text-sm text-gray-600">We respond within 24 hours</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Need immediate assistance? Call us directly at{" "}
                <span className="font-semibold text-yellow-600 font-numbers">+231 886 445 092</span> for urgent inquiries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
