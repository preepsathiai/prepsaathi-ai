
"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState("");
  const [institution, setInstitution] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            phone,
            student_category: category,
            course_or_class: course,
            institution,
          },
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage(
          "Registration successful! Please check your email for verification."
        );
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-cyan-400">
            PrepSaathi AI
          </h1>
          <p className="mt-3 text-slate-300">
            Create your student account
          </p>
          <p className="mt-2 text-sm text-slate-400">
            English | বাংলা | हिंदी
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-5 rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name *
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-600 bg-slate-950 p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Mobile Number *
            </label>
            <input
              required
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              className="w-full rounded-lg border border-slate-600 bg-slate-950 p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address *
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-slate-600 bg-slate-950 p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Student Category *
            </label>
            <select
              required
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setCourse("");
              }}
              className="w-full rounded-lg border border-slate-600 bg-slate-950 p-3 outline-none focus:border-cyan-400"
            >
              <option value="">Select category</option>
              <option value="school">School Education</option>
              <option value="competitive">Competitive Exams</option>
            </select>
          </div>

          {category && (
            <div>
              <label className="mb-2 block text-sm font-medium">
                {category === "school"
                  ? "Class / Board *"
                  : "Examination *"}
              </label>
              <select
                required
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-slate-950 p-3 outline-none focus:border-cyan-400"
              >
                <option value="">Select your course</option>
                {category === "school" ? (
                  <>
                    <option>CBSE</option>
                    <option>ICSE</option>
                    <option>ISC</option>
                    <option>WBBSE</option>
                    <option>WBCHSE</option>
                  </>
                ) : (
                  <>
                    <option>UPSC</option>
                    <option>WBCS</option>
                    <option>SSC</option>
                    <option>Banking</option>
                  </>
                )}
              </select>
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Class / Exam Level *
            </label>
            <input
              required
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              placeholder="e.g. Class 10, Class 12, UPSC 2027"
              className="w-full rounded-lg border border-slate-600 bg-slate-950 p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              School / College / Institution Name *
            </label>
            <input
              required
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              placeholder="Enter school or college name"
              className="w-full rounded-lg border border-slate-600 bg-slate-950 p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password *
            </label>
            <input
              required
              type="password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
              className="w-full rounded-lg border border-slate-600 bg-slate-950 p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Confirm Password *
            </label>
            <input
              required
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="w-full rounded-lg border border-slate-600 bg-slate-950 p-3 outline-none focus:border-cyan-400"
            />
          </div>

          {message && (
            <p className="rounded-lg bg-slate-800 p-3 text-sm text-cyan-300">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-cyan-500 p-3 font-bold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create My Account"}
          </button>

          <p className="text-center text-xs text-slate-400">
            By registering, you agree to our Terms and Privacy Policy.
          </p>
        </form>
      </div>
    </main>
  );
}
