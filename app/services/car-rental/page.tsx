"use client"


import { Car, Shield, Users, Clock, TrendingUp, MapPin, CheckCircle, Star, Award, Fuel, Settings } from "lucide-react"

const features = [
  {
    icon: Car,
    title: "Modern Vehicle Fleet",
    description: "Well-maintained, reliable vehicles ranging from economy cars to luxury SUVs and commercial vehicles.",
  },
  {
    icon: Shield,
    title: "Comprehensive Insurance",
    description: "Full insurance coverage and protection plans for peace of mind during your rental period.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support and roadside assistance whenever you need help.",
  },
  {
    icon: MapPin,
    title: "GPS & Navigation",
    description: "All vehicles equipped with modern GPS systems and navigation technology.",
  },
  {
    icon: Users,
    title: "Corporate Packages",
    description: "Specialized rental packages for businesses, long-term rentals, and fleet management.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description: "Transparent, competitive pricing with flexible rental terms to suit your budget.",
  },
]

const services = [
  {
    title: "Personal Rentals",
    description: "Individual car rental services for personal transportation, vacations, and special occasions.",
    items: [
      "Daily & weekly rentals",
      "Weekend getaway packages",
      "Special occasion vehicles",
      "Airport pickup & delivery",
    ],
  },
  {
    title: "Corporate Solutions",
    description: "Comprehensive fleet management and corporate rental solutions for businesses of all sizes.",
    items: [
      "Corporate fleet management",
      "Employee transportation",
      "Long-term rental agreements",
      "Bulk rental discounts",
    ],
  },
  {
    title: "Tourism & Travel",
    description: "Specialized rental services for tourists and travelers exploring Liberia and the region.",
    items: [
      "Tourist-friendly vehicles",
      "Multi-destination packages",
      "Driver services available",
      "Travel planning assistance",
    ],
  },
  {
    title: "Commercial Vehicles",
    description: "Commercial vehicle rentals for businesses requiring trucks, vans, and specialized transportation.",
    items: [
      "Cargo vans & trucks",
      "Moving & delivery vehicles",
      "Construction equipment transport",
      "Event transportation",
    ],
  },
]

const testimonials = [
  {
    name: "Jennifer Adams",
    business: "Business Traveler",
    quote:
      "Savvy Group's car rental service made my business trip seamless. The vehicle was perfect, and their customer service was exceptional.",
    rating: 5,
  },
  {
    name: "Thomas Wilson",
    business: "Wilson Construction",
    quote:
      "We rely on their commercial vehicle rentals for our projects. Always reliable, well-maintained vehicles with excellent support.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    business: "Tourist",
    quote:
      "Exploring Liberia was amazing with their rental car. GPS navigation, roadside assistance, and a comfortable vehicle made our trip perfect.",
    rating: 5,
  },
]

const process = [
  {
    step: "01",
    title: "Book Your Vehicle",
    description: "Choose from our diverse fleet and book online, by phone, or visit our location.",
  },
  {
    step: "02",
    title: "Documentation",
    description: "Quick and easy documentation process with flexible pickup and delivery options.",
  },
  {
    step: "03",
    title: "Vehicle Inspection",
    description: "Thorough vehicle inspection and orientation to ensure you're comfortable and ready to go.",
  },
  {
    step: "04",
    title: "Enjoy Your Journey",
    description: "Hit the road with confidence knowing our 24/7 support team is always available.",
  },
]

const vehicleTypes = [
  {
    icon: Car,
    title: "Economy Cars",
    description: "Fuel-efficient vehicles perfect for city driving and daily transportation.",
  },
  {
    icon: Users,
    title: "Family SUVs",
    description: "Spacious SUVs ideal for families and group travel with comfort and safety.",
  },
  {
    icon: Settings,
    title: "Luxury Vehicles",
    description: "Premium cars for special occasions, business meetings, and VIP transportation.",
  },
  {
    icon: Fuel,
    title: "Commercial Trucks",
    description: "Heavy-duty trucks and vans for cargo, moving, and commercial applications.",
  },
]

export default function CarRentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-700"></div>
          <Car className="absolute top-32 right-1/4 w-12 h-12 text-white/20 animate-float" />
          <MapPin className="absolute bottom-32 right-10 w-8 h-8 text-white/20 animate-float delay-500" />
          <Shield className="absolute top-1/2 left-10 w-6 h-6 text-white/20 animate-float delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm mr-6">
                  <Car className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Car Rental</h1>
                  <p className="text-xl text-white/90">Services</p>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience reliable, convenient car rental services with our modern fleet and exceptional customer
                support. Whether for business, leisure, or commercial needs, we provide the perfect vehicle for every
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Book Your Car
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-600 transition-all duration-300">
                  View Fleet
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Modern+Car+Fleet"
                  alt="Car Fleet"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Vehicle Fleet</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse fleet of well-maintained vehicles, perfect for any transportation need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
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
              Why Choose Our <span className="text-green-600">Car Rental Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive car rental solutions with modern vehicles, competitive pricing, and exceptional customer
              service.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
              Our <span className="text-green-600">Rental Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive car rental solutions for personal, corporate, and commercial transportation needs.
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
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
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
              Simple <span className="text-green-600">Rental Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get on the road quickly with our streamlined rental process designed for your convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transform -translate-y-1/2"></div>
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
              Customer <span className="text-green-600">Experiences</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from satisfied customers who have experienced our reliable car rental services.
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
                  <div className="text-green-600 font-medium">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Car className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl font-bold mb-6">Ready to Hit the Road?</h2>
          <p className="text-xl text-white/90 mb-8">
            Book your perfect vehicle today and experience the freedom of reliable, convenient transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-600 transition-all duration-300 text-lg">
              Call Us: +231--886-445-092
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
