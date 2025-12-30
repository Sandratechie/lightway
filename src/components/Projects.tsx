import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  },
  {
    id: 2,
    title: "The Naples",
    location: "Arepo, Ogun State",
    image: property2,
    status: "Pre-Order",
    price: "From ₦30M",
    type: "Land (300-500 SQM)",
  },
  {
    id: 3,
    title: "Novara Court",
    location: "Arepo, Ogun State",
    image: property3,
    status: "Coming Soon",
    price: "From ₦150M",
    type: "4 Bedroom Maisonette",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-medium uppercase tracking-widest text-sm">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Premium <span className="text-gradient-brand">Estates</span> For You
          </h2>
          <p className="text-muted-foreground">
            Discover our collection of carefully developed estates across Nigeria, 
            designed for comfort, luxury, and lasting value.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Now Selling" 
                      ? "bg-secondary text-secondary-foreground" 
                      : project.status === "Coming Soon"
                      ? "bg-muted text-muted-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.type}</p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-bold text-lg">{project.price}</span>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
