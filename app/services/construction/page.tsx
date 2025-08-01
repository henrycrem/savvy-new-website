"use client"

import {
  HardHat,
  Building,
  Users,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Hammer,
  BarcodeIcon as Blueprint,
  Wrench,
} from "lucide-react"

const features = [
  {
    icon: Blueprint,
    title: "Architectural Design",
    description:
      "Complete architectural planning and structural design services for residential and commercial projects.",
  },
  {
    icon: Hammer,
    title: "Project Management",
    description: "End-to-end project coordination ensuring timely delivery within budget and quality standards.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Experienced construction teams with specialized skills across all building trades and disciplines.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Compliance",
    description: "Comprehensive safety protocols and regulatory compliance for all construction activities.",
  },
  {
    icon: TrendingUp,
    title: "Quality Materials",
    description: "Premium building materials sourced from trusted suppliers ensuring durability and excellence.",
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    description: "Post-construction maintenance and support services to protect your investment long-term.",
  },
]

const services = [
  {
    title: "Residential Construction",
    description:
      "Custom homes and residential developments built to the highest standards of quality and craftsmanship.",
    items: [
      "Custom home design & construction",
      "Residential renovations & additions",
      "Multi-family housing projects",
      "Interior finishing & design",
    ],
  },
  {
    title: "Commercial Construction",
    description: "Professional commercial buildings designed for functionality, efficiency, and business success.",
    items: [
      "Office buildings & complexes",
      "Retail spaces & shopping centers",
      "Restaurants & hospitality venues",
      "Industrial facilities & warehouses",
    ],
  },
  {
    title: "Infrastructure Projects",
    description: "Essential infrastructure development that supports community growth and economic development.",
    items: [
      "Road construction & maintenance",
      "Utility installation & upgrades",
      "Drainage & water systems",
      "Public facility construction",
    ],
  },
  {
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with professional renovation services that add value and functionality.",
    items: [
      "Complete building renovations",
      "Kitchen & bathroom remodeling",
      "Commercial space upgrades",
      "Historic building restoration",
    ],
  },
]

const testimonials = [
  {
    name: "Robert Johnson",
    business: "Johnson Family Residence",
    quote:
      "Savvy Group built our dream home exactly as we envisioned. Their attention to detail and quality craftsmanship exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Patricia Williams",
    business: "Williams Commercial Plaza",
    quote:
      "The commercial complex they built for us has been a tremendous success. Professional, on-time, and within budget - everything we hoped for.",
    rating: 5,
  },
  {
    name: "Michael Davis",
    business: "Davis Manufacturing Facility",
    quote:
      "From design to completion, Savvy Group managed our industrial facility project flawlessly. The quality and efficiency are outstanding.",
    rating: 5,
  },
]

const process = [
  {
    step: "01",
    title: "Planning & Design",
    description:
      "Comprehensive project planning, architectural design, and detailed blueprints tailored to your specific needs.",
  },
  {
    step: "02",
    title: "Permits & Approvals",
    description:
      "Complete handling of all permits, regulatory approvals, and compliance requirements for your project.",
  },
  {
    step: "03",
    title: "Construction Phase",
    description: "Professional construction execution with regular progress updates and quality control checkpoints.",
  },
  {
    step: "04",
    title: "Completion & Support",
    description: "Final inspections, project handover, and ongoing maintenance support to ensure lasting satisfaction.",
  },
]

const projectTypes = [
  {
    icon: Building,
    title: "Commercial Buildings",
    description: "Modern office complexes, retail spaces, and mixed-use developments.",
  },
  {
    icon: HardHat,
    title: "Residential Homes",
    description: "Custom homes, housing developments, and residential renovations.",
  },
  {
    icon: Wrench,
    title: "Infrastructure",
    description: "Roads, utilities, and essential community infrastructure projects.",
  },
  {
    icon: Blueprint,
    title: "Renovations",
    description: "Building upgrades, remodeling, and restoration projects.",
  },
]

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
  

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-700"></div>
          <HardHat className="absolute top-32 right-1/4 w-12 h-12 text-white/20 animate-float" />
          <Building className="absolute bottom-32 right-10 w-8 h-8 text-white/20 animate-float delay-500" />
          <Hammer className="absolute top-1/2 left-10 w-6 h-6 text-white/20 animate-float delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm mr-6">
                  <HardHat className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Construction</h1>
                  <p className="text-xl text-white/90">Services</p>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Build your vision with our comprehensive construction services. From residential homes to commercial
                complexes, we deliver quality craftsmanship, on-time completion, and exceptional value for every
                project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Modern+Construction+Project"
                  alt="Construction Project"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Construction <span className="text-blue-600">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in diverse construction projects, from residential homes to large-scale commercial
              developments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-blue-600">Construction Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional construction management with a focus on quality, safety, and timely project delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Construction Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions covering every type of building project and development need.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Construction Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures every construction project is completed to the highest standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2"></div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Construction <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped clients bring their construction visions to life with quality craftsmanship and
              professional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 font-medium">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HardHat className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Vision?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's transform your construction project from concept to completion with professional expertise and quality
            craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg">
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
