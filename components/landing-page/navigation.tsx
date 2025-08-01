"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Coffee,
  UtensilsCrossed,
  HardHat,
  Wine,
  Car,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const logoRef = useRef<HTMLImageElement>(null)

  // Add this useEffect after the state declarations
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".relative.group")) {
        setActiveDropdown(null)
        setIsDesktopDropdownOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  // Check if logo image exists on component mount
  useEffect(() => {
    const checkLogo = () => {
      if (logoRef.current && logoRef.current.complete) {
        // If image was already loaded (e.g., from cache) but failed
        if (logoRef.current.naturalWidth === 0) {
          setLogoError(true)
        }
      }
    }

    // Check immediately if the image is already loaded
    checkLogo()

    // Add event listeners for load and error
    const imgElement = logoRef.current
    if (imgElement) {
      imgElement.addEventListener("load", () => setLogoError(false))
      imgElement.addEventListener("error", () => setLogoError(true))
    }

    // Cleanup
    return () => {
      if (imgElement) {
        imgElement.removeEventListener("load", () => setLogoError(false))
        imgElement.removeEventListener("error", () => setLogoError(true))
      }
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        {
          name: "Coffee Shop",
          href: "/services/coffee-shop",
          icon: Coffee,
          description: "Premium coffee experiences and café management",
          color: "from-amber-500 to-yellow-500",
        },
        {
          name: "Restaurant",
          href: "/services/restaurant",
          icon: UtensilsCrossed,
          description: "Full-service restaurant operations and management",
          color: "from-red-500 to-pink-500",
        },
        {
          name: "Construction",
          href: "/services/construction",
          icon: HardHat,
          description: "Commercial and residential construction projects",
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Bar & Lounge",
          href: "/services/bar",
          icon: Wine,
          description: "Upscale bar and lounge experiences",
          color: "from-purple-500 to-indigo-500",
        },
        {
          name: "Car Rental",
          href: "/services/car-rental",
          icon: Car,
          description: "Premium vehicle rental and fleet management",
          color: "from-green-500 to-emerald-500",
        },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ]

  const socialIcons = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 cursor-pointer"
              >
                {/* Use image with fallback to SG text */}
                {!logoError ? (
                  <img
                    ref={logoRef}
                    src="/images/savvy_logo.jpeg"
                    alt="Savvy Group Logo"
                    className="w-full h-full object-contain rounded-lg"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-black font-bold text-xl">SG</span>
                )}
              </motion.div>
            </Link>
            <Link href="/">
              <div className="cursor-pointer">
                <span className="text-2xl font-bold text-gray-900">Savvy Group</span>
                <p className="text-yellow-500 text-xs font-medium">Multi-Service Excellence</p>
              </div>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden xl:flex items-center space-x-8 text-sm"
          >
            {[
              { icon: Phone, text: "(+231) 886-445-092" },
              { icon: Mail, text: "info@savvygroup.com" },
              { icon: MapPin, text: "Monrovia, Liberia" },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 group">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300"
                  >
                    <IconComponent className="w-4 h-4 text-black" />
                  </motion.div>
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center space-x-3"
          >
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer`}
                  aria-label={social.name}
                >
                  <IconComponent size={18} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none focus:text-yellow-500 transition-colors duration-300 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="border-t border-gray-200">
          <div className="flex items-center justify-between py-4">
            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden lg:flex items-center space-x-10"
            >
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <motion.a
                    whileHover={{ y: -2 }}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-yellow-500 font-semibold transition-colors duration-300 py-2 cursor-pointer"
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault()
                        setActiveDropdown(activeDropdown === index ? null : index)
                        setIsDesktopDropdownOpen(!isDesktopDropdownOpen)
                      }
                    }}
                    onMouseEnter={() => {
                      if (item.dropdown) {
                        setIsDesktopDropdownOpen(true)
                      }
                    }}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <motion.div
                        animate={{ rotate: activeDropdown === index || isDesktopDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} className="group-hover:text-yellow-500 transition-colors duration-300" />
                      </motion.div>
                    )}
                  </motion.a>

                  {/* Enhanced Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {(activeDropdown === index || isDesktopDropdownOpen) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-[60]"
                          onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                          onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                        >
                          <div className="p-6">
                            {/* Services Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {item.dropdown.map((dropdownItem, dropdownIndex) => {
                                const IconComponent = dropdownItem.icon
                                return (
                                  <motion.a
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: dropdownIndex * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="group/item flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-yellow-200 hover:shadow-lg cursor-pointer"
                                    onClick={() => {
                                      setActiveDropdown(null)
                                      setIsDesktopDropdownOpen(false)
                                    }}
                                  >
                                    <motion.div
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                      className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}
                                    >
                                      <IconComponent className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <div className="flex-1 min-w-0">
                                      <h3 className="font-bold text-gray-900 group-hover/item:text-black transition-colors duration-200 text-sm">
                                        {dropdownItem.name}
                                      </h3>
                                      <p className="text-xs text-gray-600 mt-1 group-hover/item:text-gray-700 transition-colors duration-200 line-clamp-2">
                                        {dropdownItem.description}
                                      </p>
                                    </div>
                                  </motion.a>
                                )
                              })}
                            </div>

                            {/* View All Services Button */}
                            <div className="pt-4 border-t border-gray-200">
                              <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="/services"
                                className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg cursor-pointer"
                                onClick={() => {
                                  setActiveDropdown(null)
                                  setIsDesktopDropdownOpen(false)
                                }}
                              >
                                View All Services
                              </motion.a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Get Quote Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden lg:block"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white overflow-hidden relative z-[60]"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="py-6 space-y-6"
              >
                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="space-y-3 px-6 py-4 bg-gray-50 rounded-xl mx-4 border border-yellow-200"
                >
                  {[
                    { icon: Phone, text: "(+231) 886-445-092" },
                    { icon: Mail, text: "info@savvygroup.com" },
                    { icon: MapPin, text: "Monrovia, Liberia" },
                  ].map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div key={index} className="flex items-center space-x-3 text-sm">
                        <IconComponent className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    )
                  })}
                </motion.div>

                {/* Mobile Navigation Links */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="px-4"
                  >
                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-yellow-500 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                      onClick={(e) => {
                        if (item.dropdown) {
                          e.preventDefault()
                          handleDropdownToggle(index)
                        }
                      }}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <motion.div
                          animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={18} />
                        </motion.div>
                      )}
                    </motion.a>

                    {/* Enhanced Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 space-y-3 border-l-2 border-yellow-400 pl-4 overflow-hidden bg-white relative z-[70]"
                        >
                          {item.dropdown.map((dropdownItem, dropdownIndex) => {
                            const IconComponent = dropdownItem.icon
                            return (
                              <motion.a
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: dropdownIndex * 0.05 }}
                                href={dropdownItem.href}
                                className="flex items-center space-x-3 p-3 text-gray-600 hover:text-yellow-500 hover:bg-gray-50 rounded-lg transition-all duration-200 group/mobile cursor-pointer"
                                onClick={() => {
                                  setActiveDropdown(null)
                                  setIsMobileMenuOpen(false)
                                }}
                              >
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center shadow-md`}
                                >
                                  <IconComponent className="w-4 h-4 text-white" />
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-sm">{dropdownItem.name}</div>
                                  <div className="text-xs text-gray-500 group-hover/mobile:text-gray-600 transition-colors duration-200">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </motion.a>
                            )
                          })}
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <Link href="/services">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 text-sm cursor-pointer"
                                onClick={() => {
                                  setActiveDropdown(null)
                                  setIsMobileMenuOpen(false)
                                }}
                              >
                                View All Services
                              </motion.button>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Mobile Social Media */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="flex items-center justify-center space-x-4 pt-6 border-t border-gray-200 mx-4"
                >
                  {socialIcons.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 shadow-sm cursor-pointer`}
                      >
                        <IconComponent size={18} />
                      </motion.a>
                    )
                  })}
                </motion.div>

                {/* Mobile Get Quote Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="px-4 pt-4"
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
