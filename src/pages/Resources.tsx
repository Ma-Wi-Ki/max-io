import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { about, caseStudies, seo } from "@/content/site";
import { CheckCircle, User, ArrowRight, Zap, Settings, Target, Brain, Users } from "lucide-react";

const Resources = () => (
  <PageLayout>
    <SEO {...seo.resources} />

    <Section className="pt-24 md:pt-32">
      <Reveal>
        <h1 className="text-3xl font-bold md:text-4xl">{about.title}</h1>
      </Reveal>

      {/* Founder */}
      <div className="mt-6 grid gap-6 md:grid-cols-[280px_1fr] items-start">
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center md:items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg bg-card border border-border/60 flex items-center justify-center overflow-hidden">
              <User className="h-20 w-20 text-accent/40" />
            </div>
            <h3 className="text-xl font-semibold mt-4">{about.founder.name}</h3>
            <p className="text-xs text-muted-foreground">Founder & Principal</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="space-y-4">
            {about.founder.bio.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Company */}
      <div className="mt-8 border-t border-border/60 pt-6">
        <Reveal delay={0.1}>
          <h3 className="text-2xl font-bold mb-2">{about.company.name}</h3>
          <p className="text-lg font-medium text-foreground/90">{about.company.description}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-5 space-y-3 max-w-3xl">
            {about.company.manifesto.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </div>
        </Reveal>

        {/* Pillars */}
        <Reveal delay={0.2}>
          <div className="mt-10">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">What We Do</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {about.company.pillars.map((pillar) => (
                <HoverCard key={pillar.title} className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-foreground">{pillar.title}</span>
                  <p className="text-xs leading-relaxed text-muted-foreground">{pillar.desc}</p>
                </HoverCard>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Process */}
        <Reveal delay={0.25}>
          <div className="mt-10">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">How We Work</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {about.company.process.map((s) => (
                <div key={s.step} className="space-y-1.5">
                  <span className="text-2xl font-bold text-accent">{s.step}</span>
                  <p className="text-sm font-semibold text-foreground">{s.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Outcomes */}
        <Reveal delay={0.3}>
          <div className="mt-10">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">What This Means For You</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {about.company.outcomes.map((o) => (
                <li key={o.title} className="text-sm flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">{o.title}</span>
                    <p className="text-muted-foreground mt-0.5">{o.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <p className="mt-6 text-sm text-muted-foreground">{about.closing}</p>
      </Reveal>
    </Section>

    {/* Case Studies */}
    <Section className="border-t border-border/60">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-3xl mb-2">Case Studies</h2>
        <p className="text-muted-foreground mb-8">From trades to tech — structured systems for every stage.</p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <Reveal key={i} delay={0.1 * (i + 1)}>
            <HoverCard className="h-full flex flex-col">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">{cs.industry}</span>
              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1">Result</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </HoverCard>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section className="border-t border-border/60">
      <Reveal>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold md:text-3xl">Let's see if there's a fit.</h2>
          <p className="mt-3 text-muted-foreground">
            A short, practical conversation about where you are and where you want to be.
          </p>
          <Link to="/contact" className="inline-block mt-6">
            <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-semibold text-base px-8 py-6 group">
              Book a Screening Call <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </Section>
  </PageLayout>
);

export default Resources;
