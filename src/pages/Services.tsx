import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { growthTracks, seo } from "@/content/site";
import { ArrowRight, CheckCircle, TrendingUp, Brain, Zap } from "lucide-react";

const ServiceTrack = ({
  icon: Icon,
  track,
  delay,
}: {
  icon: typeof TrendingUp;
  track: typeof growthTracks.business;
  delay: number;
}) => (
  <Section className="border-t border-border/60">
    <Reveal delay={delay}>
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-7 w-7 text-accent" />
        <h2 className="text-2xl font-bold md:text-3xl">{track.label}</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-8">{track.audience}</p>
    </Reveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
      {track.services.map((s, i) => (
        <Reveal key={s.title} delay={delay + 0.05 * (i + 1)}>
          <HoverCard className="h-full">
            <h4 className="text-sm font-semibold mb-1">{s.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </HoverCard>
        </Reveal>
      ))}
    </div>

    {/* Outcomes */}
    <Reveal delay={delay + 0.25}>
      <div className="rounded-xl border border-border/60 bg-card/50 p-6 mb-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">What This Means For You</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {track.outcomes.map((o) => (
            <div key={o.title} className="flex items-start gap-2.5">
              <Zap className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-medium text-foreground">{o.title}</span>
                <p className="text-xs text-muted-foreground mt-0.5">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    <Reveal delay={delay + 0.3}>
      <div className="rounded-xl border border-border/60 bg-card/50 p-6 mb-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Focus Areas</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {track.focus.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-accent shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>

    <Reveal delay={delay + 0.35}>
      <Link to="/contact">
        <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-semibold text-base px-8 py-6 group">
          {track.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </Reveal>
  </Section>
);

const Services = () => (
  <PageLayout>
    <SEO {...seo.services} />

    <Section className="pt-24 md:pt-32 pb-4">
      <Reveal>
        <h1 className="text-3xl font-bold md:text-4xl silver-text">{growthTracks.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{growthTracks.sub}</p>
      </Reveal>
    </Section>

    <ServiceTrack icon={TrendingUp} track={growthTracks.business} delay={0.1} />
    <ServiceTrack icon={Brain} track={growthTracks.executive} delay={0.1} />
  </PageLayout>
);

export default Services;
