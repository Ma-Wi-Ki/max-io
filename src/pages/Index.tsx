import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import HoverCard from "@/components/animations/HoverCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  hero,
  about,
  services,
  outcomes,
  clients,
  contact,
  seo,
} from "@/content/site";
import {
  ArrowRight,
  Zap,
  Shield,
  BookOpen,
  Brain,
  CheckCircle,
  Calendar,
  Loader2,
} from "lucide-react";

const iconMap = [Zap, Shield, BookOpen, Brain];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(30).optional(),
  business_name: z.string().trim().max(200).optional(),
  industry: z.string().trim().max(100).optional(),
  headcount: z.string().trim().max(50).optional(),
  current_tools: z.string().trim().max(1000).optional(),
  top_bottleneck: z.string().trim().max(1000).optional(),
  budget_range: z.string().optional(),
  notes: z.string().trim().max(2000).optional(),
});
type FormData = z.infer<typeof formSchema>;

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: FormData) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: values.name,
        email: values.email,
        phone: values.phone || null,
        business_name: values.business_name || null,
        industry: values.industry || null,
        headcount: values.headcount || null,
        current_tools: values.current_tools || null,
        top_bottleneck: values.top_bottleneck || null,
        budget_range: values.budget_range || null,
        notes: values.notes || null,
      });
      if (error) throw error;
      navigate("/thank-you");
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <SEO {...seo.home} />

      {/* ── HERO ── */}
      <Section className="pt-24 md:pt-36 pb-28">
        <Reveal>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl max-w-4xl">
            {hero.h1}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl md:text-xl">
            {hero.sub}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button
                size="lg"
                className="sheen-hover silver-gradient text-primary-foreground font-semibold"
              >
                {hero.cta1}
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 hover:bg-primary/10"
              >
                {hero.cta2} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 text-sm text-muted-foreground">{hero.trust}</p>
        </Reveal>
        {/* subtle accent line */}
        <div className="mt-16 h-px w-full max-w-md silver-gradient opacity-40" />
      </Section>

      {/* ── ABOUT ── */}
      <Section id="about" className="border-t border-border">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{about.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div>
              <h3 className="text-xl font-semibold mb-3">{about.founder.name}</h3>
              <ul className="space-y-2">
                {about.founder.lines.map((l) => (
                  <li key={l} className="text-sm text-muted-foreground">{l}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                MAX<span className="text-primary">&lt;&gt;</span>IO Group
              </h3>
              <ul className="space-y-2">
                {about.company.lines.map((l) => (
                  <li key={l} className="text-sm text-muted-foreground">{l}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <p className="mt-10 text-sm text-muted-foreground">{about.closing}</p>
        </Reveal>
      </Section>

      {/* ── SERVICES ── */}
      <Section id="services" className="border-t border-border">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{services.title}</h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
          {services.cards.map((card, i) => {
            const Icon = iconMap[i];
            return (
              <StaggerItem key={card.title}>
                <HoverCard className="h-full">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{card.desc}</p>
                  {card.targets.length > 0 && (
                    <ul className="space-y-1">
                      {card.targets.map((t) => (
                        <li key={t} className="text-xs text-primary flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 shrink-0" /> {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </HoverCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Partners */}
        <div className="mt-16 pt-10 border-t border-border">
          <Reveal>
            <h3 className="text-xl font-semibold">{services.partners.title}</h3>
          </Reveal>
          <Stagger className="mt-6 grid gap-6 md:grid-cols-3">
            {services.partners.list.map((p) => (
              <StaggerItem key={p.name}>
                <HoverCard>
                  <h4 className="text-lg font-semibold mb-2">{p.name}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <p className="mt-6 text-sm text-muted-foreground">{services.partners.closing}</p>
          </Reveal>
        </div>
      </Section>

      {/* ── OUTCOMES ── */}
      <Section id="outcomes" className="border-t border-border">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{outcomes.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Before</h3>
              <ul className="space-y-3">
                {outcomes.before.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">After (Targets)</h3>
              <ul className="space-y-3">
                {outcomes.after.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <p className="mt-6 text-sm text-muted-foreground">{outcomes.note}</p>
        </Reveal>
      </Section>

      {/* ── CLIENTS ── */}
      <Section id="clients" className="border-t border-border">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{clients.title}</h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          {clients.cases.map((c) => (
            <StaggerItem key={c.title}>
              <HoverCard className="h-full">
                <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">Constraint:</span> {c.constraint}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Focus:</span> {c.focus}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <p className="mt-6 text-xs text-muted-foreground italic">{clients.label}</p>
        </Reveal>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" className="border-t border-border">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{contact.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{contact.sub}</p>
        </Reveal>

        {/* Booking placeholder */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-lg border border-border bg-card p-8 text-center max-w-2xl">
            <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Schedule a Screening Call</h3>
            <p className="text-sm text-muted-foreground">
              Calendly or booking embed goes here. Replace this placeholder with your scheduling tool embed.
            </p>
          </div>
        </Reveal>

        {/* Screening questions */}
        <Reveal delay={0.15}>
          <h3 className="text-xl font-semibold mt-14 mb-4">Five screening questions</h3>
          <div className="space-y-3 max-w-2xl">
            {contact.questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{q}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Lead form */}
        <Reveal delay={0.2}>
          <h3 className="text-xl font-semibold mt-14 mb-6">Or send us your details</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl space-y-6">
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

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" {...register("industry")} placeholder="e.g. Trades" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="headcount">Headcount</Label>
                <Input id="headcount" {...register("headcount")} placeholder="e.g. 10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget_range">Budget Range</Label>
                <Select onValueChange={(v) => setValue("budget_range", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {contact.budgetRanges.map((b) => (
                      <SelectItem key={b} value={b}>{b}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="current_tools">Current Tools</Label>
              <Textarea id="current_tools" {...register("current_tools")} placeholder="What tools/systems do you currently use?" rows={2} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="top_bottleneck">Top Bottleneck</Label>
              <Textarea id="top_bottleneck" {...register("top_bottleneck")} placeholder="What's the biggest thing slowing you down?" rows={2} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" {...register("notes")} placeholder="Anything else we should know?" rows={3} />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="sheen-hover silver-gradient text-primary-foreground font-semibold"
            >
              {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Submit"}
            </Button>
          </form>
        </Reveal>
      </Section>
    </PageLayout>
  );
};

export default Index;
