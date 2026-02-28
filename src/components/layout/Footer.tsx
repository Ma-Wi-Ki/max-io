import { Link } from "react-router-dom";
import { footer, siteConfig } from "@/content/site";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container grid gap-8 md:grid-cols-3">
      <div>
        <p className="text-lg font-bold text-foreground">
          MAX<span className="text-primary">&lt;&gt;</span>IO
        </p>
        <p className="mt-2 text-sm text-muted-foreground max-w-xs">{footer.tagline}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Contact</p>
        <p className="text-sm text-muted-foreground">{footer.contact.email}</p>
        <p className="text-sm text-muted-foreground">{footer.contact.phone}</p>
        <p className="text-sm text-muted-foreground mt-2">{footer.abn}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-4">
          {footer.socials.map((s) => (
            <a key={s.label} href={s.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          {footer.legal.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="container mt-8 pt-4 border-t border-border">
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
