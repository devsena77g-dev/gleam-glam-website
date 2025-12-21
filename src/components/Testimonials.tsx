import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "SJ",
    rating: 5,
    text: "SparkleClean transformed my home! The team was professional, thorough, and left everything spotless. I've been using their services for 2 years now and couldn't be happier.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    image: "MC",
    rating: 5,
    text: "As a restaurant owner, cleanliness is crucial. SparkleClean's commercial services have been outstanding. They're reliable, flexible, and always exceed expectations.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Property Manager",
    image: "ER",
    rating: 5,
    text: "I manage 15 rental properties and SparkleClean handles all our move-in/move-out cleaning. They're responsive, fairly priced, and do exceptional work every single time.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Working Parent",
    image: "DT",
    rating: 5,
    text: "With three kids and two dogs, keeping our house clean felt impossible. SparkleClean's weekly service has been a game-changer for our family. Highly recommend!",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Real Estate Agent",
    image: "LP",
    rating: 5,
    text: "I recommend SparkleClean to all my clients for pre-listing deep cleans. A clean home sells faster, and SparkleClean always makes properties look their absolute best.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="reviews" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our{" "}
            <span className="text-gradient">Customers</span>{" "}
            Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our happy customers have to say about our services.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border/50 relative">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center text-3xl font-bold text-primary-foreground shrink-0">
                {testimonials[activeIndex].image}
              </div>

              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex items-center gap-1 justify-center md:justify-start mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-display text-xl font-bold text-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Thumbnails */}
        <div className="flex justify-center gap-3 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {testimonial.image}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
