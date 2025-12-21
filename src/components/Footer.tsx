import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: ["Residential Cleaning", "Commercial Cleaning", "Deep Cleaning", "Move-in/Move-out", "Carpet Cleaning"],
    company: ["About Us", "Our Team", "Careers", "Blog", "Contact"],
    support: ["FAQ", "Pricing", "Service Areas", "Book Online", "Gift Cards"],
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">SparkleClean</span>
            </motion.a>
            
            <p className="text-background/70 mb-6 max-w-sm">
              Professional cleaning services that transform your space into a sanctuary of cleanliness and comfort.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:hello@sparkleclean.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@sparkleclean.com</span>
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                <span>123 Clean Street, Sparkle City</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} SparkleClean. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
