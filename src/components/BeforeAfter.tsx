import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const transformations = [
  {
    id: 1,
    title: "Kitchen Deep Clean",
    before: { bg: "from-amber-900/40 to-stone-600/40", label: "Grease & Grime" },
    after: { bg: "from-primary/20 to-accent/20", label: "Sparkling Clean" },
  },
  {
    id: 2,
    title: "Bathroom Restoration",
    before: { bg: "from-stone-600/40 to-zinc-500/40", label: "Mold & Stains" },
    after: { bg: "from-primary/20 to-accent/20", label: "Fresh & Bright" },
  },
  {
    id: 3,
    title: "Living Room Revival",
    before: { bg: "from-stone-500/40 to-amber-800/40", label: "Dusty & Dull" },
    after: { bg: "from-primary/20 to-accent/20", label: "Vibrant & Clean" },
  },
];

const BeforeAfter = () => {
  const [activeSliders, setActiveSliders] = useState<{ [key: number]: number }>({
    1: 50,
    2: 50,
    3: 50,
  });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4">Transformations</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See the{" "}
            <span className="text-gradient">Difference</span>{" "}
            We Make
          </h2>
          <p className="text-lg text-muted-foreground">
            Drag the slider to reveal the stunning before and after results of our cleaning services.
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                {/* Before Layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.before.bg} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">😟</span>
                    </div>
                    <span className="text-foreground/70 font-medium">{item.before.label}</span>
                  </div>
                </div>

                {/* After Layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.after.bg} flex items-center justify-center`}
                  style={{ clipPath: `inset(0 ${100 - activeSliders[item.id]}% 0 0)` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.after.label}</span>
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-10"
                  style={{ left: `${activeSliders[item.id]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-primary-foreground text-xs font-bold">↔</span>
                  </div>
                </div>

                {/* Slider Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={activeSliders[item.id]}
                  onChange={(e) =>
                    setActiveSliders((prev) => ({
                      ...prev,
                      [item.id]: Number(e.target.value),
                    }))
                  }
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground text-center mt-6">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
