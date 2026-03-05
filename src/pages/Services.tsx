import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { growthTracks, seo } from "@/content/site";
import { ArrowRight, CheckCircle, TrendingUp, Brain, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const tracks = [
  { key: "business" as const, icon: TrendingUp, data: growthTracks.business },
  { key: "executive" as const, icon: Brain, data: growthTracks.executive },
];

const Services = () => {
  const [active, setActive] = useState<"business" | "executive">("business");
  const current = tracks.find((t) => t.key === active)!;
  const Icon = current.icon;
  const track = current.data;

  return (
    <PageLayout>
      <SEO {...seo.services} />

      <Section className="pt-24 md:pt-32 pb-4">
        <Reveal>
          <h1 className="text-3xl font-bold md:text-4xl silver-text">{growthTracks.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground font-medium">{growthTracks.sub}</p>
        </Reveal>

        {/* Tab selector */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex gap-2">
            {tracks.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-lg text-base font-semibold transition-all border",
                  active === t.key
                    ? "bg-accent/10 border-accent text-accent"
                    : "border-border/60 text-muted-foreground hover:bg-muted/50"
                )}
              >
                <t.icon className="h-5 w-5" />
                {t.data.label}
              </button>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border/60 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon className="h-8 w-8 text-accent" />
              <h2 className="text-2xl font-bold md:text-3xl">{track.label}</h2>
            </div>
            <p className="text-base text-muted-foreground mb-8 font-medium">{track.audience}</p>

            {/* Services grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {track.services.map((s) => (
                <HoverCard key={s.title} className="h-full">
                  <h4 className="text-base font-semibold mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </HoverCard>
              ))}
            </div>

            {/* Outcomes */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 mb-6">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">What This Means For You</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {track.outcomes.map((o) => (
                  <div key={o.title} className="flex items-start gap-2.5">
                    <Zap className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-base font-semibold text-foreground">{o.title}</span>
                      <p className="text-sm text-muted-foreground mt-0.5">{o.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus areas */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 mb-6">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Focus Areas</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {track.focus.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-base text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/contact">
              <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-bold text-base px-8 py-6 group">
                {track.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </Section>
    </PageLayout>
  );
};

export default Services;
