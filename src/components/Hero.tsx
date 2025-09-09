import { ArrowRight, Shield, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Akasonic, I'd like to inquire about your business...");
    window.open(`https://wa.me/2348033267152?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern logistics and cargo operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="text-accent-foreground">Akasonic</span> - Reliable Import Solutions with{" "}
            <span className="text-accent-foreground">Advanced Tracking</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Your trusted partner for importation, general merchandise supply, and business consultation. 
            We deliver transparency, reliability, and innovation with AI-powered fraud detection.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-3 bg-background/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-6 w-6 text-accent-foreground flex-shrink-0" />
              <span className="text-primary-foreground font-medium">AI Fraud Detection</span>
            </div>
            <div className="flex items-center space-x-3 bg-background/10 backdrop-blur-sm rounded-lg p-4">
              <Search className="h-6 w-6 text-accent-foreground flex-shrink-0" />
              <span className="text-primary-foreground font-medium">Advanced Tracking</span>
            </div>
            <div className="flex items-center space-x-3 bg-background/10 backdrop-blur-sm rounded-lg p-4">
              <TrendingUp className="h-6 w-6 text-accent-foreground flex-shrink-0" />
              <span className="text-primary-foreground font-medium">Business Intelligence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-elegant transition-all duration-300 group"
            >
              Get Started on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-background/20 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;