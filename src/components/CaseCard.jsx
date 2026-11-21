import { ArrowRight, BookOpen } from "lucide-react";

const colorStyles = {
  blue: {
    background: "bg-blue-50",
    icon: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    border: "border-blue-100",
  },

  red: {
    background: "bg-red-50",
    icon: "text-red-600",
    badge: "bg-red-100 text-red-700",
    border: "border-red-100",
  },

  green: {
    background: "bg-green-50",
    icon: "text-green-600",
    badge: "bg-green-100 text-green-700",
    border: "border-green-100",
  },

  amber: {
    background: "bg-amber-50",
    icon: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    border: "border-amber-100",
  },
};

function CaseCard({ grammarCase }) {
  const styles = colorStyles[grammarCase.color];

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Card Header */}
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.background}`}
        >
          <BookOpen className={`h-6 w-6 ${styles.icon}`} />
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
        >
          {grammarCase.progress}% completed
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-xl font-bold text-slate-900">{grammarCase.name}</h3>

        <p className="mt-1 text-sm text-slate-500">{grammarCase.subtitle}</p>

        <p className="mt-3 min-h-10 text-sm leading-relaxed text-slate-600">
          {grammarCase.description}
        </p>
      </div>

      {/* Example */}
      <div
        className={`mt-4 rounded-xl border p-3 ${styles.background} ${styles.border}`}
      >
        <p className="font-semibold text-slate-800">{grammarCase.example}</p>

        <p className="mt-1 text-sm text-slate-600">{grammarCase.translation}</p>
      </div>

      {/* Footer */}
      <button className="mt-5 flex w-full items-center justify-between rounded-xl px-1 py-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-600">
        <span>Start Learning</span>

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </article>
  );
}

export default CaseCard;
