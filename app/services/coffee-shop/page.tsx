"use client"


import { Coffee, Clock, Users, Palette, ShoppingCart, TrendingUp, CheckCircle, Star, Award, Heart } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Custom Interior Design",
    description:
      "Unique, Instagram-worthy spaces that reflect your brand and create the perfect ambiance for your customers.",
  },
  {
    icon: Coffee,
    title: "Premium Coffee Sourcing",
    description:
      "Direct relationships with coffee farmers worldwide, ensuring the highest quality beans and unique blends.",
  },
  {
    icon: Users,
    title: "Barista Training Programs",
    description:
      "Comprehensive training programs that turn your staff into coffee artisans and customer service experts.",
  },
  {
    icon: ShoppingCart,
    title: "POS & Inventory Systems",
    description: "Modern point-of-sale systems with real-time inventory tracking and detailed analytics.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Branding",
    description: "Complete brand development and marketing strategies to build a loyal customer base.",
  },
  {
    icon: Clock,
    title: "Operational Efficiency",
    description: "Streamlined workflows and processes that maximize productivity and minimize wait times.",
  },
]

const services = [
  {
    title: "Concept Development",
    description:
      "From initial idea to detailed business plan, we help you define your coffee shop's unique identity and market position.",
    items: [
      "Market research & analysis",
      "Concept design & theme development",
      "Business plan creation",
      "Financial projections",
    ],
  },
  {
    title: "Design & Setup",
    description: "Complete interior design and equipment setup to create the perfect coffee shop environment.",
    items: [
      "Interior design & layout",
      "Equipment selection & installation",
      "Furniture & décor sourcing",
      "Lighting & ambiance design",
    ],
  },
  {
    title: "Operations Management",
    description: "Day-to-day operational support to ensure smooth running and consistent quality.",
    items: [
      "Staff recruitment & training",
      "Inventory management",
      "Quality control systems",
      "Customer service protocols",
    ],
  },
  {
    title: "Marketing & Growth",
    description: "Strategic marketing initiatives to build brand awareness and drive customer loyalty.",
    items: ["Brand identity development", "Social media marketing", "Loyalty programs", "Community engagement"],
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Brew & Beans Café",
    quote:
      "Savvy Group transformed my coffee shop dream into reality. Their attention to detail and expertise in every aspect of the business was incredible.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    business: "Urban Grind",
    quote:
      "The barista training program they provided was exceptional. My staff now creates coffee art that customers love to share on social media.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    business: "Corner Coffee Co.",
    quote:
      "From design to operations, Savvy Group handled everything. We've been profitable since month three thanks to their strategic approach.",
    rating: 5,
  },
]

const process = [
  {
    step: "01",
    title: "Consultation & Planning",
    description:
      "We start with a comprehensive consultation to understand your vision, budget, and goals for your coffee shop.",
  },
  {
    step: "02",
    title: "Design & Development",
    description: "Our team creates detailed designs and develops your brand identity, menu, and operational systems.",
  },
  {
    step: "03",
    title: "Setup & Installation",
    description: "We handle all aspects of setup, from interior design to equipment installation and staff training.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Grand opening support and ongoing operational guidance to ensure your coffee shop's success.",
  },
]

export default function CoffeeShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-700"></div>
          <Coffee className="absolute top-32 right-1/4 w-12 h-12 text-white/20 animate-float" />
          <Heart className="absolute bottom-32 right-10 w-8 h-8 text-white/20 animate-float delay-500" />
          <Star className="absolute top-1/2 left-10 w-6 h-6 text-white/20 animate-float delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm mr-6">
                  <Coffee className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Coffee Shop</h1>
                  <p className="text-xl text-white/90">Management Services</p>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your coffee shop vision into a thriving business with our comprehensive management services.
                From concept to cup, we handle every detail to ensure your success in the competitive coffee industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-amber-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Premium+Coffee+Shop+Interior"
                  alt="Coffee Shop Interior"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-amber-600">Coffee Shop Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end solutions that cover every aspect of coffee shop management, ensuring your business
              thrives from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-amber-600">Service Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coffee shop management covering every aspect of your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-amber-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process that takes your coffee shop from concept to successful operation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client <span className="text-amber-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from coffee shop owners who have transformed their businesses with our expert guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-amber-600 font-medium">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Coffee className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl font-bold mb-6">Ready to Brew Success?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's transform your coffee shop vision into a thriving business that serves exceptional experiences, one
            cup at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Start Your Coffee Shop
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-amber-600 transition-all duration-300 text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
