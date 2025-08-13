// components/contact/Contact.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend, FiLoader, FiMail, FiGithub, FiLinkedin,
  FiCheckCircle, FiXCircle, FiCopy, FiCheck, FiAlertCircle
} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const [shake, setShake] = useState(false);
  const [chars, setChars] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement | null>(null);

  // toast autoclear
  useEffect(() => {
    if (status === "success" || status === "error") {
      const t = setTimeout(() => setStatus("idle"), 3500);
      return () => clearTimeout(t);
    }
  }, [status]);

  // -------- validation ----------
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  function validateField(name: string, value: string) {
    switch (name) {
      case "name":
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name looks too short.";
        return;
      case "email":
        if (!value.trim()) return "Please enter your email.";
        if (!emailRe.test(value)) return "Enter a valid email address.";
        return;
      case "message":
        if (!value.trim()) return "Please write a message.";
        if (value.trim().length < 10) return "Add a bit more detail (min 10 chars).";
        return;
      case "subject":
        // optional — no error unless you want one
        return;
      default:
        return;
    }
  }

  function validateAll(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Errors = {};
    for (const key of ["name", "email", "subject", "message"] as const) {
      const err = validateField(key, String(data.get(key) || ""));
      if (err) next[key] = err;
    }
    setErrors(next);
    return next;
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.currentTarget;
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  }

  // style helper: themed error vs normal
  function inputClass(hasError: boolean) {
    return [
      "w-full rounded-lg border px-3 py-2 text-white placeholder-slate-500 transition-colors",
      "bg-[#0f1222] border-white/10 focus:outline-none",
      hasError
        ? "ring-2 ring-rose-400/50 border-rose-400/30 shadow-[0_0_18px_rgba(244,63,94,.25)]"
        : "focus:ring-2 focus:ring-cyan-400/50 hover:border-white/20"
    ].join(" ");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // our own validation (no native)
    const errs = validateAll(form);
    if (Object.keys(errs).length) {
      setStatus("error");
      setMsg("Please fix the highlighted fields.");
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }

    setStatus("loading");
    setMsg("");

    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
    if (!accessKey) {
      setStatus("error");
      setMsg("Missing Web3Forms access key. Add NEXT_PUBLIC_WEB3FORMS_KEY to .env.local.");
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }

    formData.append("access_key", accessKey);
    if (!formData.get("subject")) formData.set("subject", "Portfolio Contact");
    formData.append("botcheck", "");

    const payload = JSON.stringify(Object.fromEntries(formData as any));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: payload,
      });
      const result = await res.json();

      if (result?.success) {
        setStatus("success");
        setMsg("Thanks! I’ll get back to you soon.");
        form.reset();
        setChars(0);
        setErrors({});
      } else {
        setStatus("error");
        setMsg(result?.message || "Something went wrong. Please try again.");
        setShake(true);
        setTimeout(() => setShake(false), 600);
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Please try again.");
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }

  const email = "ravichandran.ja@northeastern.edu";
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-5xl">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold text-white">
          Get in <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="mt-3 text-center text-slate-300">
          Have a role, project, or collab in mind? Ping me—happy to chat.
        </p>

        {/* social bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white transition-all hover:border-cyan-400/40 hover:bg-white/10"
            href={`mailto:${email}`}
          >
            <FiMail className="h-5 w-5" />
            <span className="hidden sm:inline">E Mail</span>
          </a>
          <a
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white transition-all hover:border-cyan-400/40 hover:bg-white/10"
            href="https://www.instagram.com/jai_vicky____/"
            target="_blank" rel="noreferrer"
          >
            <FaInstagram className="h-5 w-5" />
            <span className="hidden sm:inline">Intagram</span>
          </a>
          <a
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white transition-all hover:border-cyan-400/40 hover:bg-white/10"
            href="https://www.linkedin.com/in/jai-vignesh-ravichandran-5a79421b8/"
            target="_blank" rel="noreferrer"
          >
            <FiLinkedin className="h-5 w-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white transition-all hover:border-cyan-400/40 hover:bg-white/10"
            href="https://github.com/jai-vignesh007"
            target="_blank" rel="noreferrer"
          >
            <FiGithub className="h-5 w-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/15"
          >
            {copied ? <FiCheck className="h-5 w-5" /> : <FiCopy className="h-5 w-5" />}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy email"}</span>
          </button>
        </div>

        {/* form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
          animate={shake ? { x: [0, -10, 10, -6, 6, -3, 3, 0] } : { x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm text-slate-300">Name</span>
              <input
                name="name" required autoComplete="name" onBlur={onBlur}
                aria-invalid={!!errors.name} aria-describedby="err-name"
                className={inputClass(!!errors.name)}
                placeholder="Your name"
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    id="err-name"
                    initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                    className="mt-1 inline-flex items-center gap-1 text-xs text-rose-300"
                  >
                    <FiAlertCircle className="h-4 w-4" /> {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm text-slate-300">Email</span>
              <input
                type="email" name="email" required inputMode="email" autoComplete="email" onBlur={onBlur}
                aria-invalid={!!errors.email} aria-describedby="err-email"
                className={inputClass(!!errors.email)}
                placeholder="you@example.com"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    id="err-email"
                    initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                    className="mt-1 inline-flex items-center gap-1 text-xs text-rose-300"
                  >
                    <FiAlertCircle className="h-4 w-4" /> {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </label>
          </div>

          <label className="block">
            <span className="mb-1 block text-sm text-slate-300">Subject</span>
            <input
              name="subject" autoComplete="off" onBlur={onBlur}
              aria-invalid={!!errors.subject} aria-describedby="err-subject"
              className={inputClass(!!errors.subject)}
              placeholder="What’s this about?"
            />
            <AnimatePresence>
              {errors.subject && (
                <motion.p
                  id="err-subject"
                  initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                  className="mt-1 inline-flex items-center gap-1 text-xs text-rose-300"
                >
                  <FiAlertCircle className="h-4 w-4" /> {errors.subject}
                </motion.p>
              )}
            </AnimatePresence>
          </label>

          <label className="block">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-slate-300">Message</span>
              <span className={`text-xs ${errors.message ? "text-rose-300" : "text-slate-400"}`}>{chars}/1000</span>
            </div>
            <textarea
              name="message" required rows={5} maxLength={1000}
              onBlur={onBlur} onChange={(e) => setChars(e.currentTarget.value.length)}
              aria-invalid={!!errors.message} aria-describedby="err-message"
              className={inputClass(!!errors.message)}
              placeholder="Tell me a bit about your needs…"
            />
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  id="err-message"
                  initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                  className="mt-1 inline-flex items-center gap-1 text-xs text-rose-300"
                >
                  <FiAlertCircle className="h-4 w-4" /> {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </label>

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 disabled:opacity-60"
          >
            {status === "loading" ? <FiLoader className="h-5 w-5 animate-spin" /> : <FiSend className="h-5 w-5" />}
            {status === "loading" ? "Sending…" : "Send Message"}
          </motion.button>

          {/* status toasts */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                className="mt-2 inline-flex items-center gap-2 text-emerald-300" role="status" aria-live="polite"
              >
                <FiCheckCircle className="h-5 w-5" /> {msg}
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                className="mt-2 inline-flex items-center gap-2 text-rose-300" role="status" aria-live="assertive"
              >
                <FiXCircle className="h-5 w-5" /> {msg}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
