import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Clean",
    description: "Perfect for regular maintenance",
    price: 99,
    unit: "per visit",
    features: [
      "All rooms dusted & vacuumed",
      "Kitchen surfaces cleaned",
      "Bathroom sanitized",
      "Floors mopped",
      "Trash removed",
    ],
    popular: false,
    cta: "Book Basic",
  },
  {
    name: "Deep Clean",
    description: "Comprehensive top-to-bottom cleaning",
    price: 199,
    unit: "per visit",
    features: [
      "Everything in Basic Clean",
      "Inside appliances cleaned",
      "Windows & mirrors polished",
      "Baseboards & door frames",
      "Light fixtures dusted",
      "Cabinet fronts wiped",
    ],
    popular: true,
    cta: "Book Deep Clean",
  },
  {
    name: "Premium Package",
    description: "Ultimate cleaning experience",
    price: 349,
    unit: "per visit",
    features: [
      "Everything in Deep Clean",
      "Upholstery vacuumed",
      "Organizing & decluttering",
      "Interior window cleaning",
      "Carpet spot treatment",
      "Priority scheduling",
      "Same-day availability",
    ],
    popular: false,
    cta: "Book Premium",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4">Pricing</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple,{" "}
            <span className="text-gradient">Transparent</span>{" "}
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees, no surprises. Choose the plan that fits your needs and budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <div
                className={`h-full bg-card rounded-3xl p-8 border shadow-card transition-all duration-300 hover:shadow-elevated ${
                  plan.popular
                    ? "border-primary ring-2 ring-primary"
                    : "border-border/50"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-sm font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow-glow">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                {/* Plan Info */}
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.unit}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">100% Satisfaction Guaranteed</span>
            {" "}— If you're not happy, we'll re-clean for free!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
