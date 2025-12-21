import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Sofa, Droplets, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Comprehensive home cleaning services tailored to your needs. We handle everything from daily tidying to deep cleaning.",
    features: ["Deep Cleaning", "Regular Maintenance", "Move-in/Move-out"],
    popular: true,
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices, retail spaces, and commercial properties of all sizes.",
    features: ["Office Spaces", "Retail Stores", "Industrial Sites"],
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning service that reaches every corner. Perfect for spring cleaning or pre-event preparation.",
    features: ["Spring Cleaning", "Post-Construction", "Pre-Event Prep"],
    popular: false,
  },
  {
    icon: Sofa,
    title: "Upholstery Care",
    description: "Expert cleaning for sofas, carpets, curtains, and all fabric surfaces. Restore your furniture's beauty.",
    features: ["Sofa Cleaning", "Carpet Care", "Curtain Refresh"],
    popular: false,
  },
  {
    icon: Droplets,
    title: "Window Cleaning",
    description: "Crystal-clear windows inside and out. Professional streak-free cleaning for homes and businesses.",
    features: ["Interior & Exterior", "High-Rise Service", "Screen Cleaning"],
    popular: false,
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Green cleaning solutions using 100% eco-friendly, non-toxic products. Safe for your family and pets.",
    features: ["Non-Toxic Products", "Pet Safe", "Allergy Friendly"],
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cleaning Solutions for{" "}
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From daily housekeeping to specialized deep cleaning, we offer comprehensive
            services to keep your space immaculate.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`h-full bg-card rounded-2xl p-8 border border-border/50 shadow-card transition-all duration-300 hover:shadow-elevated ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-8 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-gradient-primary transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="hero" size="xl">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
