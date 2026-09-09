import { AlertTriangle, Scale, FileText, BookMarked } from "lucide-react";

const sections = [
  {
    icon: AlertTriangle,
    title: "No Warranty",
    accent: "from-amber-500 to-orange-500",
    content: [
      'This software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      "The authors and contributors make no representations about the suitability of this software for any purpose.",
      "Use of this software is entirely at your own risk. In no event shall the authors be liable for any damages arising from the use of this software.",
    ],
  },
  {
    icon: BookMarked,
    title: "Content Disclaimer",
    accent: "from-indigo-500 to-violet-500",
    content: [
      "Book content included in the Books Store module is sourced from publicly available and officially distributed sources.",
      "We do not claim ownership of any third-party content included in the curated book collections.",
      "All trademarks, book titles, and author names remain the property of their respective owners.",
      "If you believe any content infringes your rights, please contact us and we will address it promptly.",
    ],
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    accent: "from-emerald-500 to-teal-500",
    content: [
      "Under no circumstances shall the developers of EvEr SmArT KnOwLeDgE hUb be liable for any indirect, incidental, special, exemplary, or consequential damages.",
      "This includes, but is not limited to, loss of data, loss of profits, or other intangible losses resulting from the use or inability to use the application.",
      "Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability; in such jurisdictions, liability shall be limited to the fullest extent permitted by law.",
    ],
  },
  {
    icon: FileText,
    title: "Open Source License",
    accent: "from-pink-500 to-rose-500",
    content: [
      "The source code of EvEr SmArT KnOwLeDgE hUb is made available under an open source license.",
      "You are free to use, modify, and distribute the code in accordance with the terms of the applicable license.",
      "Any modifications must be clearly marked as changes from the original software.",
      "The original copyright notices and license terms must be preserved in all copies and distributions.",
    ],
  },
];

export default function Disclaimer() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4 uppercase tracking-wider">
            Legal
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            <span className="gradient-text">Disclaimer</span>
          </h1>
          <p className="text-muted-foreground text-base">
            Last updated: June 2026
          </p>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            Please read this disclaimer carefully before using EvEr SmArT KnOwLeDgE hUb.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-10">
          <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm mb-1">
              Important Notice
            </p>
            <p className="text-amber-700 dark:text-amber-400 text-sm leading-relaxed">
              By downloading, installing, or using EvEr SmArT KnOwLeDgE hUb, you acknowledge that
              you have read, understood, and agree to be bound by this disclaimer. If you do not
              agree, please do not use the application.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.accent} rounded-t-2xl`} />
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.accent} flex items-center justify-center shadow-md`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <h2 className="font-display font-semibold text-xl">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            This disclaimer is subject to change without notice. Continued use of the application
            constitutes acceptance of any updated terms.
          </p>
        </div>
      </div>
    </div>
  );
}
