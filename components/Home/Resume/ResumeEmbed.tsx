// components/ResumeEmbed.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiDownload, FiExternalLink, FiRotateCcw } from "react-icons/fi";

type Props = {
  src?: string;      // path to your PDF in /public
  fileName?: string; // download name
};

export default function ResumeEmbed({
  src = "/Jai_Vignesh_Resume.pdf",
  fileName = "Jai_Vignesh_Resume.pdf",
}: Props) {
  const [loading, setLoading] = useState(true);
  const [stuck, setStuck] = useState(false);
  const [key, setKey] = useState(0); // force iframe reload
  const stuckTimer = useRef<number | null>(null);

  // Prefetch so we can drop the loader even if iframe onLoad is flaky
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(src, { cache: "force-cache", method: "GET" });
        if (!cancelled && res.ok) {
          setLoading(false);
        }
      } catch {
        // keep loader; user can click Open
      }
    })();

    // "stuck" hint after 8s
    stuckTimer.current = window.setTimeout(() => setStuck(true), 8000);

    return () => {
      cancelled = true;
      if (stuckTimer.current) window.clearTimeout(stuckTimer.current);
    };
  }, [src, key]);

  const reload = () => {
    setLoading(true);
    setStuck(false);
    if (stuckTimer.current) window.clearTimeout(stuckTimer.current);
    setKey((k) => k + 1);
  };

  // Programmatic OPEN (always works)
  const openInNewTab = () => {
    window.open(src, "_blank", "noopener,noreferrer");
  };

  // Programmatic DOWNLOAD (works even if Content-Disposition is inline)
  const downloadFile = async () => {
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // Fallback if fetch blocked: just navigate (browser will download if allowed)
      const a = document.createElement("a");
      a.href = src;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-lg overflow-hidden">
      {/* Action bar (high z-index so nothing can ever block it) */}
      <div className="relative z-20 flex items-center justify-between gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="text-sm font-semibold text-white">Resume</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={downloadFile}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white hover:border-cyan-400/40 hover:bg-white/10"
            title="Download PDF"
          >
            <FiDownload className="h-4 w-4" />
            <span className="hidden sm:inline">Download</span>
          </button>
          <button
            type="button"
            onClick={openInNewTab}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white hover:border-cyan-400/40 hover:bg-white/10"
            title="Open in new tab"
          >
            <FiExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Open</span>
          </button>
          <button
            type="button"
            onClick={reload}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white hover:border-cyan-400/40 hover:bg-white/10"
            title="Reload"
          >
            <FiRotateCcw className="h-4 w-4" />
            <span className="hidden sm:inline">Reload</span>
          </button>
        </div>
      </div>

      {/* Viewer area */}
      <div className="relative z-10 h-[78vh] md:h-[84vh] bg-[#0f1222]">
        {/* Loader overlay – VISUAL ONLY, never blocks clicks */}
        {loading && (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent" />
            <div className="pointer-events-none flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
              <svg className="h-8 w-8 animate-spin text-cyan-300" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <div className="text-white">Loading resume…</div>
              {stuck && (
                <div className="text-xs text-slate-400">
                  Taking a while?{" "}
                  <button
                    type="button"
                    onClick={openInNewTab}
                    className="pointer-events-auto underline text-cyan-300"
                  >
                    Open in a new tab
                  </button>
                  .
                </div>
              )}
            </div>
          </div>
        )}

        {/* Native viewer inside your frame (browser PDF UI) */}
        <iframe
          key={key}
          title="Resume PDF"
          src={`${src}#view=FitH`}    // suggest fit-width in many engines
          className="h-full w-full"
          // If this fires first, loader clears immediately; otherwise prefetch cleared it already.
          onLoad={() => setLoading(false)}
          loading="eager"
          // Ensure the iframe sits BELOW the toolbar/overlays
          style={{ zIndex: 0 }}
        />
      </div>
    </div>
  );
}
