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
      <div className="grid gap-8 md:grid-cols-2">
        <Reveal delay={0.1}>
          <HoverCard className="h-full flex flex-col">
            <TrendingUp className="h-7 w-7 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-2">{growthTracks.business.label}</h3>
            <p className="text-sm text-muted-foreground mb-5">{growthTracks.business.audience}</p>
            <ul className="space-y-3 mb-6">
              {growthTracks.business.focus.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link to="/services">
                <Button className="sheen-hover silver-gradient text-primary-foreground font-semibold w-full group/btn text-sm py-5">
                  {growthTracks.business.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </HoverCard>
        </Reveal>

        <Reveal delay={0.2}>
          <HoverCard className="h-full flex flex-col">
            <Brain className="h-7 w-7 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-2">{growthTracks.executive.label}</h3>
            <p className="text-sm text-muted-foreground mb-5">{growthTracks.executive.audience}</p>
            <ul className="space-y-3 mb-6">
              {growthTracks.executive.focus.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link to="/services">
                <Button className="sheen-hover silver-gradient text-primary-foreground font-semibold w-full group/btn text-sm py-5">
                  {growthTracks.executive.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </HoverCard>
        </Reveal>
      </div>
    </Section>
  </PageLayout>
);

export default Index;
