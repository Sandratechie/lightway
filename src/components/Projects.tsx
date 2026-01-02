import { MapPin, ArrowUpRight, Bed, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const projects = [
  {
    id: 1,
    title: "Roman Heights",
    location: "Arepo, Ogun State",
    image: property1,
    status: "Now Selling",
    price: "From ₦25M",
    type: "4 Bedroom + BQ",
    size: "400 SQM",
  },
  {
    id: 2,
    title: "The Naples",
    location: "Arepo, Ogun State",
    image: property2,
    status: "Pre-Order",
    price: "From ₦30M",
    type: "Land (300-500 SQM)",
    size: "300-500 SQM",
  },
  {
    id: 3,
    title: "Novara Court",
    location: "Arepo, Ogun State",
    image: property3,
    status: "Coming Soon",
    price: "From ₦150M",
    type: "4 Bedroom Maisonette",
    size: "500 SQM",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-secondary font-semibold uppercase tracking-widest text-xs md:text-sm mb-3">Our Portfolio</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Premium <span className="text-gradient-brand">Estates</span> For You
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Discover our collection of carefully developed estates across Nigeria, 
            designed for comfort, luxury, and lasting value.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border h-full">
                {/* Image */}
                <div className="relative h-48 sm:h-52 md:h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.status === "Now Selling" 
                        ? "bg-secondary/90 text-secondary-foreground" 
                        : project.status === "Coming Soon"
                        ? "bg-foreground/70 text-background"
                        : "bg-primary/90 text-primary-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Price overlay */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-lg">{project.price}</span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-3 right-3 w-9 h-9 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                    {project.title}
                  </h3>
                  
                  {/* Property details */}
                  <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4" />
                      <span>{project.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Ruler className="w-4 h-4" />
                      <span>{project.size}</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn">
                    View Details
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedSection className="text-center mt-10 md:mt-12" delay={450}>
          <Button variant="hero" size="lg" className="shadow-lg shadow-secondary/20">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
