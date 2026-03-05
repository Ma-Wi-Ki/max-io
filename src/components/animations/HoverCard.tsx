import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const HoverCard = ({ children, className, glowColor }: HoverCardProps) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border/80 bg-card p-6 transition-colors duration-300 hover:border-accent/50",
        className
      )}
      whileHover={
        prefersReduced
          ? undefined
          : {
              y: -6,
              boxShadow: glowColor
                ? `0 12px 40px -12px ${glowColor}`
                : "0 12px 40px -12px hsl(210 40% 58% / 0.15)",
            }
      }
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;
