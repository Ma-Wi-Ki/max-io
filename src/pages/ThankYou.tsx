import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import SEO from "@/components/SEO";
import { thankYou as data, seo } from "@/content/site";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ThankYou = () => (
  <PageLayout>
    <SEO {...seo.thankYou} />
    <Section className="pt-24 md:pt-36 text-center">
      <Reveal>
        <CheckCircle className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="text-4xl font-extrabold md:text-5xl">{data.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">{data.message}</p>

        <div className="mt-10 max-w-md mx-auto text-left">
          <h2 className="text-lg font-semibold mb-4">What happens next:</h2>
          <ol className="space-y-3">
            {data.nextSteps.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <Link to="/" className="mt-10 inline-block">
          <Button variant="outline" className="border-primary/40 hover:bg-primary/10">Back to Home</Button>
        </Link>
      </Reveal>
    </Section>
  </PageLayout>
);

export default ThankYou;
