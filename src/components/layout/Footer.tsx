import { Link } from "react-router-dom";
import { BookOpen, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleAnchorClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-md">
                <BookOpen size={18} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-sm gradient-text">EvEr SmArT</p>
                <p className="text-muted-foreground text-xs">KnOwLeDgE hUb</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Offline-first digital knowledge platform. Books, Reader, Smart Studio — all in one app.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Features", href: "/#features" },
                { label: "Download", href: "/#download" },
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleAnchorClick(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>&copy; {year} EvEr SmArT KnOwLeDgE hUb. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={13} className="text-red-500 fill-red-500" />
            <span>for knowledge seekers</span>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3">
          ⚠️ This software is provided "as is" without warranty. See disclaimer for details.
        </p>
      </div>
    </footer>
  );
}
