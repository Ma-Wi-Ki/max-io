import { Link } from "react-router-dom";
import { footer, siteConfig } from "@/content/site";
import logo from "@/assets/max-io-logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MAX.io logo" className="h-10 w-auto" />
        </Link>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {footer.links.map((l) => (
            <Link key={l.href} to={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
          {footer.legal.map((l) => (
            <Link key={l.href} to={l.href} className="hover:text-foreground transition-colors">
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
        <p className="text-xs text-muted-foreground">© 2025 MAX IO Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
