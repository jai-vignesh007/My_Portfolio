"use client";
import dynamic from "next/dynamic";
import React from "react";
import ParticleBackground from "../Hero/ParticleBackground";
// const ParticleBackground = dynamic(() => import("../Hero/ParticleBackground"), { ssr: false });

const About = () => {
  return (
    <section id="About" className="relative overflow-hidden py-16 md:py-24">
      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* LEFT: Copy */}
          <div>
            <span className="mb-4 inline-block rounded bg-blue-600/20 px-3 py-1 text-xs font-semibold tracking-widest text-blue-300">
              LET ME INTRODUCE MYSELF
            </span>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Architecting Scalable & Resilient Software Systems!
              </span>{" "}
              🚀
            </h2>

            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              Hi, I’m <span className="font-semibold text-white">Jai</span>—a{" "}
              <span className="font-semibold text-white">full-stack & mobile engineer</span>. I design{" "}
              <span className="font-semibold text-cyan-300">React/TypeScript</span> frontends, build{" "}
              <span className="font-semibold text-cyan-300">Java Spring Boot</span> and{" "}
              <span className="font-semibold text-cyan-300">Node/Express</span> microservices, and
              ship to <span className="font-semibold text-cyan-300">AWS/GCP</span> with{" "}
              <span className="font-semibold text-cyan-300">Terraform</span> and{" "}
              <span className="font-semibold text-cyan-300">CI/CD</span>. I care about performance,
              security (<span className="font-semibold text-cyan-300">JWT/RBAC</span>), and clean
              automation. When I’m not scaling backends, I’m crafting{" "}
              <span className="font-semibold text-cyan-300">Flutter</span> apps that feel native.
              Boring deploys, happy users, clear dashboards—that’s the goal. 🚀
            </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
    {
      title: "Microservices & Reliability",
      emoji: "💡",
      summary:
        "Microservices, optimized backend performance, and reliability at scale.",
    },
    {
      title: "Cloud & Automation",
      emoji: "🔥",
      summary:
        "AWS/GCP automation—fault tolerance and smoother DevOps.",
    },
    {
      title: "Built for Speed & Security",
      emoji: "🚀",
      summary:
        "Performance, security, and scalability—by default.",
    },
  ].map((f) => (
    <button
      key={f.title}
      type="button"
      className="
        group relative select-none text-left cursor-pointer
        rounded-xl border border-white/10 bg-white/5 p-4
        transition-all duration-200 will-change-transform

        /* desktop hover */
        hover:-translate-y-1 hover:border-cyan-400/40
        hover:shadow-lg hover:shadow-cyan-500/10

        /* touch/press */
        active:-translate-y-2 active:border-cyan-400/60
        active:shadow-xl active:shadow-cyan-500/20 active:bg-white/10

        /* keyboard */
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-cyan-400/60
      "
    >
      {/* top accent line */}
      <span
        className="
          pointer-events-none absolute inset-x-0 top-0 h-0.5
          bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-cyan-400/50
          opacity-0 transition-opacity duration-200
          group-hover:opacity-100 group-active:opacity-100
        "
      />
      <div className="flex items-start gap-3">
        <span className="text-lg">{f.emoji}</span>
        <div>
          <p className="font-semibold text-white">{f.title}</p>
          <p className="mt-1 text-sm text-slate-200">{f.summary}</p>
        </div>
      </div>
    </button>
  ))}
</div>
            {/* Feature chips (replaces the small, disconnected lines)
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-200">
                  <span className="font-semibold text-white">Microservices</span>, optimized{" "}
                  <span className="font-semibold text-white">backend performance</span>, and{" "}
                  <span className="font-semibold text-white">reliability</span> at scale. 💡
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-200">
                  Automation & cloud infra on <span className="font-semibold text-white">AWS/GCP</span>
                  —fault tolerance + smoother <span className="font-semibold text-white">DevOps</span>. 🔥
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-200">
                  Built for <span className="font-semibold text-white">performance</span>,{" "}
                  <span className="font-semibold text-white">security</span>, and{" "}
                  <span className="font-semibold text-white">scalability</span>. 🚀
                </p>
              </div>
            </div> */}
          </div>

          {/* RIGHT: Avatar — stays on the right on md+ */}
          <div className="order-first justify-self-center md:order-none md:justify-self-end">
            <div className="relative h-56 w-56 rounded-full border-4 border-blue-600/40 bg-blue-500/10 md:h-64 md:w-64 lg:h-72 lg:w-72">
              {/* Replace with your image path */}
              <img
                src="/images/AboutMyPic.jpg"
                alt="Jai Vignesh avatar"
                className="h-full w-full rounded-full object-cover"
              />
              <div className="absolute -inset-1 -z-10 rounded-full bg-blue-500/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
