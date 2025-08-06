"use client"
import { useState, useEffect } from "react"
import { Star, ArrowLeft, ArrowRight, Quote, Coffee, UtensilsCrossed, HardHat, Wine, Car } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Updated testimonials with varied ratings (4 or 5)
  const testimonials = [
    {
      id: 1,
      rating: 5, // Kept as 5
      title: "Exceptional Coffee Shop Experience!",
      text: "Savvy Group transformed our vision into a thriving coffee shop. Their attention to detail, from interior design to staff training, exceeded our expectations. Our customers love the ambiance and quality of service.",
      client: {
        name: "Michael Johnson",
        position: "Owner, Brew Haven Café",
        image: "/images/testimonial-1.jpg",
        serviceIcon: Coffee,
      },
    },
    {
      id: 2,
      rating: 4, // Changed to 4
      title: "Top-Notch Restaurant Management!",
      text: "Working with Savvy Group for our restaurant setup was a great decision. Their expertise in kitchen layout, menu development, and operational efficiency significantly boosted our performance. Minor hiccups during initial training, but overall very pleased.",
      client: {
        name: "Sarah Williams",
        position: "Director, Seaside Dining",
        image: "/images/testimonial-2.jpg",
        serviceIcon: UtensilsCrossed,
      },
    },
    {
      id: 3,
      rating: 5, // Kept as 5
      title: "Quality Construction Services!",
      text: "Savvy Group delivered our commercial building project on time and within budget. Their construction team maintained the highest standards of quality and safety throughout the project. We've already contracted them for our next expansion.",
      client: {
        name: "Robert Taylor",
        position: "CEO, Taylor Enterprises",
        image: "/images/testimonial-3.jpg",
        serviceIcon: HardHat,
      },
    },
    {
      id: 4,
      rating: 4, // Changed to 4
      title: "Impressive Bar & Lounge Setup!",
      text: "Our lounge has become very popular thanks to Savvy Group's design and operational guidance. Their understanding of ambiance and customer flow was key. The beverage service setup took a bit longer than expected, but the results are excellent.",
      client: {
        name: "Jennifer Adams",
        position: "Manager, Skyline Lounge",
        image: "/images/testimonial-4.jpg",
        serviceIcon: Wine,
      },
    },
    {
      id: 5,
      rating: 5, // Kept as 5
      title: "Reliable Car Rental Solutions!",
      text: "Savvy Group's car rental service has been instrumental for our business travel needs. Their well-maintained fleet, flexible rental options, and exceptional customer service make them our preferred transportation partner in Liberia.",
      client: {
        name: "Daniel Morris",
        position: "Operations Director, Global Imports",
        image: "/images/testimonial-5.jpg",
        serviceIcon: Car,
      },
    },
  ]

  // Autoplay functionality
  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
  }

  // Get visible testimonials (2 at a time on desktop)
  const getVisibleTestimonials = () => {
    const visibleCount = 2
    const startIndex = currentSlide
    const endIndex = (startIndex + visibleCount) % testimonials.length
    if (endIndex > startIndex) {
      return testimonials.slice(startIndex, startIndex + visibleCount)
    } else {
      return [...testimonials.slice(startIndex), ...testimonials.slice(0, endIndex)]
    }
  }

  // Helper function to display rating value (handles 4 and 5)
  const displayRating = (rating: number) => {
    return rating.toFixed(1); // Ensures 5.0 or 4.0 format
  }

  return (
    <section className="relative py-20 overflow-hidden bg-blue-900">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-20 right-20 w-40 h-40 border-2 border-yellow-400/20 rounded-full"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-20 left-20 w-60 h-60 border-2 border-yellow-400/10 rounded-full"
      ></motion.div>
      {/* Large Quote Icon */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-yellow-500/10">
        <Quote size={120} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-0.5 bg-yellow-500"></div>
              <span className="text-yellow-500 font-medium">Testimonials</span>
              <div className="w-12 h-0.5 bg-yellow-500"></div>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white"
          >
            Experience Shared by
            <span className="block text-yellow-500 mt-2">Our Clients</span>
          </motion.h2>
        </div>
        {/* Testimonials Slider */}
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentSlide}-${testimonial.id}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
                >
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      >
                        <Star
                          size={24}
                          className={`${i < testimonial.rating ? "text-yellow-500" : "text-gray-400"} fill-current`}
                        />
                      </motion.div>
                    ))}
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="ml-2 text-white font-medium"
                    >
                      {displayRating(testimonial.rating)} {/* Use helper function */}
                    </motion.span>
                  </div>
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-2xl font-bold text-white mb-4"
                  >
                    {testimonial.title}
                  </motion.h3>
                  {/* Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-blue-100 mb-8 leading-relaxed"
                  >
                    {testimonial.text}
                  </motion.p>
                  {/* Client Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center"
                  >
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-500">
                        <img
                          src={testimonial.client.image || "/placeholder.svg"}
                          alt={testimonial.client.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement
                            target.style.display = "none"
                            const fallback = target.nextElementSibling as HTMLElement
                            if (fallback) fallback.style.display = "flex"
                          }}
                        />
                        <div className="absolute inset-0 bg-blue-900 items-center justify-center hidden">
                          {testimonial.client.serviceIcon && (
                            <testimonial.client.serviceIcon size={20} className="text-yellow-500" />
                          )}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        {testimonial.client.serviceIcon && (
                          <testimonial.client.serviceIcon size={14} className="text-blue-900" />
                        )}
                      </motion.div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-white">{testimonial.client.name}</h4>
                      <p className="text-yellow-500 text-sm">{testimonial.client.position}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Mobile View */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${i < testimonials[currentSlide].rating ? "text-yellow-500" : "text-gray-400"} fill-current`}
                    />
                  ))}
                  <span className="ml-2 text-white font-medium">{displayRating(testimonials[currentSlide].rating)}</span> {/* Use helper function */}
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{testimonials[currentSlide].title}</h3>
                {/* Text */}
                <p className="text-blue-100 mb-6 leading-relaxed text-sm">{testimonials[currentSlide].text}</p>
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-500">
                      <img
                        src={testimonials[currentSlide].client.image || "/placeholder.svg"}
                        alt={testimonials[currentSlide].client.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement
                          target.style.display = "none"
                          const fallback = target.nextElementSibling as HTMLElement
                          if (fallback) fallback.style.display = "flex"
                        }}
                      />
                      <div className="absolute inset-0 bg-blue-900 items-center justify-center hidden">
                        {(() => {
                          const IconComponent = testimonials[currentSlide].client.serviceIcon
                          return IconComponent ? <IconComponent size={16} className="text-yellow-500" /> : null
                        })()}
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      {(() => {
                        const IconComponent = testimonials[currentSlide].client.serviceIcon
                        return IconComponent ? <IconComponent size={12} className="text-blue-900" /> : null
                      })()}
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-white text-sm">{testimonials[currentSlide].client.name}</h4>
                    <p className="text-yellow-500 text-xs">{testimonials[currentSlide].client.position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} />
            </motion.button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-yellow-500" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Experience Our Excellence?</h3>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-300 shadow-lg"
          >
          <Link href="/contact">
          
            Get Started Today
          </Link>
          </motion.button>
        </motion.div>
      </div>
      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 text-gray-50 fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default TestimonialsSection