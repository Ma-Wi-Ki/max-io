import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import HoverCard from "@/components/animations/HoverCard";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { about as data, seo } from "@/content/site";
import { User } from "lucide-react";

const About = () => (
  <PageLayout>
    <SEO {...seo.about} />
    <Section className="pt-24 md:pt-36">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-5xl">{data.title}</h1>
      </Reveal>
      <div className="mt-8 space-y-4 max-w-2xl">
        {data.points.map((p) => (
          <Reveal key={p}>
            <p className="text-lg text-muted-foreground">{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Partners */}
    <Section className="border-t border-border">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-3xl">Our Partners</h2>
      </Reveal>
      <Stagger className="mt-8 grid gap-6 md:grid-cols-3">
        {data.partners.map((p) => (
          <StaggerItem key={p.name}>
            <HoverCard className="h-full">
              <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </HoverCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>

    {/* Founder */}
    <Section className="border-t border-border">
      <Reveal>
        <div className="flex items-start gap-6 max-w-2xl">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border bg-card">
            <User className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{data.founder.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{data.founder.bio}</p>
          </div>
        </div>
      </Reveal>
    </Section>

    <CTASection title="Execution-first advisory. Start here." />
  </PageLayout>
);

export default About;
