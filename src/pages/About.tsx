import { BookOpen, Users, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "We believe your data belongs to you. Every feature is designed to work without sending a single byte to any server.",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    icon: BookOpen,
    title: "Knowledge Access",
    description:
      "Quality educational content should be accessible to everyone, regardless of internet connectivity or location.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Lightbulb,
    title: "Smart Tools",
    description:
      "Creative and productivity tools should be powerful yet simple. Our Smart Studio brings studio-grade tools to everyone.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Built with and for the community. Open source, transparent, and always improving based on real user needs.",
    accent: "from-pink-500 to-rose-500",
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4 uppercase tracking-wider">
            About Us
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6">
            About{" "}
            <span className="gradient-text">EvEr SmArT</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            EvEr SmArT KnOwLeDgE hUb is an offline-first digital knowledge platform built for
            learners, creators, and professionals who value privacy and accessibility.
          </p>
        </div>

        {/* Story */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-12 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-5">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              EvEr SmArT KnOwLeDgE hUb was born from a simple frustration: most knowledge tools
              require constant internet connectivity, track your reading habits, and store your data
              on remote servers you have no control over.
            </p>
            <p>
              We set out to build something different — a comprehensive platform that puts the user
              in complete control. No analytics, no cloud sync, no subscription walls. Just powerful
              tools that work offline, always.
            </p>
            <p>
              The result is a three-module ecosystem: a curated Books Store for quality educational
              content, a Reader Workspace for local file management, and a Smart Studio packed with
              creative productivity tools. All working seamlessly, completely offline.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="relative bg-card border border-border rounded-2xl p-6 overflow-hidden card-hover"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.accent} rounded-t-2xl`} />
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${value.accent} flex items-center justify-center mb-4 shadow-md`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team note */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <div className="gradient-brand rounded-2xl p-8 text-white shadow-xl">
            <h3 className="font-display font-bold text-xl mb-3">Get in Touch</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              We're a small team passionate about offline-first technology. Have feedback, ideas, or
              want to contribute? We'd love to hear from you through our open source community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
