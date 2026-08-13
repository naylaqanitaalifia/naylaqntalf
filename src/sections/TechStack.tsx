import { Section } from "@/components/layouts/section";
import { techStacks } from "@/data/tech-stack";
import { motion } from "framer-motion";

// const frontends = ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"];
// const backends = ["Node.js", "Express", "Prisma", "MongoDB"];
// const tools = ["Git", "GitHub", "Vercel", "Netlify"];

function TechStack() {
  return (
    <Section id="tech-stack" title="Tech Stack">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
        {techStacks.map((techStack, index) => (
          <motion.div
            key={techStack.name}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-muted-foreground p-4 md:p-6"
            initial={{
              opacity: 0,
              y: 30,
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
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at top right, ${techStack.color}55, transparent 70%)`,
              }}
            />
            {/* <div
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                backgroundColor: techStack.color,
              }}
            /> */}
            <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
              <img
                key={techStack.name}
                src={techStack.link}
                alt={techStack.name}
                className="size-16"
              />
              <h4 className="text-xl md:text-2xl font-sulphur text-secondary">
                {techStack.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default TechStack;
