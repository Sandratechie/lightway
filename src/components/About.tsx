import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Premium estate developments with modern architecture",
  "Flexible payment plans for every budget",
  "100% government-approved documentation",
  "Strategic locations with high ROI potential",
  "Comprehensive real estate advisory services",
  "Dedicated customer support team",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-widest text-sm">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Building <span className="text-gradient-gold">Dreams</span> Into Reality
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
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card rounded-2xl p-6 border border-border/50 animate-float">
                  <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground text-sm">Happy Homeowners</div>
                </div>
                <div className="bg-gradient-to-br from-primary to-gold-light rounded-2xl p-6 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-display font-bold text-primary-foreground mb-2">5</div>
                    <div className="text-primary-foreground/80 text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary rounded-2xl p-6 aspect-square flex flex-col justify-center border border-border/50">
                  <div className="text-3xl font-display font-bold text-foreground mb-2">10+</div>
                  <div className="text-muted-foreground text-sm">Premium Estates Developed</div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50" style={{ animation: "float 6s ease-in-out infinite 1s" }}>
                  <div className="text-4xl font-display font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
