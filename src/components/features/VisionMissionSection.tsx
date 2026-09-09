import { Target, Rocket } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section id="vision" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4 uppercase tracking-wider">
            Our Purpose
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
            Vision &{" "}
            <span className="gradient-text">Mission</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Vision */}
          <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 overflow-hidden card-hover">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-t-2xl" />
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-5 shadow-md">
              <Target size={20} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              To empower every learner, creator, and professional with a privacy-first digital
              knowledge ecosystem that works on any device — Android, iOS, or desktop — without
              barriers.
            </p>
          </div>

          {/* Mission */}
          <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 overflow-hidden card-hover">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-2xl" />
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-5 shadow-md">
              <Rocket size={20} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              To build a unified, accessible, and intelligent platform that brings together curated
              learning resources, powerful reading tools, and creative studio utilities — accessible
              to everyone, everywhere.
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 gradient-brand rounded-2xl p-8 sm:p-10 text-center text-white max-w-3xl mx-auto shadow-xl">
          <h3 className="font-display font-bold text-xl sm:text-3xl mb-3">
            Knowledge without boundaries
          </h3>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
            Whether you're on Android, iPhone, or desktop — EvEr SmArT works for you, on every screen size.
          </p>
        </div>
      </div>
    </section>
  );
}
