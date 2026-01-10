import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNav, setHideNav] = useState(false);
  const location = useLocation();

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show navbar on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle hash navigation when coming from another page
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Properties", href: "/properties", isRoute: true },
    { name: "Services", href: "/services", isRoute: true },
    { name: "Blog", href: "/blog", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Career", href: "/career", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMenuOpen(false);
    
    // If it's a hash link and we're on the home page, scroll to the section
    if (!isRoute && href.startsWith('/#') && location.pathname === '/') {
      const hash = href.replace('/', '');
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/98 backdrop-blur-md shadow-card border-b border-border' 
          : 'bg-transparent'
      } ${hideNav ? '-translate-y-full' : 'translate-y-0'} ${
        isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className={`flex items-center transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <img 
              src={logo} 
              alt="Light Way Homes" 
              className={`transition-all duration-300 hover:scale-105 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-secondary relative group ${
                    isScrolled ? 'text-foreground' : 'text-primary-foreground'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-secondary relative group ${
                    isScrolled ? 'text-foreground' : 'text-primary-foreground'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              )
            ))}
          </nav>

          {/* CTA & Phone */}
          <div 
            className={`hidden lg:flex items-center gap-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <a 
              href="tel:+2348038034077" 
              className={`flex items-center gap-2 text-sm transition-colors hover:scale-105 duration-300 ${
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+234 803 803 4077</span>
            </a>
            <Button variant="hero" size="default" className="hover:scale-105 transition-transform duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-background border-t border-border shadow-elevated overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto container-padding py-6 flex flex-col gap-1">
          {navLinks.map((link, index) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-foreground hover:text-secondary hover:translate-x-2 transition-all duration-300 py-3 font-medium border-b border-border/50 last:border-0`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-secondary hover:translate-x-2 transition-all duration-300 py-3 font-medium border-b border-border/50 last:border-0"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => handleNavClick(link.href, link.isRoute)}
              >
                {link.name}
              </a>
            )
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
    </header>
  );
};

export default Header;
