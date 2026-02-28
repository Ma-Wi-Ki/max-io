import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/animations/Reveal";

interface CTASectionProps {
  title: string;
  cta1?: string;
  cta2?: string;
}

const CTASection = ({ title, cta1 = "Book a Screening Call", cta2 = "Get a 90-Day Plan" }: CTASectionProps) => (
  <section className="py-20 md:py-28 border-t border-border">
    <div className="container text-center">
      <Reveal>
        <h2 className="text-3xl font-bold md:text-4xl mb-8">{title}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-semibold">
              {cta1}
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">
              {cta2}
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
