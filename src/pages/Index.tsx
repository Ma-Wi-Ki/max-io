import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import HoverCard from "@/components/animations/HoverCard";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { home, seo } from "@/content/site";
import { ArrowRight, AlertTriangle, Zap, Shield, BookOpen, Brain } from "lucide-react";

const iconMap = [Zap, Shield, BookOpen, Brain];

const Index = () => (
  <PageLayout>
    <SEO {...seo.home} />

    {/* Hero */}
    <Section className="pt-24 md:pt-36">
      <Reveal>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl max-w-4xl">
          {home.hero.h1}
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl md:text-xl">
          {home.hero.sub}
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
            <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-semibold">
              {home.hero.cta1}
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">
              {home.hero.cta2} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mt-8 text-sm text-muted-foreground">{home.hero.trust}</p>
      </Reveal>
    </Section>

    {/* Problem */}
    <Section className="border-t border-border">
      <Reveal>
        <h2 className="text-3xl font-bold md:text-4xl max-w-3xl">{home.problem.title}</h2>
      </Reveal>
      <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {home.problem.bullets.map((b) => (
          <StaggerItem key={b}>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">{b}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>

    {/* Services Cards */}
    <Section className="border-t border-border">
      <Reveal>
        <h2 className="text-3xl font-bold md:text-4xl">{home.services.title}</h2>
      </Reveal>
      <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
        {home.services.cards.map((card, i) => {
          const Icon = iconMap[i];
          return (
            <StaggerItem key={card.title}>
              <HoverCard className="h-full">
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{card.line}</p>
                <p className="text-xs text-primary">{card.targets}</p>
              </HoverCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>

    {/* Process */}
    <Section className="border-t border-border">
      <Reveal>
        <h2 className="text-3xl font-bold md:text-4xl">{home.process.title}</h2>
      </Reveal>
      <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
        {home.process.steps.map((s) => (
          <StaggerItem key={s.step}>
            <div className="rounded-lg border border-border bg-card p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{s.step}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>

    {/* Pricing preview */}
    <Section className="border-t border-border">
      <Reveal>
        <h2 className="text-3xl font-bold md:text-4xl">{home.pricing.title}</h2>
        <div className="mt-8 space-y-3 max-w-md">
          <p className="text-muted-foreground">Screening call: <span className="text-foreground font-medium">{home.pricing.screening}</span></p>
          <p className="text-muted-foreground">Retainers: <span className="text-foreground font-medium">{home.pricing.retainers}</span></p>
          <p className="text-muted-foreground">Projects: <span className="text-foreground font-medium">{home.pricing.projects}</span></p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/pricing">
            <Button variant="outline" className="border-primary/40 hover:bg-primary/10">See pricing</Button>
          </Link>
          <Link to="/contact">
            <Button className="sheen-hover silver-gradient text-primary-foreground font-semibold">Book a Screening Call</Button>
          </Link>
        </div>
      </Reveal>
    </Section>

    {/* Partners */}
    <Section className="border-t border-border">
      <Reveal>
        <h2 className="text-3xl font-bold md:text-4xl">{home.partners.title}</h2>
      </Reveal>
      <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
        {home.partners.list.map((p) => (
          <StaggerItem key={p.name}>
            <HoverCard>
              <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </HoverCard>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.2}>
        <p className="mt-8 text-sm text-muted-foreground">{home.partners.line}</p>
      </Reveal>
    </Section>

    {/* Final CTA */}
    <CTASection title={home.cta.title} cta1={home.cta.cta1} cta2={home.cta.cta2} />
  </PageLayout>
);

export default Index;
