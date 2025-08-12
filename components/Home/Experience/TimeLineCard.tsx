"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { HiOutlineCalendarDays, HiOutlineMapPin } from "react-icons/hi2";
import type { Exp } from "./types";

const leftVariants = {
  hidden: { opacity: 0, y: 24, x: -40 },
  show: { opacity: 1, y: 0, x: 0, transition: { type: "tween", duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
} satisfies Variants;

const rightVariants = {
  hidden: { opacity: 0, y: 24, x: 40 },
  show: { opacity: 1, y: 0, x: 0, transition: { type: "tween", duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
} satisfies Variants;

type Props = { side: "left" | "right"; job: Exp };

export default function TimelineCard({ side, job }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const [open, setOpen] = useState(false);

  const preview = job.bullets.slice(0, 1);
  const extra = job.bullets.slice(1);

  return (
    <div className={side === "left" ? "md:col-start-1 md:col-end-2 md:mr-10" : "md:col-start-3 md:col-end-4 md:ml-10"}>
      <motion.article
        ref={ref}
        variants={side === "left" ? leftVariants : rightVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        whileHover={{ y: -6 }}
        whileTap={{ y: -10 }}
        className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
      >
        {/* subtle glow */}
        <motion.span
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.98 }}
          className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl"
          style={{ boxShadow: "0 0 0 1px rgba(34,211,238,.10), 0 18px 50px rgba(34,211,238,.12), 0 0 90px rgba(59,130,246,.10)" }}
        />

        {/* connector from center line */}
        <span
          className={[
            "pointer-events-none absolute top-12 hidden h-px w-10 md:block",
            side === "left"
              ? "right-full mr-3 bg-gradient-to-l from-cyan-400/70 to-transparent"
              : "left-full ml-3 bg-gradient-to-r from-cyan-400/70 to-transparent",
          ].join(" ")}
        />

        <div className="flex items-start gap-4">
          {job.logo && (
            <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10 sm:block">
              <Image src={job.logo} alt={`${job.company} logo`} fill sizes="48px" className="object-cover" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white md:text-xl">{job.role}</h3>
                <p className="text-sm text-slate-300 md:text-base">{job.company}</p>
              </div>
              <div className="text-xs text-slate-300 md:text-sm">
                <div className="flex items-center gap-2">
                  <HiOutlineCalendarDays className="h-4 w-4" />
                  <span>{job.period}</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <HiOutlineMapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {preview.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <p className="text-sm leading-relaxed md:text-[15px]">{b}</p>
                </li>
              ))}
            </ul>

            {extra.length > 0 && (
              <>
                <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} className="overflow-hidden">
                  <ul className="mt-2 space-y-2">
                    {extra.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-200">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <p className="text-sm leading-relaxed md:text-[15px]">{b}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                >
                  {open ? "Show less" : "Show more"}
                </button>
              </>
            )}

            {/* tech chips with glow */}
            {job.tech?.length ? (
              <div className="mt-4 flex flex-wrap gap-2 group/chips">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      relative select-none overflow-hidden
                      rounded-full border border-cyan-400/30 bg-cyan-400/10
                      px-2.5 py-1 text-xs text-cyan-200
                      backdrop-blur-sm
                      transition-all duration-200
                      shadow-[0_0_10px_rgba(34,211,238,.25)]
                      hover:border-cyan-400/60 hover:bg-cyan-400/15 hover:shadow-[0_0_18px_rgba(34,211,238,.55)]
                      focus:outline-none focus:ring-1 focus:ring-cyan-400/60
                      before:content-[''] before:absolute before:inset-[-2px] before:rounded-full
                      before:bg-[radial-gradient(110px_40px_at_50%_50%,rgba(34,211,238,.22),transparent)]
                      before:opacity-0 before:transition-opacity before:duration-300
                      group-hover/chips:before:opacity-100
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </motion.article>
    </div>
  );
}
