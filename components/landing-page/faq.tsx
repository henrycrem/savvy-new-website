"use client"
import { useState, useEffect } from "react"
import { Plus, Minus, MessageCircle, Phone, Coffee, UtensilsCrossed, HardHat, Wine, Car, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  useEffect(() => {
    setOpenItem(2) // Open the second item by default
  }, [])

  const faqData: FAQItem[] = [
    {
      id: 1,
      category: "General",
      question: "What services does Savvy Group provide?",
      answer:
        "Savvy Group offers comprehensive multi-service solutions across five key industries in Liberia: Premium Coffee Shop experiences with artisanal blends and cozy atmospheres, Full-service Restaurant operations and management, Quality Construction projects for commercial and residential buildings, Upscale Bar & Lounge experiences with sophisticated ambiance, and Premium Car Rental services with well-maintained vehicles and flexible options.",
    },
    {
      id: 2,
      category: "Pricing",
      question: "Are there any hidden costs in your services?",
      answer:
        "We believe in complete transparency with our pricing across all service areas. Whether you're setting up a coffee shop, restaurant, construction project, bar, or car rental service, all costs are clearly outlined in our proposals and contracts. There are no hidden fees or surprise charges. We provide detailed breakdowns of all services and any additional costs are discussed and approved before implementation.",
    },
    {
      id: 3,
      category: "Pricing",
      question: "How is the project cost determined?",
      answer:
        "Project costs are determined based on several factors including the type of service (coffee shop, restaurant, construction, bar, or car rental), scope of work, timeline, resources required, location in Liberia, and complexity of deliverables. We provide detailed quotes after an initial consultation to understand your specific business needs and objectives.",
    },
    {
      id: 4,
      category: "Process",
      question: "How can I track the progress of my project?",
      answer:
        "We provide regular project updates through our client portal, weekly progress reports, and scheduled check-in meetings. Whether it's a construction project timeline, restaurant setup progress, or coffee shop launch preparation, you'll have access to real-time project dashboards and can communicate directly with your dedicated project manager throughout the entire process.",
    },
    {
      id: 5,
      category: "Consultation",
      question: "Do you provide free consultations or quotes?",
      answer:
        "Yes, we offer complimentary initial consultations for all our services. Whether you're interested in opening a coffee shop, restaurant, need construction services, want to start a bar, or require car rental solutions, we'll provide you with a detailed proposal and quote tailored to your specific requirements at no cost during our initial meeting.",
    },
    {
      id: 6,
      category: "Specialization",
      question: "What types of projects do you specialize in across Liberia?",
      answer:
        "We specialize in hospitality ventures (coffee shops, restaurants, bars), commercial and residential construction projects, and transportation solutions (car rental services). Our expertise spans across startup launches, established business expansions, and everything in between. We understand the unique business landscape of Liberia and tailor our services accordingly.",
    },
  ]

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  // Log faqData to verify answers are present
//   console.log("faqData:", faqData)

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-yellow-500 font-medium mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-yellow-500"
            ></motion.div>
            <span>FAQs</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-yellow-500"
            ></motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Questions?{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-yellow-500"
            >
              Look here.
            </motion.span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {faqData.map((item) => {
              // Log each item to verify answer is present
              console.log(`Item ${item.id}:`, { question: item.question, answer: item.answer })
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className={`bg-white rounded-2xl shadow-sm border transition-all duration-500 ${
                    openItem === item.id
                      ? "bg-blue-900 text-white shadow-2xl transform scale-[1.02]"
                      : "hover:shadow-lg hover:border-yellow-200"
                  }`}
                >
                  <motion.button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            openItem === item.id ? "bg-yellow-500 text-blue-900" : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h3
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          openItem === item.id ? "text-white" : "text-gray-900 group-hover:text-blue-900"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openItem === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openItem === item.id
                          ? "bg-yellow-500 text-blue-900 shadow-lg"
                          : "bg-gray-100 text-gray-600 group-hover:bg-yellow-100 group-hover:text-yellow-600"
                      }`}
                    >
                      {openItem === item.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </motion.div>
                  </motion.button>
                  {/* Simplified rendering to test answer display */}
                  {openItem === item.id && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-white/20 pt-4">
                        <p className="text-gray-900 text-md text-justify leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
          {/* Contact Cards (unchanged for brevity) */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-blue-900 rounded-2xl p-8 text-white relative overflow-hidden cursor-pointer"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <MessageCircle className="w-8 h-8 text-blue-900" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">You have different questions?</h3>
                <p className="text-blue-200 mb-8 leading-relaxed">
                  Our multi-service team will answer all your questions about coffee shops, restaurants, construction,
                  bars, or car rentals. We ensure a quick response.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
                >
                  <Link href="/contact">
                  Contact Us
                  </Link>
                </motion.button>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -translate-y-1/2 translate-x-1/2"
              ></motion.div>
              <motion.div
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/5 rounded-full translate-y-1/2 -translate-x-1/2"
              ></motion.div>
              <div className="absolute top-4 right-4 flex space-x-2 opacity-20">
                {[Coffee, UtensilsCrossed, HardHat, Wine, Car].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Icon size={16} className="text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center"
                >
                  <Phone className="w-6 h-6 text-yellow-500" />
                </motion.div>
                <div>
                  <p className="text-gray-600 text-sm">Your Success, Our Priority</p>
                  <h3 className="text-2xl font-bold text-blue-900">24/7 Support</h3>
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-700 mb-2">+231 886 445-092</p>
              <p className="text-sm text-gray-500">Available across all service areas</p>
              <div className="flex items-center space-x-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + star * 0.1 }}
                  >
                    <Star size={16} className="text-yellow-500" fill="currentColor" />
                  </motion.div>
                ))}
                <span className="text-sm text-gray-600 ml-2">5.0 Client Rating</span>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-100 to-transparent rounded-full translate-x-10 translate-y-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection