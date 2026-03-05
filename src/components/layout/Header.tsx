import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-xl font-bold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="opacity-60 mr-1">&lt;</span> MAX.io <span className="opacity-60 ml-1">&gt;</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                location.pathname === link.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to={nav.cta.href} className="ml-2">
            <Button className="sheen-hover silver-gradient text-primary-foreground font-semibold">
              {nav.cta.label}
            </Button>
          </Link>
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
                location.pathname === link.href ? "text-foreground" : "text-muted-foreground"
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
