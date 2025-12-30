import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-estate.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury home development by Light Way Homes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-dark via-purple/90 to-purple/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-dark via-transparent to-purple/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up border border-primary-foreground/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-primary-foreground/90">Excellence • Integrity • Teamwork • Empowerment</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up text-primary-foreground" style={{ animationDelay: "0.1s" }}>
            Your Dream Home
            <br />
            <span className="text-secondary">Starts Here</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Light Way Homes Ltd offers premium real estate advisory and developmental services, 
            transforming dreams into addresses across Nigeria and Africa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              View Our Estates
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Play className="w-5 h-5" />
              Watch Video
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl font-bold text-secondary">5+</div>
              <div className="text-sm text-primary-foreground/70">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-primary-foreground/70">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">10+</div>
              <div className="text-sm text-primary-foreground/70">Estate Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-primary-foreground/70 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
