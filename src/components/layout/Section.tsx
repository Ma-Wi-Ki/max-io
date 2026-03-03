import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-10 md:py-14", className)}>
    <div className="container">{children}</div>
  </section>
);

export default Section;
