import { CheckCircle, ArrowRight, Target, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUpNumber from "@/components/CountUpNumber";
import AnimatedSection from "@/components/AnimatedSection";

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
    description: "Outperforming expectations in all that we do."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Ethics and responsibility in all our actions."
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Exceptional people working together."
  },
  {
    icon: Zap,
    title: "Empowerment",
    description: "Making choices that advance our vision."
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <AnimatedSection animation="slide-right">
            <span className="inline-block text-secondary font-semibold uppercase tracking-widest text-xs md:text-sm mb-3">About Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Building <span className="text-gradient-brand">Dreams</span> Into Reality
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
              Light Way Homes Ltd is a leading real estate advisory and developmental company 
              dedicated to transforming the Nigerian real estate landscape. We create premium 
              estates that combine luxury, comfort, and investment value.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                  <div className="flex items-start gap-2.5 group">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground/80 text-xs md:text-sm">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <Button variant="hero" size="lg" className="shadow-lg shadow-secondary/20">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </AnimatedSection>

          {/* Visual - Core Values */}
          <AnimatedSection animation="slide-left" className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {coreValues.map((value, index) => (
                <AnimatedSection
                  key={value.title}
                  animation="scale"
                  delay={index * 100}
                >
                  <div 
                    className={`bg-card rounded-xl p-4 md:p-5 border border-border shadow-card card-hover group ${
                      index % 2 === 1 ? 'mt-6 md:mt-8' : ''
                    }`}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-1.5 md:mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-gradient-brand opacity-10 rounded-full blur-3xl" />
          </AnimatedSection>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14 md:mt-20 pt-10 md:pt-12 border-t border-border">
          {[
            { end: 500, suffix: "+", label: "Happy Homeowners" },
            { end: 5, suffix: "+", label: "Years of Excellence" },
            { end: 10, suffix: "+", label: "Premium Estates" },
            { end: 99, suffix: "%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <AnimatedSection key={stat.label} animation="fade-up" delay={index * 100}>
              <div className="text-center p-4 md:p-6 bg-card rounded-xl border border-border card-hover group">
                <CountUpNumber 
                  end={stat.end} 
                  suffix={stat.suffix} 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-brand mb-1 group-hover:scale-105 transition-transform inline-block" 
                />
                <div className="text-muted-foreground text-xs md:text-sm">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
