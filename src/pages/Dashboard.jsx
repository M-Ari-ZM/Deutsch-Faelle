import { germanCases } from "../data/cases";
import CaseCard from "../components/CaseCard";
import ProgressCard from "../components/ProgressCard";

import { Target, Trophy, Flame, ArrowRight } from "lucide-react";

function Dashboard() {
  return (
    <main className="space-y-8">
      {/* Welcome Section */}
      <section>
        <p className="text-sm font-medium text-blue-600">
          Saturday, November 21
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Hallo, Ari! 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Siap melanjutkan perjalanan belajar bahasa Jerman?
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3">
              <Target className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">Lessons Completed</p>

              <h3 className="text-2xl font-bold text-slate-900">
                3
                <span className="ml-1 text-sm font-normal text-slate-400">
                  / 12
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-50 p-3">
              <Trophy className="h-5 w-5 text-amber-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">Quiz Completed</p>

              <h3 className="text-2xl font-bold text-slate-900">8</h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2 xl:col-span-1">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-50 p-3">
              <Flame className="h-5 w-5 text-orange-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">Learning Streak</p>

              <h3 className="text-2xl font-bold text-slate-900">4 Days</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Progress */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ProgressCard />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Daily Goal</h2>

            <Target className="h-5 w-5 text-blue-600" />
          </div>

          <p className="mt-4 text-3xl font-bold text-slate-900">
            15
            <span className="text-base font-normal text-slate-400">
              {" "}
              / 20 min
            </span>
          </p>

          <div className="mt-4 h-2 rounded-full bg-slate-100">
            <div className="h-full w-3/4 rounded-full bg-blue-600" />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Tinggal 5 menit lagi untuk mencapai target harianmu.
          </p>
        </div>
      </section>

      {/* Case Cards */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Explore German Cases
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Pelajari empat kasus utama dalam bahasa Jerman.
            </p>
          </div>

          <button className="hidden items-center gap-2 text-sm font-medium text-blue-600 sm:flex">
            View All
            <ArrowRight className="h-4 w-4" />
          </button>
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
