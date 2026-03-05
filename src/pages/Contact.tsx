import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { contact, seo } from "@/content/site";
import { Loader2 } from "lucide-react";

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

const Contact = () => {
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
      <SEO {...seo.contact} />

      <Section className="pt-24 md:pt-32">
        <Reveal>
          <h1 className="text-3xl font-bold md:text-4xl silver-text">{contact.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{contact.sub}</p>
          <p className="mt-2 text-sm text-muted-foreground/70">{contact.description}</p>
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

export default Contact;
