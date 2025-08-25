import { MessageSquare, Phone, Globe, BarChart3, Search, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Bulk WhatsApp & SMS",
      description: "Reach thousands instantly with personalized messaging campaigns",
      features: ["98% delivery rate", "Real-time analytics", "Template-based campaigns"],
      image: "/api/placeholder/300/200"
    },
    {
      icon: Phone,
      title: "Bulk Voice Call (IVR)",
      description: "Automated voice campaigns for maximum reach",
      features: ["Multi-language support", "Custom IVR flows", "Real-time reporting"],
      image: "/api/placeholder/300/200"
    },
    {
      icon: Globe,
      title: "Website Development", 
      description: "Stunning websites that convert visitors into customers",
      features: ["Responsive design", "SEO optimized", "Fast loading"],
      image: "/api/placeholder/300/200"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven strategies for exponential growth",
      features: ["Social media marketing", "Content strategy", "Performance tracking"],
      image: "/api/placeholder/300/200"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search results and increase organic traffic",
      features: ["Keyword research", "On-page optimization", "Link building"],
      image: "/api/placeholder/300/200"
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Create memorable brand experiences that resonate",
      features: ["Logo design", "Brand guidelines", "Marketing materials"],
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your digital presence with our award-winning services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card group hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;