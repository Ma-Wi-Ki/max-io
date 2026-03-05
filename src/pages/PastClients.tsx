import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { pastClientsData, seo } from "@/content/site";
import { ArrowRight, Briefcase } from "lucide-react";

const PastClients = () => (
  <PageLayout>
    <SEO {...seo.pastClients} />

    <Section className="pt-24 md:pt-32">
      <Reveal>
        <h1 className="text-3xl font-bold md:text-4xl silver-text">{pastClientsData.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{pastClientsData.sub}</p>
      </Reveal>

      {/* Industries */}
      <Reveal delay={0.1}>
        <div className="mt-10">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Industries</p>
          <div className="flex flex-wrap gap-2">
            {pastClientsData.industries.map((ind) => (
              <span
                key={ind}
                className="px-4 py-2 rounded-lg text-xs font-medium border border-border/60 bg-card text-muted-foreground"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>

    {/* Case Studies */}
    <Section className="border-t border-border/60">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-3xl mb-8">Example Engagements</h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {pastClientsData.caseStudies.map((cs, i) => (
          <Reveal key={cs.industry} delay={0.1 * (i + 1)}>
            <HoverCard className="h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.industry}</span>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Result</p>
                  <p className="text-sm text-foreground font-medium leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </HoverCard>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* CTA */}
    <Section className="border-t border-border/60">
      <Reveal>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold md:text-3xl">Your business could be next.</h2>
          <p className="mt-3 text-muted-foreground">
            Every engagement starts with a screening call. Let's see if there's a fit.
          </p>
          <Link to="/contact" className="inline-block mt-6">
            <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-semibold text-base px-8 py-6 group">
              {pastClientsData.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </Section>
  </PageLayout>
);

export default PastClients;
