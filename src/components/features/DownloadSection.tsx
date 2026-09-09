import { Smartphone, Code2, Globe, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LIVE_URL = "https://daood5577.onspace.app";

const downloads = [
  {
    icon: Smartphone,
    title: "Android APK",
    subtitle: "Direct Install",
    description: "Download and install directly on any Android device. No Play Store required — just enable 'Install from unknown sources'.",
    accent: "from-indigo-500 to-violet-500",
    buttonLabel: "Download APK",
    buttonVariant: "primary" as const,
    onClick: () => toast.info("APK build coming soon. Use the Web App version to access all features right now."),
  },
  {
    icon: Code2,
    title: "Source Code",
    subtitle: "For Developers",
    description: "Explore, fork and contribute to the full source code. Open to the community and well-documented for developers.",
    accent: "from-emerald-500 to-teal-500",
    buttonLabel: "View Source",
    buttonVariant: "secondary" as const,
    onClick: () => toast.info("Source code will be published at release. Stay tuned for the GitHub repository link."),
  },
  {
    icon: Globe,
    title: "Web App",
    subtitle: "Live Now",
    description: "Access the full app directly from your browser on any device — Android, iOS, or desktop. No installation needed.",
    accent: "from-amber-500 to-orange-500",
    buttonLabel: "Open Web App",
    buttonVariant: "feature" as const,
    onClick: () => window.open(LIVE_URL, "_blank", "noopener,noreferrer"),
  },
];

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 scroll-mt-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4 uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
            Get the{" "}
            <span className="gradient-text">App</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg max-w-lg mx-auto">
            Access EvEr SmArT KnOwLeDgE hUb on any device, anywhere.
          </p>

          {/* Live URL Banner */}
          <div className="mt-6 inline-flex items-center gap-3 bg-card border border-primary/30 rounded-xl px-4 py-3 shadow-md">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-sm text-muted-foreground hidden sm:inline">Live at:</span>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline break-all"
            >
              {LIVE_URL}
            </a>
            <ExternalLink size={13} className="text-muted-foreground flex-shrink-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {downloads.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 card-hover flex flex-col items-center text-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon size={26} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  {item.subtitle}
                </span>
                <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <Button
                  className={`w-full rounded-xl font-semibold min-h-[44px] ${
                    item.buttonVariant === "primary"
                      ? "gradient-brand border-0 text-white shadow-md"
                      : item.buttonVariant === "feature"
                      ? "bg-amber-500 hover:bg-amber-600 border-0 text-white shadow-md"
                      : ""
                  }`}
                  variant={item.buttonVariant === "secondary" ? "outline" : "default"}
                  onClick={item.onClick}
                >
                  {item.buttonLabel}
                  <ArrowRight size={15} className="ml-2" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Info note */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          The web app URL becomes live once published via OnSpace. Click{" "}
          <strong className="text-foreground">Publish</strong> in the top-right toolbar and enter{" "}
          <strong className="text-primary">daood5577</strong> as your subdomain.
        </p>
      </div>
    </section>
  );
}
