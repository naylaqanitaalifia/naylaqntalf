import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { works } from "@/data/works";
import { motion } from "framer-motion";

interface Props {
  currentSlug: string;
}

function OtherWorks({ currentSlug }: Props) {
  const otherWorks = works.filter((work) => work.slug !== currentSlug);

  return (
    <Section title="Other Works">
      <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {otherWorks.map((work) => (
          <motion.div
            key={work.id}
            className="w-[600px] shrink-0 snap-start"
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

export default OtherWorks;
