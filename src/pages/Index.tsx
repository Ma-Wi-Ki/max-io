import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { hero, growthTracks, seo } from "@/content/site";
import {
  ArrowRight, CheckCircle, Loader2, TrendingUp, Brain,
} from "lucide-react";

/* ── Form schema ── */
const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(30).optional(),
  business_name: z.string().trim().max(200).optional(),
});
type FormData = z.infer<typeof formSchema>;

const CalendlyWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "calendly-inline-widget";
    widgetDiv.setAttribute("data-url", "https://calendly.com/max-io-group?hide_landing_page_details=1&hide_gdpr_banner=1");
    widgetDiv.style.minWidth = "320px";
    widgetDiv.style.height = "290px";
    widgetDiv.style.overflow = "hidden";
    containerRef.current.appendChild(widgetDiv);
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} />;
};

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const {
    register, handleSubmit, formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: FormData) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: values.name, email: values.email,
        phone: values.phone || null, business_name: values.business_name || null,
      });
      if (error) throw error;
      navigate("/thank-you");
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <SEO {...seo.home} />

      {/* ── HERO ── */}
      <Section className="pt-24 md:pt-32 pb-8">
        <Reveal>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl max-w-5xl silver-text">
            Max. Input{"\n"}Max. Output
          </h1>
        </Reveal>
        <Reveal delay={0.15} direction="up">
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl md:text-xl leading-relaxed">{hero.sub}</p>
        </Reveal>
        <Reveal delay={0.25} direction="up">
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button size="lg" className="sheen-hover silver-gradient text-primary-foreground font-semibold text-base px-8 py-6">
                {hero.cta1}
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 text-base px-8 py-6 group">
                {hero.cta2} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mt-8 text-sm text-muted-foreground/60 tracking-wide uppercase">{hero.trust}</p>
        </Reveal>
      </Section>

      {/* ── SERVICES ── */}
      <Section id="services" className="border-t border-border/60">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <HoverCard className="h-full flex flex-col">
              <TrendingUp className="h-6 w-6 text-accent mb-3" />
              <h3 className="text-xl font-bold mb-1">{growthTracks.business.label}</h3>
              <p className="text-xs text-muted-foreground mb-4">{growthTracks.business.audience}</p>
              <ul className="space-y-2 mb-4">
                {growthTracks.business.services.map((s) => (
                  <li key={s.title} className="flex items-start gap-2 group/item cursor-default">
                    <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground"><span className="font-medium text-foreground">{s.title}</span> — {s.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a href="#contact">
                  <Button size="sm" className="sheen-hover silver-gradient text-primary-foreground font-semibold w-full group/btn">
                    {growthTracks.business.cta} <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </div>
            </HoverCard>
          </Reveal>

          <Reveal delay={0.2}>
            <HoverCard className="h-full flex flex-col">
              <Brain className="h-6 w-6 text-accent mb-3" />
              <h3 className="text-xl font-bold mb-1">{growthTracks.executive.label}</h3>
              <p className="text-xs text-muted-foreground mb-4">{growthTracks.executive.audience}</p>
              <ul className="space-y-2 mb-4">
                {growthTracks.executive.services.map((s) => (
                  <li key={s.title} className="flex items-start gap-2 group/item cursor-default">
                    <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground"><span className="font-medium text-foreground">{s.title}</span> — {s.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a href="#contact">
                  <Button size="sm" className="sheen-hover silver-gradient text-primary-foreground font-semibold w-full group/btn">
                    {growthTracks.executive.cta} <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </div>
            </HoverCard>
          </Reveal>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" className="border-t border-border/60">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">Start with a screening call.</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Answer a few questions. We confirm fit. We propose a scope.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 max-w-2xl mx-auto">
            <CalendlyWidget />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex items-center gap-4 my-8 max-w-2xl mx-auto">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" {...register("name")} placeholder="Your name" />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register("email")} placeholder="you@company.com" />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" {...register("phone")} placeholder="+61..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business_name">Business Name</Label>
                <Input id="business_name" {...register("business_name")} placeholder="Your business" />
              </div>
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="sheen-hover silver-gradient text-primary-foreground font-semibold w-full">
              {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Submit"}
            </Button>
          </form>
        </Reveal>
      </Section>
    </PageLayout>
  );
};

export default Index;
