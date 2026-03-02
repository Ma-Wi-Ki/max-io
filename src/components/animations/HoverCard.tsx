import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

const HoverCard = ({ children, className }: HoverCardProps) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-accent/60",
        className
      )}
      whileHover={
        prefersReduced
          ? undefined
          : {
              y: -4,
              boxShadow: "0 8px 30px -10px hsl(210 14% 40% / 0.12)",
            }
      }
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;
