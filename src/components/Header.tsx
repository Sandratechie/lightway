import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, ArrowRight, Mail, Youtube, MapPin } from "lucide-react";
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
  // Keep header content visible immediately; some mobile browsers can delay/skip
  // the initial animation timeout, making the navbar appear empty.
  const [isVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNav, setHideNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const closeDropdownTimerRef = useRef<number | null>(null);
  const location = useLocation();

  // (Removed initial load opacity/translate animation to guarantee navbar visibility on mobile.)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // Keep navbar always visible on mobile/tablet to avoid it feeling "missing"
      // due to small scroll gestures.
      if (window.innerWidth < 1024) {
        setHideNav(false);
        setLastScrollY(currentScrollY);
        return;
      }
      
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

  const openDropdown = (name: string) => {
    if (closeDropdownTimerRef.current) {
      window.clearTimeout(closeDropdownTimerRef.current);
      closeDropdownTimerRef.current = null;
    }
    setActiveDropdown(name);
  };

  const closeDropdown = (delayMs = 260) => {
    if (closeDropdownTimerRef.current) window.clearTimeout(closeDropdownTimerRef.current);
    closeDropdownTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      resetHighlight();
    }, delayMs);
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
      } opacity-100`}
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
              className="flex items-center group transition-all duration-700"
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
                      if (link.subLinks) openDropdown(link.name);
                    }}
                    onMouseLeave={() => {
                      if (link.subLinks) closeDropdown();
                      else resetHighlight();
                    }}
                  >
                    {link.subLinks ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            activeDropdown === link.name ? closeDropdown(0) : openDropdown(link.name)
                          }
                          aria-expanded={activeDropdown === link.name}
                          className={`relative px-5 py-3 text-[13px] font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none touch-manipulation ${
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
                          onMouseEnter={() => openDropdown(link.name)}
                          onMouseLeave={() => closeDropdown()}
                          className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all duration-300 ease-out ${
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
              className="hidden lg:flex items-center gap-5 transition-all duration-700 opacity-100 translate-x-0"
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
              className="lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 text-white opacity-100 hover:bg-white/[0.06] active:scale-95 touch-manipulation"
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
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible z-[9998]' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-0 bottom-0 bg-[#0a0a0f] transition-all duration-300 ease-out z-[9999] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Header with Logo & Close */}
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 border-b border-white/10">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img 
              src={logo} 
              alt="Light Way Homes" 
              className="h-8 sm:h-10 md:h-12"
            />
          </Link>
          <button
            className="p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <div className="relative w-5 sm:w-6 h-4 sm:h-5">
              <span className="absolute left-0 top-2 sm:top-2.5 w-5 sm:w-6 h-[2px] bg-secondary rounded-full rotate-45" />
              <span className="absolute left-0 top-2 sm:top-2.5 w-5 sm:w-6 h-[2px] bg-secondary rounded-full -rotate-45" />
            </div>
          </button>
        </div>

        {/* Quick Contact & Social Bar */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-secondary/10 to-primary/10 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Phone Numbers */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <a 
                href="tel:+2348038034077" 
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-secondary/20 text-secondary text-xs sm:text-sm font-medium hover:bg-secondary/30 transition-colors touch-manipulation"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden xs:inline">+234 803 803 4077</span>
                <span className="xs:hidden">Call</span>
              </a>
              <a 
                href="tel:+2348075161213" 
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white/5 text-white/70 text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors touch-manipulation"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">+234 807 516 1213</span>
                <span className="sm:hidden">Alt</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a 
                href="mailto:info@lightwayhomesltd.com" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all touch-manipulation"
                aria-label="Email us"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UC_u0r-r75fcTwkZagHkyS6g" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-red-500/20 hover:text-red-500 transition-all touch-manipulation"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 top-32 sm:top-36 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none" />
        
        <nav className="h-[calc(100%-128px)] sm:h-[calc(100%-144px)] overflow-y-auto overscroll-contain">
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col min-h-full">
            {/* Navigation Links - Card Style for Mobile */}
            <div className="grid gap-2 sm:gap-3">
              {navLinks.map((link, index) => (
                <div 
                  key={link.name}
                  className={`transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms' }}
                >
                  {link.subLinks ? (
                    <div className="bg-white/[0.02] rounded-xl border border-white/5 overflow-hidden">
                      <button
                        onClick={() => setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full px-4 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-white/5 transition-colors touch-manipulation"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                          mobileSubmenu === link.name ? 'rotate-180 text-secondary' : 'text-white/40'
                        }`} />
                      </button>
                      
                      <div className={`grid transition-all duration-300 ease-out ${
                        mobileSubmenu === link.name ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}>
                        <div className="overflow-hidden">
                          <div className="px-2 pb-2 space-y-1">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.href}
                                onClick={() => handleNavClick(subLink.href, true)}
                                className="flex items-center gap-3 py-2.5 sm:py-3 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors touch-manipulation active:bg-white/10"
                              >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center border border-white/10 flex-shrink-0">
                                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-secondary" />
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <span className="text-sm sm:text-[15px] font-medium truncate">{subLink.name}</span>
                                  {subLink.description && (
                                    <span className="text-[10px] sm:text-xs text-white/40 truncate">{subLink.description}</span>
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
                      className={`flex items-center justify-between px-4 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-xl border transition-colors touch-manipulation active:scale-[0.98] ${
                        isActiveRoute(link.href) 
                          ? 'text-secondary bg-secondary/10 border-secondary/30' 
                          : 'text-white bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActiveRoute(link.href) && (
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Footer CTA Section */}
            <div 
              className={`mt-auto pt-4 sm:pt-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isMenuOpen ? '350ms' : '0ms' }}
            >
              {/* Location Info */}
              <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider">Visit Us</span>
                  <p className="text-xs sm:text-sm text-white/70 mt-0.5 leading-relaxed">
                    No. 4, Oyewo Close, Clay Busstop, Juli Estate, Oregun, Ikeja Lagos
                  </p>
                </div>
              </div>

              <Button 
                variant="default" 
                size="lg" 
                className="w-full bg-gradient-to-r from-secondary to-primary border-0 shadow-lg shadow-secondary/20 font-semibold text-xs sm:text-sm uppercase tracking-wide h-11 sm:h-12 touch-manipulation"
                asChild
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
