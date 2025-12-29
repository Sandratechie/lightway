import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const projects = [
    { name: "Roman Heights", href: "#" },
    { name: "The Naples", href: "#" },
    { name: "Novara Court", href: "#" },
    { name: "All Projects", href: "#projects" },
  ];

  const socials = [
    { icon: Facebook, href: "https://facebook.com/lightwayhomes", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/lightwayhomes", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/lightwayhomes", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/lightwayhomes", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com/company/lightwayhomes", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-foreground text-lg leading-tight">Lightway</span>
                <span className="text-xs text-muted-foreground tracking-wider">HOMES LTD</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Your trusted partner in real estate development, creating premium 
              estates that transform dreams into reality.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">Our Projects</h4>
            <ul className="space-y-3">
              {projects.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+2348075161213" className="hover:text-primary transition-colors">
                  +234 807 516 1213
                </a>
              </li>
              <li>
                <a href="mailto:info@lightwayhomesltd.com" className="hover:text-primary transition-colors">
                  info@lightwayhomesltd.com
                </a>
              </li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Lightway Homes Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
