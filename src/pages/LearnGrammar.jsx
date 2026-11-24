import { useState } from "react";

import { germanCases } from "../data/cases";
import CaseCard from "../components/CaseCard";

import { BookOpen, Search, GraduationCap, Filter } from "lucide-react";

function LearnGrammar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const levels = ["All", "Beginner", "Intermediate"];

  const filteredCases = germanCases.filter((grammarCase) => {
    const matchesSearch =
      grammarCase.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grammarCase.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grammarCase.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel =
      selectedLevel === "All" || grammarCase.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  const completedCases = germanCases.filter(
    (grammarCase) => grammarCase.progress === 100,
  ).length;

  const totalProgress = Math.round(
    germanCases.reduce(
      (total, grammarCase) => total + grammarCase.progress,
      0,
    ) / germanCases.length,
  );

  return (
    <main className="space-y-8">
      {/* Page Header */}
      <section>
        <div className="flex items-center gap-2 text-[#D4AF37]">
          <BookOpen className="h-5 w-5" />

          <span className="text-sm font-medium">Grammar Learning</span>
        </div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Learn Grammar
        </h1>

        <p className="mt-2 max-w-2xl text-[#A3A3A3]">
          Pelajari empat kasus utama bahasa Jerman dan pahami bagaimana setiap
          kata berfungsi dalam sebuah kalimat.
        </p>
      </section>

      {/* Overview */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {/* Total Cases */}
        <div className="rounded-2xl border border-[#383838] bg-[#222222] p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#D4AF37]/10 p-3">
              <BookOpen className="h-5 w-5 text-[#D4AF37]" />
            </div>

            <div>
              <p className="text-sm text-[#A3A3A3]">Grammar Cases</p>

              <h3 className="text-2xl font-bold text-white">
                {germanCases.length}
              </h3>
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="rounded-2xl border border-[#383838] bg-[#222222] p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-500/10 p-3">
              <GraduationCap className="h-5 w-5 text-green-400" />
            </div>

            <div>
              <p className="text-sm text-[#A3A3A3]">Completed</p>

              <h3 className="text-2xl font-bold text-white">
                {completedCases}
              </h3>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="rounded-2xl border border-[#383838] bg-[#222222] p-5 sm:col-span-2 xl:col-span-1">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#C62828]/10 p-3">
              <GraduationCap className="h-5 w-5 text-[#E53935]" />
            </div>

            <div>
              <p className="text-sm text-[#A3A3A3]">Overall Progress</p>

              <h3 className="text-2xl font-bold text-white">
                {totalProgress}%
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="space-y-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="flex w-full items-center gap-3 rounded-xl border border-[#383838] bg-[#222222] px-4 py-3 lg:max-w-md">
            <Search className="h-5 w-5 shrink-0 text-[#737373]" />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search grammar..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#737373]"
            />
          </div>

          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-[#A3A3A3]">
              <Filter className="h-4 w-4" />

              <span>Level:</span>
            </div>

            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  selectedLevel === level
                    ? "bg-[#C62828] text-white"
                    : "border border-[#383838] bg-[#222222] text-[#A3A3A3] hover:bg-[#292929] hover:text-white"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grammar Cases */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Grammar Cases</h2>

            <p className="mt-1 text-sm text-[#A3A3A3]">
              {filteredCases.length} learning modules available
            </p>
          </div>
        </div>

        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredCases.map((grammarCase) => (
              <CaseCard key={grammarCase.id} grammarCase={grammarCase} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#383838] bg-[#222222] p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#383838]">
              <Search className="h-6 w-6 text-[#A3A3A3]" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              No lessons found
            </h3>

            <p className="mt-2 text-sm text-[#A3A3A3]">
              Coba gunakan kata kunci atau filter yang berbeda.
            </p>

            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLevel("All");
              }}
              className="mt-5 rounded-xl bg-[#C62828] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#E53935]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default LearnGrammar;
