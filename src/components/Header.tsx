import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, ArrowRight } from "lucide-react";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
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

  // Handle hash navigation
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

  // Moving highlight effect
  const moveHighlight = (index: number) => {
    const navItems = navRef.current?.querySelectorAll('.nav-item');
    const highlight = highlightRef.current;
    
    if (navItems && highlight && navItems[index]) {
      const item = navItems[index] as HTMLElement;
      const rect = item.getBoundingClientRect();
      const navRect = navRef.current!.getBoundingClientRect();
      
      highlight.style.width = `${rect.width}px`;
      highlight.style.left = `${rect.left - navRect.left}px`;
      highlight.style.opacity = '1';
    }
  };

  const resetHighlight = () => {
    if (highlightRef.current) {
      highlightRef.current.style.opacity = '0';
    }
  };

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        hideNav ? '-translate-y-full' : 'translate-y-0'
      } ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}
    >
      {/* Premium glass navbar container */}
      <div className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0a0f]/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/[0.08]' 
          : 'bg-[#0a0a0f]/80 backdrop-blur-xl'
      }`}>
        {/* Top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link 
              to="/" 
              className={`flex items-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Light Way Homes" 
                  className={`transition-all duration-500 group-hover:brightness-110 ${
                    isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
                  }`}
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-secondary/20 -z-10" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center relative" 
              ref={navRef}
              onMouseLeave={resetHighlight}
            >
              {/* Moving highlight background */}
              <div 
                ref={highlightRef}
                className="absolute top-1/2 -translate-y-1/2 h-10 bg-white/[0.08] rounded-lg transition-all duration-300 ease-out opacity-0 pointer-events-none"
                style={{ transform: 'translateY(-50%)' }}
              />
              
              <div className="flex items-center" ref={dropdownRef}>
                {navLinks.map((link, index) => (
                  <div 
                    key={link.name}
                    className="relative nav-item"
                    onMouseEnter={() => {
                      moveHighlight(index);
                      setActiveIndex(index);
                      if (link.subLinks) setActiveDropdown(link.name);
                    }}
                    onMouseLeave={() => {
                      if (!link.subLinks) resetHighlight();
                      setActiveDropdown(null);
                    }}
                  >
                    {link.subLinks ? (
                      <>
                        <button
                          className={`relative px-5 py-3 text-[13px] font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-1.5 ${
                            isActiveRoute(link.href) 
                              ? 'text-secondary' 
                              : 'text-white/80 hover:text-white'
                          } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                          style={{ transitionDelay: `${(index + 1) * 60}ms` }}
                        >
                          <span className="relative z-10">{link.name}</span>
                          <ChevronDown 
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              activeDropdown === link.name ? 'rotate-180' : ''
                            }`} 
                          />
                          {/* Active indicator dot */}
                          {isActiveRoute(link.href) && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
                          )}
                        </button>
                        
                        {/* Premium Dropdown Menu */}
                        <div 
                          className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ease-out ${
                            activeDropdown === link.name 
                              ? 'opacity-100 visible' 
                              : 'opacity-0 invisible'
                          }`}
                        >
                          {/* Dropdown arrow */}
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#12121a] border-l border-t border-white/10" />
                          
                          <div className={`relative bg-[#12121a] rounded-xl shadow-2xl border border-white/10 overflow-hidden w-64 transition-transform duration-300 ease-out ${
                            activeDropdown === link.name ? 'translate-y-0' : '-translate-y-2'
                          }`}>
                            {/* Top gradient accent */}
                            <div className="h-0.5 bg-gradient-to-r from-secondary via-primary to-secondary" />
                            
                            <div className="p-2">
                              {link.subLinks.map((subLink, subIndex) => (
                                <Link
                                  key={subLink.name}
                                  to={subLink.href}
                                  onClick={() => handleNavClick(subLink.href, true)}
                                  className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:from-secondary/30 group-hover:to-primary/30 transition-all duration-200 border border-white/5">
                                    <ArrowRight className="w-3.5 h-3.5 text-secondary transition-transform duration-200 group-hover:translate-x-0.5" />
                                  </div>
                                  <div className="flex-1">
                                    <span className="block text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                                      {subLink.name}
                                    </span>
                                    {subLink.description && (
                                      <span className="text-xs text-white/40 leading-tight">
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
                        className={`relative px-5 py-3 text-[13px] font-medium tracking-wide uppercase transition-all duration-300 block ${
                          isActiveRoute(link.href) 
                            ? 'text-secondary' 
                            : 'text-white/80 hover:text-white'
                        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                        style={{ transitionDelay: `${(index + 1) * 60}ms` }}
                      >
                        <span className="relative z-10">{link.name}</span>
                        {/* Active indicator dot */}
                        {isActiveRoute(link.href) && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* CTA & Phone */}
            <div 
              className={`hidden lg:flex items-center gap-5 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a 
                href="tel:+2348038034077" 
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-105 transition-all duration-300 border border-white/[0.08]">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span className="hidden xl:inline font-medium tracking-wide">+234 803 803 4077</span>
              </a>
              
              <Button 
                variant="default" 
                size="default" 
                className="relative overflow-hidden bg-gradient-to-r from-secondary via-secondary to-primary hover:from-primary hover:via-secondary hover:to-secondary border-0 shadow-[0_0_20px_rgba(218,28,92,0.3)] hover:shadow-[0_0_30px_rgba(218,28,92,0.5)] transition-all duration-500 px-6 font-semibold tracking-wide text-[13px] uppercase"
              >
                <span className="relative z-10">Get Started</span>
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] hover:translate-x-[200%] transition-transform duration-700" />
                </div>
              </Button>
            </div>

            {/* Tablet CTA - Show on md screens */}
            <div className="hidden md:flex lg:hidden items-center gap-3">
              <a 
                href="tel:+2348038034077" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] text-secondary hover:bg-secondary/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 text-white ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } hover:bg-white/[0.06] active:scale-95 touch-manipulation`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-6 h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? 'top-2.5 rotate-45 bg-secondary' : 'top-0'
                }`} />
                <span className={`absolute left-0 top-2.5 w-6 h-[2px] bg-current rounded-full transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`} />
                <span className={`absolute left-0 w-6 h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? 'top-2.5 -rotate-45 bg-secondary' : 'top-5'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 bottom-0 bg-[#0a0a0f] backdrop-blur-2xl transition-all duration-300 ease-out z-40 ${
          isScrolled ? 'top-[82px]' : 'top-[82px] sm:top-[96px]'
        } ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none" />
        
        <nav className="h-full overflow-y-auto overscroll-contain -webkit-overflow-scrolling-touch">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col min-h-full">
            <div className="space-y-0.5">
              {navLinks.map((link, index) => (
                <div 
                  key={link.name}
                  className={`transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 40 + 50}ms` : '0ms' }}
                >
                  {link.subLinks ? (
                    <div className="border-b border-white/5">
                      <button
                        onClick={() => setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full py-3.5 sm:py-4 text-[15px] sm:text-base font-medium text-white hover:text-secondary transition-colors touch-manipulation"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                          mobileSubmenu === link.name ? 'rotate-180 text-secondary' : 'text-white/50'
                        }`} />
                      </button>
                      
                      <div className={`grid transition-all duration-300 ease-out ${
                        mobileSubmenu === link.name ? 'grid-rows-[1fr] opacity-100 pb-2' : 'grid-rows-[0fr] opacity-0'
                      }`}>
                        <div className="overflow-hidden">
                          <div className="space-y-0.5 pl-1">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.href}
                                onClick={() => handleNavClick(subLink.href, true)}
                                className="flex items-center gap-3 py-2.5 sm:py-3 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors touch-manipulation active:bg-white/10"
                              >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-secondary/15 to-primary/15 flex items-center justify-center border border-white/5 flex-shrink-0">
                                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-secondary" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm sm:text-[15px] font-medium">{subLink.name}</span>
                                  {subLink.description && (
                                    <span className="text-xs text-white/40 hidden sm:block">{subLink.description}</span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href, link.isRoute)}
                      className={`block py-3.5 sm:py-4 text-[15px] sm:text-base font-medium border-b border-white/5 transition-colors touch-manipulation active:bg-white/5 ${
                        isActiveRoute(link.href) ? 'text-secondary' : 'text-white hover:text-secondary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile CTA Section */}
            <div 
              className={`mt-auto pt-4 sm:pt-6 border-t border-white/5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
            >
              <a 
                href="tel:+2348038034077" 
                className="flex items-center gap-3 sm:gap-4 py-3 sm:py-4 text-white/70 hover:text-white transition-colors touch-manipulation active:bg-white/5 rounded-lg"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider">Call us now</span>
                  <span className="block font-semibold text-white text-sm sm:text-base mt-0.5">+234 803 803 4077</span>
                </div>
              </a>
              <Button 
                variant="default" 
                size="lg" 
                className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-secondary to-primary border-0 shadow-lg shadow-secondary/20 font-semibold text-sm uppercase tracking-wide h-11 sm:h-12 touch-manipulation"
              >
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
