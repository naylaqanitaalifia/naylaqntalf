import ProfileImage from "@/assets/profile.png";
import { Section } from "@/components/layouts/section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start gap-8">
          <div className="relative">
            <img
              src={ProfileImage}
              alt="Nayla Qanita Alifia"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
            <motion.span
              className="absolute bottom-1 right-3 h-4 w-4 rounded-full border-2 border-primary bg-lime-400"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="flex flex-col items-start gap-6 text-secondary">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-3xl md:text-4xl font-blinker font-bold tracking-tight text-secondary">
                Hi, I'm Nayla Qanita Alifia
              </h1>

              <p className="font-sulphur text-base md:text-xl leading-relaxed text-neutral-400 ">
                A{" "}
                <span className="text-white font-medium">
                  Frontend Developer
                </span>{" "}
                based in Indonesia, specializing in building responsive,
                scalable, and intuitive web applications using{" "}
                <span className="text-white font-medium">
                  React, TypeScript, and Laravel
                </span>
                .
              </p>

              <p className="font-sulphur text-sm md:text-base leading-relaxed text-neutral-500">
                Currently focused on crafting seamless user experiences and
                integrating clean design systems into real-world products.
              </p>
            </div>
            <Button variant="outline" asChild>
              <a
                href="https://drive.google.com/file/d/1KGsOwuKWp0QYSIfnubhkAj1pZn4ZYRPt/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm"
              >
                View CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
