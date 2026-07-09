"use client";

import { useState } from "react";
import { company, services } from "@/lib/data";

const fieldClass =
  "w-full rounded-sm border border-brand-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-stone-400 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 dark:border-stone-600 dark:bg-stone-800 dark:placeholder:text-stone-500";

const labelClass = "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? ""),
      otherService: String(formData.get("otherService") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setSubmitted(true);
      form.reset();
      setService("");
      setOtherService("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center sm:p-8 dark:border-green-800 dark:bg-green-950/40">
        <p className="text-base font-semibold text-green-800 sm:text-lg dark:text-green-300">
          Thank you for reaching out!
        </p>
        <p className="mt-2 text-sm text-green-700 dark:text-green-400">
          We will get back to you shortly. For urgent queries, call{" "}
          <a href={`tel:${company.phone}`} className="font-semibold underline">
            {company.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            disabled={loading}
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            disabled={loading}
            className={fieldClass}
            placeholder="Your phone"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={loading}
          className={fieldClass}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service Required
        </label>
        <select
          id="service"
          name="service"
          required
          disabled={loading}
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={fieldClass}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
          <option value="other">Other (specify below)</option>
        </select>

        {service === "other" && (
          <div className="mt-3">
            <label htmlFor="otherService" className={labelClass}>
              Specify your service
            </label>
            <input
              id="otherService"
              name="otherService"
              required
              disabled={loading}
              value={otherService}
              onChange={(e) => setOtherService(e.target.value)}
              className={fieldClass}
              placeholder="e.g. Event staffing, warehouse helpers, etc."
            />
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={loading}
          className={fieldClass}
          placeholder="Tell us about your manpower requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
