import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import SEO from "@/components/SEO";
import { ecosystem } from "@/content/site";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Newspaper, Video, Mic, BookOpen, Mail, Loader2 } from "lucide-react";

const ecosystemIcons = [Newspaper, Video, Mic, BookOpen];

const Ecosystem = () => {
  const { toast } = useToast();
  const [activeEco, setActiveEco] = useState(0);
  const [subscribing, setSubscribing] = useState(false);
  const [subEmail, setSubEmail] = useState("");

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail.trim()) return;
    setSubscribing(true);
    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({ email: subEmail.trim() });
      if (error) {
        if (error.code === "23505") {
          toast({ title: "You're already subscribed!" });
        } else throw error;
      } else {
        toast({ title: "Subscribed!", description: "Welcome to the operator memo." });
        setSubEmail("");
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <PageLayout>
      <SEO title="Ecosystem — MAX<>IO Group" description="Newsletter, short-form content, podcast, and education from MAX<>IO Group." />

      <Section className="pt-24 md:pt-32">
        <Reveal>
          <h1 className="text-3xl font-bold md:text-4xl">{ecosystem.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{ecosystem.sub}</p>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={0.1} direction="left">
            <div className="flex flex-wrap gap-2 mb-6">
              {ecosystem.blocks.map((block, i) => {
                const Icon = ecosystemIcons[i];
                return (
                  <button
                    key={block.title}
                    onClick={() => setActiveEco(i)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                      activeEco === i
                        ? "bg-accent/15 border-accent/50 text-accent"
                        : "bg-card border-border/60 text-muted-foreground hover:border-accent/30 hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {block.title}
                  </button>
                );
              })}
            </div>
            <motion.div
              key={activeEco}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-border/80 bg-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {(() => { const Icon = ecosystemIcons[activeEco]; return <Icon className="h-6 w-6 text-accent" />; })()}
                  <h3 className="text-xl font-semibold">{ecosystem.blocks[activeEco].title}</h3>
                </div>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {ecosystem.blocks[activeEco].tag}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{ecosystem.blocks[activeEco].desc}</p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.2} direction="right">
            <div className="rounded-xl border border-accent/20 bg-card/50 p-8 flex flex-col justify-center h-full">
              <Mail className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Subscribe to the Operator Memo</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Weekly systems, decisions, and workflows — straight to your inbox.
              </p>
              <form onSubmit={onSubscribe} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" disabled={subscribing} className="sheen-hover silver-gradient text-primary-foreground font-semibold px-6">
                  {subscribing ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Ecosystem;
