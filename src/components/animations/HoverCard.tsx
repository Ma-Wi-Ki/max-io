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
        "rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40",
        className
      )}
      whileHover={prefersReduced ? undefined : { y: -4, boxShadow: "0 8px 30px -12px hsla(0,0%,75%,0.2)" }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;
