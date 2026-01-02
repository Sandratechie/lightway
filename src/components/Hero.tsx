import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
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
        {/* Overlay Gradients - Darker for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0916]/95 via-[#0d0916]/75 to-[#0d0916]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0916] via-transparent to-[#0d0916]/50" />
        {/* Color accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-magenta/10" />
        {/* Animated Grain Effect */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Video Navigation Arrows */}
      <button
        onClick={handlePrevVideo}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={handleNextVideo}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Video Indicators */}
      <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentVideo
                ? "w-8 bg-secondary"
                : "w-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
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
          <div className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 animate-fade-up border border-secondary/30">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs sm:text-sm text-primary-foreground/90 font-medium tracking-wide">
              Excellence • Integrity • Teamwork • Empowerment
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] mb-6 animate-fade-up text-shadow" 
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-primary-foreground">Your Dream Home</span>
            <br />
            <span className="text-gradient-brand">Starts Here</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 animate-fade-up leading-relaxed" 
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
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="group border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Watch Video
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-10 border-t border-primary-foreground/10 animate-fade-up" 
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center sm:text-left group">
              <CountUpNumber 
                end={5} 
                suffix="+" 
                className="text-3xl sm:text-4xl font-display font-bold text-secondary group-hover:scale-105 transition-transform inline-block" 
              />
              <div className="text-xs sm:text-sm text-primary-foreground/60 mt-1 font-medium">Years Experience</div>
            </div>
            <div className="text-center sm:text-left group">
              <CountUpNumber 
                end={500} 
                suffix="+" 
                className="text-3xl sm:text-4xl font-display font-bold text-secondary group-hover:scale-105 transition-transform inline-block" 
              />
              <div className="text-xs sm:text-sm text-primary-foreground/60 mt-1 font-medium">Happy Clients</div>
            </div>
            <div className="text-center sm:text-left group">
              <CountUpNumber 
                end={10} 
                suffix="+" 
                className="text-3xl sm:text-4xl font-display font-bold text-secondary group-hover:scale-105 transition-transform inline-block" 
              />
              <div className="text-xs sm:text-sm text-primary-foreground/60 mt-1 font-medium">Estate Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float z-10">
        <span className="text-xs text-primary-foreground/50 uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Hero;
