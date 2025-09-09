import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Akasman, I'd like to inquire about your business...");
    window.open(`https://wa.me/2348033267152?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+234 803 326 7152",
      description: "Available 24/7 for urgent matters",
      action: handleWhatsApp
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@akasman.com",
      description: "We'll respond within 24 hours",
      action: () => window.location.href = 'mailto:info@akasman.com'
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Fara Park Sangotedo, Lagos",
      description: "Nigeria",
      action: () => {}
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8AM - 6PM",
      description: "Sat: 9AM - 2PM",
      action: () => {}
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Ready to start your journey with Akasman International? 
              We're here to help with all your import and business consultation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm ${
                  info.action !== (() => {}) ? 'cursor-pointer hover:scale-105' : ''
                }`}
                onClick={info.action}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and WhatsApp CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="What is your inquiry about?"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <div className="flex flex-col justify-center">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Prefer Instant Communication?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Get immediate responses to your questions via WhatsApp. Our team is ready 
                  to discuss your import needs, provide quotes, or answer any business consultation queries.
                </p>
              </div>

              <Card className="shadow-elegant border-0 bg-accent/10 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Chat with us on WhatsApp
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Click the button below to start a conversation with our team. 
                    We're available to help you with immediate support and quick responses.
                  </p>
                  <Button 
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-elegant transition-all duration-300"
                  >
                    Start WhatsApp Chat
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Available 24/7 for urgent matters
                  </p>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-background/50 backdrop-blur-sm rounded-lg border">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Direct: +234 803 326 7152</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-background/50 backdrop-blur-sm rounded-lg border">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Email: info@akasman.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;