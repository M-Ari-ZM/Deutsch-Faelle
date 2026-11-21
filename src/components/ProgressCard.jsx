import { ArrowRight, BookOpen } from "lucide-react";

function ProgressCard() {
  const progress = 45;

  return (
    <section className="rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 p-6 text-white shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-blue-200">Continue Learning</p>

          <h2 className="mt-2 text-2xl font-bold">Nominativ</h2>

          <p className="mt-1 text-sm text-blue-200">Das Subjekt im Satz</p>
        </div>

        <div className="rounded-xl bg-white/10 p-3">
          <BookOpen className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span>Learning progress</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button className="mt-5 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-900 transition hover:bg-blue-50">
        Continue Learning
        <ArrowRight className="h-4 w-4" />
      </button>
    </section>
  );
}

export default ProgressCard;
