import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface SubLink {
  name: string;
  href: string;
  description?: string;
}

interface NavItem {
  name: string;
  href: string;
  isRoute: boolean;
  subLinks?: SubLink[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNav, setHideNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  const navLinks: NavItem[] = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Properties", href: "/properties", isRoute: true },
    { 
      name: "Services", 
      href: "/services", 
      isRoute: true,
      subLinks: [
        { name: "Property Sales", href: "/services#sales", description: "Find your dream property" },
        { name: "Property Management", href: "/services#management", description: "Expert property care" },
        { name: "Real Estate Advisory", href: "/services#advisory", description: "Professional guidance" },
        { name: "Investment Consulting", href: "/services#investment", description: "Smart investment strategies" },
      ]
    },
    { 
      name: "Company", 
      href: "/about", 
      isRoute: true,
      subLinks: [
        { name: "About Us", href: "/about", description: "Our story and mission" },
        { name: "Our Team", href: "/about#team", description: "Meet our experts" },
        { name: "Careers", href: "/career", description: "Join our team" },
        { name: "Blog", href: "/blog", description: "Latest insights" },
      ]
    },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    
    // If it's a hash link and we're on the home page, scroll to the section
    if (!isRoute && href.startsWith('/#') && location.pathname === '/') {
      const hash = href.replace('/', '');
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-elevated border-b border-secondary/10' 
          : 'bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm'
      } ${hideNav ? '-translate-y-full' : 'translate-y-0'} ${
        isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'
      }`}
    >
      {/* Top bar with gradient accent */}
      <div className="h-1 w-full bg-gradient-brand" />
      
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className={`flex items-center group transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="Light Way Homes" 
                className={`transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'}`}
              />
              {/* Logo glow effect on hover */}
              <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" ref={dropdownRef}>
            {navLinks.map((link, index) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.subLinks ? (
                  <>
                    <button
                      className={`nav-link-animated px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1 rounded-lg ${
                        isScrolled ? 'text-foreground' : 'text-foreground'
                      } ${isActiveRoute(link.href) ? 'text-secondary' : ''} ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                      } hover:text-secondary group`}
                      style={{ transitionDelay: `${(index + 1) * 80}ms` }}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      {/* Animated underline from center */}
                      <span className="nav-underline" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                        activeDropdown === link.name 
                          ? 'opacity-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-card/98 backdrop-blur-xl rounded-xl shadow-elevated border border-secondary/10 overflow-hidden min-w-[280px]">
                        {/* Dropdown header gradient */}
                        <div className="h-1 bg-gradient-brand" />
                        <div className="p-2">
                          {link.subLinks.map((subLink, subIndex) => (
                            <Link
                              key={subLink.name}
                              to={subLink.href}
                              onClick={() => handleNavClick(subLink.href, true)}
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/5 transition-all duration-300"
                              style={{ 
                                opacity: activeDropdown === link.name ? 1 : 0,
                                transform: activeDropdown === link.name ? 'translateX(0)' : 'translateX(-10px)',
                                transition: `all 0.3s ease ${subIndex * 50}ms`
                              }}
                            >
                              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <ArrowRight className="w-4 h-4 text-primary-foreground" />
                              </div>
                              <div>
                                <span className="block font-medium text-foreground group-hover:text-secondary transition-colors duration-300">
                                  {subLink.name}
                                </span>
                                {subLink.description && (
                                  <span className="text-xs text-muted-foreground">
                                    {subLink.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href, link.isRoute)}
                    className={`nav-link-animated px-4 py-2 text-sm font-medium transition-all duration-300 relative rounded-lg block ${
                      isScrolled ? 'text-foreground' : 'text-foreground'
                    } ${isActiveRoute(link.href) ? 'text-secondary' : ''} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    } hover:text-secondary`}
                    style={{ transitionDelay: `${(index + 1) * 80}ms` }}
                  >
                    {link.name}
                    {/* Animated underline from center */}
                    <span className="nav-underline" />
                    {/* Active indicator */}
                    {isActiveRoute(link.href) && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-glow" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div 
            className={`hidden lg:flex items-center gap-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <a 
              href="tel:+2348038034077" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                <Phone className="w-4 h-4 text-secondary" />
              </div>
              <span className="hidden xl:inline">+234 803 803 4077</span>
            </a>
            <Button 
              variant="hero" 
              size="default" 
              className="btn-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-foreground' : 'text-foreground'
            } ${isVisible ? 'opacity-100' : 'opacity-0'} hover:bg-secondary/10`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-3 rotate-45' : 'top-1'}`} />
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-[73px] bg-background/98 backdrop-blur-xl transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto container-padding py-8 flex flex-col gap-2 h-[calc(100vh-73px)] overflow-y-auto">
          {navLinks.map((link, index) => (
            <div 
              key={link.name}
              className={`transition-all duration-500 ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {link.subLinks ? (
                <div>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)}
                    className="flex items-center justify-between w-full py-4 text-lg font-medium text-foreground hover:text-secondary transition-colors border-b border-border/50"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileSubmenu === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${
                    mobileSubmenu === link.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="py-2 pl-4 space-y-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          onClick={() => handleNavClick(subLink.href, true)}
                          className="flex items-center gap-3 py-3 text-muted-foreground hover:text-secondary transition-colors"
                        >
                          <div className="w-6 h-6 rounded bg-gradient-brand flex items-center justify-center">
                            <ArrowRight className="w-3 h-3 text-primary-foreground" />
                          </div>
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className={`block py-4 text-lg font-medium border-b border-border/50 transition-colors ${
                    isActiveRoute(link.href) ? 'text-secondary' : 'text-foreground hover:text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile CTA Section */}
          <div 
            className={`mt-auto pt-6 border-t border-border transition-all duration-500 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <a 
              href="tel:+2348038034077" 
              className="flex items-center gap-3 py-3 text-muted-foreground"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Call us now</span>
                <span className="block font-medium text-foreground">+234 803 803 4077</span>
              </div>
            </a>
            <Button variant="hero" size="lg" className="w-full mt-4 btn-glow">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
