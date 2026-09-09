import { BookOpen, FileText, Palette, Shield, Pen, QrCode } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Books Store",
    description:
      "Curated collection of Android dev, Web Dev, UI/UX, Urdu Literature, English Classics and more — sourced from official channels.",
    badge: "Core",
    accent: "from-indigo-500 to-violet-500",
    featured: true,
  },
  {
    icon: FileText,
    title: "Reader Workspace",
    description:
      "Open local text files with Markdown, HTML, and CSV preview. Take notes, copy, and download content with ease.",
    badge: "Core",
    accent: "from-violet-500 to-purple-500",
    featured: false,
  },
  {
    icon: Palette,
    title: "Smart Studio",
    description:
      "Smart Writer, Prompt Builder, Poster Generator, Color Palette, QR & Meta Generator — powerful creative tools in one place.",
    badge: "Core",
    accent: "from-emerald-500 to-teal-500",
    featured: true,
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays on your device. No tracking, no ads, no data collection. Private by design, always secure.",
    badge: "Privacy",
    accent: "from-amber-500 to-orange-500",
    featured: false,
  },
  {
    icon: Pen,
    title: "Smart Writer",
    description:
      "Context-aware writing tool to draft, edit and refine text using smart prompt templates. Fast and focused.",
    badge: "Studio",
    accent: "from-pink-500 to-rose-500",
    featured: false,
  },
  {
    icon: QrCode,
    title: "QR & Meta Generator",
    description:
      "Generate QR codes and Open Graph meta tags for any content with instant preview and one-tap copy.",
    badge: "Studio",
    accent: "from-sky-500 to-blue-500",
    featured: false,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4 uppercase tracking-wider">
            Core Modules
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
            Everything you need,
            <br />
            <span className="gradient-text">in one platform</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Three powerful modules and six studio tools — a complete digital workspace accessible on any device.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative bg-card border border-border rounded-2xl p-5 sm:p-6 card-hover overflow-hidden ${
                  feature.featured ? "ring-1 ring-primary/20" : ""
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Gradient accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.accent} opacity-80 rounded-t-2xl`} />

                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={20} className="text-white" />
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-semibold text-base sm:text-lg">{feature.title}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-gradient-to-r ${feature.accent} text-white opacity-90 ml-2 flex-shrink-0`}>
                    {feature.badge}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
