import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { outcomesData, seo } from "@/content/site";
import { ArrowRight, Eye, Zap, Clock, Target, TrendingUp, Brain } from "lucide-react";

const iconMap: Record<string, typeof Eye> = {
  eye: Eye,
  zap: Zap,
  clock: Clock,
  target: Target,
  trending: TrendingUp,
  brain: Brain,
};

const Outcomes = () => (
  <PageLayout>
    <SEO {...seo.outcomes} />

    <Section className="pt-24 md:pt-32">
      <Reveal>
        <h1 className="text-3xl font-bold md:text-4xl silver-text">{outcomesData.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{outcomesData.sub}</p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {outcomesData.items.map((item, i) => {
          const Icon = iconMap[item.icon] || Eye;
          return (
            <Reveal key={item.title} delay={0.08 * (i + 1)}>
              <HoverCard className="h-full">
                <Icon className="h-6 w-6 text-accent mb-3" />
                <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </HoverCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.5}>
        <p className="mt-8 text-sm text-muted-foreground italic">{outcomesData.note}</p>
      </Reveal>
    </Section>

    <Section className="border-t border-border/60">
      <Reveal>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold md:text-3xl">See what's possible.</h2>
          <p className="mt-3 text-muted-foreground">
            Every engagement starts with identifying the bottlenecks. Let's find yours.
          </p>
          <Link to="/contact" className="inline-block mt-6">
            <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-semibold text-base px-8 py-6 group">
              {outcomesData.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </Section>
  </PageLayout>
);

export default Outcomes;
