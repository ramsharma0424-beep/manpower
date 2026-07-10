"use client";

import { useState } from "react";
import { careerRoles } from "@/lib/content";
import { company } from "@/lib/data";

const fieldClass =
  "w-full rounded-sm border border-brand-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-stone-400 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 dark:border-stone-600 dark:bg-stone-800 dark:placeholder:text-stone-500";

const labelClass = "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

const ACCEPTED_RESUME_TYPES = ".pdf,.doc,.docx,application/pdf,application/msword";
const MAX_RESUME_MB = 5;

export default function CareerApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resumeName, setResumeName] = useState("");

  function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setResumeName(file?.name ?? "");
    setError("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setError("Please upload your resume or CV (PDF, DOC, or DOCX).");
      setLoading(false);
      return;
    }

    if (resume.size > MAX_RESUME_MB * 1024 * 1024) {
      setError(`Resume must be ${MAX_RESUME_MB} MB or smaller.`);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to submit application.");
      }

      setSubmitted(true);
      form.reset();
      setResumeName("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit application.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-5 sm:p-8 dark:border-green-800 dark:bg-green-950/40">
        <p className="text-base font-semibold text-green-800 sm:text-lg dark:text-green-300">
          Application received!
        </p>
        <p className="mt-2 text-sm text-green-700 dark:text-green-400">
          Thank you for your interest in joining {company.shortName}. Our HR team will review your
          application and resume, and contact you shortly. For urgent queries, call{" "}
          <a href={`tel:${company.phone}`} className="font-semibold underline">
            {company.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
      {error && (
        <div className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="career-name" className={labelClass}>
            Full Name
          </label>
          <input id="career-name" name="name" required disabled={loading} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="career-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="career-phone"
            name="phone"
            type="tel"
            required
            disabled={loading}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="career-email" className={labelClass}>
          Email Address
        </label>
        <input
          id="career-email"
          name="email"
          type="email"
          required
          disabled={loading}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="career-role" className={labelClass}>
          Role Applying For
        </label>
        <select id="career-role" name="role" required disabled={loading} className={fieldClass}>
          <option value="" disabled>
            Select a role
          </option>
          {careerRoles.map((role) => (
            <option key={role.id} value={role.title}>
              {role.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="career-resume" className={labelClass}>
          Resume / CV
        </label>
        <div className="rounded-sm border border-dashed border-brand-border bg-brand-cream/40 p-4 dark:border-stone-600 dark:bg-stone-900/40">
          <input
            id="career-resume"
            name="resume"
            type="file"
            required
            disabled={loading}
            accept={ACCEPTED_RESUME_TYPES}
            onChange={handleResumeChange}
            className="block w-full cursor-pointer text-sm text-stone-600 file:mr-4 file:cursor-pointer file:rounded-sm file:border-0 file:bg-brand-gold file:px-4 file:py-2 file:text-sm file:font-semibold file:text-stone-950 hover:file:bg-brand-gold-dark dark:text-stone-300"
          />
          <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">
            PDF, DOC, or DOCX only. Maximum size {MAX_RESUME_MB} MB.
          </p>
          {resumeName && (
            <p className="mt-2 text-xs font-medium text-brand-gold">
              Selected: {resumeName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="career-message" className={labelClass}>
          Experience & Preferred Location
        </label>
        <textarea
          id="career-message"
          name="message"
          rows={4}
          required
          disabled={loading}
          className={fieldClass}
          placeholder="Tell us about your experience, preferred city, and availability..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
