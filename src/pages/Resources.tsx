import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { about, caseStudies, seo } from "@/content/site";
import { CheckCircle, User, ArrowRight, ChevronDown } from "lucide-react";

const pillarIcons = ["⚡", "⚙️", "🎯", "🧠", "🚀"];

const Resources = () => {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState(0);

  return (
    <PageLayout>
      <SEO {...seo.resources} />

      <Section className="pt-24 md:pt-32">
        <Reveal>
          <h1 className="text-3xl font-bold md:text-4xl">{about.title}</h1>
        </Reveal>

        {/* Founder — compact */}
        <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr] items-start">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center md:items-start">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-lg bg-card border border-border/60 flex items-center justify-center overflow-hidden">
                <User className="h-16 w-16 text-accent/40" />
              </div>
              <h3 className="text-xl font-bold mt-3">{about.founder.name}</h3>
              <p className="text-sm text-muted-foreground font-medium">Founder & Principal</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-3">
              {about.founder.bio.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Company */}
        <div className="mt-8 border-t border-border/60 pt-6">
          <Reveal delay={0.1}>
            <h3 className="text-2xl font-bold mb-1">{about.company.name}</h3>
            <p className="text-lg font-semibold text-foreground/90">{about.company.description}</p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground max-w-3xl">
              {about.company.manifesto.join(" ")}
            </p>
          </Reveal>

          {/* Interactive Pillars — accordion style */}
          <Reveal delay={0.15}>
            <div className="mt-8">
              <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">What We Do</p>
              <div className="space-y-2">
                {about.company.pillars.map((pillar, i) => {
                  const isOpen = expandedPillar === i;
                  return (
                    <motion.div
                      key={pillar.title}
                      className="rounded-lg border border-border/60 bg-card overflow-hidden cursor-pointer"
                      onClick={() => setExpandedPillar(isOpen ? null : i)}
                      whileHover={{ borderColor: "hsl(210 40% 58% / 0.5)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{pillarIcons[i]}</span>
                          <span className="text-base font-semibold text-foreground">{pillar.title}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </motion.div>
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                              {pillar.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Process — horizontal stepper */}
          <Reveal delay={0.2}>
            <div className="mt-10">
              <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-5">How We Work</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {about.company.process.map((s) => (
                  <HoverCard key={s.step} className="p-4 text-center">
                    <span className="text-2xl font-bold text-accent block">{s.step}</span>
                    <p className="text-base font-semibold text-foreground mt-1">{s.title}</p>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
                  </HoverCard>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Outcomes — compact row */}
          <Reveal delay={0.25}>
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {about.company.outcomes.map((o) => (
                <div key={o.title} className="flex items-start gap-2 text-base py-1.5">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span><span className="font-semibold text-foreground">{o.title}</span> <span className="text-muted-foreground">— {o.desc}</span></span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Case Studies — tabbed */}
      <Section className="border-t border-border/60">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-3xl mb-2">Case Studies</h2>
          <p className="text-muted-foreground mb-6 text-base font-medium">From trades to tech — structured systems for every stage.</p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Tab buttons */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {caseStudies.map((cs, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${
                  activeCase === i
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-muted-foreground border-border/60 hover:border-accent/50"
                }`}
              >
                {cs.industry}
              </button>
            ))}
          </div>

          {/* Active case */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-border/60 bg-card p-6"
            >
              <div className="grid gap-6 md:grid-cols-3">
                {(["problem", "solution", "result"] as const).map((key) => (
                  <div key={key}>
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{key}</p>
                    <p className="text-base text-muted-foreground leading-relaxed">{caseStudies[activeCase][key]}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </Section>

      <Section className="border-t border-border/60">
        <Reveal>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold md:text-3xl">Let's see if there's a fit.</h2>
            <p className="mt-3 text-muted-foreground text-base font-medium">
              A short, practical conversation about where you are and where you want to be.
            </p>
            <Link to="/contact" className="inline-block mt-6">
              <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-bold text-base px-8 py-6 group">
                Book a Screening Call <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </Section>
    </PageLayout>
  );
};

export default Resources;
