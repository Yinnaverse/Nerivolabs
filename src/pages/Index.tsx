import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhySection from "@/components/sections/WhySection";
import WorkSection from "@/components/sections/WorkSection";
import ClientsSection from "@/components/sections/ClientsSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="divider" />
        <ServicesSection />
        <WhySection />
        <WorkSection />
        <ClientsSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
