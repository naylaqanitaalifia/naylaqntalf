import { Section } from "@/components/layouts/section";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

function Experience() {
  return (
    <Section id="experience" title="Experience" titleClassName="text-center">
      <div className="relative mx-auto my-12 max-w-5xl px-4">
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-neutral-800" />

        <div className="flex flex-col gap-24">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={experience.id}
                className="relative flex items-center justify-between"
                initial={{
                  opacity: 0.2,
                  y: 60,
                  filter: "blur(1px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: false,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="absolute left-1/2 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-black" />

                <div
                  className={`flex w-full md:w-[45%] ${
                    isEven
                      ? "md:ml-auto md:pl-8 text-left"
                      : "md:mr-auto md:pr-8 md:text-right"
                  }`}
                >
                  <div className="flex flex-col gap-2 text-secondary">
                    {/* <span className="text-sm font-mono text-muted-foreground tracking-widest ">
                      {experience.id}
                    </span> */}
                    <div className="flex items-center justify-between text-sm">
                      <span>
                        {experience.role} • {experience.type}
                      </span>
                      <span>
                        {experience.start_date} - {experience.end_date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-blinker font-semibold text-secondary tracking-wider uppercase">
                      {experience.company}
                    </h3>

                    <p className="text-base font-sulphur text-muted-foreground leading-relaxed tracking-wide">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
