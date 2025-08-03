"use client"


import {
  UtensilsCrossed,
  ChefHat,
  Users,
  ShieldCheck,
  Clock,
  CheckCircle,
  Star,
  Award,
  Heart,
  Utensils,
  Truck,
} from "lucide-react"

const features = [
  {
    icon: ChefHat,
    title: "Continental & Local Cuisine",
    description: "Diverse menu featuring both international continental dishes and authentic local Liberian cuisine.",
  },
  {
    icon: Utensils,
    title: "Fresh Quality Ingredients",
    description: "All meals prepared with fresh, high-quality ingredients for the best taste and nutrition.",
  },
  {
    icon: Users,
    title: "Dine-In Experience",
    description: "Comfortable restaurant atmosphere perfect for family meals, dates, and business meetings.",
  },
  {
    icon: Truck,
    title: "Food Delivery Service",
    description: "Convenient delivery service bringing our delicious meals directly to your location.",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open throughout the day to serve breakfast, lunch, dinner, and everything in between.",
  },
  {
    icon: ShieldCheck,
    title: "Food Safety Standards",
    description: "Strict hygiene and food safety protocols ensuring every meal is safe and delicious.",
  },
]

const services = [
  {
    title: "Continental Cuisine",
    description: "International dishes prepared with authentic flavors and modern cooking techniques.",
    items: [
      "European-style pasta and risotto",
      "American classics and steaks",
      "Asian fusion dishes",
      "Mediterranean specialties",
    ],
  },
  {
    title: "Local Liberian Dishes",
    description: "Traditional Liberian cuisine prepared with authentic recipes and local ingredients.",
    items: [
      "Jollof rice and fried rice",
      "Palm butter and cassava leaf",
      "Grilled fish and chicken",
      "Traditional soups and stews",
    ],
  },
  {
    title: "Dine-In Restaurant",
    description: "Comfortable restaurant setting for enjoying meals with family, friends, or colleagues.",
    items: [
      "Air-conditioned dining area",
      "Family-friendly atmosphere",
      "Private dining options",
      "Professional table service",
    ],
  },
  {
    title: "Delivery Service",
    description: "Fast and reliable food delivery bringing restaurant-quality meals to your doorstep.",
    items: [
      "Hot food delivery guarantee",
      "Wide delivery coverage area",
      "Online and phone ordering",
      "Contactless delivery options",
    ],
  },
]

const testimonials = [
  {
    name: "David Rodriguez",
    business: "Regular Customer",
    quote:
      "The variety of food here is amazing! I love that I can get both continental dishes and authentic Liberian food. The delivery is always fast too.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    business: "Local Resident",
    quote:
      "Best restaurant in the area! The jollof rice is incredible and the continental dishes are restaurant-quality. Great for family dinners.",
    rating: 5,
  },
  {
    name: "James Thompson",
    business: "Business Professional",
    quote:
      "Perfect for business lunches and client meetings. Professional atmosphere, excellent food, and reliable service every time.",
    rating: 5,
  },
]

const process = [
  {
    step: "01",
    title: "Browse Our Menu",
    description:
      "Explore our diverse menu featuring continental and local dishes, with options for every taste and preference.",
  },
  {
    step: "02",
    title: "Place Your Order",
    description: "Order in-person for dine-in, or call/order online for convenient delivery to your location.",
  },
  {
    step: "03",
    title: "Fresh Preparation",
    description: "Our skilled chefs prepare each dish fresh using quality ingredients and authentic recipes.",
  },
  {
    step: "04",
    title: "Enjoy Your Meal",
    description: "Savor your delicious meal in our comfortable restaurant or in the comfort of your own space.",
  },
]

const specialties = [
  {
    icon: Utensils,
    title: "Continental Dishes",
    description: "International cuisine with authentic flavors and modern presentation.",
  },
  {
    icon: Heart,
    title: "Local Favorites",
    description: "Traditional Liberian dishes prepared with time-honored recipes.",
  },
  {
    icon: Users,
    title: "Family Dining",
    description: "Comfortable atmosphere perfect for family meals and gatherings.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery service throughout the area.",
  },
]

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-gray-50 mt-32">
      

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
                  <p className="text-xl text-white/90">Continental & Local Cuisine</p>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience the best of both worlds with our diverse menu featuring delicious continental dishes and
                authentic Liberian cuisine. Dine with us or enjoy delivery to your location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  View Menu
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all duration-300">
                  Order Delivery
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Restaurant+Dining+Area"
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
              Our <span className="text-red-600">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From continental favorites to local Liberian dishes, we offer something delicious for everyone.
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
              Why Choose Our <span className="text-red-600">Restaurant</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality food, diverse menu options, and convenient service make us your go-to dining destination.
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
              Our <span className="text-red-600">Menu & Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse food offerings and convenient dining options.
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
              How We <span className="text-red-600">Serve You</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From menu selection to enjoying your meal, we make every step of your dining experience exceptional.
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
              Customer <span className="text-red-600">Reviews</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our satisfied customers say about our food and service.
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
          <h2 className="text-4xl font-bold mb-6">Ready for Delicious Food?</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience our diverse menu of continental and local dishes. Dine with us or order delivery today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Make Reservation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all duration-300 text-lg">
              Order Delivery
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
