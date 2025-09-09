import { Users, Target, Award, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide reliable, transparent, and innovative import solutions while delivering exceptional business consultation services that drive growth and success for our clients globally."
    },
    {
      icon: Users,
      title: "Our Vision", 
      description: "To become the leading trusted partner in international trade and business consultation, known for our integrity, advanced technology, and commitment to client success."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Transparency, reliability, innovation, and excellence in every transaction. We believe in building long-term partnerships based on trust and mutual success."
    }
  ];

  const achievements = [
    { number: "500+", label: "Successful Imports" },
    { number: "50+", label: "Global Partners" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Akasman International
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Your trusted partner in global trade, delivering excellence through innovation, 
              transparency, and advanced technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded with a vision to revolutionize international trade, Akasman International has emerged 
                as a leading provider of import services, general merchandise supply, and business consultation. 
                Our journey began with a simple yet powerful mission: to make global trade more transparent, 
                reliable, and accessible for businesses of all sizes.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Located in the vibrant business hub of Lagos, Nigeria, we have built our reputation on delivering 
                exceptional service quality and innovative solutions. Our team combines deep industry expertise 
                with cutting-edge technology, including AI-powered fraud detection systems and advanced package 
                tracking capabilities.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Today, we serve clients across multiple industries, from healthcare institutions requiring medical 
                supplies to educational facilities needing school equipment. Our comprehensive business consultation 
                services have helped numerous organizations optimize their operations and achieve sustainable growth.
              </p>
            </div>

            {/* Location */}
            <Card className="shadow-card bg-muted/30 border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground text-lg">
                      <strong>Headquarters:</strong> Fara Park Sangotedo, Lagos, Nigeria
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Strategically located in one of West Africa's major commercial centers, 
                      providing easy access to international shipping routes and business networks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the Akasman International difference. Let's build success together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const message = encodeURIComponent("Hello Akasman, I'd like to inquire about your business...");
                window.open(`https://wa.me/2348033267152?text=${message}`, '_blank');
              }}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md font-medium shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              Contact Us on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;