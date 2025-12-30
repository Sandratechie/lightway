import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/98 backdrop-blur-md shadow-card border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="Light Way Homes" 
              className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+2348038034077" 
              className={`flex items-center gap-2 text-sm transition-colors ${
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+234 803 803 4077</span>
            </a>
            <Button variant="hero" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in shadow-elevated">
          <nav className="container mx-auto container-padding py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-secondary transition-colors py-3 font-medium border-b border-border/50 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <a 
                href="tel:+2348038034077" 
                className="flex items-center gap-2 text-muted-foreground py-2"
              >
                <Phone className="w-4 h-4" />
                <span>+234 803 803 4077</span>
              </a>
              <Button variant="hero" size="lg" className="w-full mt-4">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
