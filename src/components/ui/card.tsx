import { Link } from "react-router-dom";
import { Badge } from "./badge";
import type { Work } from "@/types/work";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CardProps {
  work: Work;
}

function Card({
  work: { image, title, description, category, slug },
}: CardProps) {
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // const smoothX = useSpring(x, {
  //   stiffness: 700,
  //   damping: 60,
  // });

  // const smoothY = useSpring(y, {
  //   stiffness: 700,
  //   damping: 60,
  // });

  return (
    <Link
      to={`/works/${slug}`}
      className="group flex flex-col gap-6 cursor-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            // className="pointer-events-none fixed z-50 rounded-full bg-secondary px-5 py-2 text-xs font-medium text-primary shadow-xl"
            className="pointer-events-none fixed z-50 flex items-center gap-2 rounded-full bg-secondary/95 px-5 py-2.5 text-xs font-medium text-primary shadow-2xl backdrop-blur-md"
            style={{
              left: x,
              top: y,
              x: "-50%",
              y: "-50%",
            }}
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.6,
              opacity: 0,
            }}
          >
            View Project
            <span>
              <ArrowUpRight size={14} />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt="work-image"
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-start gap-3">
        <h4 className="text-3xl font-sulphur font-semibold text-secondary">
          {title}
        </h4>
        <div className="flex flex-col items-start gap-4">
          <p className="text-base font-sulphur text-muted-foreground tracking-wide line-clamp-2">
            {description}
          </p>
          <Badge>{category}</Badge>
        </div>
      </div>
    </Link>
  );
}

export { Card };
