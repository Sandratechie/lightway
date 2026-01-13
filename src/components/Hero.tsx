import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUpNumber from "@/components/CountUpNumber";

const videos = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
  "/videos/hero-4.mp4",
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextVideo();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentVideo]);

  const handleNextVideo = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevVideo = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToVideo = (index: number) => {
    if (index !== currentVideo) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideo(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <video
            key={video}
            ref={(el) => (videoRefs.current[index] = el)}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Clean dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate/95 via-slate/80 to-slate/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate/90 via-transparent to-slate/40" />
        {/* Subtle brand accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
      </div>

      {/* Video Navigation Arrows */}
      <button
        onClick={handlePrevVideo}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={handleNextVideo}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Video Indicators */}
      <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentVideo
                ? "w-10 bg-secondary"
                : "w-3 bg-white/40 hover:bg-white/60 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div 
        className={`container mx-auto container-padding relative z-10 pt-20 transition-all duration-500 ${
          isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
              Excellence • Integrity • Teamwork • Empowerment
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6 animate-fade-up" 
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-white">Your Dream Home</span>
            <br />
            <span className="text-secondary">Starts Here</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl mb-8 animate-fade-up leading-relaxed" 
            style={{ animationDelay: "0.2s" }}
          >
            Light Way Homes Ltd offers premium real estate advisory and developmental services, 
            transforming dreams into addresses across Nigeria and Africa.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up" 
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="lg" className="group">
              View Our Estates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a 
              href="tel:+2348038034077"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 font-semibold group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Call Us Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div 
            className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-10 border-t border-white/20 animate-fade-up" 
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center sm:text-left group">
              <CountUpNumber 
                end={5} 
                suffix="+" 
                className="text-3xl sm:text-4xl font-display font-bold text-secondary group-hover:scale-110 transition-transform inline-block" 
              />
              <div className="text-xs sm:text-sm text-white/60 mt-1 font-medium">Years Experience</div>
            </div>
            <div className="text-center sm:text-left group">
              <CountUpNumber 
                end={500} 
                suffix="+" 
                className="text-3xl sm:text-4xl font-display font-bold text-secondary group-hover:scale-110 transition-transform inline-block" 
              />
              <div className="text-xs sm:text-sm text-white/60 mt-1 font-medium">Happy Clients</div>
            </div>
            <div className="text-center sm:text-left group">
              <CountUpNumber 
                end={10} 
                suffix="+" 
                className="text-3xl sm:text-4xl font-display font-bold text-secondary group-hover:scale-110 transition-transform inline-block" 
              />
              <div className="text-xs sm:text-sm text-white/60 mt-1 font-medium">Estate Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-xs text-white/50 uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
