"use client"


import { Wine, Music, Users, ShieldCheck, CheckCircle, Star, Award, Palette, Crown } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Sophisticated Interior Design",
    description: "Upscale interior design creating the perfect ambiance for memorable nightlife experiences.",
  },
  {
    icon: Wine,
    title: "Premium Beverage Curation",
    description: "Expertly curated wine lists, craft cocktails, and premium spirits selection.",
  },
  {
    icon: Users,
    title: "Professional Staff Training",
    description: "Comprehensive bartender and service staff training for exceptional customer experiences.",
  },
  {
    icon: Music,
    title: "Entertainment Systems",
    description: "State-of-the-art sound systems, lighting, and entertainment setup for perfect atmosphere.",
  },
  {
    icon: Crown,
    title: "VIP Services",
    description: "Exclusive VIP areas and premium service offerings for discerning clientele.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety",
    description: "Complete licensing, safety protocols, and regulatory compliance management.",
  },
]

const services = [
  {
    title: "Concept & Design",
    description: "Create unique bar and lounge concepts that stand out in the competitive nightlife market.",
    items: [
      "Theme development & branding",
      "Interior design & layout planning",
      "Lighting & ambiance design",
      "Furniture & décor selection",
    ],
  },
  {
    title: "Beverage Program",
    description: "Develop comprehensive beverage programs that maximize profitability and customer satisfaction.",
    items: [
      "Cocktail menu development",
      "Wine & spirits selection",
      "Bartender training programs",
      "Inventory management systems",
    ],
  },
  {
    title: "Operations Management",
    description: "Complete operational oversight ensuring smooth daily operations and exceptional service standards.",
    items: [
      "Staff recruitment & training",
      "Service protocols & standards",
      "Security & safety management",
      "Event planning & coordination",
    ],
  },
  {
    title: "Marketing & Events",
    description: "Strategic marketing and event programming to build a loyal customer base and drive revenue.",
    items: [
      "Brand development & marketing",
      "Social media & digital presence",
      "Special events & promotions",
      "VIP programs & memberships",
    ],
  },
]

const testimonials = [
  {
    name: "Alexandra Thompson",
    business: "Skyline Lounge",
    quote:
      "Savvy Group transformed our vision into the city's premier nightlife destination. The sophisticated design and operational excellence are outstanding.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    business: "The Vault Bar",
    quote:
      "From concept to opening night, their expertise in every aspect of bar management was evident. We've been packed every weekend since launch.",
    rating: 5,
  },
  {
    name: "Isabella Rodriguez",
    business: "Moonlight Lounge",
    quote:
      "The beverage program and staff training they provided elevated our establishment to fine dining standards. Customer satisfaction is at an all-time high.",
    rating: 5,
  },
]

const process = [
  {
    step: "01",
    title: "Concept Development",
    description: "Define your unique bar concept, target audience, and competitive positioning in the market.",
  },
  {
    step: "02",
    title: "Design & Setup",
    description: "Complete interior design, equipment installation, and atmosphere creation for your venue.",
  },
  {
    step: "03",
    title: "Program Development",
    description: "Beverage menu creation, staff training, and operational system implementation.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description: "Grand opening support and ongoing marketing to establish your bar as a premier destination.",
  },
]

const barTypes = [
  {
    icon: Wine,
    title: "Wine Bars",
    description: "Sophisticated wine bars with curated selections and elegant atmospheres.",
  },
  {
    icon: Crown,
    title: "Upscale Lounges",
    description: "Premium lounges offering VIP experiences and exclusive service.",
  },
  {
    icon: Music,
    title: "Entertainment Venues",
    description: "Bars with live music, DJ sets, and interactive entertainment.",
  },
  {
    icon: Users,
    title: "Social Bars",
    description: "Community-focused bars perfect for socializing and networking.",
  },
]

export default function BarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
 

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-500 to-purple-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-700"></div>
          <Wine className="absolute top-32 right-1/4 w-12 h-12 text-white/20 animate-float" />
          <Music className="absolute bottom-32 right-10 w-8 h-8 text-white/20 animate-float delay-500" />
          <Crown className="absolute top-1/2 left-10 w-6 h-6 text-white/20 animate-float delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm mr-6">
                  <Wine className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Bar & Lounge</h1>
                  <p className="text-xl text-white/90">Management Services</p>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Create sophisticated nightlife experiences with our comprehensive bar and lounge management services.
                From upscale wine bars to premium lounges, we craft venues that become the talk of the town.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Create Your Venue
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  View Our Venues
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Upscale+Bar+Interior"
                  alt="Bar Interior"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bar Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bar & Lounge <span className="text-purple-600">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create diverse nightlife experiences, from intimate wine bars to high-energy entertainment venues.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {barTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
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
              Premium <span className="text-purple-600">Bar Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every element of bar and lounge management designed to create unforgettable nightlife experiences.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
              Our <span className="text-purple-600">Service Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive bar and lounge management covering every aspect of nightlife venue operations.
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
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
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
              Our <span className="text-purple-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A refined approach that transforms bar concepts into premier nightlife destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transform -translate-y-1/2"></div>
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
              Venue <span className="text-purple-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped create some of the most sought-after nightlife destinations in the region.
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
                  <div className="text-purple-600 font-medium">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wine className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl font-bold mb-6">Ready to Create the Ultimate Nightlife Experience?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's transform your bar or lounge concept into the premier destination where memories are made and stories
            begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Launch Your Venue
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
