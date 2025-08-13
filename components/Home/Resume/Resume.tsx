import ResumeEmbed from "./ResumeEmbed";

export const metadata = {
  title: "Resume — Jai Vignesh Ravichandran",
  description: "View Jai's resume with loader and download.",
};

export default function Resume() {
  return (
    <section  id="resume" className="min-h-screen bg-[#0d0d1f] py-12">
      <div className="mx-auto w-[92%] max-w-6xl">
        <h1 className="mb-6 text-center text-3xl font-extrabold text-white md:text-4xl">
          My <span className="text-cyan-400">Resume</span>
        </h1>

        <ResumeEmbed
          src="/Jai_Vignesh_Resume.pdf"
          fileName="Jai_Vignesh_Ravichandran_Resume.pdf"
        />
      </div>
    </section>
  );
}
