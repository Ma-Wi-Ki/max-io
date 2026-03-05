import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { hero, growthTracks, seo } from "@/content/site";
import { ArrowRight, CheckCircle, TrendingUp, Brain } from "lucide-react";

const Index = () => (
  <PageLayout>
    <SEO {...seo.home} />

    {/* ── HERO ── */}
    <Section className="pt-24 md:pt-32 pb-8">
      <Reveal>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl max-w-5xl silver-text whitespace-pre-line">
          {hero.h1}
        </h1>
      </Reveal>
      <Reveal delay={0.15} direction="up">
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl md:text-xl leading-relaxed">
          {hero.sub}
        </p>
      </Reveal>
      <Reveal delay={0.25} direction="up">
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
            <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-semibold text-base px-8 py-6">
              {hero.cta1}
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 text-base px-8 py-6 group">
              {hero.cta2} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Reveal>
      <Reveal delay={0.35}>
        <p className="mt-8 text-sm text-muted-foreground/60 tracking-wide uppercase">{hero.trust}</p>
      </Reveal>
    </Section>

    {/* ── SERVICES PREVIEW ── */}
    <Section className="border-t border-border/60">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal delay={0.1}>
          <HoverCard className="h-full flex flex-col">
            <TrendingUp className="h-6 w-6 text-accent mb-3" />
            <h3 className="text-xl font-bold mb-1">{growthTracks.business.label}</h3>
            <p className="text-xs text-muted-foreground mb-4">{growthTracks.business.audience}</p>
            <ul className="space-y-2 mb-4">
              {growthTracks.business.focus.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link to="/services">
                <Button size="sm" className="sheen-hover silver-gradient text-primary-foreground font-semibold w-full group/btn">
                  {growthTracks.business.cta} <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </HoverCard>
        </Reveal>

        <Reveal delay={0.2}>
          <HoverCard className="h-full flex flex-col">
            <Brain className="h-6 w-6 text-accent mb-3" />
            <h3 className="text-xl font-bold mb-1">{growthTracks.executive.label}</h3>
            <p className="text-xs text-muted-foreground mb-4">{growthTracks.executive.audience}</p>
            <ul className="space-y-2 mb-4">
              {growthTracks.executive.focus.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link to="/services">
                <Button size="sm" className="sheen-hover silver-gradient text-primary-foreground font-semibold w-full group/btn">
                  {growthTracks.executive.cta} <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </HoverCard>
        </Reveal>
      </div>
    </Section>

    {/* ── BOTTOM CTA ── */}
    <Section className="border-t border-border/60">
      <Reveal>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to remove the bottlenecks?</h2>
          <p className="mt-3 text-muted-foreground">
            A short conversation to understand the business, identify friction, and determine whether MAX.io can help.
          </p>
          <Link to="/contact" className="inline-block mt-6">
            <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-semibold text-base px-8 py-6">
              Book a Screening Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </Section>
  </PageLayout>
);

export default Index;
