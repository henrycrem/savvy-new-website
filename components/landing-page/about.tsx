"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Coffee,
  UtensilsCrossed,
  HardHat,
  Wine,
  Car,
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  Building,
  Wrench,
  Lightbulb,
  Handshake,
  Eye,
  Compass,
} from "lucide-react"

const AboutPage = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "100+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Calendar },
    { number: "5", label: "Service Areas", icon: Building },
    { number: "25+", label: "Team Members", icon: Users },
    { number: "95%", label: "Client Satisfaction", icon: Star },
  ]

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards, ensuring transparency and honesty in all our dealings with clients and partners.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every project, delivering superior quality that exceeds expectations across all our service areas.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description:
        "We're committed to contributing to Liberia's economic growth and community development through our diverse business ventures.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace new technologies and creative solutions to provide cutting-edge services that keep our clients ahead of the competition.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "We build lasting relationships with our clients, treating every project as a collaborative journey toward mutual success.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "We implement environmentally conscious practices and sustainable solutions that benefit both our clients and the community.",
      color: "from-teal-500 to-blue-500",
    },
  ]

  const services = [
    {
      icon: Coffee,
      title: "Coffee Shop Excellence",
      subtitle: "Premium Coffee Experiences",
      description:
        "Transform your coffee vision into a thriving business with our comprehensive coffee shop solutions. We handle everything from concept development to grand opening.",
      features: [
        "Custom interior design and layout optimization",
        "Premium coffee sourcing and blend development",
        "Professional barista training programs",
        "Point-of-sale system setup and integration",
        "Marketing and brand development",
        "Ongoing operational support and maintenance",
      ],
      specialties: [
        "Artisanal coffee blends",
        "Cozy atmosphere design",
        "Customer experience optimization",
        "Sustainable sourcing practices",
      ],
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant Management",
      subtitle: "Culinary Excellence & Operations",
      description:
        "Launch and manage successful restaurants with our full-service restaurant solutions. From kitchen design to menu development, we ensure your culinary vision comes to life.",
      features: [
        "Complete kitchen design and equipment sourcing",
        "Menu development and recipe standardization",
        "Staff recruitment and comprehensive training",
        "Food safety and hygiene compliance",
        "Inventory management systems",
        "Customer service excellence programs",
      ],
      specialties: [
        "Local and international cuisine",
        "Fine dining experiences",
        "Casual dining concepts",
        "Food delivery optimization",
      ],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
    },
    {
      icon: HardHat,
      title: "Construction Services",
      subtitle: "Building Dreams Into Reality",
      description:
        "Deliver exceptional construction projects with our experienced team of professionals. We specialize in both commercial and residential construction with a focus on quality and timely delivery.",
      features: [
        "Architectural design and planning services",
        "Project management and timeline coordination",
        "Quality materials sourcing and procurement",
        "Safety compliance and risk management",
        "Regular progress reporting and updates",
        "Post-construction maintenance and support",
      ],
      specialties: ["Commercial buildings", "Residential homes", "Renovation projects", "Infrastructure development"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: Wine,
      title: "Bar & Lounge",
      subtitle: "Sophisticated Entertainment Venues",
      description:
        "Create memorable nightlife experiences with our bar and lounge expertise. We design and manage upscale venues that become the talk of the town.",
      features: [
        "Sophisticated interior design and lighting",
        "Premium beverage sourcing and menu curation",
        "Professional bartender training and certification",
        "Entertainment system setup and management",
        "VIP area design and exclusive services",
        "Event planning and private party coordination",
      ],
      specialties: [
        "Craft cocktail programs",
        "Wine selection expertise",
        "Live entertainment venues",
        "Private event hosting",
      ],
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      icon: Car,
      title: "Car Rental Services",
      subtitle: "Premium Transportation Solutions",
      description:
        "Provide reliable transportation solutions with our comprehensive car rental services. We maintain a modern fleet and offer flexible rental options for all needs.",
      features: [
        "Modern, well-maintained vehicle fleet",
        "Flexible rental terms and competitive pricing",
        "24/7 roadside assistance and support",
        "GPS navigation and safety equipment",
        "Corporate and long-term rental packages",
        "Airport pickup and delivery services",
      ],
      specialties: [
        "Business travel solutions",
        "Tourist transportation",
        "Event and wedding rentals",
        "Long-term leasing options",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
  ]

  const timeline = [
    {
      year: "2015",
      title: "Foundation & Vision",
      description:
        "Savvy Group was founded with a vision to transform Liberia's business landscape through multi-service excellence. Started with our first coffee shop venture in Central Monrovia.",
      icon: Compass,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2020",
      title: "Restaurant Expansion",
      description:
        "Expanded into restaurant management and operations, successfully launching three dining establishments and establishing our reputation for culinary excellence.",
      icon: UtensilsCrossed,
      color: "from-red-500 to-pink-500",
    },
    {
      year: "2021",
      title: "Construction Division",
      description:
        "Launched our construction services division, completing our first major commercial building project and establishing partnerships with local suppliers.",
      icon: HardHat,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2022",
      title: "Hospitality Growth",
      description:
        "Opened our first upscale bar and lounge, setting new standards for nightlife entertainment in Monrovia and expanding our hospitality portfolio.",
      icon: Wine,
      color: "from-purple-500 to-indigo-500",
    },
    {
      year: "2023",
      title: "Transportation Services",
      description:
        "Launched our car rental division with a modern fleet of vehicles, providing reliable transportation solutions for businesses and tourists.",
      icon: Car,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2024",
      title: "Market Leadership",
      description:
        "Achieved market leadership position with 100+ satisfied clients, 50+ completed projects, and recognition as Liberia's premier multi-service company.",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
    },
  ]

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-400 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full"
          ></motion.div>
        </div>

        {/* Floating Service Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[Coffee, UtensilsCrossed, HardHat, Wine, Car].map((Icon, index) => (
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
              <Icon size={48} />
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-yellow-400 font-medium mb-6"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-px bg-yellow-400"
              ></motion.div>
              <span>About Savvy Group</span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-px bg-yellow-400"
              ></motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Transforming Liberia's
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-yellow-400"
              >
                Business Landscape
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-blue-200 max-w-4xl mx-auto mb-8"
            >
              Since 2015, Savvy Group has been pioneering multi-service excellence across Liberia, delivering
              exceptional quality in hospitality, construction, and transportation services that drive economic growth
              and community development.
            </motion.p>

            {/* Service Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {[Coffee, UtensilsCrossed, HardHat, Wine, Car].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
                    <Icon className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <span className="text-white text-sm font-medium">
                    {index === 0
                      ? "Coffee Shop"
                      : index === 1
                        ? "Restaurant"
                        : index === 2
                          ? "Construction"
                          : index === 3
                            ? "Bar & Lounge"
                            : "Car Rental"}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg inline-flex items-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-12 text-gray-50 fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <IconComponent size={24} className="text-black" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-3xl font-bold text-gray-900 mb-2 font-numbers"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 text-yellow-500 font-medium mb-4"
                >
                  <div className="w-8 h-px bg-yellow-500"></div>
                  <span>Our Story</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl font-bold text-gray-900 mb-6"
                >
                  Building Excellence
                  <span className="block text-yellow-500">Since 2015</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-600 text-lg leading-relaxed mb-6"
                >
                  Savvy Group began as a vision to transform Liberia's business landscape through innovative
                  multi-service solutions. What started as a single coffee shop venture has evolved into a comprehensive
                  business empire spanning five key industries.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                >
                  Our journey is marked by continuous growth, unwavering commitment to quality, and a deep understanding
                  of Liberia's unique business environment. Today, we stand as the country's premier multi-service
                  company, trusted by over 100 clients and recognized for our exceptional standards.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center space-x-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
                  >
                    Learn More
                  </motion.button>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300 shadow-lg cursor-pointer"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
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

                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 h-full flex items-center justify-center text-center space-y-6"
                  >
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl"
                      >
                        <span className="text-black font-bold text-3xl">SG</span>
                      </motion.div>

                      <div className="text-white space-y-4">
                        <h3 className="text-2xl font-bold">Our Journey</h3>
                        <p className="text-yellow-300 font-medium">From Vision to Reality</p>

                        {/* Service Icons Grid */}
                        <div className="grid grid-cols-3 gap-3 mt-6 max-w-xs mx-auto">
                          {[Coffee, UtensilsCrossed, HardHat, Wine, Car].map((Icon, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 hover:bg-yellow-500/20 transition-colors duration-300"
                            >
                              <Icon className="w-5 h-5 text-yellow-300" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="absolute bottom-6 left-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-yellow-500 font-medium mb-4">
              <div className="w-8 h-px bg-yellow-500"></div>
              <span>Our Foundation</span>
              <div className="w-8 h-px bg-yellow-500"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mission, Vision & <span className="text-yellow-500">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our journey and define our commitment to excellence in every service we provide.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full -translate-y-1/2 translate-x-1/2"
                ></motion.div>
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <Target size={32} className="text-black" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To empower businesses and communities across Liberia by delivering exceptional multi-service solutions
                  that drive sustainable growth, create lasting value, and contribute to the nation's economic
                  development through innovation, quality, and unwavering commitment to excellence.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-8 text-black relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute bottom-0 left-0 w-24 h-24 bg-blue-900 rounded-full translate-y-1/2 -translate-x-1/2"
                ></motion.div>
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <Eye size={32} className="text-yellow-400" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-black/80 leading-relaxed">
                  To be West Africa's leading multi-service company, recognized for setting new standards of excellence
                  across hospitality, construction, and transportation industries while being the catalyst for Liberia's
                  transformation into a thriving business hub.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <IconComponent size={24} className="text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-yellow-500 font-medium mb-4">
              <div className="w-8 h-px bg-yellow-500"></div>
              <span>Our Services</span>
              <div className="w-8 h-px bg-yellow-500"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions for
              <span className="block text-yellow-500">Every Business Need</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our full range of professional services designed to transform your business vision into reality
              with exceptional quality and attention to detail.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent size={32} className="text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-yellow-500 font-semibold">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">What We Provide:</h4>
                      <div className="grid gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Our Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.specialties.map((specialty, specialtyIndex) => (
                          <motion.span
                            key={specialtyIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: specialtyIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg cursor-pointer`}
                          >
                            {specialty}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>

                  {/* Visual */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    <div
                      className={`aspect-[4/3] bg-gradient-to-br ${service.bgColor} rounded-3xl relative overflow-hidden shadow-2xl`}
                    >
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              rotate: 360,
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 6 + i * 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.5,
                            }}
                            className={`absolute w-12 h-12 border-2 border-current rounded-full`}
                            style={{
                              top: `${20 + i * 20}%`,
                              left: `${15 + i * 15}%`,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10 h-full flex items-center justify-center text-center">
                        <div className="space-y-6">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full mx-auto flex items-center justify-center shadow-xl`}
                          >
                            <IconComponent size={40} className="text-white" />
                          </motion.div>

                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h4>
                            <p className="text-gray-600 font-medium">{service.subtitle}</p>
                          </div>

                          {/* Feature Icons */}
                          <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                            {[Wrench, Star, TrendingUp].map((Icon, iconIndex) => (
                              <motion.div
                                key={iconIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 + iconIndex * 0.1 }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-200 hover:bg-white transition-colors duration-300"
                              >
                                <Icon className="w-5 h-5 text-gray-700" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-yellow-500 font-medium mb-4">
              <div className="w-8 h-px bg-yellow-500"></div>
              <span>Our Journey</span>
              <div className="w-8 h-px bg-yellow-500"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Milestones of <span className="text-yellow-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to becoming Liberia's premier multi-service company, discover the key moments
              that shaped our journey.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-blue-900 rounded-full hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-yellow-400 shadow-lg z-10 hidden lg:flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}
                      >
                        <IconComponent size={16} className="text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                        !isEven ? "lg:col-start-2 lg:text-left" : "lg:text-right"
                      }`}
                    >
                      <div className="flex items-center space-x-4 lg:hidden mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent size={20} className="text-white" />
                        </motion.div>
                        <span className="text-2xl font-bold text-yellow-500">{item.year}</span>
                      </div>

                      <span className="text-2xl font-bold text-yellow-500 hidden lg:block mb-2">{item.year}</span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </motion.div>

                    {/* Year Badge for Desktop */}
                    <div className={`hidden lg:block ${!isEven ? "lg:col-start-1" : ""}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className={`${isEven ? "text-right" : "text-left"}`}
                      >
                        <span className="text-6xl font-bold text-gray-200">{item.year}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join over 100+ satisfied clients who have experienced the Savvy Group difference. Let's discuss how we can
              help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-black/20 text-black px-8 py-4 rounded-full font-semibold hover:bg-black/10 hover:border-black/30 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
