import { Link } from "@tanstack/react-router";
import { Heart, Facebook, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-warm shadow-soft">
              <Heart className="h-6 w-6 text-warm-foreground" fill="currentColor" />
            </span>
            <span className="text-xl font-bold">Companion Connect</span>
          </div>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            A warm, friendly community for older adults — built to help you stay connected,
            active, and supported, every day.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-soft transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@companionconnect.org"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-soft transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+18005550199"
              aria-label="Phone"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-soft transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold uppercase tracking-wider text-foreground/80">Explore</h3>
          <ul className="mt-4 space-y-2 text-base">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/features" className="hover:text-primary">Features</Link></li>
            <li><Link to="/events" className="hover:text-primary">Events</Link></li>
            <li><Link to="/resources" className="hover:text-primary">Resources</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold uppercase tracking-wider text-foreground/80">Support</h3>
          <ul className="mt-4 space-y-2 text-base">
            <li><Link to="/contact" className="hover:text-primary">Contact &amp; Help</Link></li>
            <li><Link to="/signup" className="hover:text-primary">Sign Up / Login</Link></li>
            <li><a href="tel:+18005550199" className="hover:text-primary">Call us: 1-800-555-0199</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 px-5 py-6 text-center text-sm text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} Companion Connect. Made with care for older adults everywhere.
      </div>
    </footer>
  );
}
