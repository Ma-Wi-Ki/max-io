import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { about, caseStudies, seo } from "@/content/site";
import { CheckCircle, User, ArrowRight } from "lucide-react";

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

      {/* Company + Manifesto */}
      <div className="mt-8 border-t border-border/60 pt-6">
        <Reveal delay={0.1}>
          <h3 className="text-2xl font-bold mb-3">{about.company.name}</h3>
          <p className="text-base leading-relaxed text-muted-foreground max-w-3xl">{about.company.description}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 space-y-4 max-w-3xl">
            {about.company.manifesto.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </div>
        </Reveal>

        {/* AI use cases */}
        <Reveal delay={0.2}>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-medium text-foreground mb-3">We use AI agents and automation deliberately:</p>
            <ul className="space-y-1.5 mb-4">
              {about.company.aiUseCases.map((uc) => (
                <li key={uc} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {uc}
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-foreground italic">{about.company.aiDisclaimer}</p>
          </div>
        </Reveal>

        {/* What we deliver */}
        <Reveal delay={0.25}>
          <div className="mt-10">
            <p className="text-sm font-medium text-foreground mb-4">What we deliver</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {about.company.capabilities.map((c) => (
                <li key={c.title} className="text-sm flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">{c.title}</span>
                    <p className="text-muted-foreground mt-0.5">{c.desc}</p>
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
