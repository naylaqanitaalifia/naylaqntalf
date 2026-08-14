import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  // Let's: Dari posisi kanan (500px) bergerak menuju tengah (0px)
  const xLets = useTransform(smoothProgress, [0, 1], [500, 0]);

  // Collaborate: Dari posisi kiri (-500px) bergerak menuju tengah (0px)
  const xCollab = useTransform(smoothProgress, [0, 1], [-500, 0]);

  // Opacity biar makin smooth saat baru kelihatan
  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  return (
    // <div className="flex items-center justify-between text-muted-foreground">
    //   <p className="font-medium uppercase">&copy; COPYRIGHT 2026</p>
    //   <div className="flex items-center gap-12">
    //     <a href="" className="text-base">
    //       Email
    //     </a>
    //     <a href="" className="text-base">
    //       LinkedIn
    //     </a>
    //     <a href="" className="text-base">
    //       GitHub
    //     </a>
    //   </div>
    // </div>

    <div className="">
      <div
        ref={containerRef}
        className="py-12 sm:py-16 md:py-20 text-5xl sm:text-6xl md:text-9xl font-sulphur text-center text-secondary overflow-hidden"
      >
        <motion.h1 style={{ x: xLets, opacity }}>Let's</motion.h1>
        <motion.h1 style={{ x: xCollab, opacity }}>Collaborate!</motion.h1>
      </div>

      {/* <div className="flex justify-between border-y border-muted-foreground py-12"> */}
      <div className="flex flex-col gap-10 border-y border-muted-foreground px-6 md:px-8 py-10 md:flex-row md:justify-between md:gap-0 md:py-12">
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="text-xs text-muted-foreground tracking-widest uppercase">
            Menu
          </div>
          <ul className="flex flex-col gap-2 md:gap-3">
            <li>
              <a href="/#" className="text-base text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/#experience" className="text-base text-secondary">
                Experience
              </a>
            </li>
            <li>
              <a href="/#work" className="text-base text-secondary">
                Work
              </a>
            </li>
            <li>
              <a href="/#tech-stack" className="text-base text-secondary">
                Tech Stack
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 md:gap-5">
          <div className="text-xs text-muted-foreground tracking-widest uppercase">
            Connect
          </div>
          <ul className="flex flex-col gap-2 md:gap-3">
            <li>
              <a
                href="https://www.linkedin.com/in/nayla-qanita-alifia-0644772b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-base text-secondary"
              >
                LinkedIn
                <ArrowUpRight size={18} />
              </a>
            </li>
            <li>
              <a
                href="mailto:naylaqanitaalifia@gmail.com"
                className="text-base text-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/naylaqanitaalifia"
                className="flex items-center gap-1 text-base text-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRight size={18} />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 md:gap-5">
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            Say Hello
          </p>
          <a
            href="mailto:naylaqanitaalifia@gmail.com"
            className="break-words text-xl text-secondary md:text-2xl"
          >
            naylaqanitaalifia@gmail.com
          </a>
          <div className="flex items-center gap-2 md:gap-3 text-sm text-muted-foreground">
            <motion.span
              className="h-2 w-2 rounded-full bg-lime-400"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span>Available for Freelance</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-3 md:py-6">
        <p className="text-sm font-sulphur text-center md:text-left text-muted-foreground">
          &copy; 2026 Nayla Qanita Alifia - All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
