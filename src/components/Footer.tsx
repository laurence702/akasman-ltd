import { MapPin, Phone, Mail } from "lucide-react";
import akasman_logo from "@/assets/akasman-logo.png";

const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Akasman, I'd like to inquire about your business...");
    window.open(`https://wa.me/2348033267152?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={akasman_logo}
                alt="Akasman International Logo"
                className="h-10 w-auto"
              />
              <div>
                <span className="text-xl font-bold text-primary">Akasman</span>
                <span className="text-sm text-muted-foreground block leading-tight">Int'l</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Your trusted partner in importation, general merchandise supply, and business consultation. 
              We deliver reliability, transparency, and innovative tracking solutions with AI fraud detection.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Fara Park Sangotedo, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <button 
                  onClick={handleWhatsApp}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +234 803 326 7152
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Import & Export</li>
              <li>Hospital Supplies</li>
              <li>School Supplies</li>
              <li>Business Consultation</li>
              <li>Market Analysis</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Akasman International. All rights reserved.
            </p>
            <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
              Built for excellence in global trade
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;