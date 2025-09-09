import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service';
}

const StructuredData = ({ type }: StructuredDataProps) => {
  useEffect(() => {
    let structuredData = {};

    switch (type) {
      case 'organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Akasman International",
          "url": "https://akasman.com",
          "logo": "https://akasman.com/logo.png",
          "description": "Reliable importation services, general merchandise supply, and business consultation with advanced tracking and AI fraud detection.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Fara Park Sangotedo",
            "addressLocality": "Lagos",
            "addressCountry": "Nigeria"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+2348033267152",
            "contactType": "Customer Service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://wa.me/2348033267152"
          ],
          "areaServed": "Global",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Import and Business Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Import Services",
                  "description": "Comprehensive import and export solutions with full logistics support."
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hospital Supplies",
                  "description": "Medical equipment and supplies from certified global suppliers."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Business Consultation",
                  "description": "Strategic business analysis and consultation services."
                }
              }
            ]
          }
        };
        break;

      case 'website':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Akasman International",
          "url": "https://akasman.com",
          "description": "Your trusted partner for importation, general merchandise supply, and business consultation with advanced tracking and AI fraud detection.",
          "publisher": {
            "@type": "Organization",
            "name": "Akasman International"
          }
        };
        break;

      case 'service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Import and Export Services",
          "description": "Comprehensive importation services, general merchandise supply, and business consultation with AI fraud detection.",
          "provider": {
            "@type": "Organization",
            "name": "Akasman International",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Fara Park Sangotedo",
              "addressLocality": "Lagos",
              "addressCountry": "Nigeria"
            }
          },
          "areaServed": "Global",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Business Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Import Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Hospital Supplies"
                }
              }
            ]
          }
        };
        break;
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type]);

  return null;
};

export default StructuredData;