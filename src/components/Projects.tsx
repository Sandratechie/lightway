import { MapPin, ArrowUpRight, Home, Ruler, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { projects } from "@/data/properties";

// Map projects to display format with price ranges (Naples and Novara only)
const projectDisplayData = [
  {
    ...projects[0], // Naples Estate
    price: "From ₦7.5M",
    type: "Land & Townhouse",
    size: "300-500 SQM",
  },
  {
    ...projects[1], // Novara Courts
    price: "From ₦5M",
    type: "Residential Land",
    size: "300-600 SQM",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-[200px] pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary font-semibold uppercase tracking-widest text-xs md:text-sm mb-4 rounded-full border border-secondary/20 animate-border-glow">
            <Sparkles className="w-4 h-4" />
            Our Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Premium <span className="text-gradient-vibrant">Estates</span> For You
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Discover our collection of carefully developed estates across Nigeria, 
            designed for comfort, luxury, and lasting value.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {projectDisplayData.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              delay={index * 150}
            >
              <Link to={`/properties?project=${project.slug}`} className="block h-full">
                <div className="group bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border h-full relative">
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 md:h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover img-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent group-hover:from-primary/80 transition-all duration-500" />
                    
                    {/* Shimmer overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm animate-border-glow ${
                        project.status === "Now Selling" 
                          ? "bg-secondary/90 text-secondary-foreground shadow-glow" 
                          : project.status === "Coming Soon"
                          ? "bg-foreground/70 text-background"
                          : "bg-primary/90 text-primary-foreground"
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Price overlay */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-lg text-shadow-glow">{project.price}</span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-3 right-3 w-10 h-10 glass-vibrant rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm mb-2">
                      <MapPin className="w-3.5 h-3.5 icon-hover" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-gradient-brand transition-colors text-foreground underline-vibrant">
                      {project.title}
                    </h3>
                    
                    {/* Property details */}
                    <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                      <div className="flex items-center gap-1.5 group/item">
                        <Home className="w-4 h-4 group-hover/item:text-secondary transition-colors" />
                        <span>{project.type}</span>
                      </div>
                      <div className="flex items-center gap-1.5 group/item">
                        <Ruler className="w-4 h-4 group-hover/item:text-secondary transition-colors" />
                        <span>{project.size}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent group/btn btn-glow transition-all duration-300">
                      View Details
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedSection className="text-center mt-10 md:mt-12" delay={450}>
          <Link to="/properties">
            <Button variant="hero" size="lg" className="shadow-glow btn-glow animate-shine group">
              View All Properties
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
