"use client";

import { useEffect, useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  // Load theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  

  // Scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition duration-500">

      {/* HERO */}
      <section className="text-center py-16 px-4 reveal">
        <div className="flex justify-end max-w-5xl mx-auto mb-4">
          {/* <button
            onClick={() => {
              console.log("clicked");
              setDark(!dark)}}
            className="border px-3 py-1 rounded-lg text-sm hover:scale-105 transition"
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button> */}
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-16 bg-gray-400"></div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Prisita Thakkar
          </h1>
          <div className="h-[1px] w-16 bg-gray-400"></div>
        </div>

        <p className="text-lg mt-3 text-gray-600 dark:text-gray-300">
          Senior Credit Officer | Credit Risk & Underwriting
        </p>

        <div className="flex justify-center gap-6 mt-6 text-sm flex-wrap">
          <span>📧 prisita.thakkar@gmail.com</span>
          <span>📞 +91 9429703931</span>
          <a
            href="https://linkedin.com/in/prisitathakkar"
            target="_blank"
            className="underline hover:text-indigo-600"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="max-w-4xl mx-auto px-4 text-center reveal">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Results-driven Senior Credit Officer with expertise in credit risk analysis,
          underwriting, and financial decision-making. Proven ability to evaluate
          financial profiles and deliver accurate credit decisions in high-volume environments.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto px-4 py-10 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Experience</h2>

        <div className="space-y-6">
          {[
            {
              role: "Career Break",
              company: "Bengaluru, Karnataka",
              date: "Nov 2025 – Mar 2026",
              points: [
                "Relocated to Bengaluru due to personal commitments, available for immediate joining in Credit Risk, Fraud Analysis,  Underwriting roles.",
              ],
            },
            {
              role: "Senior Credit Officer",
              company: "Ratnaafin Capital Pvt Ltd",
              date: "Jan 2024 – Nov 2025",
              points: [
                "Managed eligibility assessments and loan sanctioning processes",
                "Led team operations ensuring efficient credit processing",
                "Ensured compliance with credit policies",
              ],
            },
            {
              role: "Risk CPA Processing Executive",
              company: "Yes Bank Limited",
              date: "Oct 2022 – Jan 2024",
              points: [
                "Conducted underwriting using CIBIL and financial documents",
                "Analyzed income and business profiles",
                "Performed risk assessments for decisions",
              ],
            },
            {
              role: "Gold Loan Officer",
              company: "HDB Finance Services",
              date: "Apr 2022 – Sept 2022",
              points: [
                "Evaluated gold assets for loan eligibility",
                "Managed risk exposure and loan records",
                "Ensured compliance with lending policies",
              ],
            },
          ].map((job, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <h3 className="font-bold text-lg">{job.role}</h3>
              <p className="text-sm text-gray-500">
                {job.company} | {job.date}
              </p>
              <ul className="list-disc ml-5 mt-3 text-sm space-y-1">
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-5xl mx-auto px-4 py-10 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Education</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
            <h3 className="font-bold">MBA</h3>
            <p className="text-sm text-gray-500">GLS University</p>
            <p className="text-sm mt-1">2020 – 2022</p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
            <h3 className="font-bold">BBA</h3>
            <p className="text-sm text-gray-500">GLS University</p>
            <p className="text-sm mt-1">2017 – 2020</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-4 py-10 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Core Expertise</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Credit Risk Analysis & Loan Underwriting",
            "Mortgage Application Review & Verification",
            "Fraud Detection & Risk Mitigation",
            "Financial Document Analysis (Income, Bank Statements, Tax Returns)",
            "Credit Bureau (CIBIL) Analysis & Validation",
            "Loan Eligibility Assessment & Decision Making",
            "Regulatory Compliance & Policy Adherence",
            "Cash Flow & Repayment Capacity Analysis",
            "Data Accuracy & Financial Audit Checks",
            "Stakeholder Coordination (Lenders, Brokers, Clients)",
            "Exception Handling & Policy Deviation Analysis",
            "Market Trends & Financial Behavior Analysis",
          ].map((skill) => (
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-4 py-10 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Projects</h2>

        <div className="space-y-6">

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-bold">Dissertation – Investment Behavior Study</h3>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Conducted an in-depth study on investment patterns of women in Ahmedabad.</li>
              <li>Analyzed financial literacy, risk appetite, and decision-making behavior.</li>
              <li>Collected and evaluated primary data using statistical tools (SPSS).</li>
              <li>Identified key trends influencing investment choices and risk tolerance.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-bold">Investor Behavior Analysis (Research Project)</h3>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Analyzed investor preferences across mutual funds and financial instruments.</li>
              <li>Evaluated risk perception and financial decision-making patterns.</li>
              <li>Performed data collection, validation, and interpretation for insights.</li>
              <li>Derived conclusions on behavioral trends influencing investment strategies.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* RESUME */}
      <section className="text-center py-5 reveal">
        <a
          href="/Prisita_Thakkar.pdf"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:scale-110 transition shadow-lg"
        >
          📄 Download Resume
        </a>
      </section>

      {/* CONTACT */}
      <section className="text-center py-12 reveal">
        <h2 className="text-2xl font-semibold mb-4">Let’s Connect</h2>
        <p>📞 +91 9429703931</p>
        <p>📧 prisita.thakkar@gmail.com</p>
        <a
          href="https://linkedin.com/in/prisitathakkar"
          target="_blank"
          className="underline text-indigo-600"
        >
          LinkedIn Profile
        </a>
      </section>

      {/* ANIMATION */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}