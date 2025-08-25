import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const HeroSection = () => {
  const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio4];
  
  const stats = [
    { label: "5+ Years Experience", icon: CheckCircle },
    { label: "100+ Clients Served", icon: CheckCircle },
    { label: "Results Guaranteed", icon: CheckCircle },
  ];

  return (
    <section id="home" className="min-h-screen pt-20 pb-10 hero-pattern relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your Business With{" "}
                <span className="gradient-text">Award-Winning</span>{" "}
                Digital Solutions
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Cuttack's leading performance marketing agency delivering guaranteed results 
                through data-driven strategies and stunning web experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow-effect group">
                Get Free SEO Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="glass-card">
                <Phone className="mr-2 w-5 h-5" />
                Call +91-9583-533-125
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Portfolio Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className={`glass-card overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 ${
                    index === 0 ? "col-span-2 h-48" : "h-32"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 glass-card p-4 text-center">
              <div className="text-2xl font-bold gradient-text">4-5 Days</div>
              <div className="text-sm text-muted-foreground">Website Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;