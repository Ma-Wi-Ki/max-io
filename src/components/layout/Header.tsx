import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const anchorLinks = nav.links.filter((l) => l.href.startsWith("#"));
  const sectionIds = anchorLinks.map((l) => l.href.replace("#", ""));

  const handleScroll = useCallback(() => {
    if (!isHome) return;
    const offset = 100;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.getBoundingClientRect().top <= offset) {
        setActive(sectionIds[i]);
        return;
      }
    }
    setActive("");
  }, [isHome, sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      if (!isHome) {
        navigate("/" + href);
        return;
      }
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-foreground"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MAX{"<>"}IO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                (link.href.startsWith("#") && active === link.href.replace("#", "")) || location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNav(nav.cta.href)} className="ml-2">
            <Button className="sheen-hover silver-gradient text-primary-foreground font-semibold">
              {nav.cta.label}
            </Button>
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={cn(
                "block w-full text-left py-3 text-sm font-medium transition-colors border-b border-border",
                (link.href.startsWith("#") && active === link.href.replace("#", "")) || location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNav(nav.cta.href)} className="mt-3 block w-full">
            <Button className="w-full sheen-hover silver-gradient text-primary-foreground font-semibold">
              {nav.cta.label}
            </Button>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
