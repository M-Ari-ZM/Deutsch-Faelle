import { ArrowRight, BookOpen } from "lucide-react";

function ProgressCard() {
  const progress = 45;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#C62828]/30 bg-gradient-to-br from-[#292929] via-[#222222] to-[#171717] p-6">
      {/* Decorative Background */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C62828]/10 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-[#D4AF37]">
              Continue Learning
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">Nominativ</h2>

            <p className="mt-1 text-sm text-[#A3A3A3]">Das Subjekt im Satz</p>
          </div>

          <div className="rounded-xl border border-[#383838] bg-[#292929] p-3">
            <BookOpen className="h-6 w-6 text-[#D4AF37]" />
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-[#A3A3A3]">Learning Progress</span>

            <span className="font-medium text-[#D4AF37]">{progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#383838]">
            <div
              className="h-full rounded-full bg-[#D4AF37] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 flex items-center gap-2 rounded-xl bg-[#C62828] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#E53935]">
          Continue Learning
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

export default ProgressCard;
