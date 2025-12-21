import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready for a{" "}
            <span className="text-primary">Sparkling Clean</span>{" "}
            Home?
          </h2>

          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Book your first cleaning today and experience the difference. New customers get
            <span className="font-bold text-primary"> 20% OFF</span> their first service!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Phone className="w-5 h-5" />
              Call (123) 456-7890
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Clock, text: "Same Day Service Available" },
              { icon: Shield, text: "100% Satisfaction Guaranteed" },
            ].map((item) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-primary-foreground/80 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
