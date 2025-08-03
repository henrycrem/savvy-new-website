"use client"


import { Coffee, Clock, Users, Palette, ShoppingCart, TrendingUp, CheckCircle, Star, Award, Heart } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Premium Coffee & Beverages",
    description:
      "High-quality coffee, teas, and specialty drinks served in a welcoming atmosphere for customers to enjoy.",
  },
  {
    icon: Palette,
    title: "Cozy Interior Design",
    description: "Comfortable seating areas and inviting ambiance perfect for relaxation, work, or socializing.",
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Friendly service and a warm environment where customers feel at home while enjoying their beverages.",
  },
  {
    icon: ShoppingCart,
    title: "Fresh Pastries & Snacks",
    description: "Delicious pastries, sandwiches, and light snacks to complement your coffee experience.",
  },
  {
    icon: TrendingUp,
    title: "Community Hub",
    description: "A gathering place for the community to meet, work, and connect over great coffee.",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "Extended operating hours to serve customers throughout the day.",
  },
]

const services = [
  {
    title: "Coffee & Beverages",
    description: "We serve a wide variety of premium coffee drinks, teas, and specialty beverages crafted with care.",
    items: [
      "Freshly brewed coffee varieties",
      "Espresso-based drinks (lattes, cappuccinos)",
      "Hot and iced tea selections",
      "Specialty seasonal beverages",
    ],
  },
  {
    title: "Food & Snacks",
    description: "Complement your drinks with our selection of fresh pastries, sandwiches, and light meals.",
    items: [
      "Fresh pastries and baked goods",
      "Sandwiches and wraps",
      "Light breakfast options",
      "Healthy snack alternatives",
    ],
  },
  {
    title: "Atmosphere & Seating",
    description: "Comfortable spaces designed for various needs - from quick coffee breaks to extended stays.",
    items: [
      "Comfortable seating arrangements",
      "Free Wi-Fi for customers",
      "Quiet areas for work/study",
      "Social spaces for gatherings",
    ],
  },
  {
    title: "Customer Service",
    description: "Exceptional service ensuring every customer has a memorable coffee shop experience.",
    items: [
      "Friendly and knowledgeable staff",
      "Quick and efficient service",
      "Custom drink preparations",
      "Regular customer recognition",
    ],
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Regular Customer",
    quote:
      "This is my go-to coffee shop! The atmosphere is perfect for working, and the coffee is always fresh and delicious.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    business: "Local Resident",
    quote: "Great place to meet friends and relax. The staff is always friendly and the pastries are amazing!",
    rating: 5,
  },
  {
    name: "Emma Williams",
    business: "Student",
    quote: "Perfect study spot with excellent Wi-Fi and comfortable seating. The coffee keeps me energized for hours.",
    rating: 5,
  },
]

const process = [
  {
    step: "01",
    title: "Welcome & Order",
    description:
      "Our friendly staff welcomes you and helps you choose from our extensive menu of beverages and snacks.",
  },
  {
    step: "02",
    title: "Fresh Preparation",
    description: "Each drink is carefully prepared using premium ingredients and expert techniques.",
  },
  {
    step: "03",
    title: "Comfortable Experience",
    description: "Enjoy your order in our comfortable seating areas designed for relaxation and productivity.",
  },
  {
    step: "04",
    title: "Community Connection",
    description: "Become part of our coffee community where regulars are family and new faces become friends.",
  },
]

export default function CoffeeShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 mt-32">


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
                  <p className="text-xl text-white/90">Your Community Coffee Destination</p>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Welcome to our cozy coffee shop where premium beverages meet community spirit. Enjoy freshly brewed
                coffee, delicious pastries, and a warm atmosphere perfect for work, relaxation, or catching up with
                friends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Visit Our Shop
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-amber-600 transition-all duration-300">
                  View Menu
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Cozy+Coffee+Shop+Interior"
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
              Why Choose Our <span className="text-amber-600">Coffee Shop</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just coffee - we're your neighborhood gathering place offering quality beverages, delicious
              food, and a welcoming atmosphere.
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
              What We <span className="text-amber-600">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From premium coffee to comfortable spaces, everything you need for the perfect coffee shop experience.
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
              Your Coffee Shop <span className="text-amber-600">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the moment you walk in to the last sip, we ensure every visit is memorable.
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
              What Our <span className="text-amber-600">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our valued customers who make our coffee shop a vibrant community hub.
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
          <h2 className="text-4xl font-bold mb-6">Ready for Great Coffee?</h2>
          <p className="text-xl text-white/90 mb-8">
            Visit us today and discover why we're the community's favorite coffee destination. Great coffee, delicious
            food, and warm hospitality await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Visit Our Coffee Shop
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-amber-600 transition-all duration-300 text-lg">
              View Our Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
