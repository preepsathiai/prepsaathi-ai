
"use client";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-6 py-5">
        <h1 className="text-2xl font-bold text-cyan-400">
          PrepSaathi AI
        </h1>
        <p className="text-sm text-slate-300">
          English | বাংলা | हिंदी
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="mb-6 font-semibold text-cyan-400">
          YOUR PERSONAL AI LEARNING PARTNER
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          Learn Smarter.
          <br />
          Prepare Better.
          <br />
          <span className="text-cyan-400">Achieve More.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300">
          Your personal AI-powered platform for competitive
          examinations and school education.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("learning-options")}
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Start Learning
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="rounded-xl border border-slate-600 px-8 py-4 font-semibold hover:bg-slate-800"
          >
            Explore Features
          </button>
        </div>

        <section
          id="learning-options"
          className="mt-24 grid gap-6 text-left md:grid-cols-2"
        >
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
            <p className="mb-4 text-3xl">🎯</p>
            <h3 className="text-2xl font-bold">
              Competitive Exams
            </h3>
            <p className="mt-4 text-slate-300">
              Prepare for UPSC, WBCS, SSC and Banking with
              personalised AI mentors.
            </p>
            <p className="mt-5 text-xl font-bold text-cyan-400">
              ₹249 / month
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
            <p className="mb-4 text-3xl">📚</p>
            <h3 className="text-2xl font-bold">
              School Education
            </h3>
            <p className="mt-4 text-slate-300">
              Learn with AI tutors for CBSE, CISCE and
              West Bengal Board students.
            </p>
            <p className="mt-5 text-xl font-bold text-cyan-400">
              ₹149 / month
            </p>
          </div>
        </section>

        <section
          id="features"
          className="mt-20 rounded-2xl border border-slate-700 bg-slate-900 p-8 text-left"
        >
          <h3 className="text-2xl font-bold text-cyan-400">
            Explore PrepSaathi AI Features
          </h3>
          <p className="mt-4 text-slate-300">
            Personalised study plans, AI doubt solving,
            mock tests, answer evaluation, smart revision
            and performance tracking — all in one platform.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-400">
        © 2026 PrepSaathi AI. Your Personal AI Learning
        & Exam Preparation Partner.
      </footer>
    </div>
  );
}
