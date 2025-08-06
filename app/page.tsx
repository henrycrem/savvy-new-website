import FAQ from "@/components/landing-page/faq";
import HeroSection from "@/components/landing-page/hero";
import ProcessSection from "@/components/landing-page/how-it-work";
import ProjectsPage from "@/components/landing-page/project-section";
import AboutServicesSection from "@/components/landing-page/services";
import TeamSection from "@/components/landing-page/team";
import TestimonialsSection from "@/components/landing-page/testimonials-section";
import WhyChooseUsSection from "@/components/landing-page/why-us";


export default function Home() {
  return (
    <div className="font-sans mt-32 ">

      <HeroSection/>
      <AboutServicesSection/>
      <ProcessSection/>
      <WhyChooseUsSection/>
      <ProjectsPage/>
      <TeamSection/>
      <TestimonialsSection/>
      <FAQ/>

   
    </div>
  );
}
