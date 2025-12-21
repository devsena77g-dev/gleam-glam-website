import { motion } from "framer-motion";
import { Award, Users, Heart, Leaf } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We set the highest standards for every cleaning job, no matter the size.",
  },
  {
    icon: Users,
    title: "Trusted Team",
    description: "All our cleaners are vetted, trained, and background-checked professionals.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We're not happy until you're thrilled.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "We use environmentally-friendly products safe for your family and pets.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold mb-4">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose{" "}
              <span className="text-gradient">SparkleClean</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              For over 12 years, SparkleClean has been the trusted choice for families and 
              businesses seeking professional cleaning services. We've built our reputation 
              on reliability, attention to detail, and genuine care for our customers.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of certified cleaning professionals uses the latest techniques and 
              eco-friendly products to deliver results that exceed expectations. From regular 
              maintenance to deep cleaning, we treat every home like our own.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-3xl p-8 shadow-card border border-border/50 text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">12+</div>
                <p className="text-muted-foreground font-medium">Years of Experience</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-primary rounded-3xl p-8 shadow-glow text-center mt-8"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">2.5K+</div>
                <p className="text-primary-foreground/80 font-medium">Happy Customers</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-primary rounded-3xl p-8 shadow-glow text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">15K+</div>
                <p className="text-primary-foreground/80 font-medium">Homes Cleaned</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-3xl p-8 shadow-card border border-border/50 text-center mt-8"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
