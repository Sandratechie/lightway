import { CheckCircle, ArrowRight, Target, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Premium estate developments with modern architecture",
  "Flexible payment plans for every budget",
  "100% government-approved documentation",
  "Strategic locations with high ROI potential",
  "Comprehensive real estate advisory services",
  "Dedicated customer support team",
];

const coreValues = [
  {
    icon: Target,
    title: "Excellence",
    description: "Outperforming expectations in all that we do and going above and beyond."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Ethics and responsibility in how we align our values and actions."
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Exceptional people working together throughout our family of companies."
  },
  {
    icon: Zap,
    title: "Empowerment",
    description: "Making individual choices that advance our purpose, vision, and values."
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              Building <span className="text-gradient-brand">Dreams</span> Into Reality
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Light Way Homes Ltd is a leading real estate advisory and developmental company 
              dedicated to transforming the Nigerian real estate landscape. We create premium 
              estates that combine luxury, comfort, and investment value.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Visual - Core Values */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {coreValues.map((value, index) => (
                <div 
                  key={value.title}
                  className={`bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300 ${
                    index % 2 === 1 ? 'mt-8' : ''
                  }`}
                  style={{ animation: `float 6s ease-in-out infinite ${index * 0.5}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-brand opacity-10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">500+</div>
            <div className="text-muted-foreground">Happy Homeowners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">5+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">10+</div>
            <div className="text-muted-foreground">Premium Estates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">99%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
