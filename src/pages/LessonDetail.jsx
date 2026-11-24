import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { lessons } from "../data/lessons";

import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  GraduationCap,
  Lightbulb,
  RotateCcw,
} from "lucide-react";

function LessonDetail() {
  const { caseId } = useParams();

  const lesson = lessons[caseId];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!lesson) {
    return (
      <div className="rounded-2xl border border-[#383838] bg-[#222222] p-8 text-center">
        <h1 className="text-2xl font-bold text-white">Lesson Not Found</h1>

        <p className="mt-2 text-[#A3A3A3]">
          Materi pembelajaran ini belum tersedia.
        </p>

        <Link
          to="/learn"
          className="mt-5 inline-flex items-center gap-2 text-[#D4AF37]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Grammar
        </Link>
      </div>
    );
  }

  const handleAnswer = (questionIndex, optionIndex) => {
    if (submitted) return;

    setSelectedAnswers((previous) => ({
      ...previous,
      [questionIndex]: optionIndex,
    }));
  };

  const calculateScore = () => {
    return lesson.quiz.filter(
      (question, index) => selectedAnswers[index] === question.answer,
    ).length;
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length !== lesson.quiz.length) {
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();

  return (
    <main className="space-y-8">
      {/* Back Navigation */}
      <Link
        to="/learn"
        className="inline-flex items-center gap-2 text-sm text-[#A3A3A3] transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Grammar
      </Link>

      {/* Lesson Header */}
      <section className="relative overflow-hidden rounded-2xl border border-[#383838] bg-[#222222] p-6 md:p-8">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-2 text-[#60A5FA]">
            <BookOpen className="h-5 w-5" />

            <span className="text-sm font-medium">Grammar Lesson</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            {lesson.title}
          </h1>

          <p className="mt-2 text-lg text-[#60A5FA]">{lesson.subtitle}</p>

          <p className="mt-4 max-w-2xl leading-relaxed text-[#A3A3A3]">
            {lesson.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-[#383838] bg-[#2B2B2B] px-3 py-2 text-sm text-[#A3A3A3]">
              <GraduationCap className="h-4 w-4 text-[#D4AF37]" />
              Beginner
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-[#383838] bg-[#2B2B2B] px-3 py-2 text-sm text-[#A3A3A3]">
              <BookOpen className="h-4 w-4 text-[#D4AF37]" />
              {lesson.quiz.length} Quiz Questions
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Navigation */}
      <section className="rounded-2xl border border-[#383838] bg-[#222222] p-5">
        <h2 className="font-semibold text-white">Lesson Contents</h2>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "Introduction",
            "Definite Articles",
            "Indefinite Articles",
            "Personal Pronouns",
            "Sentence Examples",
            "Common Mistakes",
            "Mini Quiz",
          ].map((item, index) => (
            <a
              key={item}
              href={`#lesson-${index}`}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#A3A3A3] transition hover:bg-[#2B2B2B] hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#333333] text-xs text-[#D4AF37]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item}
            </a>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section
        id="lesson-0"
        className="scroll-mt-24 rounded-2xl border border-[#383838] bg-[#222222] p-6"
      >
        <SectionHeader number="01" title={lesson.introduction.title} />

        <p className="mt-5 leading-relaxed text-[#A3A3A3]">
          {lesson.introduction.content}
        </p>

        <div className="mt-5 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Lightbulb className="h-5 w-5" />

            <span className="font-semibold">Important Question</span>
          </div>

          <p className="mt-2 text-lg font-semibold text-white">
            {lesson.introduction.question}
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {lesson.introduction.examples.map((example, index) => (
            <ExampleCard key={index} example={example} />
          ))}
        </div>
      </section>

      {/* Definite Articles */}
      <section
        id="lesson-1"
        className="scroll-mt-24 rounded-2xl border border-[#383838] bg-[#222222] p-6"
      >
        <SectionHeader number="02" title={lesson.definiteArticles.title} />

        <p className="mt-5 text-[#A3A3A3] leading-relaxed">
          {lesson.definiteArticles.description}
        </p>

        <ArticleTable
          data={lesson.definiteArticles.table}
          title="Definite Article"
        />
      </section>

      {/* Indefinite Articles */}
      <section
        id="lesson-2"
        className="scroll-mt-24 rounded-2xl border border-[#383838] bg-[#222222] p-6"
      >
        <SectionHeader number="03" title={lesson.indefiniteArticles.title} />

        <p className="mt-5 text-[#A3A3A3] leading-relaxed">
          {lesson.indefiniteArticles.description}
        </p>

        <ArticleTable
          data={lesson.indefiniteArticles.table}
          title="Indefinite Article"
        />
      </section>

      {/* Personal Pronouns */}
      <section
        id="lesson-3"
        className="scroll-mt-24 rounded-2xl border border-[#383838] bg-[#222222] p-6"
      >
        <SectionHeader number="04" title={lesson.pronouns.title} />

        <p className="mt-5 text-[#A3A3A3] leading-relaxed">
          {lesson.pronouns.description}
        </p>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[400px] border-collapse">
            <thead>
              <tr className="border-b border-[#383838] text-left">
                <th className="px-4 py-3 text-sm font-semibold text-[#D4AF37]">
                  Pronoun
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-[#D4AF37]">
                  Translation
                </th>
              </tr>
            </thead>

            <tbody>
              {lesson.pronouns.table.map((item, index) => (
                <tr key={index} className="border-b border-[#383838]/50">
                  <td className="px-4 py-3 font-semibold text-white">
                    {item.german}
                  </td>

                  <td className="px-4 py-3 text-[#A3A3A3]">
                    {item.translation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sentence Examples */}
      <section
        id="lesson-4"
        className="scroll-mt-24 rounded-2xl border border-[#383838] bg-[#222222] p-6"
      >
        <SectionHeader number="05" title="Sentence Examples" />

        <p className="mt-5 text-[#A3A3A3]">
          Perhatikan subjek dalam setiap kalimat berikut.
        </p>

        <div className="mt-5 space-y-3">
          {lesson.sentenceExamples.map((example, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#383838] bg-[#292929] p-4"
            >
              <p className="text-lg font-semibold text-white">
                {example.german}
              </p>

              <p className="mt-1 text-[#A3A3A3]">{example.translation}</p>

              <div className="mt-3 border-t border-[#383838] pt-3">
                <p className="text-sm text-[#737373]">Subject:</p>

                <p className="font-semibold text-[#60A5FA]">
                  {example.subject}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">
                  {example.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section
        id="lesson-5"
        className="scroll-mt-24 rounded-2xl border border-[#383838] bg-[#222222] p-6"
      >
        <SectionHeader number="06" title="Common Mistakes" />

        <p className="mt-5 text-[#A3A3A3]">
          Perhatikan kesalahan berikut agar kamu lebih mudah memahami penggunaan
          Nominativ.
        </p>

        <div className="mt-5 space-y-4">
          {lesson.commonMistakes.map((mistake, index) => (
            <div
              key={index}
              className="space-y-3 rounded-xl border border-[#383838] bg-[#292929] p-4"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-red-400">
                  Incorrect
                </p>

                <p className="mt-1 text-white line-through decoration-red-400">
                  {mistake.incorrect}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-green-400">
                  Correct
                </p>

                <p className="mt-1 font-semibold text-white">
                  {mistake.correct}
                </p>
              </div>

              <p className="border-t border-[#383838] pt-3 text-sm text-[#A3A3A3]">
                {mistake.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz */}
      <section
        id="lesson-6"
        className="scroll-mt-24 rounded-2xl border border-[#383838] bg-[#222222] p-6"
      >
        <SectionHeader number="07" title="Mini Quiz" />

        <p className="mt-5 text-[#A3A3A3]">
          Uji pemahamanmu mengenai Nominativ.
        </p>

        <div className="mt-6 space-y-6">
          {lesson.quiz.map((question, questionIndex) => (
            <div
              key={questionIndex}
              className="rounded-xl border border-[#383838] bg-[#292929] p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-sm font-bold text-[#D4AF37]">
                  {questionIndex + 1}
                </div>

                <p className="font-medium leading-relaxed text-white">
                  {question.question}
                </p>
              </div>

              <div className="mt-4 space-y-2">
                {question.options.map((option, optionIndex) => {
                  const isSelected =
                    selectedAnswers[questionIndex] === optionIndex;

                  const isCorrect = question.answer === optionIndex;

                  let optionStyle =
                    "border-[#383838] bg-[#222222] hover:bg-[#333333]";

                  if (submitted && isCorrect) {
                    optionStyle = "border-green-500 bg-green-500/10";
                  }

                  if (submitted && isSelected && !isCorrect) {
                    optionStyle = "border-red-500 bg-red-500/10";
                  }

                  if (!submitted && isSelected) {
                    optionStyle = "border-[#D4AF37] bg-[#D4AF37]/10";
                  }

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswer(questionIndex, optionIndex)}
                      disabled={submitted}
                      className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition ${optionStyle}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#383838] text-xs text-[#A3A3A3]">
                        {String.fromCharCode(65 + optionIndex)}
                      </span>

                      <span className="text-white">{option}</span>

                      {submitted && isCorrect && (
                        <CheckCircle2 className="ml-auto h-5 w-5 text-green-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-4 rounded-lg bg-[#222222] p-3">
                  <p className="text-sm leading-relaxed text-[#A3A3A3]">
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quiz Controls */}
        <div className="mt-6">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={
                Object.keys(selectedAnswers).length !== lesson.quiz.length
              }
              className="w-full rounded-xl bg-[#C62828] px-5 py-3 font-semibold text-white transition hover:bg-[#E53935] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check Answers
            </button>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5 text-center">
                <div className="flex justify-center">
                  <CircleHelp className="h-8 w-8 text-[#D4AF37]" />
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">
                  Quiz Completed!
                </h3>

                <p className="mt-2 text-[#A3A3A3]">Your Score</p>

                <p className="mt-1 text-3xl font-bold text-[#D4AF37]">
                  {score} / {lesson.quiz.length}
                </p>

                <p className="mt-3 text-sm text-[#A3A3A3]">
                  {score === lesson.quiz.length
                    ? "Excellent! Kamu sudah memahami materi ini dengan baik."
                    : "Bagus! Pelajari kembali jawaban yang salah dan coba lagi."}
                </p>
              </div>

              <button
                onClick={handleReset}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#383838] bg-[#292929] px-5 py-3 font-semibold text-white transition hover:bg-[#333333]"
              >
                <RotateCcw className="h-4 w-4" />
                Try Again
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* Section Header */

function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-sm font-bold text-[#D4AF37]">
        {number}
      </div>

      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
  );
}

/* Example Card */

function ExampleCard({ example }) {
  return (
    <div className="rounded-xl border border-[#383838] bg-[#292929] p-4">
      <p className="text-lg font-semibold text-white">{example.german}</p>

      <p className="mt-1 text-[#A3A3A3]">{example.translation}</p>

      <p className="mt-3 border-t border-[#383838] pt-3 text-sm leading-relaxed text-[#A3A3A3]">
        {example.explanation}
      </p>
    </div>
  );
}

/* Article Table */

function ArticleTable({ data, title }) {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full min-w-[500px] border-collapse">
        <thead>
          <tr className="border-b border-[#383838] text-left">
            <th className="px-4 py-3 text-sm font-semibold text-[#D4AF37]">
              Gender
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-[#D4AF37]">
              Article
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-[#D4AF37]">
              Example
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-[#D4AF37]">
              Translation
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-[#383838]/50">
              <td className="px-4 py-3 text-[#A3A3A3]">{item.gender}</td>

              <td className="px-4 py-3 text-lg font-bold text-white">
                {item.german}
              </td>

              <td className="px-4 py-3 font-medium text-white">
                {item.example}
              </td>

              <td className="px-4 py-3 text-[#A3A3A3]">{item.translation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LessonDetail;
