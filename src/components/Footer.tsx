import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
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
    <footer className="bg-purple-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Light Way Homes" 
                className="h-16 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
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
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/70 hover:text-secondary hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-5">Our Projects</h4>
            <ul className="space-y-3">
              {projects.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-5">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="tel:+2348038034077" className="hover:text-secondary transition-colors">
                  +234 803 803 4077
                </a>
              </li>
              <li>
                <a href="tel:+2348075161213" className="hover:text-secondary transition-colors">
                  +234 807 516 1213
                </a>
              </li>
              <li>
                <a href="mailto:info@lightwayhomesltd.com" className="hover:text-secondary transition-colors">
                  info@lightwayhomesltd.com
                </a>
              </li>
              <li className="leading-relaxed">
                No. 4, Oyewo close, Clay Busstop, Juli Estate, Off Kudirat Abiola way, Oregun, Ikeja Lagos.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Light Way Homes Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
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
