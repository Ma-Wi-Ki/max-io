import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { caseStudies as data, seo } from "@/content/site";
import { Target, CheckCircle, FileText } from "lucide-react";

const CaseStudies = () => (
  <PageLayout>
    <SEO {...seo.caseStudies} />
    <Section className="pt-24 md:pt-36">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-5xl">{data.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{data.sub}</p>
      </Reveal>
    </Section>

    {data.cases.map((c, i) => (
      <Section key={c.title} className="border-t border-border">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-3xl">{c.title}</h2>
          <p className="mt-4 text-muted-foreground">{c.starting}</p>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <Reveal delay={0.1}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" /> What We Changed
            </h3>
            <ul className="space-y-2">
              {c.changes.map((ch) => (
                <li key={ch} className="text-sm text-muted-foreground">• {ch}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
              <Target className="h-4 w-4" /> 90-Day Targets
            </h3>
            <ul className="space-y-2">
              {c.targets.map((t) => (
                <li key={t} className="text-sm text-muted-foreground">• {t}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
              <FileText className="h-4 w-4" /> Deliverables
            </h3>
            <ul className="space-y-2">
              {c.deliverables.map((d) => (
                <li key={d} className="text-sm text-muted-foreground">• {d}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    ))}

    <CTASection title="Want targets like these for your business?" />
  </PageLayout>
);

export default CaseStudies;
