import { germanCases } from "../data/cases";
import CaseCard from "../components/CaseCard";
import ProgressCard from "../components/ProgressCard";

import { Target, Trophy, Flame } from "lucide-react";

function Dashboard() {
  return (
    <main className="space-y-8">
      {/* Welcome */}
      <section>
        <p className="text-sm font-medium text-[#D4AF37]">
          Welcome to Deutsch Fälle
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          Hallo, Ari!
        </h1>

        <p className="mt-2 text-[#A3A3A3]">
          Siap melanjutkan perjalanan belajar bahasa Jerman?
        </p>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {/* Lessons */}
        <div className="rounded-2xl border border-[#383838] bg-[#222222] p-5 transition hover:border-[#555555]">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#D4AF37]/10 p-3">
              <Target className="h-5 w-5 text-[#D4AF37]" />
            </div>

            <div>
              <p className="text-sm text-[#A3A3A3]">Lessons Completed</p>

              <h3 className="text-2xl font-bold text-white">
                3
                <span className="ml-1 text-sm font-normal text-[#737373]">
                  / 12
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Quiz */}
        <div className="rounded-2xl border border-[#383838] bg-[#222222] p-5 transition hover:border-[#555555]">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#C62828]/10 p-3">
              <Trophy className="h-5 w-5 text-[#E53935]" />
            </div>

            <div>
              <p className="text-sm text-[#A3A3A3]">Quiz Completed</p>

              <h3 className="text-2xl font-bold text-white">8</h3>
            </div>
          </div>
        </div>

        {/* Streak */}
        <div className="rounded-2xl border border-[#383838] bg-[#222222] p-5 transition hover:border-[#555555] sm:col-span-2 xl:col-span-1">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#C62828]/10 p-3">
              <Flame className="h-5 w-5 text-[#E53935]" />
            </div>

            <div>
              <p className="text-sm text-[#A3A3A3]">Learning Streak</p>

              <h3 className="text-2xl font-bold text-white">4 Days</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Progress */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ProgressCard />
        </div>

        {/* Daily Goal */}
        <div className="rounded-2xl border border-[#383838] bg-[#222222] p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-white">Daily Goal</h2>

            <Target className="h-5 w-5 text-[#D4AF37]" />
          </div>

          <p className="mt-4 text-3xl font-bold text-white">
            15
            <span className="text-base font-normal text-[#737373]">
              {" "}
              / 20 min
            </span>
          </p>

          <div className="mt-4 h-2 rounded-full bg-[#383838]">
            <div className="h-full w-3/4 rounded-full bg-[#C62828]" />
          </div>

          <p className="mt-3 text-sm text-[#A3A3A3]">
            Tinggal 5 menit lagi untuk mencapai target harianmu.
          </p>
        </div>
      </section>

      {/* German Cases */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-white">Explore German Cases</h2>

          <p className="mt-1 text-sm text-[#A3A3A3]">
            Pelajari empat kasus utama dalam bahasa Jerman.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {germanCases.map((grammarCase) => (
            <CaseCard key={grammarCase.id} grammarCase={grammarCase} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
