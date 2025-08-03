"use client"

import { Wine, Music, Users, ShieldCheck, CheckCircle, Star, Award, Palette, Crown, Volume2 } from "lucide-react"

const features = [
  {
    icon: Wine,
    title: "Premium Beverages",
    description: "Wide selection of alcoholic and non-alcoholic drinks including wines, beers, cocktails, and spirits.",
  },
  {
    icon: Music,
    title: "Live Entertainment",
    description: "Regular live music performances, DJ sets, and entertainment events to enhance your experience.",
  },
  {
    icon: Users,
    title: "Social Atmosphere",
    description: "Perfect place to unwind, socialize with friends, and meet new people in a relaxed environment.",
  },
  {
    icon: Palette,
    title: "Stylish Ambiance",
    description: "Beautifully designed interior with comfortable seating and mood lighting for the perfect atmosphere.",
  },
  {
    icon: Volume2,
    title: "Quality Sound System",
    description: "Professional audio equipment ensuring crystal clear sound for music and entertainment.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description: "Secure and well-managed venue with professional staff ensuring customer safety and comfort.",
  },
]

const services = [
  {
    title: "Beverage Selection",
    description: "Extensive drink menu featuring premium alcoholic beverages and refreshing non-alcoholic options.",
    items: [
      "Premium wines and champagnes",
      "Craft beers and imported brands",
      "Signature cocktails and mixed drinks",
      "Soft drinks and fresh juices",
    ],
  },
  {
    title: "Entertainment & Events",
    description: "Regular entertainment programming to keep the atmosphere lively and engaging.",
    items: ["Live music performances", "DJ nights and dance music", "Karaoke sessions", "Special event hosting"],
  },
  {
    title: "Lounge Experience",
    description: "Comfortable and stylish environment perfect for relaxation and socializing.",
    items: [
      "Comfortable seating areas",
      "VIP sections available",
      "Mood lighting and ambiance",
      "Air-conditioned comfort",
    ],
  },
  {
    title: "Customer Service",
    description: "Professional staff dedicated to providing excellent service and ensuring customer satisfaction.",
    items: [
      "Experienced bartenders",
      "Friendly and attentive service",
      "Custom drink preparations",
      "Event planning assistance",
    ],
  },
]

const testimonials = [
  {
    name: "Alexandra Thompson",
    business: "Regular Customer",
    quote:
      "Great place to unwind after work! The atmosphere is perfect, drinks are excellent, and the live music makes it even better.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    business: "Event Organizer",
    quote:
      "Hosted my birthday party here and it was amazing! The staff was professional and the entertainment was top-notch.",
    rating: 5,
  },
  {
    name: "Isabella Rodriguez",
    business: "Local Resident",
    quote:
      "My favorite spot for weekend relaxation. The cocktails are creative and the environment is always welcoming and fun.",
    rating: 5,
  },
]

const process = [
  {
    step: "01",
    title: "Welcome & Seating",
    description: "Our friendly staff welcomes you and helps you find the perfect spot to enjoy your evening.",
  },
  {
    step: "02",
    title: "Drink Selection",
    description: "Browse our extensive menu and let our skilled bartenders craft the perfect drink for you.",
  },
  {
    step: "03",
    title: "Relax & Enjoy",
    description: "Settle in, enjoy your beverages, and soak in the atmosphere with friends or make new ones.",
  },
  {
    step: "04",
    title: "Entertainment",
    description: "Experience live music, DJ sets, or other entertainment while enjoying great drinks and company.",
  },
]

const barTypes = [
  {
    icon: Wine,
    title: "Premium Bar",
    description: "High-quality alcoholic beverages and expertly crafted cocktails.",
  },
  {
    icon: Crown,
    title: "VIP Lounge",
    description: "Exclusive seating areas for a more private and upscale experience.",
  },
  {
    icon: Music,
    title: "Entertainment Hub",
    description: "Live music, DJ performances, and special entertainment events.",
  },
  {
    icon: Users,
    title: "Social Space",
    description: "Perfect environment for socializing, networking, and meeting people.",
  },
]

export default function BarPage() {
  return (
    <div className="min-h-screen bg-gray-50 mt-32">
   

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
                  <p className="text-xl text-white/90">Relax, Drink & Enjoy</p>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Unwind and socialize at our stylish bar and lounge. Enjoy premium beverages, live entertainment, and a
                welcoming atmosphere perfect for relaxation and good times with friends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Visit Our Bar
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  View Events
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Stylish+Bar+Interior"
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

      {/* Bar Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We <span className="text-purple-600">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From premium drinks to live entertainment, we provide everything you need for a perfect night out.
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
              Why Choose Our <span className="text-purple-600">Bar & Lounge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect combination of great drinks, entertainment, and atmosphere for unforgettable
              nights.
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
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a great night out, from premium drinks to live entertainment.
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
              Your <span className="text-purple-600">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From arrival to last call, we ensure every moment of your visit is enjoyable and memorable.
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
              Customer <span className="text-purple-600">Reviews</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about their experiences at our bar and lounge.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Unwind?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join us for great drinks, live entertainment, and an unforgettable night out. Your perfect evening of
            relaxation and fun awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Visit Tonight
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg">
              Check Events
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
