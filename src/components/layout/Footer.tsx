import { Link } from "react-router-dom";
import { footer, siteConfig } from "@/content/site";

const Footer = () => {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <p className="text-lg font-bold text-foreground">
            MAX<span className="text-primary">&lt;&gt;</span>IO
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {footer.links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ))}
            {footer.legal.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="text-sm text-muted-foreground text-right">
            <p>{siteConfig.location}</p>
            <p className="mt-1">{siteConfig.abn}</p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2025 MAX IO Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
