import { ArrowRight, BookOpen } from "lucide-react";

const colorStyles = {
  blue: {
    accent: "#3B82F6",
    accentLight: "#60A5FA",
    accentBg: "rgba(59, 130, 246, 0.10)",
    accentBorder: "rgba(59, 130, 246, 0.25)",
    exampleBg: "rgba(59, 130, 246, 0.06)",
  },

  red: {
    accent: "#C62828",
    accentLight: "#EF4444",
    accentBg: "rgba(198, 40, 40, 0.10)",
    accentBorder: "rgba(198, 40, 40, 0.25)",
    exampleBg: "rgba(198, 40, 40, 0.06)",
  },

  green: {
    accent: "#16A34A",
    accentLight: "#4ADE80",
    accentBg: "rgba(22, 163, 74, 0.10)",
    accentBorder: "rgba(22, 163, 74, 0.25)",
    exampleBg: "rgba(22, 163, 74, 0.06)",
  },

  amber: {
    accent: "#D4AF37",
    accentLight: "#E5C75A",
    accentBg: "rgba(212, 175, 55, 0.10)",
    accentBorder: "rgba(212, 175, 55, 0.25)",
    exampleBg: "rgba(212, 175, 55, 0.06)",
  },
};

function CaseCard({ grammarCase }) {
  const styles = colorStyles[grammarCase.color];

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#454545] bg-[#252525] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#666666] hover:bg-[#292929] hover:shadow-xl hover:shadow-black/30">
      {/* Accent Line */}
      <div
        className="absolute left-0 top-0 h-1 w-full opacity-70"
        style={{
          background: styles.accent,
        }}
      />

      {/* Subtle Glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-10 transition-opacity duration-300 group-hover:opacity-20"
        style={{
          background: styles.accent,
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border"
            style={{
              background: styles.accentBg,
              borderColor: styles.accentBorder,
            }}
          >
            <BookOpen
              className="h-6 w-6"
              style={{
                color: styles.accentLight,
              }}
            />
          </div>

          <span
            className="rounded-full border px-3 py-1.5 text-xs font-semibold"
            style={{
              background: styles.accentBg,
              borderColor: styles.accentBorder,
              color: styles.accentLight,
            }}
          >
            {grammarCase.progress}% completed
          </span>
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {grammarCase.name}
          </h3>

          <p
            className="mt-1 font-medium"
            style={{
              color: styles.accentLight,
            }}
          >
            {grammarCase.subtitle}
          </p>

          <p className="mt-4 min-h-[48px] text-sm leading-relaxed text-[#B0B0B0]">
            {grammarCase.description}
          </p>
        </div>

        {/* Example */}
        <div
          className="mt-5 rounded-xl border p-4"
          style={{
            background: styles.exampleBg,
            borderColor: styles.accentBorder,
          }}
        >
          <p className="text-base font-semibold text-white">
            {grammarCase.example}
          </p>

          <p className="mt-2 text-sm text-[#A3A3A3]">
            {grammarCase.translation}
          </p>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-[#737373]">Learning Progress</span>

            <span
              className="font-semibold"
              style={{
                color: styles.accentLight,
              }}
            >
              {grammarCase.progress}%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-[#383838]">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${grammarCase.progress}%`,
                background: styles.accent,
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <button className="mt-5 flex w-full items-center justify-between rounded-xl border border-[#383838] bg-[#2B2B2B] px-4 py-3 text-sm font-semibold transition-all duration-200 group-hover:border-[#555555] group-hover:bg-[#333333]">
          <span
            style={{
              color: styles.accentLight,
            }}
          >
            Start Learning
          </span>

          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            style={{
              color: styles.accentLight,
            }}
          />
        </button>
      </div>
    </article>
  );
}

export default CaseCard;
