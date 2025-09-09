import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl font-bold text-primary-foreground">404</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
