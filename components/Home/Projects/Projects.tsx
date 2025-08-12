"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { PROJECTS } from "./data";
import type { Project } from "./types";

const Section = ({ children }: { children: React.ReactNode }) => (
  <section id="projects" className="relative py-16 md:py-24">
    <div className="mx-auto w-[90%] max-w-7xl">{children}</div>
  </section>
);

const filtersOrder = [ "Web", "Mobile", "Cloud", "DevOps", "React", "Node", "Flutter", "AWS", "MongoDB"];

export default function Projects() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Project | null>(null);

  // Build unique filter set from tags
  const tagSet = useMemo(() => {
    const s = new Set<string>();
    PROJECTS.forEach(p => p.tags.forEach(t => s.add(t)));
    return ["All", ...filtersOrder.filter(f => f === "All" || s.has(f)), ...[...s].filter(t => !filtersOrder.includes(t))];
  }, []);

  const filtered = PROJECTS.filter(p => {
    const byTag = active === "All" || p.tags.includes(active);
    const byQuery = !query.trim() || [p.title, p.blurb, ...(p.stack || [])].join(" ").toLowerCase().includes(query.toLowerCase());
    return byTag && byQuery;
  });

  return (
    <Section>
      <h2 className="mb-8 text-center text-3xl font-extrabold text-white md:mb-12 md:text-5xl">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      {/* Controls */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Search projects…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full max-w-xs rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        />
        <div className="flex flex-wrap justify-center gap-2">
          {tagSet.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={[
                "rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                active === tag
                  ? "bg-cyan-600 text-white shadow-[0_0_18px_rgba(34,211,238,.5)]"
                  : "border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:border-cyan-400/60 hover:bg-cyan-400/15",
              ].join(" ")}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.ul
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {filtered.map((p, i) => (
          <motion.li key={p.id} layout>
            <button
              onClick={() => setOpen(p)}
              className="group block w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              {/* cover */}
              {p.images?.[0] ? (
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                  <Image src={p.images[0]} alt={`${p.title} cover`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
              ) : (
                <div className="mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-cyan-600/20 to-blue-700/20 ring-1 ring-white/10" />
              )}

              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-slate-300">{p.blurb}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map(t => (
                  <span key={t} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[11px] text-cyan-200">
                    {t}
                  </span>
                ))}
                {p.tags.length > 3 && <span className="text-[11px] text-slate-400">+{p.tags.length - 3}</span>}
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm text-cyan-300">
                {p.repo && <span className="inline-flex items-center gap-1"><FiGithub /> Repo</span>}
                {p.live && <span className="inline-flex items-center gap-1"><FiExternalLink /> Live</span>}
              </div>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-0 z-[1001] grid place-items-center px-4"
          >
            <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0f1222] p-0 shadow-xl">
              <button
                onClick={() => setOpen(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                aria-label="Close"
              >
                <FiX className="h-5 w-5" />
              </button>

              {/* header */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-4 text-white">
                <h3 className="text-lg font-semibold">{open.title}</h3>
                <p className="text-sm opacity-90">{open.blurb}</p>
              </div>

              {/* body */}
              <div className="space-y-5 p-5">
                {/* gallery */}
                {open.images?.length ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg ring-1 ring-white/10 sm:h-56">
                      <Image src={open.images[0]} alt={`${open.title} primary`} fill className="object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {open.images.slice(1, 5).map((img, i) => (
                        <div key={i} className="relative h-24 overflow-hidden rounded-lg ring-1 ring-white/10">
                          <Image src={img} alt={`${open.title} ${i + 2}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {open.description && <p className="text-slate-300">{open.description}</p>}

                {open.highlights?.length ? (
                  <ul className="space-y-2">
                    {open.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-200">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <p className="text-sm leading-relaxed">{h}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* tech chips */}
                {open.stack?.length ? (
                  <div className="flex flex-wrap gap-2 group/chips">
                    {open.stack.map(s => (
                      <span
                        key={s}
                        className="relative select-none rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200 shadow-[0_0_10px_rgba(34,211,238,.25)] hover:border-cyan-400/60 hover:bg-cyan-400/15 hover:shadow-[0_0_18px_rgba(34,211,238,.55)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* links */}
                {(open.repo || open.live) && (
                  <div className="flex flex-wrap gap-3">
                    {open.repo && (
                      <a
                        href={open.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
                      >
                        <FiGithub /> View Repo
                      </a>
                    )}
                    {open.live && (
                      <a
                        href={open.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm text-white transition hover:bg-blue-800 hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
