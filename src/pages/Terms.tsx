import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import Reveal from "@/components/animations/Reveal";
import SEO from "@/components/SEO";
import { terms as data, seo } from "@/content/site";

const Terms = () => (
  <PageLayout>
    <SEO {...seo.terms} />
    <Section className="pt-24 md:pt-36">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-5xl">{data.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {data.lastUpdated}</p>
        <div className="mt-8 prose prose-invert prose-sm max-w-3xl">
          {data.content.split("\n\n").map((p, i) => {
            if (p.startsWith("**")) {
              const title = p.match(/\*\*(.*?)\*\*/)?.[1] || "";
              const rest = p.replace(/\*\*.*?\*\*\s*/, "");
              return (
                <div key={i} className="mt-6">
                  <h2 className="text-lg font-semibold text-foreground">{title}</h2>
                  <p className="mt-2 text-muted-foreground">{rest}</p>
                </div>
              );
            }
            return <p key={i} className="text-muted-foreground">{p}</p>;
          })}
        </div>
      </Reveal>
    </Section>
  </PageLayout>
);

export default Terms;
