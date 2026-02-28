import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import HoverCard from "@/components/animations/HoverCard";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { pricing as data, seo } from "@/content/site";
import { Check, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Pricing = () => (
  <PageLayout>
    <SEO {...seo.pricing} />
    <Section className="pt-24 md:pt-36">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-5xl">{data.title}</h1>
      </Reveal>

      <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.tiers.map((tier) => (
          <StaggerItem key={tier.name}>
            <HoverCard className={`h-full flex flex-col ${tier.recommended ? "border-primary" : ""}`}>
              {tier.recommended && (
                <Badge className="mb-4 w-fit silver-gradient text-primary-foreground">Recommended</Badge>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-1 text-2xl font-bold silver-text">{tier.price}</p>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{tier.desc}</p>
              <ul className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </HoverCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>

    {/* Day Rates */}
    <Section className="border-t border-border">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-3xl">Day Rates</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-md">
          {data.dayRates.map((r) => (
            <div key={r.type} className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">{r.type}</p>
              <p className="text-xl font-bold silver-text">{r.rate}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>

    {/* Terms */}
    <Section className="border-t border-border">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-3xl mb-4">Terms</h2>
          <ul className="space-y-2">
            {data.terms.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl font-bold md:text-3xl mb-4">Outside Scope</h2>
          <ul className="space-y-2">
            {data.scopeBoundaries.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>

    <CTASection title="Clear scope. Measurable outcomes. Start here." />
  </PageLayout>
);

export default Pricing;
