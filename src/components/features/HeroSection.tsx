import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Knowledge Hub Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-background" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium mb-6">
          <Sparkles size={13} className="text-yellow-400 flex-shrink-0" />
          Mobile-Friendly &bull; Android Compatible &bull; All Devices
        </div>

        <h1 className="font-display font-bold text-white text-3xl sm:text-5xl lg:text-7xl leading-tight mb-6">
          Your Digital
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Knowledge Hub
          </span>
        </h1>

        <p className="text-white/80 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Books &bull; Reader Workspace &bull; Smart Studio
          <br />
          One unified platform — open and accessible from any device.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 text-base font-semibold gradient-brand border-0 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 rounded-xl min-h-[52px]"
            onClick={() => scrollTo("download")}
          >
            <Download size={18} className="mr-2" />
            Get the App
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-8 text-base font-semibold border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 rounded-xl min-h-[52px]"
            onClick={() => scrollTo("features")}
          >
            Explore Features
            <ArrowDown size={16} className="ml-2" />
          </Button>
        </div>

        {/* Stats Row */}
        <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-sm sm:max-w-lg mx-auto">
          {[
            { label: "Core Modules", value: "3+" },
            { label: "Studio Tools", value: "6+" },
            { label: "Data Privacy", value: "100%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4"
            >
              <p className="text-white font-display font-bold text-xl sm:text-2xl">{stat.value}</p>
              <p className="text-white/60 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("features")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors p-2"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
