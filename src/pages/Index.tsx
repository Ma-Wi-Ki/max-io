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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  hero,
  about,
  growthTracks,
  ecosystem,
  contact,
  seo } from
"@/content/site";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  Loader2,
  TrendingUp,
  Brain,
  Newspaper,
  Video,
  Mic,
  Mail,
  User,
  Handshake } from
"lucide-react";

/* ── Form schema ── */
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
  notes: z.string().trim().max(2000).optional()
});
type FormData = z.infer<typeof formSchema>;

const ecosystemIcons = [Newspaper, Video, Mic];

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [subEmail, setSubEmail] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
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
        notes: values.notes || null
      });
      if (error) throw error;
      navigate("/thank-you");
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail.trim()) return;
    setSubscribing(true);
    try {
      const { error } = await supabase.
      from("newsletter_subscribers").
      insert({ email: subEmail.trim() });
      if (error) {
        if (error.code === "23505") {
          toast({ title: "You're already subscribed!" });
        } else {
          throw error;
        }
      } else {
        toast({ title: "Subscribed!", description: "Welcome to the operator memo." });
        setSubEmail("");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <PageLayout>
      <SEO {...seo.home} />

      {/* ── HERO ── */}
      <Section className="pt-28 md:pt-36 pb-20">
        <Reveal>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl max-w-4xl silver-text">
            Max. Input, Max. Output
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl md:text-xl">
            {hero.sub}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button
                size="lg"
                className="sheen-hover silver-gradient text-primary-foreground font-semibold">
                {hero.cta1}
              </Button>
            </a>
            <a href="#growth-tracks">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 hover:bg-primary/10">
                {hero.cta2} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 text-sm text-muted-foreground/70">{hero.trust}</p>
        </Reveal>
        <div className="mt-14 h-px w-full max-w-md bg-gradient-to-r from-accent/40 via-primary/20 to-transparent" />
      </Section>

      {/* ── ABOUT ── */}
      <Section id="about" className="border-t border-border/60">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{about.title}</h2>
        </Reveal>

        {/* Founder — headshot + bio */}
        <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr] items-start">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center md:items-start">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg bg-card border border-border/60 flex items-center justify-center overflow-hidden">
                <User className="h-20 w-20 text-accent/40" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{about.founder.name}</h3>
              <p className="text-xs text-muted-foreground">Founder & Principal</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-4">
              {about.founder.bio.map((paragraph, i) =>
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              )}
            </div>
          </Reveal>
        </div>

        {/* Company + Manifesto */}
        <div className="mt-14 border-t border-border/60 pt-10">
          <Reveal delay={0.1}>
            <h3 className="text-2xl font-bold mb-3">{about.company.name}</h3>
            <p className="text-base leading-relaxed text-muted-foreground max-w-3xl">
              {about.company.description}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 space-y-4 max-w-3xl">
              {about.company.manifesto.map((p, i) =>
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              )}
            </div>
          </Reveal>

          {/* AI use cases */}
          <Reveal delay={0.2}>
            <div className="mt-8 max-w-3xl">
              <p className="text-sm font-medium text-foreground mb-3">
                We use AI agents and automation deliberately:
              </p>
              <ul className="space-y-1.5 mb-4">
                {about.company.aiUseCases.map((uc) =>
                <li key={uc} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {uc}
                  </li>
                )}
              </ul>
              <p className="text-sm font-semibold text-foreground italic">
                {about.company.aiDisclaimer}
              </p>
            </div>
          </Reveal>

          {/* What we deliver */}
          <Reveal delay={0.25}>
            <div className="mt-10">
              <p className="text-sm font-medium text-foreground mb-4">What we deliver</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {about.company.capabilities.map((c) =>
                <li key={c.title} className="text-sm flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">{c.title}</span>
                      <span className="text-muted-foreground"> — {c.desc}</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Partner Network */}
        <div className="mt-14 border-t border-border/60 pt-10">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-3">
              <Handshake className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">{about.partners.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-3xl">
              {about.partners.description}
            </p>
          </Reveal>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-3">
            {about.partners.agencies.map((partner, i) =>
            <StaggerItem key={i}>
                <HoverCard className="h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-muted border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-muted-foreground">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm">{partner.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{partner.specialty}</p>
                </HoverCard>
              </StaggerItem>
            )}
          </Stagger>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-sm text-muted-foreground">{about.closing}</p>
        </Reveal>
      </Section>

      {/* ── GROWTH TRACKS ── */}
      <Section id="growth-tracks" className="border-t border-border/60">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Business Growth */}
          <Reveal delay={0.1}>
            <HoverCard className="h-full flex flex-col">
              <TrendingUp className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-1">
                {growthTracks.business.label}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {growthTracks.business.audience}
              </p>
              <p className="text-sm font-medium text-foreground mb-3">What we do</p>
              <ul className="space-y-3 mb-6">
                {growthTracks.business.services.map((s) =>
                <li key={s.title} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{s.title}</span>
                      <span className="text-sm text-muted-foreground"> — {s.desc}</span>
                    </div>
                  </li>
                )}
              </ul>
              <p className="text-sm font-medium text-foreground mb-2">Focus</p>
              <ul className="space-y-1.5 mb-6">
                {growthTracks.business.focus.map((f) =>
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                )}
              </ul>
              <div className="mt-auto">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="sheen-hover silver-gradient text-primary-foreground font-semibold w-full">
                    {growthTracks.business.cta}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </HoverCard>
          </Reveal>

          {/* Executive Growth */}
          <Reveal delay={0.2}>
            <HoverCard className="h-full flex flex-col">
              <Brain className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-1">
                {growthTracks.executive.label}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {growthTracks.executive.audience}
              </p>
              <p className="text-sm font-medium text-foreground mb-3">What we do</p>
              <ul className="space-y-3 mb-6">
                {growthTracks.executive.services.map((s) =>
                <li key={s.title} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{s.title}</span>
                      <span className="text-sm text-muted-foreground"> — {s.desc}</span>
                    </div>
                  </li>
                )}
              </ul>
              <p className="text-sm font-medium text-foreground mb-2">Focus</p>
              <ul className="space-y-1.5 mb-6">
                {growthTracks.executive.focus.map((f) =>
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                )}
              </ul>
              <div className="mt-auto">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="sheen-hover silver-gradient text-primary-foreground font-semibold w-full">
                    {growthTracks.executive.cta}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </HoverCard>
          </Reveal>
        </div>
      </Section>


      {/* ── ECOSYSTEM ── */}
      <Section id="ecosystem" className="border-t border-border/60">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{ecosystem.title}</h2>
          <p className="mt-3 text-lg text-muted-foreground">{ecosystem.sub}</p>
        </Reveal>
        <Stagger className="mt-8 grid gap-6 md:grid-cols-3">
          {ecosystem.blocks.map((block, i) => {
            const Icon = ecosystemIcons[i];
            return (
              <StaggerItem key={block.title}>
                <HoverCard className="h-full">
                  <Icon className="h-7 w-7 text-accent mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{block.title}</h3>
                  <p className="text-sm text-muted-foreground">{block.desc}</p>
                </HoverCard>
              </StaggerItem>);

          })}
        </Stagger>

        {/* Newsletter subscribe */}
        <Reveal delay={0.2}>
          <div className="mt-10 max-w-md">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Mail className="h-5 w-5 text-accent" /> Subscribe
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the weekly operator memo in your inbox.
            </p>
            <form
              onSubmit={onSubscribe}
              className="flex flex-col sm:flex-row gap-3">

              <Input
                type="email"
                placeholder="you@company.com"
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                required
                className="flex-1" />

              <Button
                type="submit"
                disabled={subscribing}
                className="sheen-hover silver-gradient text-primary-foreground font-semibold">

                {subscribing ?
                <Loader2 className="h-4 w-4 animate-spin" /> :

                "Subscribe"
                }
              </Button>
            </form>
          </div>
        </Reveal>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" className="border-t border-border/60">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{contact.title}</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            {contact.sub}
          </p>
        </Reveal>

        {/* Booking placeholder */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-lg border border-accent/20 bg-card p-8 text-center max-w-2xl">
            <Calendar className="mx-auto h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Schedule a Screening Call
            </h3>
            <p className="text-sm text-muted-foreground">
              Calendly or booking embed goes here. Replace this placeholder with
              your scheduling tool embed.
            </p>
          </div>
        </Reveal>


        {/* Lead form */}
        <Reveal delay={0.2}>
          <h3 className="text-xl font-semibold mt-10 mb-5">
            Or send us your details
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl space-y-6">

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Your name" />

                {errors.name &&
                <p className="text-xs text-destructive">
                    {errors.name.message}
                  </p>
                }
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="you@company.com" />

                {errors.email &&
                <p className="text-xs text-destructive">
                    {errors.email.message}
                  </p>
                }
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="+61..." />

              </div>
              <div className="space-y-2">
                <Label htmlFor="business_name">Business Name</Label>
                <Input
                  id="business_name"
                  {...register("business_name")}
                  placeholder="Your business" />

              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  {...register("industry")}
                  placeholder="e.g. Trades" />

              </div>
              <div className="space-y-2">
                <Label htmlFor="headcount">Headcount</Label>
                <Input
                  id="headcount"
                  {...register("headcount")}
                  placeholder="e.g. 10" />

              </div>
              <div className="space-y-2">
                <Label htmlFor="budget_range">Budget Range</Label>
                <Select onValueChange={(v) => setValue("budget_range", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {contact.budgetRanges.map((b) =>
                    <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="current_tools">Current Tools</Label>
              <Textarea
                id="current_tools"
                {...register("current_tools")}
                placeholder="What tools/systems do you currently use?"
                rows={2} />

            </div>

            <div className="space-y-2">
              <Label htmlFor="top_bottleneck">Top Bottleneck</Label>
              <Textarea
                id="top_bottleneck"
                {...register("top_bottleneck")}
                placeholder="What's the biggest thing slowing you down?"
                rows={2} />

            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                {...register("notes")}
                placeholder="Anything else we should know?"
                rows={3} />

            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="sheen-hover silver-gradient text-primary-foreground font-semibold">

              {submitting ?
              <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </> :

              "Submit"
              }
            </Button>
          </form>
        </Reveal>
      </Section>
    </PageLayout>);

};

export default Index;