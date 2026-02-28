import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { services as data, seo } from "@/content/site";
import { CheckCircle, XCircle, Users } from "lucide-react";

const Services = () => (
  <PageLayout>
    <SEO {...seo.services} />
    <Section className="pt-24 md:pt-36">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-5xl">Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{data.intro}</p>
      </Reveal>
    </Section>

    {data.packages.map((pkg, i) => (
      <Section key={pkg.title} className="border-t border-border">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-3xl">{pkg.title}</h2>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>{pkg.who}</span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <Reveal delay={0.1}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Deliverables</h3>
            <ul className="space-y-2">
              {pkg.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Typical Targets</h3>
            <ul className="space-y-2">
              {pkg.targets.map((t) => (
                <li key={t} className="text-sm text-muted-foreground">• {t}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-destructive mb-4">Exclusions</h3>
            <ul className="space-y-2">
              {pkg.exclusions.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    ))}

    <CTASection title="Ready to pick your lever?" />
  </PageLayout>
);

export default Services;
