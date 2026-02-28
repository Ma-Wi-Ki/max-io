import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import SEO from "@/components/SEO";
import { contact as data, seo } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Calendar, CheckCircle, Loader2 } from "lucide-react";

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

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

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
      <SEO {...seo.contact} />

      <Section className="pt-24 md:pt-36">
        <Reveal>
          <h1 className="text-4xl font-extrabold md:text-5xl">{data.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{data.sub}</p>
        </Reveal>
      </Section>

      {/* Booking Embed Placeholder */}
      <Section className="border-t border-border">
        <Reveal>
          <div className="rounded-lg border border-border bg-card p-8 text-center max-w-2xl mx-auto">
            <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Schedule a Screening Call</h2>
            <p className="text-sm text-muted-foreground">
              Calendly or booking embed goes here. Replace this placeholder with your scheduling tool embed.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Screening Questions */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-3xl mb-6">Before we chat, consider these five questions:</h2>
          <div className="space-y-3 max-w-2xl">
            {data.questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{q}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Lead Form */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-3xl mb-8">Or send us your details</h2>
        </Reveal>
        <Reveal delay={0.1}>
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
                    {data.budgetRanges.map((b) => (
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

export default Contact;
