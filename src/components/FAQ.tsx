import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What cleaning services do you offer?",
    answer: "We offer a comprehensive range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, carpet cleaning, window cleaning, and specialized eco-friendly cleaning options. Each service can be customized to meet your specific needs.",
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer: "Absolutely! We prioritize the safety of your family and pets. Our standard cleaning products are all eco-friendly and non-toxic. We also offer completely natural, plant-based cleaning options for customers who prefer an all-green approach.",
  },
  {
    question: "How do you price your cleaning services?",
    answer: "Our pricing is based on the size of your space, the type of cleaning required, and the frequency of service. We offer free, no-obligation quotes so you know exactly what to expect. Regular customers enjoy discounted rates on recurring services.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you don't need to be present. Many of our customers prefer to provide us with access and come home to a sparkling clean space. All our cleaners are thoroughly vetted, background-checked, and insured for your peace of mind.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is our guarantee. If you're not 100% happy with any aspect of our cleaning, let us know within 24 hours and we'll return to re-clean the areas in question at no extra charge. That's our promise to you.",
  },
  {
    question: "How quickly can you schedule a cleaning?",
    answer: "We offer same-day and next-day availability for most services. For deep cleaning or larger commercial projects, we recommend booking 2-3 days in advance to ensure we can accommodate your schedule.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you don't find what you're looking for, 
            feel free to contact us anytime.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 shadow-card data-[state=open]:shadow-elevated transition-shadow"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
