"use client"

import {
  UtensilsCrossed,
  ChefHat,
  Users,
  ShieldCheck,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Award,
  Heart,
  Utensils,
  BookOpen,
} from "lucide-react"

const features = [
  {
    icon: ChefHat,
    title: "Kitchen Design & Setup",
    description: "Professional kitchen layouts optimized for efficiency, safety, and culinary excellence.",
  },
  {
    icon: BookOpen,
    title: "Menu Development",
    description: "Strategic menu creation with cost analysis, seasonal planning, and signature dish development.",
  },
  {
    icon: Users,
    title: "Staff Training Programs",
    description: "Comprehensive training for kitchen staff, servers, and management teams.",
  },
  {
    icon: ShieldCheck,
    title: "Food Safety Compliance",
    description: "Complete food safety protocols, HACCP implementation, and health department compliance.",
  },
  {
    icon: TrendingUp,
    title: "Financial Management",
    description: "Cost control systems, inventory management, and profit optimization strategies.",
  },
  {
    icon: Clock,
    title: "Operational Efficiency",
    description: "Streamlined workflows, service protocols, and quality control systems.",
  },
]

const services = [
  {
    title: "Restaurant Concept & Design",
    description:
      "From initial concept to final design, we create restaurants that captivate customers and optimize operations.",
    items: [
      "Concept development & theme design",
      "Interior design & layout planning",
      "Kitchen design & equipment selection",
      "Branding & atmosphere creation",
    ],
  },
  {
    title: "Menu Engineering",
    description:
      "Strategic menu development that balances customer appeal with profitability and operational efficiency.",
    items: [
      "Recipe development & standardization",
      "Cost analysis & pricing strategy",
      "Seasonal menu planning",
      "Dietary accommodation options",
    ],
  },
  {
    title: "Operations Management",
    description: "Complete operational oversight ensuring consistent quality, efficiency, and customer satisfaction.",
    items: [
      "Staff recruitment & training",
      "Inventory & supply chain management",
      "Quality control systems",
      "Customer service protocols",
    ],
  },
  {
    title: "Marketing & Growth",
    description: "Strategic marketing initiatives to build brand recognition and drive customer loyalty.",
    items: [
      "Brand identity & marketing strategy",
      "Social media & digital marketing",
      "Customer loyalty programs",
      "Event planning & catering services",
    ],
  },
]

const testimonials = [
  {
    name: "David Rodriguez",
    business: "Coastal Bistro",
    quote:
      "Savvy Group transformed our struggling restaurant into the most popular dining destination in town. Their expertise in every aspect was remarkable.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    business: "Fusion Kitchen",
    quote:
      "The menu development and staff training programs they provided elevated our restaurant to fine dining standards. Revenue increased by 200%.",
    rating: 5,
  },
  {
    name: "James Thompson",
    business: "Garden Grill",
    quote:
      "From kitchen design to marketing strategy, Savvy Group handled everything professionally. We've been booked solid since opening.",
    rating: 5,
  },
]

const process = [
  {
    step: "01",
    title: "Concept Development",
    description:
      "We work with you to develop a unique restaurant concept that stands out in the competitive dining market.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Complete restaurant design including kitchen layout, dining area, and operational workflow optimization.",
  },
  {
    step: "03",
    title: "Setup & Training",
    description:
      "Equipment installation, staff recruitment and training, and system implementation for smooth operations.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Grand opening support and ongoing operational guidance to ensure sustained success and growth.",
  },
]

const specialties = [
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Upscale restaurants with sophisticated menus and exceptional service standards.",
  },
  {
    icon: Users,
    title: "Casual Dining",
    description: "Family-friendly restaurants with comfortable atmospheres and diverse menu options.",
  },
  {
    icon: Clock,
    title: "Fast Casual",
    description: "Quick-service restaurants that don't compromise on food quality or customer experience.",
  },
  {
    icon: Heart,
    title: "Specialty Cuisine",
    description: "Ethnic restaurants and specialty dining concepts with authentic cultural experiences.",
  },
]

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-pink-500 to-red-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-700"></div>
          <UtensilsCrossed className="absolute top-32 right-1/4 w-12 h-12 text-white/20 animate-float" />
          <ChefHat className="absolute bottom-32 right-10 w-8 h-8 text-white/20 animate-float delay-500" />
          <Star className="absolute top-1/2 left-10 w-6 h-6 text-white/20 animate-float delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm mr-6">
                  <UtensilsCrossed className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Restaurant</h1>
                  <p className="text-xl text-white/90">Management Services</p>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Create exceptional dining experiences with our comprehensive restaurant management services. From
                concept to cuisine, we ensure your restaurant becomes a culinary destination that customers love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Start Your Restaurant
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all duration-300">
                  View Success Stories
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Elegant+Restaurant+Interior"
                  alt="Restaurant Interior"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Specialties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Restaurant <span className="text-red-600">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating diverse dining experiences across multiple restaurant formats and cuisines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{specialty.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
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
              Comprehensive <span className="text-red-600">Restaurant Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of restaurant management covered by our expert team to ensure your culinary success.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
              Our <span className="text-red-600">Service Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete restaurant management covering every aspect of your culinary business operations.
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
                      <CheckCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
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
              Our <span className="text-red-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that transforms restaurant concepts into thriving culinary destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transform -translate-y-1/2"></div>
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
              Restaurant <span className="text-red-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped restaurant owners create exceptional dining experiences and profitable
              businesses.
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
                  <div className="text-red-600 font-medium">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <UtensilsCrossed className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl font-bold mb-6">Ready to Create Culinary Excellence?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's transform your restaurant vision into a dining destination that delights customers and drives
            profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Launch Your Restaurant
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all duration-300 text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
