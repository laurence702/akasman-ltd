import { Truck, Hospital, GraduationCap, BarChart3, Shield, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import consultationImage from "@/assets/consultation-service.jpg";
import medicalSuppliesImage from "@/assets/medical-supplies.jpg";

const Home = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Akasonic, I'd like to inquire about your business...");
    window.open(`https://wa.me/2348033267152?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: Truck,
      title: "Import & Export Services",
      description: "Comprehensive import and export solutions with full logistics support and customs clearance."
    },
    {
      icon: Hospital,
      title: "Hospital Supplies",
      description: "Medical equipment, pharmaceuticals, and hospital supplies sourced from certified global suppliers."
    },
    {
      icon: GraduationCap,
      title: "School Supplies",
      description: "Educational materials, furniture, and equipment for schools and educational institutions."
    },
    {
      icon: BarChart3,
      title: "Business Consultation",
      description: "Strategic business analysis, market research, and consultation services for growth optimization."
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "AI Fraud Detection",
      description: "Advanced AI technology to detect and prevent fraudulent activities in all transactions."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive network of verified suppliers and partners across multiple continents."
    },
    {
      icon: CheckCircle,
      title: "Transparency",
      description: "Complete transparency in all processes with real-time tracking and detailed reporting."
    }
  ];

  return (
    <div className="min-h-screen">
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="service" />
      <Header />
      <Hero />

      {/* About Snippet */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Global Trade Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Akasonic International specializes in importation, general merchandise supply, and business consultation. 
              With our advanced tracking systems and AI-powered fraud detection, we ensure every transaction is secure, 
              transparent, and reliable.
            </p>
            <Button 
              onClick={handleWhatsApp}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your importation and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Akasonic International?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our innovative approach to global trade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={consultationImage}
                alt="Professional business consultation"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div>
              <img
                src={medicalSuppliesImage}
                alt="Medical supplies and equipment"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied clients who trust Akasonic International for their global trade needs.
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            variant="secondary"
            className="shadow-glow hover:shadow-elegant transition-all duration-300"
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;