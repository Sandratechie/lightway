import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUpNumber from "@/components/CountUpNumber";
import heroImage from "@/assets/hero-estate.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury home development by Light Way Homes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto container-padding relative z-10 pt-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up border border-primary-foreground/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs sm:text-sm text-primary-foreground/90 font-medium">Excellence • Integrity • Teamwork • Empowerment</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 md:mb-6 animate-fade-up text-primary-foreground" style={{ animationDelay: "0.1s" }}>
            Your Dream Home
            <br />
            <span className="text-secondary">Starts Here</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-6 md:mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Light Way Homes Ltd offers premium real estate advisory and developmental services, 
            transforming dreams into addresses across Nigeria and Africa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              View Our Estates
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Play className="w-4 h-4" />
              Watch Video
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 md:mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center sm:text-left">
              <CountUpNumber 
                end={5} 
                suffix="+" 
                className="text-2xl sm:text-3xl font-bold text-secondary" 
              />
              <div className="text-xs sm:text-sm text-primary-foreground/70 mt-1">Years Experience</div>
            </div>
            <div className="text-center sm:text-left">
              <CountUpNumber 
                end={500} 
                suffix="+" 
                className="text-2xl sm:text-3xl font-bold text-secondary" 
              />
              <div className="text-xs sm:text-sm text-primary-foreground/70 mt-1">Happy Clients</div>
            </div>
            <div className="text-center sm:text-left">
              <CountUpNumber 
                end={10} 
                suffix="+" 
                className="text-2xl sm:text-3xl font-bold text-secondary" 
              />
              <div className="text-xs sm:text-sm text-primary-foreground/70 mt-1">Estate Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-primary-foreground/60 uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
