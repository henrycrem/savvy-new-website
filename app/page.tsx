import FAQ from "@/components/landing-page/faq";
import HeroSection from "@/components/landing-page/hero";
import ProcessSection from "@/components/landing-page/how-it-work";
// import Navigation from "@/components/landing-page/navigation";
import AboutServicesSection from "@/components/landing-page/services";
import TeamSection from "@/components/landing-page/team";
import TestimonialsSection from "@/components/landing-page/testimonials-section";
import WhyChooseUsSection from "@/components/landing-page/why-us";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans ">
      {/* <Navigation/> */}
      <HeroSection/>
      <AboutServicesSection/>
      <ProcessSection/>
      <WhyChooseUsSection/>
      <TeamSection/>
      <TestimonialsSection/>
      <FAQ/>

   
    </div>
  );
}
