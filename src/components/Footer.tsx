import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const projects = [
    { name: "Roman Heights", href: "#projects" },
    { name: "The Naples", href: "#projects" },
    { name: "Novara Court", href: "#projects" },
    { name: "View All", href: "#projects" },
  ];

  const socials = [
    { icon: Facebook, href: "https://facebook.com/lightwayhomes", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/lightwayhomes", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/lightwayhomes", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/lightwayhomes", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-purple-dark text-primary-foreground">
      <div className="container mx-auto container-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-4 md:mb-6">
              <img 
                src={logo} 
                alt="Light Way Homes" 
                className="h-12 md:h-14 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-primary-foreground/70 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
              Your trusted partner in premium real estate development across Nigeria.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/70 hover:text-secondary hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm md:text-base">Our Projects</h4>
            <ul className="space-y-2 md:space-y-3">
              {projects.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm md:text-base">Contact Us</h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70">
                  <a href="tel:+2348038034077" className="hover:text-secondary transition-colors block">+234 803 803 4077</a>
                  <a href="tel:+2348075161213" className="hover:text-secondary transition-colors block">+234 807 516 1213</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@lightwayhomesltd.com" className="text-primary-foreground/70 hover:text-secondary transition-colors break-all">
                  info@lightwayhomesltd.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 leading-relaxed">
                  No. 4, Oyewo close, Clay Busstop, Juli Estate, Oregun, Ikeja Lagos.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto container-padding py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-primary-foreground/60">
            <p>© {currentYear} Light Way Homes Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
