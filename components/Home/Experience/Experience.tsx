"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineFlag } from "react-icons/hi2";
import TimelineCard from "./TimeLineCard";
import { EXPERIENCE } from "./data";
import ParticleBackground from "../Hero/ParticleBackground";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1.2", "end 0.2"],
  });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const endOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const endScale = useTransform(scrollYProgress, [0.95, 1], [0.8, 1]);

  return (
    <section id="experience" className="relative py-16 md:py-24">
       <ParticleBackground/>
      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        
        <h2 className="mb-10 text-center text-3xl font-extrabold text-white md:mb-14 md:text-5xl">
          Work <span className="text-cyan-400">Experience</span>
        </h2>

        <div ref={ref} className="relative">
          {/* center line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />
          {/* progress line */}
          <motion.div
            style={{ scaleY: line }}
            className="pointer-events-none absolute left-1/2 top-0 hidden origin-top h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 md:block"
          />

          <ul className="space-y-16 md:space-y-24">
            {EXPERIENCE.map((job, i) => (
              <li
                key={job.company + i}
                className="relative grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_56px_1fr]"
              >
                {/* milestone bubble */}
                <div className="relative hidden md:col-start-2 md:flex md:justify-center">
                  <span className="relative mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 text-white">
                    <span className="absolute -z-10 h-16 w-16 rounded-full bg-cyan-500/15 blur-xl" />
                    <HiOutlineBriefcase className="h-5 w-5" />
                  </span>
                </div>

                {/* alternating card */}
                <TimelineCard side={i % 2 === 0 ? "left" : "right"} job={job} />
              </li>
            ))}
          </ul>
          
        </div>
        <div ref={ref} className="relative pb-16">
            {/* End marker */}
            <motion.div
              style={{ opacity: endOpacity, scale: endScale }}
              className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 md:block"
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 text-white">
                <span className="absolute -z-10 h-16 w-16 rounded-full bg-cyan-500/15 blur-xl" />
                <HiOutlineFlag className="h-5 w-5" />
              </span>
              <span className="mt-2 block text-center text-xs text-slate-400">
                TBC
              </span>
            </motion.div>
          </div>
      </div>
    </section>
  );
}
