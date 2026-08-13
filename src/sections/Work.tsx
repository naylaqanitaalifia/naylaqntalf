import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { works } from "@/data/works";
import { motion } from "framer-motion";

function Work() {
  return (
    <Section id="work" title="Work">
      <div className="min-w-0 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {works.map((work) => (
          <motion.div
            key={work.id}
            className="min-w-0"
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Card work={work} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Work;
