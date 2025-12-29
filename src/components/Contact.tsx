import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Ready To Own Your <span className="text-gradient-gold">Dream Home?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Take the first step towards property ownership. Contact us today and let our 
              expert team guide you through your real estate journey.
            </p>

            <div className="space-y-6">
              <a 
                href="tel:+2348075161213" 
                className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call Us</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">+234 807 516 1213</div>
                </div>
              </a>

              <a 
                href="mailto:info@lightwayhomesltd.com" 
                className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email Us</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">info@lightwayhomesltd.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Visit Us</div>
                  <div className="font-semibold">Lagos, Nigeria</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/2348075161213" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary rounded-2xl p-8 lg:p-10 border border-border/50">
            <h3 className="font-display text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-foreground"
                  placeholder="How can we help you?"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
